n.d(l, { A: () => R });
var r = n(627968),
    t = n(64700),
    s = n(342393),
    i = n(503698),
    a = n.n(i),
    d = n(451988),
    o = n(597770),
    c = n(40474),
    u = n(683071),
    m = n(289873),
    p = n(685094),
    N = n(689175),
    A = n(430993),
    E = n(102741),
    h = n(913122),
    S = n(136857),
    C = n(783327),
    f = n(166532);
n(69494), n(482132);
var y = n(739508),
    _ = n(927813),
    x = n(652215),
    T = n(375708),
    j = n(691189);
let P = new Set([f.pn.SKU_SELECT, f.pn.AWAITING_AUTHENTICATION, f.pn.AWAITING_PURCHASE_TOKEN_AUTH, f.pn.CONFIRM]);
function R(e) {
    let {
            steps: l,
            currentStep: n,
            body: i,
            overrideKey: R,
            paymentError: I,
            header: M,
            footer: v,
            isGift: D = !1,
            giftMessage: g = T.intl.string(T.t["DrgnS+"]),
            hideBreadcrumbs: b = !1,
            isLoading: O = !1,
            purchaseError: w,
            purchaseErrorBlockRef: k,
            planError: L,
            onScroll: Y,
            scrollerClassName: G,
            hasCurrencies: U = !1,
            shouldUseManaModal: F = !1,
        } = e,
        W = null;
    null != I && null == (0, f.ou)(I) ? (W = I) : null != w ? (W = w) : null != L && (W = L);
    let B = null != W ? W.message : "";
    null != W &&
        W instanceof h.Ey &&
        (W.code === S.tG.CARD_DECLINED && U && (B += ` ${T.intl.string(T.t.iWvwQS)}`),
        W.code === S.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (B = T.intl.string(T.t.ypuSd8)),
        W.code === x.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (B = T.intl.string(T.t.mXMmWE)));
    let X = (0, C.S)();
    O = O || null == X;
    let z = t.useRef(new d.Ep());
    t.useEffect(() => {
        let e = z.current;
        return (
            null != X || e.isStarted()
                ? null != X && e.stop()
                : e.start(10 * _.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, y.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [X]);
    let K = l.includes(f.pn.PAYMENT_TYPE) ? f.pn.PAYMENT_TYPE : f.pn.ADD_PAYMENT_STEPS,
        Q = (0, r.jsxs)(r.Fragment, {
            children: [
                D && n !== f.pn.CONFIRM
                    ? (0, r.jsx)(E.A, {
                          className: j.zJ,
                          iconSize: E.A.Sizes.SMALL,
                          icon: o.o,
                          color: null == g ? E.A.Colors.PRIMARY : E.A.Colors.SECONDARY,
                          children: g,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: a()(j.QN, { [j.k3]: F }),
                          children: (0, r.jsx)(c.A, {
                              activeId: f.ZC.has(n) ? K : n,
                              breadcrumbs: l
                                  .filter((e) => !f.ZC.has(e) && !P.has(e))
                                  .map((e) => ({ id: e, label: (0, f.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: j.uK,
                    children: [
                        null == W
                            ? null
                            : (0, r.jsx)("div", {
                                  className: F ? j.Nk : j.YU,
                                  ref: k,
                                  children: (0, r.jsx)(u.w, { type: "critical", children: B }),
                              }),
                        O
                            ? (0, r.jsx)(m.y, { className: j.CI })
                            : (0, r.jsx)(p.Y, {
                                  className: j.C9,
                                  overrideKey: R,
                                  staticClassName: j.a2,
                                  animatedNodeClassName: j.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: l,
                                  sideMargin: 20,
                                  children: F
                                      ? i
                                      : (0, r.jsx)(N.Ch, { onScroll: Y, className: a()(j.XG, G), children: i }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(s.Elements, {
        options: x.XL8,
        stripe: X,
        children: [
            M,
            F
                ? (0, r.jsx)(A.c, { children: Q })
                : (0, r.jsx)("div", { className: a()("paymentModalContent", j.Qs), children: Q }),
            v,
        ],
    });
}
