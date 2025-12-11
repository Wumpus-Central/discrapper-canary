i.d(t, { DesktopRefreshOnboardingModal: () => k }), i(388685), i(539854);
var s = i(54381),
    n = i(473749),
    a = i(120356),
    l = i.n(a),
    d = i(442837),
    r = i(524437),
    c = i(28664),
    o = i(481060),
    m = i(153867),
    h = i(131388),
    g = i(514361),
    p = i(47760),
    x = i(210887),
    u = i(740492),
    y = i(695346),
    j = i(874893),
    b = i(231338),
    f = i(388032),
    O = i(524423);
function N(e) {
    let { options: t, selected: i, onSelect: n, showLabels: a, renderOptionContainer: d } = e;
    return (0, s.jsx)(o.Kqy, {
        direction: "horizontal",
        gap: 8,
        children: t.map((e, t) => {
            var r;
            let m = (0, s.jsx)(
                o.Kqy,
                {
                    gap: 16,
                    children: (0, s.jsx)(c.u, {
                        text: e.label,
                        shouldShow: !a && void 0,
                        asContainer: !0,
                        children: (0, s.jsxs)(o.P3F, {
                            "data-selected": e.id === i,
                            onClick: () => n(e.id),
                            className: l()(e.className, O.option),
                            style: e.style,
                            children: [
                                a &&
                                    (0, s.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: e.label,
                                    }),
                                e.new &&
                                    (0, s.jsx)(o.IGR, {
                                        color: o.TVs.colors.BACKGROUND_BRAND.css,
                                        text: f.intl.string(f.t.y2b7CA),
                                        className: O.new,
                                    }),
                            ],
                        }),
                    }),
                },
                t,
            );
            return null != (r = null == d ? void 0 : d(e, m)) ? r : m;
        }),
    });
}
let C = [
        {
            id: b.BR.LIGHT,
            label: f.intl.string(f.t.K2sFfo),
            className: l()("theme-light", O.themeOption),
        },
        {
            id: b.BR.DARK,
            label: f.intl.string(f.t.SMPT1k),
            className: l()("theme-dark", O.themeOption),
        },
        {
            id: b.BR.DARKER,
            label: f.intl.string(f.t.b8Cei3),
            className: l()("theme-darker", O.themeOption),
            new: !0,
        },
        {
            id: b.BR.MIDNIGHT,
            label: f.intl.string(f.t.Do4ZJx),
            className: l()("theme-midnight", O.themeOption),
            new: !0,
        },
    ],
    v = [
        {
            id: "compact",
            label: f.intl.string(f.t["7iegX4"]),
        },
        {
            id: "default",
            label: f.intl.string(f.t.bBvAEH),
        },
        {
            id: "cozy",
            label: f.intl.string(f.t["4cuYHx"]),
        },
    ];
function k(e) {
    let { transitionState: t, onClose: i } = e,
        [a] = n.useState(() => g.Z.gradientPreset),
        c = (0, d.e7)([x.Z], () => x.Z.theme),
        [b] = n.useState(() => u.ZP.useSystemTheme === j.KW.ON),
        [k, K] = n.useState(() => (b ? "system" : null != a ? "gradient" : c)),
        { density: _ } = (0, o.TCT)(),
        R = n.useMemo(() => {
            if (null == a && !b) return C;
            let e = [...C];
            if (null != a) {
                let { colors: t, angle: i, theme: s, getName: n } = a,
                    d = (0, p.VK)({
                        colors: t,
                        angle: i,
                    }),
                    r = n();
                e.push({
                    id: "gradient",
                    label: r,
                    className: l()((0, o.wjy)(s) ? O.darkOverlay : O.lightOverlay, O.themeOption),
                    style: { background: "var(--background-gradient), ".concat(d) },
                });
            }
            return (
                b &&
                    e.push({
                        id: "system",
                        label: f.intl.string(f.t["7rOU6j"]),
                        className: O.themeOption,
                    }),
                e
            );
        }, [a, b]),
        w = (0, h.Z)("(max-height: 800px)");
    return (0, s.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        className: O.root,
        "data-modal-align": "top",
        parentComponent: "DesktopRefreshOnboardingModal",
        children: [
            (0, s.jsx)("div", { className: O.gradient }),
            (0, s.jsx)(o.xBx, {
                className: O.header,
                children: (0, s.jsxs)(o.Kqy, {
                    gap: w ? 4 : 8,
                    children: [
                        (0, s.jsxs)(o.Kqy, {
                            gap: w ? 8 : 16,
                            children: [
                                (0, s.jsx)("div", { className: O.headerImage }),
                                (0, s.jsx)(o.Heading, {
                                    variant: w ? "heading-lg/semibold" : "heading-xl/semibold",
                                    color: "header-primary",
                                    children: f.intl.string(f.t["7+iCG4"]),
                                }),
                            ],
                        }),
                        (0, s.jsx)(o.Heading, {
                            variant: w ? "heading-sm/medium" : "heading-md/medium",
                            color: "text-subtle",
                            children: f.intl.string(f.t.fZMMqN),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(o.hzk, {
                className: O.content,
                children: (0, s.jsxs)(o.Kqy, {
                    gap: w ? 20 : 24,
                    children: [
                        (0, s.jsxs)(o.Kqy, {
                            gap: w ? 8 : 12,
                            children: [
                                (0, s.jsx)(o.Heading, {
                                    variant: "heading-md/medium",
                                    children: f.intl.string(f.t.Ksh3ik),
                                }),
                                (0, s.jsx)(N, {
                                    showLabels: !1,
                                    options: R,
                                    selected: k,
                                    onSelect: (e) => {
                                        K(e),
                                            "gradient" === e
                                                ? null != a &&
                                                  (0, m.ZI)({
                                                      backgroundGradientPresetId: a.id,
                                                      theme: a.theme,
                                                  })
                                                : (0, m.ZI)({ theme: e });
                                    },
                                    renderOptionContainer: (e, t) =>
                                        "gradient" === e.id
                                            ? t
                                            : "system" === e.id
                                              ? (0, s.jsxs)(o.Kqy, {
                                                    className: O.systemOption,
                                                    children: [
                                                        t,
                                                        (0, s.jsx)(o.DuK, {
                                                            size: "sm",
                                                            className: O.systemIcon,
                                                        }),
                                                    ],
                                                })
                                              : (0, s.jsx)(o.f6W, {
                                                    theme: e.id,
                                                    disableAdaptiveTheme: !0,
                                                    children: (e) =>
                                                        (0, s.jsx)(o.Kqy, {
                                                            className: e,
                                                            children: t,
                                                        }),
                                                }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(o.Kqy, {
                            gap: w ? 8 : 12,
                            children: [
                                (0, s.jsxs)(o.Kqy, {
                                    gap: 0,
                                    children: [
                                        (0, s.jsxs)(o.Kqy, {
                                            direction: "horizontal",
                                            gap: 4,
                                            align: "center",
                                            children: [
                                                (0, s.jsx)(o.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: f.intl.string(f.t["C/5V0A"]),
                                                }),
                                                (0, s.jsx)(o.IGR, {
                                                    color: o.TVs.colors.BACKGROUND_BRAND.css,
                                                    text: f.intl.string(f.t.y2b7CA),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(o.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: f.intl.string(f.t["2w1sEO"]),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(N, {
                                    showLabels: !0,
                                    options: v,
                                    selected: _,
                                    onSelect: (e) => {
                                        switch (e) {
                                            case "default":
                                                y.YC.updateSetting(r.Pi.DEFAULT);
                                                break;
                                            case "compact":
                                                y.YC.updateSetting(r.Pi.COMPACT);
                                                break;
                                            case "cozy":
                                                y.YC.updateSetting(r.Pi.COZY);
                                        }
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(o.mzw, {
                className: O.footer,
                children: (0, s.jsx)(o.Button, {
                    variant: "primary",
                    text: f.intl.string(f.t["1Qm822"]),
                    onClick: i,
                }),
            }),
        ],
    });
}
