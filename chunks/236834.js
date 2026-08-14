t.d(r, { A: () => d });
var i = t(582128),
    n = t(17928),
    l = t(889227),
    a = t(994500),
    s = t(354670),
    o = t(378135),
    c = t(202541);
function d() {
    let e = (0, o.k)(c.Dw),
        r = (0, n.bG)([s.A], () => s.A.getReferrer(e?.trialId)),
        t = (0, n.bG)([a.A], () => null == r || a.A.isBlockedOrIgnored(r.id));
    return i.useMemo(() => (t || null == r ? null : new l.A(r)), [r, t]);
}
