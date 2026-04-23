n.d(t, { _: () => _ });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(789645),
    a = n(847374);
let r = (e) => {
    let { open: t, className: n, ...l } = e,
        r = t ? s.P : a.a;
    return (0, i.jsx)(r, { className: n, size: "sm", color: "currentColor", ...l });
};
var o = n(986268),
    d = n(473145),
    c = n(631305),
    u = n(874864),
    m = n(652215),
    g = n(985018),
    h = n(660929);
function x(e) {
    let { guild: t, banner: n } = e;
    return (0, i.jsx)("div", {
        className: h.C1,
        style: { backgroundImage: `url(${n}` },
        children: (0, i.jsxs)("div", {
            className: h.F,
            children: [
                (0, i.jsx)(o.A, { guild: t, isBannerVisible: !0 }),
                (0, i.jsx)(l.D, { className: h.J5, variant: "heading-md/semibold", children: t.name }),
                (0, i.jsx)(r, { className: h.Wm, open: !1 }),
            ],
        }),
    });
}
function _(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: l, isGIF: s, banner: a } = e,
        r = s ? (0, d.Ys)(m.GuildFeatures.ANIMATED_BANNER) : (0, d.Ys)(m.GuildFeatures.BANNER);
    if (null != r) {
        let e;
        (0, c.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: l,
            headerProps: {
                title: g.intl.string(g.t["rv2H+1"]),
                subtitle:
                    ((e = (0, d.gb)(r)),
                    s
                        ? g.intl.formatToPlainString(g.t["TR/Uyt"], { targetLevelOrPlan: e })
                        : g.intl.formatToPlainString(g.t.B253V6, { targetLevelOrPlan: e })),
                image: (0, i.jsx)(x, { guild: l, banner: a }),
            },
            perkIntro: g.intl.string(g.t.ZuItcI),
            perks: s ? (0, u.Pf)() : (0, u.QR)(),
        });
    }
}
