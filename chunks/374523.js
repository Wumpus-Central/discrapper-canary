var l = n(582128),
    r = n(855986),
    i = n(233470),
    a = n(260498),
    s = n(661106);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    project: t,
                    unavailable: n,
                    creating: u,
                } = (0, r.cf)(
                    [a.Ay],
                    () => ({ project: a.Ay.getProject(e), unavailable: (0, i.su)(e), creating: (0, s.Du)(e) }),
                    [e],
                ),
                o = null == t && !u;
            return (
                l.useEffect(() => {
                    o && (0, i.tF)([e]);
                }, [o, e]),
                { project: t, settled: null != t || n }
            );
        },
    },
);
