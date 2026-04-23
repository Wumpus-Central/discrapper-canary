"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(451988),
    u = n(597770),
    c = n(40474),
    d = n(683071),
    _ = n(289873),
    f = n(685094),
    p = n(599319),
    h = n(430993),
    E = n(102741),
    m = n(198982),
    g = n(136857),
    A = n(156312),
    I = n(166532);
n(69494), n(482132);
var T = n(739508),
    S = n(927813),
    y = n(652215),
    N = n(985018),
    v = n(691189);
let C = new Set([I.pn.SKU_SELECT, I.pn.AWAITING_AUTHENTICATION, I.pn.AWAITING_PURCHASE_TOKEN_AUTH, I.pn.CONFIRM]);
function O(e) {
    let {
            steps: t,
            currentStep: n,
            body: a,
            overrideKey: O,
            paymentError: R,
            header: b,
            footer: D,
            isGift: L = !1,
            giftMessage: w = N.intl.string(N.t["DrgnS+"]),
            hideBreadcrumbs: M = !1,
            isLoading: P = !1,
            purchaseError: x,
            purchaseErrorBlockRef: k,
            planError: U,
            onScroll: G,
            scrollerClassName: F,
            hasCurrencies: V = !1,
            shouldUseManaModal: B = !1,
        } = e,
        H = null;
    null != R && null == (0, I.ou)(R) ? (H = R) : null != x ? (H = x) : null != U && (H = U);
    let j = null != H ? H.message : "";
    null != H &&
        H instanceof m.Ey &&
        (H.code === g.tG.CARD_DECLINED && V && (j += ` ${N.intl.string(N.t.iWvwQS)}`),
        H.code === g.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (j = N.intl.string(N.t.ypuSd8)),
        H.code === y.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (j = N.intl.string(N.t.mXMmWE)));
    let { stripe: Y } = (0, A.P5)();
    P = P || null == Y;
    let W = i.useRef(new l.Ep());
    i.useEffect(() => {
        let e = W.current;
        return (
            null != Y || e.isStarted()
                ? null != Y && e.stop()
                : e.start(10 * S.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, T.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [Y]);
    let K = t.includes(I.pn.PAYMENT_TYPE) ? I.pn.PAYMENT_TYPE : I.pn.ADD_PAYMENT_STEPS,
        $ = (0, r.jsxs)(r.Fragment, {
            children: [
                L && n !== I.pn.CONFIRM
                    ? (0, r.jsx)(E.A, {
                          className: v.zJ,
                          iconSize: E.A.Sizes.SMALL,
                          icon: u.o,
                          color: null == w ? E.A.Colors.PRIMARY : E.A.Colors.SECONDARY,
                          children: w,
                      })
                    : null,
                M
                    ? null
                    : (0, r.jsx)("div", {
                          className: o()(v.QN, { [v.k3]: B }),
                          children: (0, r.jsx)(c.A, {
                              activeId: I.ZC.has(n) ? K : n,
                              breadcrumbs: t
                                  .filter((e) => !I.ZC.has(e) && !C.has(e))
                                  .map((e) => ({ id: e, label: (0, I.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: v.uK,
                    children: [
                        null == H
                            ? null
                            : (0, r.jsx)("div", {
                                  className: B ? v.Nk : v.YU,
                                  ref: k,
                                  children: (0, r.jsx)(d.w, { type: "critical", children: j }),
                              }),
                        P
                            ? (0, r.jsx)(_.y, { className: v.CI })
                            : (0, r.jsx)(f.Y, {
                                  className: v.C9,
                                  overrideKey: O,
                                  staticClassName: v.a2,
                                  animatedNodeClassName: v.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: t,
                                  sideMargin: 20,
                                  children: B
                                      ? a
                                      : (0, r.jsx)(p.Ch, { onScroll: G, className: o()(v.XG, F), children: a }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(s.Elements, {
        options: y.XL8,
        stripe: Y,
        children: [
            b,
            B
                ? (0, r.jsx)(h.c, { children: $ })
                : (0, r.jsx)("div", { className: o()("paymentModalContent", v.Qs), children: $ }),
            D,
        ],
    });
}
