n.d(t, { Z: () => es }), n(704826), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(971809),
    c = n(164617),
    u = n(442837),
    d = n(257465),
    f = n(667202),
    _ = n(82659),
    p = n(369585),
    h = n(103866),
    m = n(213734),
    g = n(37148),
    E = n(907862),
    b = n(466590),
    y = n(681715),
    O = n(159691),
    v = n(755721),
    I = n(481060),
    T = n(240872),
    S = n(514361),
    A = n(705262),
    C = n(377089),
    N = n(581612),
    R = n(580747),
    P = n(594174),
    w = n(526156),
    D = n(799071),
    x = n(554042),
    L = n(706705),
    j = n(726985),
    k = n(981631),
    M = n(231338),
    U = n(726927),
    G = n(177475),
    B = n(726158),
    Z = n(935692),
    F = n(618583),
    V = n(811616),
    H = n(184214);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = X(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function Q() {
    return (0, r.jsxs)("div", {
        className: U.root,
        children: [
            (0, r.jsx)(J, {}),
            (0, r.jsx)(ec, {}),
            (0, r.jsx)(eg, {}),
            (0, r.jsx)(eE, {}),
            (0, r.jsx)(em, {}),
            (0, r.jsx)(ep, {}),
            (0, r.jsx)(eh, {}),
            (0, r.jsx)(e_, {}),
            (0, r.jsx)(ef, {}),
            (0, r.jsx)(eC, {}),
            (0, r.jsx)(eN, {}),
            (0, r.jsx)($, {}),
            (0, r.jsx)(eP, {}),
        ],
    });
}
function J() {
    let e = (0, R.Z)("highlight_mana_components");
    return (0, r.jsx)(I.hjN, {
        title: "Design System Controls",
        children: (0, r.jsx)(I.xJW, {
            children: (0, r.jsx)(I.j7V, {
                value: e,
                onChange: (e) => (0, N.Z)("highlight_mana_components", e),
                note: "Highlights all mana components marked with data-mana-component",
                hideBorder: !0,
                children: "Highlight Mana Components",
            }),
        }),
    });
}
function $() {
    let e = Object.keys(I.DM8);
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Notice",
            }),
            (0, r.jsx)(I.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, r.jsx)(
                        I.qXd,
                        {
                            color: I.DM8[e],
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
let ee = [
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
    et = [
        "background-surface-highest",
        "background-surface-higher",
        "background-surface-high",
        "background-base-low",
        "background-base-lower",
        "background-base-lowest",
    ],
    en = [
        "background-gradient-lowest",
        "background-gradient-lower",
        "background-gradient-low",
        "background-gradient-high",
        "background-gradient-higher",
        "background-gradient-highest",
    ],
    er = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
    ei = ["critical", "warning", "positive", "info"],
    ea = [
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
function eo() {
    let e = null !== (0, u.e7)([S.Z], () => S.Z.gradientPreset);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                className: U.heading,
                children: "Background Colors",
            }),
            et.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: U.palette,
                        style: {
                            backgroundColor: "var(--".concat(e, ")"),
                            padding: 24,
                        },
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: er.map((e) =>
                                    (0, r.jsxs)(
                                        "div",
                                        {
                                            className: U.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--".concat(e, ")"),
                                            },
                                            children: [
                                                (0, r.jsx)(I.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                    children: e,
                                                }),
                                                (0, r.jsx)("hr", { className: U.sectionDivider }),
                                                ea.map((e) =>
                                                    (0, r.jsx)(
                                                        I.Text,
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
                            (0, r.jsx)("hr", { className: U.sectionDivider }),
                            (0, r.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: ei.map((e) => {
                                    let t = "var(--text-feedback-".concat(e, ")");
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: U.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--background-feedback-".concat(e, ")"),
                                            },
                                            children: [
                                                (0, r.jsx)(I.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                }),
                                                (0, r.jsxs)(I.Kqy, {
                                                    children: [
                                                        (0, r.jsxs)(I.Text, {
                                                            variant: "text-xs/semibold",
                                                            style: { color: t },
                                                            children: ["background-feedback-", e],
                                                        }),
                                                        (0, r.jsx)(I.Text, {
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
                        (0, r.jsx)(I.X6q, {
                            variant: "heading-xl/semibold",
                            className: U.heading,
                            children: "Gradient Background Colors",
                        }),
                        (0, r.jsx)("div", {
                            className: "custom-theme-background",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(6, 1fr)",
                                transform: "translateZ(0)",
                            },
                            children: en.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: U.palette,
                                        style: {
                                            background: "var(--".concat(e, ")"),
                                            height: 400,
                                        },
                                        children: (0, r.jsx)(I.Text, {
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
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                className: U.heading,
                children: "Scales",
            }),
            ee.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: U.palette,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-lg/semibold",
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: U.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: U.color,
                                            style: {
                                                background: "var(--"
                                                    .concat(e.replace("_", "-"), "-")
                                                    .concat(n + 1, ")"),
                                            },
                                            children: (0, r.jsx)(I.f6W, {
                                                theme: n < 50 ? "light" : "dark",
                                                children: (t) =>
                                                    (0, r.jsxs)(I.Text, {
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
function es() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.Z, {
                parentSetting: j.s6.DESIGN_SYSTEMS,
                settingsSection: k.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: "Components",
                        component: () => (0, r.jsx)(Q, {}),
                        setting: j.s6.DESIGN_SYSTEMS_COMPONENTS,
                    },
                    {
                        title: "Colors",
                        component: () => (0, r.jsx)(eo, {}),
                        setting: j.s6.DESIGN_SYSTEMS_COLORS,
                    },
                    {
                        title: "Animations",
                        component: () => (0, r.jsx)(L.Z, {}),
                        setting: j.s6.ANIMATION_TESTING,
                    },
                    {
                        title: "Text Playground",
                        component: () => (0, r.jsx)(x.Z, {}),
                        setting: j.s6.TEXT_PLAYGROUND,
                    },
                    {
                        title: "Text Componnts",
                        component: () => (0, r.jsx)(D.Z, {}),
                        setting: j.s6.TEXT_COMPONENTS,
                    },
                ],
            }),
            (0, r.jsx)("div", {
                className: U.themes,
                children: (0, r.jsx)(A.ZP, {
                    type: A.yH.SETTINGS,
                    children: (0, r.jsx)(A.ZP.Basic, { className: U.themeSelectionGroup }),
                }),
            }),
        ],
    });
}
function el(e) {
    var { component: t, showLoadingAnimation: n } = e,
        a = q(e, ["component", "showLoadingAnimation"]);
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
            z(W({}, a), {
                loading: n ? o : void 0,
                onClick: () => s(!o),
            }),
        )
    );
}
function ec() {
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
                        el,
                        {
                            component: O.zxk,
                            variant: t,
                            text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? I.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: o,
                        },
                        t + e,
                    ),
                    (0, r.jsx)(
                        el,
                        {
                            component: O.zxk,
                            variant: t,
                            text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? I.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: o,
                            disabled: !0,
                        },
                        t + e + "disabled",
                    ),
                ],
            }),
        ),
        d = [...c, "icon-only"].map((t) =>
            (0, r.jsx)(
                el,
                {
                    component: O.hU,
                    variant: t,
                    icon: I.gw7,
                    size: e,
                    "aria-label": "".concat(t, " ").concat(e),
                    showLoadingAnimation: o,
                },
                t + e,
            ),
        ),
        f = ["primary", "secondary", "always-white", "critical"].map((e) =>
            (0, r.jsx)(
                i.Fragment,
                {
                    children: (0, r.jsx)(O.Avr, {
                        variant: e,
                        text: "Text button",
                    }),
                },
                e,
            ),
        );
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Buttons",
            }),
            (0, r.jsxs)(ed, {
                title: "Button Options",
                children: [
                    (0, r.jsx)(v.Gu, {
                        label: "Button size",
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
                    (0, r.jsx)(v.Gu, {
                        label: "Icon position",
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
                    (0, r.jsx)(v.Gu, {
                        label: "Loading animation",
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
                ],
            }),
            (0, r.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 16,
                },
                children: [f, u, d],
            }),
            (0, r.jsxs)(I.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Button Groups",
                    }),
                    (0, r.jsx)(I.Text, {
                        variant: "text-lg/medium",
                        children: "Horizontal",
                    }),
                    (0, r.jsxs)(I.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, r.jsxs)(I.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsxs)(O.hE2, {
                                        size: e,
                                        children: [
                                            (0, r.jsx)(el, {
                                                component: O.zxk,
                                                variant: "secondary",
                                                text: "Cancel",
                                                showLoadingAnimation: o,
                                            }),
                                            (0, r.jsx)(el, {
                                                component: O.zxk,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: o,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(O.hE2, {
                                        size: e,
                                        children: [
                                            (0, r.jsx)(el, {
                                                component: O.zxk,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: o,
                                            }),
                                            (0, r.jsx)(el, {
                                                component: O.hU,
                                                variant: "secondary",
                                                icon: I.gw7,
                                                "aria-label": "Clyde",
                                                showLoadingAnimation: o,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(O.hE2, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, r.jsx)(el, {
                                            component: O.zxk,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(el, {
                                            component: O.zxk,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(I.Text, {
                        variant: "text-lg/medium",
                        children: "Vertical",
                    }),
                    (0, r.jsxs)(I.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(I.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(O.hE2, {
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, r.jsx)(el, {
                                            component: O.zxk,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(el, {
                                            component: O.zxk,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(I.Kqy, {
                                gap: 16,
                                children: (0, r.jsxs)(O.hE2, {
                                    fullWidth: !0,
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, r.jsx)(el, {
                                            component: O.zxk,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: o,
                                        }),
                                        (0, r.jsx)(el, {
                                            component: O.zxk,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(eu, { buttonSize: e }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let { buttonSize: t } = e,
        [n, a] = i.useState(!1);
    return (0, r.jsxs)(I.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "PlayButton",
            }),
            (0, r.jsx)(I.Kqy, {
                direction: "horizontal",
                gap: 16,
                children: ["dark", "mid", "light"].map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: U.video,
                            "data-luminance": e,
                            children: (0, r.jsx)(O.JM1, {
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
function ed(e) {
    let { children: t, title: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)(I.Kqy, {
        direction: "vertical",
        gap: 0,
        padding: 16,
        className: U.floatingControls,
        children: [
            (0, r.jsxs)(I.Kqy, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: n,
                    }),
                    (0, r.jsx)(O.Qdh, {
                        icon: a ? I.hic : I.sXD,
                        onClick: () => s(!a),
                        pressed: a,
                        "aria-label": "Show controls",
                    }),
                ],
            }),
            (0, r.jsx)(I.Kqy, {
                gap: 16,
                className: o()(U.floatingControlsContent, { [U.floatingControlsContentHidden]: !a }),
                children: t,
            }),
        ],
    });
}
function ef() {
    let [e, t] = i.useState("1");
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "TabBar",
            }),
            (0, r.jsxs)(I.njP, {
                type: "top",
                look: "brand",
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: U.tabBar,
                children: [
                    (0, r.jsx)(I.njP.Item, {
                        id: "1",
                        children: "Tab 1",
                    }),
                    (0, r.jsx)(I.njP.Item, {
                        id: "2",
                        children: "Tab 2",
                    }),
                    (0, r.jsx)(I.njP.Item, {
                        id: "3",
                        children: "Tab 3",
                    }),
                ],
            }),
            (0, r.jsxs)(I.Text, {
                variant: "text-md/medium",
                children: ["Selected tab: ", e],
            }),
        ],
    });
}
function e_() {
    let [e, t] = i.useState(1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(5),
        [l, c] = i.useState(!1),
        u = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Context Menus",
            }),
            (0, r.jsx)("span", {
                children: (0, r.jsx)(I.yRy, {
                    targetElementRef: u,
                    shouldShow: l,
                    renderPopout: () =>
                        (0, r.jsxs)(I.v2r, {
                            navId: "demo",
                            "aria-label": "Demo Actions",
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, r.jsxs)(I.kSQ, {
                                    label: "Basic items",
                                    children: [
                                        (0, r.jsx)(I.sNh, {
                                            id: "first",
                                            label: "An option",
                                        }),
                                        (0, r.jsx)(I.sNh, {
                                            id: "second",
                                            label: "An option with an icon",
                                            icon: I.kBi,
                                        }),
                                        (0, r.jsxs)(I.sNh, {
                                            id: "item-with-submenu",
                                            label: "Item with submenu",
                                            children: [
                                                (0, r.jsx)(I.sNh, {
                                                    id: "subitem-1",
                                                    label: "Subitem 1",
                                                }),
                                                (0, r.jsx)(I.sNh, {
                                                    id: "subitem-2",
                                                    label: "Subitem 2",
                                                }),
                                                (0, r.jsx)(I.sNh, {
                                                    id: "subitem-3",
                                                    label: "Subitem 3",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(I.kSQ, {
                                    label: "Inputs",
                                    children: [
                                        (0, r.jsx)(I.S89, {
                                            id: "checkable",
                                            label: "Checkbox",
                                            checked: n,
                                            action: () => a(!n),
                                        }),
                                        (0, r.jsx)(I.k5B, {
                                            id: "radio-one",
                                            group: "a-group",
                                            label: "Radio 1",
                                            action: () => t(1),
                                            checked: 1 === e,
                                        }),
                                        (0, r.jsx)(I.k5B, {
                                            id: "radio-two",
                                            group: "a-group",
                                            label: "Radio 2",
                                            action: () => t(2),
                                            checked: 2 === e,
                                        }),
                                        (0, r.jsx)(I.k5B, {
                                            id: "radio-three",
                                            group: "a-group",
                                            label: "Radio 3",
                                            action: () => t(3),
                                            checked: 3 === e,
                                        }),
                                        (0, r.jsx)(I.II_, {
                                            id: "slider",
                                            label: "Slider",
                                            control: (e, t) =>
                                                (0, r.jsx)(I._wy, {
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
                                (0, r.jsx)(I.Clw, {}),
                                (0, r.jsx)(I.sNh, {
                                    id: "danger",
                                    label: "A destructive option",
                                    color: "danger",
                                    icon: I.XHJ,
                                }),
                            ],
                        }),
                    children: () =>
                        (0, r.jsx)(I.zxk, {
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
function ep() {
    let [e, t] = i.useState(I.FGA.PRIMARY),
        n = i.useMemo(
            () =>
                Object.entries(I.FGA).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n,
                    };
                }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Tooltips",
            }),
            (0, r.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                children: "Legacy Tooltips",
            }),
            (0, r.jsx)(I.xJW, {
                title: "Color",
                children: (0, r.jsx)(I.q4e, {
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
                    (0, r.jsx)(I.ua7, {
                        color: e,
                        text: "Here's top aligned tooltip text!",
                        position: "top",
                        children: (e) =>
                            (0, r.jsx)(
                                I.zxk,
                                W(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the top",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(I.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "left",
                        children: (e) =>
                            (0, r.jsx)(
                                I.zxk,
                                W(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the left",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(I.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: "bottom",
                        children: (e) =>
                            (0, r.jsx)(
                                I.zxk,
                                W(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the bottom",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, r.jsx)(I.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "right",
                        children: (e) =>
                            (0, r.jsx)(
                                I.zxk,
                                W(
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
            (0, r.jsx)(I.X6q, {
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
                    (0, r.jsx)(y.u, {
                        text: "New Mana Tooltip with animations!",
                        position: "top",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Top)",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Left positioned animated tooltip",
                        position: "left",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Left)",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Bottom positioned animated tooltip",
                        position: "bottom",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Bottom)",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Right positioned animated tooltip",
                        position: "right",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Right)",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod non proident amo.",
                        position: "right",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Three lines",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Tooltip Caret API Examples",
            }),
            (0, r.jsx)(I.Text, {
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
                    (0, r.jsx)(y.u, {
                        text: "Top with start",
                        position: "top",
                        caretConfig: { align: "start" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Top - Start",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Top with center",
                        position: "top",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Top - Center",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Top with end",
                        position: "top",
                        caretConfig: { align: "end" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Top - End",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Bottom with start",
                        position: "bottom",
                        caretConfig: { align: "start" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Bottom - Start",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Bottom with center",
                        position: "bottom",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Bottom - Center",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Bottom with end",
                        position: "bottom",
                        caretConfig: { align: "end" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Bottom - End",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(I.Text, {
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
                    (0, r.jsx)(y.u, {
                        text: "Left with center",
                        position: "left",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Left - Center",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Right with center",
                        position: "right",
                        caretConfig: { align: "center" },
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Right - Center",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(I.Text, {
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
                children: (0, r.jsx)(y.u, {
                    text: "Bottom with custom",
                    position: "bottom",
                    caretConfig: {
                        align: "custom",
                        customOffset: 30,
                    },
                    children: (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Custom Offset",
                    }),
                }),
            }),
            (0, r.jsx)(I.X6q, {
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
                    (0, r.jsx)(y.u, {
                        text: "No delay (immediate)",
                        delay: 0,
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "No Delay",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Short delay (500ms)",
                        delay: 500,
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Short Delay",
                        }),
                    }),
                    (0, r.jsx)(y.u, {
                        text: "Long delay (1000ms)",
                        delay: 1000,
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Long Delay",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(I.X6q, {
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
                    (0, r.jsx)(y.i_, {
                        title: "Title goes here",
                        body: "Body copy goes in this section. Meow.",
                        position: "top",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Rich Tooltip (No Graphic)",
                        }),
                    }),
                    (0, r.jsx)(y.i_, {
                        title: "With Graphic Asset",
                        body: "This tooltip includes a graphic element on the left side",
                        asset: (0, r.jsx)("img", {
                            src: B.Z,
                            alt: "Graphic slot 48px",
                        }),
                        position: "top",
                        children: (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "With Asset",
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eh() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(!1),
        [l, c] = i.useState(!1),
        [u, d] = i.useState(!1),
        [f, _] = i.useState(!1),
        [p, h] = i.useState(!1),
        [m, g] = i.useState(!1),
        [y, O] = i.useState(!1),
        [v, T] = i.useState(!1),
        [S, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        [R, P] = i.useState(!1),
        [w, D] = i.useState(!1),
        [x, L] = i.useState(!1),
        [j, k] = i.useState(!1),
        [M, G] = i.useState(!1),
        [B, Z] = i.useState(!1),
        [Y, W] = i.useState(!1),
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
                T(!1),
                A(!1),
                N(!1),
                P(!1),
                D(!1),
                L(!1),
                k(!1),
                G(!1),
                Z(!1),
                W(!1),
                z(!1),
                X(!1);
        }, []);
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Popovers",
            }),
            (0, r.jsx)(E.J2, {
                targetElementRef: Q,
                shouldShow: e,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Only with Nitro"],
                size: "sm",
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
            (0, r.jsx)(E.J2, {
                targetElementRef: J,
                shouldShow: n,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: "Body",
                graphic: {
                    type: "image",
                    src: F.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(E.J2, {
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
            (0, r.jsx)(E.J2, {
                targetElementRef: ee,
                shouldShow: l,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Ipsum Dolor",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                graphic: {
                    type: "image",
                    src: F.Z,
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
            (0, r.jsx)(E.J2, {
                targetElementRef: et,
                shouldShow: u,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Header",
                body: "Body",
                graphic: {
                    type: "image",
                    src: F.Z,
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
            (0, r.jsx)(E.J2, {
                targetElementRef: en,
                shouldShow: f,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "No Actions",
                body: "This popover has no action buttons, just content to display.",
                graphic: {
                    type: "image",
                    src: F.Z,
                },
                badge: "new",
            }),
            (0, r.jsx)(E.J2, {
                targetElementRef: er,
                shouldShow: p,
                onRequestClose: eE,
                caretConfig: { align: "end" },
                title: "Custom Caret API",
                body: "Using CaretConfig with END placement",
                graphic: {
                    type: "image",
                    src: F.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Got it",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(E.J2, {
                targetElementRef: ei,
                shouldShow: m,
                onRequestClose: eE,
                caretConfig: { align: "start" },
                title: "Left Side Caret",
                body: "Caret positioned on the left side at start",
                graphic: {
                    type: "image",
                    src: F.Z,
                },
                badge: "early_access",
                actions: [
                    {
                        text: "Close",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(E.J2, {
                targetElementRef: ea,
                shouldShow: y,
                onRequestClose: eE,
                caretConfig: {
                    align: "custom",
                    customOffset: 50,
                },
                title: "Custom Offset",
                body: "Caret positioned 50px from center with custom offset",
                graphic: {
                    type: "image",
                    src: F.Z,
                },
                badge: "beta",
                actions: [
                    {
                        text: "Amazing!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(E.J2, {
                targetElementRef: eo,
                shouldShow: v,
                onRequestClose: eE,
                position: "right",
                caretConfig: { align: "center" },
                title: "Left Center Positioning",
                body: "Popover appears to the right with caret centered on the left side",
                graphic: {
                    type: "image",
                    src: F.Z,
                },
                badge: "new",
                actions: [
                    {
                        text: "Perfect!",
                        onClick: eE,
                    },
                ],
            }),
            (0, r.jsx)(E.J2, {
                targetElementRef: es,
                shouldShow: S,
                onRequestClose: eE,
                position: "bottom",
                caretConfig: { align: "center" },
                title: "Purple Gradient",
                body: "This popover has a beautiful purple gradient background",
                graphic: {
                    type: "image",
                    src: F.Z,
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
            (0, r.jsx)(E.J2, {
                targetElementRef: el,
                shouldShow: C,
                onRequestClose: eE,
                position: "left",
                caretConfig: { align: "center" },
                title: "Blue Gradient",
                body: "This popover showcases the blue gradient option",
                graphic: {
                    type: "image",
                    src: F.Z,
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
            (0, r.jsx)(E.J2, {
                targetElementRef: ec,
                shouldShow: R,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Nitro Pink Gradient",
                body: "Experience the premium nitro-pink gradient effect",
                graphic: {
                    type: "image",
                    src: F.Z,
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
            (0, r.jsx)(E.J2, {
                targetElementRef: eu,
                shouldShow: w,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Voice Filters",
                body: "Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.",
                graphic: {
                    type: "image",
                    src: H.Z,
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
            (0, r.jsx)(E.Mb, {
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
            (0, r.jsx)(E.Mb, {
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
            (0, r.jsx)(E.Mb, {
                targetElementRef: e_,
                shouldShow: M,
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
            (0, r.jsx)(b.e, {
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
                            src: F.Z,
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
                            src: H.Z,
                        },
                        action: { text: "Next" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Quest Complete!",
                        body: "You're all set to start your quest adventure. Good luck!",
                        graphic: {
                            type: "image",
                            src: F.Z,
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
            (0, r.jsx)(E.J2, {
                targetElementRef: eh,
                shouldShow: Y,
                onRequestClose: eE,
                caretConfig: { align: "center" },
                title: "Experience Voice Filters",
                body: "Enhanced voice quality with our latest filtering technology. Try the expressive button!",
                graphic: {
                    type: "image",
                    src: H.Z,
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
            (0, r.jsx)(b.e, {
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
                            src: F.Z,
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
                            src: H.Z,
                        },
                        action: { text: "Almost There" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Ready to Go!",
                        body: "You're all set! Notice the expressive button animation.",
                        graphic: {
                            type: "image",
                            src: F.Z,
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
            (0, r.jsx)(E.Mb, {
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
                    (0, r.jsx)(I.X6q, {
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
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Small Content",
                                buttonRef: Q,
                                onClick: () => {
                                    eE(), t(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Medium Content",
                                buttonRef: J,
                                onClick: () => {
                                    eE(), a(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
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
                    (0, r.jsx)(I.X6q, {
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
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "External Link",
                                buttonRef: ee,
                                onClick: () => {
                                    eE(), c(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Two Actions",
                                buttonRef: et,
                                onClick: () => {
                                    eE(), d(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
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
                    (0, r.jsx)(I.X6q, {
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
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Custom Caret API",
                                buttonRef: er,
                                onClick: () => {
                                    eE(), h(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Left Side Caret",
                                buttonRef: ei,
                                onClick: () => {
                                    eE(), g(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Custom Offset",
                                buttonRef: ea,
                                onClick: () => {
                                    eE(), O(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Left Center",
                                buttonRef: eo,
                                onClick: () => {
                                    eE(), T(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(I.X6q, {
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
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Purple Gradient",
                                buttonRef: es,
                                onClick: () => {
                                    eE(), A(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Blue Gradient",
                                buttonRef: el,
                                onClick: () => {
                                    eE(), N(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
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
                    (0, r.jsx)(I.X6q, {
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
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Voice Filters",
                                buttonRef: eu,
                                onClick: () => {
                                    eE(), D(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Video Media Viewer",
                                buttonRef: ed,
                                onClick: () => {
                                    eE(), L(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Video with Different Preview",
                                buttonRef: ef,
                                onClick: () => {
                                    eE(), k(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "With image",
                                buttonRef: e_,
                                onClick: () => {
                                    eE(), G(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, r.jsx)(I.X6q, {
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
                        children: (0, r.jsx)(I.zxk, {
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
                    (0, r.jsx)(I.X6q, {
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
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Expressive Popover",
                                buttonRef: eh,
                                onClick: () => {
                                    eE(), W(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Expressive Multi-Step",
                                buttonRef: em,
                                onClick: () => {
                                    eE(), z(!0);
                                },
                            }),
                            (0, r.jsx)(I.zxk, {
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
function em() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [o, s] = i.useState("auto");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: U.section,
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Checkboxes",
                    }),
                    (0, r.jsx)(I.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        label: "Checkbox input",
                        children: (0, r.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox input",
                        }),
                    }),
                    (0, r.jsx)(I.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        label: "Disabled checkbox",
                        children: (0, r.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Disabled checkbox",
                        }),
                    }),
                    (0, r.jsx)(v.$q, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, r.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Read-only checkbox",
                        }),
                    }),
                    (0, r.jsx)(v.$q, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: v.M0.ROW,
                        children: (0, r.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox row",
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.section,
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Switches",
                    }),
                    (0, r.jsx)(I.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => a(e),
                        children: "FormSwitch with a label",
                    }),
                    (0, r.jsx)(I.j7V, {
                        disabled: !0,
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => a(e),
                        children: "FormSwitch with a label",
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.section,
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Radio Buttons",
                    }),
                    (0, r.jsx)(I.xJW, {
                        children: (0, r.jsx)(v.Gu, {
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
                className: U.section,
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Slider",
                    }),
                    (0, r.jsxs)("div", {
                        className: U.slider,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Standard slider",
                            }),
                            (0, r.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: U.slider,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Sticky markers",
                            }),
                            (0, r.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: U.slider,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform markers",
                            }),
                            (0, r.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: U.slider,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform equidistant markers",
                            }),
                            (0, r.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: U.slider,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "No markers",
                            }),
                            (0, r.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: U.slider,
                        children: [
                            (0, r.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Mini slider",
                            }),
                            (0, r.jsx)(I.iRW, {
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
function eg() {
    let [e, t] = i.useState(null),
        [n, a] = i.useState(null),
        [o, s] = i.useState([]),
        [c, u] = i.useState([]),
        [d, f] = i.useState([]);
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "SearchableSelect",
            }),
            (0, r.jsx)(I.VcW, {
                placeholder: "Single select",
                value: e,
                onChange: (e) => t(e),
                options: l.G,
            }),
            (0, r.jsx)(I.VcW, {
                placeholder: "Single select (clearable)",
                clearable: !0,
                value: n,
                onChange: (e) => a(e),
                options: l.G,
            }),
            (0, r.jsx)(I.VcW, {
                placeholder: "Multi select",
                multi: !0,
                value: o,
                onChange: (e) => s(e),
                options: l.G,
            }),
            (0, r.jsx)(I.VcW, {
                placeholder: "Multi select (clearable)",
                multi: !0,
                clearable: !0,
                value: d,
                onChange: (e) => f(e),
                options: l.G,
            }),
            (0, r.jsx)(I.VcW, {
                placeholder: "Multi select (custom pills)",
                multi: !0,
                value: c,
                onChange: (e) => u(e),
                options: l.G,
                hidePills: !0,
                customPillContainerClassName: U.customPillContainer,
                renderCustomPill: (e) =>
                    (0, r.jsx)("div", {
                        style: {
                            padding: 8,
                            border: "1px solid var(--bg-brand)",
                            borderRadius: 8,
                        },
                        children: (0, r.jsx)(I.Text, {
                            variant: "text-md/bold",
                            children: e.label,
                        }),
                    }),
            }),
        ],
    });
}
function eE() {
    let [e, t] = i.useState(""),
        [n, a] = i.useState(""),
        [o, s] = i.useState(""),
        l = (0, C.U)("UserSettingsDesignSystems");
    return (0, r.jsxs)("div", {
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "TextInput",
            }),
            (0, r.jsx)(I.xJW, {
                title: "Search",
                children: (0, r.jsxs)(I.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(I.E1j, {
                            placeholder: "Search...",
                            onChange: (e) => s(e),
                            query: o,
                            onClear: () => s(""),
                        }),
                        (0, r.jsx)(I.E1j, {
                            size: "sm",
                            placeholder: "Search...",
                            onChange: (e) => s(e),
                            query: o,
                            onClear: () => s(""),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(I.xJW, {
                title: "Disabled",
                disabled: !0,
                children: (0, r.jsx)(I.oil, {
                    placeholder: "Disabled",
                    disabled: !0,
                }),
            }),
            (0, r.jsx)(I.oil, {
                label: "Error",
                required: !0,
                error: "This must have a value",
            }),
            (0, r.jsx)(I.oil, {
                label: "Error",
                defaultValue: "Not a valid value",
                error: "This has an error.",
            }),
            (0, r.jsx)(I.oil, {
                label: "minLength",
                minLength: 6,
                value: e,
                onChange: t,
                placeholder: "Enter at least 6 characters",
            }),
            (0, r.jsx)(I.oil, {
                label: "Read only",
                value: "Read-only, not-editable field",
                editable: !1,
            }),
            (0, r.jsx)(I.oil, {
                label: "Input with a label",
                placeholder: "Real placeholder",
                value: e,
                onChange: t,
            }),
            l &&
                (0, r.jsx)(I.xJW, {
                    title: "Leading and Trailing",
                    children: (0, r.jsxs)(I.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(I.Wn, {
                                messageType: I.QYI.WARNING,
                                children: "Leading and trailing accessories are not yet supported in the public API.",
                            }),
                            (0, r.jsxs)(I.Kqy, {
                                children: [
                                    (0, r.jsx)(I.oil, {
                                        leading: I.qJs,
                                        placeholder: "Create Channel",
                                        value: e,
                                        onChange: t,
                                    }),
                                    (0, r.jsx)(I.oil, {
                                        trailing: I.lOy,
                                        placeholder: "Send Message",
                                        value: e,
                                        onChange: t,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            (0, r.jsx)(I.xJW, {
                title: "Text area",
                children: (0, r.jsx)(I.Kx8, {
                    placeholder: "Text area placeholder",
                    showCharacterCount: !0,
                    value: n,
                    onChange: a,
                }),
            }),
        ],
    });
}
function eb(e) {
    let { transitionState: t } = e,
        [n, a] = i.useState(!1),
        [o, s] = i.useState(I.CgR.SMALL),
        [l, c] = i.useState(!1),
        u = n ? U.modalOutlines : "";
    return (0, r.jsxs)(I.Y0X, {
        transitionState: t,
        size: o,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, r.jsx)(I.xBx, {
                className: u,
                children: (0, r.jsx)(I.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal",
                }),
            }),
            (0, r.jsx)(I.hzk, {
                className: u,
                children: (0, r.jsxs)(I.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(I.xJW, {
                            title: "Modal Size",
                            children: (0, r.jsx)(I.q4e, {
                                value: o,
                                onChange: s,
                                options: Object.entries(I.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n,
                                    };
                                }),
                            }),
                        }),
                        (0, r.jsx)(I.hjN, {
                            title: "Options",
                            children: (0, r.jsxs)(I.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(v.$q, {
                                        value: n,
                                        onChange: (e, t) => a(t),
                                        children: (0, r.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Section Outlines",
                                        }),
                                    }),
                                    (0, r.jsx)(v.$q, {
                                        value: l,
                                        onChange: (e, t) => c(t),
                                        children: (0, r.jsx)(I.Text, {
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
            (0, r.jsx)(I.mzw, {
                className: u,
                children: (0, r.jsxs)(I.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        l &&
                            (0, r.jsx)(I.zxk, {
                                variant: "secondary",
                                text: "Secondary Action",
                            }),
                        (0, r.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Close",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function ey(e) {
    let { transitionState: t, onClose: n, modalCount: a = 1 } = e,
        [o, s] = i.useState("replace"),
        l = () => {
            let e = a + 1;
            (0, I.h7j)((t) => (0, r.jsx)(ey, z(W({}, t), { modalCount: e })), { stackingBehavior: o });
        },
        c = a < 3;
    return (0, r.jsxs)(I.Y0X, {
        transitionState: t,
        size: 1 === a ? I.CgR.LARGE : 2 === a ? I.CgR.MEDIUM : I.CgR.SMALL,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, r.jsx)(I.xBx, {
                children: (0, r.jsx)(I.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal Stacking Demo",
                }),
            }),
            (0, r.jsx)(I.hzk, {
                children: (0, r.jsxs)(I.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsxs)(I.Text, {
                            variant: "text-md/medium",
                            children: ["This is modal level ", a, "."],
                        }),
                        c &&
                            (0, r.jsx)(I.xJW, {
                                title: "Stacking Behavior",
                                children: (0, r.jsx)(I.q4e, {
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
                        (0, r.jsxs)(I.Kqy, {
                            gap: 8,
                            children: [
                                (0, r.jsxs)(I.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Replace One:" }),
                                        " The modal directly below is hidden (default behavior)",
                                    ],
                                }),
                                (0, r.jsxs)(I.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, r.jsx)("strong", { children: "Replace All:" }),
                                        " All modals below are hidden",
                                    ],
                                }),
                                (0, r.jsxs)(I.Text, {
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
            (0, r.jsx)(I.mzw, {
                children: (0, r.jsxs)(I.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(I.zxk, {
                            variant: "secondary",
                            text: "Close",
                            onClick: n,
                        }),
                        c &&
                            (0, r.jsx)(I.zxk, {
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
function eO(e) {
    let { transitionState: t, onClose: n } = e;
    function i(e) {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: U.modalOutlines,
            style: { padding: "24px" },
            children: t,
        });
    }
    return (0, r.jsxs)(d.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, r.jsx)("div", {
                className: U.modalOutlines,
                children: (0, r.jsx)(g.x, {
                    title: "Demo Modal",
                    subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
                    leading: (0, r.jsx)(i, {}),
                    trailing: (0, r.jsx)(i, {}),
                }),
            }),
            (0, r.jsx)("div", {
                className: U.modalOutlines,
                children: (0, r.jsx)(h.f, {
                    controls: (0, r.jsx)(i, { children: "This ModalBody renders any controls here" }),
                    children: (0, r.jsx)(i, {
                        children: "This is the main ModalBody. This area scrolls if there is enough content",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: U.modalOutlines,
                children: (0, r.jsx)(m.m, { children: (0, r.jsx)(i, { children: "This is the ModalFooter" }) }),
            }),
            (0, r.jsx)("div", {
                className: U.modalOutlines,
                children: (0, r.jsx)(p.G, {
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
function ev(e) {
    let { transitionState: t, onClose: n } = e,
        [a, o] = i.useState("md"),
        [s, l] = i.useState("Demo Modal"),
        [c, u] = i.useState("Header body copy"),
        [f, _] = i.useState(!1),
        [E, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        [T, S] = i.useState(!1),
        [A, C] = i.useState(!1);
    return (0, r.jsxs)(d.I, {
        transitionState: t,
        onClose: n,
        size: a,
        children: [
            (0, r.jsx)(g.x, {
                title: s,
                subtitle: c,
                alignCenter: f,
            }),
            (0, r.jsx)(h.f, {
                controls: E
                    ? (0, r.jsx)(I.E1j, {
                          placeholder: "Search",
                          onChange: () => null,
                          query: "",
                      })
                    : void 0,
                children: (0, r.jsxs)(I.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(I.xJW, {
                            title: "Modal Size",
                            children: (0, r.jsx)(I.q4e, {
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
                        (0, r.jsx)(I.oil, {
                            label: "Header Title",
                            onChange: l,
                            defaultValue: s,
                        }),
                        (0, r.jsx)(I.oil, {
                            label: "Header body",
                            onChange: u,
                            defaultValue: c,
                        }),
                        (0, r.jsx)(I.xJW, {
                            title: "Optional Content",
                            children: (0, r.jsxs)(I.Kqy, {
                                gap: 12,
                                children: [
                                    (0, r.jsx)(v.$q, {
                                        value: f,
                                        onChange: (e, t) => _(t),
                                        children: (0, r.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Header Align Center",
                                        }),
                                    }),
                                    (0, r.jsx)(v.$q, {
                                        value: E,
                                        onChange: (e, t) => b(t),
                                        children: (0, r.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Search Input",
                                        }),
                                    }),
                                    (0, r.jsx)(v.$q, {
                                        value: y,
                                        onChange: (e, t) => O(t),
                                        children: (0, r.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Preview Content",
                                        }),
                                    }),
                                    (0, r.jsx)(v.$q, {
                                        value: T,
                                        onChange: (e, t) => S(t),
                                        children: (0, r.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Action Bar Leading Input",
                                        }),
                                    }),
                                    (0, r.jsx)(v.$q, {
                                        value: A,
                                        onChange: (e, t) => C(t),
                                        children: (0, r.jsx)(I.Text, {
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
                (0, r.jsxs)(m.m, {
                    children: [
                        (0, r.jsx)(I.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Celebration Station",
                        }),
                        (0, r.jsx)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: "32 Members \u25CF 19 Online",
                        }),
                    ],
                }),
            (0, r.jsx)(p.G, {
                leading: T
                    ? (0, r.jsx)(p.B, {
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
function eI(e) {
    let { transitionState: t, onClose: n } = e;
    function a(e) {
        let { text: t } = e,
            [n, a] = i.useState(!1);
        return (0, r.jsx)("div", {
            style: { padding: "8px 0" },
            children: (0, r.jsx)(v.$q, {
                value: n,
                onChange: (e, t) => a(t),
                children: (0, r.jsx)(I.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
            }),
        });
    }
    return (0, r.jsxs)(_.Modal, {
        transitionState: t,
        onClose: n,
        size: "md",
        title: "Invite to server",
        input: (0, r.jsx)(I.E1j, {
            placeholder: "Search",
            onChange: () => null,
            query: "",
        }),
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.X6q, {
                    variant: "heading-lg/semibold",
                    children: "Celebration Station",
                }),
                (0, r.jsx)(I.Text, {
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
                icon: I.kBi,
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
function eT(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsx)(_.Modal, {
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
function eS(e) {
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
        _ = i.useMemo(
            () =>
                0 === o
                    ? {
                          type: "image",
                          src: G,
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
                                src: Z.Z,
                                fallbackImageSrc: G,
                                loop: !0,
                                loopAt: 2.5,
                            }
                          : 4 === o
                            ? {
                                  type: "dynamic",
                                  component: I.AX$.DEMO,
                                  props: { text: "Dynamic Content" },
                              }
                            : void 0,
            [o],
        );
    return (0, r.jsxs)(f.I, {
        transitionState: t,
        onClose: a,
        gradientColor: "nitro-pink",
        graphic: _,
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
            (0, r.jsx)(I.xJW, {
                title: "Graphic Type",
                children: (0, r.jsx)(I.q4e, {
                    value: o,
                    onChange: s,
                    options: d,
                }),
            }),
            (0, r.jsx)(I.xJW, {
                style: { paddingTop: "16px" },
                children: (0, r.jsx)(v.$q, {
                    value: l,
                    onChange: (e, t) => u(t),
                    children: (0, r.jsx)(I.Text, {
                        variant: "text-md/medium",
                        children: "Show beta badge",
                    }),
                }),
            }),
        ],
    });
}
function eA(e) {
    let { transitionState: t, onClose: n, modalCount: a = 1 } = e,
        [o, s] = i.useState("replace"),
        l = () => {
            let e = a + 1;
            (0, I.h7j)((t) => (0, r.jsx)(eA, z(W({}, t), { modalCount: e })), { stackingBehavior: o });
        },
        c = a < 3;
    return (0, r.jsx)(_.Modal, {
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
        children: (0, r.jsxs)(I.Kqy, {
            gap: 16,
            children: [
                c &&
                    (0, r.jsx)(I.xJW, {
                        title: "Stacking Behavior",
                        children: (0, r.jsx)(I.q4e, {
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
                (0, r.jsxs)(I.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsxs)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Replace One:" }),
                                " The modal directly below is hidden (default behavior)",
                            ],
                        }),
                        (0, r.jsxs)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, r.jsx)("strong", { children: "Replace All:" }),
                                " All modals below are hidden",
                            ],
                        }),
                        (0, r.jsxs)(I.Text, {
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
function eC() {
    let e = () => {
            (0, I.h7j)((e) => (0, r.jsx)(eb, W({}, e)));
        },
        t = () => {
            (0, I.h7j)((e) => (0, r.jsx)(ey, W({}, e)));
        },
        n = () => {
            (0, I.h7j)((e) => (0, r.jsx)(eO, W({}, e)));
        },
        i = () => {
            (0, I.h7j)((e) => (0, r.jsx)(ev, W({}, e)));
        },
        a = () => {
            (0, I.h7j)((e) => (0, r.jsx)(eI, W({}, e)));
        },
        o = () => {
            (0, I.h7j)((e) => (0, r.jsx)(eT, W({}, e)));
        },
        s = () => {
            (0, I.h7j)((e) => (0, r.jsx)(eS, W({}, e)));
        },
        l = () => {
            (0, I.h7j)((e) => (0, r.jsx)(eA, W({}, e)));
        },
        c = () => {
            T.Z.show({
                title: "Alert",
                body: "This is an alert",
                confirmText: "Confirm Text",
                cancelText: "Cancel Text",
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: U.section,
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Void)",
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open modal",
                        onClick: e,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Show Alert",
                        onClick: c,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open modal stacking demo",
                        onClick: t,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: U.section,
                children: [
                    (0, r.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Mana)",
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open modal section visualizer",
                        onClick: n,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open demo modal",
                        onClick: i,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open sample invite modal",
                        onClick: a,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open sample alert modal",
                        onClick: o,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open expressive modal",
                        onClick: s,
                    }),
                    (0, r.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open Mana modal stacking demo",
                        onClick: l,
                    }),
                ],
            }),
        ],
    });
}
function eN() {
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
        className: U.section,
        children: [
            (0, r.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "User Avatars",
            }),
            (0, r.jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                },
                children: e.map((e) => (0, r.jsx)(eR, { size: e }, e)),
            }),
        ],
    });
}
function eR(e) {
    let { size: t } = e,
        { user: n } = (0, u.cj)([P.default], () => ({ user: P.default.getCurrentUser() })),
        i = Number(t.split("_")[1]);
    return (0, r.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
        },
        children: [
            (0, r.jsxs)(I.X6q, {
                variant: "heading-sm/semibold",
                style: { textAlign: "center" },
                children: [i, "px"],
            }),
            (0, r.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: M.Sk.ONLINE,
            }),
            (0, r.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: M.Sk.ONLINE,
                isTyping: !0,
            }),
            (0, r.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: M.Sk.ONLINE,
                isMobile: !0,
            }),
            (0, r.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, i),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                isSpeaking: !0,
            }),
        ],
    });
}
function eP() {
    let e = (0, u.e7)([S.Z], () => S.Z.gradientPreset);
    return (0, r.jsx)(I.f6W, {
        theme: M.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, r.jsxs)("div", {
                className: o()(t, U.section),
                children: [
                    (0, r.jsx)(I.zxk, {
                        variant: "secondary",
                        text: "Button",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(I.f6W, {
                        theme: M.BR.LIGHT,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: o()(t, U.section),
                                children: [
                                    (0, r.jsx)(I.zxk, {
                                        variant: "secondary",
                                        text: "Button",
                                        fullWidth: !0,
                                    }),
                                    (0, r.jsx)(I.f6W, {
                                        theme: M.BR.DARKER,
                                        children: (e) =>
                                            (0, r.jsx)("div", {
                                                className: o()(e, U.section),
                                                children: (0, r.jsx)(I.zxk, {
                                                    variant: "secondary",
                                                    text: "Button",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                    }),
                                    (0, r.jsx)(I.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, r.jsx)("div", {
                                                className: o()(e, U.section),
                                                children: (0, r.jsx)(I.zxk, {
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
