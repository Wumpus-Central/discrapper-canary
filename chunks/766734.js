n.d(t, { B: () => T });
var l = n(627968),
    r = n(64700),
    i = n(702841),
    a = n(545075),
    s = n(427675),
    o = n(94420),
    u = n(590180),
    d = n(937008),
    c = n(156312),
    C = n(166532),
    p = n(20742),
    m = n(430993),
    h = n(315949),
    _ = n(599062),
    E = n(985018);
function A() {
    let { refreshCategories: e } = (0, h.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(p.rQ, { title: E.intl.string(E.t["p8+qtU"]) }),
            (0, l.jsx)(m.c, { children: (0, l.jsx)(_.h, { onRetry: e, errorOrigin: _.A.GIFT_MODAL }) }),
        ],
    });
}
var g = n(534479),
    f = n(652215);
function T(e) {
    let { handleStepChange: t } = e,
        n = (0, o.t4)((e) => e.selectedSkuId),
        { blockedPayments: p, paymentSources: m, hasFetchedPaymentSources: h, application: _ } = (0, c.P5)(),
        E = (0, s.gU)(),
        T = (0, s.Hu)(),
        { isGift: S } = (0, d.Pv)(),
        [I, x] = r.useState(!0),
        [O, y] = (0, i.yK)([u.A], () => [u.A.isFetchingCategories, u.A.error]);
    return (r.useEffect(() => {
        let e = null != _;
        T && h && e && x(O);
    }, [T, h, _, O]),
    r.useEffect(() => {
        if (I || p || null == n) return;
        let e = E[n];
        S &&
        (e?.productLine === f.EZt.COLLECTIBLES ||
            e?.productLine === f.EZt.APPLICATION ||
            e?.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(C.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(C.pn.ADD_PAYMENT_STEPS)
              : t(C.pn.REVIEW);
    }, [I, p, t, m, S, E, n]),
    I)
        ? (0, l.jsx)(g.A, {})
        : p
          ? (0, l.jsx)(a.oO, {})
          : null != y
            ? (0, l.jsx)(A, {})
            : null;
}
