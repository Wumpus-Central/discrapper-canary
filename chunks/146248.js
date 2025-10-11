n.d(t, { O: () => s });
var r = n(81063),
    i = n(921948),
    a = n(890280),
    o = n(139212);
let s = (e) => {
    var t, n, s, l;
    let { messageId: c, presenceActivity: u, application: d } = e,
        f = o.Z.getCoverImageURL({ messageId: c });
    if (null === f) return null;
    let _ = 600 * (0, i.Z)(),
        p =
            null !=
            (l =
                null !=
                (s =
                    null !=
                    (n =
                        (null == u || null == (t = u.assets) ? void 0 : t.invite_cover_image) != null
                            ? (0, r.xF)(u.application_id, u.assets.invite_cover_image, _)
                            : null)
                        ? n
                        : f)
                    ? s
                    : d.getCoverImageURL(_))
                ? l
                : null;
    return (
        f !== p &&
            a.s({
                messageId: c,
                coverImageURL: p,
            }),
        p
    );
};
