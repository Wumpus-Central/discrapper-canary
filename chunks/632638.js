n.d(l, { A: () => _ });
var r = n(627968),
    t = n(64700),
    s = n(342393),
    i = n(503698),
    a = n.n(i),
    d = n(451988),
    o = n(597770),
    c = n(40474),
    u = n(683071),
    p = n(289873),
    m = n(685094),
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
    R = n(375708),
    I = n(691189);
let P = new Set([C.pn.SKU_SELECT, C.pn.AWAITING_AUTHENTICATION, C.pn.AWAITING_PURCHASE_TOKEN_AUTH, C.pn.CONFIRM]);
function _(e) {
    let {
            steps: l,
            currentStep: n,
            body: i,
            overrideKey: _,
            paymentError: T,
            header: g,
            footer: v,
            isGift: D = !1,
            giftMessage: M = R.intl.string(R.t["DrgnS+"]),
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
    null != T && null == (0, C.ou)(T) ? (W = T) : null != w ? (W = w) : null != G && (W = G);
    let z = null != W ? W.message : "";
    null != W &&
        W instanceof h.Ey &&
        (W.code === S.tG.CARD_DECLINED && F && (z += ` ${R.intl.string(R.t.iWvwQS)}`),
        W.code === S.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (z = R.intl.string(R.t.ypuSd8)),
        W.code === j.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (z = R.intl.string(R.t.mXMmWE)));
    let B = (0, f.S)();
    k = k || null == B;
    let K = t.useRef(new d.Ep());
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
                D && n !== C.pn.CONFIRM
                    ? (0, r.jsx)(E.A, {
                          className: I.zJ,
                          iconSize: E.A.Sizes.SMALL,
                          icon: o.o,
                          color: null == M ? E.A.Colors.PRIMARY : E.A.Colors.SECONDARY,
                          children: M,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: a()(I.QN, { [I.k3]: U }),
                          children: (0, r.jsx)(c.A, {
                              activeId: C.ZC.has(n) ? Q : n,
                              breadcrumbs: l
                                  .filter((e) => !C.ZC.has(e) && !P.has(e))
                                  .map((e) => ({ id: e, label: (0, C.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: I.uK,
                    children: [
                        null == W
                            ? null
                            : (0, r.jsx)("div", {
                                  className: U ? I.Nk : I.YU,
                                  ref: O,
                                  children: (0, r.jsx)(u.w, { type: "critical", children: z }),
                              }),
                        k
                            ? (0, r.jsx)(p.y, { className: I.CI })
                            : (0, r.jsx)(m.Y, {
                                  className: I.C9,
                                  overrideKey: _,
                                  staticClassName: I.a2,
                                  animatedNodeClassName: I.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: l,
                                  sideMargin: 20,
                                  children: U
                                      ? i
                                      : (0, r.jsx)(A.Ch, { onScroll: L, className: a()(I.XG, Y), children: i }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(s.Elements, {
        options: j.XL8,
        stripe: B,
        children: [
            g,
            U
                ? (0, r.jsx)(N.c, { children: X })
                : (0, r.jsx)("div", { className: a()("paymentModalContent", I.Qs), children: X }),
            v,
        ],
    });
}
