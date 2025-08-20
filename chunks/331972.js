n.d(t, { $: () => u });
var r = n(442837),
    i = n(78839),
    a = n(431),
    o = n(937579),
    s = n(66683),
    l = n(104494),
    c = n(474936);
function u() {
    var e;
    let { enabled: t } = (0, s.k)({ location: "Subscription Details" }),
        n = (0, r.e7)([i.Z], () => i.Z.getPremiumTypeSubscription()),
        u = a.Z.isFetchingOffer(),
        d = a.Z.hasFetchedOffer(),
        f = (0, l.qm)(c.dT),
        _ = (0, l.qm)(c.dB),
        p = null != (e = null != f ? f : _) ? e : null;
    return t && (null == n ? void 0 : n.canceledAt) != null ? (null != p ? p : (u || d || (0, o.Qe)(), null)) : null;
}
