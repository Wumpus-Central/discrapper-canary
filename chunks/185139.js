r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(734530);
var u = r(120356),
    c = r.n(u),
    d = r(846519),
    f = r(481060),
    p = r(609194),
    h = r(881052),
    _ = r(128069),
    m = r(563132),
    g = r(409813);
r(51499), r(614277);
var E = r(122289),
    v = r(70956),
    y = r(981631),
    b = r(388032),
    I = r(719919);
let T = new Set([g.h8.SKU_SELECT, g.h8.AWAITING_AUTHENTICATION, g.h8.AWAITING_PURCHASE_TOKEN_AUTH, g.h8.CONFIRM]);
function S(e) {
    let { steps: n, currentStep: r, body: i, paymentError: a, header: u, footer: S, isGift: A = !1, giftMessage: C = b.intl.string(b.t.DrgnS0), hideBreadcrumbs: N = !1, isLoading: R = !1, purchaseError: O, purchaseErrorBlockRef: D, planError: x, onScroll: L, scrollerClassName: w, hasCurrencies: P = !1 } = e,
        M = null;
    null != a && null == (0, g.ly)(a) ? (M = a) : null != O ? (M = O) : null != x && (M = x);
    let k = null != M ? M.message : '';
    null != M && M instanceof h.HF && (M.code === _.SM.CARD_DECLINED && P && (k += ' '.concat(b.intl.string(b.t.iWvwQU))), M.code === _.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = b.intl.string(b.t.ypuSd3)), M.code === y.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = b.intl.string(b.t.mXMmWF)));
    let { stripe: U } = (0, m.usePaymentContext)();
    R = R || null == U;
    let B = s.useRef(new d.V7());
    s.useEffect(() => {
        let e = B.current;
        return (
            null != U || e.isStarted()
                ? null != U && e.stop()
                : e.start(10 * v.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, E.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [U]);
    let G = n.includes(g.h8.PAYMENT_TYPE) ? g.h8.PAYMENT_TYPE : g.h8.ADD_PAYMENT_STEPS;
    return (0, o.jsxs)(l.Elements, {
        options: y.OBo,
        stripe: U,
        children: [
            u,
            (0, o.jsxs)('div', {
                className: c()('paymentModalContent', I.content),
                children: [
                    A && r !== g.h8.CONFIRM
                        ? (0, o.jsx)(p.Z, {
                              className: I.paymentNote,
                              iconSize: p.Z.Sizes.SMALL,
                              icon: f.GiftIcon,
                              color: null == C ? p.Z.Colors.PRIMARY : p.Z.Colors.SECONDARY,
                              children: C
                          })
                        : null,
                    N
                        ? null
                        : (0, o.jsx)('div', {
                              className: I.breadcrumbsWrapper,
                              children: (0, o.jsx)(f.Breadcrumbs, {
                                  activeId: g.Ck.has(r) ? G : r,
                                  breadcrumbs: n
                                      .filter((e) => !g.Ck.has(e) && !T.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, g.DJ)(e)
                                      }))
                              })
                          }),
                    (0, o.jsxs)('div', {
                        className: I.bodyWrapper,
                        children: [
                            null == M
                                ? null
                                : (0, o.jsx)('div', {
                                      className: I.errorBlockWrapper,
                                      children: (0, o.jsx)(f.FormErrorBlock, {
                                          ref: D,
                                          children: k
                                      })
                                  }),
                            R
                                ? (0, o.jsx)(f.Spinner, { className: I.loadingBlock })
                                : (0, o.jsx)(f.Sequencer, {
                                      className: I.sequencer,
                                      staticClassName: I.sequencerStatic,
                                      animatedNodeClassName: I.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: r,
                                      steps: n,
                                      sideMargin: 20,
                                      children: (0, o.jsx)(f.AdvancedScrollerThin, {
                                          onScroll: L,
                                          className: c()(I.scroller, w),
                                          children: i
                                      })
                                  })
                        ]
                    })
                ]
            }),
            S
        ]
    });
}
