n.d(t, { ZP: () => en }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(866442),
    d = n(442837),
    u = n(780384),
    m = n(481060),
    g = n(410030),
    p = n(607070),
    h = n(605436),
    f = n(663993),
    x = n(540059),
    b = n(518738),
    j = n(786761),
    N = n(3148),
    _ = n(753206),
    v = n(181918),
    O = n(50101),
    C = n(441536),
    y = n(477747),
    I = n(494620),
    E = n(598077),
    S = n(496675),
    T = n(709586),
    P = n(764260),
    w = n(95242),
    R = n(541575),
    Z = n(420966),
    D = n(337344),
    A = n(275296),
    k = n(203377),
    W = n(981631),
    L = n(141006),
    M = n(388032),
    G = n(680278),
    U = n(275302),
    B = n(877248),
    F = n(179517),
    z = n(79829);
function H(e) {
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
let V = (0, f.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    Y = o().debounce((e, t) => (0, P.Uv)(e, t), 200);
function K(e) {
    let { role: t, disabled: n } = e,
        [s, l] = i.useState(t.name);
    return (
        i.useEffect(() => {
            l(t.name);
        }, [t.name]),
        (0, r.jsx)(m.xJW, {
            title: M.NW.string(M.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(m.oil, {
                type: 'text',
                value: s,
                maxLength: W.VKK,
                onChange: function (e) {
                    l(e), Y(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let X = [
    {
        id: 'solid',
        colors: { primary_color: W.p6O },
        labelString: M.t['8Qyaho']
    },
    {
        id: 'gradient',
        colors: L.Eg,
        labelString: M.t.XpWmJy
    },
    {
        id: 'holographic',
        colors: L.SK,
        labelString: M.t.QTKppa
    }
];
function q(e) {
    let { role: t, guildId: n, selectedStyle: i, onStyleSelect: s, disabled: a, shouldShowUpsell: o } = e,
        d = (e) => a || (o && ['holographic', 'gradient'].includes(e)),
        p = $(M.NW.string(M.t.Mi9KbW)),
        h = (0, g.ZP)(),
        f = (0, b.oC)(n, t),
        x = {
            dark: {
                src: F,
                name: t.name
            },
            light: {
                src: z,
                name: t.name
            }
        };
    return (0, r.jsxs)(m.xJW, {
        title: M.NW.string(M.t['9wVJRE']),
        children: [
            (0, r.jsx)('div', {
                className: U.roleStyleContainer,
                children: X.map((e) => {
                    let { id: a, colors: o, labelString: g } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: l()(U.roleStylePreviewContainer, {
                                [U.selected]: i === a,
                                [U.disabled]: d(a)
                            }),
                            onClick: () =>
                                (function (e) {
                                    let n;
                                    s(e);
                                    var r = t.id;
                                    switch (e) {
                                        case 'gradient':
                                            n = {
                                                primary_color: L.Eg.primary_color,
                                                secondary_color: L.Eg.secondary_color,
                                                tertiary_color: void 0
                                            };
                                            break;
                                        case 'holographic':
                                            n = {
                                                primary_color: L.SK.primary_color,
                                                secondary_color: L.SK.secondary_color,
                                                tertiary_color: L.SK.tertiary_color
                                            };
                                            break;
                                        default:
                                            n = {
                                                primary_color: t.color,
                                                secondary_color: void 0,
                                                tertiary_color: void 0
                                            };
                                    }
                                    (0, P.TW)(r, n);
                                })(a),
                            children: [
                                (0, r.jsx)(m.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: U.roleStyleMessageContainer,
                                        children: (0, r.jsx)(_.Z, {
                                            author: {
                                                nick: p.author.username,
                                                colorStrings: {
                                                    primaryColor: null != o.primary_color ? (0, c.Rf)(o.primary_color) : void 0,
                                                    secondaryColor: null != o.secondary_color ? (0, c.Rf)(o.secondary_color) : void 0,
                                                    tertiaryColor: null != o.tertiary_color ? (0, c.Rf)(o.tertiary_color) : void 0
                                                },
                                                colorString: null != o.primary_color ? (0, c.Rf)(o.primary_color) : void 0
                                            },
                                            message: p,
                                            preview: !0,
                                            roleIcon: null != f ? f : (0, u.ap)(h) ? x.light : x.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: U.roleStyleLabel,
                                    children: M.NW.string(g)
                                })
                            ]
                        },
                        a
                    );
                })
            }),
            o &&
                (0, r.jsxs)('div', {
                    className: U.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: U.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: M.NW.format(G.Z.VpEDJS, { magical: (0, r.jsx)(J, {}) })
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: M.NW.string(G.Z.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(m.gtL, {
                            size: m.zxk.Sizes.MEDIUM,
                            className: U.roleStyleUpsellButton,
                            innerClassName: U.roleStyleUpsellButtonContents,
                            shineSize: m.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                (0, C.Z)(n);
                            },
                            look: m.zxk.Looks.FILLED,
                            color: m.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(T.Z, {
                                    className: U.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                M.NW.string(M.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function J() {
    let e = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        { text: t, gradient: n } = (0, m.JUn)((0, c.Rf)(L.SK.primary_color), (0, c.Rf)(L.SK.secondary_color), (0, c.Rf)(L.SK.tertiary_color), e, 'username');
    return (0, r.jsx)('span', {
        style: H({}, t.gradientStyle),
        className: l()(n.gradientClassName, t.gradientClassName),
        'data-text': 'magical',
        children: M.NW.string(G.Z['+/IHLi'])
    });
}
function Q(e) {
    var t;
    let { role: n, disabled: i, currentStyle: s, hasEnhancedRoleColors: l } = e;
    return (0, r.jsxs)(m.xJW, {
        className: U.colorPicker,
        title: M.NW.string(M.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(m.R94, {
                className: U.colorDescription,
                children: M.NW.string(M.t['9UCxlZ'])
            }),
            (0, r.jsx)(V, {
                defaultColor: W.p6O,
                colors: 'gradient' === s && l ? L.tl : W.pmI,
                value: n.color,
                disabled: i,
                onChange: (e) => {
                    var t;
                    return (t = e), void (n.color !== t && (t !== W.p6O || 0 !== n.color) && (t === W.p6O && (t = 0), (0, P.OW)(n.id, t)));
                },
                secondaryValue: 'gradient' === s && l ? (null == (t = n.colors) ? void 0 : t.secondary_color) : void 0,
                onChangeGradientColors: (e) =>
                    (0, P.TW)(n.id, {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    }),
                isGradient: 'gradient' === s,
                customPickerPosition: 'right'
            })
        ]
    });
}
function $(e) {
    return i.useMemo(() => {
        var t, r;
        let i = (0, j.e5)(
            ((t = H(
                {},
                (0, N.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (r = r =
                {
                    state: W.yb.SENT,
                    id: '31337'
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        );
        return (
            (i.author = new E.Z({
                id: '313337',
                username: M.NW.string(M.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (i.author.getAvatarURL = () => n(52008)),
            i
        );
    }, [e]);
}
function ee(e) {
    var t, n, i, s;
    let { role: l, guildId: a } = e,
        o = $(M.NW.string(M.t.Mi9KbW)),
        c = {
            nick: o.author.username,
            colorStrings: {
                primaryColor: null == (t = l.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = l.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = l.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (s = l.colorString) ? s : void 0
        },
        d = {
            src: F,
            name: l.name
        },
        g = {
            src: z,
            name: l.name
        },
        p = (0, b.oC)(a, l),
        h = (0, x.Q3)('RolePreview') ? [W.BRd.LIGHT, W.BRd.DARK, W.BRd.DARKER, W.BRd.MIDNIGHT] : [W.BRd.LIGHT, W.BRd.DARK];
    return (0, r.jsx)(m.Rny, {
        children: (0, r.jsx)('div', {
            className: U.previewContainer,
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: h.map((e) =>
                (0, r.jsx)(
                    m.f6W,
                    {
                        theme: e,
                        children: (t) =>
                            (0, r.jsx)('div', {
                                className: t,
                                children: (0, r.jsx)('div', {
                                    className: U.messageContainer,
                                    children: (0, r.jsx)(_.Z, {
                                        author: c,
                                        message: o,
                                        roleIcon: null != p ? p : (0, u.ap)(e) ? g : d,
                                        previewGuildId: a,
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
function et(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, P.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: M.NW.string(M.t.vceJPj)
            }),
            (0, r.jsx)(m.$i$, { className: U.divider }),
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, P.we)(t.id, t.hoist, e),
                note: M.NW.string(M.t.kRg5W1),
                hideBorder: !0,
                children: M.NW.format(M.t.DTXoJS, {})
            })
        ]
    });
}
function en(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: a } = e,
        o = (0, y.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        c = (0, O.Ek)(t.id, 'GuildSettingsRolesEditDisplay') && (0, v.QZ)('GuildSettingsRolesEditDisplay') && !(0, v.OC)(t.id, 'GuildSettingsRolesEditDisplay'),
        u = (e) => {
            var t, n, r;
            return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null && (null == (n = e.colorStrings) ? void 0 : n.tertiaryColor) != null ? 'holographic' : (null == (r = e.colorStrings) ? void 0 : r.secondaryColor) != null ? 'gradient' : 'solid';
        },
        [g, p] = i.useState(() => u(n));
    i.useEffect(() => {
        p(u(n));
    }, [n]);
    let f = (0, h.pM)(null == t ? void 0 : t.id, n.id),
        x = s || f,
        b = (0, d.e7)([S.Z], () => S.Z.canImpersonateRole(t, n)),
        { headerHeight: j, headerRef: N } = (0, w.Z)(0),
        { scrolledToTop: _, handleScroll: C } = (0, Z.V)();
    return (0, r.jsx)(m.yWw, {
        className: U.scroller,
        style: { scrollPaddingTop: j },
        onScroll: C,
        children: (0, r.jsxs)('div', {
            className: B.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: l()(B.header, B.stickyHeader, { [B.stickyHeaderElevated]: !_ }),
                    ref: N,
                    children: (0, r.jsx)(Z.Z, {
                        guild: t,
                        role: n,
                        selectedSection: k.ZI.DISPLAY,
                        setSelectedSection: a
                    })
                }),
                (0, r.jsx)(K, {
                    role: n,
                    disabled: x
                }),
                (0, r.jsx)('div', {
                    className: U.noticeContainer,
                    children: (0, r.jsx)(A.Z, { role: n })
                }),
                (0, r.jsx)(m.$i$, { className: U.divider }),
                (o || c) &&
                    (0, r.jsx)(q, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: g,
                        onStyleSelect: p,
                        disabled: x,
                        shouldShowUpsell: c
                    }),
                'holographic' !== g &&
                    (0, r.jsx)(Q, {
                        role: n,
                        disabled: x,
                        currentStyle: g,
                        hasEnhancedRoleColors: o
                    }),
                'holographic' === g &&
                    (0, r.jsx)(I.Z, {
                        className: U.holographicInfoBox,
                        children: (0, r.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            children: M.NW.string(G.Z.tBhCys)
                        })
                    }),
                (0, r.jsx)(R.Z, {
                    guild: t,
                    disabled: x,
                    role: n
                }),
                (0, r.jsx)(ee, {
                    role: n,
                    guildId: t.id
                }),
                (0, r.jsx)(m.$i$, { className: U.divider }),
                (0, r.jsx)(et, {
                    role: n,
                    disabled: x
                }),
                b
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.$i$, { className: U.divider }),
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
