n.d(t, { B: () => I });
var l = n(627968),
    i = n(64700),
    r = n(702841),
    s = n(545075),
    a = n(426398),
    o = n(427675),
    u = n(94420),
    c = n(590180),
    d = n(937008),
    C = n(834252),
    p = n(166532),
    m = n(20742),
    E = n(430993),
    _ = n(315949),
    T = n(599062),
    h = n(375708);
function A() {
    let { refreshCategories: e } = (0, _.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(m.rQ, { title: h.intl.string(h.t["p8+qtU"]) }),
            (0, l.jsx)(E.c, { children: (0, l.jsx)(T.h, { onRetry: e, errorOrigin: T.A.GIFT_MODAL }) }),
        ],
    });
}
var O = n(534479),
    S = n(652215);
function I(e) {
    let { handleStepChange: t } = e,
        n = (0, u.t4)((e) => e.selectedSkuId),
        { paymentSources: m, hasFetchedPaymentSources: E } = (0, a.jm)(),
        { blockedPayments: _, application: T } = (0, C.P5)(),
        h = (0, o.gU)(),
        I = (0, o.Hu)(),
        { isGift: f } = (0, d.Pv)(),
        [x, g] = i.useState(!0),
        [P, N] = (0, r.yK)([c.A], () => [c.A.isFetchingCategories, c.A.error]);
    return (i.useEffect(() => {
        let e = null != T;
        I && E && e && g(P);
    }, [I, E, T, P]),
    i.useEffect(() => {
        if (x || _ || null == n) return;
        let e = h[n];
        f &&
        (e?.productLine === S.EZt.COLLECTIBLES ||
            e?.productLine === S.EZt.APPLICATION ||
            e?.productLine === S.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(p.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(p.pn.ADD_PAYMENT_STEPS)
              : t(p.pn.REVIEW);
    }, [x, _, t, m, f, h, n]),
    x)
        ? (0, l.jsx)(O.A, {})
        : _
          ? (0, l.jsx)(s.oO, {})
          : null != N
            ? (0, l.jsx)(A, {})
            : null;
}
