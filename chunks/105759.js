n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(442837),
    s = n(598077),
    r = n(699516),
    a = n(431),
    o = n(786397),
    C = n(474936);
function d() {
    let e = (0, o.w)(C.a7),
        t = (0, l.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, l.e7)([r.Z], () => null == t || r.Z.isBlockedOrIgnored(t.id));
    return i.useMemo(() => (n || null == t ? null : new s.Z(t)), [t, n]);
}
