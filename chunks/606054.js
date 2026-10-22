n.d(t, { A: () => u });
var l = n(582128),
    r = n(17928),
    s = n(793480),
    a = n(371169),
    o = n(260498);
function u(e, t, n) {
    let u = (0, s.m0)({ guildId: t ?? void 0, location: "ConjureAppHoverCard" }) && null != t;
    l.useEffect(() => {
        n && null != e && (0, a.tF)([e]);
    }, [n, e]);
    let { project: i, isUnavailable: d } = (0, r.cf)(
        [o.Ay],
        () => ({ project: null != e ? (o.Ay.getProject(e) ?? null) : null, isUnavailable: null != e && (0, a.su)(e) }),
        [e],
    );
    return l.useMemo(
        () => ({
            project: i,
            remixProject: u && null != i && (0, o.H_)(i) ? i : null,
            isSettled: null == e || null != i || d,
        }),
        [i, u, e, d],
    );
}
