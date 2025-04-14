n.d(t, { G: () => f }), n(35282);
var r = n(36793),
    i = n(668781),
    s = n(80932),
    l = n(426642),
    a = n(626135),
    o = n(176354),
    c = n(956664),
    d = n(185923),
    u = n(981631),
    m = n(388032),
    g = n(413135).Buffer;
let p = (e, t, n, r) => (
        a.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
            guild_id: n,
            file_size: t,
            upload_id: r
        }),
        l.d.TOO_BIG
    ),
    h = (e, t, n) => {
        a.default.track(u.rMx.EMOJI_FILE_RESIZED, {
            is_animated: !1,
            file_type: e.type.split('/').pop(),
            original_file_size_bytes: e.size,
            resized_file_size_bytes: (0, c.QB)(t),
            resized_file_too_big: n
        });
    },
    f = async (e) => {
        let { data: t, file: n, guildId: c, uploadId: f, roles: x, image: b, hideErrorModal: j } = e,
            N = o.ZP.sanitizeEmojiName(n.name.split('.')[0]);
        if (o.ZP.isFileTooBig(n)) {
            if ('image/gif' === n.type) return p(n.name, n.size, c, f);
            else if (null != b) {
                let e;
                t = (0, r.Ae)(b, 128, 128);
                try {
                    e = o.ZP.isDataTooBig(t);
                } catch (e) {
                    return p(n.name, n.size, c, f);
                }
                if ((h(n, t, e), e)) return p(n.name, n.size, c, f);
            }
        }
        try {
            await (0, s.rS)({
                guildId: c,
                image: t,
                name: N,
                roles: x
            }),
                a.default.track(u.rMx.EMOJI_UPLOAD_COMPLETED, {
                    guild_id: c,
                    upload_id: f
                });
        } catch (o) {
            let e,
                n,
                { body: r, status: s } = o;
            return (
                null != r &&
                    (r.code === u.evJ.TOO_MANY_EMOJI
                        ? ((e = m.NW.string(m.t['jP/Rqq'])), (n = l.d.TOO_MANY_EMOJI))
                        : r.code === u.evJ.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = m.NW.string(m.t['6v5dPz'])), (n = l.d.TOO_MANY_ANIMATED_EMOJI))
                          : null != r.image || r.code === u.evJ.INVALID_FILE_ASSET_SIZE
                            ? (a.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: c,
                                  file_size: g.byteLength(t),
                                  upload_id: f
                              }),
                              (e = m.NW.formatToPlainString(m.t.kIO9j4, { maxSize: d.xG })),
                              (n = l.d.TOO_BIG))
                            : (null != r.image || r.code === u.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = l.d.RESIZE_GIF)),
                429 === s && ((e = m.NW.string(m.t['Whhv4+'])), (n = l.d.RATE_LIMIT)),
                null == e ||
                    j ||
                    i.Z.show({
                        title: m.NW.string(m.t.iufib2),
                        body: e
                    }),
                n
            );
        }
    };
