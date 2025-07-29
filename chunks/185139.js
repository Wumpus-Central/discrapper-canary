(n.d(t, { Z: () => O }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(245364),
    o = n(120356),
    s = n.n(o),
    l = n(846519),
    c = n(481060),
    u = n(609194),
    d = n(881052),
    _ = n(128069),
    f = n(563132),
    p = n(409813);
(n(51499), n(27034));
var h = n(122289),
    m = n(70956),
    g = n(981631),
    E = n(388032),
    b = n(106194);
let y = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);
function O(e) {
    let { steps: t, currentStep: n, body: o, overrideKey: O, paymentError: v, header: I, footer: T, isGift: S = !1, giftMessage: A = E.intl.string(E.t.DrgnS0), hideBreadcrumbs: N = !1, isLoading: C = !1, purchaseError: R, purchaseErrorBlockRef: P, planError: w, onScroll: D, scrollerClassName: L, hasCurrencies: x = !1 } = e,
        M = null;
    null != v && null == (0, p.ly)(v) ? (M = v) : null != R ? (M = R) : null != w && (M = w);
    let k = null != M ? M.message : '';
    null != M && M instanceof d.HF && (M.code === _.SM.CARD_DECLINED && x && (k += ' '.concat(E.intl.string(E.t.iWvwQU))), M.code === _.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = E.intl.string(E.t.ypuSd3)), M.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = E.intl.string(E.t.mXMmWF)));
    let { stripe: j } = (0, f.JL)();
    C = C || null == j;
    let U = i.useRef(new l.V7());
    i.useEffect(() => {
        let e = U.current;
        return (
            null != j || e.isStarted()
                ? null != j && e.stop()
                : e.start(10 * m.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, h.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [j]);
    let G = t.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(a.Elements, {
        options: g.OBo,
        stripe: j,
        children: [
            I,
            (0, r.jsxs)('div', {
                className: s()('paymentModalContent', b.content),
                children: [
                    S && n !== p.h8.CONFIRM
                        ? (0, r.jsx)(u.Z, {
                              className: b.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.OgN,
                              color: null == A ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: A
                          })
                        : null,
                    N
                        ? null
                        : (0, r.jsx)('div', {
                              className: b.breadcrumbsWrapper,
                              children: (0, r.jsx)(c.OoM, {
                                  activeId: p.Ck.has(n) ? G : n,
                                  breadcrumbs: t
                                      .filter((e) => !p.Ck.has(e) && !y.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, p.DJ)(e)
                                      }))
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: b.bodyWrapper,
                        children: [
                            null == M
                                ? null
                                : (0, r.jsx)('div', {
                                      className: b.errorBlockWrapper,
                                      children: (0, r.jsx)(c.kzN, {
                                          ref: P,
                                          children: k
                                      })
                                  }),
                            C
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
                                          onScroll: D,
                                          className: s()(b.scroller, L),
                                          children: o
                                      })
                                  })
                        ]
                    })
                ]
            }),
            T
        ]
    });
}
