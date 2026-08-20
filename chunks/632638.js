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
    h = n(689175),
    C = n(430993),
    f = n(102741),
    E = n(913122),
    S = n(136857),
    y = n(783327),
    A = n(166532);
n(69494), n(482132);
var P = n(739508),
    I = n(927813),
    g = n(652215),
    v = n(375708),
    _ = n(304082);
let T = new Set([A.pn.SKU_SELECT, A.pn.AWAITING_AUTHENTICATION, A.pn.AWAITING_PURCHASE_TOKEN_AUTH, A.pn.CONFIRM]);
function x(e) {
    let {
            steps: t,
            currentStep: n,
            body: a,
            overrideKey: x,
            paymentError: N,
            header: b,
            footer: R,
            isGift: j = !1,
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
    null != N && null == (0, A.ou)(N) ? (H = N) : null != k ? (H = k) : null != U && (H = U);
    let Y = null != H ? H.message : "";
    null != H &&
        H instanceof E.Ey &&
        (H.code === S.tG.CARD_DECLINED && F && (Y += ` ${v.intl.string(v.t.iWvwQS)}`),
        H.code === S.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (Y = v.intl.string(v.t.ypuSd8)),
        H.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (Y = v.intl.string(v.t.mXMmWE)));
    let W = (0, y.S)();
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
    let K = t.includes(A.pn.PAYMENT_TYPE) ? A.pn.PAYMENT_TYPE : A.pn.ADD_PAYMENT_STEPS,
        q = (0, l.jsxs)(l.Fragment, {
            children: [
                j && n !== A.pn.CONFIRM
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
                              activeId: A.ZC.has(n) ? K : n,
                              breadcrumbs: t
                                  .filter((e) => !A.ZC.has(e) && !T.has(e))
                                  .map((e) => ({ id: e, label: (0, A.Ir)(e) })),
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
                                  children: (0, l.jsx)(d.w, { type: "critical", children: Y }),
                              }),
                        L
                            ? (0, l.jsx)(p.y, { className: _.CI })
                            : (0, l.jsx)(m.Y, {
                                  className: _.C9,
                                  overrideKey: x,
                                  staticClassName: _.a2,
                                  animatedNodeClassName: _.L2,
                                  fillParent: !0,
                                  step: n,
                                  steps: t,
                                  sideMargin: 20,
                                  children: B
                                      ? a
                                      : (0, l.jsx)(h.Ch, { onScroll: D, className: s()(_.XG, G), children: a }),
                              }),
                    ],
                }),
            ],
        });
    return (0, l.jsxs)(r.Elements, {
        options: g.XL8,
        stripe: W,
        children: [
            b,
            B
                ? (0, l.jsx)(C.c, { children: q })
                : (0, l.jsx)("div", { className: s()("paymentModalContent", _.Qs), children: q }),
            R,
        ],
    });
}
