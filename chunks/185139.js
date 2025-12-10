n.d(t, { Z: () => O }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(575053),
    o = n(120356),
    s = n.n(o),
    l = n(846519),
    c = n(481060),
    u = n(609194),
    d = n(881052),
    f = n(128069),
    p = n(563132),
    _ = n(409813);
n(51499), n(614277);
var m = n(122289),
    h = n(70956),
    g = n(981631),
    E = n(388032),
    b = n(987954);
let y = new Set([_.h8.SKU_SELECT, _.h8.AWAITING_AUTHENTICATION, _.h8.AWAITING_PURCHASE_TOKEN_AUTH, _.h8.CONFIRM]);
function O(e) {
    let {
            steps: t,
            currentStep: n,
            body: o,
            overrideKey: O,
            paymentError: v,
            header: S,
            footer: I,
            isGift: T = !1,
            giftMessage: C = E.intl.string(E.t["DrgnS+"]),
            hideBreadcrumbs: A = !1,
            isLoading: N = !1,
            purchaseError: P,
            purchaseErrorBlockRef: R,
            planError: D,
            onScroll: w,
            scrollerClassName: x,
            hasCurrencies: L = !1,
        } = e,
        j = null;
    null != v && null == (0, _.ly)(v) ? (j = v) : null != P ? (j = P) : null != D && (j = D);
    let M = null != j ? j.message : "";
    null != j &&
        j instanceof d.HF &&
        (j.code === f.SM.CARD_DECLINED && L && (M += " ".concat(E.intl.string(E.t.iWvwQS))),
        j.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.intl.string(E.t.ypuSd8)),
        j.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.intl.string(E.t.mXMmWE)));
    let { stripe: k } = (0, p.JL)();
    N = N || null == k;
    let U = i.useRef(new l.V7());
    i.useEffect(() => {
        let e = U.current;
        return (
            null != k || e.isStarted()
                ? null != k && e.stop()
                : e.start(10 * h.Z.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, m.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [k]);
    let G = t.includes(_.h8.PAYMENT_TYPE) ? _.h8.PAYMENT_TYPE : _.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(a.Elements, {
        options: g.OBo,
        stripe: k,
        children: [
            S,
            (0, r.jsxs)("div", {
                className: s()("paymentModalContent", b.content),
                children: [
                    T && n !== _.h8.CONFIRM
                        ? (0, r.jsx)(u.Z, {
                              className: b.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.OgN,
                              color: null == C ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: C,
                          })
                        : null,
                    A
                        ? null
                        : (0, r.jsx)("div", {
                              className: b.breadcrumbsWrapper,
                              children: (0, r.jsx)(c.OoM, {
                                  activeId: _.Ck.has(n) ? G : n,
                                  breadcrumbs: t
                                      .filter((e) => !_.Ck.has(e) && !y.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, _.DJ)(e),
                                      })),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: b.bodyWrapper,
                        children: [
                            null == j
                                ? null
                                : (0, r.jsx)("div", {
                                      className: b.errorBlockWrapper,
                                      ref: R,
                                      children: (0, r.jsx)(c.M14, {
                                          type: "critical",
                                          children: M,
                                      }),
                                  }),
                            N
                                ? (0, r.jsx)(c.$jN, { className: b.loadingBlock })
                                : (0, r.jsx)(c.qBt, {
                                      className: b.sequencer,
                                      overrideKey: O,
                                      staticClassName: b.sequencerStatic,
                                      animatedNodeClassName: b.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, r.jsx)(c.h21, {
                                          onScroll: w,
                                          className: s()(b.scroller, x),
                                          children: o,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            I,
        ],
    });
}
