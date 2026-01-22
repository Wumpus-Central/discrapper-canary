n.d(t, {
    A: () => O,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(503698),
    o = n.n(s),
    l = n(451988),
    c = n(397927),
    u = n(102741),
    d = n(198982),
    f = n(136857),
    p = n(156312),
    _ = n(166532);
n(69494), n(482132);
var h = n(739508),
    m = n(927813),
    g = n(652215),
    E = n(985018),
    b = n(676032);
let y = new Set([_.pn.SKU_SELECT, _.pn.AWAITING_AUTHENTICATION, _.pn.AWAITING_PURCHASE_TOKEN_AUTH, _.pn.CONFIRM]);

function O(e) {
    let {
            steps: t,
            currentStep: n,
            body: s,
            overrideKey: O,
            paymentError: A,
            header: v,
            footer: S,
            isGift: I = !1,
            giftMessage: T = E.intl.string(E.t["DrgnS+"]),
            hideBreadcrumbs: C = !1,
            isLoading: N = !1,
            purchaseError: R,
            purchaseErrorBlockRef: w,
            planError: P,
            onScroll: D,
            scrollerClassName: x,
            hasCurrencies: L = !1,
        } = e,
        j = null;
    null != A && null == (0, _.ou)(A) ? (j = A) : null != R ? (j = R) : null != P && (j = P);
    let M = null != j ? j.message : "";
    null != j &&
        j instanceof d.Ey &&
        (j.code === f.tG.CARD_DECLINED && L && (M += " ".concat(E.intl.string(E.t.iWvwQS))),
        j.code === f.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = E.intl.string(E.t.ypuSd8)),
        j.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = E.intl.string(E.t.mXMmWE)));
    let { stripe: k } = (0, p.P5)();
    N = N || null == k;
    let U = i.useRef(new l.Ep());
    i.useEffect(() => {
        let e = U.current;
        return (
            null != k || e.isStarted()
                ? null != k && e.stop()
                : e.start(10 * m.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, h.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [k]);
    let G = t.includes(_.pn.PAYMENT_TYPE) ? _.pn.PAYMENT_TYPE : _.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(a.Elements, {
        options: g.XL8,
        stripe: k,
        children: [
            v,
            (0, r.jsxs)("div", {
                className: o()("paymentModalContent", b.Qs),
                children: [
                    I && n !== _.pn.CONFIRM
                        ? (0, r.jsx)(u.A, {
                              className: b.zJ,
                              iconSize: u.A.Sizes.SMALL,
                              icon: c.okO,
                              color: null == T ? u.A.Colors.PRIMARY : u.A.Colors.SECONDARY,
                              children: T,
                          })
                        : null,
                    C
                        ? null
                        : (0, r.jsx)("div", {
                              className: b.QN,
                              children: (0, r.jsx)(c.BIu, {
                                  activeId: _.ZC.has(n) ? G : n,
                                  breadcrumbs: t
                                      .filter((e) => !_.ZC.has(e) && !y.has(e))
                                      .map((e) => ({
                                          id: e,
                                          label: (0, _.Ir)(e),
                                      })),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: b.uK,
                        children: [
                            null == j
                                ? null
                                : (0, r.jsx)("div", {
                                      className: b.Nk,
                                      ref: w,
                                      children: (0, r.jsx)(c.wx6, {
                                          type: "critical",
                                          children: M,
                                      }),
                                  }),
                            N
                                ? (0, r.jsx)(c.y$y, {
                                      className: b.CI,
                                  })
                                : (0, r.jsx)(c.YC2, {
                                      className: b.C9,
                                      overrideKey: O,
                                      staticClassName: b.a2,
                                      animatedNodeClassName: b.L2,
                                      fillParent: !0,
                                      step: n,
                                      steps: t,
                                      sideMargin: 20,
                                      children: (0, r.jsx)(c.ChK, {
                                          onScroll: D,
                                          className: o()(b.XG, x),
                                          children: s,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            S,
        ],
    });
}
