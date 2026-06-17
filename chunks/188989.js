s.d(e, { _: () => N });
var i = s(627968);
s(64700);
var a = s(534514),
    n = s(789645),
    r = s(847374);
let l = function (t) {
    let { open: e, className: s, ...a } = t,
        l = e ? n.P : r.a;
    return (0, i.jsx)(l, { className: s, size: "sm", color: "currentColor", ...a });
};
var c = s(986268),
    u = s(473145),
    o = s(631305),
    d = s(625633),
    m = s(652215),
    g = s(375708),
    p = s(660929);
function h(t) {
    let { guild: e, banner: s } = t;
    return (0, i.jsx)("div", {
        className: p.C1,
        style: { backgroundImage: `url(${s}` },
        children: (0, i.jsxs)("div", {
            className: p.F,
            children: [
                (0, i.jsx)(c.A, { guild: e, isBannerVisible: !0 }),
                (0, i.jsx)(a.D, { className: p.J5, variant: "heading-md/semibold", children: e.name }),
                (0, i.jsx)(l, { className: p.Wm, open: !1 }),
            ],
        }),
    });
}
function N(t) {
    let { analyticsLocations: e, analyticsLocation: s, guild: a, isGIF: n, banner: r } = t,
        l = n ? (0, u.Ys)(m.GuildFeatures.ANIMATED_BANNER) : (0, u.Ys)(m.GuildFeatures.BANNER);
    if (null != l) {
        let t;
        (0, o.A)({
            analyticsLocations: e,
            analyticsSourceLocation: s,
            guild: a,
            headerProps: {
                title: g.intl.string(g.t["rv2H+1"]),
                subtitle:
                    ((t = (0, u.gb)(l)),
                    n
                        ? g.intl.formatToPlainString(g.t["TR/Uyt"], { targetLevelOrPlan: t })
                        : g.intl.formatToPlainString(g.t.B253V6, { targetLevelOrPlan: t })),
                image: (0, i.jsx)(h, { guild: a, banner: r }),
            },
            perkIntro: g.intl.string(g.t.ZuItcI),
            perks: n ? (0, d.Pf)() : (0, d.QR)(),
        });
    }
}
