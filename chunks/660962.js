(n.d(t, { ZP: () => ee }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(866442),
    d = n(442837),
    u = n(704215),
    m = n(780384),
    g = n(481060),
    p = n(37234),
    h = n(410030),
    f = n(607070),
    x = n(100527),
    b = n(663993),
    j = n(243778),
    v = n(518738),
    _ = n(753206),
    O = n(606318),
    y = n(402235),
    C = n(441536),
    N = n(494620),
    I = n(345162),
    E = n(496675),
    S = n(764260),
    T = n(946724),
    P = n(206950),
    w = n(95242),
    R = n(541575),
    Z = n(420966),
    D = n(337344),
    A = n(275296),
    k = n(203377),
    L = n(494831),
    M = n(981631),
    G = n(141006),
    U = n(388032),
    B = n(93841),
    F = n(275302),
    H = n(877248),
    z = n(179517),
    W = n(79829);
let V = (0, b.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    Y = o().debounce((e, t) => (0, S.Uv)(e, t), 200);
function K(e) {
    let { role: t, disabled: n } = e,
        [l, a] = i.useState(t.name);
    return (
        i.useEffect(() => {
            a(t.name);
        }, [t.name]),
        (0, r.jsx)(g.xJW, {
            title: U.intl.string(U.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(g.oil, {
                type: 'text',
                value: l,
                maxLength: M.VKK,
                onChange: function (e) {
                    (a(e), Y(t.id, e));
                },
                disabled: n
            })
        })
    );
}
function q(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: s } = e,
        o = (e) => l || (s && [T.g.HOLOGRAPHIC, T.g.GRADIENT].includes(e)),
        d = (0, P.F)(U.intl.string(U.t.Mi9KbW)),
        f = (0, h.ZP)(),
        b = (0, v.oC)(n, t),
        y = {
            dark: {
                src: z,
                name: t.name
            },
            light: {
                src: W,
                name: t.name
            }
        };
    return (0, r.jsxs)(g.xJW, {
        children: [
            (0, r.jsxs)(g.vwX, {
                className: F.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: U.intl.string(U.t['9wVJRE']) }),
                    (0, r.jsx)(j.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
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
                children: L.pM.map((e) => {
                    let { id: l, colors: s, labelString: u } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: a()(F.roleStylePreviewContainer, {
                                [F.selected]: i === l,
                                [F.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, S.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(g.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: F.roleStyleMessageContainer,
                                        children: (0, r.jsx)(_.Z, {
                                            author: {
                                                nick: d.author.username,
                                                guildId: n,
                                                authorId: d.author.id,
                                                colorRoleId: t.id,
                                                colorStrings: (0, O.DX)(s),
                                                colorString: (0, c.Rf)(s.primary_color)
                                            },
                                            message: d,
                                            preview: !0,
                                            roleIcon: null != b ? b : (0, m.ap)(f) ? y.light : y.dark,
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
            s &&
                (0, r.jsxs)('div', {
                    className: F.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: F.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: U.intl.format(B.default.VpEDJS, { magical: (0, r.jsx)(X, {}) })
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: U.intl.string(B.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsx)(g.zxk, {
                            onClick: function () {
                                ((0, C.Z)(n, x.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.xf)());
                            },
                            variant: 'expressive',
                            icon: g.$Eu,
                            text: U.intl.string(U.t['+7XY39'])
                        })
                    ]
                })
        ]
    });
}
function X() {
    let e = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.JUn)({
            colorStrings: (0, O.DX)(G.SK),
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
    let { role: i, disabled: l, currentStyle: a, hasEnhancedRoleColors: s } = e;
    return (0, r.jsxs)(g.xJW, {
        className: F.colorPicker,
        title: U.intl.string(U.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(g.R94, {
                className: F.colorDescription,
                children: U.intl.string(U.t['9UCxlZ'])
            }),
            (0, r.jsx)(V, {
                defaultColor: M.p6O,
                colors: a === T.g.GRADIENT && s ? G.tl : M.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return ((t = e), void (i.color !== t && (t !== M.p6O || 0 !== i.color) && (t === M.p6O && (t = 0), (0, S.OW)(i.id, t))));
                },
                secondaryValue: a === T.g.GRADIENT && s && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    (0, S.TW)(
                        i.id,
                        {
                            primary_color: e[0],
                            secondary_color: e[1],
                            tertiary_color: null
                        },
                        T.g.GRADIENT
                    );
                },
                isGradient: a === T.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function Q(e) {
    let { role: t, guildId: n, selectedStyle: i, disableInteraction: l } = e,
        s = (0, P.F)(U.intl.string(U.t.Mi9KbW)),
        o = {
            nick: s.author.username,
            guildId: n,
            authorId: s.author.id,
            colorRoleId: t.id,
            colorStrings: t.colorStrings,
            colorString: t.colorString
        },
        c = {
            src: z,
            name: t.name
        },
        d = {
            src: W,
            name: t.name
        },
        u = (0, v.oC)(n, t),
        p = [M.BRd.DARK, M.BRd.DARKER, M.BRd.MIDNIGHT, M.BRd.LIGHT];
    return (0, r.jsx)(g.Rny, {
        children: (0, r.jsx)('div', {
            className: a()(F.previewContainer, { [F.disableInteraction]: l }),
            'aria-hidden': !0,
            children: p.map((e) =>
                (0, r.jsx)(
                    g.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)('div', {
                                className: a()(t, F.messageWrapper),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: F.messageContainer,
                                        children: (0, r.jsx)(_.Z, {
                                            author: o,
                                            message: s,
                                            roleIcon: null != u ? u : (0, m.ap)(e) ? d : c,
                                            previewGuildId: n,
                                            isGroupStart: !0
                                        })
                                    }),
                                    e === M.BRd.LIGHT &&
                                        i !== T.g.SOLID &&
                                        (0, r.jsx)(g.Text, {
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
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, S.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: U.intl.string(U.t.vceJPj)
            }),
            (0, r.jsx)(g.$i$, { className: F.divider }),
            (0, r.jsx)(g.j7V, {
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
        s = (0, y.yH)(t.id, n),
        o = (0, d.e7)([T.Z], () => T.Z.getRoleStyleData(n.id)),
        c = !s,
        u = null != o && s ? o.currentStyle : T.g.SOLID,
        m = (0, I.fI)(n),
        p = i || m,
        h = (0, d.e7)([E.Z], () => E.Z.canImpersonateRole(t, n)),
        { headerHeight: f, headerRef: x } = (0, w.Z)(0),
        { scrolledToTop: b, handleScroll: j } = (0, Z.V)();
    return (0, r.jsx)(g.yWw, {
        className: F.scroller,
        style: { scrollPaddingTop: f },
        onScroll: j,
        children: (0, r.jsxs)('div', {
            className: H.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: a()(H.header, H.stickyHeader, { [H.stickyHeaderElevated]: !b }),
                    ref: x,
                    children: (0, r.jsx)(Z.Z, {
                        guild: t,
                        role: n,
                        selectedSection: k.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)(K, {
                    role: n,
                    disabled: p
                }),
                (0, r.jsx)('div', {
                    className: F.noticeContainer,
                    children: (0, r.jsx)(A.Z, { role: n })
                }),
                (0, r.jsx)(g.$i$, { className: F.divider }),
                (s || c) &&
                    null != u &&
                    (0, r.jsx)(q, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        disabled: p,
                        shouldShowUpsell: c
                    }),
                u !== T.g.HOLOGRAPHIC &&
                    null != u &&
                    (0, r.jsx)(J, {
                        role: n,
                        disabled: p,
                        currentStyle: u,
                        hasEnhancedRoleColors: s
                    }),
                u === T.g.HOLOGRAPHIC &&
                    (0, r.jsx)(N.Z, {
                        className: F.holographicInfoBox,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-xs/medium',
                            children: U.intl.string(B.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(R.Z, {
                    guild: t,
                    disabled: p,
                    role: n
                }),
                (0, r.jsx)(Q, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: u,
                    disableInteraction: !s
                }),
                (0, r.jsx)(g.$i$, { className: F.divider }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: p
                }),
                h
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.$i$, { className: F.divider }),
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
