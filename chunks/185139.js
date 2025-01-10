n.d(r, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(411104);
var l = n(200651),
    t = n(192379),
    o = n(734530),
    s = n(120356),
    a = n.n(s),
    c = n(846519),
    i = n(481060),
    d = n(609194),
    u = n(881052),
    p = n(128069),
    m = n(563132),
    f = n(409813);
n(51499), n(614277);
var h = n(122289),
    _ = n(70956),
    x = n(981631),
    N = n(388032),
    S = n(719919);
let y = new Set([f.h8.SKU_SELECT, f.h8.AWAITING_AUTHENTICATION, f.h8.AWAITING_PURCHASE_TOKEN_AUTH, f.h8.CONFIRM]);
function b(e) {
    let { steps: r, currentStep: n, body: s, paymentError: b, header: v, footer: E, isGift: g = !1, giftMessage: j = N.intl.string(N.t.DrgnS0), hideBreadcrumbs: C = !1, isLoading: P = !1, purchaseError: A, purchaseErrorBlockRef: I, planError: k, onScroll: T, scrollerClassName: D, hasCurrencies: B = !1 } = e,
        M = null;
    null != b && null == (0, f.ly)(b) ? (M = b) : null != A ? (M = A) : null != k && (M = k);
    let R = null != M ? M.message : '';
    null != M && M instanceof u.HF && (M.code === p.SM.CARD_DECLINED && B && (R += ' '.concat(N.intl.string(N.t.iWvwQU))), M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (R = N.intl.string(N.t.ypuSd3)), M.code === x.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (R = N.intl.string(N.t.mXMmWF)));
    let { stripe: L } = (0, m.usePaymentContext)();
    P = P || null == L;
    let w = t.useRef(new c.V7());
    t.useEffect(() => {
        let e = w.current;
        return (
            null != L || e.isStarted()
                ? null != L && e.stop()
                : e.start(10 * _.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, h.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [L]);
    let U = r.includes(f.h8.PAYMENT_TYPE) ? f.h8.PAYMENT_TYPE : f.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(o.Elements, {
        options: x.OBo,
        stripe: L,
        children: [
            v,
            (0, l.jsxs)('div', {
                className: a()('paymentModalContent', S.content),
                children: [
                    g && n !== f.h8.CONFIRM
                        ? (0, l.jsx)(d.Z, {
                              className: S.paymentNote,
                              iconSize: d.Z.Sizes.SMALL,
                              icon: i.GiftIcon,
                              color: null == j ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                              children: j
                          })
                        : null,
                    C
                        ? null
                        : (0, l.jsx)('div', {
                              className: S.breadcrumbsWrapper,
                              children: (0, l.jsx)(i.Breadcrumbs, {
                                  activeId: f.Ck.has(n) ? U : n,
                                  breadcrumbs: r
                                      .filter((e) => !f.Ck.has(e) && !y.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, f.DJ)(e)
                                      }))
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: S.bodyWrapper,
                        children: [
                            null == M
                                ? null
                                : (0, l.jsx)('div', {
                                      className: S.errorBlockWrapper,
                                      children: (0, l.jsx)(i.FormErrorBlock, {
                                          ref: I,
                                          children: R
                                      })
                                  }),
                            P
                                ? (0, l.jsx)(i.Spinner, { className: S.loadingBlock })
                                : (0, l.jsx)(i.Sequencer, {
                                      className: S.sequencer,
                                      staticClassName: S.sequencerStatic,
                                      animatedNodeClassName: S.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: r,
                                      sideMargin: 20,
                                      children: (0, l.jsx)(i.AdvancedScrollerThin, {
                                          onScroll: T,
                                          className: a()(S.scroller, D),
                                          children: s
                                      })
                                  })
                        ]
                    })
                ]
            }),
            E
        ]
    });
}
