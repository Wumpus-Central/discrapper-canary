r.d(t, { A: () => c });
var i = r(582128),
    n = r(17928),
    s = r(889227),
    l = r(994500),
    a = r(354670),
    u = r(378135),
    o = r(202541);
function c() {
    let e = (0, u.k)(o.Dw),
        t = (0, n.bG)([a.A], () => a.A.getReferrer(e?.trialId)),
        r = (0, n.bG)([l.A], () => null == t || l.A.isBlockedOrIgnored(t.id));
    return i.useMemo(() => (r || null == t ? null : new s.A(t)), [t, r]);
}
