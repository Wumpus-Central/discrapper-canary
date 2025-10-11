i.d(t, { DesktopRefreshOnboardingModal: () => k }), i(388685), i(539854);
var s = i(951288),
    n = i(647438),
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
    _ = i(231338),
    b = i(388032),
    N = i(3498);
function O(e) {
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
                            className: l()(e.className, N.option),
                            style: e.style,
                            children: [
                                a &&
                                    (0, s.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-primary",
                                        children: e.label,
                                    }),
                                e.new &&
                                    (0, s.jsx)(c.IGR, {
                                        color: c.TVs.colors.BG_BRAND.css,
                                        text: b.intl.string(b.t.y2b7CA),
                                        className: N.new,
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
let v = [
        {
            id: _.BR.LIGHT,
            label: b.intl.string(b.t.K2sFfn),
            className: l()("theme-light", N.themeOption),
        },
        {
            id: _.BR.DARK,
            label: b.intl.string(b.t.SMPT1t),
            className: l()("theme-dark", N.themeOption),
        },
        {
            id: _.BR.DARKER,
            label: b.intl.string(b.t.b8Cei4),
            className: l()("theme-darker", N.themeOption),
            new: !0,
        },
        {
            id: _.BR.MIDNIGHT,
            label: b.intl.string(b.t.Do4ZJy),
            className: l()("theme-midnight", N.themeOption),
            new: !0,
        },
    ],
    C = [
        {
            id: "compact",
            label: b.intl.string(b.t["7iegX1"]),
        },
        {
            id: "default",
            label: b.intl.string(b.t.bBvAEB),
        },
        {
            id: "cozy",
            label: b.intl.string(b.t["4cuYHx"]),
        },
    ];
function k(e) {
    let { transitionState: t, onClose: i } = e,
        [a] = n.useState(() => g.Z.gradientPreset),
        o = (0, r.e7)([x.Z], () => x.Z.theme),
        [_] = n.useState(() => u.ZP.useSystemTheme === j.KW.ON),
        [k, K] = n.useState(() => (_ ? "system" : null != a ? "gradient" : o)),
        { density: f } = (0, c.TCT)(),
        w = n.useMemo(() => {
            if (null == a && !_) return v;
            let e = [...v];
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
                    className: l()((0, c.wjy)(s) ? N.darkOverlay : N.lightOverlay, N.themeOption),
                    style: { background: "var(--background-gradient), ".concat(r) },
                });
            }
            return (
                _ &&
                    e.push({
                        id: "system",
                        label: b.intl.string(b.t["7rOU6u"]),
                        className: N.themeOption,
                    }),
                e
            );
        }, [a, _]),
        I = (0, h.Z)("(max-height: 800px)");
    return (0, s.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: N.root,
        "data-modal-align": "top",
        parentComponent: "DesktopRefreshOnboardingModal",
        children: [
            (0, s.jsx)("div", { className: N.gradient }),
            (0, s.jsx)(c.xBx, {
                className: N.header,
                children: (0, s.jsxs)(c.Kqy, {
                    gap: I ? 4 : 8,
                    children: [
                        (0, s.jsxs)(c.Kqy, {
                            gap: I ? 8 : 16,
                            children: [
                                (0, s.jsx)("div", { className: N.headerImage }),
                                (0, s.jsx)(c.Heading, {
                                    variant: I ? "heading-lg/semibold" : "heading-xl/semibold",
                                    color: "header-primary",
                                    children: b.intl.string(b.t["7+iCGx"]),
                                }),
                            ],
                        }),
                        (0, s.jsx)(c.Heading, {
                            variant: I ? "heading-sm/medium" : "heading-md/medium",
                            color: "text-secondary",
                            children: b.intl.string(b.t.fZMMqK),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(c.hzk, {
                className: N.content,
                children: (0, s.jsxs)(c.Kqy, {
                    gap: I ? 20 : 24,
                    children: [
                        (0, s.jsxs)(c.Kqy, {
                            gap: I ? 8 : 12,
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: "heading-md/medium",
                                    children: b.intl.string(b.t.Ksh3io),
                                }),
                                (0, s.jsx)(O, {
                                    showLabels: !1,
                                    options: w,
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
                                                    className: N.systemOption,
                                                    children: [
                                                        t,
                                                        (0, s.jsx)(c.DuK, {
                                                            size: "sm",
                                                            className: N.systemIcon,
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
                            gap: I ? 8 : 12,
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
                                                    children: b.intl.string(b.t["C/5V0N"]),
                                                }),
                                                (0, s.jsx)(c.IGR, {
                                                    color: c.TVs.colors.BG_BRAND.css,
                                                    text: b.intl.string(b.t.y2b7CA),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-secondary",
                                            children: b.intl.string(b.t["2w1sEB"]),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(O, {
                                    showLabels: !0,
                                    options: C,
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
                className: N.footer,
                children: (0, s.jsx)(c.Button, {
                    variant: "primary",
                    text: b.intl.string(b.t["1Qm829"]),
                    onClick: i,
                }),
            }),
        ],
    });
}
