n.d(t, { B: () => S });
var l = n(627968),
    i = n(64700),
    r = n(702841),
    s = n(545075),
    a = n(426398),
    o = n(427675),
    u = n(671744),
    c = n(590180),
    d = n(937008),
    C = n(834252),
    p = n(166532),
    m = n(20742),
    _ = n(430993),
    T = n(315949),
    E = n(599062),
    A = n(375708);
function O() {
    let { refreshCategories: e } = (0, T.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(m.rQ, { title: A.intl.string(A.t["p8+qtU"]) }),
            (0, l.jsx)(_.c, { children: (0, l.jsx)(E.h, { onRetry: e, errorOrigin: E.A.GIFT_MODAL }) }),
        ],
    });
}
var h = n(534479),
    I = n(652215);
function S(e) {
    let { handleStepChange: t } = e,
        n = (0, u.t4)((e) => e.selectedSkuId),
        { paymentSources: m, hasFetchedPaymentSources: _ } = (0, a.jm)(),
        { blockedPayments: T, application: E } = (0, C.P5)(),
        A = (0, o.gU)(),
        S = (0, o.Hu)(),
        { isGift: g } = (0, d.Pv)(),
        [x, P] = i.useState(!0),
        [f, N] = (0, r.yK)([c.A], () => [c.A.isFetchingCategories, c.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        S && _ && e && P(f);
    }, [S, _, E, f]),
    i.useEffect(() => {
        if (x || T || null == n) return;
        let e = A[n];
        g &&
        (e?.productLine === I.EZt.COLLECTIBLES ||
            e?.productLine === I.EZt.APPLICATION ||
            e?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(p.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(p.pn.ADD_PAYMENT_STEPS)
              : t(p.pn.REVIEW);
    }, [x, T, t, m, g, A, n]),
    x)
        ? (0, l.jsx)(h.A, {})
        : T
          ? (0, l.jsx)(s.oO, {})
          : null != N
            ? (0, l.jsx)(O, {})
            : null;
}
