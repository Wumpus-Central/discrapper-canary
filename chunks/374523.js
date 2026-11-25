var l = n(582128),
    r = n(855986),
    a = n(233470),
    i = n(260498),
    s = n(661106);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    project: t,
                    unavailable: n,
                    creating: o,
                } = (0, r.cf)(
                    [i.Ay],
                    () => ({ project: i.Ay.getProject(e), unavailable: (0, a.su)(e), creating: (0, s.Du)(e) }),
                    [e],
                ),
                u = null == t && !o;
            return (
                l.useEffect(() => {
                    u && (0, a.tF)([e]);
                }, [u, e]),
                { project: t, settled: null != t || n }
            );
        },
    },
);
