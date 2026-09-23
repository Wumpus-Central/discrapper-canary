r.d(t, { A: () => c });
var n = r(582128),
    i = r(17928),
    l = r(889227),
    a = r(994500),
    s = r(354670),
    o = r(378135),
    u = r(202541);
function c() {
    let e = (0, o.k)(u.Dw),
        t = (0, i.bG)([s.A], () => s.A.getReferrer(e?.trialId)),
        r = (0, i.bG)([a.A], () => null == t || a.A.isBlockedOrIgnored(t.id));
    return n.useMemo(() => (r || null == t ? null : new l.A(t)), [t, r]);
}
