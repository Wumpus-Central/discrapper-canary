"use strict";
n.d(t, { A: () => y });
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
    h = n(166532);
n(69494), n(482132);
var p = n(739508),
    g = n(927813),
    E = n(652215),
    A = n(985018),
    I = n(676032);
let T = new Set([h.pn.SKU_SELECT, h.pn.AWAITING_AUTHENTICATION, h.pn.AWAITING_PURCHASE_TOKEN_AUTH, h.pn.CONFIRM]);
function y(e) {
    let {
            steps: t,
            currentStep: n,
            body: s,
            overrideKey: y,
            paymentError: S,
            header: v,
            footer: C,
            isGift: b = !1,
            giftMessage: N = A.intl.string(A.t["DrgnS+"]),
            hideBreadcrumbs: R = !1,
            isLoading: O = !1,
            purchaseError: D,
            purchaseErrorBlockRef: L,
            planError: w,
            onScroll: x,
            scrollerClassName: P,
            hasCurrencies: M = !1,
            shouldUseManaModal: k = !1,
        } = e,
        U = null;
    null != S && null == (0, h.ou)(S) ? (U = S) : null != D ? (U = D) : null != w && (U = w);
    let G = null != U ? U.message : "";
    null != U &&
        U instanceof d.Ey &&
        (U.code === _.tG.CARD_DECLINED && M && (G += ` ${A.intl.string(A.t.iWvwQS)}`),
        U.code === _.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (G = A.intl.string(A.t.ypuSd8)),
        U.code === E.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (G = A.intl.string(A.t.mXMmWE)));
    let { stripe: F } = (0, f.P5)();
    O = O || null == F;
    let V = i.useRef(new l.Ep());
    i.useEffect(() => {
        let e = V.current;
        return (
            null != F || e.isStarted()
                ? null != F && e.stop()
                : e.start(10 * g.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, p.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [F]);
    let B = t.includes(h.pn.PAYMENT_TYPE) ? h.pn.PAYMENT_TYPE : h.pn.ADD_PAYMENT_STEPS,
        j = (0, r.jsxs)(r.Fragment, {
            children: [
                b && n !== h.pn.CONFIRM
                    ? (0, r.jsx)(c.A, {
                          className: I.zJ,
                          iconSize: c.A.Sizes.SMALL,
                          icon: u.okO,
                          color: null == N ? c.A.Colors.PRIMARY : c.A.Colors.SECONDARY,
                          children: N,
                      })
                    : null,
                R
                    ? null
                    : (0, r.jsx)("div", {
                          className: I.QN,
                          children: (0, r.jsx)(u.BIu, {
                              activeId: h.ZC.has(n) ? B : n,
                              breadcrumbs: t
                                  .filter((e) => !h.ZC.has(e) && !T.has(e))
                                  .map((e) => ({ id: e, label: (0, h.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: I.uK,
                    children: [
                        null == U
                            ? null
                            : (0, r.jsx)("div", {
                                  className: I.Nk,
                                  ref: L,
                                  children: (0, r.jsx)(u.wx6, { type: "critical", children: G }),
                              }),
                        O
                            ? (0, r.jsx)(u.y$y, { className: I.CI })
                            : (0, r.jsx)(u.YC2, {
                                  className: I.C9,
                                  overrideKey: y,
                                  staticClassName: I.a2,
                                  animatedNodeClassName: I.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: t,
                                  sideMargin: 20,
                                  children: k
                                      ? s
                                      : (0, r.jsx)(u.ChK, { onScroll: x, className: o()(I.XG, P), children: s }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(a.Elements, {
        options: E.XL8,
        stripe: F,
        children: [
            v,
            k
                ? (0, r.jsx)(u.cwr, { children: j })
                : (0, r.jsx)("div", { className: o()("paymentModalContent", I.Qs), children: j }),
            C,
        ],
    });
}
