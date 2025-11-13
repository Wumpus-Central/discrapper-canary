n.d(t, { G: () => h }), n(35282);
var r = n(36793),
    i = n(481060),
    l = n(668781),
    a = n(80932),
    s = n(426642),
    o = n(626135),
    c = n(176354),
    d = n(956664),
    u = n(185923),
    g = n(981631),
    m = n(388032),
    p = n(413135).Buffer;
let f = (e, t, n, r) => (
        o.default.track(g.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
            guild_id: n,
            file_size: t,
            upload_id: r,
        }),
        s.d.TOO_BIG
    ),
    h = async (e) => {
        let {
                data: t,
                file: n,
                guildId: h,
                uploadId: b,
                roles: x,
                image: j,
                hideErrorModal: _,
                analyticsLocation: v,
            } = e,
            O = c.ZP.sanitizeEmojiName(n.name.split(".")[0]);
        if (c.ZP.isFileTooBig(n)) {
            if ("image/gif" === n.type || "image/webp" === n.type || "image/avif" === n.type)
                return f(n.name, n.size, h, b);
            else if (null != j) {
                var C, y;
                let e;
                t = (0, r.Ae)(j, 128, 128);
                try {
                    e = c.ZP.isDataTooBig(t);
                } catch (e) {
                    return f(n.name, n.size, h, b);
                }
                if (
                    ((C = t),
                    (y = e),
                    o.default.track(g.rMx.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: n.type.split("/").pop(),
                        original_file_size_bytes: n.size,
                        resized_file_size_bytes: (0, d.QB)(C),
                        resized_file_too_big: y,
                    }),
                    e)
                )
                    return f(n.name, n.size, h, b);
            }
        }
        try {
            let e = await (0, a.rS)({
                guildId: h,
                image: t,
                name: O,
                roles: x,
                analyticsLocation: v,
            });
            return (
                o.default.track(g.rMx.EMOJI_UPLOAD_COMPLETED, {
                    guild_id: h,
                    upload_id: b,
                }),
                (0, i.showToast)((0, i.createToast)(m.intl.string(m.t["r0w9m/"]), i.ToastType.SUCCESS)),
                e
            );
        } catch (a) {
            let e,
                n,
                { body: r, status: i } = a;
            return (
                null != r &&
                    (r.code === g.evJ.TOO_MANY_EMOJI
                        ? ((e = m.intl.string(m.t["jP/Rqm"])), (n = s.d.TOO_MANY_EMOJI))
                        : r.code === g.evJ.TOO_MANY_ANIMATED_EMOJI
                          ? ((e = m.intl.string(m.t["6v5dP/"])), (n = s.d.TOO_MANY_ANIMATED_EMOJI))
                          : null != r.image || r.code === g.evJ.INVALID_FILE_ASSET_SIZE
                            ? (o.default.track(g.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                                  guild_id: h,
                                  file_size: p.byteLength(t),
                                  upload_id: b,
                              }),
                              (e = m.intl.formatToPlainString(m.t.kIO9jy, { maxSize: u.xG })),
                              (n = s.d.TOO_BIG))
                            : (null != r.image || r.code === g.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) &&
                              (n = s.d.RESIZE_GIF)),
                429 === i && ((e = m.intl.string(m.t.Whhv4w)), (n = s.d.RATE_LIMIT)),
                null == e ||
                    _ ||
                    l.Z.show({
                        title: m.intl.string(m.t.iufib1),
                        body: e,
                    }),
                n
            );
        }
    };
