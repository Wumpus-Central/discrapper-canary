var i = c(582128),
    E = c(855986),
    _ = c(253932),
    a = c(403362),
    T = c(382483),
    r = c(385113);
c.d(
    t,
    {},
    {
        A: function (e) {
            let t = _.Q_.useSetting(),
                c = (0, E.bG)([r.A], () => r.A.getFeaturedFetchState()),
                f = (0, E.bG)([r.A], () => r.A.getDeveloperFetchState()),
                s = (0, E.yK)([r.A], () => e.filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED)),
                d = (0, E.yK)([r.A], () => e.map((e) => r.A.getConfig(e)).filter(a.Vq));
            return (
                i.useEffect(() => {
                    (0, T.Wq)().catch(() => {});
                }, []),
                i.useEffect(() => {
                    t && (0, T.i$)().catch(() => {});
                }, [t]),
                i.useEffect(() => {
                    if (
                        c !== r.e.NOT_FETCHED &&
                        c !== r.e.FETCHING &&
                        (!t || (f !== r.e.NOT_FETCHED && f !== r.e.FETCHING))
                    )
                        for (let e of s) (0, T.un)(e).catch(() => {});
                }, [f, c, s, t]),
                d
            );
        },
    },
);
