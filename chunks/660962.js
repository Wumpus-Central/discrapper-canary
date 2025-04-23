n.d(t, { ZP: () => ea }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(866442),
    u = n(442837),
    d = n(704215),
    m = n(780384),
    g = n(481060),
    p = n(37234),
    f = n(410030),
    h = n(607070),
    x = n(605436),
    b = n(663993),
    j = n(540059),
    _ = n(243778),
    v = n(518738),
    O = n(786761),
    C = n(3148),
    y = n(753206),
    N = n(181918),
    I = n(50101),
    E = n(441536),
    S = n(477747),
    T = n(494620),
    P = n(598077),
    w = n(496675),
    R = n(709586),
    Z = n(764260),
    D = n(946724),
    k = n(95242),
    A = n(541575),
    L = n(420966),
    M = n(337344),
    G = n(275296),
    U = n(203377),
    B = n(981631),
    F = n(141006),
    z = n(388032),
    H = n(680278),
    W = n(275302),
    V = n(877248),
    Y = n(179517),
    K = n(79829),
    X = n(540167);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let Q = (0, b.Un)({
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
        (0, r.jsx)(g.xJW, {
            title: z.intl.string(z.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(g.oil, {
                type: 'text',
                value: l,
                maxLength: B.VKK,
                onChange: function (e) {
                    s(e), J(t.id, e);
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
        labelString: z.t['8Qyaho']
    },
    {
        id: D.g.GRADIENT,
        colors: F.Eg,
        labelString: z.t.XpWmJy
    },
    {
        id: D.g.HOLOGRAPHIC,
        colors: F.SK,
        labelString: z.t.QTKppa
    }
];
function et(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (e) => l || (a && [D.g.HOLOGRAPHIC, D.g.GRADIENT].includes(e)),
        u = ei(z.intl.string(z.t.Mi9KbW)),
        h = (0, f.ZP)(),
        x = (0, v.oC)(n, t),
        b = {
            dark: {
                src: Y,
                name: t.name
            },
            light: {
                src: K,
                name: t.name
            }
        };
    return (0, r.jsxs)(g.xJW, {
        children: [
            (0, r.jsxs)(g.vwX, {
                className: W.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: z.intl.string(z.t['9wVJRE']) }),
                    (0, r.jsx)(_.ZP, {
                        contentTypes: [d.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === d.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: z.intl.string(z.t.y2b7CA),
                                      className: W.newBadge
                                  })
                                : null;
                        }
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: W.roleStyleContainer,
                children: ee.map((e) => {
                    let { id: l, colors: a, labelString: d } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: s()(W.roleStylePreviewContainer, {
                                [W.selected]: i === l,
                                [W.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, Z.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(g.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: W.roleStyleMessageContainer,
                                        children: (0, r.jsx)(y.Z, {
                                            author: {
                                                nick: u.author.username,
                                                colorStrings: {
                                                    primaryColor: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0,
                                                    secondaryColor: null != a.secondary_color ? (0, c.Rf)(a.secondary_color) : void 0,
                                                    tertiaryColor: null != a.tertiary_color ? (0, c.Rf)(a.tertiary_color) : void 0
                                                },
                                                colorString: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0
                                            },
                                            message: u,
                                            preview: !0,
                                            roleIcon: null != x ? x : (0, m.ap)(h) ? b.light : b.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: W.roleStyleLabel,
                                    children: z.intl.string(d)
                                })
                            ]
                        },
                        l
                    );
                })
            }),
            a &&
                (0, r.jsxs)('div', {
                    className: W.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: W.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: z.intl.format(H.default.VpEDJS, { magical: (0, r.jsx)(en, {}) })
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: z.intl.string(H.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.gtL, {
                            size: g.zxk.Sizes.MEDIUM,
                            className: W.roleStyleUpsellButton,
                            innerClassName: W.roleStyleUpsellButtonContents,
                            shineSize: g.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                (0, E.Z)(n), (0, p.xf)();
                            },
                            look: g.zxk.Looks.FILLED,
                            color: g.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(R.Z, {
                                    className: W.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                z.intl.string(z.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function en() {
    let e = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.JUn)({
            primaryColor: (0, c.Rf)(F.SK.primary_color),
            secondaryColor: (0, c.Rf)(F.SK.secondary_color),
            tertiaryColor: (0, c.Rf)(F.SK.tertiary_color),
            useReducedMotion: e,
            roleStyle: 'username',
            includeConvenienceGlow: !0
        });
    return (0, r.jsx)('span', {
        style: q({}, t),
        className: n,
        'data-text': z.intl.string(H.default['+/IHLi']),
        children: z.intl.string(H.default['+/IHLi'])
    });
}
function er(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(g.xJW, {
        className: W.colorPicker,
        title: z.intl.string(z.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(g.R94, {
                className: W.colorDescription,
                children: z.intl.string(z.t['9UCxlZ'])
            }),
            (0, r.jsx)(Q, {
                defaultColor: B.p6O,
                colors: s === D.g.GRADIENT && a ? F.tl : B.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return (t = e), void (i.color !== t && (t !== B.p6O || 0 !== i.color) && (t === B.p6O && (t = 0), (0, Z.OW)(i.id, t)));
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
        let r = (0, O.e5)(
            ((t = q(
                {},
                (0, C.ZP)({
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
            (r.author = new P.Z({
                id: '313337',
                username: z.intl.string(z.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (r.author.getAvatarURL = () => X.Z),
            r
        );
    }, [e]);
}
function el(e) {
    var t, n, i, l;
    let { role: a, guildId: o, disableInteraction: c } = e,
        u = ei(z.intl.string(z.t.Mi9KbW)),
        d = {
            nick: u.author.username,
            colorStrings: {
                primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (l = a.colorString) ? l : void 0
        },
        p = {
            src: Y,
            name: a.name
        },
        f = {
            src: K,
            name: a.name
        },
        h = (0, v.oC)(o, a),
        x = (0, j.Q3)('RolePreview') ? [B.BRd.LIGHT, B.BRd.DARK, B.BRd.DARKER, B.BRd.MIDNIGHT] : [B.BRd.LIGHT, B.BRd.DARK];
    return (0, r.jsx)(g.Rny, {
        children: (0, r.jsx)('div', {
            className: s()(W.previewContainer, { [W.disableInteraction]: c }),
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: x.map((e) =>
                (0, r.jsx)(
                    g.f6W,
                    {
                        theme: e,
                        children: (t) =>
                            (0, r.jsx)('div', {
                                className: t,
                                children: (0, r.jsx)('div', {
                                    className: W.messageContainer,
                                    children: (0, r.jsx)(y.Z, {
                                        author: d,
                                        message: u,
                                        roleIcon: null != h ? h : (0, m.ap)(e) ? f : p,
                                        previewGuildId: o,
                                        isGroupStart: !0
                                    })
                                })
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
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, Z.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: z.intl.string(z.t.vceJPj)
            }),
            (0, r.jsx)(g.$i$, { className: W.divider }),
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, Z.we)(t.id, t.hoist, e),
                note: z.intl.string(z.t.kRg5W1),
                hideBorder: !0,
                children: z.intl.format(z.t.DTXoJS, {})
            })
        ]
    });
}
function ea(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, S.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        o = (0, u.e7)([D.Z], () => D.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : D.g.SOLID,
        d = (0, I.Ek)(t.id, 'GuildSettingsRolesEditDisplay') && (0, N.QZ)('GuildSettingsRolesEditDisplay') && !(0, N.OC)(t.id, 'GuildSettingsRolesEditDisplay'),
        m = (0, x.pM)(null == t ? void 0 : t.id, n.id),
        p = i || m,
        f = (0, u.e7)([w.Z], () => w.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: b } = (0, k.Z)(0),
        { scrolledToTop: j, handleScroll: _ } = (0, L.V)();
    return (0, r.jsx)(g.yWw, {
        className: W.scroller,
        style: { scrollPaddingTop: h },
        onScroll: _,
        children: (0, r.jsxs)('div', {
            className: V.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(V.header, V.stickyHeader, { [V.stickyHeaderElevated]: !j }),
                    ref: b,
                    children: (0, r.jsx)(L.Z, {
                        guild: t,
                        role: n,
                        selectedSection: U.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: p
                }),
                (0, r.jsx)('div', {
                    className: W.noticeContainer,
                    children: (0, r.jsx)(G.Z, { role: n })
                }),
                (0, r.jsx)(g.$i$, { className: W.divider }),
                (a || d) &&
                    null != c &&
                    (0, r.jsx)(et, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: c,
                        disabled: p,
                        shouldShowUpsell: d
                    }),
                c !== D.g.HOLOGRAPHIC &&
                    null != c &&
                    (0, r.jsx)(er, {
                        role: n,
                        disabled: p,
                        currentStyle: c,
                        hasEnhancedRoleColors: a
                    }),
                c === D.g.HOLOGRAPHIC &&
                    (0, r.jsx)(T.Z, {
                        className: W.holographicInfoBox,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-xs/medium',
                            children: z.intl.string(H.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(A.Z, {
                    guild: t,
                    disabled: p,
                    role: n
                }),
                (0, r.jsx)(el, {
                    role: n,
                    guildId: t.id,
                    disableInteraction: !a
                }),
                (0, r.jsx)(g.$i$, { className: W.divider }),
                (0, r.jsx)(es, {
                    role: n,
                    disabled: p
                }),
                f
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.$i$, { className: W.divider }),
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
