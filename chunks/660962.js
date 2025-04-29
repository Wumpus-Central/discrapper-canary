n.d(t, { ZP: () => eo }), n(388685);
var r = n(255367),
    i = n(73800),
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
    h = n(410030),
    f = n(607070),
    x = n(100527),
    b = n(605436),
    j = n(663993),
    _ = n(540059),
    v = n(243778),
    O = n(518738),
    C = n(786761),
    y = n(3148),
    N = n(753206),
    I = n(181918),
    E = n(50101),
    S = n(441536),
    T = n(477747),
    P = n(494620),
    w = n(598077),
    R = n(496675),
    Z = n(709586),
    D = n(764260),
    k = n(946724),
    A = n(95242),
    L = n(541575),
    M = n(420966),
    G = n(337344),
    U = n(275296),
    B = n(203377),
    F = n(981631),
    z = n(141006),
    H = n(388032),
    W = n(680278),
    V = n(275302),
    Y = n(877248),
    K = n(179517),
    X = n(79829),
    q = n(540167);
function Q(e) {
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
let J = (0, j.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    $ = o().debounce((e, t) => (0, D.Uv)(e, t), 200);
function ee(e) {
    let { role: t, disabled: n } = e,
        [l, s] = i.useState(t.name);
    return (
        i.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, r.jsx)(g.xJW, {
            title: H.intl.string(H.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(g.oil, {
                type: 'text',
                value: l,
                maxLength: F.VKK,
                onChange: function (e) {
                    s(e), $(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let et = [
    {
        id: k.g.SOLID,
        colors: { primary_color: F.p6O },
        labelString: H.t['8Qyaho']
    },
    {
        id: k.g.GRADIENT,
        colors: z.Eg,
        labelString: H.t.XpWmJy
    },
    {
        id: k.g.HOLOGRAPHIC,
        colors: z.SK,
        labelString: H.t.QTKppa
    }
];
function en(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: l, shouldShowUpsell: a } = e,
        o = (e) => l || (a && [k.g.HOLOGRAPHIC, k.g.GRADIENT].includes(e)),
        u = el(H.intl.string(H.t.Mi9KbW)),
        f = (0, h.ZP)(),
        b = (0, O.oC)(n, t),
        j = {
            dark: {
                src: K,
                name: t.name
            },
            light: {
                src: X,
                name: t.name
            }
        };
    return (0, r.jsxs)(g.xJW, {
        children: [
            (0, r.jsxs)(g.vwX, {
                className: V.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: H.intl.string(H.t['9wVJRE']) }),
                    (0, r.jsx)(v.ZP, {
                        contentTypes: [d.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === d.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
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
                children: et.map((e) => {
                    let { id: l, colors: a, labelString: d } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: s()(V.roleStylePreviewContainer, {
                                [V.selected]: i === l,
                                [V.disabled]: o(l)
                            }),
                            onClick: () => {
                                (0, D.Jf)(t.id, l);
                            },
                            children: [
                                (0, r.jsx)(g.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: V.roleStyleMessageContainer,
                                        children: (0, r.jsx)(N.Z, {
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
                                            roleIcon: null != b ? b : (0, m.ap)(f) ? j.light : j.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: V.roleStyleLabel,
                                    children: H.intl.string(d)
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
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: H.intl.format(W.default.VpEDJS, { magical: (0, r.jsx)(er, {}) })
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: H.intl.string(W.default.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.gtL, {
                            size: g.zxk.Sizes.MEDIUM,
                            className: V.roleStyleUpsellButton,
                            innerClassName: V.roleStyleUpsellButtonContents,
                            shineSize: g.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                (0, S.Z)(n, x.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.xf)();
                            },
                            look: g.zxk.Looks.FILLED,
                            color: g.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(Z.Z, {
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
function er() {
    let e = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        { gradientStyle: t, gradientClassname: n } = (0, g.JUn)({
            primaryColor: (0, c.Rf)(z.SK.primary_color),
            secondaryColor: (0, c.Rf)(z.SK.secondary_color),
            tertiaryColor: (0, c.Rf)(z.SK.tertiary_color),
            useReducedMotion: e,
            roleStyle: 'username',
            includeConvenienceGlow: !0
        });
    return (0, r.jsx)('span', {
        style: Q({}, t),
        className: n,
        'data-text': H.intl.string(W.default['+/IHLi']),
        children: H.intl.string(W.default['+/IHLi'])
    });
}
function ei(e) {
    var t, n;
    let { role: i, disabled: l, currentStyle: s, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(g.xJW, {
        className: V.colorPicker,
        title: H.intl.string(H.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(g.R94, {
                className: V.colorDescription,
                children: H.intl.string(H.t['9UCxlZ'])
            }),
            (0, r.jsx)(J, {
                defaultColor: F.p6O,
                colors: s === k.g.GRADIENT && a ? z.tl : F.pmI,
                value: i.color,
                disabled: l,
                onChange: (e) => {
                    var t;
                    return (t = e), void (i.color !== t && (t !== F.p6O || 0 !== i.color) && (t === F.p6O && (t = 0), (0, D.OW)(i.id, t)));
                },
                secondaryValue: s === k.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, D.TW)(i.id, t, k.g.GRADIENT);
                },
                isGradient: s === k.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function el(e) {
    return i.useMemo(() => {
        var t, n;
        let r = (0, C.e5)(
            ((t = Q(
                {},
                (0, y.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (n = n =
                {
                    state: F.yb.SENT,
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
            (r.author = new w.Z({
                id: '313337',
                username: H.intl.string(H.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (r.author.getAvatarURL = () => q.Z),
            r
        );
    }, [e]);
}
function es(e) {
    var t, n, i, l;
    let { role: a, guildId: o, disableInteraction: c } = e,
        u = el(H.intl.string(H.t.Mi9KbW)),
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
            src: K,
            name: a.name
        },
        h = {
            src: X,
            name: a.name
        },
        f = (0, O.oC)(o, a),
        x = (0, _.Q3)('RolePreview') ? [F.BRd.LIGHT, F.BRd.DARK, F.BRd.DARKER, F.BRd.MIDNIGHT] : [F.BRd.LIGHT, F.BRd.DARK];
    return (0, r.jsx)(g.Rny, {
        children: (0, r.jsx)('div', {
            className: s()(V.previewContainer, { [V.disableInteraction]: c }),
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
                                    className: V.messageContainer,
                                    children: (0, r.jsx)(N.Z, {
                                        author: d,
                                        message: u,
                                        roleIcon: null != f ? f : (0, m.ap)(e) ? h : p,
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
function ea(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, D.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: H.intl.string(H.t.vceJPj)
            }),
            (0, r.jsx)(g.$i$, { className: V.divider }),
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, D.we)(t.id, t.hoist, e),
                note: H.intl.string(H.t.kRg5W1),
                hideBorder: !0,
                children: H.intl.format(H.t.DTXoJS, {})
            })
        ]
    });
}
function eo(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l } = e,
        a = (0, T.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        o = (0, u.e7)([k.Z], () => k.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : k.g.SOLID,
        d = (0, E.Ek)(t.id, 'GuildSettingsRolesEditDisplay') && (0, I.QZ)('GuildSettingsRolesEditDisplay') && !(0, I.OC)(t.id, 'GuildSettingsRolesEditDisplay'),
        m = (0, b.pM)(null == t ? void 0 : t.id, n.id),
        p = i || m,
        h = (0, u.e7)([R.Z], () => R.Z.canImpersonateRole(t, n)),
        { headerHeight: f, headerRef: x } = (0, A.Z)(0),
        { scrolledToTop: j, handleScroll: _ } = (0, M.V)();
    return (0, r.jsx)(g.yWw, {
        className: V.scroller,
        style: { scrollPaddingTop: f },
        onScroll: _,
        children: (0, r.jsxs)('div', {
            className: Y.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(Y.header, Y.stickyHeader, { [Y.stickyHeaderElevated]: !j }),
                    ref: x,
                    children: (0, r.jsx)(M.Z, {
                        guild: t,
                        role: n,
                        selectedSection: B.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, r.jsx)(ee, {
                    role: n,
                    disabled: p
                }),
                (0, r.jsx)('div', {
                    className: V.noticeContainer,
                    children: (0, r.jsx)(U.Z, { role: n })
                }),
                (0, r.jsx)(g.$i$, { className: V.divider }),
                (a || d) &&
                    null != c &&
                    (0, r.jsx)(en, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: c,
                        disabled: p,
                        shouldShowUpsell: d
                    }),
                c !== k.g.HOLOGRAPHIC &&
                    null != c &&
                    (0, r.jsx)(ei, {
                        role: n,
                        disabled: p,
                        currentStyle: c,
                        hasEnhancedRoleColors: a
                    }),
                c === k.g.HOLOGRAPHIC &&
                    (0, r.jsx)(P.Z, {
                        className: V.holographicInfoBox,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-xs/medium',
                            children: H.intl.string(W.default.tBhCys)
                        })
                    }),
                (0, r.jsx)(L.Z, {
                    guild: t,
                    disabled: p,
                    role: n
                }),
                (0, r.jsx)(es, {
                    role: n,
                    guildId: t.id,
                    disableInteraction: !a
                }),
                (0, r.jsx)(g.$i$, { className: V.divider }),
                (0, r.jsx)(ea, {
                    role: n,
                    disabled: p
                }),
                h
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.$i$, { className: V.divider }),
                              (0, r.jsx)(G.L, {
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
