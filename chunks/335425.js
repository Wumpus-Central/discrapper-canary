"use strict";
n.d(t, { Ej: () => I, bC: () => T });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(959391),
    l = n(323082),
    u = n(626584),
    c = n(156312),
    d = n(166532),
    _ = n(19311),
    f = n(825755),
    p = n(836308),
    h = n(818348),
    m = n(985018);
let E = new u.A("AddPaymentAddressStep.tsx");
function g(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, a.bG)([f.A], () => f.A.error);
    return (0, r.jsx)(o.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
let A = (e) => {
    switch (e) {
        case h.he.CARD:
            return { backStep: d.pn.CREDIT_CARD_INFORMATION };
        case h.he.PAYPAL:
            return { backStep: d.pn.PAYPAL_INFORMATION };
        case h.he.VENMO:
            return { backStep: d.pn.VENMO_INFORMATION };
        case h.he.GIROPAY:
        case h.he.PAYSAFE_CARD:
        case h.he.GCASH:
        case h.he.GRABPAY_MY:
        case h.he.MOMO_WALLET:
        case h.he.KAKAOPAY:
        case h.he.GOPAY_WALLET:
        case h.he.BANCONTACT:
            return { backStep: d.pn.PAYMENT_TYPE };
        case h.he.EPS:
            return { backStep: d.pn.EPS_INFORMATION };
        case h.he.IDEAL:
            return { backStep: d.pn.IDEAL_INFORMATION };
        case h.he.PRZELEWY24:
            return { backStep: d.pn.PRZELEWY24_INFORMATION };
        case h.he.CASH_APP:
            return { backStep: d.pn.CASH_APP_INFORMATION };
        default:
            return { backStep: d.pn.PAYMENT_TYPE };
    }
};
function I(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: i } = e,
        { billingAddressState: s, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, r.jsx)(g, {
              billingAddressInfo: s.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...s.info, ...e }, isValid: t });
              },
              paymentSourceType: i,
          });
}
function T(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: i,
            overwriteSubscriptionPaymentSource: a,
            handleStepChange: o,
            onPaymentRequestSourceFailed: u,
            paymentRequestPaymentMethod: f,
            completeSteps: g,
            paymentMethodSteps: I,
            paymentElementSelectedType: T,
            returnToPaymentElementStep: S,
            combinedStripeElementsRef: y,
            lastConfirmedSetupIntentRef: v,
            shouldUsePaymentElement: N,
        } = e,
        { stripe: C } = (0, c.P5)(),
        {
            tokenState: R,
            isSubmittingCurrentStep: O,
            billingAddressState: b,
            setIsSubmittingCurrentStep: D,
            hasRedirectURL: L,
            setHasRedirectURL: w,
            braintreeNonce: M,
            adyenPaymentData: P,
            isAuthenticating: x,
            epsBankState: k,
            p24BankState: U,
        } = t,
        G = async () => {
            D(!0);
            let e = N ? T : I.methodType,
                t = [
                    C,
                    y.current,
                    { billingAddress: b.info, paymentSourceType: e ?? h.he.UNKNOWN, lastConfirmedSetupIntentRef: v },
                    i,
                ];
            switch (e) {
                case h.he.PAYMENT_REQUEST:
                    if (N) {
                        try {
                            let e = await (0, l.im)(...t);
                            g(e);
                        } catch (e) {
                            D(!1), E.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == f) throw (u(), (0, l.i0)("Missing paymentRequestPaymentMethod"));
                    g(await (0, l.Tv)(f, b.info, i));
                    break;
                case h.he.CARD:
                    try {
                        let e = N ? await (0, l.im)(...t) : await (0, l.u6)(C, R.token, b.info, i);
                        g(e);
                    } catch {}
                    break;
                case h.he.VENMO:
                case h.he.PAYPAL:
                    try {
                        s()(null != M, "Missing braintreeNonce");
                        let e = await (0, l.u1)(M, b.info, i);
                        g(e);
                    } catch {}
                    break;
                case h.he.EPS:
                    try {
                        let e = await (0, l.Z9)(C, k, b.info, i);
                        g(e);
                    } catch (e) {
                        E.warn(e);
                    }
                    break;
                case h.he.IDEAL:
                    try {
                        let e = N ? await (0, l.im)(...t) : await (0, l.EB)(C, b.info, i);
                        g(e);
                    } catch (e) {
                        E.warn(e);
                    }
                    break;
                case h.he.PRZELEWY24:
                    try {
                        if (void 0 === U) throw (0, l.i0)("Bank required for Przelewy24");
                        let e = await (0, l.TD)(C, { p24Bank: U }, b.info, i);
                        g(e);
                    } catch {}
                    break;
                case h.he.PAYSAFE_CARD:
                case h.he.GRABPAY_MY:
                    try {
                        let t = await (0, l.A8)(b.info, e, i);
                        g(t);
                    } catch {}
                    break;
                case h.he.GCASH:
                case h.he.MOMO_WALLET:
                case h.he.KAKAOPAY:
                case h.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, l.$M)(b.info, e, i);
                        w(t);
                    } catch {}
                    break;
                case h.he.GIROPAY:
                case h.he.BANCONTACT:
                    try {
                        let t = await (0, l.bw)(C, b.info, e, i);
                        g(t);
                    } catch {}
                    break;
                case h.he.CASH_APP:
                    try {
                        s()(null != P, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, l.$M)(b.info, e, i, P, a);
                        s()(null != t, "Cash App Pay Payment Source missing"), g(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            L || D(!1);
        },
        F = I.methodType,
        { backStep: V } = N ? { backStep: d.pn.PAYMENT_ELEMENT } : A(F),
        B = N ? () => S(void 0) : () => o(V);
    return (0, r.jsx)(p.uv, {
        onBack: B,
        primaryCTA: _.Ay.CTAType.CONTINUE,
        primaryText: m.intl.string(m.t.PDTjLN),
        primarySubmitting: O,
        primaryDisabled: !b.isValid || x,
        onPrimary: G,
        shouldUseManaModal: n,
    });
}
