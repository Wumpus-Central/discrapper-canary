i.d(t, { DesktopRefreshOnboardingModal: () => k }), i(388685), i(539854);
var s = i(54381),
    n = i(473749),
    a = i(120356),
    l = i.n(a),
    r = i(442837),
    d = i(524437),
    o = i(28664),
    c = i(481060),
    m = i(153867),
    h = i(131388),
    g = i(514361),
    p = i(47760),
    x = i(210887),
    u = i(740492),
    y = i(695346),
    j = i(874893),
    b = i(231338),
    _ = i(388032),
    O = i(3498);
function N(e) {
    let { options: t, selected: i, onSelect: n, showLabels: a, renderOptionContainer: r } = e;
    return (0, s.jsx)(c.Kqy, {
        direction: "horizontal",
        gap: 8,
        children: t.map((e, t) => {
            var d;
            let m = (0, s.jsx)(
                c.Kqy,
                {
                    gap: 16,
                    children: (0, s.jsx)(o.u, {
                        text: e.label,
                        shouldShow: !a && void 0,
                        asContainer: !0,
                        children: (0, s.jsxs)(c.P3F, {
                            "data-selected": e.id === i,
                            onClick: () => n(e.id),
                            className: l()(e.className, O.option),
                            style: e.style,
                            children: [
                                a &&
                                    (0, s.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: e.label,
                                    }),
                                e.new &&
                                    (0, s.jsx)(c.IGR, {
                                        color: c.TVs.colors.BACKGROUND_BRAND.css,
                                        text: _.intl.string(_.t.y2b7CA),
                                        className: O.new,
                                    }),
                            ],
                        }),
                    }),
                },
                t,
            );
            return null != (d = null == r ? void 0 : r(e, m)) ? d : m;
        }),
    });
}
let C = [
        {
            id: b.BR.LIGHT,
            label: _.intl.string(_.t.K2sFfo),
            className: l()("theme-light", O.themeOption),
        },
        {
            id: b.BR.DARK,
            label: _.intl.string(_.t.SMPT1k),
            className: l()("theme-dark", O.themeOption),
        },
        {
            id: b.BR.DARKER,
            label: _.intl.string(_.t.b8Cei3),
            className: l()("theme-darker", O.themeOption),
            new: !0,
        },
        {
            id: b.BR.MIDNIGHT,
            label: _.intl.string(_.t.Do4ZJx),
            className: l()("theme-midnight", O.themeOption),
            new: !0,
        },
    ],
    v = [
        {
            id: "compact",
            label: _.intl.string(_.t["7iegX4"]),
        },
        {
            id: "default",
            label: _.intl.string(_.t.bBvAEH),
        },
        {
            id: "cozy",
            label: _.intl.string(_.t["4cuYHx"]),
        },
    ];
function k(e) {
    let { transitionState: t, onClose: i } = e,
        [a] = n.useState(() => g.Z.gradientPreset),
        o = (0, r.e7)([x.Z], () => x.Z.theme),
        [b] = n.useState(() => u.ZP.useSystemTheme === j.KW.ON),
        [k, K] = n.useState(() => (b ? "system" : null != a ? "gradient" : o)),
        { density: f } = (0, c.TCT)(),
        R = n.useMemo(() => {
            if (null == a && !b) return C;
            let e = [...C];
            if (null != a) {
                let { colors: t, angle: i, theme: s, getName: n } = a,
                    r = (0, p.VK)({
                        colors: t,
                        angle: i,
                    }),
                    d = n();
                e.push({
                    id: "gradient",
                    label: d,
                    className: l()((0, c.wjy)(s) ? O.darkOverlay : O.lightOverlay, O.themeOption),
                    style: { background: "var(--background-gradient), ".concat(r) },
                });
            }
            return (
                b &&
                    e.push({
                        id: "system",
                        label: _.intl.string(_.t["7rOU6j"]),
                        className: O.themeOption,
                    }),
                e
            );
        }, [a, b]),
        w = (0, h.Z)("(max-height: 800px)");
    return (0, s.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: O.root,
        "data-modal-align": "top",
        parentComponent: "DesktopRefreshOnboardingModal",
        children: [
            (0, s.jsx)("div", { className: O.gradient }),
            (0, s.jsx)(c.xBx, {
                className: O.header,
                children: (0, s.jsxs)(c.Kqy, {
                    gap: w ? 4 : 8,
                    children: [
                        (0, s.jsxs)(c.Kqy, {
                            gap: w ? 8 : 16,
                            children: [
                                (0, s.jsx)("div", { className: O.headerImage }),
                                (0, s.jsx)(c.Heading, {
                                    variant: w ? "heading-lg/semibold" : "heading-xl/semibold",
                                    color: "header-primary",
                                    children: _.intl.string(_.t["7+iCG4"]),
                                }),
                            ],
                        }),
                        (0, s.jsx)(c.Heading, {
                            variant: w ? "heading-sm/medium" : "heading-md/medium",
                            color: "text-subtle",
                            children: _.intl.string(_.t.fZMMqN),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(c.hzk, {
                className: O.content,
                children: (0, s.jsxs)(c.Kqy, {
                    gap: w ? 20 : 24,
                    children: [
                        (0, s.jsxs)(c.Kqy, {
                            gap: w ? 8 : 12,
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: "heading-md/medium",
                                    children: _.intl.string(_.t.Ksh3ik),
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
                                              ? (0, s.jsxs)(c.Kqy, {
                                                    className: O.systemOption,
                                                    children: [
                                                        t,
                                                        (0, s.jsx)(c.DuK, {
                                                            size: "sm",
                                                            className: O.systemIcon,
                                                        }),
                                                    ],
                                                })
                                              : (0, s.jsx)(c.f6W, {
                                                    theme: e.id,
                                                    disableAdaptiveTheme: !0,
                                                    children: (e) =>
                                                        (0, s.jsx)(c.Kqy, {
                                                            className: e,
                                                            children: t,
                                                        }),
                                                }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(c.Kqy, {
                            gap: w ? 8 : 12,
                            children: [
                                (0, s.jsxs)(c.Kqy, {
                                    gap: 0,
                                    children: [
                                        (0, s.jsxs)(c.Kqy, {
                                            direction: "horizontal",
                                            gap: 4,
                                            align: "center",
                                            children: [
                                                (0, s.jsx)(c.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: _.intl.string(_.t["C/5V0A"]),
                                                }),
                                                (0, s.jsx)(c.IGR, {
                                                    color: c.TVs.colors.BACKGROUND_BRAND.css,
                                                    text: _.intl.string(_.t.y2b7CA),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: _.intl.string(_.t["2w1sEO"]),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(N, {
                                    showLabels: !0,
                                    options: v,
                                    selected: f,
                                    onSelect: (e) => {
                                        switch (e) {
                                            case "default":
                                                y.YC.updateSetting(d.Pi.DEFAULT);
                                                break;
                                            case "compact":
                                                y.YC.updateSetting(d.Pi.COMPACT);
                                                break;
                                            case "cozy":
                                                y.YC.updateSetting(d.Pi.COZY);
                                        }
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(c.mzw, {
                className: O.footer,
                children: (0, s.jsx)(c.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t["1Qm822"]),
                    onClick: i,
                }),
            }),
        ],
    });
}
