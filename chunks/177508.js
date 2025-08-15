n.d(t, { Z: () => el }), n(704826), n(35282), n(388685), n(361932), n(187205);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(971809),
    c = n(442837),
    d = n(836459),
    u = n(680018),
    m = n(374415),
    p = n(861066),
    g = n(780842),
    h = n(179538),
    f = n(279570),
    b = n(257465),
    x = n(667202),
    _ = n(82659),
    j = n(369585),
    E = n(103866),
    C = n(213734),
    O = n(37148),
    v = n(907862),
    S = n(466590),
    T = n(681715),
    I = n(481060),
    N = n(240872),
    y = n(514361),
    A = n(705262),
    P = n(377089),
    R = n(581612),
    D = n(580747),
    Z = n(594174),
    w = n(526156),
    k = n(799071),
    L = n(554042),
    B = n(706705),
    M = n(726985),
    U = n(981631),
    V = n(231338),
    G = n(726927),
    F = n(177475),
    H = n(518797),
    z = n(691739),
    W = n(453707),
    Y = n(315416),
    K = n(715720);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function J() {
    return (0, i.jsxs)("div", {
        className: G.root,
        children: [
            (0, i.jsx)(Q, {}),
            (0, i.jsx)(ec, {}),
            (0, i.jsx)(eb, {}),
            (0, i.jsx)(ex, {}),
            (0, i.jsx)(ef, {}),
            (0, i.jsx)(eg, {}),
            (0, i.jsx)(eh, {}),
            (0, i.jsx)(ep, {}),
            (0, i.jsx)(em, {}),
            (0, i.jsx)(eI, {}),
            (0, i.jsx)(eN, {}),
            (0, i.jsx)($, {}),
            (0, i.jsx)(eA, {}),
        ],
    });
}
function Q() {
    let e = (0, D.Z)("highlight_mana_components");
    return (0, i.jsx)(I.hjN, {
        title: "Design System Controls",
        children: (0, i.jsx)(I.xJW, {
            children: (0, i.jsx)(I.j7V, {
                value: e,
                onChange: (e) => (0, R.Z)("highlight_mana_components", e),
                note: "Highlights all mana components marked with data-mana-component",
                hideBorder: !0,
                children: "Highlight Mana Components",
            }),
        }),
    });
}
function $() {
    let e = Object.keys(I.DM8);
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Notice",
            }),
            (0, i.jsx)(I.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        I.qXd,
                        {
                            color: I.DM8[e],
                            children: (0, i.jsxs)("code", {
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
    ei = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
    er = ["critical", "warning", "positive", "info"],
    es = [
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
function ea() {
    let e = (0, c.e7)([y.Z], () => y.Z.gradientPreset);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                className: G.heading,
                children: "Background Colors",
            }),
            et.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: G.palette,
                        style: {
                            backgroundColor: "var(--".concat(e, ")"),
                            padding: 24,
                        },
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: ei.map((e) =>
                                    (0, i.jsxs)(
                                        "div",
                                        {
                                            className: G.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--".concat(e, ")"),
                                            },
                                            children: [
                                                (0, i.jsx)(I.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                    children: e,
                                                }),
                                                (0, i.jsx)("hr", { className: G.sectionDivider }),
                                                es.map((e) =>
                                                    (0, i.jsx)(
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
                            (0, i.jsx)("hr", { className: G.sectionDivider }),
                            (0, i.jsx)("div", {
                                style: {
                                    display: "grid",
                                    gap: 8,
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                },
                                children: er.map((e) => {
                                    let t = "var(--text-feedback-".concat(e, ")");
                                    return (0, i.jsxs)(
                                        "div",
                                        {
                                            className: G.color,
                                            style: {
                                                padding: 16,
                                                background: "var(--background-feedback-".concat(e, ")"),
                                            },
                                            children: [
                                                (0, i.jsx)(I.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "header-secondary",
                                                }),
                                                (0, i.jsxs)(I.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(I.Text, {
                                                            variant: "text-xs/semibold",
                                                            style: { color: t },
                                                            children: ["background-feedback-", e],
                                                        }),
                                                        (0, i.jsx)(I.Text, {
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
            null !== e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.X6q, {
                            variant: "heading-xl/semibold",
                            className: G.heading,
                            children: "Gradient Background Colors",
                        }),
                        (0, i.jsx)("div", {
                            className: "custom-theme-background",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(6, 1fr)",
                                transform: "translateZ(0)",
                            },
                            children: en.map((e) =>
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: G.palette,
                                        style: {
                                            background: "var(--".concat(e, ")"),
                                            height: 400,
                                        },
                                        children: (0, i.jsx)(I.Text, {
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
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                className: G.heading,
                children: "Scales",
            }),
            ee.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: G.palette,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-lg/semibold",
                                children: e,
                            }),
                            (0, i.jsx)("div", {
                                className: G.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: G.color,
                                            style: {
                                                background: "var(--"
                                                    .concat(e.replace("_", "-"), "-")
                                                    .concat(n + 1, ")"),
                                            },
                                            children: (0, i.jsx)(I.f6W, {
                                                theme: n < 50 ? "light" : "dark",
                                                children: (t) =>
                                                    (0, i.jsxs)(I.Text, {
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.Z, {
                parentSetting: M.s6.DESIGN_SYSTEMS,
                settingsSection: U.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: "Components",
                        component: () => (0, i.jsx)(J, {}),
                        setting: M.s6.DESIGN_SYSTEMS_COMPONENTS,
                    },
                    {
                        title: "Colors",
                        component: () => (0, i.jsx)(ea, {}),
                        setting: M.s6.DESIGN_SYSTEMS_COLORS,
                    },
                    {
                        title: "Animations",
                        component: () => (0, i.jsx)(B.Z, {}),
                        setting: M.s6.ANIMATION_TESTING,
                    },
                    {
                        title: "Text Playground",
                        component: () => (0, i.jsx)(L.Z, {}),
                        setting: M.s6.TEXT_PLAYGROUND,
                    },
                    {
                        title: "Text Componnts",
                        component: () => (0, i.jsx)(k.Z, {}),
                        setting: M.s6.TEXT_COMPONENTS,
                    },
                ],
            }),
            (0, i.jsx)("div", {
                className: G.themes,
                children: (0, i.jsx)(A.ZP, {
                    type: A.yH.SETTINGS,
                    children: (0, i.jsx)(A.ZP.Basic, { className: G.themeSelectionGroup }),
                }),
            }),
        ],
    });
}
function eo(e) {
    var { component: t, showLoadingAnimation: n } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++)
                    (n = s[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["component", "showLoadingAnimation"]);
    let [a, l] = r.useState(!1),
        o = r.useRef(-1);
    return (
        r.useEffect(
            () => (
                a &&
                    n &&
                    (o.current = setTimeout(() => {
                        l(!1);
                    }, 3000)),
                () => {
                    o.current >= 0 && clearTimeout(o.current);
                }
            ),
            [a, n],
        ),
        (0, i.jsx)(
            t,
            X(q({}, s), {
                loading: n ? a : void 0,
                onClick: () => l(!a),
            }),
        )
    );
}
function ec() {
    let [e, t] = r.useState("md"),
        [n, s] = r.useState("start"),
        [a, o] = r.useState(!0),
        c = [
            "primary",
            "secondary",
            "critical-primary",
            "critical-secondary",
            "active",
            "overlay-primary",
            "overlay-secondary",
        ],
        d = [...c, "expressive"].map((t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(
                        eo,
                        {
                            component: u.z,
                            variant: t,
                            text: "".concat((0, l.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? I.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: a,
                        },
                        t + e,
                    ),
                    (0, i.jsx)(
                        eo,
                        {
                            component: u.z,
                            variant: t,
                            text: "".concat((0, l.capitalize)(t), " ").concat(e.toUpperCase()),
                            size: e,
                            icon: "none" !== n ? I.gw7 : void 0,
                            iconPosition: n,
                            showLoadingAnimation: a,
                            disabled: !0,
                        },
                        t + e + "disabled",
                    ),
                ],
            }),
        ),
        g = [...c, "icon-only"].map((t) =>
            (0, i.jsx)(
                eo,
                {
                    component: p.h,
                    variant: t,
                    icon: I.gw7,
                    size: e,
                    "aria-label": "".concat(t, " ").concat(e),
                    showLoadingAnimation: a,
                },
                t + e,
            ),
        ),
        f = ["primary", "secondary", "always-white", "critical"].map((e) =>
            (0, i.jsx)(
                r.Fragment,
                {
                    children: (0, i.jsx)(h.A, {
                        variant: e,
                        text: "Text button",
                    }),
                },
                e,
            ),
        );
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Buttons",
            }),
            (0, i.jsxs)(eu, {
                title: "Button Options",
                children: [
                    (0, i.jsx)(I.xJW, {
                        title: "Button size",
                        children: (0, i.jsx)(I.FXm, {
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
                    (0, i.jsx)(I.xJW, {
                        title: "Icon position",
                        children: (0, i.jsx)(I.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return s(t);
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
                    (0, i.jsx)(I.xJW, {
                        title: "Loading animation",
                        children: (0, i.jsx)(I.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return o("on" === t);
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
                            value: a ? "on" : "off",
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 16,
                },
                children: [f, d, g],
            }),
            (0, i.jsxs)(I.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Button Groups",
                    }),
                    (0, i.jsx)(I.Text, {
                        variant: "text-lg/medium",
                        children: "Horizontal",
                    }),
                    (0, i.jsxs)(I.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, i.jsxs)(I.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsxs)(m.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(eo, {
                                                component: u.z,
                                                variant: "secondary",
                                                text: "Cancel",
                                                showLoadingAnimation: a,
                                            }),
                                            (0, i.jsx)(eo, {
                                                component: u.z,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: a,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(m.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(eo, {
                                                component: u.z,
                                                variant: "primary",
                                                text: "Submit",
                                                showLoadingAnimation: a,
                                            }),
                                            (0, i.jsx)(eo, {
                                                component: p.h,
                                                variant: "secondary",
                                                icon: I.gw7,
                                                "aria-label": "Clyde",
                                                showLoadingAnimation: a,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(I.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(m.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, i.jsx)(eo, {
                                            component: u.z,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: a,
                                        }),
                                        (0, i.jsx)(eo, {
                                            component: u.z,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: a,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(I.Text, {
                        variant: "text-lg/medium",
                        children: "Vertical",
                    }),
                    (0, i.jsxs)(I.Kqy, {
                        gap: 16,
                        direction: "horizontal",
                        children: [
                            (0, i.jsx)(I.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(m.h, {
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, i.jsx)(eo, {
                                            component: u.z,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: a,
                                        }),
                                        (0, i.jsx)(eo, {
                                            component: u.z,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: a,
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(I.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(m.h, {
                                    fullWidth: !0,
                                    direction: "vertical",
                                    size: e,
                                    children: [
                                        (0, i.jsx)(eo, {
                                            component: u.z,
                                            variant: "secondary",
                                            text: "Cancel",
                                            showLoadingAnimation: a,
                                        }),
                                        (0, i.jsx)(eo, {
                                            component: u.z,
                                            variant: "primary",
                                            text: "Submit",
                                            showLoadingAnimation: a,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(ed, { buttonSize: e }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let { buttonSize: t } = e,
        [n, s] = r.useState(!1);
    return (0, i.jsxs)(I.Kqy, {
        gap: 16,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "PlayButton",
            }),
            (0, i.jsx)(I.Kqy, {
                direction: "horizontal",
                gap: 16,
                children: ["dark", "mid", "light"].map((e) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: G.video,
                            "data-luminance": e,
                            children: (0, i.jsx)(g.J, {
                                size: t,
                                playing: n,
                                onClick: () => s(!n),
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function eu(e) {
    let { children: t, title: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsxs)(I.Kqy, {
        direction: "vertical",
        gap: 0,
        padding: 16,
        className: G.floatingControls,
        children: [
            (0, i.jsxs)(I.Kqy, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                justify: "space-between",
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: n,
                    }),
                    (0, i.jsx)(f.Q, {
                        icon: s ? I.hic : I.sXD,
                        onClick: () => l(!s),
                        pressed: s,
                        "aria-label": "Show controls",
                    }),
                ],
            }),
            (0, i.jsx)(I.Kqy, {
                gap: 16,
                className: a()(G.floatingControlsContent, { [G.floatingControlsContentHidden]: !s }),
                children: t,
            }),
        ],
    });
}
function em() {
    let [e, t] = r.useState("1");
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "TabBar",
            }),
            (0, i.jsxs)(I.njP, {
                type: "top",
                look: "brand",
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: G.tabBar,
                children: [
                    (0, i.jsx)(I.njP.Item, {
                        id: "1",
                        children: "Tab 1",
                    }),
                    (0, i.jsx)(I.njP.Item, {
                        id: "2",
                        children: "Tab 2",
                    }),
                    (0, i.jsx)(I.njP.Item, {
                        id: "3",
                        children: "Tab 3",
                    }),
                ],
            }),
            (0, i.jsxs)(I.Text, {
                variant: "text-md/medium",
                children: ["Selected tab: ", e],
            }),
        ],
    });
}
function ep() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Context Menus",
            }),
            (0, i.jsx)("span", {
                children: (0, i.jsx)(I.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(I.v2r, {
                            navId: "demo",
                            "aria-label": "Demo Actions",
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(I.kSQ, {
                                    label: "Basic items",
                                    children: [
                                        (0, i.jsx)(I.sNh, {
                                            id: "first",
                                            label: "An option",
                                        }),
                                        (0, i.jsx)(I.sNh, {
                                            id: "second",
                                            label: "An option with an icon",
                                            icon: I.kBi,
                                        }),
                                        (0, i.jsxs)(I.sNh, {
                                            id: "item-with-submenu",
                                            label: "Item with submenu",
                                            children: [
                                                (0, i.jsx)(I.sNh, {
                                                    id: "subitem-1",
                                                    label: "Subitem 1",
                                                }),
                                                (0, i.jsx)(I.sNh, {
                                                    id: "subitem-2",
                                                    label: "Subitem 2",
                                                }),
                                                (0, i.jsx)(I.sNh, {
                                                    id: "subitem-3",
                                                    label: "Subitem 3",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(I.kSQ, {
                                    label: "Inputs",
                                    children: [
                                        (0, i.jsx)(I.S89, {
                                            id: "checkable",
                                            label: "Checkbox",
                                            checked: n,
                                            action: () => s(!n),
                                        }),
                                        (0, i.jsx)(I.k5B, {
                                            id: "radio-one",
                                            group: "a-group",
                                            label: "Radio 1",
                                            action: () => t(1),
                                            checked: 1 === e,
                                        }),
                                        (0, i.jsx)(I.k5B, {
                                            id: "radio-two",
                                            group: "a-group",
                                            label: "Radio 2",
                                            action: () => t(2),
                                            checked: 2 === e,
                                        }),
                                        (0, i.jsx)(I.k5B, {
                                            id: "radio-three",
                                            group: "a-group",
                                            label: "Radio 3",
                                            action: () => t(3),
                                            checked: 3 === e,
                                        }),
                                        (0, i.jsx)(I.II_, {
                                            id: "slider",
                                            label: "Slider",
                                            control: (e, t) =>
                                                (0, i.jsx)(I._wy, {
                                                    ref: t,
                                                    value: a,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => l(e),
                                                    "aria-label": "Slider",
                                                }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(I.Clw, {}),
                                (0, i.jsx)(I.sNh, {
                                    id: "danger",
                                    label: "A destructive option",
                                    color: "danger",
                                    icon: I.XHJ,
                                }),
                            ],
                        }),
                    children: () =>
                        (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Toggle context menu",
                            buttonRef: d,
                            onClick: () => c(!o),
                        }),
                }),
            }),
        ],
    });
}
function eg() {
    let [e, t] = r.useState(I.FGA.PRIMARY),
        n = r.useMemo(
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
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Tooltips",
            }),
            (0, i.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                children: "Legacy Tooltips",
            }),
            (0, i.jsx)(I.xJW, {
                title: "Color",
                children: (0, i.jsx)(I.q4e, {
                    value: e,
                    onChange: t,
                    options: n,
                }),
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, i.jsx)(I.ua7, {
                        color: e,
                        text: "Here's top aligned tooltip text!",
                        position: "top",
                        children: (e) =>
                            (0, i.jsx)(
                                I.zxk,
                                q(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the top",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, i.jsx)(I.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "left",
                        children: (e) =>
                            (0, i.jsx)(
                                I.zxk,
                                q(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the left",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, i.jsx)(I.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: "bottom",
                        children: (e) =>
                            (0, i.jsx)(
                                I.zxk,
                                q(
                                    {
                                        variant: "primary",
                                        text: "Tooltip on the bottom",
                                    },
                                    e,
                                ),
                            ),
                    }),
                    (0, i.jsx)(I.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: "right",
                        children: (e) =>
                            (0, i.jsx)(
                                I.zxk,
                                q(
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
            (0, i.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "New Mana Tooltips",
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, i.jsx)(T.u, {
                        text: "New Mana Tooltip with animations!",
                        position: "top",
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Top)",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Left positioned animated tooltip",
                        position: "left",
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Left)",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Bottom positioned animated tooltip",
                        position: "bottom",
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Bottom)",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Right positioned animated tooltip",
                        position: "right",
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Mana Tooltip (Right)",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod non proident amo.",
                        position: "right",
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Three lines",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Tooltip Caret API Examples",
            }),
            (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                style: {
                    marginTop: 16,
                    marginBottom: 8,
                },
                children: "Vertical Positions",
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                },
                children: [
                    (0, i.jsx)(T.u, {
                        text: "Top with start",
                        position: "top",
                        caretConfig: { align: "start" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Top - Start",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Top with center",
                        position: "top",
                        caretConfig: { align: "center" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Top - Center",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Top with end",
                        position: "top",
                        caretConfig: { align: "end" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Top - End",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Bottom with start",
                        position: "bottom",
                        caretConfig: { align: "start" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Bottom - Start",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Bottom with center",
                        position: "bottom",
                        caretConfig: { align: "center" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Bottom - Center",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Bottom with end",
                        position: "bottom",
                        caretConfig: { align: "end" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Bottom - End",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                style: { marginBottom: 8 },
                children: "Horizontal Positions",
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                },
                children: [
                    (0, i.jsx)(T.u, {
                        text: "Left with center",
                        position: "left",
                        caretConfig: { align: "center" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Left - Center",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Right with center",
                        position: "right",
                        caretConfig: { align: "center" },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Right - Center",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                style: { marginBottom: 8 },
                children: "Custom Offset",
            }),
            (0, i.jsx)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: (0, i.jsx)(T.u, {
                    text: "Bottom with custom",
                    position: "bottom",
                    caretConfig: {
                        align: "custom",
                        customOffset: 30,
                    },
                    children: (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Custom Offset",
                    }),
                }),
            }),
            (0, i.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Tooltip Delays",
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, i.jsx)(T.u, {
                        text: "No delay (immediate)",
                        delay: 0,
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "No Delay",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Short delay (500ms)",
                        delay: 500,
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Short Delay",
                        }),
                    }),
                    (0, i.jsx)(T.u, {
                        text: "Long delay (1000ms)",
                        delay: 1000,
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Long Delay",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(I.X6q, {
                variant: "heading-lg/semibold",
                style: { marginTop: 32 },
                children: "Rich Tooltips",
            }),
            (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                },
                children: [
                    (0, i.jsx)(T.i_, {
                        title: "Title goes here",
                        body: "Body copy goes in this section. Meow.",
                        position: "top",
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Rich Tooltip (No Graphic)",
                        }),
                    }),
                    (0, i.jsx)(T.i_, {
                        title: "With Graphic Asset",
                        body: "This tooltip includes a graphic element on the left side",
                        asset: (0, i.jsx)("img", {
                            src: H.Z,
                            alt: "Graphic slot 48px",
                        }),
                        position: "top",
                        children: (0, i.jsx)(I.zxk, {
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
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(!1),
        [o, c] = r.useState(!1),
        [d, u] = r.useState(!1),
        [m, p] = r.useState(!1),
        [g, h] = r.useState(!1),
        [f, b] = r.useState(!1),
        [x, _] = r.useState(!1),
        [j, E] = r.useState(!1),
        [C, O] = r.useState(!1),
        [T, N] = r.useState(!1),
        [y, A] = r.useState(!1),
        [P, R] = r.useState(!1),
        [D, Z] = r.useState(!1),
        [w, k] = r.useState(!1),
        [L, B] = r.useState(!1),
        [M, U] = r.useState(!1),
        [V, F] = r.useState(!1),
        [H, z] = r.useState(!1),
        q = r.useRef(null),
        X = r.useRef(null),
        J = r.useRef(null),
        Q = r.useRef(null),
        $ = r.useRef(null),
        ee = r.useRef(null),
        et = r.useRef(null),
        en = r.useRef(null),
        ei = r.useRef(null),
        er = r.useRef(null),
        es = r.useRef(null),
        ea = r.useRef(null),
        el = r.useRef(null),
        eo = r.useRef(null),
        ec = r.useRef(null),
        ed = r.useRef(null),
        eu = r.useRef(null),
        em = r.useRef(null),
        ep = r.useRef(null),
        eg = r.useRef(null),
        eh = r.useCallback(() => {
            t(!1),
                s(!1),
                l(!1),
                c(!1),
                u(!1),
                p(!1),
                h(!1),
                b(!1),
                _(!1),
                E(!1),
                O(!1),
                N(!1),
                A(!1),
                R(!1),
                Z(!1),
                k(!1),
                B(!1),
                U(!1),
                F(!1),
                z(!1);
        }, []);
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "Popovers",
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: q,
                shouldShow: e,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Body",
                size: "sm",
                asset: (0, i.jsx)("img", {
                    src: Y.Z,
                    alt: "Small placeholder",
                }),
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: X,
                shouldShow: n,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Body",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: J,
                shouldShow: a,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                actions: [
                    {
                        text: "Button",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: Q,
                shouldShow: o,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Ipsum Dolor",
                body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "new",
                actions: [
                    {
                        text: "Button",
                        onClick: eh,
                    },
                ],
                textLink: {
                    text: "Learn More",
                    link: "https://discord.com",
                    external: !0,
                },
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: $,
                shouldShow: d,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Header",
                body: "Body",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "new",
                actions: [
                    {
                        text: "Primary",
                        onClick: eh,
                        variant: "primary",
                    },
                    {
                        text: "Secondary",
                        onClick: eh,
                        variant: "secondary",
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ee,
                shouldShow: m,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "No Actions",
                body: "This popover has no action buttons, just content to display.",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "new",
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: et,
                shouldShow: g,
                onRequestClose: eh,
                caretConfig: {
                    position: "top",
                    align: "end",
                },
                title: "Custom Caret API",
                body: "Using CaretConfig with END placement",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "new",
                actions: [
                    {
                        text: "Got it",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: en,
                shouldShow: f,
                onRequestClose: eh,
                caretConfig: {
                    position: "left",
                    align: "start",
                },
                title: "Left Side Caret",
                body: "Caret positioned on the left side at start",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "early_access",
                actions: [
                    {
                        text: "Close",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ei,
                shouldShow: x,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "custom",
                    customOffset: 50,
                },
                title: "Custom Offset",
                body: "Caret positioned 50px from center with custom offset",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "beta",
                actions: [
                    {
                        text: "Amazing!",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: er,
                shouldShow: j,
                onRequestClose: eh,
                position: "right",
                caretConfig: {
                    position: "left",
                    align: "center",
                },
                title: "Left Center Positioning",
                body: "Popover appears to the right with caret centered on the left side",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                badge: "new",
                actions: [
                    {
                        text: "Perfect!",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: es,
                shouldShow: C,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Purple Gradient",
                body: "This popover has a beautiful purple gradient background",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                gradientColor: "purple",
                badge: "new",
                actions: [
                    {
                        text: "Looks Great!",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ea,
                shouldShow: T,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Blue Gradient",
                body: "This popover showcases the blue gradient option",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                gradientColor: "blue",
                badge: "beta",
                actions: [
                    {
                        text: "Nice!",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: el,
                shouldShow: y,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Nitro Pink Gradient",
                body: "Experience the premium nitro-pink gradient effect",
                asset: (0, i.jsx)("img", {
                    src: W.Z,
                    alt: "Medium placeholder",
                }),
                gradientColor: "nitro-pink",
                textLink: {
                    text: "Learn about Nitro",
                    link: "https://discord.com/nitro",
                    external: !0,
                },
                actions: [
                    {
                        text: "Get Nitro",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: eo,
                shouldShow: P,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Voice Filters",
                body: "Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.",
                asset: (0, i.jsx)("img", {
                    src: K.Z,
                    alt: "Voice Filters",
                }),
                badge: "new",
                gradientColor: "purple",
                actions: [
                    {
                        text: "Try it now",
                        onClick: eh,
                    },
                ],
            }),
            (0, i.jsx)(v.Mb, {
                targetElementRef: ec,
                shouldShow: D,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "With Video Asset",
                body: "Click the video to view it in the media viewer!",
                assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                badge: "new",
                gradientColor: "blue",
                action: {
                    text: "Learn More",
                    onClick: eh,
                },
            }),
            (0, i.jsx)(v.Mb, {
                targetElementRef: ed,
                shouldShow: w,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "With different preview",
                body: "Click the video to view it in the media viewer!",
                previewUrl: "https://cdn.discordapp.com/assets/server_products/storefront/default-header.mov",
                assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                badge: "new",
                gradientColor: "blue",
                action: {
                    text: "Learn More",
                    onClick: eh,
                },
            }),
            (0, i.jsx)(S.e, {
                targetElementRef: eu,
                shouldShow: L,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                steps: [
                    {
                        title: "Welcome to Quests!",
                        body: "Journey to Quest Home in Discover to start earning Orbs.",
                        asset: (0, i.jsx)("img", {
                            src: W.Z,
                            alt: "Medium placeholder",
                        }),
                        badge: "new",
                        action: { text: "Next" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Earn Rewards",
                        body: "Complete quests to earn Orbs and unlock exclusive rewards.",
                        asset: (0, i.jsx)("img", {
                            src: K.Z,
                            alt: "Quest Rewards",
                        }),
                        action: { text: "Next" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Quest Complete!",
                        body: "You're all set to start your quest adventure. Good luck!",
                        asset: (0, i.jsx)("img", {
                            src: W.Z,
                            alt: "Medium placeholder",
                        }),
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
            (0, i.jsx)(v.J2, {
                targetElementRef: em,
                shouldShow: M,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                title: "Experience Voice Filters",
                body: "Enhanced voice quality with our latest filtering technology. Try the expressive button!",
                asset: (0, i.jsx)("img", {
                    src: K.Z,
                    alt: "Voice Filters",
                }),
                badge: "new",
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: "Subscribe to Nitro",
                        onClick: eh,
                        variant: "expressive",
                    },
                ],
            }),
            (0, i.jsx)(S.e, {
                targetElementRef: ep,
                shouldShow: V,
                onRequestClose: eh,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                steps: [
                    {
                        title: "Discover Features",
                        body: "Explore amazing new capabilities in Discord.",
                        asset: (0, i.jsx)("img", {
                            src: W.Z,
                            alt: "Medium placeholder",
                        }),
                        badge: "new",
                        action: { text: "Continue" },
                        gradientColor: "purple",
                    },
                    {
                        title: "Unlock Potential",
                        body: "Learn how to make the most of your Discord experience.",
                        asset: (0, i.jsx)("img", {
                            src: K.Z,
                            alt: "Features",
                        }),
                        action: { text: "Almost There" },
                        gradientColor: "blue",
                    },
                    {
                        title: "Ready to Go!",
                        body: "You're all set! Notice the expressive button animation.",
                        asset: (0, i.jsx)("img", {
                            src: W.Z,
                            alt: "Medium placeholder",
                        }),
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
            (0, i.jsx)(v.Mb, {
                targetElementRef: eg,
                shouldShow: H,
                onRequestClose: eh,
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
                    onClick: eh,
                    variant: "expressive",
                },
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Size Examples",
                    }),
                    (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Small Content",
                                buttonRef: q,
                                onClick: () => {
                                    eh(), t(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Medium Content",
                                buttonRef: X,
                                onClick: () => {
                                    eh(), s(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                buttonRef: J,
                                onClick: () => {
                                    eh(), l(!0);
                                },
                                text: "No Asset",
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Actions Examples",
                    }),
                    (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "External Link",
                                buttonRef: Q,
                                onClick: () => {
                                    eh(), c(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Two Actions",
                                buttonRef: $,
                                onClick: () => {
                                    eh(), u(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                buttonRef: ee,
                                onClick: () => {
                                    eh(), p(!0);
                                },
                                text: "No Actions",
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Caret API Examples",
                    }),
                    (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Custom Caret API",
                                buttonRef: et,
                                onClick: () => {
                                    eh(), h(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Left Side Caret",
                                buttonRef: en,
                                onClick: () => {
                                    eh(), b(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Custom Offset",
                                buttonRef: ei,
                                onClick: () => {
                                    eh(), _(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Left Center",
                                buttonRef: er,
                                onClick: () => {
                                    eh(), E(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Gradient Examples",
                    }),
                    (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Purple Gradient",
                                buttonRef: es,
                                onClick: () => {
                                    eh(), O(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Blue Gradient",
                                buttonRef: ea,
                                onClick: () => {
                                    eh(), N(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Nitro Pink Gradient",
                                buttonRef: el,
                                onClick: () => {
                                    eh(), A(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "With Asset",
                    }),
                    (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Voice Filters",
                                buttonRef: eo,
                                onClick: () => {
                                    eh(), R(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Video Media Viewer",
                                buttonRef: ec,
                                onClick: () => {
                                    eh(), Z(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Video with Different Preview",
                                buttonRef: ed,
                                onClick: () => {
                                    eh(), k(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Multi-Step",
                    }),
                    (0, i.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Multi-Step",
                            buttonRef: eu,
                            onClick: () => {
                                eh(), B(!0);
                            },
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Expressive",
                    }),
                    (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginTop: 8,
                        },
                        children: [
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Expressive Popover",
                                buttonRef: em,
                                onClick: () => {
                                    eh(), U(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Expressive Multi-Step",
                                buttonRef: ep,
                                onClick: () => {
                                    eh(), F(!0);
                                },
                            }),
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Expressive Video",
                                buttonRef: eg,
                                onClick: () => {
                                    eh(), z(!0);
                                },
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ef() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState("auto");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: G.section,
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Checkboxes",
                    }),
                    (0, i.jsx)(I.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox input",
                        }),
                    }),
                    (0, i.jsx)(I.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Disabled checkbox",
                        }),
                    }),
                    (0, i.jsx)(I.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Read-only checkbox",
                        }),
                    }),
                    (0, i.jsx)(I.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: I.XZJ.Types.ROW,
                        children: (0, i.jsx)(I.Text, {
                            variant: "text-md/medium",
                            children: "Checkbox row",
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: G.section,
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Switches",
                    }),
                    (0, i.jsx)(I.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: "FormSwitch with a label",
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: G.section,
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Radio Buttons",
                    }),
                    (0, i.jsx)(I.xJW, {
                        children: (0, i.jsx)(I.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return l(t);
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
                            value: a,
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: G.section,
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Slider",
                    }),
                    (0, i.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Standard slider",
                            }),
                            (0, i.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Sticky markers",
                            }),
                            (0, i.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform markers",
                            }),
                            (0, i.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Non-uniform equidistant markers",
                            }),
                            (0, i.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "No markers",
                            }),
                            (0, i.jsx)(I.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.slider,
                        children: [
                            (0, i.jsx)(I.Text, {
                                variant: "text-md/medium",
                                children: "Mini slider",
                            }),
                            (0, i.jsx)(I.iRW, {
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
function eb() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [a, l] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "SearchableSelect",
            }),
            (0, i.jsx)(I.VcW, {
                placeholder: "Single select",
                value: e,
                onChange: (e) => t(e),
                options: o.G,
            }),
            (0, i.jsx)(I.VcW, {
                placeholder: "Single select (clearable)",
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: o.G,
            }),
            (0, i.jsx)(I.VcW, {
                placeholder: "Multi select",
                multi: !0,
                value: a,
                onChange: (e) => l(e),
                options: o.G,
            }),
            (0, i.jsx)(I.VcW, {
                placeholder: "Multi select (clearable)",
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: o.G,
            }),
            (0, i.jsx)(I.VcW, {
                placeholder: "Multi select (custom pills)",
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: G.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)("div", {
                        style: {
                            padding: 8,
                            border: "1px solid var(--bg-brand)",
                            borderRadius: 8,
                        },
                        children: (0, i.jsx)(I.Text, {
                            variant: "text-md/bold",
                            children: e.label,
                        }),
                    }),
            }),
        ],
    });
}
function ex() {
    let [e, t] = r.useState(""),
        [n, s] = r.useState(""),
        [a, l] = r.useState(""),
        o = (0, P.U)("UserSettingsDesignSystems");
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "TextInput",
            }),
            (0, i.jsx)(I.xJW, {
                title: "Search",
                children: (0, i.jsxs)(I.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(I.E1j, {
                            placeholder: "Search...",
                            onChange: (e) => l(e),
                            query: a,
                            onClear: () => l(""),
                        }),
                        (0, i.jsx)(I.E1j, {
                            size: "sm",
                            placeholder: "Search...",
                            onChange: (e) => l(e),
                            query: a,
                            onClear: () => l(""),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(I.xJW, {
                title: "Disabled",
                disabled: !0,
                children: (0, i.jsx)(I.oil, {
                    placeholder: "Disabled",
                    disabled: !0,
                }),
            }),
            (0, i.jsx)(I.xJW, {
                title: "Error",
                children: (0, i.jsx)(I.oil, {
                    required: !0,
                    error: "This must have a value",
                }),
            }),
            (0, i.jsx)(I.xJW, {
                title: "Error",
                children: (0, i.jsx)(I.oil, {
                    defaultValue: "Not a valid value",
                    error: "This has an error.",
                }),
            }),
            (0, i.jsx)(I.xJW, {
                title: "minLength",
                children: (0, i.jsx)(I.oil, {
                    minLength: 6,
                    value: e,
                    onChange: t,
                    placeholder: "Enter at least 6 characters",
                }),
            }),
            (0, i.jsx)(I.xJW, {
                title: "Read only",
                children: (0, i.jsx)(I.oil, {
                    value: "Read-only, not-editable field",
                    editable: !1,
                }),
            }),
            (0, i.jsx)(I.xJW, {
                title: "Input with a label",
                children: (0, i.jsx)(I.oil, {
                    placeholder: "Real placeholder",
                    value: e,
                    onChange: t,
                }),
            }),
            o &&
                (0, i.jsx)(I.xJW, {
                    title: "Leading and Trailing",
                    children: (0, i.jsxs)(I.Kqy, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(I.Wn, {
                                messageType: I.QYI.WARNING,
                                children: "Leading and trailing accessories are not yet supported in the public API.",
                            }),
                            (0, i.jsxs)(I.Kqy, {
                                children: [
                                    (0, i.jsx)(I.oil, {
                                        leading: I.qJs,
                                        placeholder: "Create Channel",
                                        value: e,
                                        onChange: t,
                                    }),
                                    (0, i.jsx)(I.oil, {
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
            (0, i.jsx)(I.xJW, {
                title: "Text area",
                children: (0, i.jsx)(I.Kx8, {
                    placeholder: "Text area placeholder",
                    showCharacterCount: !0,
                    value: n,
                    onChange: s,
                }),
            }),
        ],
    });
}
function e_(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [a, l] = r.useState(I.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? G.modalOutlines : "";
    return (0, i.jsxs)(I.Y0X, {
        transitionState: t,
        size: a,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, i.jsx)(I.xBx, {
                className: d,
                children: (0, i.jsx)(I.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal",
                }),
            }),
            (0, i.jsx)(I.hzk, {
                className: d,
                children: (0, i.jsxs)(I.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(I.xJW, {
                            title: "Modal Size",
                            children: (0, i.jsx)(I.q4e, {
                                value: a,
                                onChange: l,
                                options: Object.entries(I.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n,
                                    };
                                }),
                            }),
                        }),
                        (0, i.jsx)(I.hjN, {
                            title: "Options",
                            children: (0, i.jsxs)(I.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(I.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Section Outlines",
                                        }),
                                    }),
                                    (0, i.jsx)(I.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(I.Text, {
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
            (0, i.jsx)(I.mzw, {
                className: d,
                children: (0, i.jsxs)(I.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(I.zxk, {
                                variant: "secondary",
                                text: "Secondary Action",
                            }),
                        (0, i.jsx)(I.zxk, {
                            variant: "primary",
                            text: "Close",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function ej(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [a, l] = r.useState("replace"),
        o = s < 3;
    return (0, i.jsxs)(I.Y0X, {
        transitionState: t,
        size: 1 === s ? I.CgR.LARGE : 2 === s ? I.CgR.MEDIUM : I.CgR.SMALL,
        parentComponent: "UserSettingsDesignSystem",
        children: [
            (0, i.jsx)(I.xBx, {
                children: (0, i.jsx)(I.X6q, {
                    variant: "heading-xl/semibold",
                    children: "Modal Stacking Demo",
                }),
            }),
            (0, i.jsx)(I.hzk, {
                children: (0, i.jsxs)(I.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsxs)(I.Text, {
                            variant: "text-md/medium",
                            children: ["This is modal level ", s, "."],
                        }),
                        o &&
                            (0, i.jsx)(I.xJW, {
                                title: "Stacking Behavior",
                                children: (0, i.jsx)(I.q4e, {
                                    value: a,
                                    onChange: l,
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
                        (0, i.jsxs)(I.Kqy, {
                            gap: 8,
                            children: [
                                (0, i.jsxs)(I.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, i.jsx)("strong", { children: "Replace One:" }),
                                        " The modal directly below is hidden (default behavior)",
                                    ],
                                }),
                                (0, i.jsxs)(I.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, i.jsx)("strong", { children: "Replace All:" }),
                                        " All modals below are hidden",
                                    ],
                                }),
                                (0, i.jsxs)(I.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        (0, i.jsx)("strong", { children: "Stack:" }),
                                        " The modal directly below remains visible",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(I.mzw, {
                children: (0, i.jsxs)(I.Kqy, {
                    direction: "horizontal",
                    justify: "end",
                    gap: 8,
                    children: [
                        (0, i.jsx)(I.zxk, {
                            variant: "secondary",
                            text: "Close",
                            onClick: n,
                        }),
                        o &&
                            (0, i.jsx)(I.zxk, {
                                variant: "primary",
                                text: "Open Next Modal",
                                onClick: () => {
                                    let e = s + 1;
                                    (0, I.h7j)((t) => (0, i.jsx)(ej, X(q({}, t), { modalCount: e })), {
                                        stackingBehavior: a,
                                    });
                                },
                            }),
                    ],
                }),
            }),
        ],
    });
}
function eE(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
            className: G.modalOutlines,
            style: { padding: "24px" },
            children: t,
        });
    }
    return (0, i.jsxs)(b.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)("div", {
                className: G.modalOutlines,
                children: (0, i.jsx)(O.x, {
                    title: "Demo Modal",
                    subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {}),
                }),
            }),
            (0, i.jsx)("div", {
                className: G.modalOutlines,
                children: (0, i.jsx)(E.f, {
                    controls: (0, i.jsx)(r, { children: "This ModalBody renders any controls here" }),
                    children: (0, i.jsx)(r, {
                        children: "This is the main ModalBody. This area scrolls if there is enough content",
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: G.modalOutlines,
                children: (0, i.jsx)(C.m, { children: (0, i.jsx)(r, { children: "This is the ModalFooter" }) }),
            }),
            (0, i.jsx)("div", {
                className: G.modalOutlines,
                children: (0, i.jsx)(j.G, {
                    leading: (0, i.jsx)(r, { children: "ModalActionBar leading" }),
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
function eC(e) {
    let { transitionState: t, onClose: n } = e,
        [s, a] = r.useState("md"),
        [l, o] = r.useState("Demo Modal"),
        [c, d] = r.useState("Header body copy"),
        [u, m] = r.useState(!1),
        [p, g] = r.useState(!1),
        [h, f] = r.useState(!1),
        [x, _] = r.useState(!1),
        [v, S] = r.useState(!1);
    return (0, i.jsxs)(b.I, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(O.x, {
                title: l,
                subtitle: c,
                alignCenter: u,
            }),
            (0, i.jsx)(E.f, {
                controls: p
                    ? (0, i.jsx)(I.E1j, {
                          placeholder: "Search",
                          onChange: () => null,
                          query: "",
                      })
                    : void 0,
                children: (0, i.jsxs)(I.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(I.xJW, {
                            title: "Modal Size",
                            children: (0, i.jsx)(I.q4e, {
                                value: s,
                                onChange: a,
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
                        (0, i.jsx)(I.xJW, {
                            title: "Header Title",
                            children: (0, i.jsx)(I.oil, {
                                onChange: o,
                                defaultValue: l,
                            }),
                        }),
                        (0, i.jsx)(I.xJW, {
                            title: "Header body",
                            children: (0, i.jsx)(I.oil, {
                                onChange: d,
                                defaultValue: c,
                            }),
                        }),
                        (0, i.jsx)(I.xJW, {
                            title: "Optional Content",
                            children: (0, i.jsxs)(I.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(I.XZJ, {
                                        value: u,
                                        onChange: (e, t) => m(t),
                                        children: (0, i.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Header Align Center",
                                        }),
                                    }),
                                    (0, i.jsx)(I.XZJ, {
                                        value: p,
                                        onChange: (e, t) => g(t),
                                        children: (0, i.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Search Input",
                                        }),
                                    }),
                                    (0, i.jsx)(I.XZJ, {
                                        value: h,
                                        onChange: (e, t) => f(t),
                                        children: (0, i.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Preview Content",
                                        }),
                                    }),
                                    (0, i.jsx)(I.XZJ, {
                                        value: x,
                                        onChange: (e, t) => _(t),
                                        children: (0, i.jsx)(I.Text, {
                                            variant: "text-md/medium",
                                            children: "Show Action Bar Leading Input",
                                        }),
                                    }),
                                    (0, i.jsx)(I.XZJ, {
                                        value: v,
                                        onChange: (e, t) => S(t),
                                        children: (0, i.jsx)(I.Text, {
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
                (0, i.jsxs)(C.m, {
                    children: [
                        (0, i.jsx)(I.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Celebration Station",
                        }),
                        (0, i.jsx)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: "32 Members \u25CF 19 Online",
                        }),
                    ],
                }),
            (0, i.jsx)(j.G, {
                leading: x
                    ? (0, i.jsx)(j.B, {
                          value: !1,
                          onChange: () => {},
                      })
                    : void 0,
                actionsFullWidth: v,
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
function eO(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)("div", {
            style: { padding: "8px 0" },
            children: (0, i.jsx)(I.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(I.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
            }),
        });
    }
    return (0, i.jsxs)(_.Modal, {
        transitionState: t,
        onClose: n,
        size: "md",
        title: "Invite to server",
        input: (0, i.jsx)(I.E1j, {
            placeholder: "Search",
            onChange: () => null,
            query: "",
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.X6q, {
                    variant: "heading-lg/semibold",
                    children: "Celebration Station",
                }),
                (0, i.jsx)(I.Text, {
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
            (0, i.jsx)(s, { text: "John Doe" }),
            (0, i.jsx)(s, { text: "Mark" }),
            (0, i.jsx)(s, { text: "KawaiiHermit" }),
            (0, i.jsx)(s, { text: "YurBruhGio" }),
            (0, i.jsx)(s, { text: "John Doe" }),
            (0, i.jsx)(s, { text: "Mark" }),
            (0, i.jsx)(s, { text: "KawaiiHermit" }),
            (0, i.jsx)(s, { text: "YurBruhGio" }),
            (0, i.jsx)(s, { text: "John Doe" }),
            (0, i.jsx)(s, { text: "Mark" }),
            (0, i.jsx)(s, { text: "KawaiiHermit" }),
            (0, i.jsx)(s, { text: "YurBruhGio" }),
            (0, i.jsx)(s, { text: "John Doe" }),
            (0, i.jsx)(s, { text: "Mark" }),
            (0, i.jsx)(s, { text: "KawaiiHermit" }),
            (0, i.jsx)(s, { text: "YurBruhGio" }),
        ],
    });
}
function ev(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(_.Modal, {
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
    let { transitionState: t, onClose: s } = e,
        [a, l] = r.useState(0),
        [o, c] = r.useState(!1),
        u = r.useMemo(
            () =>
                0 === a
                    ? {
                          type: "image",
                          src: F,
                      }
                    : 1 === a
                      ? {
                            type: "lottie",
                            lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
                            aspectRatio: "6/4",
                        }
                      : 2 === a
                        ? {
                              type: "rive",
                              rive: d.PerfTestRive,
                          }
                        : 3 === a
                          ? {
                                type: "video",
                                src: z.Z,
                                fallbackImageSrc: F,
                                loop: !0,
                                loopAt: 2.5,
                            }
                          : 4 === a
                            ? {
                                  type: "dynamic",
                                  component: I.AX$.DEMO,
                                  props: { text: "Dynamic Content" },
                              }
                            : void 0,
            [a],
        );
    return (0, i.jsxs)(x.I, {
        transitionState: t,
        onClose: s,
        gradientColor: "nitro-pink",
        graphic: u,
        badge: o ? "beta" : void 0,
        title: "Expressive Modal",
        subtitle: "This is an expressive modal with a header image",
        actions: [
            {
                variant: "secondary",
                text: "Cancel",
                onClick: s,
            },
            {
                variant: "primary",
                text: "Submit",
                onClick: s,
            },
        ],
        children: [
            (0, i.jsx)(I.xJW, {
                title: "Graphic Type",
                children: (0, i.jsx)(I.q4e, {
                    value: a,
                    onChange: l,
                    options: [
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
                }),
            }),
            (0, i.jsx)(I.xJW, {
                style: { paddingTop: "16px" },
                children: (0, i.jsx)(I.XZJ, {
                    value: o,
                    onChange: (e, t) => c(t),
                    children: (0, i.jsx)(I.Text, {
                        variant: "text-md/medium",
                        children: "Show beta badge",
                    }),
                }),
            }),
        ],
    });
}
function eT(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [a, l] = r.useState("replace"),
        o = s < 3;
    return (0, i.jsx)(_.Modal, {
        transitionState: t,
        onClose: n,
        size: 1 === s ? "md" : "sm",
        title: "Mana Modal Stacking Demo",
        subtitle: "This is modal level ".concat(s, "."),
        actions: [
            {
                variant: "secondary",
                text: "Close",
                onClick: n,
            },
            ...(o
                ? [
                      {
                          variant: "primary",
                          text: "Open Next Modal",
                          onClick: () => {
                              let e = s + 1;
                              (0, I.h7j)((t) => (0, i.jsx)(eT, X(q({}, t), { modalCount: e })), {
                                  stackingBehavior: a,
                              });
                          },
                      },
                  ]
                : []),
        ],
        children: (0, i.jsxs)(I.Kqy, {
            gap: 16,
            children: [
                o &&
                    (0, i.jsx)(I.xJW, {
                        title: "Stacking Behavior",
                        children: (0, i.jsx)(I.q4e, {
                            value: a,
                            onChange: l,
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
                (0, i.jsxs)(I.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsxs)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, i.jsx)("strong", { children: "Replace One:" }),
                                " The modal directly below is hidden (default behavior)",
                            ],
                        }),
                        (0, i.jsxs)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, i.jsx)("strong", { children: "Replace All:" }),
                                " All modals below are hidden",
                            ],
                        }),
                        (0, i.jsxs)(I.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                (0, i.jsx)("strong", { children: "Stack:" }),
                                " The modal directly below remains visible",
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eI() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: G.section,
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Void)",
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open modal",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(e_, q({}, e)));
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Show Alert",
                        onClick: () => {
                            N.Z.show({
                                title: "Alert",
                                body: "This is an alert",
                                confirmText: "Confirm Text",
                                cancelText: "Cancel Text",
                            });
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open modal stacking demo",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(ej, q({}, e)));
                        },
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: G.section,
                children: [
                    (0, i.jsx)(I.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Modals (Mana)",
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open modal section visualizer",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(eE, q({}, e)));
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open demo modal",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(eC, q({}, e)));
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open sample invite modal",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(eO, q({}, e)));
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open sample alert modal",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(ev, q({}, e)));
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open expressive modal",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(eS, q({}, e)));
                        },
                    }),
                    (0, i.jsx)(I.zxk, {
                        variant: "primary",
                        text: "Open Mana modal stacking demo",
                        onClick: () => {
                            (0, I.h7j)((e) => (0, i.jsx)(eT, q({}, e)));
                        },
                    }),
                ],
            }),
        ],
    });
}
function eN() {
    return (0, i.jsxs)("div", {
        className: G.section,
        children: [
            (0, i.jsx)(I.X6q, {
                variant: "heading-xl/semibold",
                children: "User Avatars",
            }),
            (0, i.jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                },
                children: [
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
                ].map((e) => (0, i.jsx)(ey, { size: e }, e)),
            }),
        ],
    });
}
function ey(e) {
    let { size: t } = e,
        { user: n } = (0, c.cj)([Z.default], () => ({ user: Z.default.getCurrentUser() })),
        r = Number(t.split("_")[1]);
    return (0, i.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
        },
        children: [
            (0, i.jsxs)(I.X6q, {
                variant: "heading-sm/semibold",
                style: { textAlign: "center" },
                children: [r, "px"],
            }),
            (0, i.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, r),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: V.Sk.ONLINE,
            }),
            (0, i.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, r),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: V.Sk.ONLINE,
                isTyping: !0,
            }),
            (0, i.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, r),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                status: V.Sk.ONLINE,
                isMobile: !0,
            }),
            (0, i.jsx)(I.qEK, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, r),
                size: t,
                "aria-label": null == n ? void 0 : n.username,
                isSpeaking: !0,
            }),
        ],
    });
}
function eA() {
    let e = (0, c.e7)([y.Z], () => y.Z.gradientPreset);
    return (0, i.jsx)(I.f6W, {
        theme: V.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)("div", {
                className: a()(t, G.section),
                children: [
                    (0, i.jsx)(I.zxk, {
                        variant: "secondary",
                        text: "Button",
                        fullWidth: !0,
                    }),
                    (0, i.jsx)(I.f6W, {
                        theme: V.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)("div", {
                                className: a()(t, G.section),
                                children: [
                                    (0, i.jsx)(I.zxk, {
                                        variant: "secondary",
                                        text: "Button",
                                        fullWidth: !0,
                                    }),
                                    (0, i.jsx)(I.f6W, {
                                        theme: V.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                className: a()(e, G.section),
                                                children: (0, i.jsx)(I.zxk, {
                                                    variant: "secondary",
                                                    text: "Button",
                                                    fullWidth: !0,
                                                }),
                                            }),
                                    }),
                                    (0, i.jsx)(I.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                className: a()(e, G.section),
                                                children: (0, i.jsx)(I.zxk, {
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
