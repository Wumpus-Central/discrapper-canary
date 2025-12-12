n.d(t, { ZP: () => ee }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(866442),
    d = n(442837),
    u = n(704215),
    g = n(780384),
    f = n(481060),
    m = n(37234),
    b = n(410030),
    p = n(607070),
    h = n(100527),
    x = n(663993),
    j = n(243778),
    v = n(518738),
    O = n(753206),
    C = n(606318),
    y = n(402235),
    N = n(441536),
    E = n(494620),
    I = n(345162),
    S = n(496675),
    _ = n(84058),
    T = n(103576),
    P = n(206950),
    w = n(95242),
    Z = n(541575),
    R = n(420966),
    D = n(337344),
    A = n(275296),
    L = n(203377),
    k = n(494831),
    G = n(981631),
    M = n(141006),
    U = n(388032),
    B = n(556970),
    F = n(99395),
    H = n(536673),
    W = n(179517),
    z = n(79829);
let V = (0, x.Un)({
        createPromise: () => n.e("4848").then(n.bind(n, 797967)),
        webpackId: 797967,
    }),
    K = o().debounce((e, t) => (0, _.Uv)(e, t), 200);
function Y(e) {
    let { role: t, disabled: n } = e,
        [l, a] = i.useState(t.name);
    return (
        i.useEffect(() => {
            a(t.name);
        }, [t.name]),
        (0, r.jsx)(f.oil, {
            label: U.intl.string(U.t.dLbkBk),
            required: !0,
            type: "text",
            value: l,
            maxLength: G.VKK,
            onChange: function (e) {
                a(e), K(t.id, e);
            },
            disabled: n,
        })
    );
}
function q(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: s } = e,
        o = (0, P.F)(U.intl.string(U.t.Mi9Kbe)),
        d = (0, b.ZP)(),
        p = (0, v.oC)(n, t),
        x = {
            dark: {
                src: W,
                name: t.name,
            },
            light: {
                src: z,
                name: t.name,
            },
        };
    function y() {
        (0, N.Z)(n, h.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, m.xf)();
    }
    return (0, r.jsx)(j.ZP, {
        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: (e) => {
            let { visibleContent: m } = e;
            return (0, r.jsxs)(f.gNt, {
                label: U.intl.string(U.t["9wVJRB"]),
                badge: m === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : void 0,
                children: [
                    (0, r.jsx)("div", {
                        className: F.roleStyleContainer,
                        children: k.pM.map((e) => {
                            let { id: u, colors: m, labelString: b } = e;
                            return (0, r.jsxs)(
                                "button",
                                {
                                    className: a()(F.roleStylePreviewContainer, {
                                        [F.selected]: i === u,
                                        [F.disabled]: l || (s && [T.g.HOLOGRAPHIC, T.g.GRADIENT].includes(u)),
                                    }),
                                    onClick: () => {
                                        (0, _.Jf)(t.id, u);
                                    },
                                    children: [
                                        (0, r.jsx)(f.Rny, {
                                            children: (0, r.jsx)("div", {
                                                className: F.roleStyleMessageContainer,
                                                children: (0, r.jsx)(O.Z, {
                                                    author: {
                                                        nick: o.author.username,
                                                        guildId: n,
                                                        authorId: o.author.id,
                                                        colorRoleId: t.id,
                                                        colorStrings: (0, C.DX)(m),
                                                        colorString: (0, c.Rf)(m.primary_color),
                                                    },
                                                    message: o,
                                                    preview: !0,
                                                    roleIcon: null != p ? p : (0, g.ap)(d) ? x.light : x.dark,
                                                    isGroupStart: !0,
                                                    disableInteraction: !0,
                                                    previewGuildId: n,
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: F.roleStyleLabel,
                                            children: U.intl.string(b),
                                        }),
                                    ],
                                },
                                u,
                            );
                        }),
                    }),
                    s &&
                        (0, r.jsxs)("div", {
                            className: F.roleStyleUpsell,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: F.roleStyleUpsellMesssages,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-sm/semibold",
                                            color: "button-outline-primary-text",
                                            children: U.intl.format(B.default.VpEDJc, { magical: (0, r.jsx)(X, {}) }),
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-xs/medium",
                                            color: "button-outline-primary-text",
                                            children: U.intl.string(B.default.FJZeZF),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(f.Button, {
                                    onClick: y,
                                    variant: "expressive",
                                    icon: f.Ucv,
                                    text: U.intl.string(U.t["+7XY31"]),
                                }),
                            ],
                        }),
                ],
            });
        },
    });
}
function X() {
    let e = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, f.JUn)({
            colorStrings: (0, C.DX)(M.SK),
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
        "data-text": U.intl.string(B.default["+/IHLl"]),
        children: U.intl.string(B.default["+/IHLl"]),
    });
}
function J(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: a, hasEnhancedRoleColors: s } = e;
    return (0, r.jsx)("div", {
        className: F.colorPicker,
        children: (0, r.jsx)(f.gNt, {
            label: U.intl.string(U.t["1F6FzL"]),
            description: U.intl.string(U.t["9UCxlf"]),
            required: !0,
            children: (0, r.jsx)(V, {
                defaultColor: G.p6O,
                colors: a === T.g.GRADIENT && s ? M.tl : G.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return (
                        (t = e),
                        void (
                            i.color !== t &&
                            (t !== G.p6O || 0 !== i.color) &&
                            (t === G.p6O && (t = 0), (0, _.OW)(i.id, t))
                        )
                    );
                },
                secondaryValue:
                    a === T.g.GRADIENT && s && (null == (t = i.colors) ? void 0 : t.secondary_color) != null
                        ? null == (n = i.colors)
                            ? void 0
                            : n.secondary_color
                        : void 0,
                onChangeGradientColors: (e) => {
                    (0, _.TW)(
                        i.id,
                        {
                            primary_color: e[0],
                            secondary_color: e[1],
                            tertiary_color: null,
                        },
                        T.g.GRADIENT,
                    );
                },
                isGradient: a === T.g.GRADIENT,
                customPickerPosition: "right",
            }),
        }),
    });
}
function Q(e) {
    let { role: t, guildId: n, selectedStyle: i, disableInteraction: l } = e,
        s = (0, P.F)(U.intl.string(U.t.Mi9Kbe)),
        o = {
            nick: s.author.username,
            guildId: n,
            authorId: s.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString,
        },
        c = {
            src: W,
            name: t.name,
        },
        d = {
            src: z,
            name: t.name,
        },
        u = (0, v.oC)(n, t),
        m = [G.BRd.DARK, G.BRd.DARKER, G.BRd.MIDNIGHT, G.BRd.LIGHT];
    return (0, r.jsx)(f.Rny, {
        children: (0, r.jsx)("div", {
            className: a()(F.previewContainer, { [F.disableInteraction]: l }),
            "aria-hidden": !0,
            children: m.map((e) =>
                (0, r.jsx)(
                    f.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: a()(t, F.messageWrapper),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: F.messageContainer,
                                        children: (0, r.jsx)(O.Z, {
                                            author: o,
                                            message: s,
                                            roleIcon: null != u ? u : (0, g.ap)(e) ? d : c,
                                            previewGuildId: n,
                                            isGroupStart: !0,
                                        }),
                                    }),
                                    e === G.BRd.LIGHT &&
                                        i !== T.g.SOLID &&
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            className: F.lightThemeNotice,
                                            children: U.intl.string(U.t.nxwm3I),
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
            (0, r.jsx)(f.rsf, {
                label: U.intl.string(U.t.vceJPk),
                checked: t.hoist,
                onChange: (e) => (0, _.we)(t.id, e, t.mentionable),
                disabled: n,
            }),
            (0, r.jsx)(f.izJ, { className: F.divider }),
            (0, r.jsx)(f.rsf, {
                label: U.intl.formatToPlainString(U.t.DTXoJQ, {}),
                description: U.intl.string(U.t.kRg5W5),
                checked: t.mentionable,
                onChange: (e) => (0, _.we)(t.id, t.hoist, e),
                disabled: n,
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        s = (0, y.yH)(t.id, n),
        o = (0, d.e7)([T.Z], () => T.Z.getRoleStyleData(n.id)),
        c = !s,
        u = null != o && s ? o.currentStyle : T.g.SOLID,
        g = (0, I.fI)(n),
        m = i || g,
        b = (0, d.e7)([S.Z], () => S.Z.canImpersonateRole(t, n)),
        { headerHeight: p, headerRef: h } = (0, w.Z)(0),
        { scrolledToTop: x, handleScroll: j } = (0, R.V)();
    return (0, r.jsx)(f.yWw, {
        className: F.scroller,
        style: { scrollPaddingTop: p },
        onScroll: j,
        children: (0, r.jsxs)("div", {
            className: H.contentWidth,
            children: [
                (0, r.jsx)("div", {
                    className: a()(H.header, H.stickyHeader, { [H.stickyHeaderElevated]: !x }),
                    ref: h,
                    children: (0, r.jsx)(R.Z, {
                        guild: t,
                        role: n,
                        selectedSection: L.ZI.DISPLAY,
                        setSelectedSection: l,
                    }),
                }),
                (0, r.jsx)(Y, {
                    role: n,
                    disabled: m,
                }),
                (0, r.jsx)("div", {
                    className: F.noticeContainer,
                    children: (0, r.jsx)(A.Z, { role: n }),
                }),
                (0, r.jsx)(f.izJ, { className: F.divider }),
                (s || c) &&
                    null != u &&
                    (0, r.jsx)(q, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        disabled: m,
                        shouldShowUpsell: c,
                    }),
                u !== T.g.HOLOGRAPHIC &&
                    null != u &&
                    (0, r.jsx)(J, {
                        role: n,
                        disabled: m,
                        currentStyle: u,
                        hasEnhancedRoleColors: s,
                    }),
                u === T.g.HOLOGRAPHIC &&
                    (0, r.jsx)(E.Z, {
                        className: F.holographicInfoBox,
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-xs/medium",
                            children: U.intl.string(B.default.tBhCyr),
                        }),
                    }),
                (0, r.jsx)(Z.Z, {
                    guild: t,
                    disabled: m,
                    role: n,
                }),
                (0, r.jsx)(Q, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: u,
                    disableInteraction: !s,
                }),
                (0, r.jsx)(f.izJ, { className: F.divider }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: m,
                }),
                b
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.izJ, { className: F.divider }),
                              (0, r.jsx)(D.L, {
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
