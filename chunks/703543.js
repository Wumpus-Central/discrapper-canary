n.d(t, { A: () => p });
var i = n(284009),
    l = n.n(i),
    s = n(702841),
    r = n(71393),
    a = n(250627),
    o = n(871109),
    d = n(391048),
    c = n(636099),
    u = n(120700),
    m = n(155506),
    h = n(179499),
    g = n(375708);
function p(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        p = (0, s.bG)([o.A], () => o.A.getGuildProduct(n)),
        A = (0, s.bG)([r.A], () => r.A.getGuild(t), [t]),
        x = (0, h.A)({ guildId: t, productId: n });
    return (l()(null != A, "guild cannot be null"), l()(null != p, "guildProductListing cannot be null"), (0, a.BB)(A))
        ? { variant: "primary", text: g.intl.string(g.t.xUi3BL), disabled: !0 }
        : p.has_entitlement
          ? null != p.attachments
              ? x
              : { variant: "secondary", text: g.intl.string(g.t.RcTOGF), disabled: !0 }
          : {
                variant: "primary",
                text: g.intl.string(g.t.xUi3BL),
                onClick: () =>
                    (function (e) {
                        let { guildProductListing: t, guildId: n, sourceAnalyticsLocations: i } = e,
                            l = t.id;
                        return m.oE[u.C.GUILD_PRODUCT_CHECKOUT].get().openCheckoutModal({
                            skuId: l,
                            applicationId: t.application_id,
                            tenantParams: { guildId: n },
                            analyticsLocations: Array.isArray(i) ? i : [i],
                            modalAPIOptions: {
                                modalKey: "guild-product-purchase-modal",
                                onCloseCallback() {
                                    (0, d.ET)(), (0, c.z)();
                                },
                            },
                        });
                    })({ guildProductListing: p, guildId: A.id, sourceAnalyticsLocations: i }),
            };
}
