"use strict";
n.d(t, { Ej: () => A, bC: () => I });
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
    E = n(985018);
let m = new u.A("AddPaymentAddressStep.tsx");
function g(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, a.bG)([f.A], () => f.A.error);
    return (0, r.jsx)(o.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
function A(e) {
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
function I(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: i,
            overwriteSubscriptionPaymentSource: a,
            handleStepChange: o,
            onPaymentRequestSourceFailed: u,
            paymentRequestPaymentMethod: f,
            completeSteps: g,
            paymentMethodSteps: A,
            paymentElementSelectedType: I,
            returnToPaymentElementStep: T,
            combinedStripeElementsRef: S,
            lastConfirmedSetupIntentRef: y,
            shouldUsePaymentElement: N,
        } = e,
        { stripe: v } = (0, c.P5)(),
        {
            tokenState: C,
            isSubmittingCurrentStep: O,
            billingAddressState: R,
            setIsSubmittingCurrentStep: b,
            hasRedirectURL: D,
            setHasRedirectURL: L,
            braintreeNonce: w,
            adyenPaymentData: M,
            isAuthenticating: P,
            epsBankState: x,
            p24BankState: k,
        } = t,
        U = async () => {
            b(!0);
            let e = N ? I : A.methodType,
                t = [
                    v,
                    S.current,
                    { billingAddress: R.info, paymentSourceType: e ?? h.he.UNKNOWN, lastConfirmedSetupIntentRef: y },
                    i,
                ];
            switch (e) {
                case h.he.PAYMENT_REQUEST:
                    if (N) {
                        try {
                            let e = await (0, l.im)(...t);
                            g(e);
                        } catch (e) {
                            b(!1), m.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == f) throw (u(), (0, l.i0)("Missing paymentRequestPaymentMethod"));
                    g(await (0, l.Tv)(f, R.info, i));
                    break;
                case h.he.CARD:
                    try {
                        let e = N ? await (0, l.im)(...t) : await (0, l.u6)(v, C.token, R.info, i);
                        g(e);
                    } catch {}
                    break;
                case h.he.VENMO:
                case h.he.PAYPAL:
                    try {
                        s()(null != w, "Missing braintreeNonce");
                        let e = await (0, l.u1)(w, R.info, i);
                        g(e);
                    } catch {}
                    break;
                case h.he.EPS:
                    try {
                        let e = await (0, l.Z9)(v, x, R.info, i);
                        g(e);
                    } catch (e) {
                        m.warn(e);
                    }
                    break;
                case h.he.IDEAL:
                    try {
                        let e = N ? await (0, l.im)(...t) : await (0, l.EB)(v, R.info, i);
                        g(e);
                    } catch (e) {
                        m.warn(e);
                    }
                    break;
                case h.he.PRZELEWY24:
                    try {
                        if (void 0 === k) throw (0, l.i0)("Bank required for Przelewy24");
                        let e = await (0, l.TD)(v, { p24Bank: k }, R.info, i);
                        g(e);
                    } catch {}
                    break;
                case h.he.PAYSAFE_CARD:
                case h.he.GRABPAY_MY:
                    try {
                        let t = await (0, l.A8)(R.info, e, i);
                        g(t);
                    } catch {}
                    break;
                case h.he.GCASH:
                case h.he.MOMO_WALLET:
                case h.he.KAKAOPAY:
                case h.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, l.$M)(R.info, e, i);
                        L(t);
                    } catch {}
                    break;
                case h.he.GIROPAY:
                case h.he.BANCONTACT:
                    try {
                        let t = await (0, l.bw)(v, R.info, e, i);
                        g(t);
                    } catch {}
                    break;
                case h.he.CASH_APP:
                    try {
                        s()(null != M, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, l.$M)(R.info, e, i, M, a);
                        s()(null != t, "Cash App Pay Payment Source missing"), g(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            D || b(!1);
        },
        G = A.methodType,
        { backStep: F } = N
            ? { backStep: d.pn.PAYMENT_ELEMENT }
            : ((e) => {
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
              })(G),
        V = N ? () => T(void 0) : () => o(F);
    return (0, r.jsx)(p.uv, {
        onBack: V,
        primaryCTA: _.Ay.CTAType.CONTINUE,
        primaryText: E.intl.string(E.t.PDTjLN),
        primarySubmitting: O,
        primaryDisabled: !R.isValid || P,
        onPrimary: U,
        shouldUseManaModal: n,
    });
}
