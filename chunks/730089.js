r.d(e, { G: () => p }), r(35282);
var n = r(36793),
    i = r(481060),
    l = r(668781),
    a = r(80932),
    o = r(426642),
    s = r(626135),
    c = r(176354),
    u = r(956664),
    d = r(185923),
    f = r(981631),
    g = r(388032),
    h = r(413135).Buffer;
let O = (t, e, r, n) => (
        s.default.track(f.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
            guild_id: r,
            file_size: e,
            upload_id: n
        }),
        o.d.TOO_BIG
    ),
    _ = (t, e, r) => {
        s.default.track(f.rMx.EMOJI_FILE_RESIZED, {
            is_animated: !1,
            file_type: t.type.split('/').pop(),
            original_file_size_bytes: t.size,
            resized_file_size_bytes: (0, u.QB)(e),
            resized_file_too_big: r
        });
    },
    p = async (t) => {
        let { data: e, file: r, guildId: u, uploadId: p, roles: E, image: y, hideErrorModal: w } = t,
            I = c.ZP.sanitizeEmojiName(r.name.split('.')[0]);
        if (c.ZP.isFileTooBig(r)) {
            if ('image/gif' === r.type || 'image/webp' === r.type || 'image/avif' === r.type) return O(r.name, r.size, u, p);
            else if (null != y) {
                let t;
                e = (0, n.Ae)(y, 128, 128);
                try {
                    t = c.ZP.isDataTooBig(e);
                } catch (t) {
                    return O(r.name, r.size, u, p);
                }
                if ((_(r, e, t), t)) return O(r.name, r.size, u, p);
            }
        }
        try {
            await (0, a.rS)({
                guildId: u,
                image: e,
                name: I,
                roles: E
            }),
                s.default.track(f.rMx.EMOJI_UPLOAD_COMPLETED, {
                    guild_id: u,
                    upload_id: p
                }),
                (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.r0w9m5), i.ToastType.SUCCESS));
        } catch (a) {
            let t,
                r,
                { body: n, status: i } = a;
            return (
                null != n &&
                    (n.code === f.evJ.TOO_MANY_EMOJI
                        ? ((t = g.intl.string(g.t['jP/Rqq'])), (r = o.d.TOO_MANY_EMOJI))
                        : n.code === f.evJ.TOO_MANY_ANIMATED_EMOJI
                          ? ((t = g.intl.string(g.t['6v5dPz'])), (r = o.d.TOO_MANY_ANIMATED_EMOJI))
                          : null != n.image || n.code === f.evJ.INVALID_FILE_ASSET_SIZE
                            ? (s.default.track(f.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: u,
                                  file_size: h.byteLength(e),
                                  upload_id: p
                              }),
                              (t = g.intl.formatToPlainString(g.t.kIO9j4, { maxSize: d.xG })),
                              (r = o.d.TOO_BIG))
                            : (null != n.image || n.code === f.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (r = o.d.RESIZE_GIF)),
                429 === i && ((t = g.intl.string(g.t['Whhv4+'])), (r = o.d.RATE_LIMIT)),
                null == t ||
                    w ||
                    l.Z.show({
                        title: g.intl.string(g.t.iufib2),
                        body: t
                    }),
                r
            );
        }
    };
