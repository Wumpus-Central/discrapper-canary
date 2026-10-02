t.d(r, { A: () => d });
var n = t(582128),
    i = t(17928),
    l = t(889227),
    a = t(994500),
    s = t(354670),
    o = t(378135),
    c = t(202541);
function d() {
    let e = (0, o.k)(c.Dw),
        r = (0, i.bG)([s.A], () => s.A.getReferrer(e?.trialId)),
        t = (0, i.bG)([a.A], () => null == r || a.A.isBlockedOrIgnored(r.id));
    return n.useMemo(() => (t || null == r ? null : new l.A(r)), [r, t]);
}
