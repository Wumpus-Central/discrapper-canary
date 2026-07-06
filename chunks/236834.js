i.d(r, { A: () => o });
var t = i(64700),
    a = i(17928),
    s = i(889227),
    n = i(994500),
    l = i(354670),
    c = i(378135),
    d = i(202541);
function o() {
    let e = (0, c.k)(d.Dw),
        r = (0, a.bG)([l.A], () => l.A.getReferrer(e?.trial_id)),
        i = (0, a.bG)([n.A], () => null == r || n.A.isBlockedOrIgnored(r.id));
    return t.useMemo(() => (i || null == r ? null : new s.A(r)), [r, i]);
}
