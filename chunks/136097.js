n.d(t, {
    h: () => d,
    p: () => u
}),
    n(47120),
    n(230036);
var r = n(192379),
    i = n(913527),
    s = n.n(i),
    a = n(442837),
    l = n(314897),
    o = n(673096),
    c = n(388032);
function d() {
    let e = (0, a.cj)([o.Z], () => o.Z.getSessions());
    return r.useMemo(() => {
        let t = [...e],
            n = null,
            r = l.default.getAuthSessionIdHash();
        if (null != r) {
            let e = t.findIndex((e) => e.id_hash === r);
            e >= 0 && (n = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            {
                currentSession: n,
                otherSessions: t
            }
        );
    }, [e]);
}
function u(e) {
    return (Date.now() - e.valueOf()) / 1000 / 60 / 60 < 1 ? c.NW.string(c.t.TXCmfH) : s()(e).fromNow();
}
