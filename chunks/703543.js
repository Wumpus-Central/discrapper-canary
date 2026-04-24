n.d(t, { A: () => C });
var i = n(284009),
    l = n.n(i),
    a = n(702841),
    r = n(71393),
    s = n(250627),
    o = n(871109),
    c = n(627968);
n(64700);
var d = n(132500),
    u = n(192308),
    _ = n(391048),
    m = n(636099),
    h = n(120700),
    p = n(742810),
    g = n(954571),
    f = n(652215),
    x = n(179499),
    A = n(985018);
function C(e) {
    let { guildId: t, guildProductListingId: i, sourceAnalyticsLocations: C } = e,
        v = (0, a.bG)([o.A], () => o.A.getGuildProduct(i)),
        I = (0, a.bG)([r.A], () => r.A.getGuild(t), [t]),
        E = (0, x.A)({ guildId: t, productId: i });
    return (l()(null != I, "guild cannot be null"), l()(null != v, "guildProductListing cannot be null"), (0, s.BB)(I))
        ? { variant: "primary", text: A.intl.string(A.t.xUi3BL), disabled: !0 }
        : v.has_entitlement
          ? null != v.attachments
              ? E
              : { variant: "secondary", text: A.intl.string(A.t.RcTOGF), disabled: !0 }
          : {
                variant: "primary",
                text: A.intl.string(A.t.xUi3BL),
                onClick: () =>
                    (function (e) {
                        let { guildProductListing: t, guildId: i, sourceAnalyticsLocations: l } = e,
                            a = !1,
                            r = (0, d.A)(),
                            s = t.id,
                            o = () => {
                                a = !0;
                            };
                        (0, u.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("53924").then(n.bind(n, 950959));
                                return (n) =>
                                    (0, c.jsx)(e, {
                                        ...n,
                                        applicationId: t.application_id,
                                        skuId: s,
                                        sourceAnalyticsLocations: l,
                                        guildProductContext: { guildProductListingId: t.id, guildId: i },
                                        loadId: r,
                                        onComplete: o,
                                    });
                            },
                            {
                                onCloseCallback: () => {
                                    if (!a) {
                                        let e = (0, p.q1)({
                                            location: "GuildProductPurchaseModal",
                                            unifiedCheckoutFlow: h.C.GUILD_PRODUCT_CHECKOUT,
                                        });
                                        g.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
                                            load_id: r,
                                            payment_type: f.frM[f.VVm.ONE_TIME],
                                            is_gift: !1,
                                            sku_id: s,
                                            location_stack: Array.isArray(l) ? l : [l],
                                            checkout_design: e ? p.rS.UNIFIED : p.rS.LEGACY,
                                            checkout_flow: h.C.GUILD_PRODUCT_CHECKOUT,
                                        });
                                    }
                                    (0, _.ET)(), (0, m.z)();
                                },
                                onCloseRequest: f.tEg,
                            },
                        );
                    })({ guildProductListing: v, guildId: I.id, sourceAnalyticsLocations: C }),
            };
}
