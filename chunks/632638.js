"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(503698),
    o = n.n(s),
    l = n(451988),
    u = n(397927),
    c = n(102741),
    d = n(198982),
    _ = n(136857),
    f = n(156312),
    p = n(166532);
n(69494), n(482132);
var h = n(739508),
    m = n(927813),
    g = n(652215),
    E = n(985018),
    A = n(676032);
let I = new Set([p.pn.SKU_SELECT, p.pn.AWAITING_AUTHENTICATION, p.pn.AWAITING_PURCHASE_TOKEN_AUTH, p.pn.CONFIRM]);
function T(e) {
    let {
            steps: t,
            currentStep: n,
            body: s,
            overrideKey: T,
            paymentError: y,
            header: S,
            footer: v,
            isGift: C = !1,
            giftMessage: b = E.intl.string(E.t["DrgnS+"]),
            hideBreadcrumbs: N = !1,
            isLoading: R = !1,
            purchaseError: O,
            purchaseErrorBlockRef: D,
            planError: L,
            onScroll: w,
            scrollerClassName: x,
            hasCurrencies: P = !1,
        } = e,
        M = null;
    null != y && null == (0, p.ou)(y) ? (M = y) : null != O ? (M = O) : null != L && (M = L);
    let k = null != M ? M.message : "";
    null != M &&
        M instanceof d.Ey &&
        (M.code === _.tG.CARD_DECLINED && P && (k += ` ${E.intl.string(E.t.iWvwQS)}`),
        M.code === _.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = E.intl.string(E.t.ypuSd8)),
        M.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = E.intl.string(E.t.mXMmWE)));
    let { stripe: U } = (0, f.P5)();
    R = R || null == U;
    let G = i.useRef(new l.Ep());
    i.useEffect(() => {
        let e = G.current;
        return (
            null != U || e.isStarted()
                ? null != U && e.stop()
                : e.start(10 * m.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, h.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [U]);
    let V = t.includes(p.pn.PAYMENT_TYPE) ? p.pn.PAYMENT_TYPE : p.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(a.Elements, {
        options: g.XL8,
        stripe: U,
        children: [
            S,
            (0, r.jsxs)("div", {
                className: o()("paymentModalContent", A.Qs),
                children: [
                    C && n !== p.pn.CONFIRM
                        ? (0, r.jsx)(c.A, {
                              className: A.zJ,
                              iconSize: c.A.Sizes.SMALL,
                              icon: u.okO,
                              color: null == b ? c.A.Colors.PRIMARY : c.A.Colors.SECONDARY,
                              children: b,
                          })
                        : null,
                    N
                        ? null
                        : (0, r.jsx)("div", {
                              className: A.QN,
                              children: (0, r.jsx)(u.BIu, {
                                  activeId: p.ZC.has(n) ? V : n,
                                  breadcrumbs: t
                                      .filter((e) => !p.ZC.has(e) && !I.has(e))
                                      .map((e) => ({ id: e, label: (0, p.Ir)(e) })),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: A.uK,
                        children: [
                            null == M
                                ? null
                                : (0, r.jsx)("div", {
                                      className: A.Nk,
                                      ref: D,
                                      children: (0, r.jsx)(u.wx6, { type: "critical", children: k }),
                                  }),
                            R
                                ? (0, r.jsx)(u.y$y, { className: A.CI })
                                : (0, r.jsx)(u.YC2, {
                                      className: A.C9,
                                      overrideKey: T,
                                      staticClassName: A.a2,
                                      animatedNodeClassName: A.L2,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, r.jsx)(u.ChK, {
                                          onScroll: w,
                                          className: o()(A.XG, x),
                                          children: s,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            v,
        ],
    });
}
