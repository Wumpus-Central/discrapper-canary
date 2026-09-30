t.d(r, { A: () => d });
var i = t(582128),
    n = t(17928),
    s = t(889227),
    a = t(994500),
    l = t(354670),
    c = t(378135),
    o = t(202541);
function d() {
    let e = (0, c.k)(o.Dw),
        r = (0, n.bG)([l.A], () => l.A.getReferrer(e?.trialId)),
        t = (0, n.bG)([a.A], () => null == r || a.A.isBlockedOrIgnored(r.id));
    return i.useMemo(() => (t || null == r ? null : new s.A(r)), [r, t]);
}
