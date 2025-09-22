n.d(t, { Z: () => el }), n(704826), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(971809),
    c = n(164617),
    u = n(442837),
    d = n(538534),
    f = n(257465),
    _ = n(667202),
    p = n(82659),
    h = n(369585),
    m = n(103866),
    g = n(213734),
    E = n(37148),
    b = n(907862),
    y = n(466590),
    O = n(681715),
    v = n(159691),
    I = n(755721),
    T = n(481060),
    S = n(240872),
    A = n(514361),
    C = n(705262),
    N = n(377089),
    R = n(581612),
    P = n(580747),
    w = n(594174),
    D = n(526156),
    x = n(799071),
    L = n(554042),
    j = n(706705),
    M = n(726985),
    k = n(981631),
    U = n(231338),
    G = n(726927),
    B = n(177475),
    Z = n(518797),
    F = n(691739),
    V = n(453707),
    H = n(315416),
    Y = n(715720);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function J() {
    return (0, r.jsxs)("div", {
        className: G.root,
        children: [
            (0, r.jsx)($, {}),
            (0, r.jsx)(eu, {}),
            (0, r.jsx)(eE, {}),
            (0, r.jsx)(eb, {}),
            (0, r.jsx)(eg, {}),
            (0, r.jsx)(eh, {}),
            (0, r.jsx)(em, {}),
            (0, r.jsx)(ep, {}),
            (0, r.jsx)(e_, {}),
            (0, r.jsx)(eN, {}),
            (0, r.jsx)(eR, {}),
            (0, r.jsx)(ee, {}),
            (0, r.jsx)(ew, {}),
        ],
    });
}
function $() {
    let e = (0, P.Z)("highlight_mana_components");
    return (0, r.jsx)(T.hjN, {
        title: "Design System Controls",
        children: (0, r.jsx)(T.xJW, {
            children: (0, r.jsx)(T.j7V, {
                value: e,
                onChange: (e) => (0, R.Z)("highlight_mana_components", e),
                note: "Highlights all mana components marked with data-mana-component",
                hideBorder: !0,
                children: "Highlight Mana Components",
            }),
        }),
    });
}
function ee() {
    let e = Object.keys(T.DM8);
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "Notice",
            }),
            (0, r.jsx)(T.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, r.jsx)(
                        T.qXd,
                        {
                            color: T.DM8[e],
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
let et = [
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
    en = [
        "background-surface-highest",
        "background-surface-higher",
        "background-surface-high",
        "background-base-low",
        "background-base-lower",
        "background-base-lowest",
    ],
    er = [
        "background-gradient-lowest",
        "background-gradient-lower",
        "background-gradient-low",
        "background-gradient-high",
        "background-gradient-higher",
        "background-gradient-highest",
    ],
    ei = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
    ea = ["critical", "warning", "positive", "info"],
    eo = [
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
function es() {
    let e = null !== (0, u.e7)([A.Z], () => A.Z.gradientPreset);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                className: G.heading,
                children: "Background Colors",
            }),
            en.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: G.palette,
                        style: {
                            backgroundColor: "var(--".concat(e, ")"),
                            padding: 24,
                        },
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: ei.map((e) =>
                                    (0, r.jsxs)(
                                        "div",
                                        {
                                            className: G.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--".concat(e, ")"),
                                            },
                                            children: [
                                                (0, r.jsx)(T.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                    children: e,
                                                }),
                                                (0, r.jsx)("hr", { className: G.sectionDivider }),
                                                eo.map((e) =>
                                                    (0, r.jsx)(
                                                        T.Text,
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
                            (0, r.jsx)("hr", { className: G.sectionDivider }),
                            (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: ea.map((e) => {
                                    let t = "var(--text-feedback-".concat(e, ")");
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: G.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--background-feedback-".concat(e, ")"),
                                            },
                                            children: [
                                                (0, r.jsx)(T.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                }),
                                                (0, r.jsxs)(T.Kqy, {
                                                    children: [
                                                        (0, r.jsxs)(T.Text, {
                                                            variant: "text-xs/semibold",
                                                            style: { color: t },
                                                            children: ["background-feedback-", e],
                                                        }),
                                                        (0, r.jsx)(T.Text, {
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
                        (0, r.jsx)(T.X6q, {
                            variant: "heading-xl/semibold",
                            className: G.heading,
                            children: "Gradient Background Colors",
                        }),
                        (0, r.jsx)("div", {
                            className: "custom-theme-background",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(6, 1fr)",
                                transform: "translateZ(0)",
                            },
                            children: er.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: G.palette,
                                        style: {
                                            background: "var(--".concat(e, ")"),
                                            height: 400,
                                        },
                                        children: (0, r.jsx)(T.Text, {
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
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                className: G.heading,
                children: "Scales",
            }),
            et.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: G.palette,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-lg/semibold",
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: G.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: G.color,
                                            style: {
                                                background: "var(--"
                                                    .concat(e.replace("_", "-"), "-")
                                                    .concat(n + 1, ")"),
                                            },
                                            children: (0, r.jsx)(T.f6W, {
                                                theme: n < 50 ? "light" : "dark",
                                                children: (t) =>
                                                    (0, r.jsxs)(T.Text, {
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
function el() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.Z, {
                parentSetting: M.s6.DESIGN_SYSTEMS,
                settingsSection: k.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: "Components",
                        component: () => (0, r.jsx)(J, {}),
                        setting: M.s6.DESIGN_SYSTEMS_COMPONENTS,
                    },
                    {
                        title: "Colors",
                        component: () => (0, r.jsx)(es, {}),
                        setting: M.s6.DESIGN_SYSTEMS_COLORS,
                    },
                    {
                        title: "Animations",
                        component: () => (0, r.jsx)(j.Z, {}),
                        setting: M.s6.ANIMATION_TESTING,
                    },
                    {
                        title: "Text Playground",
                        component: () => (0, r.jsx)(L.Z, {}),
                        setting: M.s6.TEXT_PLAYGROUND,
                    },
                    {
                        title: "Text Componnts",
                        component: () => (0, r.jsx)(x.Z, {}),
                        setting: M.s6.TEXT_COMPONENTS,
                    },
                ],
            }),
            (0, r.jsx)("div", {
                className: G.themes,
                children: (0, r.jsx)(C.ZP, {
                    type: C.yH.SETTINGS,
                    children: (0, r.jsx)(C.ZP.Basic, { className: G.themeSelectionGroup }),
                }),
            }),
        ],
    });
}
function ec(e) {
    var { component: t, showLoadingAnimation: n } = e,
        a = X(e, ["component", "showLoadingAnimation"]);
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
            q(K({}, a), {
                loading: n ? o : void 0,
                onClick: () => s(!o),
            }),
        )
    );
}
function eu() {
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
                        ec,
                        {
                            component: v.zxk,
                            variant: t,
                            text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? T.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: o,
                        },
                        t + e,
                    ),
                    (0, r.jsx)(
                        ec,
                        {
                            component: v.zxk,
                            variant: t,
                            text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? T.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: o,
                            disabled: !0,
                        },
                        t + e + "disabled",
                    ),
                ],
            }),
        ),
        f = [...c, "icon-only"].map((t) =>
            (0, r.jsx)(
                ec,
                {
                    component: v.hU,
                    variant: t,
                    icon: T.gw7,
                    size: e,
                    "aria-label": "".concat(t, " ").concat(e),
                    showLoadingAnimation: o,
                },
                t + e,
            ),
        ),
        _ = ["primary", "secondary", "always-white", "critical"].map((e) =>
            (0, r.jsx)(
                i.Fragment,
                {
                    children: (0, r.jsx)(v.Avr, {
                        variant: e,
                        text: "Text button",
                    }),
                },
                e,
            ),
        );
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "Buttons",
            }),
            (0, r.jsxs)(ef, {
                title: "Button Options",
                children: [
                    (0, r.jsx)(d.E, {
                        label: "Button size",
                        onChange: (e) => t(e),
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
                    (0, r.jsx)(d.E, {
                        label: "Icon position",
                        onChange: (e) => a(e),
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
                    (0, r.jsx)(d.E, {
                        label: "Loading animation",
                        onChange: (e) => l("on" === e),
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
                ],
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 16,
                },
                children: [_, u, f],
            }),
            (0, r.jsxs)(T.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Button Groups",
                    }),
                    (0, r.jsx)(T.Text, {
                        variant: "text-lg/medium",
                        children: "Horizontal",
                    }),
                    (0, r.jsxs)(T.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, r.jsxs)(T.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsxs)(v.hE2, {
                                        size: e,
                                        children: [
                                            (0, r.jsx)(ec, {
                                                component: v.zxk,
                                                variant: "secondary",
                                                text: "Cancel",
                                                showLoadingAnimation: o,
                                            }),
                                            (0, r.jsx)(ec, {
                                                component: v.zxk,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: o,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(v.hE2, {
                                        size: e,
                                        children: [
                                            (0, r.jsx)(ec, {
                                                component: v.zxk,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: o,
                                            }),
                                            (0, r.jsx)(ec, {
                                                component: v.hU,
                                                variant: "secondary",
                                                icon: T.gw7,
                                                "aria-label": "Clyde",
                                                showLoadingAnimation: o,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(T.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(v.hE2, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, r.jsx)(ec, {
                                            component: v.zxk,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(ec, {
                                            component: v.zxk,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(T.Text, {
                        variant: "text-lg/medium",
                        children: "Vertical",
                    }),
                    (0, r.jsxs)(T.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(T.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(v.hE2, {
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, r.jsx)(ec, {
                                            component: v.zxk,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(ec, {
                                            component: v.zxk,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(T.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(v.hE2, {
                                    fullWidth: !0,
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, r.jsx)(ec, {
                                            component: v.zxk,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(ec, {
                                            component: v.zxk,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(ed, { buttonSize: e }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let { buttonSize: t } = e,
        [n, a] = i.useState(!1);
    return (0, r.jsxs)(T.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "PlayButton",
            }),
            (0, r.jsx)(T.Kqy, {
                direction: "horizontal",
                gap: 16,
                children: ["dark", "mid", "light"].map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: G.video,
                            "data-luminance": e,
                            children: (0, r.jsx)(v.JM1, {
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
function ef(e) {
    let { children: t, title: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)(T.Kqy, {
        direction: "vertical",
        gap: 0,
        padding: 16,
        className: G.floatingControls,
        children: [
            (0, r.jsxs)(T.Kqy, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-lg/semibold",
                        children: n,
                    }),
                    (0, r.jsx)(v.Qdh, {
                        icon: a ? T.hic : T.sXD,
                        onClick: () => s(!a),
                        pressed: a,
                        "aria-label": "Show controls",
                    }),
                ],
            }),
            (0, r.jsx)(T.Kqy, {
                gap: 16,
                className: o()(G.floatingControlsContent, { [G.floatingControlsContentHidden]: !a }),
                children: t,
            }),
        ],
    });
}
function e_() {
    let [e, t] = i.useState("1");
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "TabBar",
            }),
            (0, r.jsxs)(T.njP, {
                type: "top",
                look: "brand",
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: G.tabBar,
                children: [
                    (0, r.jsx)(T.njP.Item, {
                        id: "1",
                        children: "Tab 1",
                    }),
                    (0, r.jsx)(T.njP.Item, {
                        id: "2",
                        children: "Tab 2",
                    }),
                    (0, r.jsx)(T.njP.Item, {
                        id: "3",
                        children: "Tab 3",
                    }),
                ],
            }),
            (0, r.jsxs)(T.Text, {
                variant: "text-md/medium",
                children: ["Selected tab: ", e],
            }),
        ],
    });
}
function ep() {
    let [e, t] = i.useState(1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(5),
        [l, c] = i.useState(!1),
        u = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "Context Menus",
            }),
            (0, r.jsx)("span", {
                children: (0, r.jsx)(T.yRy, {
                    targetElementRef: u,
                    shouldShow: l,
                    renderPopout: () =>
                        (0, r.jsxs)(T.v2r, {
                            navId: "demo",
                            "aria-label": "Demo Actions",
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, r.jsxs)(T.kSQ, {
                                    label: "Basic items",
                                    children: [
                                        (0, r.jsx)(T.sNh, {
                                            id: "first",
                                            label: "An option",
                                        }),
                                        (0, r.jsx)(T.sNh, {
                                            id: "second",
                                            label: "An option with an icon",
                                            icon: T.kBi,
                                        }),
                                        (0, r.jsxs)(T.sNh, {
                                            id: "item-with-submenu",
                                            label: "Item with submenu",
                                            children: [
                                                (0, r.jsx)(T.sNh, {
                                                    id: "subitem-1",
                                                    label: "Subitem 1",
                                                }),
                                                (0, r.jsx)(T.sNh, {
                                                    id: "subitem-2",
                                                    label: "Subitem 2",
                                                }),
                                                (0, r.jsx)(T.sNh, {
                                                    id: "subitem-3",
                                                    label: "Subitem 3",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(T.kSQ, {
                                    label: "Inputs",
                                    children: [
                                        (0, r.jsx)(T.S89, {
                                            id: "checkable",
                                            label: "Checkbox",
                                            checked: n,
                                            action: () => a(!n),
                                        }),
                                        (0, r.jsx)(T.k5B, {
                                            id: "radio-one",
                                            group: "a-group",
                                            label: "Radio 1",
                                            action: () => t(1),
                                            checked: 1 === e,
                                        }),
                                        (0, r.jsx)(T.k5B, {
                                            id: "radio-two",
                                            group: "a-group",
                                            label: "Radio 2",
                                            action: () => t(2),
                                            checked: 2 === e,
                                        }),
                                        (0, r.jsx)(T.k5B, {
                                            id: "radio-three",
                                            group: "a-group",
                                            label: "Radio 3",
                                            action: () => t(3),
                                            checked: 3 === e,
                                        }),
                                        (0, r.jsx)(T.II_, {
                                            id: "slider",
                                            label: "Slider",
                                            control: (e, t) =>
                                                (0, r.jsx)(T._wy, {
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
                                (0, r.jsx)(T.Clw, {}),
                                (0, r.jsx)(T.sNh, {
                                    id: "danger",
                                    label: "A destructive option",
                                    color: "danger",
                                    icon: T.XHJ,
                                }),
                            ],
                        }),
                    children: () =>
                        (0, r.jsx)(T.zxk, {
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
function eh() {
    let [e, t] = i.useState(T.FGA.PRIMARY),
        n = i.useMemo(
            () =>
                Object.entries(T.FGA).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n,
                    };
                }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "Tooltips",
            }),
            (0, r.jsx)(T.X6q, {
                variant: "heading-lg/semibold",
                children: "Legacy Tooltips",
            }),
            (0, r.jsx)(T.xJW, {
                title: "Color",
                children: (0, r.jsx)(T.q4e, {
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
                    (0, r.jsx)(T.ua7, {
                        color: e,
                        text: "Here's top aligned tooltip text!",
                        position: "top",
                        children: (e) =>
                            (0, r.jsx)(
                                T.zxk,
                                K(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the top",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(T.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "left",
                        children: (e) =>
                            (0, r.jsx)(
                                T.zxk,
                                K(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the left",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(T.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: "bottom",
                        children: (e) =>
                            (0, r.jsx)(
                                T.zxk,
                                K(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the bottom",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(T.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "right",
                        children: (e) =>
                            (0, r.jsx)(
                                T.zxk,
                                K(
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
            (0, r.jsx)(T.X6q, {
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
                    (0, r.jsx)(O.u, {
                        text: "New Mana Tooltip with animations!",
                        position: "top",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Top)",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Left positioned animated tooltip",
                        position: "left",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Left)",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Bottom positioned animated tooltip",
                        position: "bottom",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Bottom)",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Right positioned animated tooltip",
                        position: "right",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Right)",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod non proident amo.",
                        position: "right",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Three lines",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(T.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Tooltip Caret API Examples",
            }),
            (0, r.jsx)(T.Text, {
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
                    (0, r.jsx)(O.u, {
                        text: "Top with start",
                        position: "top",
                        caretConfig: { align: "start" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Top - Start",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Top with center",
                        position: "top",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Top - Center",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Top with end",
                        position: "top",
                        caretConfig: { align: "end" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Top - End",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Bottom with start",
                        position: "bottom",
                        caretConfig: { align: "start" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Bottom - Start",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Bottom with center",
                        position: "bottom",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Bottom - Center",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Bottom with end",
                        position: "bottom",
                        caretConfig: { align: "end" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Bottom - End",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(T.Text, {
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
                    (0, r.jsx)(O.u, {
                        text: "Left with center",
                        position: "left",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Left - Center",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Right with center",
                        position: "right",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Right - Center",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(T.Text, {
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
                children: (0, r.jsx)(O.u, {
                    text: "Bottom with custom",
                    position: "bottom",
                    caretConfig: {
                        align: "custom",
                        customOffset: 30,
                    },
                    children: (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Custom Offset",
                    }),
                }),
            }),
            (0, r.jsx)(T.X6q, {
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
                    (0, r.jsx)(O.u, {
                        text: "No delay (immediate)",
                        delay: 0,
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "No Delay",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Short delay (500ms)",
                        delay: 500,
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Short Delay",
                        }),
                    }),
                    (0, r.jsx)(O.u, {
                        text: "Long delay (1000ms)",
                        delay: 1000,
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Long Delay",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(T.X6q, {
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
                    (0, r.jsx)(O.i_, {
                        title: "Title goes here",
                        body: "Body copy goes in this section. Meow.",
                        position: "top",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Rich Tooltip (No Graphic)",
                        }),
                    }),
                    (0, r.jsx)(O.i_, {
                        title: "With Graphic Asset",
                        body: "This tooltip includes a graphic element on the left side",
                        asset: (0, r.jsx)("img", {
                            src: Z.Z,
                            alt: "Graphic slot 48px",
                        }),
                        position: "top",
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "With Asset",
                        }),
                    }),
                ],
            }),
        ],
    });
}
function em() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(!1),
        [l, c] = i.useState(!1),
        [u, d] = i.useState(!1),
        [f, _] = i.useState(!1),
        [p, h] = i.useState(!1),
        [m, g] = i.useState(!1),
        [E, O] = i.useState(!1),
        [v, I] = i.useState(!1),
        [S, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        [R, P] = i.useState(!1),
        [w, D] = i.useState(!1),
        [x, L] = i.useState(!1),
        [j, M] = i.useState(!1),
        [k, U] = i.useState(!1),
        [B, Z] = i.useState(!1),
        [F, W] = i.useState(!1),
        [K, z] = i.useState(!1),
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
                O(!1),
                I(!1),
                A(!1),
                N(!1),
                P(!1),
                D(!1),
                L(!1),
                M(!1),
                U(!1),
                Z(!1),
                W(!1),
                z(!1),
                X(!1);
        }, []);
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "Popovers",
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: Q,
                shouldShow: e,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Only with Nitro"],
                size: "sm",
                graphic: {
                    type: "image",
                    src: H.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: J,
                shouldShow: n,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: "Body",
                graphic: {
                    type: "image",
                    src: V.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: $,
                shouldShow: o,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: ee,
                shouldShow: l,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Ipsum Dolor",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                graphic: {
                    type: "image",
                    src: V.Z,
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
            (0, r.jsx)(b.J2, {
                targetElementRef: et,
                shouldShow: u,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: "Body",
                graphic: {
                    type: "image",
                    src: V.Z,
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
            (0, r.jsx)(b.J2, {
                targetElementRef: en,
                shouldShow: f,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "No Actions",
                body: "This popover has no action buttons, just content to display.",
                graphic: {
                    type: "image",
                    src: V.Z,
                },
                badge: "new",
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: er,
                shouldShow: p,
                onRequestClose: eE,
                caretConfig: { align: "end" },
                title: "Custom Caret API",
                body: "Using CaretConfig with END placement",
                graphic: {
                    type: "image",
                    src: V.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Got it",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: ei,
                shouldShow: m,
                onRequestClose: eE,
                caretConfig: { align: "start" },
                title: "Left Side Caret",
                body: "Caret positioned on the left side at start",
                graphic: {
                    type: "image",
                    src: V.Z,
                },
                badge: "early_access",
                actions: [
                    {
                        text: "Close",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: ea,
                shouldShow: E,
                onRequestClose: eE,
                caretConfig: {
                    align: "custom",
                    customOffset: 50,
                },
                title: "Custom Offset",
                body: "Caret positioned 50px from center with custom offset",
                graphic: {
                    type: "image",
                    src: V.Z,
                },
                badge: "beta",
                actions: [
                    {
                        text: "Amazing!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: eo,
                shouldShow: v,
                onRequestClose: eE,
                position: "right",
                caretConfig: { align: "center" },
                title: "Left Center Positioning",
                body: "Popover appears to the right with caret centered on the left side",
                graphic: {
                    type: "image",
                    src: V.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Perfect!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(b.J2, {
                targetElementRef: es,
                shouldShow: S,
                onRequestClose: eE,
                position: "bottom",
                caretConfig: { align: "center" },
                title: "Purple Gradient",
                body: "This popover has a beautiful purple gradient background",
                graphic: {
                    type: "image",
                    src: V.Z,
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
            (0, r.jsx)(b.J2, {
                targetElementRef: el,
                shouldShow: C,
                onRequestClose: eE,
                position: "left",
                caretConfig: { align: "center" },
                title: "Blue Gradient",
                body: "This popover showcases the blue gradient option",
                graphic: {
                    type: "image",
                    src: V.Z,
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
            (0, r.jsx)(b.J2, {
                targetElementRef: ec,
                shouldShow: R,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Nitro Pink Gradient",
                body: "Experience the premium nitro-pink gradient effect",
                graphic: {
                    type: "image",
                    src: V.Z,
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
            (0, r.jsx)(b.J2, {
                targetElementRef: eu,
                shouldShow: w,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Voice Filters",
                body: "Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.",
                graphic: {
                    type: "image",
                    src: Y.Z,
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
            (0, r.jsx)(b.Mb, {
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
            (0, r.jsx)(b.Mb, {
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
            (0, r.jsx)(b.Mb, {
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
            (0, r.jsx)(y.e, {
                targetElementRef: ep,
                shouldShow: B,
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
                            src: V.Z,
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
                            src: Y.Z,
                        },
                        action: { text: "Next" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Quest Complete!",
                        body: "You're all set to start your quest adventure. Good luck!",
                        graphic: {
                            type: "image",
                            src: V.Z,
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
            (0, r.jsx)(b.J2, {
                targetElementRef: eh,
                shouldShow: F,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Experience Voice Filters",
                body: "Enhanced voice quality with our latest filtering technology. Try the expressive button!",
                graphic: {
                    type: "image",
                    src: Y.Z,
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
            (0, r.jsx)(y.e, {
                targetElementRef: em,
                shouldShow: K,
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
                            src: V.Z,
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
                            src: Y.Z,
                        },
                        action: { text: "Almost There" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Ready to Go!",
                        body: "You're all set! Notice the expressive button animation.",
                        graphic: {
                            type: "image",
                            src: V.Z,
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
            (0, r.jsx)(b.Mb, {
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
                    (0, r.jsx)(T.X6q, {
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
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Small Content",
                                buttonRef: Q,
                                onClick: () => {
                                    eE(), t(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Medium Content",
                                buttonRef: J,
                                onClick: () => {
                                    eE(), a(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
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
                    (0, r.jsx)(T.X6q, {
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
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "External Link",
                                buttonRef: ee,
                                onClick: () => {
                                    eE(), c(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Two Actions",
                                buttonRef: et,
                                onClick: () => {
                                    eE(), d(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
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
                    (0, r.jsx)(T.X6q, {
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
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Custom Caret API",
                                buttonRef: er,
                                onClick: () => {
                                    eE(), h(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Left Side Caret",
                                buttonRef: ei,
                                onClick: () => {
                                    eE(), g(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Custom Offset",
                                buttonRef: ea,
                                onClick: () => {
                                    eE(), O(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Left Center",
                                buttonRef: eo,
                                onClick: () => {
                                    eE(), I(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(T.X6q, {
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
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Purple Gradient",
                                buttonRef: es,
                                onClick: () => {
                                    eE(), A(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Blue Gradient",
                                buttonRef: el,
                                onClick: () => {
                                    eE(), N(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
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
                    (0, r.jsx)(T.X6q, {
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
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Voice Filters",
                                buttonRef: eu,
                                onClick: () => {
                                    eE(), D(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Video Media Viewer",
                                buttonRef: ed,
                                onClick: () => {
                                    eE(), L(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Video with Different Preview",
                                buttonRef: ef,
                                onClick: () => {
                                    eE(), M(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
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
                    (0, r.jsx)(T.X6q, {
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
                        children: (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Multi-Step",
                            buttonRef: ep,
                            onClick: () => {
                                eE(), Z(!0);
                            },
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(T.X6q, {
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
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Expressive Popover",
                                buttonRef: eh,
                                onClick: () => {
                                    eE(), W(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
                                variant: "primary",
                                text: "Expressive Multi-Step",
                                buttonRef: em,
                                onClick: () => {
                                    eE(), z(!0);
                                },
                            }),
                            (0, r.jsx)(T.zxk, {
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
function eg() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState("auto");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: G.section,
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Checkboxes",
                    }),
                    (0, r.jsx)(T.XZJ, {
                        checked: e,
                        onChange: (e) => t(e),
                        label: "Checkbox input",
                    }),
                    (0, r.jsx)(T.XZJ, {
                        checked: e,
                        onChange: (e) => t(e),
                        disabled: !0,
                        label: "Disabled checkbox",
                    }),
                    (0, r.jsx)(I.$q, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, r.jsx)(T.Text, {
                            variant: "text-md/medium",
                            children: "Read-only checkbox",
                        }),
                    }),
                    (0, r.jsx)(I.$q, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: I.M0.ROW,
                        children: (0, r.jsx)(T.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox row",
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.section,
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Switches",
                    }),
                    (0, r.jsx)(T.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => a(e),
                        children: "FormSwitch with a label",
                    }),
                    (0, r.jsx)(T.j7V, {
                        disabled: !0,
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => a(e),
                        children: "FormSwitch with a label",
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.section,
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Radio Buttons",
                    }),
                    (0, r.jsx)(T.xJW, {
                        children: (0, r.jsx)(d.E, {
                            onChange: (e) => s(e),
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
                className: G.section,
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Slider",
                    }),
                    (0, r.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: "Standard slider",
                            }),
                            (0, r.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: "Sticky markers",
                            }),
                            (0, r.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform markers",
                            }),
                            (0, r.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform equidistant markers",
                            }),
                            (0, r.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: "No markers",
                            }),
                            (0, r.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, r.jsx)(T.Text, {
                                variant: "text-md/medium",
                                children: "Mini slider",
                            }),
                            (0, r.jsx)(T.iRW, {
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
function eE() {
    let [e, t] = i.useState(null),
        [n, a] = i.useState(null),
        [o, s] = i.useState([]),
        [c, u] = i.useState([]),
        [d, f] = i.useState([]);
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "SearchableSelect",
            }),
            (0, r.jsx)(T.VcW, {
                placeholder: "Single select",
                value: e,
                onChange: (e) => t(e),
                options: l.G,
            }),
            (0, r.jsx)(T.VcW, {
                placeholder: "Single select (clearable)",
                clearable: !0,
                value: n,
                onChange: (e) => a(e),
                options: l.G,
            }),
            (0, r.jsx)(T.VcW, {
                placeholder: "Multi select",
                multi: !0,
                value: o,
                onChange: (e) => s(e),
                options: l.G,
            }),
            (0, r.jsx)(T.VcW, {
                placeholder: "Multi select (clearable)",
                multi: !0,
                clearable: !0,
                value: d,
                onChange: (e) => f(e),
                options: l.G,
            }),
            (0, r.jsx)(T.VcW, {
                placeholder: "Multi select (custom pills)",
                multi: !0,
                value: c,
                onChange: (e) => u(e),
                options: l.G,
                hidePills: !0,
                customPillContainerClassName: G.customPillContainer,
                renderCustomPill: (e) =>
                    (0, r.jsx)("div", {
                        style: {
                            padding: 8,
                            border: "1px solid var(--bg-brand)",
                            borderRadius: 8,
                        },
                        children: (0, r.jsx)(T.Text, {
                            variant: "text-md/bold",
                            children: e.label,
                        }),
                    }),
            }),
        ],
    });
}
function eb() {
    let [e, t] = i.useState(""),
        [n, a] = i.useState(""),
        [o, s] = i.useState(""),
        l = (0, N.U)("UserSettingsDesignSystems");
    return (0, r.jsxs)("div", {
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "TextInput",
            }),
            (0, r.jsx)(T.xJW, {
                title: "Search",
                children: (0, r.jsxs)(T.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(T.E1j, {
                            placeholder: "Search...",
                            onChange: (e) => s(e),
                            query: o,
                            onClear: () => s(""),
                        }),
                        (0, r.jsx)(T.E1j, {
                            size: "sm",
                            placeholder: "Search...",
                            onChange: (e) => s(e),
                            query: o,
                            onClear: () => s(""),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(T.xJW, {
                title: "Disabled",
                disabled: !0,
                children: (0, r.jsx)(T.oil, {
                    placeholder: "Disabled",
                    disabled: !0,
                }),
            }),
            (0, r.jsx)(T.oil, {
                label: "Error",
                required: !0,
                error: "This must have a value",
            }),
            (0, r.jsx)(T.oil, {
                label: "Error",
                defaultValue: "Not a valid value",
                error: "This has an error.",
            }),
            (0, r.jsx)(T.oil, {
                label: "minLength",
                minLength: 6,
                value: e,
                onChange: t,
                placeholder: "Enter at least 6 characters",
            }),
            (0, r.jsx)(T.oil, {
                label: "Read only",
                value: "Read-only, not-editable field",
                editable: !1,
            }),
            (0, r.jsx)(T.oil, {
                label: "Input with a label",
                placeholder: "Real placeholder",
                value: e,
                onChange: t,
            }),
            l &&
                (0, r.jsx)(T.xJW, {
                    title: "Leading and Trailing",
                    children: (0, r.jsxs)(T.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(T.Wn, {
                                messageType: T.QYI.WARNING,
                                children: "Leading and trailing accessories are not yet supported in the public API.",
                            }),
                            (0, r.jsxs)(T.Kqy, {
                                children: [
                                    (0, r.jsx)(T.oil, {
                                        leading: T.qJs,
                                        placeholder: "Create Channel",
                                        value: e,
                                        onChange: t,
                                    }),
                                    (0, r.jsx)(T.oil, {
                                        trailing: T.lOy,
                                        placeholder: "Send Message",
                                        value: e,
                                        onChange: t,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(T.xJW, {
                title: "Text area",
                children: (0, r.jsx)(T.Kx8, {
                    placeholder: "Text area placeholder",
                    showCharacterCount: !0,
                    value: n,
                    onChange: a,
                }),
            }),
        ],
    });
}
function ey(e) {
    let { transitionState: t } = e,
        [n, a] = i.useState(!1),
        [o, s] = i.useState(T.CgR.SMALL),
        [l, c] = i.useState(!1),
        u = n ? G.modalOutlines : "";
    return (0, r.jsxs)(T.Y0X, {
        transitionState: t,
        size: o,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, r.jsx)(T.xBx, {
                className: u,
                children: (0, r.jsx)(T.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal",
                }),
            }),
            (0, r.jsx)(T.hzk, {
                className: u,
                children: (0, r.jsxs)(T.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.xJW, {
                            title: "Modal Size",
                            children: (0, r.jsx)(T.q4e, {
                                value: o,
                                onChange: s,
                                options: Object.entries(T.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n,
                                    };
                                }),
                            }),
                        }),
                        (0, r.jsx)(T.hjN, {
                            title: "Options",
                            children: (0, r.jsxs)(T.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(I.$q, {
                                        value: n,
                                        onChange: (e, t) => a(t),
                                        children: (0, r.jsx)(T.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Section Outlines",
                                        }),
                                    }),
                                    (0, r.jsx)(I.$q, {
                                        value: l,
                                        onChange: (e, t) => c(t),
                                        children: (0, r.jsx)(T.Text, {
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
            (0, r.jsx)(T.mzw, {
                className: u,
                children: (0, r.jsxs)(T.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        l &&
                            (0, r.jsx)(T.zxk, {
                                variant: "secondary",
                                text: "Secondary Action",
                            }),
                        (0, r.jsx)(T.zxk, {
                            variant: "primary",
                            text: "Close",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eO(e) {
    let { transitionState: t, onClose: n, modalCount: a = 1 } = e,
        [o, s] = i.useState("replace"),
        l = () => {
            let e = a + 1;
            (0, T.h7j)((t) => (0, r.jsx)(eO, q(K({}, t), { modalCount: e })), { stackingBehavior: o });
        },
        c = a < 3;
    return (0, r.jsxs)(T.Y0X, {
        transitionState: t,
        size: 1 === a ? T.CgR.LARGE : 2 === a ? T.CgR.MEDIUM : T.CgR.SMALL,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, r.jsx)(T.xBx, {
                children: (0, r.jsx)(T.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal Stacking Demo",
                }),
            }),
            (0, r.jsx)(T.hzk, {
                children: (0, r.jsxs)(T.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsxs)(T.Text, {
                            variant: "text-md/medium",
                            children: ["This is modal level ", a, "."],
                        }),
                        c &&
                            (0, r.jsx)(T.xJW, {
                                title: "Stacking Behavior",
                                children: (0, r.jsx)(T.q4e, {
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
                        (0, r.jsxs)(T.Kqy, {
                            gap: 8,
                            children: [
                                (0, r.jsxs)(T.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Replace One:" }),
                                        " The modal directly below is hidden (default behavior)",
                                    ],
                                }),
                                (0, r.jsxs)(T.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Replace All:" }),
                                        " All modals below are hidden",
                                    ],
                                }),
                                (0, r.jsxs)(T.Text, {
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
            (0, r.jsx)(T.mzw, {
                children: (0, r.jsxs)(T.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(T.zxk, {
                            variant: "secondary",
                            text: "Close",
                            onClick: n,
                        }),
                        c &&
                            (0, r.jsx)(T.zxk, {
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
function ev(e) {
    let { transitionState: t, onClose: n } = e;
    function i(e) {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: G.modalOutlines,
            style: { padding: "24px" },
            children: t,
        });
    }
    return (0, r.jsxs)(f.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, r.jsx)("div", {
                className: G.modalOutlines,
                children: (0, r.jsx)(E.x, {
                    title: "Demo Modal",
                    subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
                    leading: (0, r.jsx)(i, {}),
                    trailing: (0, r.jsx)(i, {}),
                }),
            }),
            (0, r.jsx)("div", {
                className: G.modalOutlines,
                children: (0, r.jsx)(m.f, {
                    controls: (0, r.jsx)(i, { children: "This ModalBody renders any controls here" }),
                    children: (0, r.jsx)(i, {
                        children: "This is the main ModalBody. This area scrolls if there is enough content",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: G.modalOutlines,
                children: (0, r.jsx)(g.m, { children: (0, r.jsx)(i, { children: "This is the ModalFooter" }) }),
            }),
            (0, r.jsx)("div", {
                className: G.modalOutlines,
                children: (0, r.jsx)(h.G, {
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
function eI(e) {
    let { transitionState: t, onClose: n } = e,
        [a, o] = i.useState("md"),
        [s, l] = i.useState("Demo Modal"),
        [c, u] = i.useState("Header body copy"),
        [d, _] = i.useState(!1),
        [p, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        [v, S] = i.useState(!1),
        [A, C] = i.useState(!1);
    return (0, r.jsxs)(f.IX, {
        transitionState: t,
        onClose: n,
        size: a,
        children: [
            (0, r.jsx)(E.x, {
                title: s,
                subtitle: c,
                alignCenter: d,
            }),
            (0, r.jsx)(m.f, {
                controls: p
                    ? (0, r.jsx)(T.E1j, {
                          placeholder: "Search",
                          onChange: () => null,
                          query: "",
                      })
                    : void 0,
                children: (0, r.jsxs)(T.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.xJW, {
                            title: "Modal Size",
                            children: (0, r.jsx)(T.q4e, {
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
                        (0, r.jsx)(T.oil, {
                            label: "Header Title",
                            onChange: l,
                            defaultValue: s,
                        }),
                        (0, r.jsx)(T.oil, {
                            label: "Header body",
                            onChange: u,
                            defaultValue: c,
                        }),
                        (0, r.jsx)(T.xJW, {
                            title: "Optional Content",
                            children: (0, r.jsxs)(T.Kqy, {
                                gap: 12,
                                children: [
                                    (0, r.jsx)(I.$q, {
                                        value: d,
                                        onChange: (e, t) => _(t),
                                        children: (0, r.jsx)(T.Text, {
                                            variant: "text-md/medium",
                                            children: "Header Align Center",
                                        }),
                                    }),
                                    (0, r.jsx)(I.$q, {
                                        value: p,
                                        onChange: (e, t) => b(t),
                                        children: (0, r.jsx)(T.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Search Input",
                                        }),
                                    }),
                                    (0, r.jsx)(I.$q, {
                                        value: y,
                                        onChange: (e, t) => O(t),
                                        children: (0, r.jsx)(T.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Preview Content",
                                        }),
                                    }),
                                    (0, r.jsx)(I.$q, {
                                        value: v,
                                        onChange: (e, t) => S(t),
                                        children: (0, r.jsx)(T.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Action Bar Leading Input",
                                        }),
                                    }),
                                    (0, r.jsx)(I.$q, {
                                        value: A,
                                        onChange: (e, t) => C(t),
                                        children: (0, r.jsx)(T.Text, {
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
            y &&
                (0, r.jsxs)(g.m, {
                    children: [
                        (0, r.jsx)(T.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Celebration Station",
                        }),
                        (0, r.jsx)(T.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: "32 Members \u25CF 19 Online",
                        }),
                    ],
                }),
            (0, r.jsx)(h.G, {
                leading: v
                    ? (0, r.jsx)(h.B, {
                          value: !1,
                          onChange: (e, t) => {},
                          text: "Don't show again",
                      })
                    : void 0,
                actionsFullWidth: A,
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
function eT(e) {
    let { transitionState: t, onClose: n } = e;
    function a(e) {
        let { text: t } = e,
            [n, a] = i.useState(!1);
        return (0, r.jsx)("div", {
            style: { padding: "8px 0" },
            children: (0, r.jsx)(I.$q, {
                value: n,
                onChange: (e, t) => a(t),
                children: (0, r.jsx)(T.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
            }),
        });
    }
    return (0, r.jsxs)(p.Modal, {
        transitionState: t,
        onClose: n,
        size: "md",
        title: "Invite to server",
        input: (0, r.jsx)(T.E1j, {
            placeholder: "Search",
            onChange: () => null,
            query: "",
        }),
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(T.X6q, {
                    variant: "heading-lg/semibold",
                    children: "Celebration Station",
                }),
                (0, r.jsx)(T.Text, {
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
                icon: T.kBi,
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
function eS(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsx)(p.Modal, {
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
function eA(e) {
    let { transitionState: t, onClose: a } = e,
        [o, s] = i.useState(0),
        [l, u] = i.useState(!1),
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
                          src: B,
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
                              rive: c.PerfTestRive,
                          }
                        : 3 === o
                          ? {
                                type: "video",
                                src: F.Z,
                                fallbackImageSrc: B,
                                loop: !0,
                                loopAt: 2.5,
                            }
                          : 4 === o
                            ? {
                                  type: "dynamic",
                                  component: T.AX$.DEMO,
                                  props: { text: "Dynamic Content" },
                              }
                            : void 0,
            [o],
        );
    return (0, r.jsxs)(_.I, {
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
            (0, r.jsx)(T.xJW, {
                title: "Graphic Type",
                children: (0, r.jsx)(T.q4e, {
                    value: o,
                    onChange: s,
                    options: d,
                }),
            }),
            (0, r.jsx)(T.xJW, {
                style: { paddingTop: "16px" },
                children: (0, r.jsx)(I.$q, {
                    value: l,
                    onChange: (e, t) => u(t),
                    children: (0, r.jsx)(T.Text, {
                        variant: "text-md/medium",
                        children: "Show beta badge",
                    }),
                }),
            }),
        ],
    });
}
function eC(e) {
    let { transitionState: t, onClose: n, modalCount: a = 1 } = e,
        [o, s] = i.useState("replace"),
        l = () => {
            let e = a + 1;
            (0, T.h7j)((t) => (0, r.jsx)(eC, q(K({}, t), { modalCount: e })), { stackingBehavior: o });
        },
        c = a < 3;
    return (0, r.jsx)(p.Modal, {
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
        children: (0, r.jsxs)(T.Kqy, {
            gap: 16,
            children: [
                c &&
                    (0, r.jsx)(T.xJW, {
                        title: "Stacking Behavior",
                        children: (0, r.jsx)(T.q4e, {
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
                (0, r.jsxs)(T.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsxs)(T.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Replace One:" }),
                                " The modal directly below is hidden (default behavior)",
                            ],
                        }),
                        (0, r.jsxs)(T.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Replace All:" }),
                                " All modals below are hidden",
                            ],
                        }),
                        (0, r.jsxs)(T.Text, {
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
function eN() {
    let e = () => {
            (0, T.h7j)((e) => (0, r.jsx)(ey, K({}, e)));
        },
        t = () => {
            (0, T.h7j)((e) => (0, r.jsx)(eO, K({}, e)));
        },
        n = () => {
            (0, T.h7j)((e) => (0, r.jsx)(ev, K({}, e)));
        },
        i = () => {
            (0, T.h7j)((e) => (0, r.jsx)(eI, K({}, e)));
        },
        a = () => {
            (0, T.h7j)((e) => (0, r.jsx)(eT, K({}, e)));
        },
        o = () => {
            (0, T.h7j)((e) => (0, r.jsx)(eS, K({}, e)));
        },
        s = () => {
            (0, T.h7j)((e) => (0, r.jsx)(eA, K({}, e)));
        },
        l = () => {
            (0, T.h7j)((e) => (0, r.jsx)(eC, K({}, e)));
        },
        c = () => {
            S.Z.show({
                title: "Alert",
                body: "This is an alert",
                confirmText: "Confirm Text",
                cancelText: "Cancel Text",
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: G.section,
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Void)",
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open modal",
                        onClick: e,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Show Alert",
                        onClick: c,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open modal stacking demo",
                        onClick: t,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.section,
                children: [
                    (0, r.jsx)(T.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Mana)",
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open modal section visualizer",
                        onClick: n,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open demo modal",
                        onClick: i,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open sample invite modal",
                        onClick: a,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open sample alert modal",
                        onClick: o,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open expressive modal",
                        onClick: s,
                    }),
                    (0, r.jsx)(T.zxk, {
                        variant: "primary",
                        text: "Open Mana modal stacking demo",
                        onClick: l,
                    }),
                ],
            }),
        ],
    });
}
function eR() {
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
        className: G.section,
        children: [
            (0, r.jsx)(T.X6q, {
                variant: "heading-xl/semibold",
                children: "User Avatars",
            }),
            (0, r.jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                },
                children: e.map((e) => (0, r.jsx)(eP, { size: e }, e)),
            }),
        ],
    });
}
function eP(e) {
    let { size: t } = e,
        { user: n } = (0, u.cj)([w.default], () => ({ user: w.default.getCurrentUser() })),
        i = Number(t.split("_")[1]);
    return (0, r.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
        },
        children: [
            (0, r.jsxs)(T.X6q, {
                variant: "heading-sm/semibold",
                style: { textAlign: "center" },
                children: [i, "px"],
            }),
            (0, r.jsx)(T.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: U.Sk.ONLINE,
            }),
            (0, r.jsx)(T.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: U.Sk.ONLINE,
                isTyping: !0,
            }),
            (0, r.jsx)(T.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: U.Sk.ONLINE,
                isMobile: !0,
            }),
            (0, r.jsx)(T.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                isSpeaking: !0,
            }),
        ],
    });
}
function ew() {
    let e = (0, u.e7)([A.Z], () => A.Z.gradientPreset);
    return (0, r.jsx)(T.f6W, {
        theme: U.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, r.jsxs)("div", {
                className: o()(t, G.section),
                children: [
                    (0, r.jsx)(T.zxk, {
                        variant: "secondary",
                        text: "Button",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(T.f6W, {
                        theme: U.BR.LIGHT,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: o()(t, G.section),
                                children: [
                                    (0, r.jsx)(T.zxk, {
                                        variant: "secondary",
                                        text: "Button",
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(T.f6W, {
                                        theme: U.BR.DARKER,
                                        children: (e) =>
                                            (0, r.jsx)("div", {
                                                className: o()(e, G.section),
                                                children: (0, r.jsx)(T.zxk, {
                                                    variant: "secondary",
                                                    text: "Button",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                    }),
                                    (0, r.jsx)(T.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, r.jsx)("div", {
                                                className: o()(e, G.section),
                                                children: (0, r.jsx)(T.zxk, {
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
