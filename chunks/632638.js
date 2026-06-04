n.d(l, { A: () => M });
var r = n(627968),
    t = n(64700),
    s = n(342393),
    i = n(503698),
    a = n.n(i),
    o = n(451988),
    d = n(597770),
    c = n(40474),
    u = n(683071),
    m = n(289873),
    p = n(685094),
    A = n(689175),
    N = n(430993),
    E = n(102741),
    h = n(913122),
    S = n(136857),
    f = n(783327),
    C = n(166532);
n(69494), n(482132);
var y = n(739508),
    x = n(927813),
    j = n(652215),
    P = n(375708),
    R = n(691189);
let I = new Set([C.pn.SKU_SELECT, C.pn.AWAITING_AUTHENTICATION, C.pn.AWAITING_PURCHASE_TOKEN_AUTH, C.pn.CONFIRM]);
function M(e) {
    let {
            steps: l,
            currentStep: n,
            body: i,
            overrideKey: M,
            paymentError: _,
            header: D,
            footer: T,
            isGift: g = !1,
            giftMessage: v = P.intl.string(P.t["DrgnS+"]),
            hideBreadcrumbs: b = !1,
            isLoading: k = !1,
            purchaseError: w,
            purchaseErrorBlockRef: O,
            planError: G,
            onScroll: L,
            scrollerClassName: Y,
            hasCurrencies: F = !1,
            shouldUseManaModal: U = !1,
        } = e,
        W = null;
    null != _ && null == (0, C.ou)(_) ? (W = _) : null != w ? (W = w) : null != G && (W = G);
    let z = null != W ? W.message : "";
    null != W &&
        W instanceof h.Ey &&
        (W.code === S.tG.CARD_DECLINED && F && (z += ` ${P.intl.string(P.t.iWvwQS)}`),
        W.code === S.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (z = P.intl.string(P.t.ypuSd8)),
        W.code === j.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (z = P.intl.string(P.t.mXMmWE)));
    let B = (0, f.S)();
    k = k || null == B;
    let K = t.useRef(new o.Ep());
    t.useEffect(() => {
        let e = K.current;
        return (
            null != B || e.isStarted()
                ? null != B && e.stop()
                : e.start(10 * x.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, y.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [B]);
    let Q = l.includes(C.pn.PAYMENT_TYPE) ? C.pn.PAYMENT_TYPE : C.pn.ADD_PAYMENT_STEPS,
        X = (0, r.jsxs)(r.Fragment, {
            children: [
                g && n !== C.pn.CONFIRM
                    ? (0, r.jsx)(E.A, {
                          className: R.zJ,
                          iconSize: E.A.Sizes.SMALL,
                          icon: d.o,
                          color: null == v ? E.A.Colors.PRIMARY : E.A.Colors.SECONDARY,
                          children: v,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: a()(R.QN, { [R.k3]: U }),
                          children: (0, r.jsx)(c.A, {
                              activeId: C.ZC.has(n) ? Q : n,
                              breadcrumbs: l
                                  .filter((e) => !C.ZC.has(e) && !I.has(e))
                                  .map((e) => ({ id: e, label: (0, C.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: R.uK,
                    children: [
                        null == W
                            ? null
                            : (0, r.jsx)("div", {
                                  className: U ? R.Nk : R.YU,
                                  ref: O,
                                  children: (0, r.jsx)(u.w, { type: "critical", children: z }),
                              }),
                        k
                            ? (0, r.jsx)(m.y, { className: R.CI })
                            : (0, r.jsx)(p.Y, {
                                  className: R.C9,
                                  overrideKey: M,
                                  staticClassName: R.a2,
                                  animatedNodeClassName: R.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: l,
                                  sideMargin: 20,
                                  children: U
                                      ? i
                                      : (0, r.jsx)(A.Ch, { onScroll: L, className: a()(R.XG, Y), children: i }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(s.Elements, {
        options: j.XL8,
        stripe: B,
        children: [
            D,
            U
                ? (0, r.jsx)(N.c, { children: X })
                : (0, r.jsx)("div", { className: a()("paymentModalContent", R.Qs), children: X }),
            T,
        ],
    });
}
