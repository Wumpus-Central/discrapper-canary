(n.d(t, { ZP: () => es }), n(388685));
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
    R = n(764260),
    Z = n(946724),
    D = n(95242),
    A = n(541575),
    L = n(420966),
    k = n(337344),
    M = n(275296),
    G = n(203377),
    U = n(981631),
    B = n(141006),
    F = n(388032),
    H = n(93841),
    z = n(275302),
    V = n(877248),
    W = n(179517),
    Y = n(79829),
    K = n(540167);
function X(e) {
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
let q = (0, v.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    Q = o().debounce((e, t) => (0, R.Uv)(e, t), 200);
function J(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(p.xJW, {
            title: F.intl.string(F.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(p.oil, {
                type: 'text',
                value: l,
                maxLength: U.VKK,
                onChange: function (e) {
                    (s(e), Q(t.id, e));
                },
                disabled: n
            })
        })
    );
}
let $ = [
    {
        id: Z.g.SOLID,
        colors: { primary_color: U.p6O },
        labelString: F.t['8Qyaho']
    },
    {
        id: Z.g.GRADIENT,
        colors: B.Eg,
        labelString: F.t.XpWmJy
    },
    {
        id: Z.g.HOLOGRAPHIC,
        colors: B.SK,
        labelString: F.t.QTKppa
    }
];
function ee(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (e) => l || (a && [Z.g.HOLOGRAPHIC, Z.g.GRADIENT].includes(e)),
        d = er(F.intl.string(F.t.Mi9KbW)),
        h = (0, x.ZP)(),
        b = (0, C.oC)(n, t),
        _ = {
            dark: {
                src: W,
                name: t.name
            },
            light: {
                src: Y,
                name: t.name
            }
        };
    return (0, r.jsxs)(p.xJW, {
        children: [
            (0, r.jsxs)(p.vwX, {
                className: z.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: F.intl.string(F.t['9wVJRE']) }),
                    (0, r.jsx)(O.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(p.IGR, {
                                      text: F.intl.string(F.t.y2b7CA),
                                      className: z.newBadge
                                  })
                                : null;
                        }
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: z.roleStyleContainer,
                children: $.map((e) => {
                    let { id: l, colors: a, labelString: u } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: s()(z.roleStylePreviewContainer, {
                                [z.selected]: i === l,
                                [z.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, R.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(p.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: z.roleStyleMessageContainer,
                                        children: (0, r.jsx)(I.Z, {
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
                                            roleIcon: null != b ? b : (0, m.ap)(h) ? _.light : _.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: z.roleStyleLabel,
                                    children: F.intl.string(u)
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
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: F.intl.format(H.default.VpEDJS, { magical: (0, r.jsx)(et, {}) })
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: F.intl.string(H.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(p.gtL, {
                            size: g.zx.Sizes.MEDIUM,
                            className: z.roleStyleUpsellButton,
                            innerClassName: z.roleStyleUpsellButtonContents,
                            shineSize: p.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                ((0, S.Z)(n, j.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, f.xf)());
                            },
                            look: g.zx.Looks.FILLED,
                            color: g.zx.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(p.$Eu, {
                                    color: 'white',
                                    size: 'custom',
                                    className: z.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                F.intl.string(F.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function et() {
    let e = (0, d.e7)([b.Z], () => b.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, p.JUn)({
            primaryColor: (0, c.Rf)(B.SK.primary_color),
            secondaryColor: (0, c.Rf)(B.SK.secondary_color),
            tertiaryColor: (0, c.Rf)(B.SK.tertiary_color),
            useReducedMotion: e,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)('span', {
        style: X({}, t),
        className: n,
        'data-text': F.intl.string(H.default['+/IHLi']),
        children: F.intl.string(H.default['+/IHLi'])
    });
}
function en(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(p.xJW, {
        className: z.colorPicker,
        title: F.intl.string(F.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(p.R94, {
                className: z.colorDescription,
                children: F.intl.string(F.t['9UCxlZ'])
            }),
            (0, r.jsx)(q, {
                defaultColor: U.p6O,
                colors: s === Z.g.GRADIENT && a ? B.tl : U.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return ((t = e), void (i.color !== t && (t !== U.p6O || 0 !== i.color) && (t === U.p6O && (t = 0), (0, R.OW)(i.id, t))));
                },
                secondaryValue: s === Z.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, R.TW)(i.id, t, Z.g.GRADIENT);
                },
                isGradient: s === Z.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function er(e) {
    return i.useMemo(() => {
        var t, n;
        let r = (0, y.e5)(
            ((t = X(
                {},
                (0, N.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (n = n =
                {
                    state: U.yb.SENT,
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
                    username: F.intl.string(F.t.cqpybG),
                    discriminator: '0000',
                    bot: !1
                })
            )),
            (r.author.getAvatarURL = () => K.Z),
            r
        );
    }, [e]);
}
function ei(e) {
    var t, n, i, l;
    let { role: a, guildId: o, selectedStyle: c, disableInteraction: d } = e,
        u = er(F.intl.string(F.t.Mi9KbW)),
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
            src: W,
            name: a.name
        },
        h = {
            src: Y,
            name: a.name
        },
        x = (0, C.oC)(o, a),
        b = [U.BRd.DARK, U.BRd.DARKER, U.BRd.MIDNIGHT, U.BRd.LIGHT];
    return (0, r.jsx)(p.Rny, {
        children: (0, r.jsx)('div', {
            className: s()(z.previewContainer, { [z.disableInteraction]: d }),
            'aria-hidden': !0,
            children: b.map((e) =>
                (0, r.jsx)(
                    p.f6W,
                    {
                        theme: e,
                        disableAdaptiveTheme: !0,
                        children: (t) =>
                            (0, r.jsxs)('div', {
                                className: s()(t, z.messageWrapper),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: z.messageContainer,
                                        children: (0, r.jsx)(I.Z, {
                                            author: g,
                                            message: u,
                                            roleIcon: null != x ? x : (0, m.ap)(e) ? h : f,
                                            previewGuildId: o,
                                            isGroupStart: !0
                                        })
                                    }),
                                    e === U.BRd.LIGHT &&
                                        c !== Z.g.SOLID &&
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-secondary',
                                            className: z.lightThemeNotice,
                                            children: F.intl.string(F.t.nxwm3N)
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
function el(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, R.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: F.intl.string(F.t.vceJPj)
            }),
            (0, r.jsx)(p.$i$, { className: z.divider }),
            (0, r.jsx)(p.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, R.we)(t.id, t.hoist, e),
                note: F.intl.string(F.t.kRg5W1),
                hideBorder: !0,
                children: F.intl.format(F.t.DTXoJS, {})
            })
        ]
    });
}
function es(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, E.yH)(t.id, n),
        o = (0, d.e7)([Z.Z], () => Z.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : Z.g.SOLID,
        u = !a,
        m = (0, _.pM)(null == t ? void 0 : t.id, n.id),
        g = i || m,
        f = (0, d.e7)([w.Z], () => w.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: x } = (0, D.Z)(0),
        { scrolledToTop: b, handleScroll: j } = (0, L.V)();
    return (0, r.jsx)(p.yWw, {
        className: z.scroller,
        style: { scrollPaddingTop: h },
        onScroll: j,
        children: (0, r.jsxs)('div', {
            className: V.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(V.header, V.stickyHeader, { [V.stickyHeaderElevated]: !b }),
                    ref: x,
                    children: (0, r.jsx)(L.Z, {
                        guild: t,
                        role: n,
                        selectedSection: G.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)(J, {
                    role: n,
                    disabled: g
                }),
                (0, r.jsx)('div', {
                    className: z.noticeContainer,
                    children: (0, r.jsx)(M.Z, { role: n })
                }),
                (0, r.jsx)(p.$i$, { className: z.divider }),
                (a || u) &&
                    null != c &&
                    (0, r.jsx)(ee, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: c,
                        disabled: g,
                        shouldShowUpsell: u
                    }),
                c !== Z.g.HOLOGRAPHIC &&
                    null != c &&
                    (0, r.jsx)(en, {
                        role: n,
                        disabled: g,
                        currentStyle: c,
                        hasEnhancedRoleColors: a
                    }),
                c === Z.g.HOLOGRAPHIC &&
                    (0, r.jsx)(T.Z, {
                        className: z.holographicInfoBox,
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-xs/medium',
                            children: F.intl.string(H.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(A.Z, {
                    guild: t,
                    disabled: g,
                    role: n
                }),
                (0, r.jsx)(ei, {
                    role: n,
                    guildId: t.id,
                    selectedStyle: c,
                    disableInteraction: !a
                }),
                (0, r.jsx)(p.$i$, { className: z.divider }),
                (0, r.jsx)(el, {
                    role: n,
                    disabled: g
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(p.$i$, { className: z.divider }),
                              (0, r.jsx)(k.L, {
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
