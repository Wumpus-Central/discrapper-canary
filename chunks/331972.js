n.d(t, { $: () => c });
var r = n(442837),
    i = n(78839),
    a = n(431),
    o = n(937579),
    s = n(635999),
    l = n(474936);
function c() {
    var e;
    let t = (0, r.e7)([i.Z], () => i.Z.getPremiumTypeSubscription()),
        n = a.Z.isFetchingOffer(),
        c = a.Z.hasFetchedOffer(),
        u = (0, s.Z)(l.dT),
        d = (0, s.Z)(l.dB),
        f = null != (e = null != u ? u : d) ? e : null;
    return (null == t ? void 0 : t.canceledAt) == null ? null : null != f ? f : (n || c || (0, o.Qe)(), null);
}
