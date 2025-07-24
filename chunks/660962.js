(n.d(t, { ZP: () => ee }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(866442),
    d = n(442837),
    u = n(704215),
    m = n(780384),
    g = n(755721),
    p = n(481060),
    f = n(37234),
    h = n(410030),
    x = n(607070),
    b = n(100527),
    j = n(605436),
    v = n(663993),
    _ = n(243778),
    O = n(518738),
    C = n(753206),
    y = n(402235),
    N = n(441536),
    I = n(494620),
    E = n(496675),
    S = n(764260),
    T = n(946724),
    P = n(206950),
    w = n(95242),
    R = n(541575),
    Z = n(420966),
    D = n(337344),
    A = n(275296),
    L = n(203377),
    k = n(494831),
    M = n(981631),
    G = n(141006),
    U = n(388032),
    B = n(93841),
    F = n(275302),
    H = n(877248),
    z = n(179517),
    W = n(79829);
let V = (0, v.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    Y = o().debounce((e, t) => (0, S.Uv)(e, t), 200);
function K(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(p.xJW, {
            title: U.intl.string(U.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(p.oil, {
                type: 'text',
                value: l,
                maxLength: M.VKK,
                onChange: function (e) {
                    (s(e), Y(t.id, e));
                },
                disabled: n
            })
        })
    );
}
function X(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (e) => l || (a && [T.g.HOLOGRAPHIC, T.g.GRADIENT].includes(e)),
        d = (0, P.F)(U.intl.string(U.t.Mi9KbW)),
        x = (0, h.ZP)(),
        j = (0, O.oC)(n, t),
        v = {
            dark: {
                src: z,
                name: t.name
            },
            light: {
                src: W,
                name: t.name
            }
        };
    return (0, r.jsxs)(p.xJW, {
        children: [
            (0, r.jsxs)(p.vwX, {
                className: F.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: U.intl.string(U.t['9wVJRE']) }),
                    (0, r.jsx)(_.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(p.IGR, {
                                      text: U.intl.string(U.t.y2b7CA),
                                      className: F.newBadge
                                  })
                                : null;
                        }
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: F.roleStyleContainer,
                children: k.pM.map((e) => {
                    let { id: l, colors: a, labelString: u } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: s()(F.roleStylePreviewContainer, {
                                [F.selected]: i === l,
                                [F.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, S.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(p.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: F.roleStyleMessageContainer,
                                        children: (0, r.jsx)(C.Z, {
                                            author: {
                                                nick: d.author.username,
                                                guildId: n,
                                                authorId: d.author.id,
                                                colorRoleId: t.id,
                                                colorStrings: {
                                                    primaryColor: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0,
                                                    secondaryColor: null != a.secondary_color ? (0, c.Rf)(a.secondary_color) : void 0,
                                                    tertiaryColor: null != a.tertiary_color ? (0, c.Rf)(a.tertiary_color) : void 0
                                                },
                                                colorString: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0
                                            },
                                            message: d,
                                            preview: !0,
                                            roleIcon: null != j ? j : (0, m.ap)(x) ? v.light : v.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: F.roleStyleLabel,
                                    children: U.intl.string(u)
                                })
                            ]
                        },
                        l
                    );
                })
            }),
            a &&
                (0, r.jsxs)('div', {
                    className: F.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: F.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: U.intl.format(B.default.VpEDJS, { magical: (0, r.jsx)(q, {}) })
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: U.intl.string(B.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(p.gtL, {
                            size: g.zx.Sizes.MEDIUM,
                            className: F.roleStyleUpsellButton,
                            innerClassName: F.roleStyleUpsellButtonContents,
                            shineSize: p.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                ((0, N.Z)(n, b.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, f.xf)());
                            },
                            look: g.zx.Looks.FILLED,
                            color: g.zx.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(p.$Eu, {
                                    color: 'white',
                                    size: 'custom',
                                    className: F.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                U.intl.string(U.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function q() {
    let e = (0, d.e7)([x.Z], () => x.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, p.JUn)({
            primaryColor: (0, c.Rf)(G.SK.primary_color),
            secondaryColor: (0, c.Rf)(G.SK.secondary_color),
            tertiaryColor: (0, c.Rf)(G.SK.tertiary_color),
            useReducedMotion: e,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)('span', {
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })({}, t),
        className: n,
        'data-text': U.intl.string(B.default['+/IHLi']),
        children: U.intl.string(B.default['+/IHLi'])
    });
}
function J(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(p.xJW, {
        className: F.colorPicker,
        title: U.intl.string(U.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(p.R94, {
                className: F.colorDescription,
                children: U.intl.string(U.t['9UCxlZ'])
            }),
            (0, r.jsx)(V, {
                defaultColor: M.p6O,
                colors: s === T.g.GRADIENT && a ? G.tl : M.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return ((t = e), void (i.color !== t && (t !== M.p6O || 0 !== i.color) && (t === M.p6O && (t = 0), (0, S.OW)(i.id, t))));
                },
                secondaryValue: s === T.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, S.TW)(i.id, t, T.g.GRADIENT);
                },
                isGradient: s === T.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function Q(e) {
    var t, n, i, l;
    let { role: a, guildId: o, selectedStyle: c, disableInteraction: d } = e,
        u = (0, P.F)(U.intl.string(U.t.Mi9KbW)),
        g = {
            nick: u.author.username,
            guildId: o,
            authorId: u.author.id,
            colorRoleId: a.id,
            colorStrings: {
                primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (l = a.colorString) ? l : void 0
        },
        f = {
            src: z,
            name: a.name
        },
        h = {
            src: W,
            name: a.name
        },
        x = (0, O.oC)(o, a),
        b = [M.BRd.DARK, M.BRd.DARKER, M.BRd.MIDNIGHT, M.BRd.LIGHT];
    return (0, r.jsx)(p.Rny, {
        children: (0, r.jsx)('div', {
            className: s()(F.previewContainer, { [F.disableInteraction]: d }),
            'aria-hidden': !0,
            children: b.map((e) =>
                (0, r.jsx)(
                    p.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)('div', {
                                className: s()(t, F.messageWrapper),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: F.messageContainer,
                                        children: (0, r.jsx)(C.Z, {
                                            author: g,
                                            message: u,
                                            roleIcon: null != x ? x : (0, m.ap)(e) ? h : f,
                                            previewGuildId: o,
                                            isGroupStart: !0
                                        })
                                    }),
                                    e === M.BRd.LIGHT &&
                                        c !== T.g.SOLID &&
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-secondary',
                                            className: F.lightThemeNotice,
                                            children: U.intl.string(U.t.nxwm3N)
                                        })
                                ]
                            })
                    },
                    e
                )
            )
        })
    });
}
function $(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, S.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: U.intl.string(U.t.vceJPj)
            }),
            (0, r.jsx)(p.$i$, { className: F.divider }),
            (0, r.jsx)(p.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, S.we)(t.id, t.hoist, e),
                note: U.intl.string(U.t.kRg5W1),
                hideBorder: !0,
                children: U.intl.format(U.t.DTXoJS, {})
            })
        ]
    });
}
function ee(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, y.yH)(t.id, n),
        o = (0, d.e7)([T.Z], () => T.Z.getRoleStyleData(n.id)),
        c = !a,
        u = null != o && a ? o.currentStyle : T.g.SOLID,
        m = (0, j.pM)(null == t ? void 0 : t.id, n.id),
        g = i || m,
        f = (0, d.e7)([E.Z], () => E.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: x } = (0, w.Z)(0),
        { scrolledToTop: b, handleScroll: v } = (0, Z.V)();
    return (0, r.jsx)(p.yWw, {
        className: F.scroller,
        style: { scrollPaddingTop: h },
        onScroll: v,
        children: (0, r.jsxs)('div', {
            className: H.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(H.header, H.stickyHeader, { [H.stickyHeaderElevated]: !b }),
                    ref: x,
                    children: (0, r.jsx)(Z.Z, {
                        guild: t,
                        role: n,
                        selectedSection: L.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)(K, {
                    role: n,
                    disabled: g
                }),
                (0, r.jsx)('div', {
                    className: F.noticeContainer,
                    children: (0, r.jsx)(A.Z, { role: n })
                }),
                (0, r.jsx)(p.$i$, { className: F.divider }),
                (a || c) &&
                    null != u &&
                    (0, r.jsx)(X, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        disabled: g,
                        shouldShowUpsell: c
                    }),
                u !== T.g.HOLOGRAPHIC &&
                    null != u &&
                    (0, r.jsx)(J, {
                        role: n,
                        disabled: g,
                        currentStyle: u,
                        hasEnhancedRoleColors: a
                    }),
                u === T.g.HOLOGRAPHIC &&
                    (0, r.jsx)(I.Z, {
                        className: F.holographicInfoBox,
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-xs/medium',
                            children: U.intl.string(B.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(R.Z, {
                    guild: t,
                    disabled: g,
                    role: n
                }),
                (0, r.jsx)(Q, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: u,
                    disableInteraction: !a
                }),
                (0, r.jsx)(p.$i$, { className: F.divider }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: g
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(p.$i$, { className: F.divider }),
                              (0, r.jsx)(D.L, {
                                  guildId: t.id,
                                  role: n
                              })
                          ]
                      })
                    : null
            ]
        })
    });
}
