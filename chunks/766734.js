n.d(t, { B: () => S });
var l = n(627968),
    i = n(64700),
    r = n(702841),
    s = n(545075),
    a = n(427675),
    o = n(94420),
    u = n(590180),
    c = n(937008),
    d = n(49960),
    C = n(166532),
    p = n(20742),
    m = n(430993),
    _ = n(315949),
    E = n(599062),
    T = n(375708);
function A() {
    let { refreshCategories: e } = (0, _.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(p.rQ, { title: T.intl.string(T.t["p8+qtU"]) }),
            (0, l.jsx)(m.c, { children: (0, l.jsx)(E.h, { onRetry: e, errorOrigin: E.A.GIFT_MODAL }) }),
        ],
    });
}
var h = n(534479),
    O = n(652215);
function S(e) {
    let { handleStepChange: t } = e,
        n = (0, o.t4)((e) => e.selectedSkuId),
        { blockedPayments: p, paymentSources: m, hasFetchedPaymentSources: _, application: E } = (0, d.P5)(),
        T = (0, a.gU)(),
        S = (0, a.Hu)(),
        { isGift: I } = (0, c.Pv)(),
        [f, x] = i.useState(!0),
        [g, P] = (0, r.yK)([u.A], () => [u.A.isFetchingCategories, u.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        S && _ && e && x(g);
    }, [S, _, E, g]),
    i.useEffect(() => {
        if (f || p || null == n) return;
        let e = T[n];
        I &&
        (e?.productLine === O.EZt.COLLECTIBLES ||
            e?.productLine === O.EZt.APPLICATION ||
            e?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(C.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(C.pn.ADD_PAYMENT_STEPS)
              : t(C.pn.REVIEW);
    }, [f, p, t, m, I, T, n]),
    f)
        ? (0, l.jsx)(h.A, {})
        : p
          ? (0, l.jsx)(s.oO, {})
          : null != P
            ? (0, l.jsx)(A, {})
            : null;
}
