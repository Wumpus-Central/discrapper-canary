n.d(t, { A: () => v });
var i = n(284009),
    l = n.n(i),
    s = n(702841),
    r = n(71393),
    a = n(250627),
    o = n(871109),
    d = n(627968);
n(64700);
var c = n(835245),
    u = n(192308),
    m = n(391048),
    h = n(636099),
    g = n(120700),
    p = n(210561),
    A = n(742810),
    x = n(174459),
    f = n(427262),
    E = n(652215),
    C = n(179499),
    I = n(375708);
function v(e) {
    let { guildId: t, guildProductListingId: i, sourceAnalyticsLocations: v } = e,
        _ = (0, s.bG)([o.A], () => o.A.getGuildProduct(i)),
        j = (0, s.bG)([r.A], () => r.A.getGuild(t), [t]),
        N = (0, C.A)({ guildId: t, productId: i });
    return (l()(null != j, "guild cannot be null"), l()(null != _, "guildProductListing cannot be null"), (0, a.BB)(j))
        ? { variant: "primary", text: I.intl.string(I.t.xUi3BL), disabled: !0 }
        : _.has_entitlement
          ? null != _.attachments
              ? N
              : { variant: "secondary", text: I.intl.string(I.t.RcTOGF), disabled: !0 }
          : {
                variant: "primary",
                text: I.intl.string(I.t.xUi3BL),
                onClick: () =>
                    (function (e) {
                        let { guildProductListing: t, guildId: i, sourceAnalyticsLocations: l } = e,
                            s = t.id;
                        if ((0, f.Gn)())
                            return p.oE[g.C.GUILD_PRODUCT_CHECKOUT].get().openCheckoutModal({
                                skuId: s,
                                applicationId: t.application_id,
                                tenantParams: { guildId: i },
                                analyticsLocations: Array.isArray(l) ? l : [l],
                                modalAPIOptions: {
                                    modalKey: "guild-product-purchase-modal",
                                    onCloseCallback() {
                                        (0, m.ET)(), (0, h.z)();
                                    },
                                },
                            });
                        let r = !1,
                            a = (0, c.A)(),
                            o = () => {
                                r = !0;
                            };
                        (0, u.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("34430"), n.e("16237"), n.e("81003")]).then(
                                    n.bind(n, 745478),
                                );
                                return (n) =>
                                    (0, d.jsx)(e, {
                                        ...n,
                                        applicationId: t.application_id,
                                        skuId: s,
                                        sourceAnalyticsLocations: l,
                                        guildProductContext: { skuId: t.id, guildId: i },
                                        loadId: a,
                                        onComplete: o,
                                    });
                            },
                            {
                                onCloseCallback: () => {
                                    if (!r) {
                                        let e = (0, A.q1)({
                                            location: "GuildProductPurchaseModal",
                                            unifiedCheckoutFlow: g.C.GUILD_PRODUCT_CHECKOUT,
                                        });
                                        x.default.track(E.HAw.PAYMENT_FLOW_CANCELED, {
                                            load_id: a,
                                            payment_type: E.frM[E.VVm.ONE_TIME],
                                            is_gift: !1,
                                            sku_id: s,
                                            location_stack: Array.isArray(l) ? l : [l],
                                            checkout_design: e ? A.rS.UNIFIED : A.rS.LEGACY,
                                            checkout_flow: g.C.GUILD_PRODUCT_CHECKOUT,
                                        });
                                    }
                                    (0, m.ET)(), (0, h.z)();
                                },
                                onCloseRequest: E.tEg,
                            },
                        );
                    })({ guildProductListing: _, guildId: j.id, sourceAnalyticsLocations: v }),
            };
}
