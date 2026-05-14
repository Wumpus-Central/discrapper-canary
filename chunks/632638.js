n.d(l, { A: () => _ });
var r = n(627968),
    s = n(64700),
    t = n(342393),
    i = n(503698),
    a = n.n(i),
    d = n(451988),
    o = n(597770),
    c = n(40474),
    u = n(683071),
    p = n(289873),
    N = n(685094),
    A = n(689175),
    E = n(430993),
    m = n(102741),
    S = n(913122),
    h = n(136857),
    f = n(834252),
    C = n(166532);
n(69494), n(482132);
var x = n(739508),
    P = n(927813),
    j = n(652215),
    y = n(375708),
    R = n(691189);
let I = new Set([C.pn.SKU_SELECT, C.pn.AWAITING_AUTHENTICATION, C.pn.AWAITING_PURCHASE_TOKEN_AUTH, C.pn.CONFIRM]);
function _(e) {
    let {
            steps: l,
            currentStep: n,
            body: i,
            overrideKey: _,
            paymentError: M,
            header: T,
            footer: v,
            isGift: D = !1,
            giftMessage: g = y.intl.string(y.t["DrgnS+"]),
            hideBreadcrumbs: b = !1,
            isLoading: O = !1,
            purchaseError: L,
            purchaseErrorBlockRef: Y,
            planError: k,
            onScroll: w,
            scrollerClassName: U,
            hasCurrencies: G = !1,
            shouldUseManaModal: F = !1,
        } = e,
        W = null;
    null != M && null == (0, C.ou)(M) ? (W = M) : null != L ? (W = L) : null != k && (W = k);
    let z = null != W ? W.message : "";
    null != W &&
        W instanceof S.Ey &&
        (W.code === h.tG.CARD_DECLINED && G && (z += ` ${y.intl.string(y.t.iWvwQS)}`),
        W.code === h.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (z = y.intl.string(y.t.ypuSd8)),
        W.code === j.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (z = y.intl.string(y.t.mXMmWE)));
    let { stripe: B } = (0, f.P5)();
    O = O || null == B;
    let K = s.useRef(new d.Ep());
    s.useEffect(() => {
        let e = K.current;
        return (
            null != B || e.isStarted()
                ? null != B && e.stop()
                : e.start(10 * P.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, x.pM)(e);
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
                    ? (0, r.jsx)(m.A, {
                          className: R.zJ,
                          iconSize: m.A.Sizes.SMALL,
                          icon: o.o,
                          color: null == g ? m.A.Colors.PRIMARY : m.A.Colors.SECONDARY,
                          children: g,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: a()(R.QN, { [R.k3]: F }),
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
                                  className: F ? R.Nk : R.YU,
                                  ref: Y,
                                  children: (0, r.jsx)(u.w, { type: "critical", children: z }),
                              }),
                        O
                            ? (0, r.jsx)(p.y, { className: R.CI })
                            : (0, r.jsx)(N.Y, {
                                  className: R.C9,
                                  overrideKey: _,
                                  staticClassName: R.a2,
                                  animatedNodeClassName: R.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: l,
                                  sideMargin: 20,
                                  children: F
                                      ? i
                                      : (0, r.jsx)(A.Ch, { onScroll: w, className: a()(R.XG, U), children: i }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(t.Elements, {
        options: j.XL8,
        stripe: B,
        children: [
            T,
            F
                ? (0, r.jsx)(E.c, { children: X })
                : (0, r.jsx)("div", { className: a()("paymentModalContent", R.Qs), children: X }),
            v,
        ],
    });
}
