n.d(t, { A: () => T });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(503698),
    s = n.n(a),
    o = n(451988),
    u = n(597770),
    c = n(40474),
    d = n(683071),
    m = n(289873),
    p = n(685094),
    C = n(689175),
    h = n(430993),
    f = n(102741),
    E = n(913122),
    S = n(136857),
    y = n(783327),
    I = n(166532);
n(69494), n(482132);
var A = n(739508),
    P = n(927813),
    g = n(652215),
    v = n(375708),
    _ = n(304082);
let x = new Set([I.pn.SKU_SELECT, I.pn.AWAITING_AUTHENTICATION, I.pn.AWAITING_PURCHASE_TOKEN_AUTH, I.pn.CONFIRM]);
function T(e) {
    let {
            steps: t,
            currentStep: n,
            body: a,
            overrideKey: T,
            paymentError: N,
            header: b,
            footer: j,
            isGift: R = !1,
            giftMessage: M = v.intl.string(v.t["DrgnS+"]),
            hideBreadcrumbs: O = !1,
            isLoading: L = !1,
            purchaseError: k,
            purchaseErrorBlockRef: w,
            planError: U,
            onScroll: D,
            scrollerClassName: G,
            hasCurrencies: F = !1,
            shouldUseManaModal: B = !1,
        } = e,
        H = null;
    null != N && null == (0, I.ou)(N) ? (H = N) : null != k ? (H = k) : null != U && (H = U);
    let W = null != H ? H.message : "";
    null != H &&
        H instanceof E.Ey &&
        (H.code === S.tG.CARD_DECLINED && F && (W += ` ${v.intl.string(v.t.iWvwQS)}`),
        H.code === S.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (W = v.intl.string(v.t.ypuSd8)),
        H.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (W = v.intl.string(v.t.mXMmWE)));
    let Y = (0, y.S)();
    L = L || null == Y;
    let V = i.useRef(new o.Ep());
    i.useEffect(() => {
        let e = V.current;
        return (
            null != Y || e.isStarted()
                ? null != Y && e.stop()
                : e.start(10 * P.A.Millis.SECOND, () => {
                      let e = Error("Stripe took too long to load");
                      (0, A.pM)(e);
                  }),
            () => {
                e.stop();
            }
        );
    }, [Y]);
    let K = t.includes(I.pn.PAYMENT_ELEMENT) ? I.pn.PAYMENT_ELEMENT : I.pn.ADD_PAYMENT_STEPS,
        Z = (0, l.jsxs)(l.Fragment, {
            children: [
                R && n !== I.pn.CONFIRM
                    ? (0, l.jsx)(f.A, {
                          className: _.zJ,
                          iconSize: f.A.Sizes.SMALL,
                          icon: u.GiftIcon,
                          color: null == M ? f.A.Colors.PRIMARY : f.A.Colors.SECONDARY,
                          children: M,
                      })
                    : null,
                O
                    ? null
                    : (0, l.jsx)("div", {
                          className: s()(_.QN, { [_.k3]: B }),
                          children: (0, l.jsx)(c.A, {
                              activeId: I.ZC.has(n) ? K : n,
                              breadcrumbs: t
                                  .filter((e) => !I.ZC.has(e) && !x.has(e))
                                  .map((e) => ({ id: e, label: (0, I.Ir)(e) })),
                          }),
                      }),
                (0, l.jsxs)("div", {
                    className: _.uK,
                    children: [
                        null == H
                            ? null
                            : (0, l.jsx)("div", {
                                  className: B ? _.Nk : _.YU,
                                  ref: w,
                                  children: (0, l.jsx)(d.w, { type: "critical", children: W }),
                              }),
                        L
                            ? (0, l.jsx)(m.y, { className: _.CI })
                            : (0, l.jsx)(p.Y, {
                                  className: _.C9,
                                  overrideKey: T,
                                  staticClassName: _.a2,
                                  animatedNodeClassName: _.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: t,
                                  sideMargin: 20,
                                  children: B
                                      ? a
                                      : (0, l.jsx)(C.Ch, { onScroll: D, className: s()(_.XG, G), children: a }),
                              }),
                    ],
                }),
            ],
        });
    return (0, l.jsxs)(r.Elements, {
        options: g.XL8,
        stripe: Y,
        children: [
            b,
            B
                ? (0, l.jsx)(h.c, { children: Z })
                : (0, l.jsx)("div", { className: s()("paymentModalContent", _.Qs), children: Z }),
            j,
        ],
    });
}
