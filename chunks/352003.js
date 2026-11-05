var a = c(582128),
    f = c(855986),
    i = c(253932),
    u = c(403362),
    h = c(382483),
    r = c(385113);
c.d(
    t,
    {},
    {
        A: function (e) {
            let t = i.Q_.useSetting(),
                c = (0, f.bG)([r.A], () => r.A.getFeaturedFetchState()),
                s = (0, f.bG)([r.A], () => r.A.getDeveloperFetchState()),
                E = (0, f.yK)([r.A], () => e.filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED)),
                p = (0, f.yK)([r.A], () => e.map((e) => r.A.getConfig(e)).filter(u.Vq));
            return (
                a.useEffect(() => {
                    (0, h.Wq)().catch(() => {});
                }, []),
                a.useEffect(() => {
                    t && (0, h.i$)().catch(() => {});
                }, [t]),
                a.useEffect(() => {
                    if (
                        c !== r.e.NOT_FETCHED &&
                        c !== r.e.FETCHING &&
                        (!t || (s !== r.e.NOT_FETCHED && s !== r.e.FETCHING))
                    )
                        for (let e of E) (0, h.un)(e).catch(() => {});
                }, [s, c, E, t]),
                p
            );
        },
    },
);
