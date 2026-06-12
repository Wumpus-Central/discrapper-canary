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
    T = n(166926),
    I = n(534479),
    S = n(482132),
    h = n(953761),
    A = n(975965);
function O(e) {
    let { handleStepChange: t, planGroup: n, openInvoiceId: O, analyticsData: f, analyticsLocation: x } = e,
        {
            purchaseState: P,
            contextMetadata: g,
            purchaseError: N,
            setCurrency: R,
            activeSubscription: v,
        } = (0, C.t4)((e) => ({
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setCurrency: e.setCheckoutCurrency,
            activeSubscription: e.activeSubscription,
        })),
        { paymentSources: y } = (0, s.jm)(),
        { dropdownCurrencies: U } = (0, o.Jn)(),
        { subscriptionMetadataRequest: j, showBenefitsFirst: M } = (0, A.l)(),
        L = M ? _.pn.BENEFITS : void 0,
        k = (0, c.A)(),
        F = (0, d.S3)();
    if (null == k)
        throw new a.v({ message: "Expected plan to be selected", extraSentryInformation: { selectedPlan: k } });
    let b = r.useRef(null),
        [w, D] = (0, i.A)(!1, 500),
        H = (0, u.mx)(),
        G = (0, m.bg)(F?.flags ?? 0);
    r.useEffect(() => {
        null != N && null != b.current && b.current.scrollIntoView({ behavior: "smooth" });
    }, [N]);
    let K = r.useRef(null),
        B = r.useCallback(() => {
            t(_.pn.ADD_PAYMENT_STEPS);
        }, [t]);
    return P === E.h.PURCHASING
        ? (0, l.jsx)(I.A, {})
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(S.dZ, {
                      children:
                          null == v
                              ? (0, l.jsx)(h._, {
                                    selectedPlanId: k.id,
                                    planGroup: n,
                                    paymentSources: y,
                                    handlePaymentSourceAdd: B,
                                    metadata: G ? void 0 : j,
                                })
                              : (0, l.jsx)(p.A, {
                                    premiumSubscription: v,
                                    paymentSources: y,
                                    handlePaymentSourceAdd: B,
                                    planId: k.id,
                                    planGroup: n,
                                    currencies: U,
                                    onCurrencyChange: (e) => R(e),
                                    hasOpenInvoice: null != O,
                                    purchaseState: P,
                                }),
                  }),
                  (0, l.jsx)(S.UX, {
                      children: (0, l.jsx)(T.U, {
                          premiumSubscription: v ?? null,
                          onBack: () => null != L && t(L),
                          handleStepChange: t,
                          postPurchaseStep: _.pn.CONFIRM,
                          legalTermsNodeRef: K,
                          flashLegalTerms: () => D(!0),
                          analyticsLocation: x,
                          baseAnalyticsData: f,
                          flowStartTime: g.startTime,
                          planGroup: n,
                          openInvoiceId: O,
                          metadata: G ? void 0 : j,
                          backButtonEligible: !!M || void 0,
                          invoiceError: H,
                          disablePurchase: j?.guild_id == null && !G,
                          onPaymentSourceAdd: B,
                      }),
                  }),
              ],
          });
}
