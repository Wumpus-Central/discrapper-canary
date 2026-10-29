n.d(t, { A: () => v });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    s = n(435558),
    a = n(575593),
    o = n(17928),
    c = n(315629),
    u = n(297264),
    d = n(403581),
    m = n(834730),
    x = n(773669),
    A = n(58703),
    E = n(24482),
    f = n(993408),
    h = n(519707),
    p = n(821701),
    L = n(536572),
    _ = n(105292),
    g = n(955527);
function j(e) {
    let { render: t } = e;
    return t((0, h.J)("collectibles_edit_modal_preview_details"));
}
function C(e) {
    let { purchase: t, isPremiumPurchase: n, locale: r } = e,
        i = null != t.expiresAt ? (0, A.Tf)(new Date(), t.expiresAt) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != i &&
                (0, l.jsx)(m.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: _.intl.format(_.t.Io7ozn, { days: i.days.toString() }),
                }),
            (0, l.jsxs)(m.E, {
                variant: "text-xxs/normal",
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
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: _.intl.string(_.t.nKdAlO),
                }),
        ],
    });
}
function R(e) {
    let { canUsePremiumCollectibles: t, hasLostAccess: n, nitroChurnCTA: r, nitroJoinCTA: i } = e;
    return t
        ? (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: _.intl.string(_.t.hmyYK8) })
        : n
          ? (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: r })
          : (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: i });
}
function T() {
    return (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: _.intl.string(_.t.fEGjVQ) });
}
let v = function (e) {
    let { user: t, previewSkuId: n, nitroChurnCTA: r, nitroJoinCTA: m } = e,
        A = (0, o.bG)([x.default], () => x.default.locale),
        { product: h, purchase: _ } = (0, p.A)(n),
        v = E.Ay.canUseCollectibles(t),
        y = (0, f.G0)(h),
        O = (0, f.gA)(_),
        b = !v && O,
        k = null != _ && !b,
        P = (0, L.Sw)(_),
        N = (0, L.VG)(h),
        D = y || O,
        I = h?.type ?? _?.type,
        F = !k && (!D || I === a.R.AVATAR_DECORATION || I === a.R.PROFILE_EFFECT);
    if (null == h && null == _) return null;
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
                        variant: e ? "text-md/semibold" : "text-sm/semibold",
                        className: e ? g.DD : void 0,
                        children: [
                            e && D && (0, l.jsx)(d.t, { size: "xs", color: "currentColor" }),
                            (0, s.isEmpty)(P) ? N : P,
                        ],
                    }),
                    k
                        ? (0, l.jsx)(C, { purchase: _, isPremiumPurchase: O, locale: A })
                        : y || O
                          ? (0, l.jsx)(R, {
                                canUsePremiumCollectibles: v,
                                hasLostAccess: b,
                                nitroChurnCTA: r,
                                nitroJoinCTA: m,
                            })
                          : (0, l.jsx)(T, {}),
                ],
            }),
        });
    }
    return F ? (0, l.jsx)(j, { render: M }) : M(!1);
};
