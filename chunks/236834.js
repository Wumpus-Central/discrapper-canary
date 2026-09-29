r.d(t, { A: () => d });
var s = r(582128),
    i = r(17928),
    l = r(889227),
    n = r(994500),
    a = r(354670),
    c = r(378135),
    u = r(202541);
function d() {
    let e = (0, c.k)(u.Dw),
        t = (0, i.bG)([a.A], () => a.A.getReferrer(e?.trialId)),
        r = (0, i.bG)([n.A], () => null == t || n.A.isBlockedOrIgnored(t.id));
    return s.useMemo(() => (r || null == t ? null : new l.A(t)), [t, r]);
}
