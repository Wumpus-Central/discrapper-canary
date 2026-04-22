n.d(t, { Ej: () => y, bC: () => f });
var l = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    r = n(311907),
    s = n(959391),
    o = n(323082),
    u = n(626584),
    c = n(156312),
    d = n(166532),
    p = n(19311),
    m = n(825755),
    h = n(836308),
    A = n(818348),
    _ = n(985018);
let C = new u.A("AddPaymentAddressStep.tsx");
function E(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, r.bG)([m.A], () => m.A.error);
    return (0, l.jsx)(s.n, { billingAddressInfo: t, billingError: a, onBillingAddressChange: n, paymentSourceType: i });
}
function y(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: i } = e,
        { billingAddressState: a, setBillingAddressState: r } = t;
    return n
        ? null
        : (0, l.jsx)(E, {
              billingAddressInfo: a.info,
              onBillingAddressChange: (e, t) => {
                  r({ info: { ...a.info, ...e }, isValid: t });
              },
              paymentSourceType: i,
          });
}
function f(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: i,
            overwriteSubscriptionPaymentSource: r,
            handleStepChange: s,
            onPaymentRequestSourceFailed: u,
            paymentRequestPaymentMethod: m,
            completeSteps: E,
            paymentMethodSteps: y,
            paymentElementSelectedType: f,
            returnToPaymentElementStep: P,
            combinedStripeElementsRef: S,
            lastConfirmedSetupIntentRef: x,
            shouldUsePaymentElement: T,
        } = e,
        { stripe: N } = (0, c.P5)(),
        {
            tokenState: g,
            isSubmittingCurrentStep: I,
            billingAddressState: v,
            setIsSubmittingCurrentStep: b,
            hasRedirectURL: R,
            setHasRedirectURL: M,
            braintreeNonce: j,
            adyenPaymentData: L,
            isAuthenticating: O,
            epsBankState: D,
            p24BankState: U,
        } = t,
        w = async () => {
            b(!0);
            let e = T ? f : y.methodType,
                t = [
                    N,
                    S.current,
                    { billingAddress: v.info, paymentSourceType: e ?? A.he.UNKNOWN, lastConfirmedSetupIntentRef: x },
                    i,
                ];
            switch (e) {
                case A.he.PAYMENT_REQUEST:
                    if (T) {
                        try {
                            let e = await (0, o.im)(...t);
                            E(e);
                        } catch (e) {
                            b(!1), C.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == m) throw (u(), (0, o.i0)("Missing paymentRequestPaymentMethod"));
                    E(await (0, o.Tv)(m, v.info, i));
                    break;
                case A.he.CARD:
                    try {
                        let e = T ? await (0, o.im)(...t) : await (0, o.u6)(N, g.token, v.info, i);
                        E(e);
                    } catch {}
                    break;
                case A.he.VENMO:
                case A.he.PAYPAL:
                    try {
                        a()(null != j, "Missing braintreeNonce");
                        let e = await (0, o.u1)(j, v.info, i);
                        E(e);
                    } catch {}
                    break;
                case A.he.EPS:
                    try {
                        let e = await (0, o.Z9)(N, D, v.info, i);
                        E(e);
                    } catch (e) {
                        C.warn(e);
                    }
                    break;
                case A.he.IDEAL:
                    try {
                        let e = T ? await (0, o.im)(...t) : await (0, o.EB)(N, v.info, i);
                        E(e);
                    } catch (e) {
                        C.warn(e);
                    }
                    break;
                case A.he.PRZELEWY24:
                    try {
                        if (void 0 === U) throw (0, o.i0)("Bank required for Przelewy24");
                        let e = await (0, o.TD)(N, { p24Bank: U }, v.info, i);
                        E(e);
                    } catch {}
                    break;
                case A.he.PAYSAFE_CARD:
                case A.he.GRABPAY_MY:
                    try {
                        let t = await (0, o.A8)(v.info, e, i);
                        E(t);
                    } catch {}
                    break;
                case A.he.GCASH:
                case A.he.MOMO_WALLET:
                case A.he.KAKAOPAY:
                case A.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, o.$M)(v.info, e, i);
                        M(t);
                    } catch {}
                    break;
                case A.he.GIROPAY:
                case A.he.BANCONTACT:
                    try {
                        let t = await (0, o.bw)(N, v.info, e, i);
                        E(t);
                    } catch {}
                    break;
                case A.he.CASH_APP:
                    try {
                        a()(null != L, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, o.$M)(v.info, e, i, L, r);
                        a()(null != t, "Cash App Pay Payment Source missing"), E(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            R || b(!1);
        },
        k = y.methodType,
        { backStep: F } = T
            ? { backStep: d.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case A.he.CARD:
                          return { backStep: d.pn.CREDIT_CARD_INFORMATION };
                      case A.he.PAYPAL:
                          return { backStep: d.pn.PAYPAL_INFORMATION };
                      case A.he.VENMO:
                          return { backStep: d.pn.VENMO_INFORMATION };
                      case A.he.GIROPAY:
                      case A.he.PAYSAFE_CARD:
                      case A.he.GCASH:
                      case A.he.GRABPAY_MY:
                      case A.he.MOMO_WALLET:
                      case A.he.KAKAOPAY:
                      case A.he.GOPAY_WALLET:
                      case A.he.BANCONTACT:
                          return { backStep: d.pn.PAYMENT_TYPE };
                      case A.he.EPS:
                          return { backStep: d.pn.EPS_INFORMATION };
                      case A.he.IDEAL:
                          return { backStep: d.pn.IDEAL_INFORMATION };
                      case A.he.PRZELEWY24:
                          return { backStep: d.pn.PRZELEWY24_INFORMATION };
                      case A.he.CASH_APP:
                          return { backStep: d.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: d.pn.PAYMENT_TYPE };
                  }
              })(k),
        G = T ? () => P(void 0) : () => s(F);
    return (0, l.jsx)(h.uv, {
        onBack: G,
        primaryCTA: p.Ay.CTAType.CONTINUE,
        primaryText: _.intl.string(_.t.PDTjLN),
        primarySubmitting: I,
        primaryDisabled: !v.isValid || O,
        onPrimary: w,
        shouldUseManaModal: n,
    });
}
