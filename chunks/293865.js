l.d(n, { A: () => M });
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(311907),
    d = l(104510),
    c = l(750943),
    o = l(821609),
    u = l(192308),
    h = l(707554),
    m = l(534514),
    x = l(781696),
    g = l(736653),
    A = l(263063),
    _ = l(57991),
    f = l(961973),
    j = l(997509),
    b = l(855687),
    I = l(576705),
    N = l(486020),
    C = l(652215),
    v = l(985018),
    p = l(589258),
    E = l(66087),
    y = l(540725);
function G(e) {
    let { guild: n } = e,
        {
            variant: l,
            icon: s,
            text: t,
        } = n.features.has(C.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: c.X, text: v.intl.string(v.t.b0y3DL) }
            : { variant: "expressive", icon: d._, text: v.intl.string(v.t["+7XY31"]) };
    return (0, a.jsx)("div", {
        className: p.SY,
        children: (0, a.jsx)(o.$, {
            variant: l,
            icon: s,
            text: t,
            onClick: () => {
                j.A.open(n.id, C.BEX.ONBOARDING, void 0, C.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let M = s.memo(function (e) {
    let n,
        { guild: t, titleClassName: d } = e,
        { homeHeaderImage: c, isHomeHeaderImageSet: j } = {
            homeHeaderImage: (n = s.useMemo(
                () => (null == t ? null : N.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: t.homeHeader })),
                [t],
            )),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n),
        },
        M = (0, f.A2)(t.id),
        L = (0, r.bG)([I.A], () => (0, b.K)(I.A, t)),
        D = (0, g.Ay)();
    return (0, a.jsxs)("div", {
        className: p.wx,
        children: [
            (0, a.jsxs)("div", {
                className: p.w5,
                children: [
                    (0, a.jsx)("div", {
                        className: i()(p.NC, { [p.KN]: !j }),
                        style: { backgroundImage: `url(${j ? c : "dark" === D ? E : y})` },
                    }),
                    M && (0, a.jsx)(G, { guild: t }),
                ],
            }),
            (0, a.jsx)("div", {
                className: p.oB,
                children: (0, a.jsxs)("div", {
                    className: d,
                    children: [
                        (0, a.jsx)(A.Ay, { className: p.nr, guild: t, size: A.Ay.Sizes.XLARGE, active: !0 }),
                        (0, a.jsx)(h.F, {
                            children: (0, a.jsxs)("div", {
                                className: p.Bv,
                                children: [
                                    (0, a.jsx)(m.D, { className: p.Bv, variant: "heading-xxl/bold", children: t.name }),
                                    (0, a.jsx)(_.A, {
                                        size: 24,
                                        guild: t,
                                        tooltipPosition: "bottom",
                                        tooltipColor: x.ST.Colors.PRIMARY,
                                    }),
                                    L &&
                                        (0, a.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: p.ak,
                                            children: (0, a.jsx)(o.$, {
                                                variant: "secondary",
                                                text: v.intl.string(v.t.VINpSK),
                                                onClick: () =>
                                                    (0, u.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            l.e("28136"),
                                                            l.e("43600"),
                                                            l.e("42738"),
                                                        ]).then(l.bind(l, 234355));
                                                        return (n) =>
                                                            (0, a.jsx)(e, { ...n, guild: t, source: C.PE1.GUILD_HOME });
                                                    }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
});
