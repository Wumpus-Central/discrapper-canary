n.d(t, {
    G: function () {
        return p;
    }
});
var i = n(36793),
    r = n(668781),
    l = n(80932),
    a = n(426642),
    s = n(626135),
    o = n(176354),
    c = n(956664),
    d = n(185923),
    u = n(981631),
    m = n(388032),
    h = n(413135).Buffer;
let g = (e, t, n, i) => (
        s.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
            guild_id: n,
            file_size: t,
            upload_id: i
        }),
        a.d.TOO_BIG
    ),
    x = (e, t, n) => {
        s.default.track(u.rMx.EMOJI_FILE_RESIZED, {
            is_animated: !1,
            file_type: e.type.split('/').pop(),
            original_file_size_bytes: e.size,
            resized_file_size_bytes: (0, c.QB)(t),
            resized_file_too_big: n
        });
    },
    p = async (e) => {
        let { data: t, file: n, guildId: c, uploadId: p, roles: f, image: C, hideErrorModal: v } = e,
            _ = o.ZP.sanitizeEmojiName(n.name.split('.')[0]);
        if (o.ZP.isFileTooBig(n)) {
            if ('image/gif' === n.type) return g(n.name, n.size, c, p);
            if (null != C) {
                let e;
                t = (0, i.Ae)(C, 128, 128);
                try {
                    e = o.ZP.isDataTooBig(t);
                } catch (e) {
                    return g(n.name, n.size, c, p);
                }
                if ((x(n, t, e), e)) return g(n.name, n.size, c, p);
            }
        }
        try {
            await (0, l.rS)({
                guildId: c,
                image: t,
                name: _,
                roles: f
            }),
                s.default.track(u.rMx.EMOJI_UPLOAD_COMPLETED, {
                    guild_id: c,
                    upload_id: p
                });
        } catch (o) {
            let e, n;
            let { body: i, status: l } = o;
            return (
                null != i &&
                    (i.code === u.evJ.TOO_MANY_EMOJI
                        ? ((e = m.intl.string(m.t['jP/Rqq'])), (n = a.d.TOO_MANY_EMOJI))
                        : i.code === u.evJ.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = m.intl.string(m.t['6v5dPz'])), (n = a.d.TOO_MANY_ANIMATED_EMOJI))
                          : null != i.image || i.code === u.evJ.INVALID_FILE_ASSET_SIZE
                            ? (s.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: c,
                                  file_size: h.byteLength(t),
                                  upload_id: p
                              }),
                              (e = m.intl.formatToPlainString(m.t.kIO9j4, { maxSize: d.xG })),
                              (n = a.d.TOO_BIG))
                            : (null != i.image || i.code === u.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (n = a.d.RESIZE_GIF)),
                429 === l && ((e = m.intl.string(m.t['Whhv4+'])), (n = a.d.RATE_LIMIT)),
                null != e &&
                    !v &&
                    r.Z.show({
                        title: m.intl.string(m.t.iufib2),
                        body: e
                    }),
                n
            );
        }
    };
