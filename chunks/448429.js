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
    f = n(5377),
    h = n(722178),
    E = n(993408),
    x = n(519707),
    p = n(821701),
    _ = n(536572),
    g = n(792996),
    j = n(955527);
function L(e) {
    let { render: t } = e;
    return t((0, x.J)("collectibles_edit_modal_preview_details"));
}
function b(e) {
    let { purchase: t, isPremiumPurchase: n, locale: r } = e,
        i = null != t.expiresAt ? (0, f.Tf)(new Date(), t.expiresAt) : null;
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
function y(e) {
    let { canUsePremiumCollectibles: t, hasLostAccess: n, nitroChurnCTA: r, nitroJoinCTA: i } = e;
    return t
        ? (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: g.intl.string(g.t.hmyYK8) })
        : n
          ? (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: r })
          : (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: i });
}
function C() {
    return (0, l.jsx)(m.E, { variant: "body-sm/medium", color: "text-default", children: g.intl.string(g.t.fEGjVQ) });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, previewSkuId: n, nitroChurnCTA: r, nitroJoinCTA: m } = e,
                f = (0, a.bG)([A.default], () => A.default.locale),
                { product: x, purchase: g } = (0, p.A)(n),
                R = h.Ay.canUseCollectibles(t),
                T = (0, E.G0)(x),
                v = (0, E.gA)(g),
                O = !R && v,
                k = null != g && !O,
                N = (0, _.Sw)(g),
                P = (0, _.VG)(x),
                I = T || v,
                D = x?.type ?? g?.type,
                F = !k && (!I || D === s.R.AVATAR_DECORATION || D === s.R.PROFILE_EFFECT);
            if (null == x && null == g) return null;
            function M(e) {
                let t = e && I ? c.h : "div";
                return (0, l.jsx)("div", {
                    className: i()(j.kL, { [j.D7]: !k && !e, [j.$N]: e, [j.d7]: e && I }),
                    children: (0, l.jsxs)(t, {
                        className: j.WH,
                        color: e && I ? "nitro-pink" : void 0,
                        children: [
                            (0, l.jsxs)(u.D, {
                                color: "text-strong",
                                variant: e ? "body-md/semibold" : "body-sm/semibold",
                                className: e ? j.DD : void 0,
                                children: [
                                    e && I && (0, l.jsx)(d.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                                    (0, o.isEmpty)(N) ? P : N,
                                ],
                            }),
                            k
                                ? (0, l.jsx)(b, { purchase: g, isPremiumPurchase: v, locale: f })
                                : T || v
                                  ? (0, l.jsx)(y, {
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
            return F ? (0, l.jsx)(L, { render: M }) : M(!1);
        },
    },
);
