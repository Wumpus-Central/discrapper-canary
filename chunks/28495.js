"use strict";
n.d(t, { Ay: () => ee });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    d = n(317097),
    c = n(311907),
    u = n(554146),
    m = n(582754),
    g = n(397927),
    x = n(398590),
    h = n(736653),
    _ = n(775602),
    p = n(793574),
    A = n(268218),
    f = n(379848),
    j = n(201275),
    N = n(20851),
    E = n(176201),
    C = n(676608),
    T = n(828162),
    I = n(208039),
    b = n(34457),
    v = n(576705),
    S = n(636042),
    y = n(396816),
    R = n(545567),
    O = n(785312),
    G = n(319805),
    L = n(316506),
    D = n(486619),
    M = n(631103),
    k = n(927573),
    U = n(512031),
    P = n(652215),
    w = n(178758),
    B = n(985018),
    F = n(136708),
    H = n(75601),
    V = n(177424),
    z = n(598227),
    W = n(406853);
let K = (0, A.Fe)({ createPromise: () => n.e("66147").then(n.bind(n, 48736)), webpackId: 48736 }),
    Y = o().debounce((e, t) => (0, S.nK)(e, t), 200);
function X(e) {
    let { role: t, disabled: n } = e,
        [l, r] = s.useState(t.name);
    return (
        s.useEffect(() => {
            r(t.name);
        }, [t.name]),
        (0, i.jsx)(g.ksK, {
            label: B.intl.string(B.t.dLbkBk),
            required: !0,
            type: "text",
            value: l,
            maxLength: P.fHV,
            onChange: function (e) {
                r(e), Y(t.id, e);
            },
            disabled: n,
        })
    );
}
function J(e) {
    let { role: t, guildId: n, selectedStyle: s, disabled: l, shouldShowUpsell: a } = e,
        o = (0, R.$)(B.intl.string(B.t.Mi9Kbe)),
        c = (0, h.Ay)(),
        _ = (0, j.qE)(n, t),
        A = { dark: { src: z, name: t.name }, light: { src: W, name: t.name } };
    function C() {
        (0, T.A)(n, p.A.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, x.jH)();
    }
    return (0, i.jsx)(f.Ay, {
        contentTypes: [u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: (e) => {
            let { visibleContent: x } = e;
            return (0, i.jsxs)(g.D0$, {
                label: B.intl.string(B.t["9wVJRB"]),
                badge: x === u.M.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : void 0,
                children: [
                    (0, i.jsx)("div", {
                        className: H.p6,
                        children: U.wE.map((e) => {
                            let { id: u, colors: x, labelString: h } = e;
                            return (0, i.jsxs)(
                                "button",
                                {
                                    className: r()(H.ZQ, {
                                        [H.wH]: s === u,
                                        [H.r9]: l || (a && [y.y.HOLOGRAPHIC, y.y.GRADIENT].includes(u)),
                                    }),
                                    onClick: () => {
                                        (0, S.C5)(t.id, u);
                                    },
                                    children: [
                                        (0, i.jsx)(g.M1G, {
                                            children: (0, i.jsx)("div", {
                                                className: H.Al,
                                                children: (0, i.jsx)(N.A, {
                                                    author: {
                                                        nick: o.author.username,
                                                        guildId: n,
                                                        authorId: o.author.id,
                                                        colorRoleId: t.id,
                                                        colorStrings: (0, E.K3)(x),
                                                        colorString: (0, d.Hl)(x.primary_color),
                                                    },
                                                    message: o,
                                                    preview: !0,
                                                    roleIcon: _ ?? ((0, m.qB)(c) ? A.light : A.dark),
                                                    isGroupStart: !0,
                                                    disableInteraction: !0,
                                                    previewGuildId: n,
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("div", { className: H.C2, children: B.intl.string(h) }),
                                    ],
                                },
                                u,
                            );
                        }),
                    }),
                    a &&
                        (0, i.jsxs)("div", {
                            className: H.FB,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: H.Md,
                                    children: [
                                        (0, i.jsx)(g.Text, {
                                            variant: "text-sm/semibold",
                                            color: "button-outline-primary-text",
                                            children: B.intl.format(F.default.VpEDJc, { magical: (0, i.jsx)(Z, {}) }),
                                        }),
                                        (0, i.jsx)(g.Text, {
                                            variant: "text-xs/medium",
                                            color: "button-outline-primary-text",
                                            children: B.intl.string(F.default.FJZeZF),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(g.Button, {
                                    onClick: C,
                                    variant: "expressive",
                                    icon: g._Jp,
                                    text: B.intl.string(B.t["+7XY31"]),
                                }),
                            ],
                        }),
                ],
            });
        },
    });
}
function Z() {
    let e = (0, c.bG)([_.A], () => _.A.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.WqX)({
            colorStrings: (0, E.K3)(w.jl),
            useReducedMotion: e,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, i.jsx)("span", {
        style: { ...t },
        className: n,
        "data-text": B.intl.string(F.default["+/IHLl"]),
        children: B.intl.string(F.default["+/IHLl"]),
    });
}
function q(e) {
    let { role: t, disabled: n, currentStyle: s, hasEnhancedRoleColors: l } = e;
    return (0, i.jsx)("div", {
        className: H.Ei,
        children: (0, i.jsx)(g.D0$, {
            label: B.intl.string(B.t["1F6FzL"]),
            description: B.intl.string(B.t["9UCxlf"]),
            required: !0,
            children: (0, i.jsx)(K, {
                defaultColor: P.TGz,
                colors: s === y.y.GRADIENT && l ? w.Oz : P._tK,
                value: t.color,
                disabled: n,
                onChange: (e) => {
                    var n;
                    return (
                        (n = e),
                        void (
                            t.color !== n &&
                            (n !== P.TGz || 0 !== t.color) &&
                            (n === P.TGz && (n = 0), (0, S.ZH)(t.id, n))
                        )
                    );
                },
                secondaryValue:
                    s === y.y.GRADIENT && l && t.colors?.secondary_color != null ? t.colors?.secondary_color : void 0,
                onChangeGradientColors: (e) => {
                    (0, S.uc)(t.id, { primary_color: e[0], secondary_color: e[1], tertiary_color: null }, y.y.GRADIENT);
                },
                isGradient: s === y.y.GRADIENT,
                customPickerPosition: "right",
            }),
        }),
    });
}
function Q(e) {
    let { role: t, guildId: n, selectedStyle: s, disableInteraction: l } = e,
        a = (0, R.$)(B.intl.string(B.t.Mi9Kbe)),
        o = {
            nick: a.author.username,
            guildId: n,
            authorId: a.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString,
        },
        d = { src: z, name: t.name },
        c = { src: W, name: t.name },
        u = (0, j.qE)(n, t),
        x = [P.NJ8.DARK, P.NJ8.DARKER, P.NJ8.MIDNIGHT, P.NJ8.LIGHT];
    return (0, i.jsx)(g.M1G, {
        children: (0, i.jsx)("div", {
            className: r()(H.i1, { [H.XN]: l }),
            "aria-hidden": !0,
            children: x.map((e) =>
                (0, i.jsx)(
                    g.NPJ,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, i.jsxs)("div", {
                                className: r()(t, H.$O),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: H.zC,
                                        children: (0, i.jsx)(N.A, {
                                            author: o,
                                            message: a,
                                            roleIcon: u ?? ((0, m.qB)(e) ? c : d),
                                            previewGuildId: n,
                                            isGroupStart: !0,
                                        }),
                                    }),
                                    e === P.NJ8.LIGHT &&
                                        s !== y.y.SOLID &&
                                        (0, i.jsx)(g.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            className: H.W_,
                                            children: B.intl.string(B.t.nxwm3I),
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.dOG, {
                label: B.intl.string(B.t.vceJPk),
                checked: t.hoist,
                onChange: (e) => (0, S.E9)(t.id, e, t.mentionable),
                disabled: n,
            }),
            (0, i.jsx)(g.cGx, { className: H.yF }),
            (0, i.jsx)(g.dOG, {
                label: B.intl.formatToPlainString(B.t.DTXoJQ, {}),
                description: B.intl.string(B.t.kRg5W5),
                checked: t.mentionable,
                onChange: (e) => (0, S.E9)(t.id, t.hoist, e),
                disabled: n,
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: l } = e,
        a = (0, C.jV)(t.id, n),
        o = (0, c.bG)([y.A], () => y.A.getRoleStyleData(n.id)),
        d = !a,
        u = null != o && a ? o.currentStyle : y.y.SOLID,
        m = (0, b.Oy)(n),
        x = s || m,
        h = (0, c.bG)([v.A], () => v.A.canImpersonateRole(t, n)),
        { headerHeight: _, headerRef: p } = (0, O.A)(0),
        { scrolledToTop: A, handleScroll: f } = (0, L.u)();
    return (0, i.jsx)(g.GtU, {
        className: H.XG,
        style: { scrollPaddingTop: _ },
        onScroll: f,
        children: (0, i.jsxs)("div", {
            className: V.Q,
            children: [
                (0, i.jsx)("div", {
                    className: r()(V.wx, V.ln, { [V.l6]: !A }),
                    ref: p,
                    children: (0, i.jsx)(L.A, {
                        guild: t,
                        role: n,
                        selectedSection: k.T$.DISPLAY,
                        setSelectedSection: l,
                    }),
                }),
                (0, i.jsx)(X, { role: n, disabled: x }),
                (0, i.jsx)("div", { className: H.U9, children: (0, i.jsx)(M.A, { role: n }) }),
                (0, i.jsx)(g.cGx, { className: H.yF }),
                (a || d) &&
                    null != u &&
                    (0, i.jsx)(J, { role: n, guildId: t.id, selectedStyle: u, disabled: x, shouldShowUpsell: d }),
                u !== y.y.HOLOGRAPHIC &&
                    null != u &&
                    (0, i.jsx)(q, { role: n, disabled: x, currentStyle: u, hasEnhancedRoleColors: a }),
                u === y.y.HOLOGRAPHIC &&
                    (0, i.jsx)(I.A, {
                        className: H.u,
                        children: (0, i.jsx)(g.Text, {
                            variant: "text-xs/medium",
                            children: B.intl.string(F.default.tBhCyr),
                        }),
                    }),
                (0, i.jsx)(G.A, { guild: t, disabled: x, role: n }),
                (0, i.jsx)(Q, { role: n, guildId: t.id, selectedStyle: u, disableInteraction: !a }),
                (0, i.jsx)(g.cGx, { className: H.yF }),
                (0, i.jsx)($, { role: n, disabled: x }),
                h
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.cGx, { className: H.yF }),
                              (0, i.jsx)(D.G, { guildId: t.id, role: n }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
