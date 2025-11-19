n.d(t, { v: () => u });
var r = n(473749),
    i = n(442837),
    a = n(81063),
    o = n(921948),
    s = n(257683),
    l = n(139212);
let c = (e) => {
        var t, n, r, i;
        let { messageId: s, presenceActivity: c, application: u } = e,
            d = l.Z.getCoverImageURL({ messageId: s });
        if (null === d)
            return {
                cachedImageURL: null,
                imageURL: null,
            };
        let f = 600 * (0, o.Z)(),
            _ =
                null !=
                (i =
                    null !=
                    (r =
                        null !=
                        (n =
                            (null == c || null == (t = c.assets) ? void 0 : t.invite_cover_image) != null
                                ? (0, a.xF)(c.application_id, c.assets.invite_cover_image, f)
                                : null)
                            ? n
                            : d)
                        ? r
                        : u.getCoverImageURL(f))
                    ? i
                    : null;
        return {
            cachedImageURL: d,
            imageURL: _,
        };
    },
    u = (e) => {
        let { messageId: t, presenceActivity: n, application: a } = e,
            { cachedImageURL: o, imageURL: u } = (0, i.cj)(
                [l.Z],
                () =>
                    c({
                        messageId: t,
                        presenceActivity: n,
                        application: a,
                    }),
                [t, n, a],
            );
        return (
            r.useEffect(() => {
                o !== u &&
                    s.s({
                        messageId: t,
                        coverImageURL: u,
                    });
            }, [o, u, t]),
            u
        );
    };
