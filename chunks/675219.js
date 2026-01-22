n.d(t, {
    o: () => I,
}),
    n(896048),
    n(321073),
    n(65821);
var r = n(627968),
    i = n(835245),
    a = n(397927),
    s = n(166532),
    o = n(546042),
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

function b(e, t, n) {
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

function y(e) {
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
                b(e, t, n[t]);
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

function A(e, t) {
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
let v = (e, t) => null != t && t.implemented && t.flowType === e,
    S = {
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
class I {
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
                            defaultStep: s.pn.REVIEW,
                        }),
                }
              : {
                    key: null,
                    renderStep: (e) => (0, r.jsx)(o.I, y({}, e)),
                };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== u.C.ORB_CHECKOUT)
            return {
                key: s.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(p.c, {
                        paymentModalStepProps: e,
                        returnStep: s.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? s.pn.GIFT_CUSTOMIZATION : void 0,
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
                  key: s.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(_.E, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(s.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: {
                      isLargeModal: !0,
                      useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"]),
                  },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(s.pn.REVIEW);
        return (0, d.B)(e)
            ? l.r2
            : {
                  key: s.pn.REVIEW,
                  renderStep: (t) =>
                      (0, r.jsx)(m.P, {
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
            o = this.getAddPaymentStepConfig({
                isGift: t,
            }),
            c = this.getReviewStepConfig(),
            u = this.createDefinedStepConfigsArray([i, a, o, ...(r ? [] : l.hh), c]);
        return (
            null != n &&
                u.push({
                    key: s.pn.CONFIRM,
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
                flowSpecificOptions: s,
                giftContextProps: o,
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
            b = !1,
            O = null != s ? s : void 0;
        return (0, a.mMO)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681));
                return (t) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({
                            isGift: !!(null != o && o.isGift),
                        }),
                        onComplete: (e) => {
                            null != l && l(e), (b = !0);
                        },
                        onClose: c,
                        renderHeader: g,
                        skuId: u,
                        loadId: h,
                        applicationId: E,
                        analyticsLocations: _,
                        analyticsSourceLocation: p,
                        renderModalProps: t,
                        giftContextProps: o,
                        flowSpecificOptions: O,
                    });
            },
            A(y({}, t), {
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(b, h), (0, a.OoC)(m);
                },
                modalKey: m,
            }),
        );
    }
    constructor({ checkoutFlow: e }) {
        b(this, "checkoutFlow", void 0),
            b(this, "checkoutFlowConfiguration", void 0),
            b(this, "tenantCheckoutFlowConfig", void 0),
            b(this, "internalCheckoutFlowControls", void 0),
            (this.checkoutFlow = e);
        const t = f.Y[e];
        if (!v(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = S[e]);
    }
}
