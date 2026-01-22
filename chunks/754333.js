n.d(t, {
    Y: () => d,
    r: () => u,
}),
    n(896048),
    n(638769);
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(961350),
    l = n(620733),
    c = n(985018);

function u() {
    let e = (0, s.cf)([l.A], () => l.A.getSessions());
    return r.useMemo(() => {
        let t = [...e],
            n = null,
            r = o.default.getAuthSessionIdHash();
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
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? c.intl.string(c.t.TXCmfL) : a()(e).fromNow();
}
