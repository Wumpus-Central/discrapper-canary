n.d(t, { Z: () => I }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(734530),
    s = n(120356),
    o = n.n(s),
    l = n(846519),
    u = n(481060),
    c = n(609194),
    d = n(881052),
    f = n(128069),
    _ = n(563132),
    p = n(409813);
n(51499), n(614277);
var h = n(122289),
    m = n(70956),
    g = n(981631),
    E = n(388032),
    v = n(719919);
let y = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);
function I(e) {
    let { steps: t, currentStep: n, body: s, paymentError: I, header: T, footer: b, isGift: S = !1, giftMessage: A = E.intl.string(E.t.DrgnS0), hideBreadcrumbs: N = !1, isLoading: C = !1, purchaseError: R, purchaseErrorBlockRef: O, planError: D, onScroll: x, scrollerClassName: L, hasCurrencies: P = !1 } = e,
        w = null;
    null != I && null == (0, p.ly)(I) ? (w = I) : null != R ? (w = R) : null != D && (w = D);
    let M = null != w ? w.message : '';
    null != w && w instanceof d.HF && (w.code === f.SM.CARD_DECLINED && P && (M += ' '.concat(E.intl.string(E.t.iWvwQU))), w.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.intl.string(E.t.ypuSd3)), w.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.intl.string(E.t.mXMmWF)));
    let { stripe: k } = (0, _.JL)();
    C = C || null == k;
    let U = r.useRef(new l.V7());
    r.useEffect(() => {
        let e = U.current;
        return (
            null != k || e.isStarted()
                ? null != k && e.stop()
                : e.start(10 * m.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, h.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [k]);
    let G = t.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(a.Elements, {
        options: g.OBo,
        stripe: k,
        children: [
            T,
            (0, i.jsxs)('div', {
                className: o()('paymentModalContent', v.content),
                children: [
                    S && n !== p.h8.CONFIRM
                        ? (0, i.jsx)(c.Z, {
                              className: v.paymentNote,
                              iconSize: c.Z.Sizes.SMALL,
                              icon: u.OgN,
                              color: null == A ? c.Z.Colors.PRIMARY : c.Z.Colors.SECONDARY,
                              children: A
                          })
                        : null,
                    N
                        ? null
                        : (0, i.jsx)('div', {
                              className: v.breadcrumbsWrapper,
                              children: (0, i.jsx)(u.OoM, {
                                  activeId: p.Ck.has(n) ? G : n,
                                  breadcrumbs: t
                                      .filter((e) => !p.Ck.has(e) && !y.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, p.DJ)(e)
                                      }))
                              })
                          }),
                    (0, i.jsxs)('div', {
                        className: v.bodyWrapper,
                        children: [
                            null == w
                                ? null
                                : (0, i.jsx)('div', {
                                      className: v.errorBlockWrapper,
                                      children: (0, i.jsx)(u.kzN, {
                                          ref: O,
                                          children: M
                                      })
                                  }),
                            C
                                ? (0, i.jsx)(u.$jN, { className: v.loadingBlock })
                                : (0, i.jsx)(u.qBt, {
                                      className: v.sequencer,
                                      staticClassName: v.sequencerStatic,
                                      animatedNodeClassName: v.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, i.jsx)(u.h21, {
                                          onScroll: x,
                                          className: o()(v.scroller, L),
                                          children: s
                                      })
                                  })
                        ]
                    })
                ]
            }),
            b
        ]
    });
}
