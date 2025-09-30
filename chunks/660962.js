n.d(t, { ZP: () => ee }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(866442),
    d = n(442837),
    u = n(704215),
    m = n(780384),
    g = n(481060),
    p = n(37234),
    f = n(410030),
    h = n(607070),
    x = n(100527),
    b = n(663993),
    j = n(243778),
    v = n(518738),
    _ = n(753206),
    O = n(606318),
    y = n(402235),
    C = n(441536),
    N = n(494620),
    E = n(345162),
    I = n(496675),
    S = n(84058),
    T = n(103576),
    P = n(206950),
    w = n(95242),
    R = n(541575),
    D = n(420966),
    Z = n(337344),
    A = n(275296),
    L = n(203377),
    k = n(494831),
    G = n(981631),
    M = n(141006),
    U = n(388032),
    B = n(989308),
    F = n(12574),
    H = n(21321),
    z = n(179517),
    V = n(79829);
let W = (0, b.Un)({
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
        (0, r.jsx)(g.oil, {
            label: U.intl.string(U.t.dLbkBg),
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
        o = (0, P.F)(U.intl.string(U.t.Mi9KbW)),
        d = (0, f.ZP)(),
        h = (0, v.oC)(n, t),
        b = {
            dark: {
                src: z,
                name: t.name,
            },
            light: {
                src: V,
                name: t.name,
            },
        };
    return (0, r.jsxs)(g.hjN, {
        children: [
            (0, r.jsxs)(g.vwX, {
                className: F.roleStyleFormTitle,
                children: [
                    (0, r.jsx)("div", { children: U.intl.string(U.t["9wVJRE"]) }),
                    (0, r.jsx)(j.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: U.intl.string(U.t.y2b7CA),
                                      className: F.newBadge,
                                  })
                                : null;
                        },
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: F.roleStyleContainer,
                children: k.pM.map((e) => {
                    let { id: u, colors: p, labelString: f } = e;
                    return (0, r.jsxs)(
                        "button",
                        {
                            className: s()(F.roleStylePreviewContainer, {
                                [F.selected]: i === u,
                                [F.disabled]: l || (a && [T.g.HOLOGRAPHIC, T.g.GRADIENT].includes(u)),
                            }),
                            onClick: () => {
                                (0, S.Jf)(t.id, u);
                            },
                            children: [
                                (0, r.jsx)(g.Rny, {
                                    children: (0, r.jsx)("div", {
                                        className: F.roleStyleMessageContainer,
                                        children: (0, r.jsx)(_.Z, {
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
                                            roleIcon: null != h ? h : (0, m.ap)(d) ? b.light : b.dark,
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
                        u,
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
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/semibold",
                                    color: "button-outline-primary-text",
                                    children: U.intl.format(B.default.VpEDJS, { magical: (0, r.jsx)(X, {}) }),
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-xs/medium",
                                    color: "button-outline-primary-text",
                                    children: U.intl.string(B.default.FJZeZG),
                                }),
                            ],
                        }),
                        (0, r.jsx)(g.zxk, {
                            onClick: function () {
                                (0, C.Z)(n, x.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.xf)();
                            },
                            variant: "expressive",
                            icon: g.$Eu,
                            text: U.intl.string(U.t["+7XY39"]),
                        }),
                    ],
                }),
        ],
    });
}
function X() {
    let e = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.JUn)({
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
        "data-text": U.intl.string(B.default["+/IHLi"]),
        children: U.intl.string(B.default["+/IHLi"]),
    });
}
function Q(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(g.xJW, {
        className: F.colorPicker,
        title: U.intl.string(U.t["1F6FzM"]),
        required: !0,
        children: [
            (0, r.jsx)(g.R94, {
                className: F.colorDescription,
                children: U.intl.string(U.t["9UCxlZ"]),
            }),
            (0, r.jsx)(W, {
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
        ],
    });
}
function J(e) {
    let { role: t, guildId: n, selectedStyle: i, disableInteraction: l } = e,
        a = (0, P.F)(U.intl.string(U.t.Mi9KbW)),
        o = {
            nick: a.author.username,
            guildId: n,
            authorId: a.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString,
        },
        c = {
            src: z,
            name: t.name,
        },
        d = {
            src: V,
            name: t.name,
        },
        u = (0, v.oC)(n, t),
        p = [G.BRd.DARK, G.BRd.DARKER, G.BRd.MIDNIGHT, G.BRd.LIGHT];
    return (0, r.jsx)(g.Rny, {
        children: (0, r.jsx)("div", {
            className: s()(F.previewContainer, { [F.disableInteraction]: l }),
            "aria-hidden": !0,
            children: p.map((e) =>
                (0, r.jsx)(
                    g.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)("div", {
                                className: s()(t, F.messageWrapper),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: F.messageContainer,
                                        children: (0, r.jsx)(_.Z, {
                                            author: o,
                                            message: a,
                                            roleIcon: null != u ? u : (0, m.ap)(e) ? d : c,
                                            previewGuildId: n,
                                            isGroupStart: !0,
                                        }),
                                    }),
                                    e === G.BRd.LIGHT &&
                                        i !== T.g.SOLID &&
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-secondary",
                                            className: F.lightThemeNotice,
                                            children: U.intl.string(U.t.nxwm3N),
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
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, S.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: U.intl.string(U.t.vceJPj),
            }),
            (0, r.jsx)(g.$i$, { className: F.divider }),
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, S.we)(t.id, t.hoist, e),
                note: U.intl.string(U.t.kRg5W1),
                hideBorder: !0,
                children: U.intl.format(U.t.DTXoJS, {}),
            }),
        ],
    });
}
function ee(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, y.yH)(t.id, n),
        o = (0, d.e7)([T.Z], () => T.Z.getRoleStyleData(n.id)),
        c = !a,
        u = null != o && a ? o.currentStyle : T.g.SOLID,
        m = (0, E.fI)(n),
        p = i || m,
        f = (0, d.e7)([I.Z], () => I.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: x } = (0, w.Z)(0),
        { scrolledToTop: b, handleScroll: j } = (0, D.V)();
    return (0, r.jsx)(g.yWw, {
        className: F.scroller,
        style: { scrollPaddingTop: h },
        onScroll: j,
        children: (0, r.jsxs)("div", {
            className: H.contentWidth,
            children: [
                (0, r.jsx)("div", {
                    className: s()(H.header, H.stickyHeader, { [H.stickyHeaderElevated]: !b }),
                    ref: x,
                    children: (0, r.jsx)(D.Z, {
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
                (0, r.jsx)(g.$i$, { className: F.divider }),
                (a || c) &&
                    null != u &&
                    (0, r.jsx)(q, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        disabled: p,
                        shouldShowUpsell: c,
                    }),
                u !== T.g.HOLOGRAPHIC &&
                    null != u &&
                    (0, r.jsx)(Q, {
                        role: n,
                        disabled: p,
                        currentStyle: u,
                        hasEnhancedRoleColors: a,
                    }),
                u === T.g.HOLOGRAPHIC &&
                    (0, r.jsx)(N.Z, {
                        className: F.holographicInfoBox,
                        children: (0, r.jsx)(g.Text, {
                            variant: "text-xs/medium",
                            children: U.intl.string(B.default.tBhCys),
                        }),
                    }),
                (0, r.jsx)(R.Z, {
                    guild: t,
                    disabled: p,
                    role: n,
                }),
                (0, r.jsx)(J, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: u,
                    disableInteraction: !a,
                }),
                (0, r.jsx)(g.$i$, { className: F.divider }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: p,
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.$i$, { className: F.divider }),
                              (0, r.jsx)(Z.L, {
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
