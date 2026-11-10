var l = n(582128),
    r = n(855986),
    a = n(233470),
    i = n(260498);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { project: t, unavailable: n } = (0, r.cf)(
                    [i.Ay],
                    () => ({ project: i.Ay.getProject(e), unavailable: (0, a.su)(e) }),
                    [e],
                ),
                s = null == t;
            return (
                l.useEffect(() => {
                    s && (0, a.tF)([e]);
                }, [s, e]),
                { project: t, settled: null != t || n }
            );
        },
    },
);
