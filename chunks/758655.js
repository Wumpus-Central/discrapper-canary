n.d(t, { A: () => O }), n(938796);
var l = n(627968),
    r = n(64700),
    i = n(304072),
    a = n(71804),
    s = n(426398),
    o = n(655857),
    u = n(666646),
    c = n(558620),
    d = n(427675),
    C = n(211159),
    p = n(427858),
    m = n(163437),
    _ = n(166532),
    E = n(566980),
    T = n(871084),
    I = n(534479),
    S = n(482132),
    h = n(953761),
    A = n(975965);
function O(e) {
    let { handleStepChange: t, planGroup: n, openInvoiceId: O, analyticsData: x, analyticsLocation: f } = e,
        {
            purchaseState: P,
            contextMetadata: g,
            purchaseError: N,
            setUpdatedSubscription: R,
            setCurrency: v,
            activeSubscription: U,
        } = (0, C.t4)((e) => ({
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
            setCurrency: e.setCheckoutCurrency,
            activeSubscription: e.activeSubscription,
        })),
        { paymentSources: y } = (0, s.jm)(),
        { dropdownCurrencies: j } = (0, o.Jn)(),
        { subscriptionMetadataRequest: M, showBenefitsFirst: L } = (0, A.l)(),
        k = L ? _.pn.BENEFITS : void 0,
        F = (0, c.A)(),
        b = (0, d.S3)();
    if (null == F)
        throw new a.v({ message: "Expected plan to be selected", extraSentryInformation: { selectedPlan: F } });
    let w = r.useRef(null),
        [D, H] = (0, i.A)(!1, 500),
        G = (0, u.mx)(),
        K = (0, m.bg)(b?.flags ?? 0);
    r.useEffect(() => {
        null != N && null != w.current && w.current.scrollIntoView({ behavior: "smooth" });
    }, [N]);
    let B = r.useCallback(
            (e) => {
                R(e ?? null), t(_.pn.CONFIRM);
            },
            [t, R],
        ),
        V = r.useRef(null),
        W = r.useCallback(() => {
            t(_.pn.ADD_PAYMENT_STEPS);
        }, [t]);
    return P === E.h.PURCHASING
        ? (0, l.jsx)(I.A, {})
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(S.dZ, {
                      children:
                          null == U
                              ? (0, l.jsx)(h._, {
                                    selectedPlanId: F.id,
                                    planGroup: n,
                                    paymentSources: y,
                                    handlePaymentSourceAdd: W,
                                    metadata: K ? void 0 : M,
                                })
                              : (0, l.jsx)(p.A, {
                                    premiumSubscription: U,
                                    paymentSources: y,
                                    handlePaymentSourceAdd: W,
                                    planId: F.id,
                                    planGroup: n,
                                    currencies: j,
                                    onCurrencyChange: (e) => v(e),
                                    hasOpenInvoice: null != O,
                                    purchaseState: P,
                                }),
                  }),
                  (0, l.jsx)(S.UX, {
                      children: (0, l.jsx)(T.A, {
                          premiumSubscription: U ?? null,
                          onBack: () => null != k && t(k),
                          onNext: B,
                          legalTermsNodeRef: V,
                          flashLegalTerms: () => H(!0),
                          analyticsLocation: f,
                          baseAnalyticsData: x,
                          flowStartTime: g.startTime,
                          planGroup: n,
                          openInvoiceId: O,
                          metadata: K ? void 0 : M,
                          backButtonEligible: !!L || void 0,
                          invoiceError: G,
                          disablePurchase: M?.guild_id == null && !K,
                          onPaymentSourceAdd: W,
                      }),
                  }),
              ],
          });
}
