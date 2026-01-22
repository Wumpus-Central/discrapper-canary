n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    a = n(427157),
    s = n(994500),
    o = n(816733),
    l = n(378135),
    c = n(788868);
function u() {
    let e = (0, l.k)(c.Dw),
        t = (0, i.bG)([o.A], () => o.A.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, i.bG)([s.A], () => null == t || s.A.isBlockedOrIgnored(t.id));
    return r.useMemo(() => (n || null == t ? null : new a.A(t)), [t, n]);
}
