(n.d(t, { ZP: () => el }), n(388685));
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
    g = n(481060),
    p = n(37234),
    f = n(410030),
    h = n(607070),
    x = n(100527),
    b = n(605436),
    j = n(663993),
    _ = n(243778),
    v = n(518738),
    O = n(786761),
    C = n(3148),
    y = n(753206),
    N = n(402235),
    I = n(441536),
    E = n(494620),
    S = n(598077),
    T = n(496675),
    P = n(709586),
    w = n(764260),
    R = n(946724),
    Z = n(95242),
    D = n(541575),
    k = n(420966),
    A = n(337344),
    L = n(275296),
    M = n(203377),
    G = n(981631),
    U = n(141006),
    B = n(388032),
    F = n(93841),
    z = n(275302),
    H = n(877248),
    V = n(179517),
    W = n(79829),
    Y = n(540167);
function K(e) {
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
let X = (0, j.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    q = o().debounce((e, t) => (0, w.Uv)(e, t), 200);
function Q(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(g.xJW, {
            title: B.intl.string(B.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(g.oil, {
                type: 'text',
                value: l,
                maxLength: G.VKK,
                onChange: function (e) {
                    (s(e), q(t.id, e));
                },
                disabled: n
            })
        })
    );
}
let J = [
    {
        id: R.g.SOLID,
        colors: { primary_color: G.p6O },
        labelString: B.t['8Qyaho']
    },
    {
        id: R.g.GRADIENT,
        colors: U.Eg,
        labelString: B.t.XpWmJy
    },
    {
        id: R.g.HOLOGRAPHIC,
        colors: U.SK,
        labelString: B.t.QTKppa
    }
];
function $(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (e) => l || (a && [R.g.HOLOGRAPHIC, R.g.GRADIENT].includes(e)),
        d = en(B.intl.string(B.t.Mi9KbW)),
        h = (0, f.ZP)(),
        b = (0, v.oC)(n, t),
        j = {
            dark: {
                src: V,
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
                className: z.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: B.intl.string(B.t['9wVJRE']) }),
                    (0, r.jsx)(_.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: B.intl.string(B.t.y2b7CA),
                                      className: z.newBadge
                                  })
                                : null;
                        }
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: z.roleStyleContainer,
                children: J.map((e) => {
                    let { id: l, colors: a, labelString: u } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: s()(z.roleStylePreviewContainer, {
                                [z.selected]: i === l,
                                [z.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, w.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(g.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: z.roleStyleMessageContainer,
                                        children: (0, r.jsx)(y.Z, {
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
                                            roleIcon: null != b ? b : (0, m.ap)(h) ? j.light : j.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: z.roleStyleLabel,
                                    children: B.intl.string(u)
                                })
                            ]
                        },
                        l
                    );
                })
            }),
            a &&
                (0, r.jsxs)('div', {
                    className: z.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: z.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: B.intl.format(F.default.VpEDJS, { magical: (0, r.jsx)(ee, {}) })
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: B.intl.string(F.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.gtL, {
                            size: g.zxk.Sizes.MEDIUM,
                            className: z.roleStyleUpsellButton,
                            innerClassName: z.roleStyleUpsellButtonContents,
                            shineSize: g.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                ((0, I.Z)(n, x.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.xf)());
                            },
                            look: g.zxk.Looks.FILLED,
                            color: g.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(P.Z, {
                                    className: z.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                B.intl.string(B.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function ee() {
    let e = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.JUn)({
            primaryColor: (0, c.Rf)(U.SK.primary_color),
            secondaryColor: (0, c.Rf)(U.SK.secondary_color),
            tertiaryColor: (0, c.Rf)(U.SK.tertiary_color),
            useReducedMotion: e,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)('span', {
        style: K({}, t),
        className: n,
        'data-text': B.intl.string(F.default['+/IHLi']),
        children: B.intl.string(F.default['+/IHLi'])
    });
}
function et(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(g.xJW, {
        className: z.colorPicker,
        title: B.intl.string(B.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(g.R94, {
                className: z.colorDescription,
                children: B.intl.string(B.t['9UCxlZ'])
            }),
            (0, r.jsx)(X, {
                defaultColor: G.p6O,
                colors: s === R.g.GRADIENT && a ? U.tl : G.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return ((t = e), void (i.color !== t && (t !== G.p6O || 0 !== i.color) && (t === G.p6O && (t = 0), (0, w.OW)(i.id, t))));
                },
                secondaryValue: s === R.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, w.TW)(i.id, t, R.g.GRADIENT);
                },
                isGradient: s === R.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function en(e) {
    return i.useMemo(() => {
        var t, n;
        let r = (0, O.e5)(
            ((t = K(
                {},
                (0, C.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (n = n =
                {
                    state: G.yb.SENT,
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
            (r.author = new S.Z({
                id: '313337',
                username: B.intl.string(B.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (r.author.getAvatarURL = () => Y.Z),
            r
        );
    }, [e]);
}
function er(e) {
    var t, n, i, l;
    let { role: a, guildId: o, selectedStyle: c, disableInteraction: d } = e,
        u = en(B.intl.string(B.t.Mi9KbW)),
        p = {
            nick: u.author.username,
            colorStrings: {
                primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (l = a.colorString) ? l : void 0
        },
        f = {
            src: V,
            name: a.name
        },
        h = {
            src: W,
            name: a.name
        },
        x = (0, v.oC)(o, a),
        b = [G.BRd.DARK, G.BRd.DARKER, G.BRd.MIDNIGHT, G.BRd.LIGHT];
    return (0, r.jsx)(g.Rny, {
        children: (0, r.jsx)('div', {
            className: s()(z.previewContainer, { [z.disableInteraction]: d }),
            'aria-hidden': !0,
            children: b.map((e) =>
                (0, r.jsx)(
                    g.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)('div', {
                                className: s()(t, z.messageWrapper),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: z.messageContainer,
                                        children: (0, r.jsx)(y.Z, {
                                            author: p,
                                            message: u,
                                            roleIcon: null != x ? x : (0, m.ap)(e) ? h : f,
                                            previewGuildId: o,
                                            isGroupStart: !0
                                        })
                                    }),
                                    e === G.BRd.LIGHT &&
                                        c !== R.g.SOLID &&
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-secondary',
                                            className: z.lightThemeNotice,
                                            children: B.intl.string(B.t.nxwm3N)
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
function ei(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, w.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: B.intl.string(B.t.vceJPj)
            }),
            (0, r.jsx)(g.$i$, { className: z.divider }),
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, w.we)(t.id, t.hoist, e),
                note: B.intl.string(B.t.kRg5W1),
                hideBorder: !0,
                children: B.intl.format(B.t.DTXoJS, {})
            })
        ]
    });
}
function el(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, N.yH)(t.id, n),
        o = (0, d.e7)([R.Z], () => R.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : R.g.SOLID,
        u = !a,
        m = (0, b.pM)(null == t ? void 0 : t.id, n.id),
        p = i || m,
        f = (0, d.e7)([T.Z], () => T.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: x } = (0, Z.Z)(0),
        { scrolledToTop: j, handleScroll: _ } = (0, k.V)();
    return (0, r.jsx)(g.yWw, {
        className: z.scroller,
        style: { scrollPaddingTop: h },
        onScroll: _,
        children: (0, r.jsxs)('div', {
            className: H.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(H.header, H.stickyHeader, { [H.stickyHeaderElevated]: !j }),
                    ref: x,
                    children: (0, r.jsx)(k.Z, {
                        guild: t,
                        role: n,
                        selectedSection: M.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)(Q, {
                    role: n,
                    disabled: p
                }),
                (0, r.jsx)('div', {
                    className: z.noticeContainer,
                    children: (0, r.jsx)(L.Z, { role: n })
                }),
                (0, r.jsx)(g.$i$, { className: z.divider }),
                (a || u) &&
                    null != c &&
                    (0, r.jsx)($, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: c,
                        disabled: p,
                        shouldShowUpsell: u
                    }),
                c !== R.g.HOLOGRAPHIC &&
                    null != c &&
                    (0, r.jsx)(et, {
                        role: n,
                        disabled: p,
                        currentStyle: c,
                        hasEnhancedRoleColors: a
                    }),
                c === R.g.HOLOGRAPHIC &&
                    (0, r.jsx)(E.Z, {
                        className: z.holographicInfoBox,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-xs/medium',
                            children: B.intl.string(F.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(D.Z, {
                    guild: t,
                    disabled: p,
                    role: n
                }),
                (0, r.jsx)(er, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: c,
                    disableInteraction: !a
                }),
                (0, r.jsx)(g.$i$, { className: z.divider }),
                (0, r.jsx)(ei, {
                    role: n,
                    disabled: p
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.$i$, { className: z.divider }),
                              (0, r.jsx)(A.L, {
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
