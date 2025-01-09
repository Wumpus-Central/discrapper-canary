n.d(r, {
    Z: function () {
        return v;
    }
}),
    n(47120),
    n(411104);
var l = n(200651),
    o = n(192379),
    t = n(734530),
    s = n(120356),
    a = n.n(s),
    i = n(846519),
    c = n(481060),
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
    y = n(719919);
let b = new Set([f.h8.SKU_SELECT, f.h8.AWAITING_AUTHENTICATION, f.h8.AWAITING_PURCHASE_TOKEN_AUTH, f.h8.CONFIRM]);
function v(e) {
    let { steps: r, currentStep: n, body: s, paymentError: v, header: S, footer: C, isGift: g = !1, giftMessage: E = N.intl.string(N.t.DrgnS0), hideBreadcrumbs: j = !1, isLoading: P = !1, purchaseError: A, purchaseErrorBlockRef: I, planError: k, onScroll: T, scrollerClassName: D, hasCurrencies: B = !1 } = e,
        M = null;
    null != v && null == (0, f.ly)(v) ? (M = v) : null != A ? (M = A) : null != k && (M = k);
    let R = null != M ? M.message : '';
    null != M && M instanceof u.HF && (M.code === p.SM.CARD_DECLINED && B && (R += ' '.concat(N.intl.string(N.t.iWvwQU))), M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (R = N.intl.string(N.t.ypuSd3)), M.code === x.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (R = N.intl.string(N.t.mXMmWF)));
    let { stripe: L } = (0, m.usePaymentContext)();
    P = P || null == L;
    let O = o.useRef(new i.V7());
    o.useEffect(() => {
        let e = O.current;
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
    let w = r.includes(f.h8.PAYMENT_TYPE) ? f.h8.PAYMENT_TYPE : f.h8.ADD_PAYMENT_STEPS;
    return (0, l.jsxs)(t.Elements, {
        options: x.OBo,
        stripe: L,
        children: [
            S,
            (0, l.jsxs)('div', {
                className: a()('paymentModalContent', y.content),
                children: [
                    g && n !== f.h8.CONFIRM
                        ? (0, l.jsx)(d.Z, {
                              className: y.paymentNote,
                              iconSize: d.Z.Sizes.SMALL,
                              icon: c.GiftIcon,
                              color: null == E ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                              children: E
                          })
                        : null,
                    j
                        ? null
                        : (0, l.jsx)('div', {
                              className: y.breadcrumbsWrapper,
                              children: (0, l.jsx)(c.Breadcrumbs, {
                                  activeId: f.Ck.has(n) ? w : n,
                                  breadcrumbs: r
                                      .filter((e) => !f.Ck.has(e) && !b.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, f.DJ)(e)
                                      }))
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: y.bodyWrapper,
                        children: [
                            null == M
                                ? null
                                : (0, l.jsx)('div', {
                                      className: y.errorBlockWrapper,
                                      children: (0, l.jsx)(c.FormErrorBlock, {
                                          ref: I,
                                          children: R
                                      })
                                  }),
                            P
                                ? (0, l.jsx)(c.Spinner, { className: y.loadingBlock })
                                : (0, l.jsx)(c.Sequencer, {
                                      className: y.sequencer,
                                      staticClassName: y.sequencerStatic,
                                      animatedNodeClassName: y.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: r,
                                      sideMargin: 20,
                                      children: (0, l.jsx)(c.AdvancedScrollerThin, {
                                          onScroll: T,
                                          className: a()(y.scroller, D),
                                          children: s
                                      })
                                  })
                        ]
                    })
                ]
            }),
            C
        ]
    });
}
