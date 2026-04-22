n.d(t, { A: () => c });
var l = n(64700),
    i = n(311907),
    a = n(427157),
    r = n(994500),
    s = n(816733),
    o = n(378135),
    u = n(788868);
function c() {
    let e = (0, o.k)(u.Dw),
        t = (0, i.bG)([s.A], () => s.A.getReferrer(e?.trial_id)),
        n = (0, i.bG)([r.A], () => null == t || r.A.isBlockedOrIgnored(t.id));
    return l.useMemo(() => (n || null == t ? null : new a.A(t)), [t, n]);
}
