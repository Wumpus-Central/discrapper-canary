n.d(l, { A: () => D });
var r = n(627968),
    s = n(64700),
    t = n(342393),
    i = n(503698),
    a = n.n(i),
    d = n(451988),
    c = n(597770),
    o = n(40474),
    u = n(683071),
    p = n(289873),
    m = n(685094),
    N = n(599319),
    A = n(430993),
    h = n(102741),
    E = n(198982),
    j = n(136857),
    S = n(156312),
    C = n(166532);
n(69494), n(482132);
var f = n(739508),
    x = n(927813),
    P = n(652215),
    T = n(985018),
    v = n(691189);
let y = new Set([C.pn.SKU_SELECT, C.pn.AWAITING_AUTHENTICATION, C.pn.AWAITING_PURCHASE_TOKEN_AUTH, C.pn.CONFIRM]);
function D(e) {
    let {
            steps: l,
            currentStep: n,
            body: i,
            overrideKey: D,
            paymentError: R,
            header: _,
            footer: I,
            isGift: M = !1,
            giftMessage: g = T.intl.string(T.t["DrgnS+"]),
            hideBreadcrumbs: b = !1,
            isLoading: k = !1,
            purchaseError: O,
            purchaseErrorBlockRef: L,
            planError: Y,
            onScroll: w,
            scrollerClassName: U,
            hasCurrencies: G = !1,
            shouldUseManaModal: F = !1,
        } = e,
        B = null;
    null != R && null == (0, C.ou)(R) ? (B = R) : null != O ? (B = O) : null != Y && (B = Y);
    let Q = null != B ? B.message : "";
    null != B &&
        B instanceof E.Ey &&
        (B.code === j.tG.CARD_DECLINED && G && (Q += ` ${T.intl.string(T.t.iWvwQS)}`),
        B.code === j.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (Q = T.intl.string(T.t.ypuSd8)),
        B.code === P.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (Q = T.intl.string(T.t.mXMmWE)));
    let { stripe: W } = (0, S.P5)();
    k = k || null == W;
    let z = s.useRef(new d.Ep());
    s.useEffect(() => {
        let e = z.current;
        return (
            null != W || e.isStarted()
                ? null != W && e.stop()
                : e.start(10 * x.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, f.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [W]);
    let H = l.includes(C.pn.PAYMENT_TYPE) ? C.pn.PAYMENT_TYPE : C.pn.ADD_PAYMENT_STEPS,
        K = (0, r.jsxs)(r.Fragment, {
            children: [
                M && n !== C.pn.CONFIRM
                    ? (0, r.jsx)(h.A, {
                          className: v.zJ,
                          iconSize: h.A.Sizes.SMALL,
                          icon: c.o,
                          color: null == g ? h.A.Colors.PRIMARY : h.A.Colors.SECONDARY,
                          children: g,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: a()(v.QN, { [v.k3]: F }),
                          children: (0, r.jsx)(o.A, {
                              activeId: C.ZC.has(n) ? H : n,
                              breadcrumbs: l
                                  .filter((e) => !C.ZC.has(e) && !y.has(e))
                                  .map((e) => ({ id: e, label: (0, C.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: v.uK,
                    children: [
                        null == B
                            ? null
                            : (0, r.jsx)("div", {
                                  className: F ? v.Nk : v.YU,
                                  ref: L,
                                  children: (0, r.jsx)(u.w, { type: "critical", children: Q }),
                              }),
                        k
                            ? (0, r.jsx)(p.y, { className: v.CI })
                            : (0, r.jsx)(m.Y, {
                                  className: v.C9,
                                  overrideKey: D,
                                  staticClassName: v.a2,
                                  animatedNodeClassName: v.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: l,
                                  sideMargin: 20,
                                  children: F
                                      ? i
                                      : (0, r.jsx)(N.Ch, { onScroll: w, className: a()(v.XG, U), children: i }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(t.Elements, {
        options: P.XL8,
        stripe: W,
        children: [
            _,
            F
                ? (0, r.jsx)(A.c, { children: K })
                : (0, r.jsx)("div", { className: a()("paymentModalContent", v.Qs), children: K }),
            I,
        ],
    });
}
