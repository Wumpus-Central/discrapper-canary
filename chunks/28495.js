n.d(t, { Ay: () => ec });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    d = n(317097),
    c = n(311907),
    u = n(554146),
    m = n(462887),
    g = n(292666),
    h = n(452027),
    x = n(247928),
    _ = n(834730),
    p = n(821609),
    A = n(104510),
    E = n(36075),
    f = n(43990),
    j = n(243721),
    N = n(404778),
    I = n(599319),
    C = n(398590),
    b = n(736653),
    v = n(775602),
    S = n(793574),
    T = n(268218),
    y = n(379848),
    R = n(201275),
    L = n(20851),
    D = n(176201),
    O = n(676608),
    G = n(828162),
    M = n(208039),
    k = n(34457),
    U = n(576705),
    w = n(636042),
    P = n(396816),
    B = n(545567),
    F = n(785312),
    H = n(319805),
    V = n(316506),
    z = n(486619),
    W = n(631103),
    Y = n(927573),
    K = n(512031),
    X = n(652215),
    Z = n(178758),
    J = n(985018),
    q = n(853513),
    Q = n(278998),
    $ = n(838719),
    ee = n(598227),
    et = n(406853);
let en = (0, T.Fe)({ createPromise: () => n.e("66147").then(n.bind(n, 48736)), webpackId: 48736 }),
    ei = o().debounce((e, t) => (0, w.nK)(e, t), 200);
function el(e) {
    let { role: t, disabled: n } = e,
        [s, r] = l.useState(t.name);
    return (
        l.useEffect(() => {
            r(t.name);
        }, [t.name]),
        (0, i.jsx)(g.k, {
            label: J.intl.string(J.t.dLbkBk),
            required: !0,
            type: "text",
            value: s,
            maxLength: X.fHV,
            onChange: function (e) {
                r(e), ei(t.id, e);
            },
            disabled: n,
        })
    );
}
function es(e) {
    let { role: t, guildId: n, selectedStyle: l, disabled: s, shouldShowUpsell: a } = e,
        o = (0, B.$)(J.intl.string(J.t.Mi9Kbe)),
        c = (0, b.Ay)(),
        g = (0, R.qE)(n, t),
        E = { dark: { src: ee, name: t.name }, light: { src: et, name: t.name } };
    function f() {
        (0, G.A)(n, S.A.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, C.jH)();
    }
    return (0, i.jsx)(y.Ay, {
        contentTypes: [u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: (e) => {
            let { visibleContent: j } = e;
            return (0, i.jsxs)(h.D, {
                label: J.intl.string(J.t["9wVJRB"]),
                badge: j === u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : void 0,
                children: [
                    (0, i.jsx)("div", {
                        className: Q.p6,
                        children: K.wE.map((e) => {
                            let { id: u, colors: h, labelString: _ } = e;
                            return (0, i.jsxs)(
                                "button",
                                {
                                    className: r()(Q.ZQ, {
                                        [Q.wH]: l === u,
                                        [Q.r9]: s || (a && [P.y.HOLOGRAPHIC, P.y.GRADIENT].includes(u)),
                                    }),
                                    onClick: () => {
                                        (0, w.C5)(t.id, u);
                                    },
                                    children: [
                                        (0, i.jsx)(x.M, {
                                            children: (0, i.jsx)("div", {
                                                className: Q.Al,
                                                children: (0, i.jsx)(L.A, {
                                                    author: {
                                                        nick: o.author.username,
                                                        guildId: n,
                                                        authorId: o.author.id,
                                                        colorRoleId: t.id,
                                                        colorStrings: (0, D.K3)(h),
                                                        colorString: (0, d.Hl)(h.primary_color),
                                                    },
                                                    message: o,
                                                    preview: !0,
                                                    roleIcon: g ?? ((0, m.q)(c) ? E.light : E.dark),
                                                    isGroupStart: !0,
                                                    disableInteraction: !0,
                                                    previewGuildId: n,
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("div", { className: Q.C2, children: J.intl.string(_) }),
                                    ],
                                },
                                u,
                            );
                        }),
                    }),
                    a &&
                        (0, i.jsxs)("div", {
                            className: Q.FB,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: Q.Md,
                                    children: [
                                        (0, i.jsx)(_.E, {
                                            variant: "text-sm/semibold",
                                            color: "button-outline-primary-text",
                                            children: J.intl.format(q.default.VpEDJc, { magical: (0, i.jsx)(er, {}) }),
                                        }),
                                        (0, i.jsx)(_.E, {
                                            variant: "text-xs/medium",
                                            color: "button-outline-primary-text",
                                            children: J.intl.string(q.default.FJZeZF),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(p.$, {
                                    onClick: f,
                                    variant: "expressive",
                                    icon: A._,
                                    text: J.intl.string(J.t["+7XY31"]),
                                }),
                            ],
                        }),
                ],
            });
        },
    });
}
function er() {
    let e = (0, c.bG)([v.A], () => v.A.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, E.Wq)({
            colorStrings: (0, D.K3)(Z.jl),
            useReducedMotion: e,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, i.jsx)("span", {
        style: { ...t },
        className: n,
        "data-text": J.intl.string(q.default["+/IHLl"]),
        children: J.intl.string(q.default["+/IHLl"]),
    });
}
function ea(e) {
    let { role: t, disabled: n, currentStyle: l, hasEnhancedRoleColors: s } = e;
    return (0, i.jsx)("div", {
        className: Q.Ei,
        children: (0, i.jsx)(h.D, {
            label: J.intl.string(J.t["1F6FzL"]),
            description: J.intl.string(J.t["9UCxlf"]),
            required: !0,
            children: (0, i.jsx)(en, {
                defaultColor: X.TGz,
                colors: l === P.y.GRADIENT && s ? Z.Oz : X._tK,
                value: t.color,
                disabled: n,
                onChange: (e) => {
                    var n;
                    return (
                        (n = e),
                        void (
                            t.color !== n &&
                            (n !== X.TGz || 0 !== t.color) &&
                            (n === X.TGz && (n = 0), (0, w.ZH)(t.id, n))
                        )
                    );
                },
                secondaryValue:
                    l === P.y.GRADIENT && s && t.colors?.secondary_color != null ? t.colors?.secondary_color : void 0,
                onChangeGradientColors: (e) => {
                    (0, w.uc)(t.id, { primary_color: e[0], secondary_color: e[1], tertiary_color: null }, P.y.GRADIENT);
                },
                isGradient: l === P.y.GRADIENT,
                customPickerPosition: "right",
            }),
        }),
    });
}
function eo(e) {
    let { role: t, guildId: n, selectedStyle: l, disableInteraction: s } = e,
        a = (0, B.$)(J.intl.string(J.t.Mi9Kbe)),
        o = {
            nick: a.author.username,
            guildId: n,
            authorId: a.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString,
        },
        d = { src: ee, name: t.name },
        c = { src: et, name: t.name },
        u = (0, R.qE)(n, t),
        g = [X.NJ8.DARK, X.NJ8.DARKER, X.NJ8.MIDNIGHT, X.NJ8.LIGHT];
    return (0, i.jsx)(x.M, {
        children: (0, i.jsx)("div", {
            className: r()(Q.i1, { [Q.XN]: s }),
            "aria-hidden": !0,
            children: g.map((e) =>
                (0, i.jsx)(
                    f.N,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, i.jsxs)("div", {
                                className: r()(t, Q.$O),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: Q.zC,
                                        children: (0, i.jsx)(L.A, {
                                            author: o,
                                            message: a,
                                            roleIcon: u ?? ((0, m.q)(e) ? c : d),
                                            previewGuildId: n,
                                            isGroupStart: !0,
                                        }),
                                    }),
                                    e === X.NJ8.LIGHT &&
                                        l !== P.y.SOLID &&
                                        (0, i.jsx)(_.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            className: Q.W_,
                                            children: J.intl.string(J.t.nxwm3I),
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
function ed(e) {
    let { role: t, disabled: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.d, {
                label: J.intl.string(J.t.vceJPk),
                checked: t.hoist,
                onChange: (e) => (0, w.E9)(t.id, e, t.mentionable),
                disabled: n,
            }),
            (0, i.jsx)(N.c, { className: Q.yF }),
            (0, i.jsx)(j.d, {
                label: J.intl.formatToPlainString(J.t.DTXoJQ, {}),
                description: J.intl.string(J.t.kRg5W5),
                checked: t.mentionable,
                onChange: (e) => (0, w.E9)(t.id, t.hoist, e),
                disabled: n,
            }),
        ],
    });
}
function ec(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: s } = e,
        a = (0, O.jV)(t.id, n),
        o = (0, c.bG)([P.A], () => P.A.getRoleStyleData(n.id)),
        d = !a,
        u = null != o && a ? o.currentStyle : P.y.SOLID,
        m = (0, k.Oy)(n),
        g = l || m,
        h = (0, c.bG)([U.A], () => U.A.canImpersonateRole(t, n)),
        { headerHeight: x, headerRef: p } = (0, F.A)(0),
        { scrolledToTop: A, handleScroll: E } = (0, V.u)();
    return (0, i.jsx)(I.Gt, {
        className: Q.XG,
        style: { scrollPaddingTop: x },
        onScroll: E,
        children: (0, i.jsxs)("div", {
            className: $.Q,
            children: [
                (0, i.jsx)("div", {
                    className: r()($.wx, $.ln, { [$.l6]: !A }),
                    ref: p,
                    children: (0, i.jsx)(V.A, {
                        guild: t,
                        role: n,
                        selectedSection: Y.T$.DISPLAY,
                        setSelectedSection: s,
                    }),
                }),
                (0, i.jsx)(el, { role: n, disabled: g }),
                (0, i.jsx)("div", { className: Q.U9, children: (0, i.jsx)(W.A, { role: n }) }),
                (0, i.jsx)(N.c, { className: Q.yF }),
                (a || d) &&
                    null != u &&
                    (0, i.jsx)(es, { role: n, guildId: t.id, selectedStyle: u, disabled: g, shouldShowUpsell: d }),
                u !== P.y.HOLOGRAPHIC &&
                    null != u &&
                    (0, i.jsx)(ea, { role: n, disabled: g, currentStyle: u, hasEnhancedRoleColors: a }),
                u === P.y.HOLOGRAPHIC &&
                    (0, i.jsx)(M.A, {
                        className: Q.u,
                        children: (0, i.jsx)(_.E, {
                            variant: "text-xs/medium",
                            children: J.intl.string(q.default.tBhCyr),
                        }),
                    }),
                (0, i.jsx)(H.A, { guild: t, disabled: g, role: n }),
                (0, i.jsx)(eo, { role: n, guildId: t.id, selectedStyle: u, disableInteraction: !a }),
                (0, i.jsx)(N.c, { className: Q.yF }),
                (0, i.jsx)(ed, { role: n, disabled: g }),
                h
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)(N.c, { className: Q.yF }), (0, i.jsx)(z.G, { guildId: t.id, role: n })],
                      })
                    : null,
            ],
        }),
    });
}
