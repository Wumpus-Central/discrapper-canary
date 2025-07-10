(n.d(t, { ZP: () => ea }), n(388685));
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
    h = n(232567),
    x = n(410030),
    b = n(607070),
    j = n(100527),
    _ = n(605436),
    v = n(663993),
    O = n(243778),
    C = n(518738),
    y = n(786761),
    N = n(3148),
    I = n(753206),
    E = n(402235),
    S = n(441536),
    T = n(494620),
    P = n(598077),
    w = n(496675),
    R = n(709586),
    Z = n(764260),
    D = n(946724),
    A = n(95242),
    L = n(541575),
    k = n(420966),
    M = n(337344),
    G = n(275296),
    U = n(203377),
    B = n(981631),
    F = n(141006),
    H = n(388032),
    z = n(93841),
    V = n(275302),
    W = n(877248),
    Y = n(179517),
    K = n(79829),
    X = n(540167);
function q(e) {
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
}
let Q = (0, v.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    J = o().debounce((e, t) => (0, Z.Uv)(e, t), 200);
function $(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(p.xJW, {
            title: H.intl.string(H.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(p.oil, {
                type: 'text',
                value: l,
                maxLength: B.VKK,
                onChange: function (e) {
                    (s(e), J(t.id, e));
                },
                disabled: n
            })
        })
    );
}
let ee = [
    {
        id: D.g.SOLID,
        colors: { primary_color: B.p6O },
        labelString: H.t['8Qyaho']
    },
    {
        id: D.g.GRADIENT,
        colors: F.Eg,
        labelString: H.t.XpWmJy
    },
    {
        id: D.g.HOLOGRAPHIC,
        colors: F.SK,
        labelString: H.t.QTKppa
    }
];
function et(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (e) => l || (a && [D.g.HOLOGRAPHIC, D.g.GRADIENT].includes(e)),
        d = ei(H.intl.string(H.t.Mi9KbW)),
        h = (0, x.ZP)(),
        b = (0, C.oC)(n, t),
        _ = {
            dark: {
                src: Y,
                name: t.name
            },
            light: {
                src: K,
                name: t.name
            }
        };
    return (0, r.jsxs)(p.xJW, {
        children: [
            (0, r.jsxs)(p.vwX, {
                className: V.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: H.intl.string(H.t['9wVJRE']) }),
                    (0, r.jsx)(O.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(p.IGR, {
                                      text: H.intl.string(H.t.y2b7CA),
                                      className: V.newBadge
                                  })
                                : null;
                        }
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: V.roleStyleContainer,
                children: ee.map((e) => {
                    let { id: l, colors: a, labelString: u } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: s()(V.roleStylePreviewContainer, {
                                [V.selected]: i === l,
                                [V.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, Z.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(p.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: V.roleStyleMessageContainer,
                                        children: (0, r.jsx)(I.Z, {
                                            author: {
                                                nick: d.author.username,
                                                colorStrings: {
                                                    primaryColor: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0,
                                                    secondaryColor: null != a.secondary_color ? (0, c.Rf)(a.secondary_color) : void 0,
                                                    tertiaryColor: null != a.tertiary_color ? (0, c.Rf)(a.tertiary_color) : void 0
                                                },
                                                colorString: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0
                                            },
                                            message: d,
                                            preview: !0,
                                            roleIcon: null != b ? b : (0, m.ap)(h) ? _.light : _.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: V.roleStyleLabel,
                                    children: H.intl.string(u)
                                })
                            ]
                        },
                        l
                    );
                })
            }),
            a &&
                (0, r.jsxs)('div', {
                    className: V.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: V.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: H.intl.format(z.default.VpEDJS, { magical: (0, r.jsx)(en, {}) })
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: H.intl.string(z.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(p.gtL, {
                            size: g.zx.Sizes.MEDIUM,
                            className: V.roleStyleUpsellButton,
                            innerClassName: V.roleStyleUpsellButtonContents,
                            shineSize: p.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                ((0, S.Z)(n, j.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, f.xf)());
                            },
                            look: g.zx.Looks.FILLED,
                            color: g.zx.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(R.Z, {
                                    className: V.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                H.intl.string(H.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function en() {
    let e = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, p.JUn)({
            primaryColor: (0, c.Rf)(F.SK.primary_color),
            secondaryColor: (0, c.Rf)(F.SK.secondary_color),
            tertiaryColor: (0, c.Rf)(F.SK.tertiary_color),
            useReducedMotion: e,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)('span', {
        style: q({}, t),
        className: n,
        'data-text': H.intl.string(z.default['+/IHLi']),
        children: H.intl.string(z.default['+/IHLi'])
    });
}
function er(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(p.xJW, {
        className: V.colorPicker,
        title: H.intl.string(H.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(p.R94, {
                className: V.colorDescription,
                children: H.intl.string(H.t['9UCxlZ'])
            }),
            (0, r.jsx)(Q, {
                defaultColor: B.p6O,
                colors: s === D.g.GRADIENT && a ? F.tl : B.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return ((t = e), void (i.color !== t && (t !== B.p6O || 0 !== i.color) && (t === B.p6O && (t = 0), (0, Z.OW)(i.id, t))));
                },
                secondaryValue: s === D.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, Z.TW)(i.id, t, D.g.GRADIENT);
                },
                isGradient: s === D.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function ei(e) {
    return i.useMemo(() => {
        var t, n;
        let r = (0, y.e5)(
            ((t = q(
                {},
                (0, N.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (n = n =
                {
                    state: B.yb.SENT,
                    id: '31337'
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
        return (
            (r.author = h.$k(
                new P.Z({
                    id: '313337',
                    username: H.intl.string(H.t.cqpybG),
                    discriminator: '0000',
                    bot: !1
                })
            )),
            (r.author.getAvatarURL = () => X.Z),
            r
        );
    }, [e]);
}
function el(e) {
    var t, n, i, l;
    let { role: a, guildId: o, selectedStyle: c, disableInteraction: d } = e,
        u = ei(H.intl.string(H.t.Mi9KbW)),
        g = {
            nick: u.author.username,
            colorStrings: {
                primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (l = a.colorString) ? l : void 0
        },
        f = {
            src: Y,
            name: a.name
        },
        h = {
            src: K,
            name: a.name
        },
        x = (0, C.oC)(o, a),
        b = [B.BRd.DARK, B.BRd.DARKER, B.BRd.MIDNIGHT, B.BRd.LIGHT];
    return (0, r.jsx)(p.Rny, {
        children: (0, r.jsx)('div', {
            className: s()(V.previewContainer, { [V.disableInteraction]: d }),
            'aria-hidden': !0,
            children: b.map((e) =>
                (0, r.jsx)(
                    p.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)('div', {
                                className: s()(t, V.messageWrapper),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: V.messageContainer,
                                        children: (0, r.jsx)(I.Z, {
                                            author: g,
                                            message: u,
                                            roleIcon: null != x ? x : (0, m.ap)(e) ? h : f,
                                            previewGuildId: o,
                                            isGroupStart: !0
                                        })
                                    }),
                                    e === B.BRd.LIGHT &&
                                        c !== D.g.SOLID &&
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-secondary',
                                            className: V.lightThemeNotice,
                                            children: H.intl.string(H.t.nxwm3N)
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
function es(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, Z.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: H.intl.string(H.t.vceJPj)
            }),
            (0, r.jsx)(p.$i$, { className: V.divider }),
            (0, r.jsx)(p.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, Z.we)(t.id, t.hoist, e),
                note: H.intl.string(H.t.kRg5W1),
                hideBorder: !0,
                children: H.intl.format(H.t.DTXoJS, {})
            })
        ]
    });
}
function ea(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, E.yH)(t.id, n),
        o = (0, d.e7)([D.Z], () => D.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : D.g.SOLID,
        u = !a,
        m = (0, _.pM)(null == t ? void 0 : t.id, n.id),
        g = i || m,
        f = (0, d.e7)([w.Z], () => w.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: x } = (0, A.Z)(0),
        { scrolledToTop: b, handleScroll: j } = (0, k.V)();
    return (0, r.jsx)(p.yWw, {
        className: V.scroller,
        style: { scrollPaddingTop: h },
        onScroll: j,
        children: (0, r.jsxs)('div', {
            className: W.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(W.header, W.stickyHeader, { [W.stickyHeaderElevated]: !b }),
                    ref: x,
                    children: (0, r.jsx)(k.Z, {
                        guild: t,
                        role: n,
                        selectedSection: U.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: g
                }),
                (0, r.jsx)('div', {
                    className: V.noticeContainer,
                    children: (0, r.jsx)(G.Z, { role: n })
                }),
                (0, r.jsx)(p.$i$, { className: V.divider }),
                (a || u) &&
                    null != c &&
                    (0, r.jsx)(et, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: c,
                        disabled: g,
                        shouldShowUpsell: u
                    }),
                c !== D.g.HOLOGRAPHIC &&
                    null != c &&
                    (0, r.jsx)(er, {
                        role: n,
                        disabled: g,
                        currentStyle: c,
                        hasEnhancedRoleColors: a
                    }),
                c === D.g.HOLOGRAPHIC &&
                    (0, r.jsx)(T.Z, {
                        className: V.holographicInfoBox,
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-xs/medium',
                            children: H.intl.string(z.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(L.Z, {
                    guild: t,
                    disabled: g,
                    role: n
                }),
                (0, r.jsx)(el, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: c,
                    disableInteraction: !a
                }),
                (0, r.jsx)(p.$i$, { className: V.divider }),
                (0, r.jsx)(es, {
                    role: n,
                    disabled: g
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(p.$i$, { className: V.divider }),
                              (0, r.jsx)(M.L, {
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
