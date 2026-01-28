n.d(t, {
    o: () => S,
}),
    n(896048),
    n(321073),
    n(65821);
var r = n(627968),
    i = n(835245),
    a = n(397927),
    o = n(166532),
    s = n(546042),
    l = n(721252),
    c = n(310829),
    u = n(285871),
    d = n(945477),
    f = n(302425),
    p = n(982291),
    _ = n(684477),
    h = n(331611),
    m = n(69882),
    g = n(652215),
    E = n(985018);

function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = (e, t) => null != t && t.implemented && t.flowType === e,
    I = {
        [u.C.ORB_CHECKOUT]: {
            allowGiftCustomization: !1,
            disablePaymentAuthSteps: !0,
            predicateStepType: "unified",
        },
        [u.C.COLLECTIBLES_CHECKOUT]: {
            allowGiftCustomization: !0,
            predicateStepType: "one_time_payment",
        },
        [u.C.SLAYER_STOREFRONT_CHECKOUT]: {
            allowGiftCustomization: !0,
            predicateStepType: "one_time_payment",
        },
        [u.C.PREMIUM_CHECKOUT]: {
            allowGiftCustomization: !1,
        },
    };
class S {
    getUnifiedStepDefinition(e) {
        return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e];
    }
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.tenantCheckoutFlowConfig;
        if (null != e)
            return (t, n, i) =>
                (0, r.jsx)(e, {
                    plan: t,
                    onClose: n,
                    step: i,
                });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? l.kJ
            : "unified" === e
              ? {
                    key: null,
                    renderStep: (e) =>
                        (0, r.jsx)(h.e, {
                            paymentModalStepProps: e,
                            defaultStep: o.pn.REVIEW,
                        }),
                }
              : {
                    key: null,
                    renderStep: (e) => (0, r.jsx)(s.I, b({}, e)),
                };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== u.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(p.c, {
                        paymentModalStepProps: e,
                        returnStep: o.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? o.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: {
                    renderHeader: !0,
                },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: o.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(_.E, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(o.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: {
                      isLargeModal: !0,
                      useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"]),
                  },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(o.pn.REVIEW);
        return (0, d.B)(e)
            ? l.r2
            : {
                  key: o.pn.REVIEW,
                  renderStep: (t) =>
                      (0, r.jsx)(m.Pw, {
                          paymentModalStepProps: t,
                          unifiedStepDefinition: e,
                      }),
                  options: {
                      useBreadcrumbLabel: () => E.intl.string(E.t.QBnNHq),
                  },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({
                isGift: t,
            }),
            s = this.getAddPaymentStepConfig({
                isGift: t,
            }),
            c = this.getReviewStepConfig(),
            u = this.createDefinedStepConfigsArray([i, a, s, ...(r ? [] : l.hh), c]);
        return (
            null != n &&
                u.push({
                    key: o.pn.CONFIRM,
                    renderStep: n.renderStep,
                    options: n.options,
                }),
            u
        );
    }
    getApplicationId(e) {
        return this.checkoutFlow === u.C.ORB_CHECKOUT
            ? (0, c.p)(e)
            : this.checkoutFlow === u.C.COLLECTIBLES_CHECKOUT
              ? g.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: o,
                giftContextProps: s,
                onComplete: l,
                onClose: c,
                skuId: u,
                loadId: d,
                applicationId: f,
                analyticsSourceLocation: p,
                analyticsLocations: _,
            } = e,
            h = null != d ? d : (0, i.A)(),
            { modalKey: m } = t,
            g = this.generateRenderHeader(),
            E = null != f ? f : this.getApplicationId(u),
            y = !1,
            O = null != o ? o : void 0;
        return (0, a.mMO)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681));
                return (t) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({
                            isGift: !!(null != s && s.isGift),
                        }),
                        onComplete: (e) => {
                            null != l && l(e), (y = !0);
                        },
                        onClose: c,
                        renderHeader: g,
                        skuId: u,
                        loadId: h,
                        applicationId: E,
                        analyticsLocations: _,
                        analyticsSourceLocation: p,
                        renderModalProps: t,
                        giftContextProps: s,
                        flowSpecificOptions: O,
                    });
            },
            v(b({}, t), {
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(y, h), (0, a.OoC)(m);
                },
                modalKey: m,
            }),
        );
    }
    constructor({ checkoutFlow: e }) {
        y(this, "checkoutFlow", void 0),
            y(this, "checkoutFlowConfiguration", void 0),
            y(this, "tenantCheckoutFlowConfig", void 0),
            y(this, "internalCheckoutFlowControls", void 0),
            (this.checkoutFlow = e);
        const t = f.Y[e];
        if (!A(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = I[e]);
    }
}
