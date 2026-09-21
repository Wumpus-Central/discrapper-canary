r.d(t, { A: () => d });
var i = r(582128),
    n = r(17928),
    l = r(889227),
    s = r(994500),
    a = r(354670),
    o = r(378135),
    c = r(202541);
function d() {
    let e = (0, o.k)(c.Dw),
        t = (0, n.bG)([a.A], () => a.A.getReferrer(e?.trialId)),
        r = (0, n.bG)([s.A], () => null == t || s.A.isBlockedOrIgnored(t.id));
    return i.useMemo(() => (r || null == t ? null : new l.A(t)), [t, r]);
}
