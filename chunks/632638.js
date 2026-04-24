s.d(t, { A: () => D });
var i = s(627968),
    n = s(64700),
    a = s(342393),
    l = s(503698),
    r = s.n(l),
    o = s(451988),
    p = s(597770),
    d = s(40474),
    c = s(683071),
    h = s(289873),
    u = s(685094),
    m = s(689175),
    g = s(430993),
    A = s(102741),
    S = s(845584),
    N = s(136857),
    v = s(156312),
    f = s(166532);
s(69494), s(482132);
var E = s(739508),
    x = s(927813),
    j = s(652215),
    C = s(985018),
    R = s(691189);
let P = new Set([f.pn.SKU_SELECT, f.pn.AWAITING_AUTHENTICATION, f.pn.AWAITING_PURCHASE_TOKEN_AUTH, f.pn.CONFIRM]);
function D(e) {
    let {
            steps: t,
            currentStep: s,
            body: l,
            overrideKey: D,
            paymentError: y,
            header: M,
            footer: _,
            isGift: T = !1,
            giftMessage: H = C.intl.string(C.t["DrgnS+"]),
            hideBreadcrumbs: b = !1,
            isLoading: I = !1,
            purchaseError: O,
            purchaseErrorBlockRef: L,
            planError: k,
            onScroll: w,
            scrollerClassName: Y,
            hasCurrencies: U = !1,
            shouldUseManaModal: B = !1,
        } = e,
        G = null;
    null != y && null == (0, f.ou)(y) ? (G = y) : null != O ? (G = O) : null != k && (G = k);
    let F = null != G ? G.message : "";
    null != G &&
        G instanceof S.Ey &&
        (G.code === N.tG.CARD_DECLINED && U && (F += ` ${C.intl.string(C.t.iWvwQS)}`),
        G.code === N.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (F = C.intl.string(C.t.ypuSd8)),
        G.code === j.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (F = C.intl.string(C.t.mXMmWE)));
    let { stripe: W } = (0, v.P5)();
    I = I || null == W;
    let Q = n.useRef(new o.Ep());
    n.useEffect(() => {
        let e = Q.current;
        return (
            null != W || e.isStarted()
                ? null != W && e.stop()
                : e.start(10 * x.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, E.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [W]);
    let K = t.includes(f.pn.PAYMENT_TYPE) ? f.pn.PAYMENT_TYPE : f.pn.ADD_PAYMENT_STEPS,
        V = (0, i.jsxs)(i.Fragment, {
            children: [
                T && s !== f.pn.CONFIRM
                    ? (0, i.jsx)(A.A, {
                          className: R.zJ,
                          iconSize: A.A.Sizes.SMALL,
                          icon: p.o,
                          color: null == H ? A.A.Colors.PRIMARY : A.A.Colors.SECONDARY,
                          children: H,
                      })
                    : null,
                b
                    ? null
                    : (0, i.jsx)("div", {
                          className: r()(R.QN, { [R.k3]: B }),
                          children: (0, i.jsx)(d.A, {
                              activeId: f.ZC.has(s) ? K : s,
                              breadcrumbs: t
                                  .filter((e) => !f.ZC.has(e) && !P.has(e))
                                  .map((e) => ({ id: e, label: (0, f.Ir)(e) })),
                          }),
                      }),
                (0, i.jsxs)("div", {
                    className: R.uK,
                    children: [
                        null == G
                            ? null
                            : (0, i.jsx)("div", {
                                  className: B ? R.Nk : R.YU,
                                  ref: L,
                                  children: (0, i.jsx)(c.w, { type: "critical", children: F }),
                              }),
                        I
                            ? (0, i.jsx)(h.y, { className: R.CI })
                            : (0, i.jsx)(u.Y, {
                                  className: R.C9,
                                  overrideKey: D,
                                  staticClassName: R.a2,
                                  animatedNodeClassName: R.L2,
                                  fillParent: !0,
                                  step: s,
                                  steps: t,
                                  sideMargin: 20,
                                  children: B
                                      ? l
                                      : (0, i.jsx)(m.Ch, { onScroll: w, className: r()(R.XG, Y), children: l }),
                              }),
                    ],
                }),
            ],
        });
    return (0, i.jsxs)(a.Elements, {
        options: j.XL8,
        stripe: W,
        children: [
            M,
            B
                ? (0, i.jsx)(g.c, { children: V })
                : (0, i.jsx)("div", { className: r()("paymentModalContent", R.Qs), children: V }),
            _,
        ],
    });
}
