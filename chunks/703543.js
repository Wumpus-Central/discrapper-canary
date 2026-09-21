n.d(t, { A: () => g });
var i = n(284009),
    l = n.n(i),
    s = n(702841),
    a = n(71393),
    r = n(250627),
    o = n(871109),
    c = n(391048),
    d = n(120700),
    u = n(529427),
    m = n(179499),
    h = n(375708);
function g(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        g = (0, s.bG)([o.A], () => o.A.getGuildProduct(n)),
        p = (0, s.bG)([a.A], () => a.A.getGuild(t), [t]),
        A = (0, m.A)({ guildId: t, productId: n });
    return (l()(null != p, "guild cannot be null"), l()(null != g, "guildProductListing cannot be null"), (0, r.BB)(p))
        ? { variant: "primary", text: h.intl.string(h.t.xUi3BL), disabled: !0 }
        : g.has_entitlement
          ? null != g.attachments
              ? A
              : { variant: "secondary", text: h.intl.string(h.t.RcTOGF), disabled: !0 }
          : {
                variant: "primary",
                text: h.intl.string(h.t.xUi3BL),
                onClick: function () {
                    return (
                        l()(null != p, "guild cannot be null"),
                        l()(null != g, "guildProductListing cannot be null"),
                        (function (e) {
                            let { guildProductListing: t, guildId: n, sourceAnalyticsLocations: i } = e,
                                l = t.id;
                            return u.UnifiedCheckoutFlowManagerSingletons[d.C.GUILD_PRODUCT_CHECKOUT]
                                .get()
                                .openCheckoutModal({
                                    checkoutConfiguration: { skuId: l, applicationId: t.application_id },
                                    tenantParams: { guildId: n },
                                    unifiedCheckoutProviderProps: { analyticsLocations: Array.isArray(i) ? i : [i] },
                                    modalAPIOptions: {
                                        modalKey: "guild-product-purchase-modal",
                                        onCloseCallback() {
                                            (0, c.ET)();
                                        },
                                    },
                                });
                        })({ guildProductListing: g, guildId: p.id, sourceAnalyticsLocations: i })
                    );
                },
            };
}
