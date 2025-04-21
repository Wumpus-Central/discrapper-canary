n.d(t, { G: () => x }), n(35282);
var r = n(36793),
    i = n(481060),
    l = n(668781),
    s = n(80932),
    a = n(426642),
    o = n(626135),
    c = n(176354),
    d = n(956664),
    u = n(185923),
    m = n(981631),
    g = n(388032),
    p = n(413135).Buffer;
let h = (e, t, n, r) => (
        o.default.track(m.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
            guild_id: n,
            file_size: t,
            upload_id: r
        }),
        a.d.TOO_BIG
    ),
    f = (e, t, n) => {
        o.default.track(m.rMx.EMOJI_FILE_RESIZED, {
            is_animated: !1,
            file_type: e.type.split('/').pop(),
            original_file_size_bytes: e.size,
            resized_file_size_bytes: (0, d.QB)(t),
            resized_file_too_big: n
        });
    },
    x = async (e) => {
        let { data: t, file: n, guildId: d, uploadId: x, roles: b, image: j, hideErrorModal: _ } = e,
            v = c.ZP.sanitizeEmojiName(n.name.split('.')[0]);
        if (c.ZP.isFileTooBig(n)) {
            if ('image/gif' === n.type) return h(n.name, n.size, d, x);
            else if (null != j) {
                let e;
                t = (0, r.Ae)(j, 128, 128);
                try {
                    e = c.ZP.isDataTooBig(t);
                } catch (e) {
                    return h(n.name, n.size, d, x);
                }
                if ((f(n, t, e), e)) return h(n.name, n.size, d, x);
            }
        }
        try {
            await (0, s.rS)({
                guildId: d,
                image: t,
                name: v,
                roles: b
            }),
                o.default.track(m.rMx.EMOJI_UPLOAD_COMPLETED, {
                    guild_id: d,
                    upload_id: x
                }),
                (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.r0w9m5), i.ToastType.SUCCESS));
        } catch (s) {
            let e,
                n,
                { body: r, status: i } = s;
            return (
                null != r &&
                    (r.code === m.evJ.TOO_MANY_EMOJI
                        ? ((e = g.intl.string(g.t['jP/Rqq'])), (n = a.d.TOO_MANY_EMOJI))
                        : r.code === m.evJ.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = g.intl.string(g.t['6v5dPz'])), (n = a.d.TOO_MANY_ANIMATED_EMOJI))
                          : null != r.image || r.code === m.evJ.INVALID_FILE_ASSET_SIZE
                            ? (o.default.track(m.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: d,
                                  file_size: p.byteLength(t),
                                  upload_id: x
                              }),
                              (e = g.intl.formatToPlainString(g.t.kIO9j4, { maxSize: u.xG })),
                              (n = a.d.TOO_BIG))
                            : (null != r.image || r.code === m.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = a.d.RESIZE_GIF)),
                429 === i && ((e = g.intl.string(g.t['Whhv4+'])), (n = a.d.RATE_LIMIT)),
                null == e ||
                    _ ||
                    l.Z.show({
                        title: g.intl.string(g.t.iufib2),
                        body: e
                    }),
                n
            );
        }
    };
