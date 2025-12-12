n.d(t, { ZP: () => ee }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(866442),
    u = n(442837),
    d = n(704215),
    g = n(780384),
    m = n(481060),
    p = n(37234),
    f = n(410030),
    h = n(607070),
    x = n(100527),
    b = n(663993),
    j = n(243778),
    _ = n(518738),
    v = n(753206),
    O = n(606318),
    C = n(402235),
    y = n(441536),
    N = n(494620),
    E = n(345162),
    I = n(496675),
    S = n(84058),
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
    B = n(5238),
    F = n(12574),
    H = n(21321),
    W = n(179517),
    z = n(79829);
let V = (0, b.Un)({
        createPromise: () => n.e("4848").then(n.bind(n, 797967)),
        webpackId: 797967,
    }),
    K = o().debounce((e, t) => (0, S.Uv)(e, t), 200);
function Y(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(m.oil, {
            label: U.intl.string(U.t.dLbkBk),
            required: !0,
            type: "text",
            value: l,
            maxLength: G.VKK,
            onChange: function (e) {
                s(e), K(t.id, e);
            },
            disabled: n,
        })
    );
}
function q(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (0, P.F)(U.intl.string(U.t.Mi9Kbe)),
        u = (0, f.ZP)(),
        h = (0, _.oC)(n, t),
        b = {
            dark: {
                src: W,
                name: t.name,
            },
            light: {
                src: z,
                name: t.name,
            },
        };
    function C() {
        (0, y.Z)(n, x.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.xf)();
    }
    return (0, r.jsx)(j.ZP, {
        contentTypes: [d.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: (e) => {
            let { visibleContent: p } = e;
            return (0, r.jsxs)(m.gNt, {
                label: U.intl.string(U.t["9wVJRB"]),
                badge: p === d.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? "new" : void 0,
                children: [
                    (0, r.jsx)("div", {
                        className: F.roleStyleContainer,
                        children: k.pM.map((e) => {
                            let { id: d, colors: p, labelString: f } = e;
                            return (0, r.jsxs)(
                                "button",
                                {
                                    className: s()(F.roleStylePreviewContainer, {
                                        [F.selected]: i === d,
                                        [F.disabled]: l || (a && [T.g.HOLOGRAPHIC, T.g.GRADIENT].includes(d)),
                                    }),
                                    onClick: () => {
                                        (0, S.Jf)(t.id, d);
                                    },
                                    children: [
                                        (0, r.jsx)(m.Rny, {
                                            children: (0, r.jsx)("div", {
                                                className: F.roleStyleMessageContainer,
                                                children: (0, r.jsx)(v.Z, {
                                                    author: {
                                                        nick: o.author.username,
                                                        guildId: n,
                                                        authorId: o.author.id,
                                                        colorRoleId: t.id,
                                                        colorStrings: (0, O.DX)(p),
                                                        colorString: (0, c.Rf)(p.primary_color),
                                                    },
                                                    message: o,
                                                    preview: !0,
                                                    roleIcon: null != h ? h : (0, g.ap)(u) ? b.light : b.dark,
                                                    isGroupStart: !0,
                                                    disableInteraction: !0,
                                                    previewGuildId: n,
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: F.roleStyleLabel,
                                            children: U.intl.string(f),
                                        }),
                                    ],
                                },
                                d,
                            );
                        }),
                    }),
                    a &&
                        (0, r.jsxs)("div", {
                            className: F.roleStyleUpsell,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: F.roleStyleUpsellMesssages,
                                    children: [
                                        (0, r.jsx)(m.Text, {
                                            variant: "text-sm/semibold",
                                            color: "button-outline-primary-text",
                                            children: U.intl.format(B.default.VpEDJc, { magical: (0, r.jsx)(X, {}) }),
                                        }),
                                        (0, r.jsx)(m.Text, {
                                            variant: "text-xs/medium",
                                            color: "button-outline-primary-text",
                                            children: U.intl.string(B.default.FJZeZF),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(m.Button, {
                                    onClick: C,
                                    variant: "expressive",
                                    icon: m.Ucv,
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
    let e = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, m.JUn)({
            colorStrings: (0, O.DX)(M.SK),
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
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsx)("div", {
        className: F.colorPicker,
        children: (0, r.jsx)(m.gNt, {
            label: U.intl.string(U.t["1F6FzL"]),
            description: U.intl.string(U.t["9UCxlf"]),
            required: !0,
            children: (0, r.jsx)(V, {
                defaultColor: G.p6O,
                colors: s === T.g.GRADIENT && a ? M.tl : G.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return (
                        (t = e),
                        void (
                            i.color !== t &&
                            (t !== G.p6O || 0 !== i.color) &&
                            (t === G.p6O && (t = 0), (0, S.OW)(i.id, t))
                        )
                    );
                },
                secondaryValue:
                    s === T.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null
                        ? null == (n = i.colors)
                            ? void 0
                            : n.secondary_color
                        : void 0,
                onChangeGradientColors: (e) => {
                    (0, S.TW)(
                        i.id,
                        {
                            primary_color: e[0],
                            secondary_color: e[1],
                            tertiary_color: null,
                        },
                        T.g.GRADIENT,
                    );
                },
                isGradient: s === T.g.GRADIENT,
                customPickerPosition: "right",
            }),
        }),
    });
}
function Q(e) {
    let { role: t, guildId: n, selectedStyle: i, disableInteraction: l } = e,
        a = (0, P.F)(U.intl.string(U.t.Mi9Kbe)),
        o = {
            nick: a.author.username,
            guildId: n,
            authorId: a.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString,
        },
        c = {
            src: W,
            name: t.name,
        },
        u = {
            src: z,
            name: t.name,
        },
        d = (0, _.oC)(n, t),
        p = [G.BRd.DARK, G.BRd.DARKER, G.BRd.MIDNIGHT, G.BRd.LIGHT];
    return (0, r.jsx)(m.Rny, {
        children: (0, r.jsx)("div", {
            className: s()(F.previewContainer, { [F.disableInteraction]: l }),
            "aria-hidden": !0,
            children: p.map((e) =>
                (0, r.jsx)(
                    m.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: s()(t, F.messageWrapper),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: F.messageContainer,
                                        children: (0, r.jsx)(v.Z, {
                                            author: o,
                                            message: a,
                                            roleIcon: null != d ? d : (0, g.ap)(e) ? u : c,
                                            previewGuildId: n,
                                            isGroupStart: !0,
                                        }),
                                    }),
                                    e === G.BRd.LIGHT &&
                                        i !== T.g.SOLID &&
                                        (0, r.jsx)(m.Text, {
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
            (0, r.jsx)(m.rsf, {
                label: U.intl.string(U.t.vceJPk),
                checked: t.hoist,
                onChange: (e) => (0, S.we)(t.id, e, t.mentionable),
                disabled: n,
            }),
            (0, r.jsx)(m.izJ, { className: F.divider }),
            (0, r.jsx)(m.rsf, {
                label: U.intl.formatToPlainString(U.t.DTXoJQ, {}),
                description: U.intl.string(U.t.kRg5W5),
                checked: t.mentionable,
                onChange: (e) => (0, S.we)(t.id, t.hoist, e),
                disabled: n,
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, C.yH)(t.id, n),
        o = (0, u.e7)([T.Z], () => T.Z.getRoleStyleData(n.id)),
        c = !a,
        d = null != o && a ? o.currentStyle : T.g.SOLID,
        g = (0, E.fI)(n),
        p = i || g,
        f = (0, u.e7)([I.Z], () => I.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: x } = (0, w.Z)(0),
        { scrolledToTop: b, handleScroll: j } = (0, R.V)();
    return (0, r.jsx)(m.yWw, {
        className: F.scroller,
        style: { scrollPaddingTop: h },
        onScroll: j,
        children: (0, r.jsxs)("div", {
            className: H.contentWidth,
            children: [
                (0, r.jsx)("div", {
                    className: s()(H.header, H.stickyHeader, { [H.stickyHeaderElevated]: !b }),
                    ref: x,
                    children: (0, r.jsx)(R.Z, {
                        guild: t,
                        role: n,
                        selectedSection: L.ZI.DISPLAY,
                        setSelectedSection: l,
                    }),
                }),
                (0, r.jsx)(Y, {
                    role: n,
                    disabled: p,
                }),
                (0, r.jsx)("div", {
                    className: F.noticeContainer,
                    children: (0, r.jsx)(A.Z, { role: n }),
                }),
                (0, r.jsx)(m.izJ, { className: F.divider }),
                (a || c) &&
                    null != d &&
                    (0, r.jsx)(q, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: d,
                        disabled: p,
                        shouldShowUpsell: c,
                    }),
                d !== T.g.HOLOGRAPHIC &&
                    null != d &&
                    (0, r.jsx)(J, {
                        role: n,
                        disabled: p,
                        currentStyle: d,
                        hasEnhancedRoleColors: a,
                    }),
                d === T.g.HOLOGRAPHIC &&
                    (0, r.jsx)(N.Z, {
                        className: F.holographicInfoBox,
                        children: (0, r.jsx)(m.Text, {
                            variant: "text-xs/medium",
                            children: U.intl.string(B.default.tBhCyr),
                        }),
                    }),
                (0, r.jsx)(Z.Z, {
                    guild: t,
                    disabled: p,
                    role: n,
                }),
                (0, r.jsx)(Q, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: d,
                    disableInteraction: !a,
                }),
                (0, r.jsx)(m.izJ, { className: F.divider }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: p,
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.izJ, { className: F.divider }),
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
