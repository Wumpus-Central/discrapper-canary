i.d(a, { A: () => C });
var e = i(627968);
i(64700);
var n = i(835245),
    o = i(192308),
    l = i(391048),
    s = i(636099),
    c = i(663288),
    d = i(742810),
    u = i(174459),
    r = i(427262),
    p = i(652215);
function C(t) {
    if ((0, r.Gn)())
        return (function (t) {
            let a = (0, c.oT[c.CL.PREMIUM_APPS_OTP_CHECKOUT])(),
                {
                    applicationId: i,
                    skuId: e,
                    onClose: n,
                    onComplete: o,
                    analyticsLocations: d,
                    analyticsLocationObject: u,
                    contextKey: r,
                    isGift: p = !1,
                } = t;
            return a.openCheckoutModal({
                openModalOptions: {
                    modalKey: "premium-apps-otp-checkout-modal",
                    contextKey: r,
                    onCloseCallback() {
                        (0, l.ET)(), (0, s.z)();
                    },
                },
                applicationId: i,
                skuId: e,
                analyticsLocations: d,
                analyticsObject: u,
                onClose: n,
                onComplete: o,
                giftContextProps: { isGift: p },
            });
        })(t);
    let {
            applicationId: a,
            skuId: C,
            onClose: _,
            onComplete: I,
            analyticsLocations: f,
            analyticsLocationObject: k,
            contextKey: h,
            isGift: y = !1,
            checkoutFlow: P,
        } = t,
        E = !1,
        S = (0, n.A)();
    (0, o.openModalLazy)(
        async () => {
            let { default: t } = await i.e("53068").then(i.bind(i, 226151));
            return (i) => {
                let { onClose: n, ...o } = i;
                return (0, e.jsx)(t, {
                    ...o,
                    loadId: S,
                    applicationId: a,
                    skuId: C,
                    analyticsLocations: f,
                    analyticsLocationObject: k,
                    isGift: y,
                    onClose: (t) => {
                        n(), _?.(t);
                    },
                    onComplete: (t) => {
                        (E = !0), I?.(t);
                    },
                    checkoutFlow: P,
                });
            };
        },
        {
            contextKey: h,
            onCloseCallback: () => {
                if (!E) {
                    let t = (0, d.q1)({ location: "StandardOneTimePaymentModal", unifiedCheckoutFlow: P });
                    u.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                        load_id: S,
                        payment_type: p.frM[p.VVm.ONE_TIME],
                        location: k,
                        is_gift: y,
                        sku_id: C,
                        application_id: a,
                        location_stack: f,
                        checkout_design: t ? d.rS.UNIFIED : d.rS.LEGACY,
                        checkout_flow: P,
                    });
                }
                (0, l.ET)(), (0, s.z)(), _?.(E);
            },
            onCloseRequest: p.tEg,
        },
    );
}
