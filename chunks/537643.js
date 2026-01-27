n.d(t, {
    I: () => c,
});
var r = n(64700),
    i = n(311907),
    l = n(139675),
    a = n(835517),
    s = n(729394),
    o = n(216184);
let c = (e) => {
    let { messageId: t, presenceActivity: n, application: c } = e,
        { cachedImageURL: u, imageURL: d } = (0, i.cf)(
            [o.A],
            () =>
                ((e) => {
                    var t, n, r, i;
                    let { messageId: s, presenceActivity: c, application: u } = e,
                        d = o.A.getCoverImageURL({
                            messageId: s,
                        });
                    if (null === d)
                        return {
                            cachedImageURL: null,
                            imageURL: null,
                        };
                    let p = 600 * (0, a.A)(),
                        m =
                            null !=
                            (t =
                                null !=
                                (n =
                                    null !=
                                    (r =
                                        (null == c || null == (i = c.assets) ? void 0 : i.invite_cover_image) != null
                                            ? (0, l.uD)(c.application_id, c.assets.invite_cover_image, p)
                                            : null)
                                        ? r
                                        : d)
                                    ? n
                                    : u.getCoverImageURL(p))
                                ? t
                                : null;
                    return {
                        cachedImageURL: d,
                        imageURL: m,
                    };
                })({
                    messageId: t,
                    presenceActivity: n,
                    application: c,
                }),
            [t, n, c],
        );
    return (
        r.useEffect(() => {
            u !== d &&
                s.K({
                    messageId: t,
                    coverImageURL: d,
                });
        }, [u, d, t]),
        d
    );
};
