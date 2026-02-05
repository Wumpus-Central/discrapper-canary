n.d(e, { Y: () => u, r: () => d });
var i = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(311907),
    l = n(961350),
    c = n(620733),
    o = n(985018);
function d() {
    let t = (0, r.cf)([c.A], () => c.A.getSessions());
    return i.useMemo(() => {
        let e = [...t],
            n = null,
            i = l.default.getAuthSessionIdHash();
        if (null != i) {
            let t = e.findIndex((t) => t.id_hash === i);
            t >= 0 && (n = e.splice(t, 1)[0]);
        }
        return (
            e.sort((t, e) => e.approx_last_used_time.valueOf() - t.approx_last_used_time.valueOf()),
            { currentSession: n, otherSessions: e }
        );
    }, [t]);
}
function u(t) {
    return (Date.now() - t.valueOf()) / 1e3 / 60 / 60 < 1 ? o.intl.string(o.t.TXCmfL) : a()(t).fromNow();
}
