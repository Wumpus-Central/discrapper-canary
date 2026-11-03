n.d(t, { A: () => R });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    o = n(435558),
    s = n(575593),
    a = n(17928),
    c = n(315629),
    u = n(534514),
    d = n(403581),
    m = n(834730),
    A = n(773669),
    f = n(58703),
    E = n(24482),
    h = n(993408),
    x = n(519707),
    p = n(821701),
    L = n(536572),
    _ = n(105292),
    g = n(955527);
function j(e) {
    let { render: t } = e;
    return t((0, x.J)("collectibles_edit_modal_preview_details"));
}
function y(e) {
    let { purchase: t, isPremiumPurchase: n, locale: r } = e,
        i = null != t.expiresAt ? (0, f.Tf)(new Date(), t.expiresAt) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != i &&
                (0, l.jsx)(m.E, {
                    variant: "footnote/normal",
                    color: "text-muted",
                    children: _.intl.format(_.t.Io7ozn, { days: i.days.toString() }),
                }),
            (0, l.jsxs)(m.E, {
                variant: "footnote/normal",
                color: "text-muted",
                children: [
                    _.intl.format(_.t.gW9R4B, {
                        date: t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" }),
                    }),
                    null != t.expiresAt &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("br", {}),
                                _.intl.format(_.t.eZSTa5, {
                                    date: t.expiresAt.toLocaleDateString(r, {
                                        minute: "numeric",
                                        hour: "numeric",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            n &&
                (0, l.jsx)(m.E, {
                    variant: "footnote/normal",
                    color: "text-muted",
                    children: _.intl.string(_.t.nKdAlO),
                }),
        ],
    });
}
function b(e) {
    let { canUsePremiumCollectibles: t, hasLostAccess: n, nitroChurnCTA: r, nitroJoinCTA: i } = e;
    return t
        ? (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: _.intl.string(_.t.hmyYK8) })
        : n
          ? (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: r })
          : (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: i });
}
function C() {
    return (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: _.intl.string(_.t.fEGjVQ) });
}
let R = function (e) {
    let { user: t, previewSkuId: n, nitroChurnCTA: r, nitroJoinCTA: m } = e,
        f = (0, a.bG)([A.default], () => A.default.locale),
        { product: x, purchase: _ } = (0, p.A)(n),
        R = E.Ay.canUseCollectibles(t),
        T = (0, h.G0)(x),
        v = (0, h.gA)(_),
        O = !R && v,
        k = null != _ && !O,
        P = (0, L.Sw)(_),
        N = (0, L.VG)(x),
        D = T || v,
        I = x?.type ?? _?.type,
        F = !k && (!D || I === s.R.AVATAR_DECORATION || I === s.R.PROFILE_EFFECT);
    if (null == x && null == _) return null;
    function M(e) {
        let t = e && D ? c.h : "div";
        return (0, l.jsx)("div", {
            className: i()(g.kL, { [g.D7]: !k && !e, [g.$N]: e, [g.d7]: e && D }),
            children: (0, l.jsxs)(t, {
                className: g.WH,
                color: e && D ? "nitro-pink" : void 0,
                children: [
                    (0, l.jsxs)(u.D, {
                        color: "text-strong",
                        variant: e ? "body-md/semibold" : "body-sm/semibold",
                        className: e ? g.DD : void 0,
                        children: [
                            e && D && (0, l.jsx)(d.t, { size: "xs", color: "currentColor" }),
                            (0, o.isEmpty)(P) ? N : P,
                        ],
                    }),
                    k
                        ? (0, l.jsx)(y, { purchase: _, isPremiumPurchase: v, locale: f })
                        : T || v
                          ? (0, l.jsx)(b, {
                                canUsePremiumCollectibles: R,
                                hasLostAccess: O,
                                nitroChurnCTA: r,
                                nitroJoinCTA: m,
                            })
                          : (0, l.jsx)(C, {}),
                ],
            }),
        });
    }
    return F ? (0, l.jsx)(j, { render: M }) : M(!1);
};
