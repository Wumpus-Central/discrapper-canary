n.d(t, { I: () => u });
var r = n(64700),
    i = n(311907),
    a = n(139675),
    s = n(835517),
    o = n(729394),
    l = n(216184);
let c = (e) => {
        var t, n, r, i;
        let { messageId: o, presenceActivity: c, application: u } = e,
            d = l.A.getCoverImageURL({ messageId: o });
        if (null === d)
            return {
                cachedImageURL: null,
                imageURL: null,
            };
        let f = 600 * (0, s.A)(),
            p =
                null !=
                (t =
                    null !=
                    (n =
                        null !=
                        (r =
                            (null == c || null == (i = c.assets) ? void 0 : i.invite_cover_image) != null
                                ? (0, a.uD)(c.application_id, c.assets.invite_cover_image, f)
                                : null)
                            ? r
                            : d)
                        ? n
                        : u.getCoverImageURL(f))
                    ? t
                    : null;
        return {
            cachedImageURL: d,
            imageURL: p,
        };
    },
    u = (e) => {
        let { messageId: t, presenceActivity: n, application: a } = e,
            { cachedImageURL: s, imageURL: u } = (0, i.cf)(
                [l.A],
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
                s !== u &&
                    o.K({
                        messageId: t,
                        coverImageURL: u,
                    });
            }, [s, u, t]),
            u
        );
    };
