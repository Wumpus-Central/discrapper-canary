t.d(s, { _: () => N });
var i = t(627968);
t(64700);
var a = t(534514),
    r = t(789645),
    n = t(847374);
let l = (e) => {
    let { open: s, className: t, ...a } = e,
        l = s ? r.P : n.a;
    return (0, i.jsx)(l, { className: t, size: "sm", color: "currentColor", ...a });
};
var c = t(986268),
    u = t(473145),
    o = t(631305),
    d = t(625633),
    m = t(652215),
    g = t(375708),
    p = t(660929);
function h(e) {
    let { guild: s, banner: t } = e;
    return (0, i.jsx)("div", {
        className: p.C1,
        style: { backgroundImage: `url(${t}` },
        children: (0, i.jsxs)("div", {
            className: p.F,
            children: [
                (0, i.jsx)(c.A, { guild: s, isBannerVisible: !0 }),
                (0, i.jsx)(a.D, { className: p.J5, variant: "heading-md/semibold", children: s.name }),
                (0, i.jsx)(l, { className: p.Wm, open: !1 }),
            ],
        }),
    });
}
function N(e) {
    let { analyticsLocations: s, analyticsLocation: t, guild: a, isGIF: r, banner: n } = e,
        l = r ? (0, u.Ys)(m.GuildFeatures.ANIMATED_BANNER) : (0, u.Ys)(m.GuildFeatures.BANNER);
    if (null != l) {
        let e;
        (0, o.A)({
            analyticsLocations: s,
            analyticsSourceLocation: t,
            guild: a,
            headerProps: {
                title: g.intl.string(g.t["rv2H+1"]),
                subtitle:
                    ((e = (0, u.gb)(l)),
                    r
                        ? g.intl.formatToPlainString(g.t["TR/Uyt"], { targetLevelOrPlan: e })
                        : g.intl.formatToPlainString(g.t.B253V6, { targetLevelOrPlan: e })),
                image: (0, i.jsx)(h, { guild: a, banner: n }),
            },
            perkIntro: g.intl.string(g.t.ZuItcI),
            perks: r ? (0, d.Pf)() : (0, d.QR)(),
        });
    }
}
