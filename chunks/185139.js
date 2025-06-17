n.d(t, { Z: () => T }), n(388685), n(415506);
var r = n(255367),
    i = n(73800),
    a = n(957957),
    o = n(120356),
    s = n.n(o),
    l = n(846519),
    c = n(481060),
    u = n(609194),
    d = n(881052),
    f = n(128069),
    _ = n(483454),
    p = n(563132),
    h = n(409813);
n(51499), n(614277);
var m = n(122289),
    g = n(70956),
    E = n(981631),
    b = n(388032),
    y = n(106194);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let I = new Set([h.h8.SKU_SELECT, h.h8.AWAITING_AUTHENTICATION, h.h8.AWAITING_PURCHASE_TOKEN_AUTH, h.h8.CONFIRM]);
function T(e) {
    let { steps: t, currentStep: n, body: o, paymentError: O, header: T, footer: S, isGift: A = !1, giftMessage: N = b.intl.string(b.t.DrgnS0), hideBreadcrumbs: C = !1, isLoading: R = !1, purchaseError: P, purchaseErrorBlockRef: w, planError: D, onScroll: L, scrollerClassName: x, hasCurrencies: k = !1 } = e,
        M = null;
    null != O && null == (0, h.ly)(O) ? (M = O) : null != P ? (M = P) : null != D && (M = D);
    let j = null != M ? M.message : '';
    null != M && M instanceof d.HF && (M.code === f.SM.CARD_DECLINED && k && (j += ' '.concat(b.intl.string(b.t.iWvwQU))), M.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (j = b.intl.string(b.t.ypuSd3)), M.code === E.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (j = b.intl.string(b.t.mXMmWF)));
    let { stripe: U, paymentElementsEnabled: G } = (0, p.JL)();
    R = R || null == U;
    let B = i.useRef(new l.V7());
    i.useEffect(() => {
        let e = B.current;
        return (
            null != U || e.isStarted()
                ? null != U && e.stop()
                : e.start(10 * g.Z.Millis.SECOND, () => {
                      let e = Error('Stripe took too long to load');
                      (0, m.q2)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [U]);
    let V = t.includes(h.h8.PAYMENT_TYPE) ? h.h8.PAYMENT_TYPE : h.h8.ADD_PAYMENT_STEPS,
        { elementsOptions: F } = (0, _.ai)({ shouldGenerateSetupIntent: !1 });
    return (0, r.jsxs)(a.Elements, {
        options: v({}, E.OBo, G && F),
        stripe: U,
        children: [
            T,
            (0, r.jsxs)('div', {
                className: s()('paymentModalContent', y.content),
                children: [
                    A && n !== h.h8.CONFIRM
                        ? (0, r.jsx)(u.Z, {
                              className: y.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.OgN,
                              color: null == N ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: N
                          })
                        : null,
                    C
                        ? null
                        : (0, r.jsx)('div', {
                              className: y.breadcrumbsWrapper,
                              children: (0, r.jsx)(c.OoM, {
                                  activeId: h.Ck.has(n) ? V : n,
                                  breadcrumbs: t
                                      .filter((e) => !h.Ck.has(e) && !I.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, h.DJ)(e)
                                      }))
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: y.bodyWrapper,
                        children: [
                            null == M
                                ? null
                                : (0, r.jsx)('div', {
                                      className: y.errorBlockWrapper,
                                      children: (0, r.jsx)(c.kzN, {
                                          ref: w,
                                          children: j
                                      })
                                  }),
                            R
                                ? (0, r.jsx)(c.$jN, { className: y.loadingBlock })
                                : (0, r.jsx)(c.qBt, {
                                      className: y.sequencer,
                                      staticClassName: y.sequencerStatic,
                                      animatedNodeClassName: y.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, r.jsx)(c.h21, {
                                          onScroll: L,
                                          className: s()(y.scroller, x),
                                          children: o
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
