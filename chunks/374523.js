var l = n(582128),
    r = n(855986),
    i = n(371169),
    a = n(260498);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { project: t, unavailable: n } = (0, r.cf)(
                    [a.Ay],
                    () => ({ project: a.Ay.getProject(e), unavailable: (0, i.su)(e) }),
                    [e],
                ),
                s = null == t;
            return (
                l.useEffect(() => {
                    s && (0, i.tF)([e]);
                }, [s, e]),
                { project: t, settled: null != t || n }
            );
        },
    },
);
