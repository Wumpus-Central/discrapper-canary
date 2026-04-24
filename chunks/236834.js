s.d(t, { A: () => c });
var n = s(64700),
    i = s(17928),
    r = s(889227),
    l = s(994500),
    a = s(354670),
    o = s(378135),
    d = s(788868);
function c() {
    let e = (0, o.k)(d.Dw),
        t = (0, i.bG)([a.A], () => a.A.getReferrer(e?.trial_id)),
        s = (0, i.bG)([l.A], () => null == t || l.A.isBlockedOrIgnored(t.id));
    return n.useMemo(() => (s || null == t ? null : new r.A(t)), [t, s]);
}
