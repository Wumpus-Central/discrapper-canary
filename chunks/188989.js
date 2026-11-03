e.d(t, { _: () => N });
var i = e(477900);
e(582128);
var a = e(534514),
    n = e(789645),
    r = e(847374);
let l = function (s) {
    let { open: t, className: e, ...a } = s,
        l = t ? n.P : r.a;
    return (0, i.jsx)(l, { className: e, size: "sm", color: "currentColor", ...a });
};
var c = e(537547),
    u = e(473145),
    o = e(631305),
    d = e(625633),
    m = e(652215),
    g = e(105292),
    p = e(801506);
function h(s) {
    let { guild: t, banner: e } = s;
    return (0, i.jsx)("div", {
        className: p.C1,
        style: { backgroundImage: `url(${e}` },
        children: (0, i.jsxs)("div", {
            className: p.F,
            children: [
                (0, i.jsx)(c.A, { guild: t, isBannerVisible: !0 }),
                (0, i.jsx)(a.D, { className: p.J5, variant: "heading-sm/semibold", children: t.name }),
                (0, i.jsx)(l, { className: p.Wm, open: !1 }),
            ],
        }),
    });
}
function N(s) {
    let { analyticsLocations: t, analyticsLocation: e, guild: a, isGIF: n, banner: r } = s,
        l = n ? (0, u.Ys)(m.GuildFeatures.ANIMATED_BANNER) : (0, u.Ys)(m.GuildFeatures.BANNER);
    if (null != l) {
        let s;
        (0, o.A)({
            analyticsLocations: t,
            analyticsSourceLocation: e,
            guild: a,
            headerProps: {
                title: g.intl.string(g.t["rv2H+1"]),
                subtitle:
                    ((s = (0, u.gb)(l)),
                    n
                        ? g.intl.formatToPlainString(g.t["TR/Uyt"], { targetLevelOrPlan: s })
                        : g.intl.formatToPlainString(g.t.B253V6, { targetLevelOrPlan: s })),
                image: (0, i.jsx)(h, { guild: a, banner: r }),
            },
            perkIntro: g.intl.string(g.t.ZuItcI),
            perks: n ? (0, d.Pf)() : (0, d.QR)(),
        });
    }
}
