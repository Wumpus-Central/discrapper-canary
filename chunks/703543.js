n.d(t, { A: () => E });
var i = n(284009),
    l = n.n(i),
    s = n(702841),
    a = n(71393),
    r = n(250627),
    o = n(871109),
    d = n(627968);
n(64700);
var c = n(132500),
    u = n(192308),
    m = n(391048),
    h = n(636099),
    g = n(120700),
    A = n(742810),
    p = n(954571),
    x = n(652215),
    f = n(179499),
    C = n(985018);
function E(e) {
    let { guildId: t, guildProductListingId: i, sourceAnalyticsLocations: E } = e,
        v = (0, s.bG)([o.A], () => o.A.getGuildProduct(i)),
        I = (0, s.bG)([a.A], () => a.A.getGuild(t), [t]),
        _ = (0, f.A)({ guildId: t, productId: i });
    return (l()(null != I, "guild cannot be null"), l()(null != v, "guildProductListing cannot be null"), (0, r.BB)(I))
        ? { variant: "primary", text: C.intl.string(C.t.xUi3BL), disabled: !0 }
        : v.has_entitlement
          ? null != v.attachments
              ? _
              : { variant: "secondary", text: C.intl.string(C.t.RcTOGF), disabled: !0 }
          : {
                variant: "primary",
                text: C.intl.string(C.t.xUi3BL),
                onClick: () =>
                    (function (e) {
                        let { guildProductListing: t, guildId: i, sourceAnalyticsLocations: l } = e,
                            s = !1,
                            a = (0, c.A)(),
                            r = t.id,
                            o = () => {
                                s = !0;
                            };
                        (0, u.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("34430"), n.e("16237"), n.e("53924")]).then(
                                    n.bind(n, 950959),
                                );
                                return (n) =>
                                    (0, d.jsx)(e, {
                                        ...n,
                                        applicationId: t.application_id,
                                        skuId: r,
                                        sourceAnalyticsLocations: l,
                                        guildProductContext: { guildProductListingId: t.id, guildId: i },
                                        loadId: a,
                                        onComplete: o,
                                    });
                            },
                            {
                                onCloseCallback: () => {
                                    if (!s) {
                                        let e = (0, A.q1)({
                                            location: "GuildProductPurchaseModal",
                                            unifiedCheckoutFlow: g.C.GUILD_PRODUCT_CHECKOUT,
                                        });
                                        p.default.track(x.HAw.PAYMENT_FLOW_CANCELED, {
                                            load_id: a,
                                            payment_type: x.frM[x.VVm.ONE_TIME],
                                            is_gift: !1,
                                            sku_id: r,
                                            location_stack: Array.isArray(l) ? l : [l],
                                            checkout_design: e ? A.rS.UNIFIED : A.rS.LEGACY,
                                            checkout_flow: g.C.GUILD_PRODUCT_CHECKOUT,
                                        });
                                    }
                                    (0, m.ET)(), (0, h.z)();
                                },
                                onCloseRequest: x.tEg,
                            },
                        );
                    })({ guildProductListing: v, guildId: I.id, sourceAnalyticsLocations: E }),
            };
}
