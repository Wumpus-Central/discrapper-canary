n.d(t, { A: () => x });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(503698),
    s = n.n(a),
    o = n(451988),
    u = n(597770),
    c = n(40474),
    d = n(683071),
    p = n(289873),
    m = n(685094),
    C = n(689175),
    h = n(430993),
    E = n(102741),
    f = n(913122),
    A = n(136857),
    S = n(783327),
    y = n(166532);
n(69494), n(482132);
var P = n(739508),
    I = n(927813),
    _ = n(652215),
    T = n(375708),
    g = n(581037);
let v = new Set([y.pn.SKU_SELECT, y.pn.AWAITING_AUTHENTICATION, y.pn.AWAITING_PURCHASE_TOKEN_AUTH, y.pn.CONFIRM]);
function x(e) {
    let {
            steps: t,
            currentStep: n,
            body: a,
            overrideKey: x,
            paymentError: N,
            header: R,
            footer: b,
            isGift: M = !1,
            giftMessage: j = T.intl.string(T.t["DrgnS+"]),
            hideBreadcrumbs: O = !1,
            isLoading: L = !1,
            purchaseError: w,
            purchaseErrorBlockRef: k,
            planError: U,
            onScroll: D,
            scrollerClassName: G,
            hasCurrencies: F = !1,
            shouldUseManaModal: H = !1,
        } = e,
        B = null;
    null != N && null == (0, y.ou)(N) ? (B = N) : null != w ? (B = w) : null != U && (B = U);
    let Y = null != B ? B.message : "";
    null != B &&
        B instanceof f.Ey &&
        (B.code === A.tG.CARD_DECLINED && F && (Y += ` ${T.intl.string(T.t.iWvwQS)}`),
        B.code === A.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (Y = T.intl.string(T.t.ypuSd8)),
        B.code === _.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (Y = T.intl.string(T.t.mXMmWE)));
    let W = (0, S.S)();
    L = L || null == W;
    let V = i.useRef(new o.Ep());
    i.useEffect(() => {
        let e = V.current;
        return (
            null != W || e.isStarted()
                ? null != W && e.stop()
                : e.start(10 * I.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, P.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [W]);
    let K = t.includes(y.pn.PAYMENT_TYPE) ? y.pn.PAYMENT_TYPE : y.pn.ADD_PAYMENT_STEPS,
        Z = (0, l.jsxs)(l.Fragment, {
            children: [
                M && n !== y.pn.CONFIRM
                    ? (0, l.jsx)(E.A, {
                          className: g.zJ,
                          iconSize: E.A.Sizes.SMALL,
                          icon: u.o,
                          color: null == j ? E.A.Colors.PRIMARY : E.A.Colors.SECONDARY,
                          children: j,
                      })
                    : null,
                O
                    ? null
                    : (0, l.jsx)("div", {
                          className: s()(g.QN, { [g.k3]: H }),
                          children: (0, l.jsx)(c.A, {
                              activeId: y.ZC.has(n) ? K : n,
                              breadcrumbs: t
                                  .filter((e) => !y.ZC.has(e) && !v.has(e))
                                  .map((e) => ({ id: e, label: (0, y.Ir)(e) })),
                          }),
                      }),
                (0, l.jsxs)("div", {
                    className: g.uK,
                    children: [
                        null == B
                            ? null
                            : (0, l.jsx)("div", {
                                  className: H ? g.Nk : g.YU,
                                  ref: k,
                                  children: (0, l.jsx)(d.w, { type: "critical", children: Y }),
                              }),
                        L
                            ? (0, l.jsx)(p.y, { className: g.CI })
                            : (0, l.jsx)(m.Y, {
                                  className: g.C9,
                                  overrideKey: x,
                                  staticClassName: g.a2,
                                  animatedNodeClassName: g.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: t,
                                  sideMargin: 20,
                                  children: H
                                      ? a
                                      : (0, l.jsx)(C.Ch, { onScroll: D, className: s()(g.XG, G), children: a }),
                              }),
                    ],
                }),
            ],
        });
    return (0, l.jsxs)(r.Elements, {
        options: _.XL8,
        stripe: W,
        children: [
            R,
            H
                ? (0, l.jsx)(h.c, { children: Z })
                : (0, l.jsx)("div", { className: s()("paymentModalContent", g.Qs), children: Z }),
            b,
        ],
    });
}
