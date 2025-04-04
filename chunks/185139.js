n.d(t, { Z: () => v }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(734530),
    a = n(120356),
    s = n.n(a),
    l = n(846519),
    c = n(481060),
    u = n(609194),
    d = n(881052),
    f = n(128069),
    _ = n(563132),
    p = n(409813);
n(51499), n(614277);
var h = n(122289),
    m = n(70956),
    g = n(981631),
    E = n(388032),
    b = n(106194);
let y = new Set([p.h8.SKU_SELECT, p.h8.AWAITING_AUTHENTICATION, p.h8.AWAITING_PURCHASE_TOKEN_AUTH, p.h8.CONFIRM]);
function v(e) {
    let { steps: t, currentStep: n, body: a, paymentError: v, header: O, footer: I, isGift: S = !1, giftMessage: T = E.NW.string(E.t.DrgnS0), hideBreadcrumbs: N = !1, isLoading: A = !1, purchaseError: C, purchaseErrorBlockRef: R, planError: P, onScroll: w, scrollerClassName: D, hasCurrencies: L = !1 } = e,
        x = null;
    null != v && null == (0, p.ly)(v) ? (x = v) : null != C ? (x = C) : null != P && (x = P);
    let M = null != x ? x.message : '';
    null != x && x instanceof d.HF && (x.code === f.SM.CARD_DECLINED && L && (M += ' '.concat(E.NW.string(E.t.iWvwQU))), x.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.NW.string(E.t.ypuSd3)), x.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.NW.string(E.t.mXMmWF)));
    let { stripe: k } = (0, _.JL)();
    A = A || null == k;
    let j = i.useRef(new l.V7());
    i.useEffect(() => {
        let e = j.current;
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
    let U = t.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(o.Elements, {
        options: g.OBo,
        stripe: k,
        children: [
            O,
            (0, r.jsxs)('div', {
                className: s()('paymentModalContent', b.content),
                children: [
                    S && n !== p.h8.CONFIRM
                        ? (0, r.jsx)(u.Z, {
                              className: b.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.OgN,
                              color: null == T ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: T
                          })
                        : null,
                    N
                        ? null
                        : (0, r.jsx)('div', {
                              className: b.breadcrumbsWrapper,
                              children: (0, r.jsx)(c.OoM, {
                                  activeId: p.Ck.has(n) ? U : n,
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
                            null == x
                                ? null
                                : (0, r.jsx)('div', {
                                      className: b.errorBlockWrapper,
                                      children: (0, r.jsx)(c.kzN, {
                                          ref: R,
                                          children: M
                                      })
                                  }),
                            A
                                ? (0, r.jsx)(c.$jN, { className: b.loadingBlock })
                                : (0, r.jsx)(c.qBt, {
                                      className: b.sequencer,
                                      staticClassName: b.sequencerStatic,
                                      animatedNodeClassName: b.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, r.jsx)(c.h21, {
                                          onScroll: w,
                                          className: s()(b.scroller, D),
                                          children: a
                                      })
                                  })
                        ]
                    })
                ]
            }),
            I
        ]
    });
}
