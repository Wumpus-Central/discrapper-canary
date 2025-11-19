n.d(t, {
    h: () => u,
    p: () => d,
}),
    n(388685),
    n(642613);
var r = n(473749),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(314897),
    l = n(673096),
    c = n(388032);
function u() {
    let e = (0, o.cj)([l.Z], () => l.Z.getSessions());
    return r.useMemo(() => {
        let t = [...e],
            n = null,
            r = s.default.getAuthSessionIdHash();
        if (null != r) {
            let e = t.findIndex((e) => e.id_hash === r);
            e >= 0 && (n = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            {
                currentSession: n,
                otherSessions: t,
            }
        );
    }, [e]);
}
function d(e) {
    return (Date.now() - e.valueOf()) / 1000 / 60 / 60 < 1 ? c.intl.string(c.t.TXCmfL) : a()(e).fromNow();
}
