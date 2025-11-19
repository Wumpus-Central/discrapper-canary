n.d(t, { Z: () => u });
var r = n(473749),
    i = n(442837),
    a = n(598077),
    o = n(699516),
    s = n(431),
    l = n(786397),
    c = n(474936);
function u() {
    let e = (0, l.w)(c.a7),
        t = (0, i.e7)([s.Z], () => s.Z.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, i.e7)([o.Z], () => null == t || o.Z.isBlockedOrIgnored(t.id));
    return r.useMemo(() => (n || null == t ? null : new a.Z(t)), [t, n]);
}
