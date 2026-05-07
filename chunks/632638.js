n.d(l, { A: () => R });
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
    h = n(845584),
    S = n(136857),
    f = n(49960),
    C = n(166532);
n(69494), n(482132);
var x = n(739508),
    P = n(927813),
    j = n(652215),
    _ = n(375708),
    y = n(691189);
let M = new Set([C.pn.SKU_SELECT, C.pn.AWAITING_AUTHENTICATION, C.pn.AWAITING_PURCHASE_TOKEN_AUTH, C.pn.CONFIRM]);
function R(e) {
    let {
            steps: l,
            currentStep: n,
            body: i,
            overrideKey: R,
            paymentError: T,
            header: v,
            footer: D,
            isGift: I = !1,
            giftMessage: g = _.intl.string(_.t["DrgnS+"]),
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
    null != T && null == (0, C.ou)(T) ? (W = T) : null != L ? (W = L) : null != k && (W = k);
    let z = null != W ? W.message : "";
    null != W &&
        W instanceof h.Ey &&
        (W.code === S.tG.CARD_DECLINED && G && (z += ` ${_.intl.string(_.t.iWvwQS)}`),
        W.code === S.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (z = _.intl.string(_.t.ypuSd8)),
        W.code === j.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (z = _.intl.string(_.t.mXMmWE)));
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
                I && n !== C.pn.CONFIRM
                    ? (0, r.jsx)(m.A, {
                          className: y.zJ,
                          iconSize: m.A.Sizes.SMALL,
                          icon: o.o,
                          color: null == g ? m.A.Colors.PRIMARY : m.A.Colors.SECONDARY,
                          children: g,
                      })
                    : null,
                b
                    ? null
                    : (0, r.jsx)("div", {
                          className: a()(y.QN, { [y.k3]: F }),
                          children: (0, r.jsx)(c.A, {
                              activeId: C.ZC.has(n) ? Q : n,
                              breadcrumbs: l
                                  .filter((e) => !C.ZC.has(e) && !M.has(e))
                                  .map((e) => ({ id: e, label: (0, C.Ir)(e) })),
                          }),
                      }),
                (0, r.jsxs)("div", {
                    className: y.uK,
                    children: [
                        null == W
                            ? null
                            : (0, r.jsx)("div", {
                                  className: F ? y.Nk : y.YU,
                                  ref: Y,
                                  children: (0, r.jsx)(u.w, { type: "critical", children: z }),
                              }),
                        O
                            ? (0, r.jsx)(p.y, { className: y.CI })
                            : (0, r.jsx)(N.Y, {
                                  className: y.C9,
                                  overrideKey: R,
                                  staticClassName: y.a2,
                                  animatedNodeClassName: y.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: l,
                                  sideMargin: 20,
                                  children: F
                                      ? i
                                      : (0, r.jsx)(A.Ch, { onScroll: w, className: a()(y.XG, U), children: i }),
                              }),
                    ],
                }),
            ],
        });
    return (0, r.jsxs)(t.Elements, {
        options: j.XL8,
        stripe: B,
        children: [
            v,
            F
                ? (0, r.jsx)(E.c, { children: X })
                : (0, r.jsx)("div", { className: a()("paymentModalContent", y.Qs), children: X }),
            D,
        ],
    });
}
