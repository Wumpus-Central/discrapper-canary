n.d(t, { Z: () => y }), n(47120), n(411104);
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
    p = n(563132),
    _ = n(409813);
n(51499), n(614277);
var h = n(122289),
    m = n(70956),
    g = n(981631),
    E = n(388032),
    v = n(202941);
let b = new Set([_.h8.SKU_SELECT, _.h8.AWAITING_AUTHENTICATION, _.h8.AWAITING_PURCHASE_TOKEN_AUTH, _.h8.CONFIRM]);
function y(e) {
    let { steps: t, currentStep: n, body: a, paymentError: y, header: O, footer: S, isGift: I = !1, giftMessage: T = E.NW.string(E.t.DrgnS0), hideBreadcrumbs: N = !1, isLoading: A = !1, purchaseError: C, purchaseErrorBlockRef: R, planError: P, onScroll: w, scrollerClassName: D, hasCurrencies: x = !1 } = e,
        L = null;
    null != y && null == (0, _.ly)(y) ? (L = y) : null != C ? (L = C) : null != P && (L = P);
    let M = null != L ? L.message : '';
    null != L && L instanceof d.HF && (L.code === f.SM.CARD_DECLINED && x && (M += ' '.concat(E.NW.string(E.t.iWvwQU))), L.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.NW.string(E.t.ypuSd3)), L.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.NW.string(E.t.mXMmWF)));
    let { stripe: k } = (0, p.JL)();
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
    let U = t.includes(_.h8.PAYMENT_TYPE) ? _.h8.PAYMENT_TYPE : _.h8.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(o.Elements, {
        options: g.OBo,
        stripe: k,
        children: [
            O,
            (0, r.jsxs)('div', {
                className: s()('paymentModalContent', v.content),
                children: [
                    I && n !== _.h8.CONFIRM
                        ? (0, r.jsx)(u.Z, {
                              className: v.paymentNote,
                              iconSize: u.Z.Sizes.SMALL,
                              icon: c.OgN,
                              color: null == T ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                              children: T
                          })
                        : null,
                    N
                        ? null
                        : (0, r.jsx)('div', {
                              className: v.breadcrumbsWrapper,
                              children: (0, r.jsx)(c.OoM, {
                                  activeId: _.Ck.has(n) ? U : n,
                                  breadcrumbs: t
                                      .filter((e) => !_.Ck.has(e) && !b.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, _.DJ)(e)
                                      }))
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: v.bodyWrapper,
                        children: [
                            null == L
                                ? null
                                : (0, r.jsx)('div', {
                                      className: v.errorBlockWrapper,
                                      children: (0, r.jsx)(c.kzN, {
                                          ref: R,
                                          children: M
                                      })
                                  }),
                            A
                                ? (0, r.jsx)(c.$jN, { className: v.loadingBlock })
                                : (0, r.jsx)(c.qBt, {
                                      className: v.sequencer,
                                      staticClassName: v.sequencerStatic,
                                      animatedNodeClassName: v.sequencerAnimatedNode,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, r.jsx)(c.h21, {
                                          onScroll: w,
                                          className: s()(v.scroller, D),
                                          children: a
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
