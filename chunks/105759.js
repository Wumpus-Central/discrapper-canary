n.d(t, { Z: () => d });
var i = n(192379),
    r = n(442837),
    a = n(598077),
    s = n(699516),
    l = n(431),
    o = n(786397),
    c = n(474936);
function d() {
    let e = (0, o.w)(c.a7),
        t = (0, r.e7)([l.Z], () => l.Z.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, r.e7)([s.Z], () => null == t || s.Z.isBlockedOrIgnored(t.id));
    return i.useMemo(() => (n || null == t ? null : new a.Z(t)), [t, n]);
}
