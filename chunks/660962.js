n.d(t, { ZP: () => er }), n(388685);
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
    g = n(37234),
    p = n(410030),
    h = n(607070),
    f = n(605436),
    x = n(663993),
    b = n(540059),
    j = n(518738),
    N = n(786761),
    _ = n(3148),
    v = n(753206),
    O = n(181918),
    C = n(50101),
    y = n(441536),
    I = n(477747),
    E = n(494620),
    S = n(598077),
    T = n(496675),
    P = n(709586),
    w = n(764260),
    R = n(95242),
    Z = n(541575),
    D = n(420966),
    A = n(337344),
    k = n(275296),
    W = n(203377),
    L = n(981631),
    M = n(141006),
    G = n(388032),
    U = n(680278),
    B = n(275302),
    F = n(877248),
    z = n(179517),
    H = n(79829);
function V(e) {
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
let Y = (0, x.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    K = o().debounce((e, t) => (0, w.Uv)(e, t), 200);
function X(e) {
    let { role: t, disabled: n } = e,
        [s, l] = i.useState(t.name);
    return (
        i.useEffect(() => {
            l(t.name);
        }, [t.name]),
        (0, r.jsx)(m.xJW, {
            title: G.NW.string(G.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(m.oil, {
                type: 'text',
                value: s,
                maxLength: L.VKK,
                onChange: function (e) {
                    l(e), K(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let q = [
    {
        id: 'solid',
        colors: { primary_color: L.p6O },
        labelString: G.t['8Qyaho']
    },
    {
        id: 'gradient',
        colors: M.Eg,
        labelString: G.t.XpWmJy
    },
    {
        id: 'holographic',
        colors: M.SK,
        labelString: G.t.QTKppa
    }
];
function J(e) {
    let { role: t, guildId: n, selectedStyle: i, onStyleSelect: s, disabled: a, shouldShowUpsell: o } = e,
        d = (e) => a || (o && ['holographic', 'gradient'].includes(e)),
        h = ee(G.NW.string(G.t.Mi9KbW)),
        f = (0, p.ZP)(),
        x = (0, j.oC)(n, t),
        b = {
            dark: {
                src: z,
                name: t.name
            },
            light: {
                src: H,
                name: t.name
            }
        };
    return (0, r.jsxs)(m.xJW, {
        title: G.NW.string(G.t['9wVJRE']),
        children: [
            (0, r.jsx)('div', {
                className: B.roleStyleContainer,
                children: q.map((e) => {
                    let { id: a, colors: o, labelString: g } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: l()(B.roleStylePreviewContainer, {
                                [B.selected]: i === a,
                                [B.disabled]: d(a)
                            }),
                            onClick: () =>
                                (function (e) {
                                    let n;
                                    s(e);
                                    var r = t.id;
                                    switch (e) {
                                        case 'gradient':
                                            n = {
                                                primary_color: M.Eg.primary_color,
                                                secondary_color: M.Eg.secondary_color,
                                                tertiary_color: void 0
                                            };
                                            break;
                                        case 'holographic':
                                            n = {
                                                primary_color: M.SK.primary_color,
                                                secondary_color: M.SK.secondary_color,
                                                tertiary_color: M.SK.tertiary_color
                                            };
                                            break;
                                        default:
                                            n = {
                                                primary_color: t.color,
                                                secondary_color: void 0,
                                                tertiary_color: void 0
                                            };
                                    }
                                    (0, w.TW)(r, n);
                                })(a),
                            children: [
                                (0, r.jsx)(m.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: B.roleStyleMessageContainer,
                                        children: (0, r.jsx)(v.Z, {
                                            author: {
                                                nick: h.author.username,
                                                colorStrings: {
                                                    primaryColor: null != o.primary_color ? (0, c.Rf)(o.primary_color) : void 0,
                                                    secondaryColor: null != o.secondary_color ? (0, c.Rf)(o.secondary_color) : void 0,
                                                    tertiaryColor: null != o.tertiary_color ? (0, c.Rf)(o.tertiary_color) : void 0
                                                },
                                                colorString: null != o.primary_color ? (0, c.Rf)(o.primary_color) : void 0
                                            },
                                            message: h,
                                            preview: !0,
                                            roleIcon: null != x ? x : (0, u.ap)(f) ? b.light : b.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: B.roleStyleLabel,
                                    children: G.NW.string(g)
                                })
                            ]
                        },
                        a
                    );
                })
            }),
            o &&
                (0, r.jsxs)('div', {
                    className: B.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: B.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: G.NW.format(U.Z.VpEDJS, { magical: (0, r.jsx)(Q, {}) })
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: G.NW.string(U.Z.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(m.gtL, {
                            size: m.zxk.Sizes.MEDIUM,
                            className: B.roleStyleUpsellButton,
                            innerClassName: B.roleStyleUpsellButtonContents,
                            shineSize: m.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                (0, y.Z)(n), (0, g.xf)();
                            },
                            look: m.zxk.Looks.FILLED,
                            color: m.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(P.Z, {
                                    className: B.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                G.NW.string(G.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function Q() {
    let e = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        { text: t, gradient: n } = (0, m.JUn)((0, c.Rf)(M.SK.primary_color), (0, c.Rf)(M.SK.secondary_color), (0, c.Rf)(M.SK.tertiary_color), e, 'username');
    return (0, r.jsx)('span', {
        style: V({}, t.gradientStyle),
        className: l()(n.gradientClassName, t.gradientClassName),
        'data-text': 'magical',
        children: G.NW.string(U.Z['+/IHLi'])
    });
}
function $(e) {
    var t;
    let { role: n, disabled: i, currentStyle: s, hasEnhancedRoleColors: l } = e;
    return (0, r.jsxs)(m.xJW, {
        className: B.colorPicker,
        title: G.NW.string(G.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(m.R94, {
                className: B.colorDescription,
                children: G.NW.string(G.t['9UCxlZ'])
            }),
            (0, r.jsx)(Y, {
                defaultColor: L.p6O,
                colors: 'gradient' === s && l ? M.tl : L.pmI,
                value: n.color,
                disabled: i,
                onChange: (e) => {
                    var t;
                    return (t = e), void (n.color !== t && (t !== L.p6O || 0 !== n.color) && (t === L.p6O && (t = 0), (0, w.OW)(n.id, t)));
                },
                secondaryValue: 'gradient' === s && l ? (null == (t = n.colors) ? void 0 : t.secondary_color) : void 0,
                onChangeGradientColors: (e) =>
                    (0, w.TW)(n.id, {
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
function ee(e) {
    return i.useMemo(() => {
        var t, r;
        let i = (0, N.e5)(
            ((t = V(
                {},
                (0, _.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (r = r =
                {
                    state: L.yb.SENT,
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
            (i.author = new S.Z({
                id: '313337',
                username: G.NW.string(G.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (i.author.getAvatarURL = () => n(52008)),
            i
        );
    }, [e]);
}
function et(e) {
    var t, n, i, s;
    let { role: a, guildId: o, disableInteraction: c } = e,
        d = ee(G.NW.string(G.t.Mi9KbW)),
        g = {
            nick: d.author.username,
            colorStrings: {
                primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (s = a.colorString) ? s : void 0
        },
        p = {
            src: z,
            name: a.name
        },
        h = {
            src: H,
            name: a.name
        },
        f = (0, j.oC)(o, a),
        x = (0, b.Q3)('RolePreview') ? [L.BRd.LIGHT, L.BRd.DARK, L.BRd.DARKER, L.BRd.MIDNIGHT] : [L.BRd.LIGHT, L.BRd.DARK];
    return (0, r.jsx)(m.Rny, {
        children: (0, r.jsx)('div', {
            className: l()(B.previewContainer, { [B.disableInteraction]: c }),
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: x.map((e) =>
                (0, r.jsx)(
                    m.f6W,
                    {
                        theme: e,
                        children: (t) =>
                            (0, r.jsx)('div', {
                                className: t,
                                children: (0, r.jsx)('div', {
                                    className: B.messageContainer,
                                    children: (0, r.jsx)(v.Z, {
                                        author: g,
                                        message: d,
                                        roleIcon: null != f ? f : (0, u.ap)(e) ? h : p,
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
function en(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, w.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: G.NW.string(G.t.vceJPj)
            }),
            (0, r.jsx)(m.$i$, { className: B.divider }),
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, w.we)(t.id, t.hoist, e),
                note: G.NW.string(G.t.kRg5W1),
                hideBorder: !0,
                children: G.NW.format(G.t.DTXoJS, {})
            })
        ]
    });
}
function er(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: a } = e,
        o = (0, I.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        c = (0, C.Ek)(t.id, 'GuildSettingsRolesEditDisplay') && (0, O.QZ)('GuildSettingsRolesEditDisplay') && !(0, O.OC)(t.id, 'GuildSettingsRolesEditDisplay'),
        u = (e) => {
            var t, n, r;
            return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null && (null == (n = e.colorStrings) ? void 0 : n.tertiaryColor) != null ? 'holographic' : (null == (r = e.colorStrings) ? void 0 : r.secondaryColor) != null ? 'gradient' : 'solid';
        },
        [g, p] = i.useState(() => u(n));
    i.useEffect(() => {
        p(u(n));
    }, [n]);
    let h = (0, f.pM)(null == t ? void 0 : t.id, n.id),
        x = s || h,
        b = (0, d.e7)([T.Z], () => T.Z.canImpersonateRole(t, n)),
        { headerHeight: j, headerRef: N } = (0, R.Z)(0),
        { scrolledToTop: _, handleScroll: v } = (0, D.V)();
    return (0, r.jsx)(m.yWw, {
        className: B.scroller,
        style: { scrollPaddingTop: j },
        onScroll: v,
        children: (0, r.jsxs)('div', {
            className: F.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: l()(F.header, F.stickyHeader, { [F.stickyHeaderElevated]: !_ }),
                    ref: N,
                    children: (0, r.jsx)(D.Z, {
                        guild: t,
                        role: n,
                        selectedSection: W.ZI.DISPLAY,
                        setSelectedSection: a
                    })
                }),
                (0, r.jsx)(X, {
                    role: n,
                    disabled: x
                }),
                (0, r.jsx)('div', {
                    className: B.noticeContainer,
                    children: (0, r.jsx)(k.Z, { role: n })
                }),
                (0, r.jsx)(m.$i$, { className: B.divider }),
                (o || c) &&
                    (0, r.jsx)(J, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: g,
                        onStyleSelect: p,
                        disabled: x,
                        shouldShowUpsell: c
                    }),
                'holographic' !== g &&
                    (0, r.jsx)($, {
                        role: n,
                        disabled: x,
                        currentStyle: g,
                        hasEnhancedRoleColors: o
                    }),
                'holographic' === g &&
                    (0, r.jsx)(E.Z, {
                        className: B.holographicInfoBox,
                        children: (0, r.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            children: G.NW.string(U.Z.tBhCys)
                        })
                    }),
                (0, r.jsx)(Z.Z, {
                    guild: t,
                    disabled: x,
                    role: n
                }),
                (0, r.jsx)(et, {
                    role: n,
                    guildId: t.id,
                    disableInteraction: !o
                }),
                (0, r.jsx)(m.$i$, { className: B.divider }),
                (0, r.jsx)(en, {
                    role: n,
                    disabled: x
                }),
                b
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.$i$, { className: B.divider }),
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
