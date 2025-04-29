n.d(t, {
    h: () => d,
    p: () => u
}),
    n(388685),
    n(642613);
var i = n(73800),
    r = n(913527),
    s = n.n(r),
    l = n(442837),
    a = n(314897),
    o = n(673096),
    c = n(388032);
function d() {
    let e = (0, l.cj)([o.Z], () => o.Z.getSessions());
    return i.useMemo(() => {
        let t = [...e],
            n = null,
            i = a.default.getAuthSessionIdHash();
        if (null != i) {
            let e = t.findIndex((e) => e.id_hash === i);
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
    return (Date.now() - e.valueOf()) / 1000 / 60 / 60 < 1 ? c.intl.string(c.t.TXCmfH) : s()(e).fromNow();
}
