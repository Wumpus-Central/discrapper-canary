l.d(n, { A: () => C });
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(311907),
    d = l(397927),
    c = l(736653),
    o = l(263063),
    u = l(57991),
    h = l(961973),
    m = l(997509),
    x = l(855687),
    g = l(576705),
    A = l(486020),
    _ = l(652215),
    f = l(985018),
    j = l(811127),
    b = l(66087),
    I = l(540725);
function N(e) {
    let { guild: n } = e,
        {
            variant: l,
            icon: s,
            text: t,
        } = n.features.has(_.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: d.XGR, text: f.intl.string(f.t.b0y3DL) }
            : { variant: "expressive", icon: d._Jp, text: f.intl.string(f.t["+7XY31"]) };
    return (0, a.jsx)("div", {
        className: j.SY,
        children: (0, a.jsx)(d.Button, {
            variant: l,
            icon: s,
            text: t,
            onClick: () => {
                m.A.open(n.id, _.BEX.ONBOARDING, void 0, _.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let C = s.memo(function (e) {
    let n,
        { guild: t, titleClassName: m } = e,
        { homeHeaderImage: C, isHomeHeaderImageSet: p } = {
            homeHeaderImage: (n = s.useMemo(
                () => (null == t ? null : A.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: t.homeHeader })),
                [t],
            )),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n),
        },
        v = (0, h.A2)(t.id),
        y = (0, r.bG)([g.A], () => (0, x.K)(g.A, t)),
        G = (0, c.Ay)();
    return (0, a.jsxs)("div", {
        className: j.wx,
        children: [
            (0, a.jsxs)("div", {
                className: j.w5,
                children: [
                    (0, a.jsx)("div", {
                        className: i()(j.NC, { [j.KN]: !p }),
                        style: { backgroundImage: `url(${p ? C : "dark" === G ? b : I})` },
                    }),
                    v && (0, a.jsx)(N, { guild: t }),
                ],
            }),
            (0, a.jsx)("div", {
                className: j.oB,
                children: (0, a.jsxs)("div", {
                    className: m,
                    children: [
                        (0, a.jsx)(o.Ay, { className: j.nr, guild: t, size: o.Ay.Sizes.XLARGE, active: !0 }),
                        (0, a.jsx)(d.Fmo, {
                            children: (0, a.jsxs)("div", {
                                className: j.Bv,
                                children: [
                                    (0, a.jsx)(d.Heading, {
                                        className: j.Bv,
                                        variant: "heading-xxl/bold",
                                        children: t.name,
                                    }),
                                    (0, a.jsx)(u.A, {
                                        size: 24,
                                        guild: t,
                                        tooltipPosition: "bottom",
                                        tooltipColor: d.STz.Colors.PRIMARY,
                                    }),
                                    y &&
                                        (0, a.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: j.ak,
                                            children: (0, a.jsx)(d.Button, {
                                                variant: "secondary",
                                                text: f.intl.string(f.t.VINpSK),
                                                onClick: () =>
                                                    (0, d.mMO)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            l.e("43600"),
                                                            l.e("75013"),
                                                        ]).then(l.bind(l, 234355));
                                                        return (n) =>
                                                            (0, a.jsx)(e, { ...n, guild: t, source: _.PE1.GUILD_HOME });
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
