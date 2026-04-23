n.d(e, { Y: () => u, r: () => o });
var s = n(64700),
    i = n(989349),
    a = n.n(i),
    r = n(311907),
    l = n(961350),
    c = n(620733),
    d = n(985018);
function o() {
    let t = (0, r.cf)([c.A], () => c.A.getSessions());
    return s.useMemo(() => {
        let e = [...t],
            n = null,
            s = l.default.getAuthSessionIdHash();
        if (null != s) {
            let t = e.findIndex((t) => t.id_hash === s);
            t >= 0 && (n = e.splice(t, 1)[0]);
        }
        return (
            e.sort((t, e) => e.approx_last_used_time.valueOf() - t.approx_last_used_time.valueOf()),
            { currentSession: n, otherSessions: e }
        );
    }, [t]);
}
function u(t) {
    return (Date.now() - t.valueOf()) / 1e3 / 60 / 60 < 1 ? d.intl.string(d.t.TXCmfL) : a()(t).fromNow();
}
