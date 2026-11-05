t.d(s, { _: () => N });
var n = t(477900);
t(582128);
var i = t(534514),
    a = t(789645),
    l = t(847374);
let r = function (e) {
    let { open: s, className: t, ...i } = e,
        r = s ? a.XSmallIcon : l.ChevronSmallDownIcon;
    return (0, n.jsx)(r, { className: t, size: "sm", color: "currentColor", ...i });
};
var c = t(877126),
    o = t(473145),
    u = t(631305),
    d = t(598933),
    m = t(652215),
    g = t(792996),
    h = t(801506);
function p(e) {
    let { guild: s, banner: t } = e;
    return (0, n.jsx)("div", {
        className: h.C1,
        style: { backgroundImage: `url(${t}` },
        children: (0, n.jsxs)("div", {
            className: h.F,
            children: [
                (0, n.jsx)(c.A, { guild: s, isBannerVisible: !0 }),
                (0, n.jsx)(i.D, { className: h.J5, variant: "heading-sm/semibold", children: s.name }),
                (0, n.jsx)(r, { className: h.Wm, open: !1 }),
            ],
        }),
    });
}
function N(e) {
    let { analyticsLocations: s, analyticsLocation: t, guild: i, isGIF: a, banner: l } = e,
        r = a ? (0, o.Ys)(m.GuildFeatures.ANIMATED_BANNER) : (0, o.Ys)(m.GuildFeatures.BANNER);
    if (null != r) {
        let e;
        (0, u.A)({
            analyticsLocations: s,
            analyticsSourceLocation: t,
            guild: i,
            headerProps: {
                title: g.intl.string(g.t["rv2H+1"]),
                subtitle:
                    ((e = (0, o.gb)(r)),
                    a
                        ? g.intl.formatToPlainString(g.t["TR/Uyt"], { targetLevelOrPlan: e })
                        : g.intl.formatToPlainString(g.t.B253V6, { targetLevelOrPlan: e })),
                image: (0, n.jsx)(p, { guild: i, banner: l }),
            },
            perkIntro: g.intl.string(g.t.ZuItcI),
            perks: a ? (0, d.Pf)() : (0, d.QR)(),
        });
    }
}
