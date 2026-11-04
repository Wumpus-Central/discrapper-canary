n.d(e, { openSocialLayerStorefrontAnnouncementModal: () => C, n: () => k, a: () => y });
var i = n(477900),
    o = n(192308),
    l = n(391048),
    a = n(589078),
    d = n(652165),
    c = n(129230),
    r = n(832163);
n(582128);
let s = "slayer-eligibility-check-modal";
var u = n(652215);
function p(t, e) {
    let {
            applicationId: l,
            skuId: a,
            paymentKind: d,
            isGift: p = !1,
            guildId: y,
            analyticsLocations: k,
            contextKey: C,
        } = t,
        f = !1;
    !(function t() {
        let m = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (f) return;
        let I = r.A.getSKUEligibilityEntry(a),
            _ = I?.state;
        if (!p && (null == _ || "checking" === _ || "ineligible" === _))
            return void (function (t) {
                let {
                    guildId: e,
                    applicationId: l,
                    skuId: a,
                    paymentKind: d,
                    analyticsLocations: c,
                    contextKey: r,
                    onContinue: u,
                    onClose: p,
                } = t;
                (0, o.mM)(
                    async () => {
                        let { default: t } = await Promise.all([n.e(833192), n.e(262754)]).then(n.bind(n, 424185));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                skuId: a,
                                paymentKind: d,
                                guildId: e,
                                applicationId: l,
                                analyticsLocations: c,
                                onContinue: u,
                            });
                    },
                    { modalKey: s, contextKey: r, onCloseCallback: p },
                );
            })({
                guildId: y,
                applicationId: l,
                skuId: a,
                paymentKind: d,
                analyticsLocations: k ?? [],
                contextKey: C,
                onContinue: () => t(!0),
            });
        if (!m) {
            let t = "none";
            (p ? (t = "gift") : "eligible" === _ ? (t = "already_eligible") : "error" === _ && (t = "prior_error"),
                c.default.track(u.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                    sku_id: a,
                    guild_id: y ?? null,
                    application_id: l,
                    payment_kind: d,
                    is_gift: p,
                    eligibility_state: _ ?? "none",
                    skip_reason: t,
                    error_http_status: I?.state === "error" ? (I.httpStatus ?? null) : null,
                    location_stack: k,
                }));
        }
        e({
            onClose: () => {
                ((0, o.Oo)(s, C), (f = !0));
            },
            onComplete: () => {
                f = !0;
            },
        });
    })();
}
function y(t, e) {
    let { isGift: n, giftRecipient: i, giftingOrigin: d, additionalUserIds: c } = e,
        {
            discoverySessionId: r,
            analyticsLocations: s,
            guildId: u,
            contextKey: y,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        k = y ?? (0, o.lx)();
    p(
        {
            guildId: u,
            applicationId: t.applicationId,
            skuId: t.id,
            paymentKind: "fiat",
            isGift: n,
            analyticsLocations: s,
            contextKey: k,
        },
        (e) => {
            let { onClose: o, onComplete: u } = e;
            !(function (t) {
                let {
                    contextKey: e,
                    discoverySessionId: n,
                    sku: i,
                    analyticsLocations: o,
                    isGift: l,
                    giftRecipient: d,
                    additionalUserIds: c,
                    giftingOrigin: r,
                    onCloseCallback: s,
                    onComplete: u,
                    modalKey: p,
                } = t;
                a.UnifiedCheckoutFlowManagerSingletons[a.CL.SLAYER_STOREFRONT_CHECKOUT]
                    .get()
                    .openCheckoutModal({
                        checkoutConfiguration: {
                            discoverySessionId: n,
                            applicationId: i.applicationId,
                            skuId: i.id,
                            skuProductLine: i.productLine,
                        },
                        unifiedCheckoutProviderProps: { analyticsLocations: o },
                        checkoutHandlers: { onComplete: u },
                        giftContextProps: { isGift: l, giftRecipient: d, giftingOrigin: r, additionalUserIds: c },
                        modalAPIOptions: { contextKey: e, modalKey: p, onCloseCallback: s },
                    });
            })({
                contextKey: k,
                discoverySessionId: r,
                sku: t,
                analyticsLocations: s ?? [],
                isGift: n,
                giftRecipient: i,
                giftingOrigin: d,
                additionalUserIds: c,
                onCloseCallback: () => {
                    ((0, l.ET)(), o());
                },
                onComplete: u,
                modalKey: "slayer-payment-modal",
            });
        },
    );
}
function k(t, e) {
    let { guildId: n, contextKey: i, analyticsLocations: a, onCloseCallback: c, onComplete: r, ...s } = e,
        u = i ?? (0, o.lx)();
    p(
        {
            applicationId: t.applicationId,
            skuId: t.id,
            paymentKind: "orbs",
            guildId: n,
            analyticsLocations: a,
            contextKey: u,
        },
        (e) => {
            let { onClose: n, onComplete: i } = e;
            (0, d.B4)({
                ...s,
                applicationId: t.applicationId,
                skuId: t.id,
                analyticsLocations: a,
                contextKey: u,
                onCloseCallback: () => {
                    ((0, l.ET)(), n(), c?.());
                },
                onComplete: (t) => {
                    (i(), r(t));
                },
            });
        },
    );
}
function C() {
    (0, o.mM)(
        async () => {
            let { default: t } = await Promise.all([n.e(506933), n.e(847799), n.e(701218)]).then(n.bind(n, 839225));
            return (e) => (0, i.jsx)(t, { ...e });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
