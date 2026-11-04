var a = l(582128),
    n = l(855986),
    s = l(253932),
    i = l(403362),
    r = l(382483),
    o = l(385113);
l.d(
    t,
    {},
    {
        A: function (e) {
            let t = s.Q_.useSetting(),
                l = (0, n.bG)([o.A], () => o.A.getFeaturedFetchState()),
                u = (0, n.bG)([o.A], () => o.A.getDeveloperFetchState()),
                c = (0, n.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
                m = (0, n.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(i.Vq));
            return (
                a.useEffect(() => {
                    (0, r.Wq)().catch(() => {});
                }, []),
                a.useEffect(() => {
                    t && (0, r.i$)().catch(() => {});
                }, [t]),
                a.useEffect(() => {
                    if (
                        l !== o.e.NOT_FETCHED &&
                        l !== o.e.FETCHING &&
                        (!t || (u !== o.e.NOT_FETCHED && u !== o.e.FETCHING))
                    )
                        for (let e of c) (0, r.un)(e).catch(() => {});
                }, [u, l, c, t]),
                m
            );
        },
    },
);
