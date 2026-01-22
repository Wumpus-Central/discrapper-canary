n.d(t, { Ay: () => ee }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    c = n.n(a),
    o = n(317097),
    d = n(311907),
    u = n(554146),
    f = n(582754),
    g = n(397927),
    b = n(398590),
    m = n(736653),
    p = n(775602),
    x = n(793574),
    h = n(268218),
    j = n(379848),
    O = n(201275),
    y = n(20851),
    v = n(176201),
    A = n(676608),
    E = n(828162),
    N = n(801264),
    _ = n(34457),
    S = n(576705),
    T = n(636042),
    I = n(396816),
    C = n(545567),
    P = n(785312),
    w = n(319805),
    R = n(316506),
    D = n(486619),
    G = n(631103),
    L = n(927573),
    k = n(512031),
    M = n(652215),
    U = n(178758),
    F = n(985018),
    B = n(333354),
    H = n(617375),
    V = n(261223),
    K = n(598227),
    z = n(406853);
let Y = (0, h.Fe)({
        createPromise: () => n.e("66147").then(n.bind(n, 48736)),
        webpackId: 48736,
    }),
    W = c().debounce((e, t) => (0, T.nK)(e, t), 200);
function X(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(g.ksK, {
            label: F.intl.string(F.t.dLbkBk),
            required: !0,
            type: "text",
            value: l,
            maxLength: M.fHV,
            onChange: function (e) {
                s(e), W(t.id, e);
            },
            disabled: n,
        })
    );
}
function J(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        c = (0, C.$)(F.intl.string(F.t.Mi9Kbe)),
        d = (0, m.Ay)(),
        p = (0, O.qE)(n, t),
        h = {
            dark: {
                src: K,
                name: t.name,
            },
            light: {
                src: z,
                name: t.name,
            },
        };
    function A() {
        (0, E.A)(n, x.A.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, b.jH)();
    }
    return (0, r.jsx)(j.Ay, {
        contentTypes: [u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: (e) => {
            let { visibleContent: b } = e;
            return (0, r.jsxs)(g.D0$, {
                label: F.intl.string(F.t["9wVJRB"]),
                badge: b === u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : void 0,
                children: [
                    (0, r.jsx)("div", {
                        className: H.p6,
                        children: k.wE.map((e) => {
                            let { id: u, colors: b, labelString: m } = e;
                            return (0, r.jsxs)(
                                "button",
                                {
                                    className: s()(H.ZQ, {
                                        [H.wH]: i === u,
                                        [H.r9]: l || (a && [I.y.HOLOGRAPHIC, I.y.GRADIENT].includes(u)),
                                    }),
                                    onClick: () => {
                                        (0, T.C5)(t.id, u);
                                    },
                                    children: [
                                        (0, r.jsx)(g.M1G, {
                                            children: (0, r.jsx)("div", {
                                                className: H.Al,
                                                children: (0, r.jsx)(y.A, {
                                                    author: {
                                                        nick: c.author.username,
                                                        guildId: n,
                                                        authorId: c.author.id,
                                                        colorRoleId: t.id,
                                                        colorStrings: (0, v.K3)(b),
                                                        colorString: (0, o.Hl)(b.primary_color),
                                                    },
                                                    message: c,
                                                    preview: !0,
                                                    roleIcon: null != p ? p : (0, f.qB)(d) ? h.light : h.dark,
                                                    isGroupStart: !0,
                                                    disableInteraction: !0,
                                                    previewGuildId: n,
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: H.C2,
                                            children: F.intl.string(m),
                                        }),
                                    ],
                                },
                                u,
                            );
                        }),
                    }),
                    a &&
                        (0, r.jsxs)("div", {
                            className: H.FB,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: H.Md,
                                    children: [
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-sm/semibold",
                                            color: "button-outline-primary-text",
                                            children: F.intl.format(B.default.VpEDJc, { magical: (0, r.jsx)(Z, {}) }),
                                        }),
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-xs/medium",
                                            color: "button-outline-primary-text",
                                            children: F.intl.string(B.default.FJZeZF),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(g.Button, {
                                    onClick: A,
                                    variant: "expressive",
                                    icon: g._Jp,
                                    text: F.intl.string(F.t["+7XY31"]),
                                }),
                            ],
                        }),
                ],
            });
        },
    });
}
function Z() {
    let e = (0, d.bG)([p.A], () => p.A.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.WqX)({
            colorStrings: (0, v.K3)(U.jl),
            useReducedMotion: e,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsx)("span", {
        style: (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, t),
        className: n,
        "data-text": F.intl.string(B.default["+/IHLl"]),
        children: F.intl.string(B.default["+/IHLl"]),
    });
}
function Q(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsx)("div", {
        className: H.Ei,
        children: (0, r.jsx)(g.D0$, {
            label: F.intl.string(F.t["1F6FzL"]),
            description: F.intl.string(F.t["9UCxlf"]),
            required: !0,
            children: (0, r.jsx)(Y, {
                defaultColor: M.TGz,
                colors: s === I.y.GRADIENT && a ? U.Oz : M._tK,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return (
                        (t = e),
                        void (
                            i.color !== t &&
                            (t !== M.TGz || 0 !== i.color) &&
                            (t === M.TGz && (t = 0), (0, T.ZH)(i.id, t))
                        )
                    );
                },
                secondaryValue:
                    s === I.y.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null
                        ? null == (n = i.colors)
                            ? void 0
                            : n.secondary_color
                        : void 0,
                onChangeGradientColors: (e) => {
                    (0, T.uc)(
                        i.id,
                        {
                            primary_color: e[0],
                            secondary_color: e[1],
                            tertiary_color: null,
                        },
                        I.y.GRADIENT,
                    );
                },
                isGradient: s === I.y.GRADIENT,
                customPickerPosition: "right",
            }),
        }),
    });
}
function q(e) {
    let { role: t, guildId: n, selectedStyle: i, disableInteraction: l } = e,
        a = (0, C.$)(F.intl.string(F.t.Mi9Kbe)),
        c = {
            nick: a.author.username,
            guildId: n,
            authorId: a.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString,
        },
        o = {
            src: K,
            name: t.name,
        },
        d = {
            src: z,
            name: t.name,
        },
        u = (0, O.qE)(n, t),
        b = [M.NJ8.DARK, M.NJ8.DARKER, M.NJ8.MIDNIGHT, M.NJ8.LIGHT];
    return (0, r.jsx)(g.M1G, {
        children: (0, r.jsx)("div", {
            className: s()(H.i1, { [H.XN]: l }),
            "aria-hidden": !0,
            children: b.map((e) =>
                (0, r.jsx)(
                    g.NPJ,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: s()(t, H.$O),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: H.zC,
                                        children: (0, r.jsx)(y.A, {
                                            author: c,
                                            message: a,
                                            roleIcon: null != u ? u : (0, f.qB)(e) ? d : o,
                                            previewGuildId: n,
                                            isGroupStart: !0,
                                        }),
                                    }),
                                    e === M.NJ8.LIGHT &&
                                        i !== I.y.SOLID &&
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            className: H.W_,
                                            children: F.intl.string(F.t.nxwm3I),
                                        }),
                                ],
                            }),
                    },
                    e,
                ),
            ),
        }),
    });
}
function $(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.dOG, {
                label: F.intl.string(F.t.vceJPk),
                checked: t.hoist,
                onChange: (e) => (0, T.E9)(t.id, e, t.mentionable),
                disabled: n,
            }),
            (0, r.jsx)(g.cGx, { className: H.yF }),
            (0, r.jsx)(g.dOG, {
                label: F.intl.formatToPlainString(F.t.DTXoJQ, {}),
                description: F.intl.string(F.t.kRg5W5),
                checked: t.mentionable,
                onChange: (e) => (0, T.E9)(t.id, t.hoist, e),
                disabled: n,
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, A.jV)(t.id, n),
        c = (0, d.bG)([I.A], () => I.A.getRoleStyleData(n.id)),
        o = !a,
        u = null != c && a ? c.currentStyle : I.y.SOLID,
        f = (0, _.Oy)(n),
        b = i || f,
        m = (0, d.bG)([S.A], () => S.A.canImpersonateRole(t, n)),
        { headerHeight: p, headerRef: x } = (0, P.A)(0),
        { scrolledToTop: h, handleScroll: j } = (0, R.u)();
    return (0, r.jsx)(g.GtU, {
        className: H.XG,
        style: { scrollPaddingTop: p },
        onScroll: j,
        children: (0, r.jsxs)("div", {
            className: V.Q,
            children: [
                (0, r.jsx)("div", {
                    className: s()(V.wx, V.ln, { [V.l6]: !h }),
                    ref: x,
                    children: (0, r.jsx)(R.A, {
                        guild: t,
                        role: n,
                        selectedSection: L.T$.DISPLAY,
                        setSelectedSection: l,
                    }),
                }),
                (0, r.jsx)(X, {
                    role: n,
                    disabled: b,
                }),
                (0, r.jsx)("div", {
                    className: H.U9,
                    children: (0, r.jsx)(G.A, { role: n }),
                }),
                (0, r.jsx)(g.cGx, { className: H.yF }),
                (a || o) &&
                    null != u &&
                    (0, r.jsx)(J, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        disabled: b,
                        shouldShowUpsell: o,
                    }),
                u !== I.y.HOLOGRAPHIC &&
                    null != u &&
                    (0, r.jsx)(Q, {
                        role: n,
                        disabled: b,
                        currentStyle: u,
                        hasEnhancedRoleColors: a,
                    }),
                u === I.y.HOLOGRAPHIC &&
                    (0, r.jsx)(N.A, {
                        className: H.u,
                        children: (0, r.jsx)(g.Text, {
                            variant: "text-xs/medium",
                            children: F.intl.string(B.default.tBhCyr),
                        }),
                    }),
                (0, r.jsx)(w.A, {
                    guild: t,
                    disabled: b,
                    role: n,
                }),
                (0, r.jsx)(q, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: u,
                    disableInteraction: !a,
                }),
                (0, r.jsx)(g.cGx, { className: H.yF }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: b,
                }),
                m
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.cGx, { className: H.yF }),
                              (0, r.jsx)(D.G, {
                                  guildId: t.id,
                                  role: n,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
