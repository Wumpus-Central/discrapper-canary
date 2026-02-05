i.d(t, { default: () => g, z: () => A });
var n = i(627968);
i(64700);
var l = i(397927),
    a = i(780964),
    r = i(840065),
    o = i(422936),
    s = i(234419),
    u = i(244975),
    d = i(788868),
    c = i(652215),
    h = i(985018),
    m = i(511761),
    p = i(271110);
function g(e) {
    let { onClose: t, analyticsSource: i, ...l } = e,
        g = h.intl.format(h.t["JmbS+T"], {
            onClick: () => {
                (0, r.openUserSettings)(a.X.NITRO_PANEL, { section: c.nc_.PREMIUM }), t();
            },
        }),
        A = (0, s.V)(),
        f = (0, o.O)(),
        T = null != A || null != f;
    return (0, n.jsx)(u.A, {
        artURL: p,
        artContainerClassName: m.JS,
        modalClassName: m.jT,
        bodyClassName: m.IP,
        type: d.e.BURST_REACTION_UPSELL,
        title: h.intl.string(h.t.N4SCJ0),
        body: g,
        glowUp: g,
        analyticsSource: i,
        analyticsLocation: { page: c.liQ.PREMIUM_UPSELL_BURST_REACTIONS, object: c.ZSU.BUTTON_CTA },
        onClose: t,
        subscribeButtonText: T ? void 0 : h.intl.string(h.t["8x0jKT"]),
        subscriptionTier: A?.subscription_trial?.sku_id ?? d.pe.TIER_2,
        backButtonText: h.intl.string(h.t.f3Pet9),
        ...l,
    });
}
function A(e) {
    let { analytics: t } = e;
    (0, l.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 32605));
        return (i) => (0, n.jsx)(e, { analyticsSource: t, ...i });
    });
}
