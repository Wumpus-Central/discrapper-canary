t.d(r, { A: () => o });
var n = t(582128),
    l = t(17928),
    i = t(889227),
    a = t(994500),
    s = t(354670),
    c = t(378135),
    u = t(202541);
function o() {
    let e = (0, c.k)(u.Dw),
        r = (0, l.bG)([s.A], () => s.A.getReferrer(e?.trialId)),
        t = (0, l.bG)([a.A], () => null == r || a.A.isBlockedOrIgnored(r.id));
    return n.useMemo(() => (t || null == r ? null : new i.A(r)), [r, t]);
}
