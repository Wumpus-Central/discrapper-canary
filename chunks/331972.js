n.d(t, { $: () => d });
var r = n(442837),
    i = n(78839),
    a = n(431),
    o = n(937579),
    s = n(219673),
    l = n(66683),
    c = n(104494),
    u = n(474936);
function d(e) {
    var t;
    let { enabled: n } = (0, l.k)({ location: e }),
        { enabled: d } = s.b.useConfig({ location: e }),
        f = (0, r.e7)([i.Z], () => i.Z.getPremiumTypeSubscription()),
        _ = a.Z.isFetchingOffer(),
        p = a.Z.hasFetchedOffer(),
        h = (0, c.qm)(u.dT),
        m = (0, c.qm)(u.dB),
        g = null != (t = null != h ? h : m) ? t : null;
    return (n || d) && (null == f ? void 0 : f.canceledAt) != null
        ? null != g
            ? g
            : (_ || p || (0, o.Qe)(), null)
        : null;
}
