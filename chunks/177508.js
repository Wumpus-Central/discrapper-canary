n.d(t, { Z: () => ed }), n(704826), n(35282), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(971809),
    c = n(442837),
    u = n(836459),
    d = n(680018),
    f = n(374415),
    _ = n(861066),
    p = n(780842),
    h = n(179538),
    m = n(279570),
    g = n(257465),
    E = n(667202),
    b = n(82659),
    y = n(369585),
    O = n(103866),
    v = n(213734),
    I = n(37148),
    T = n(907862),
    S = n(466590),
    A = n(681715),
    C = n(481060),
    N = n(240872),
    R = n(514361),
    P = n(705262),
    w = n(377089),
    D = n(581612),
    x = n(580747),
    L = n(594174),
    j = n(526156),
    M = n(799071),
    k = n(554042),
    U = n(706705),
    G = n(726985),
    B = n(981631),
    Z = n(231338),
    F = n(726927),
    V = n(177475),
    H = n(518797),
    Y = n(691739),
    W = n(453707),
    K = n(315416),
    z = n(715720);
function q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                q(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ee(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function et() {
    return (0, r.jsxs)("div", {
        className: F.root,
        children: [
            (0, r.jsx)(en, {}),
            (0, r.jsx)(e_, {}),
            (0, r.jsx)(eO, {}),
            (0, r.jsx)(ev, {}),
            (0, r.jsx)(ey, {}),
            (0, r.jsx)(eE, {}),
            (0, r.jsx)(eb, {}),
            (0, r.jsx)(eg, {}),
            (0, r.jsx)(em, {}),
            (0, r.jsx)(ew, {}),
            (0, r.jsx)(eD, {}),
            (0, r.jsx)(er, {}),
            (0, r.jsx)(eL, {}),
        ],
    });
}
function en() {
    let e = (0, x.Z)("highlight_mana_components");
    return (0, r.jsx)(C.hjN, {
        title: "Design System Controls",
        children: (0, r.jsx)(C.xJW, {
            children: (0, r.jsx)(C.j7V, {
                value: e,
                onChange: (e) => (0, D.Z)("highlight_mana_components", e),
                note: "Highlights all mana components marked with data-mana-component",
                hideBorder: !0,
                children: "Highlight Mana Components",
            }),
        }),
    });
}
function er() {
    let e = Object.keys(C.DM8);
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "Notice",
            }),
            (0, r.jsx)(C.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, r.jsx)(
                        C.qXd,
                        {
                            color: C.DM8[e],
                            children: (0, r.jsxs)("code", {
                                children: ["NoticeColors.", e],
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
let ei = [
        "neutral",
        "blue_new",
        "blurple",
        "green_new",
        "red_new",
        "teal_new",
        "yellow_new",
        "orange_new",
        "pink",
        "purple",
    ],
    ea = [
        "background-surface-highest",
        "background-surface-higher",
        "background-surface-high",
        "background-base-low",
        "background-base-lower",
        "background-base-lowest",
    ],
    eo = [
        "background-gradient-lowest",
        "background-gradient-lower",
        "background-gradient-low",
        "background-gradient-high",
        "background-gradient-higher",
        "background-gradient-highest",
    ],
    es = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
    el = ["critical", "warning", "positive", "info"],
    ec = [
        "text-default",
        "text-primary",
        "text-secondary",
        "text-tertiary",
        "text-feedback-critical",
        "text-feedback-warning",
        "text-feedback-positive",
        "text-feedback-info",
        "premium-nitro-pink-text",
    ];
function eu() {
    let e = null !== (0, c.e7)([R.Z], () => R.Z.gradientPreset);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                className: F.heading,
                children: "Background Colors",
            }),
            ea.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: F.palette,
                        style: {
                            backgroundColor: "var(--".concat(e, ")"),
                            padding: 24,
                        },
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: es.map((e) =>
                                    (0, r.jsxs)(
                                        "div",
                                        {
                                            className: F.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--".concat(e, ")"),
                                            },
                                            children: [
                                                (0, r.jsx)(C.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                    children: e,
                                                }),
                                                (0, r.jsx)("hr", { className: F.sectionDivider }),
                                                ec.map((e) =>
                                                    (0, r.jsx)(
                                                        C.Text,
                                                        {
                                                            variant: "text-xs/medium",
                                                            style: { color: "var(--".concat(e, ")") },
                                                            children: e,
                                                        },
                                                        e,
                                                    ),
                                                ),
                                            ],
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            (0, r.jsx)("hr", { className: F.sectionDivider }),
                            (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: el.map((e) => {
                                    let t = "var(--text-feedback-".concat(e, ")");
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: F.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--background-feedback-".concat(e, ")"),
                                            },
                                            children: [
                                                (0, r.jsx)(C.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                }),
                                                (0, r.jsxs)(C.Kqy, {
                                                    children: [
                                                        (0, r.jsxs)(C.Text, {
                                                            variant: "text-xs/semibold",
                                                            style: { color: t },
                                                            children: ["background-feedback-", e],
                                                        }),
                                                        (0, r.jsx)(C.Text, {
                                                            variant: "text-xs/normal",
                                                            style: { color: t },
                                                            children:
                                                                "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem semper venenatis a quisque suspendisse urna litora.",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        e,
                                    );
                                }),
                            }),
                        ],
                    },
                    e,
                ),
            ),
            e &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(C.X6q, {
                            variant: "heading-xl/semibold",
                            className: F.heading,
                            children: "Gradient Background Colors",
                        }),
                        (0, r.jsx)("div", {
                            className: "custom-theme-background",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(6, 1fr)",
                                transform: "translateZ(0)",
                            },
                            children: eo.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: F.palette,
                                        style: {
                                            background: "var(--".concat(e, ")"),
                                            height: 400,
                                        },
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-xs/medium",
                                            children: e,
                                        }),
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                className: F.heading,
                children: "Scales",
            }),
            ei.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: F.palette,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-lg/semibold",
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: F.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: F.color,
                                            style: {
                                                background: "var(--"
                                                    .concat(e.replace("_", "-"), "-")
                                                    .concat(n + 1, ")"),
                                            },
                                            children: (0, r.jsx)(C.f6W, {
                                                theme: n < 50 ? "light" : "dark",
                                                children: (t) =>
                                                    (0, r.jsxs)(C.Text, {
                                                        className: t,
                                                        variant: "text-xs/medium",
                                                        children: [e, ".", n + 1],
                                                    }),
                                            }),
                                        },
                                        n,
                                    ),
                                ),
                            }),
                        ],
                    },
                    e,
                ),
            ),
        ],
    });
}
function ed() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.Z, {
                parentSetting: G.s6.DESIGN_SYSTEMS,
                settingsSection: B.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: "Components",
                        component: () => (0, r.jsx)(et, {}),
                        setting: G.s6.DESIGN_SYSTEMS_COMPONENTS,
                    },
                    {
                        title: "Colors",
                        component: () => (0, r.jsx)(eu, {}),
                        setting: G.s6.DESIGN_SYSTEMS_COLORS,
                    },
                    {
                        title: "Animations",
                        component: () => (0, r.jsx)(U.Z, {}),
                        setting: G.s6.ANIMATION_TESTING,
                    },
                    {
                        title: "Text Playground",
                        component: () => (0, r.jsx)(k.Z, {}),
                        setting: G.s6.TEXT_PLAYGROUND,
                    },
                    {
                        title: "Text Componnts",
                        component: () => (0, r.jsx)(M.Z, {}),
                        setting: G.s6.TEXT_COMPONENTS,
                    },
                ],
            }),
            (0, r.jsx)("div", {
                className: F.themes,
                children: (0, r.jsx)(P.ZP, {
                    type: P.yH.SETTINGS,
                    children: (0, r.jsx)(P.ZP.Basic, { className: F.themeSelectionGroup }),
                }),
            }),
        ],
    });
}
function ef(e) {
    var { component: t, showLoadingAnimation: n } = e,
        a = $(e, ["component", "showLoadingAnimation"]);
    let [o, s] = i.useState(!1),
        l = i.useRef(-1);
    return (
        i.useEffect(
            () => (
                o &&
                    n &&
                    (l.current = setTimeout(() => {
                        s(!1);
                    }, 3000)),
                () => {
                    l.current >= 0 && clearTimeout(l.current);
                }
            ),
            [o, n],
        ),
        (0, r.jsx)(
            t,
            J(X({}, a), {
                loading: n ? o : void 0,
                onClick: () => s(!o),
            }),
        )
    );
}
function e_() {
    let [e, t] = i.useState("md"),
        [n, a] = i.useState("start"),
        [o, l] = i.useState(!0),
        c = [
            "primary",
            "secondary",
            "critical-primary",
            "critical-secondary",
            "active",
            "overlay-primary",
            "overlay-secondary",
        ],
        u = [...c, "expressive"].map((t) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        ef,
                        {
                            component: d.z,
                            variant: t,
                            text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? C.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: o,
                        },
                        t + e,
                    ),
                    (0, r.jsx)(
                        ef,
                        {
                            component: d.z,
                            variant: t,
                            text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? C.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: o,
                            disabled: !0,
                        },
                        t + e + "disabled",
                    ),
                ],
            }),
        ),
        p = [...c, "icon-only"].map((t) =>
            (0, r.jsx)(
                ef,
                {
                    component: _.h,
                    variant: t,
                    icon: C.gw7,
                    size: e,
                    "aria-label": "".concat(t, " ").concat(e),
                    showLoadingAnimation: o,
                },
                t + e,
            ),
        ),
        m = ["primary", "secondary", "always-white", "critical"].map((e) =>
            (0, r.jsx)(
                i.Fragment,
                {
                    children: (0, r.jsx)(h.A, {
                        variant: e,
                        text: "Text button",
                    }),
                },
                e,
            ),
        );
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "Buttons",
            }),
            (0, r.jsxs)(eh, {
                title: "Button Options",
                children: [
                    (0, r.jsx)(C.xJW, {
                        title: "Button size",
                        children: (0, r.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: n } = e;
                                return t(n);
                            },
                            options: [
                                {
                                    value: "sm",
                                    name: "Small",
                                },
                                {
                                    value: "md",
                                    name: "Medium",
                                },
                            ],
                            value: e,
                        }),
                    }),
                    (0, r.jsx)(C.xJW, {
                        title: "Icon position",
                        children: (0, r.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return a(t);
                            },
                            options: [
                                {
                                    value: "none",
                                    name: "None",
                                },
                                {
                                    value: "start",
                                    name: "Start",
                                },
                                {
                                    value: "end",
                                    name: "End",
                                },
                            ],
                            value: n,
                        }),
                    }),
                    (0, r.jsx)(C.xJW, {
                        title: "Loading animation",
                        children: (0, r.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return l("on" === t);
                            },
                            options: [
                                {
                                    value: "off",
                                    name: "Off",
                                },
                                {
                                    value: "on",
                                    name: "On",
                                },
                            ],
                            value: o ? "on" : "off",
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 16,
                },
                children: [m, u, p],
            }),
            (0, r.jsxs)(C.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Button Groups",
                    }),
                    (0, r.jsx)(C.Text, {
                        variant: "text-lg/medium",
                        children: "Horizontal",
                    }),
                    (0, r.jsxs)(C.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, r.jsxs)(C.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsxs)(f.h, {
                                        size: e,
                                        children: [
                                            (0, r.jsx)(ef, {
                                                component: d.z,
                                                variant: "secondary",
                                                text: "Cancel",
                                                showLoadingAnimation: o,
                                            }),
                                            (0, r.jsx)(ef, {
                                                component: d.z,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: o,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(f.h, {
                                        size: e,
                                        children: [
                                            (0, r.jsx)(ef, {
                                                component: d.z,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: o,
                                            }),
                                            (0, r.jsx)(ef, {
                                                component: _.h,
                                                variant: "secondary",
                                                icon: C.gw7,
                                                "aria-label": "Clyde",
                                                showLoadingAnimation: o,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(f.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, r.jsx)(ef, {
                                            component: d.z,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(ef, {
                                            component: d.z,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(C.Text, {
                        variant: "text-lg/medium",
                        children: "Vertical",
                    }),
                    (0, r.jsxs)(C.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(C.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(f.h, {
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, r.jsx)(ef, {
                                            component: d.z,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(ef, {
                                            component: d.z,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(C.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(f.h, {
                                    fullWidth: !0,
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, r.jsx)(ef, {
                                            component: d.z,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(ef, {
                                            component: d.z,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(ep, { buttonSize: e }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let { buttonSize: t } = e,
        [n, a] = i.useState(!1);
    return (0, r.jsxs)(C.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "PlayButton",
            }),
            (0, r.jsx)(C.Kqy, {
                direction: "horizontal",
                gap: 16,
                children: ["dark", "mid", "light"].map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: F.video,
                            "data-luminance": e,
                            children: (0, r.jsx)(p.J, {
                                size: t,
                                playing: n,
                                onClick: () => a(!n),
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function eh(e) {
    let { children: t, title: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)(C.Kqy, {
        direction: "vertical",
        gap: 0,
        padding: 16,
        className: F.floatingControls,
        children: [
            (0, r.jsxs)(C.Kqy, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: n,
                    }),
                    (0, r.jsx)(m.Q, {
                        icon: a ? C.hic : C.sXD,
                        onClick: () => s(!a),
                        pressed: a,
                        "aria-label": "Show controls",
                    }),
                ],
            }),
            (0, r.jsx)(C.Kqy, {
                gap: 16,
                className: o()(F.floatingControlsContent, { [F.floatingControlsContentHidden]: !a }),
                children: t,
            }),
        ],
    });
}
function em() {
    let [e, t] = i.useState("1");
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "TabBar",
            }),
            (0, r.jsxs)(C.njP, {
                type: "top",
                look: "brand",
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: F.tabBar,
                children: [
                    (0, r.jsx)(C.njP.Item, {
                        id: "1",
                        children: "Tab 1",
                    }),
                    (0, r.jsx)(C.njP.Item, {
                        id: "2",
                        children: "Tab 2",
                    }),
                    (0, r.jsx)(C.njP.Item, {
                        id: "3",
                        children: "Tab 3",
                    }),
                ],
            }),
            (0, r.jsxs)(C.Text, {
                variant: "text-md/medium",
                children: ["Selected tab: ", e],
            }),
        ],
    });
}
function eg() {
    let [e, t] = i.useState(1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(5),
        [l, c] = i.useState(!1),
        u = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "Context Menus",
            }),
            (0, r.jsx)("span", {
                children: (0, r.jsx)(C.yRy, {
                    targetElementRef: u,
                    shouldShow: l,
                    renderPopout: () =>
                        (0, r.jsxs)(C.v2r, {
                            navId: "demo",
                            "aria-label": "Demo Actions",
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, r.jsxs)(C.kSQ, {
                                    label: "Basic items",
                                    children: [
                                        (0, r.jsx)(C.sNh, {
                                            id: "first",
                                            label: "An option",
                                        }),
                                        (0, r.jsx)(C.sNh, {
                                            id: "second",
                                            label: "An option with an icon",
                                            icon: C.kBi,
                                        }),
                                        (0, r.jsxs)(C.sNh, {
                                            id: "item-with-submenu",
                                            label: "Item with submenu",
                                            children: [
                                                (0, r.jsx)(C.sNh, {
                                                    id: "subitem-1",
                                                    label: "Subitem 1",
                                                }),
                                                (0, r.jsx)(C.sNh, {
                                                    id: "subitem-2",
                                                    label: "Subitem 2",
                                                }),
                                                (0, r.jsx)(C.sNh, {
                                                    id: "subitem-3",
                                                    label: "Subitem 3",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(C.kSQ, {
                                    label: "Inputs",
                                    children: [
                                        (0, r.jsx)(C.S89, {
                                            id: "checkable",
                                            label: "Checkbox",
                                            checked: n,
                                            action: () => a(!n),
                                        }),
                                        (0, r.jsx)(C.k5B, {
                                            id: "radio-one",
                                            group: "a-group",
                                            label: "Radio 1",
                                            action: () => t(1),
                                            checked: 1 === e,
                                        }),
                                        (0, r.jsx)(C.k5B, {
                                            id: "radio-two",
                                            group: "a-group",
                                            label: "Radio 2",
                                            action: () => t(2),
                                            checked: 2 === e,
                                        }),
                                        (0, r.jsx)(C.k5B, {
                                            id: "radio-three",
                                            group: "a-group",
                                            label: "Radio 3",
                                            action: () => t(3),
                                            checked: 3 === e,
                                        }),
                                        (0, r.jsx)(C.II_, {
                                            id: "slider",
                                            label: "Slider",
                                            control: (e, t) =>
                                                (0, r.jsx)(C._wy, {
                                                    ref: t,
                                                    value: o,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => s(e),
                                                    "aria-label": "Slider",
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(C.Clw, {}),
                                (0, r.jsx)(C.sNh, {
                                    id: "danger",
                                    label: "A destructive option",
                                    color: "danger",
                                    icon: C.XHJ,
                                }),
                            ],
                        }),
                    children: () =>
                        (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Toggle context menu",
                            buttonRef: u,
                            onClick: () => c(!l),
                        }),
                }),
            }),
        ],
    });
}
function eE() {
    let [e, t] = i.useState(C.FGA.PRIMARY),
        n = i.useMemo(
            () =>
                Object.entries(C.FGA).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n,
                    };
                }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "Tooltips",
            }),
            (0, r.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                children: "Legacy Tooltips",
            }),
            (0, r.jsx)(C.xJW, {
                title: "Color",
                children: (0, r.jsx)(C.q4e, {
                    value: e,
                    onChange: t,
                    options: n,
                }),
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, r.jsx)(C.ua7, {
                        color: e,
                        text: "Here's top aligned tooltip text!",
                        position: "top",
                        children: (e) =>
                            (0, r.jsx)(
                                C.zxk,
                                X(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the top",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(C.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "left",
                        children: (e) =>
                            (0, r.jsx)(
                                C.zxk,
                                X(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the left",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(C.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: "bottom",
                        children: (e) =>
                            (0, r.jsx)(
                                C.zxk,
                                X(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the bottom",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(C.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "right",
                        children: (e) =>
                            (0, r.jsx)(
                                C.zxk,
                                X(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the right",
                                    },
                                    e,
                                ),
                            ),
                    }),
                ],
            }),
            (0, r.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "New Mana Tooltips",
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, r.jsx)(A.u, {
                        text: "New Mana Tooltip with animations!",
                        position: "top",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Top)",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Left positioned animated tooltip",
                        position: "left",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Left)",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Bottom positioned animated tooltip",
                        position: "bottom",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Bottom)",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Right positioned animated tooltip",
                        position: "right",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Right)",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod non proident amo.",
                        position: "right",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Three lines",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Tooltip Caret API Examples",
            }),
            (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                style: {
                    marginTop: 16,
                    marginBottom: 8,
                },
                children: "Vertical Positions",
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                },
                children: [
                    (0, r.jsx)(A.u, {
                        text: "Top with start",
                        position: "top",
                        caretConfig: { align: "start" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Top - Start",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Top with center",
                        position: "top",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Top - Center",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Top with end",
                        position: "top",
                        caretConfig: { align: "end" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Top - End",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Bottom with start",
                        position: "bottom",
                        caretConfig: { align: "start" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Bottom - Start",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Bottom with center",
                        position: "bottom",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Bottom - Center",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Bottom with end",
                        position: "bottom",
                        caretConfig: { align: "end" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Bottom - End",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                style: { marginBottom: 8 },
                children: "Horizontal Positions",
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                },
                children: [
                    (0, r.jsx)(A.u, {
                        text: "Left with center",
                        position: "left",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Left - Center",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Right with center",
                        position: "right",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Right - Center",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                style: { marginBottom: 8 },
                children: "Custom Offset",
            }),
            (0, r.jsx)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: (0, r.jsx)(A.u, {
                    text: "Bottom with custom",
                    position: "bottom",
                    caretConfig: {
                        align: "custom",
                        customOffset: 30,
                    },
                    children: (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Custom Offset",
                    }),
                }),
            }),
            (0, r.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Tooltip Delays",
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, r.jsx)(A.u, {
                        text: "No delay (immediate)",
                        delay: 0,
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "No Delay",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Short delay (500ms)",
                        delay: 500,
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Short Delay",
                        }),
                    }),
                    (0, r.jsx)(A.u, {
                        text: "Long delay (1000ms)",
                        delay: 1000,
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Long Delay",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(C.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Rich Tooltips",
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, r.jsx)(A.i_, {
                        title: "Title goes here",
                        body: "Body copy goes in this section. Meow.",
                        position: "top",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Rich Tooltip (No Graphic)",
                        }),
                    }),
                    (0, r.jsx)(A.i_, {
                        title: "With Graphic Asset",
                        body: "This tooltip includes a graphic element on the left side",
                        asset: (0, r.jsx)("img", {
                            src: H.Z,
                            alt: "Graphic slot 48px",
                        }),
                        position: "top",
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "With Asset",
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eb() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(!1),
        [l, c] = i.useState(!1),
        [u, d] = i.useState(!1),
        [f, _] = i.useState(!1),
        [p, h] = i.useState(!1),
        [m, g] = i.useState(!1),
        [E, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        [v, I] = i.useState(!1),
        [A, N] = i.useState(!1),
        [R, P] = i.useState(!1),
        [w, D] = i.useState(!1),
        [x, L] = i.useState(!1),
        [j, M] = i.useState(!1),
        [k, U] = i.useState(!1),
        [G, B] = i.useState(!1),
        [Z, V] = i.useState(!1),
        [H, Y] = i.useState(!1),
        [q, X] = i.useState(!1),
        Q = i.useRef(null),
        J = i.useRef(null),
        $ = i.useRef(null),
        ee = i.useRef(null),
        et = i.useRef(null),
        en = i.useRef(null),
        er = i.useRef(null),
        ei = i.useRef(null),
        ea = i.useRef(null),
        eo = i.useRef(null),
        es = i.useRef(null),
        el = i.useRef(null),
        ec = i.useRef(null),
        eu = i.useRef(null),
        ed = i.useRef(null),
        ef = i.useRef(null),
        e_ = i.useRef(null),
        ep = i.useRef(null),
        eh = i.useRef(null),
        em = i.useRef(null),
        eg = i.useRef(null),
        eE = i.useCallback(() => {
            t(!1),
                a(!1),
                s(!1),
                c(!1),
                d(!1),
                _(!1),
                h(!1),
                g(!1),
                b(!1),
                O(!1),
                I(!1),
                N(!1),
                P(!1),
                D(!1),
                L(!1),
                M(!1),
                U(!1),
                B(!1),
                V(!1),
                Y(!1),
                X(!1);
        }, []);
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "Popovers",
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: Q,
                shouldShow: e,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Only with Nitro"],
                size: "sm",
                graphic: {
                    type: "image",
                    src: K.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: J,
                shouldShow: n,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Body",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: $,
                shouldShow: o,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: ee,
                shouldShow: l,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Ipsum Dolor",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
                textLink: {
                    text: "Learn More",
                    link: "https://discord.com",
                    external: !0,
                },
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: et,
                shouldShow: u,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Body",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Primary",
                        onClick: eE,
                        variant: "primary",
                    },
                    {
                        text: "Secondary",
                        onClick: eE,
                        variant: "secondary",
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: en,
                shouldShow: f,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "No Actions",
                body: "This popover has no action buttons, just content to display.",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "new",
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: er,
                shouldShow: p,
                onRequestClose: eE,
                caretConfig: {
                    position: "top",
                    align: "end",
                },
                title: "Custom Caret API",
                body: "Using CaretConfig with END placement",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Got it",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: ei,
                shouldShow: m,
                onRequestClose: eE,
                caretConfig: {
                    position: "left",
                    align: "start",
                },
                title: "Left Side Caret",
                body: "Caret positioned on the left side at start",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "early_access",
                actions: [
                    {
                        text: "Close",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: ea,
                shouldShow: E,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "custom",
                    customOffset: 50,
                },
                title: "Custom Offset",
                body: "Caret positioned 50px from center with custom offset",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "beta",
                actions: [
                    {
                        text: "Amazing!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: eo,
                shouldShow: y,
                onRequestClose: eE,
                position: "right",
                caretConfig: {
                    position: "left",
                    align: "center",
                },
                title: "Left Center Positioning",
                body: "Popover appears to the right with caret centered on the left side",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Perfect!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: es,
                shouldShow: v,
                onRequestClose: eE,
                position: "bottom",
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Purple Gradient",
                body: "This popover has a beautiful purple gradient background",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                gradientColor: "purple",
                badge: "new",
                actions: [
                    {
                        text: "Looks Great!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: el,
                shouldShow: A,
                onRequestClose: eE,
                position: "left",
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Blue Gradient",
                body: "This popover showcases the blue gradient option",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                gradientColor: "blue",
                badge: "beta",
                actions: [
                    {
                        text: "Nice!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: ec,
                shouldShow: R,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Nitro Pink Gradient",
                body: "Experience the premium nitro-pink gradient effect",
                graphic: {
                    type: "image",
                    src: W.Z,
                },
                gradientColor: "nitro-pink",
                textLink: {
                    text: "Learn about Nitro",
                    link: "https://discord.com/nitro",
                    external: !0,
                },
                actions: [
                    {
                        text: "Get Nitro",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: eu,
                shouldShow: w,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Voice Filters",
                body: "Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.",
                graphic: {
                    type: "image",
                    src: z.Z,
                },
                badge: "new",
                gradientColor: "purple",
                actions: [
                    {
                        text: "Try it now",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(T.Mb, {
                targetElementRef: ed,
                shouldShow: x,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "With Video Asset",
                body: "Click the video to view it in the media viewer!",
                assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                badge: "new",
                action: {
                    text: "Learn More",
                    onClick: eE,
                },
            }),
            (0, r.jsx)(T.Mb, {
                targetElementRef: ef,
                shouldShow: j,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "With different preview",
                body: "Click the video to view it in the media viewer!",
                previewUrl: "https://cdn.discordapp.com/assets/server_products/storefront/default-header.mov",
                assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                badge: "new",
                action: {
                    text: "Learn More",
                    onClick: eE,
                },
            }),
            (0, r.jsx)(T.Mb, {
                targetElementRef: e_,
                shouldShow: k,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Vith Image",
                body: "Click the video to view it in the media viewer!",
                assetUrl: "https://placehold.co/232x131.png",
                badge: "new",
                action: {
                    text: "Learn More",
                    onClick: eE,
                },
            }),
            (0, r.jsx)(S.e, {
                targetElementRef: ep,
                shouldShow: G,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                steps: [
                    {
                        title: "Welcome to Quests!",
                        body: "Journey to Quest Home in Discover to start earning Orbs.",
                        graphic: {
                            type: "image",
                            src: W.Z,
                        },
                        badge: "new",
                        action: { text: "Next" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Earn Rewards",
                        body: "Complete quests to earn Orbs and unlock exclusive rewards.",
                        graphic: {
                            type: "image",
                            src: z.Z,
                        },
                        action: { text: "Next" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Quest Complete!",
                        body: "You're all set to start your quest adventure. Good luck!",
                        graphic: {
                            type: "image",
                            src: W.Z,
                        },
                        action: { text: "Get Started" },
                        gradientColor: "blue",
                        textLink: {
                            text: "Learn More",
                            link: "https://discord.com/quests",
                            external: !0,
                        },
                    },
                ],
                onStepChange: (e) => {},
            }),
            (0, r.jsx)(T.J2, {
                targetElementRef: eh,
                shouldShow: Z,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Experience Voice Filters",
                body: "Enhanced voice quality with our latest filtering technology. Try the expressive button!",
                graphic: {
                    type: "image",
                    src: z.Z,
                },
                badge: "new",
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: "Subscribe to Nitro",
                        onClick: eE,
                        variant: "expressive",
                    },
                ],
            }),
            (0, r.jsx)(S.e, {
                targetElementRef: em,
                shouldShow: H,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                steps: [
                    {
                        title: "Discover Features",
                        body: "Explore amazing new capabilities in Discord.",
                        graphic: {
                            type: "image",
                            src: W.Z,
                        },
                        badge: "new",
                        action: { text: "Continue" },
                        gradientColor: "purple",
                    },
                    {
                        title: "Unlock Potential",
                        body: "Learn how to make the most of your Discord experience.",
                        graphic: {
                            type: "image",
                            src: z.Z,
                        },
                        action: { text: "Almost There" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Ready to Go!",
                        body: "You're all set! Notice the expressive button animation.",
                        graphic: {
                            type: "image",
                            src: W.Z,
                        },
                        action: {
                            text: "Get Started",
                            variant: "expressive",
                        },
                        gradientColor: "nitro-pink",
                        textLink: {
                            text: "Learn More",
                            link: "https://discord.com",
                            external: !0,
                        },
                    },
                ],
                onStepChange: (e) => {},
            }),
            (0, r.jsx)(T.Mb, {
                targetElementRef: eg,
                shouldShow: q,
                onRequestClose: eE,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Expressive Video Experience",
                body: "Watch this video with our expressive button design!",
                assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                badge: "new",
                action: {
                    text: "Experience More",
                    onClick: eE,
                    variant: "expressive",
                },
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Size Examples",
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Small Content",
                                buttonRef: Q,
                                onClick: () => {
                                    eE(), t(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Medium Content",
                                buttonRef: J,
                                onClick: () => {
                                    eE(), a(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                buttonRef: $,
                                onClick: () => {
                                    eE(), s(!0);
                                },
                                text: "No Asset",
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Actions Examples",
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "External Link",
                                buttonRef: ee,
                                onClick: () => {
                                    eE(), c(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Two Actions",
                                buttonRef: et,
                                onClick: () => {
                                    eE(), d(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                buttonRef: en,
                                onClick: () => {
                                    eE(), _(!0);
                                },
                                text: "No Actions",
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Caret API Examples",
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Custom Caret API",
                                buttonRef: er,
                                onClick: () => {
                                    eE(), h(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Left Side Caret",
                                buttonRef: ei,
                                onClick: () => {
                                    eE(), g(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Custom Offset",
                                buttonRef: ea,
                                onClick: () => {
                                    eE(), b(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Left Center",
                                buttonRef: eo,
                                onClick: () => {
                                    eE(), O(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Gradient Examples",
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Purple Gradient",
                                buttonRef: es,
                                onClick: () => {
                                    eE(), I(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Blue Gradient",
                                buttonRef: el,
                                onClick: () => {
                                    eE(), N(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Nitro Pink Gradient",
                                buttonRef: ec,
                                onClick: () => {
                                    eE(), P(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "With Asset",
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Voice Filters",
                                buttonRef: eu,
                                onClick: () => {
                                    eE(), D(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Video Media Viewer",
                                buttonRef: ed,
                                onClick: () => {
                                    eE(), L(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Video with Different Preview",
                                buttonRef: ef,
                                onClick: () => {
                                    eE(), M(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "With image",
                                buttonRef: e_,
                                onClick: () => {
                                    eE(), U(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Multi-Step",
                    }),
                    (0, r.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Multi-Step",
                            buttonRef: ep,
                            onClick: () => {
                                eE(), B(!0);
                            },
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Expressive",
                    }),
                    (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Expressive Popover",
                                buttonRef: eh,
                                onClick: () => {
                                    eE(), V(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Expressive Multi-Step",
                                buttonRef: em,
                                onClick: () => {
                                    eE(), Y(!0);
                                },
                            }),
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Expressive Video",
                                buttonRef: eg,
                                onClick: () => {
                                    eE(), X(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ey() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState("auto");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F.section,
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Checkboxes",
                    }),
                    (0, r.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, r.jsx)(C.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox input",
                        }),
                    }),
                    (0, r.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, r.jsx)(C.Text, {
                            variant: "text-md/medium",
                            children: "Disabled checkbox",
                        }),
                    }),
                    (0, r.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, r.jsx)(C.Text, {
                            variant: "text-md/medium",
                            children: "Read-only checkbox",
                        }),
                    }),
                    (0, r.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: C.XZJ.Types.ROW,
                        children: (0, r.jsx)(C.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox row",
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.section,
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Switches",
                    }),
                    (0, r.jsx)(C.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => a(e),
                        children: "FormSwitch with a label",
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.section,
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Radio Buttons",
                    }),
                    (0, r.jsx)(C.xJW, {
                        children: (0, r.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return s(t);
                            },
                            options: [
                                {
                                    value: "auto",
                                    name: "Auto",
                                },
                                {
                                    value: "720p",
                                    name: "720p",
                                },
                                {
                                    value: "1080p",
                                    name: "1080p",
                                },
                            ],
                            value: o,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.section,
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Slider",
                    }),
                    (0, r.jsxs)("div", {
                        className: F.slider,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: "Standard slider",
                            }),
                            (0, r.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: F.slider,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: "Sticky markers",
                            }),
                            (0, r.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: F.slider,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform markers",
                            }),
                            (0, r.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: F.slider,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform equidistant markers",
                            }),
                            (0, r.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: F.slider,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: "No markers",
                            }),
                            (0, r.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: F.slider,
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "text-md/medium",
                                children: "Mini slider",
                            }),
                            (0, r.jsx)(C.iRW, {
                                mini: !0,
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eO() {
    let [e, t] = i.useState(null),
        [n, a] = i.useState(null),
        [o, s] = i.useState([]),
        [c, u] = i.useState([]),
        [d, f] = i.useState([]);
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "SearchableSelect",
            }),
            (0, r.jsx)(C.VcW, {
                placeholder: "Single select",
                value: e,
                onChange: (e) => t(e),
                options: l.G,
            }),
            (0, r.jsx)(C.VcW, {
                placeholder: "Single select (clearable)",
                clearable: !0,
                value: n,
                onChange: (e) => a(e),
                options: l.G,
            }),
            (0, r.jsx)(C.VcW, {
                placeholder: "Multi select",
                multi: !0,
                value: o,
                onChange: (e) => s(e),
                options: l.G,
            }),
            (0, r.jsx)(C.VcW, {
                placeholder: "Multi select (clearable)",
                multi: !0,
                clearable: !0,
                value: d,
                onChange: (e) => f(e),
                options: l.G,
            }),
            (0, r.jsx)(C.VcW, {
                placeholder: "Multi select (custom pills)",
                multi: !0,
                value: c,
                onChange: (e) => u(e),
                options: l.G,
                hidePills: !0,
                customPillContainerClassName: F.customPillContainer,
                renderCustomPill: (e) =>
                    (0, r.jsx)("div", {
                        style: {
                            padding: 8,
                            border: "1px solid var(--bg-brand)",
                            borderRadius: 8,
                        },
                        children: (0, r.jsx)(C.Text, {
                            variant: "text-md/bold",
                            children: e.label,
                        }),
                    }),
            }),
        ],
    });
}
function ev() {
    let [e, t] = i.useState(""),
        [n, a] = i.useState(""),
        [o, s] = i.useState(""),
        l = (0, w.U)("UserSettingsDesignSystems");
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "TextInput",
            }),
            (0, r.jsx)(C.xJW, {
                title: "Search",
                children: (0, r.jsxs)(C.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E1j, {
                            placeholder: "Search...",
                            onChange: (e) => s(e),
                            query: o,
                            onClear: () => s(""),
                        }),
                        (0, r.jsx)(C.E1j, {
                            size: "sm",
                            placeholder: "Search...",
                            onChange: (e) => s(e),
                            query: o,
                            onClear: () => s(""),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(C.xJW, {
                title: "Disabled",
                disabled: !0,
                children: (0, r.jsx)(C.oil, {
                    placeholder: "Disabled",
                    disabled: !0,
                }),
            }),
            (0, r.jsx)(C.xJW, {
                title: "Error",
                children: (0, r.jsx)(C.oil, {
                    required: !0,
                    error: "This must have a value",
                }),
            }),
            (0, r.jsx)(C.xJW, {
                title: "Error",
                children: (0, r.jsx)(C.oil, {
                    defaultValue: "Not a valid value",
                    error: "This has an error.",
                }),
            }),
            (0, r.jsx)(C.xJW, {
                title: "minLength",
                children: (0, r.jsx)(C.oil, {
                    minLength: 6,
                    value: e,
                    onChange: t,
                    placeholder: "Enter at least 6 characters",
                }),
            }),
            (0, r.jsx)(C.xJW, {
                title: "Read only",
                children: (0, r.jsx)(C.oil, {
                    value: "Read-only, not-editable field",
                    editable: !1,
                }),
            }),
            (0, r.jsx)(C.xJW, {
                title: "Input with a label",
                children: (0, r.jsx)(C.oil, {
                    placeholder: "Real placeholder",
                    value: e,
                    onChange: t,
                }),
            }),
            l &&
                (0, r.jsx)(C.xJW, {
                    title: "Leading and Trailing",
                    children: (0, r.jsxs)(C.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(C.Wn, {
                                messageType: C.QYI.WARNING,
                                children: "Leading and trailing accessories are not yet supported in the public API.",
                            }),
                            (0, r.jsxs)(C.Kqy, {
                                children: [
                                    (0, r.jsx)(C.oil, {
                                        leading: C.qJs,
                                        placeholder: "Create Channel",
                                        value: e,
                                        onChange: t,
                                    }),
                                    (0, r.jsx)(C.oil, {
                                        trailing: C.lOy,
                                        placeholder: "Send Message",
                                        value: e,
                                        onChange: t,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(C.xJW, {
                title: "Text area",
                children: (0, r.jsx)(C.Kx8, {
                    placeholder: "Text area placeholder",
                    showCharacterCount: !0,
                    value: n,
                    onChange: a,
                }),
            }),
        ],
    });
}
function eI(e) {
    let { transitionState: t } = e,
        [n, a] = i.useState(!1),
        [o, s] = i.useState(C.CgR.SMALL),
        [l, c] = i.useState(!1),
        u = n ? F.modalOutlines : "";
    return (0, r.jsxs)(C.Y0X, {
        transitionState: t,
        size: o,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, r.jsx)(C.xBx, {
                className: u,
                children: (0, r.jsx)(C.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal",
                }),
            }),
            (0, r.jsx)(C.hzk, {
                className: u,
                children: (0, r.jsxs)(C.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(C.xJW, {
                            title: "Modal Size",
                            children: (0, r.jsx)(C.q4e, {
                                value: o,
                                onChange: s,
                                options: Object.entries(C.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n,
                                    };
                                }),
                            }),
                        }),
                        (0, r.jsx)(C.hjN, {
                            title: "Options",
                            children: (0, r.jsxs)(C.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(C.XZJ, {
                                        value: n,
                                        onChange: (e, t) => a(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Section Outlines",
                                        }),
                                    }),
                                    (0, r.jsx)(C.XZJ, {
                                        value: l,
                                        onChange: (e, t) => c(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Show secondary action in footer",
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(C.mzw, {
                className: u,
                children: (0, r.jsxs)(C.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        l &&
                            (0, r.jsx)(C.zxk, {
                                variant: "secondary",
                                text: "Secondary Action",
                            }),
                        (0, r.jsx)(C.zxk, {
                            variant: "primary",
                            text: "Close",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eT(e) {
    let { transitionState: t, onClose: n, modalCount: a = 1 } = e,
        [o, s] = i.useState("replace"),
        l = () => {
            let e = a + 1;
            (0, C.h7j)((t) => (0, r.jsx)(eT, J(X({}, t), { modalCount: e })), { stackingBehavior: o });
        },
        c = a < 3;
    return (0, r.jsxs)(C.Y0X, {
        transitionState: t,
        size: 1 === a ? C.CgR.LARGE : 2 === a ? C.CgR.MEDIUM : C.CgR.SMALL,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, r.jsx)(C.xBx, {
                children: (0, r.jsx)(C.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal Stacking Demo",
                }),
            }),
            (0, r.jsx)(C.hzk, {
                children: (0, r.jsxs)(C.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsxs)(C.Text, {
                            variant: "text-md/medium",
                            children: ["This is modal level ", a, "."],
                        }),
                        c &&
                            (0, r.jsx)(C.xJW, {
                                title: "Stacking Behavior",
                                children: (0, r.jsx)(C.q4e, {
                                    value: o,
                                    onChange: s,
                                    options: [
                                        {
                                            label: "Replace (default)",
                                            value: "replace",
                                        },
                                        {
                                            label: "Stack",
                                            value: "stack",
                                        },
                                        {
                                            label: "Replace All",
                                            value: "replaceAll",
                                        },
                                    ],
                                }),
                            }),
                        (0, r.jsxs)(C.Kqy, {
                            gap: 8,
                            children: [
                                (0, r.jsxs)(C.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Replace One:" }),
                                        " The modal directly below is hidden (default behavior)",
                                    ],
                                }),
                                (0, r.jsxs)(C.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Replace All:" }),
                                        " All modals below are hidden",
                                    ],
                                }),
                                (0, r.jsxs)(C.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Stack:" }),
                                        " The modal directly below remains visible",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(C.mzw, {
                children: (0, r.jsxs)(C.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.zxk, {
                            variant: "secondary",
                            text: "Close",
                            onClick: n,
                        }),
                        c &&
                            (0, r.jsx)(C.zxk, {
                                variant: "primary",
                                text: "Open Next Modal",
                                onClick: l,
                            }),
                    ],
                }),
            }),
        ],
    });
}
function eS(e) {
    let { transitionState: t, onClose: n } = e;
    function i(e) {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: F.modalOutlines,
            style: { padding: "24px" },
            children: t,
        });
    }
    return (0, r.jsxs)(g.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, r.jsx)("div", {
                className: F.modalOutlines,
                children: (0, r.jsx)(I.x, {
                    title: "Demo Modal",
                    subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
                    leading: (0, r.jsx)(i, {}),
                    trailing: (0, r.jsx)(i, {}),
                }),
            }),
            (0, r.jsx)("div", {
                className: F.modalOutlines,
                children: (0, r.jsx)(O.f, {
                    controls: (0, r.jsx)(i, { children: "This ModalBody renders any controls here" }),
                    children: (0, r.jsx)(i, {
                        children: "This is the main ModalBody. This area scrolls if there is enough content",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: F.modalOutlines,
                children: (0, r.jsx)(v.m, { children: (0, r.jsx)(i, { children: "This is the ModalFooter" }) }),
            }),
            (0, r.jsx)("div", {
                className: F.modalOutlines,
                children: (0, r.jsx)(y.G, {
                    leading: (0, r.jsx)(i, { children: "ModalActionBar leading" }),
                    actions: [
                        {
                            variant: "secondary",
                            text: "Cancel",
                            onClick: n,
                        },
                        {
                            variant: "primary",
                            text: "Submit",
                            onClick: n,
                        },
                    ],
                }),
            }),
        ],
    });
}
function eA(e) {
    let { transitionState: t, onClose: n } = e,
        [a, o] = i.useState("md"),
        [s, l] = i.useState("Demo Modal"),
        [c, u] = i.useState("Header body copy"),
        [d, f] = i.useState(!1),
        [_, p] = i.useState(!1),
        [h, m] = i.useState(!1),
        [E, b] = i.useState(!1),
        [T, S] = i.useState(!1);
    return (0, r.jsxs)(g.I, {
        transitionState: t,
        onClose: n,
        size: a,
        children: [
            (0, r.jsx)(I.x, {
                title: s,
                subtitle: c,
                alignCenter: d,
            }),
            (0, r.jsx)(O.f, {
                controls: _
                    ? (0, r.jsx)(C.E1j, {
                          placeholder: "Search",
                          onChange: () => null,
                          query: "",
                      })
                    : void 0,
                children: (0, r.jsxs)(C.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(C.xJW, {
                            title: "Modal Size",
                            children: (0, r.jsx)(C.q4e, {
                                value: a,
                                onChange: o,
                                options: [
                                    {
                                        label: "Small",
                                        value: "sm",
                                    },
                                    {
                                        label: "Medium",
                                        value: "md",
                                    },
                                    {
                                        label: "Large",
                                        value: "lg",
                                    },
                                    {
                                        label: "XLarge",
                                        value: "xl",
                                    },
                                ],
                            }),
                        }),
                        (0, r.jsx)(C.xJW, {
                            title: "Header Title",
                            children: (0, r.jsx)(C.oil, {
                                onChange: l,
                                defaultValue: s,
                            }),
                        }),
                        (0, r.jsx)(C.xJW, {
                            title: "Header body",
                            children: (0, r.jsx)(C.oil, {
                                onChange: u,
                                defaultValue: c,
                            }),
                        }),
                        (0, r.jsx)(C.xJW, {
                            title: "Optional Content",
                            children: (0, r.jsxs)(C.Kqy, {
                                gap: 12,
                                children: [
                                    (0, r.jsx)(C.XZJ, {
                                        value: d,
                                        onChange: (e, t) => f(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Header Align Center",
                                        }),
                                    }),
                                    (0, r.jsx)(C.XZJ, {
                                        value: _,
                                        onChange: (e, t) => p(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Search Input",
                                        }),
                                    }),
                                    (0, r.jsx)(C.XZJ, {
                                        value: h,
                                        onChange: (e, t) => m(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Preview Content",
                                        }),
                                    }),
                                    (0, r.jsx)(C.XZJ, {
                                        value: E,
                                        onChange: (e, t) => b(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Action Bar Leading Input",
                                        }),
                                    }),
                                    (0, r.jsx)(C.XZJ, {
                                        value: T,
                                        onChange: (e, t) => S(t),
                                        children: (0, r.jsx)(C.Text, {
                                            variant: "text-md/medium",
                                            children: "Full Width Actions",
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            h &&
                (0, r.jsxs)(v.m, {
                    children: [
                        (0, r.jsx)(C.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Celebration Station",
                        }),
                        (0, r.jsx)(C.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: "32 Members \u25CF 19 Online",
                        }),
                    ],
                }),
            (0, r.jsx)(y.G, {
                leading: E
                    ? (0, r.jsx)(y.B, {
                          value: !1,
                          onChange: () => {},
                      })
                    : void 0,
                actionsFullWidth: T,
                actions: [
                    {
                        variant: "secondary",
                        text: "Cancel",
                        onClick: n,
                    },
                    {
                        variant: "primary",
                        text: "Submit",
                        onClick: n,
                    },
                ],
            }),
        ],
    });
}
function eC(e) {
    let { transitionState: t, onClose: n } = e;
    function a(e) {
        let { text: t } = e,
            [n, a] = i.useState(!1);
        return (0, r.jsx)("div", {
            style: { padding: "8px 0" },
            children: (0, r.jsx)(C.XZJ, {
                value: n,
                onChange: (e, t) => a(t),
                children: (0, r.jsx)(C.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
            }),
        });
    }
    return (0, r.jsxs)(b.Modal, {
        transitionState: t,
        onClose: n,
        size: "md",
        title: "Invite to server",
        input: (0, r.jsx)(C.E1j, {
            placeholder: "Search",
            onChange: () => null,
            query: "",
        }),
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.X6q, {
                    variant: "heading-lg/semibold",
                    children: "Celebration Station",
                }),
                (0, r.jsx)(C.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: "32 Members \u25CF 19 Online",
                }),
            ],
        }),
        actions: [
            {
                variant: "secondary",
                text: "Cancel",
                onClick: n,
            },
            {
                variant: "primary",
                text: "Send Invite",
                icon: C.kBi,
                iconPosition: "end",
                onClick: n,
            },
        ],
        children: [
            (0, r.jsx)(a, { text: "John Doe" }),
            (0, r.jsx)(a, { text: "Mark" }),
            (0, r.jsx)(a, { text: "KawaiiHermit" }),
            (0, r.jsx)(a, { text: "YurBruhGio" }),
            (0, r.jsx)(a, { text: "John Doe" }),
            (0, r.jsx)(a, { text: "Mark" }),
            (0, r.jsx)(a, { text: "KawaiiHermit" }),
            (0, r.jsx)(a, { text: "YurBruhGio" }),
            (0, r.jsx)(a, { text: "John Doe" }),
            (0, r.jsx)(a, { text: "Mark" }),
            (0, r.jsx)(a, { text: "KawaiiHermit" }),
            (0, r.jsx)(a, { text: "YurBruhGio" }),
            (0, r.jsx)(a, { text: "John Doe" }),
            (0, r.jsx)(a, { text: "Mark" }),
            (0, r.jsx)(a, { text: "KawaiiHermit" }),
            (0, r.jsx)(a, { text: "YurBruhGio" }),
        ],
    });
}
function eN(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsx)(b.Modal, {
        transitionState: t,
        onClose: n,
        title: "Alert Modal",
        subtitle: "This is an alert",
        actions: [
            {
                variant: "secondary",
                text: "Cancel",
                onClick: n,
            },
            {
                variant: "critical-primary",
                text: "Confirm",
                onClick: n,
            },
        ],
    });
}
function eR(e) {
    let { transitionState: t, onClose: a } = e,
        [o, s] = i.useState(0),
        [l, c] = i.useState(!1),
        d = [
            {
                label: "Image",
                value: 0,
            },
            {
                label: "Lottie",
                value: 1,
            },
            {
                label: "Rive",
                value: 2,
            },
            {
                label: "Looping Video",
                value: 3,
            },
            {
                label: "Dynamic Content",
                value: 4,
            },
        ],
        f = i.useMemo(
            () =>
                0 === o
                    ? {
                          type: "image",
                          src: V,
                      }
                    : 1 === o
                      ? {
                            type: "lottie",
                            lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
                            aspectRatio: "6/4",
                        }
                      : 2 === o
                        ? {
                              type: "rive",
                              rive: u.PerfTestRive,
                          }
                        : 3 === o
                          ? {
                                type: "video",
                                src: Y.Z,
                                fallbackImageSrc: V,
                                loop: !0,
                                loopAt: 2.5,
                            }
                          : 4 === o
                            ? {
                                  type: "dynamic",
                                  component: C.AX$.DEMO,
                                  props: { text: "Dynamic Content" },
                              }
                            : void 0,
            [o],
        );
    return (0, r.jsxs)(E.I, {
        transitionState: t,
        onClose: a,
        gradientColor: "nitro-pink",
        graphic: f,
        badge: l ? "beta" : void 0,
        title: "Expressive Modal",
        subtitle: "This is an expressive modal with a header image",
        actions: [
            {
                variant: "secondary",
                text: "Cancel",
                onClick: a,
            },
            {
                variant: "primary",
                text: "Submit",
                onClick: a,
            },
        ],
        children: [
            (0, r.jsx)(C.xJW, {
                title: "Graphic Type",
                children: (0, r.jsx)(C.q4e, {
                    value: o,
                    onChange: s,
                    options: d,
                }),
            }),
            (0, r.jsx)(C.xJW, {
                style: { paddingTop: "16px" },
                children: (0, r.jsx)(C.XZJ, {
                    value: l,
                    onChange: (e, t) => c(t),
                    children: (0, r.jsx)(C.Text, {
                        variant: "text-md/medium",
                        children: "Show beta badge",
                    }),
                }),
            }),
        ],
    });
}
function eP(e) {
    let { transitionState: t, onClose: n, modalCount: a = 1 } = e,
        [o, s] = i.useState("replace"),
        l = () => {
            let e = a + 1;
            (0, C.h7j)((t) => (0, r.jsx)(eP, J(X({}, t), { modalCount: e })), { stackingBehavior: o });
        },
        c = a < 3;
    return (0, r.jsx)(b.Modal, {
        transitionState: t,
        onClose: n,
        size: 1 === a ? "md" : "sm",
        title: "Mana Modal Stacking Demo",
        subtitle: "This is modal level ".concat(a, "."),
        actions: [
            {
                variant: "secondary",
                text: "Close",
                onClick: n,
            },
            ...(c
                ? [
                      {
                          variant: "primary",
                          text: "Open Next Modal",
                          onClick: l,
                      },
                  ]
                : []),
        ],
        children: (0, r.jsxs)(C.Kqy, {
            gap: 16,
            children: [
                c &&
                    (0, r.jsx)(C.xJW, {
                        title: "Stacking Behavior",
                        children: (0, r.jsx)(C.q4e, {
                            value: o,
                            onChange: s,
                            options: [
                                {
                                    label: "Replace (default)",
                                    value: "replace",
                                },
                                {
                                    label: "Stack",
                                    value: "stack",
                                },
                                {
                                    label: "Replace All",
                                    value: "replaceAll",
                                },
                            ],
                        }),
                    }),
                (0, r.jsxs)(C.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsxs)(C.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Replace One:" }),
                                " The modal directly below is hidden (default behavior)",
                            ],
                        }),
                        (0, r.jsxs)(C.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Replace All:" }),
                                " All modals below are hidden",
                            ],
                        }),
                        (0, r.jsxs)(C.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Stack:" }),
                                " The modal directly below remains visible",
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ew() {
    let e = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eI, X({}, e)));
        },
        t = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eT, X({}, e)));
        },
        n = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eS, X({}, e)));
        },
        i = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eA, X({}, e)));
        },
        a = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eC, X({}, e)));
        },
        o = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eN, X({}, e)));
        },
        s = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eR, X({}, e)));
        },
        l = () => {
            (0, C.h7j)((e) => (0, r.jsx)(eP, X({}, e)));
        },
        c = () => {
            N.Z.show({
                title: "Alert",
                body: "This is an alert",
                confirmText: "Confirm Text",
                cancelText: "Cancel Text",
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F.section,
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Void)",
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open modal",
                        onClick: e,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Show Alert",
                        onClick: c,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open modal stacking demo",
                        onClick: t,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.section,
                children: [
                    (0, r.jsx)(C.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Mana)",
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open modal section visualizer",
                        onClick: n,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open demo modal",
                        onClick: i,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open sample invite modal",
                        onClick: a,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open sample alert modal",
                        onClick: o,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open expressive modal",
                        onClick: s,
                    }),
                    (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        text: "Open Mana modal stacking demo",
                        onClick: l,
                    }),
                ],
            }),
        ],
    });
}
function eD() {
    let e = [
        "SIZE_16",
        "SIZE_20",
        "SIZE_24",
        "SIZE_32",
        "SIZE_40",
        "SIZE_44",
        "SIZE_48",
        "SIZE_80",
        "SIZE_96",
        "SIZE_120",
    ];
    return (0, r.jsxs)("div", {
        className: F.section,
        children: [
            (0, r.jsx)(C.X6q, {
                variant: "heading-xl/semibold",
                children: "User Avatars",
            }),
            (0, r.jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                },
                children: e.map((e) => (0, r.jsx)(ex, { size: e }, e)),
            }),
        ],
    });
}
function ex(e) {
    let { size: t } = e,
        { user: n } = (0, c.cj)([L.default], () => ({ user: L.default.getCurrentUser() })),
        i = Number(t.split("_")[1]);
    return (0, r.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
        },
        children: [
            (0, r.jsxs)(C.X6q, {
                variant: "heading-sm/semibold",
                style: { textAlign: "center" },
                children: [i, "px"],
            }),
            (0, r.jsx)(C.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: Z.Sk.ONLINE,
            }),
            (0, r.jsx)(C.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: Z.Sk.ONLINE,
                isTyping: !0,
            }),
            (0, r.jsx)(C.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: Z.Sk.ONLINE,
                isMobile: !0,
            }),
            (0, r.jsx)(C.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                isSpeaking: !0,
            }),
        ],
    });
}
function eL() {
    let e = (0, c.e7)([R.Z], () => R.Z.gradientPreset);
    return (0, r.jsx)(C.f6W, {
        theme: Z.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, r.jsxs)("div", {
                className: o()(t, F.section),
                children: [
                    (0, r.jsx)(C.zxk, {
                        variant: "secondary",
                        text: "Button",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(C.f6W, {
                        theme: Z.BR.LIGHT,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: o()(t, F.section),
                                children: [
                                    (0, r.jsx)(C.zxk, {
                                        variant: "secondary",
                                        text: "Button",
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(C.f6W, {
                                        theme: Z.BR.DARKER,
                                        children: (e) =>
                                            (0, r.jsx)("div", {
                                                className: o()(e, F.section),
                                                children: (0, r.jsx)(C.zxk, {
                                                    variant: "secondary",
                                                    text: "Button",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                    }),
                                    (0, r.jsx)(C.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, r.jsx)("div", {
                                                className: o()(e, F.section),
                                                children: (0, r.jsx)(C.zxk, {
                                                    variant: "secondary",
                                                    text: "Button",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
    });
}
