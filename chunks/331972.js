n.d(t, { $: () => d });
var i = n(442837),
    r = n(78839),
    s = n(431),
    a = n(937579),
    l = n(66683),
    o = n(104494),
    c = n(474936);
function d() {
    var e;
    let { enabled: t } = (0, l.k)({ location: "Subscription Details" }),
        n = (0, i.e7)([r.Z], () => r.Z.getPremiumTypeSubscription()),
        d = s.Z.isFetchingOffer(),
        u = s.Z.hasFetchedOffer(),
        m = (0, o.qm)(c.dT),
        p = (0, o.qm)(c.dB),
        g = null != (e = null != m ? m : p) ? e : null;
    return t && (null == n ? void 0 : n.canceledAt) != null ? (null != g ? g : (d || u || (0, a.Qe)(), null)) : null;
}
