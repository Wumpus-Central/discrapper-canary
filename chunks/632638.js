"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
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
    E = n(652215),
    g = n(985018),
    A = n(676032);
let I = new Set([p.pn.SKU_SELECT, p.pn.AWAITING_AUTHENTICATION, p.pn.AWAITING_PURCHASE_TOKEN_AUTH, p.pn.CONFIRM]);
function T(e) {
    let {
            steps: t,
            currentStep: n,
            body: a,
            overrideKey: T,
            paymentError: S,
            header: y,
            footer: v,
            isGift: N = !1,
            giftMessage: C = g.intl.string(g.t["DrgnS+"]),
            hideBreadcrumbs: b = !1,
            isLoading: R = !1,
            purchaseError: O,
            purchaseErrorBlockRef: D,
            planError: L,
            onScroll: w,
            scrollerClassName: x,
            hasCurrencies: M = !1,
            shouldUseManaModal: P = !1,
        } = e,
        k = null;
    null != S && null == (0, p.ou)(S) ? (k = S) : null != O ? (k = O) : null != L && (k = L);
    let U = null != k ? k.message : "";
    null != k &&
        k instanceof d.Ey &&
        (k.code === _.tG.CARD_DECLINED && M && (U += ` ${g.intl.string(g.t.iWvwQS)}`),
        k.code === _.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (U = g.intl.string(g.t.ypuSd8)),
        k.code === E.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (U = g.intl.string(g.t.mXMmWE)));
    let { stripe: G } = (0, f.P5)();
    R = R || null == G;
    let F = i.useRef(new l.Ep());
    i.useEffect(() => {
        let e = F.current;
        return (
            null != G || e.isStarted()
                ? null != G && e.stop()
                : e.start(10 * m.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, h.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [G]);
    let V = t.includes(p.pn.PAYMENT_TYPE) ? p.pn.PAYMENT_TYPE : p.pn.ADD_PAYMENT_STEPS,
        B = (0, r.jsxs)(r.Fragment, {
            children: [
                N && n !== p.pn.CONFIRM
                    ? (0, r.jsx)(c.A, {
                          className: A.zJ,
                          iconSize: c.A.Sizes.SMALL,
                          icon: u.okO,
                          color: null == C ? c.A.Colors.PRIMARY : c.A.Colors.SECONDARY,
                          children: C,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: o()(A.QN, { [A.k3]: P }),
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
                        null == k
                            ? null
                            : (0, r.jsx)("div", {
                                  className: P ? A.Nk : A.YU,
                                  ref: D,
                                  children: (0, r.jsx)(u.wx6, { type: "critical", children: U }),
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
                                  children: P
                                      ? a
                                      : (0, r.jsx)(u.ChK, { onScroll: w, className: o()(A.XG, x), children: a }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(s.Elements, {
        options: E.XL8,
        stripe: G,
        children: [
            y,
            P
                ? (0, r.jsx)(u.cwr, { children: B })
                : (0, r.jsx)("div", { className: o()("paymentModalContent", A.Qs), children: B }),
            v,
        ],
    });
}
