"use strict";
n.d(t, { B: () => T });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(545075),
    o = n(427675),
    l = n(94420),
    d = n(590180),
    _ = n(937008),
    u = n(156312),
    c = n(166532),
    E = n(20742),
    h = n(430993),
    m = n(315949),
    f = n(599062),
    g = n(985018);
function p() {
    let { refreshCategories: e } = (0, m.A)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.rQ, { title: g.intl.string(g.t["p8+qtU"]) }),
            (0, i.jsx)(h.c, { children: (0, i.jsx)(f.h, { onRetry: e, errorOrigin: f.A.GIFT_MODAL }) }),
        ],
    });
}
var A = n(534479),
    I = n(652215);
function T(e) {
    let { handleStepChange: t } = e,
        n = (0, l.t4)((e) => e.selectedSkuId),
        { blockedPayments: E, paymentSources: h, hasFetchedPaymentSources: m, application: f } = (0, u.P5)(),
        g = (0, o.gU)(),
        T = (0, o.Hu)(),
        { isGift: S } = (0, _.Pv)(),
        [N, C] = r.useState(!0),
        [R, O] = (0, s.yK)([d.A], () => [d.A.isFetchingCategories, d.A.error]);
    return (r.useEffect(() => {
        let e = null != f;
        T && m && e && C(R);
    }, [T, m, f, R]),
    r.useEffect(() => {
        if (N || E || null == n) return;
        let e = g[n];
        S &&
        (e?.productLine === I.EZt.COLLECTIBLES ||
            e?.productLine === I.EZt.APPLICATION ||
            e?.productLine === I.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(c.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(h).length
              ? t(c.pn.ADD_PAYMENT_STEPS)
              : t(c.pn.REVIEW);
    }, [N, E, t, h, S, g, n]),
    N)
        ? (0, i.jsx)(A.A, {})
        : E
          ? (0, i.jsx)(a.oO, {})
          : null != O
            ? (0, i.jsx)(p, {})
            : null;
}
