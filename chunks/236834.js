t.d(r, { A: () => u });
var n = t(582128),
    l = t(17928),
    i = t(889227),
    s = t(994500),
    a = t(354670),
    c = t(378135),
    o = t(202541);
function u() {
    let e = (0, c.k)(o.Dw),
        r = (0, l.bG)([a.A], () => a.A.getReferrer(e?.trialId)),
        t = (0, l.bG)([s.A], () => null == r || s.A.isBlockedOrIgnored(r.id));
    return n.useMemo(() => (t || null == r ? null : new i.A(r)), [r, t]);
}
