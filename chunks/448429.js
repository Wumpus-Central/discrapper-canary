var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    o = n(435558),
    s = n(575593),
    a = n(855986),
    c = n(315629),
    u = n(534514),
    d = n(403581),
    m = n(834730),
    A = n(773669),
    h = n(5377),
    E = n(448645),
    f = n(993408),
    x = n(519707),
    p = n(821701),
    _ = n(536572),
    g = n(792996),
    L = n(955527);
function R(e) {
    let { render: t } = e;
    return t((0, x.J)("collectibles_edit_modal_preview_details"));
}
function j(e) {
    let { purchase: t, isPremiumPurchase: n, locale: r } = e,
        i = null != t.expiresAt ? (0, h.Tf)(new Date(), t.expiresAt) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != i &&
                (0, l.jsx)(m.E, {
                    variant: "footnote/normal",
                    color: "text-muted",
                    children: g.intl.format(g.t.Io7ozn, { days: i.days.toString() }),
                }),
            (0, l.jsxs)(m.E, {
                variant: "footnote/normal",
                color: "text-muted",
                children: [
                    g.intl.format(g.t.gW9R4B, {
                        date: t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" }),
                    }),
                    null != t.expiresAt &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("br", {}),
                                g.intl.format(g.t.eZSTa5, {
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
                    children: g.intl.string(g.t.nKdAlO),
                }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, previewSkuId: n, nitroChurnCTA: r, nitroJoinCTA: h } = e,
                x = (0, a.bG)([A.default], () => A.default.locale),
                { product: v, purchase: y } = (0, p.A)(n),
                O = E.Ay.canUseCollectibles(t),
                T = (0, f.G0)(v),
                k = (0, f.gA)(y),
                N = !O && k,
                C = null != y && !N,
                I = (0, _.Sw)(y),
                P = (0, _.VG)(v),
                b = T || k,
                D = v?.type ?? y?.type,
                F = !C && (!b || D === s.R.AVATAR_DECORATION || D === s.R.PROFILE_EFFECT);
            if (null == v && null == y) return null;
            function M(e) {
                let t = e && b ? c.h : "div";
                return (0, l.jsx)("div", {
                    className: i()(L.kL, { [L.D7]: !C && !e, [L.$N]: e, [L.d7]: e && b }),
                    children: (0, l.jsxs)(t, {
                        className: L.WH,
                        color: e && b ? "nitro-pink" : void 0,
                        children: [
                            (0, l.jsxs)(u.D, {
                                color: "text-strong",
                                variant: "body-sm/semibold",
                                className: e ? L.DD : void 0,
                                children: [
                                    e && b && (0, l.jsx)(d.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                                    (0, o.isEmpty)(I) ? P : I,
                                ],
                            }),
                            C
                                ? (0, l.jsx)(j, { purchase: y, isPremiumPurchase: k, locale: x })
                                : (0, l.jsx)(m.E, {
                                      variant: e ? "footnote/normal" : "body-sm/medium",
                                      color: "text-default",
                                      children: b
                                          ? (function (e) {
                                                let {
                                                    canUsePremiumCollectibles: t,
                                                    hasLostAccess: n,
                                                    nitroChurnCTA: l,
                                                    nitroJoinCTA: r,
                                                } = e;
                                                return t ? g.intl.string(g.t.hmyYK8) : n ? l : r;
                                            })({
                                                canUsePremiumCollectibles: O,
                                                hasLostAccess: N,
                                                nitroChurnCTA: r,
                                                nitroJoinCTA: h,
                                            })
                                          : g.intl.string(g.t.fEGjVQ),
                                  }),
                        ],
                    }),
                });
            }
            return F ? (0, l.jsx)(R, { render: M }) : M(!1);
        },
    },
);
