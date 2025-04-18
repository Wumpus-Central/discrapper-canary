n.d(t, { ZP: () => ea }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(866442),
    d = n(442837),
    u = n(704215),
    m = n(780384),
    g = n(481060),
    p = n(37234),
    h = n(410030),
    f = n(607070),
    x = n(605436),
    b = n(663993),
    j = n(540059),
    N = n(243778),
    _ = n(518738),
    v = n(786761),
    O = n(3148),
    C = n(753206),
    y = n(181918),
    I = n(50101),
    E = n(441536),
    S = n(477747),
    T = n(494620),
    P = n(598077),
    w = n(496675),
    R = n(709586),
    Z = n(764260),
    D = n(946724),
    A = n(95242),
    k = n(541575),
    W = n(420966),
    L = n(337344),
    M = n(275296),
    G = n(203377),
    U = n(981631),
    B = n(141006),
    F = n(388032),
    z = n(696672),
    H = n(782662),
    V = n(206338),
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
let J = (0, b.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    Q = o().debounce((e, t) => (0, Z.Uv)(e, t), 200);
function $(e) {
    let { role: t, disabled: n } = e,
        [s, l] = i.useState(t.name);
    return (
        i.useEffect(() => {
            l(t.name);
        }, [t.name]),
        (0, r.jsx)(g.xJW, {
            title: F.NW.string(F.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(g.oil, {
                type: 'text',
                value: s,
                maxLength: U.VKK,
                onChange: function (e) {
                    l(e), Q(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let ee = [
    {
        id: D.g.SOLID,
        colors: { primary_color: U.p6O },
        labelString: F.t['8Qyaho']
    },
    {
        id: D.g.GRADIENT,
        colors: B.Eg,
        labelString: F.t.XpWmJy
    },
    {
        id: D.g.HOLOGRAPHIC,
        colors: B.SK,
        labelString: F.t.QTKppa
    }
];
function et(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: s, shouldShowUpsell: a } = e,
        o = (e) => s || (a && [D.g.HOLOGRAPHIC, D.g.GRADIENT].includes(e)),
        d = ei(F.NW.string(F.t.Mi9KbW)),
        f = (0, h.ZP)(),
        x = (0, _.oC)(n, t),
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
                className: H.roleStyleFormTitle,
                children: [
                    (0, r.jsx)('div', { children: F.NW.string(F.t['9wVJRE']) }),
                    (0, r.jsx)(N.ZP, {
                        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE
                                ? (0, r.jsx)(g.IGR, {
                                      text: F.NW.string(F.t.y2b7CA),
                                      className: H.newBadge
                                  })
                                : null;
                        }
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: H.roleStyleContainer,
                children: ee.map((e) => {
                    let { id: s, colors: a, labelString: u } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: l()(H.roleStylePreviewContainer, {
                                [H.selected]: i === s,
                                [H.disabled]: o(s)
                            }),
                            onClick: () => {
                                (0, Z.Jf)(t.id, s);
                            },
                            children: [
                                (0, r.jsx)(g.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: H.roleStyleMessageContainer,
                                        children: (0, r.jsx)(C.Z, {
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
                                            roleIcon: null != x ? x : (0, m.ap)(f) ? b.light : b.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: H.roleStyleLabel,
                                    children: F.NW.string(u)
                                })
                            ]
                        },
                        s
                    );
                })
            }),
            a &&
                (0, r.jsxs)('div', {
                    className: H.roleStyleUpsell,
                    children: [
                        (0, r.jsxs)('div', {
                            className: H.roleStyleUpsellMesssages,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: F.NW.format(z.Z.VpEDJS, { magical: (0, r.jsx)(en, {}) })
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: F.NW.string(z.Z.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.gtL, {
                            size: g.zxk.Sizes.MEDIUM,
                            className: H.roleStyleUpsellButton,
                            innerClassName: H.roleStyleUpsellButtonContents,
                            shineSize: g.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                (0, E.Z)(n), (0, p.xf)();
                            },
                            look: g.zxk.Looks.FILLED,
                            color: g.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(R.Z, {
                                    className: H.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                F.NW.string(F.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function en() {
    let e = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        { text: t, gradient: n } = (0, g.JUn)((0, c.Rf)(B.SK.primary_color), (0, c.Rf)(B.SK.secondary_color), (0, c.Rf)(B.SK.tertiary_color), e, 'username');
    return (0, r.jsx)('span', {
        style: q({}, t.gradientStyle),
        className: l()(n.gradientClassName, t.gradientClassName),
        'data-text': 'magical',
        children: F.NW.string(z.Z['+/IHLi'])
    });
}
function er(e) {
    var t, n;
    let { role: i, disabled: s, currentStyle: l, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(g.xJW, {
        className: H.colorPicker,
        title: F.NW.string(F.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(g.R94, {
                className: H.colorDescription,
                children: F.NW.string(F.t['9UCxlZ'])
            }),
            (0, r.jsx)(J, {
                defaultColor: U.p6O,
                colors: l === D.g.GRADIENT && a ? B.tl : U.pmI,
                value: i.color,
                disabled: s,
                onChange: (e) => {
                    var t;
                    return (t = e), void (i.color !== t && (t !== U.p6O || 0 !== i.color) && (t === U.p6O && (t = 0), (0, Z.OW)(i.id, t)));
                },
                secondaryValue: l === D.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, Z.TW)(i.id, t, D.g.GRADIENT);
                },
                isGradient: l === D.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function ei(e) {
    return i.useMemo(() => {
        var t, n;
        let r = (0, v.e5)(
            ((t = q(
                {},
                (0, O.ZP)({
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
            (r.author = new P.Z({
                id: '313337',
                username: F.NW.string(F.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (r.author.getAvatarURL = () => X.Z),
            r
        );
    }, [e]);
}
function es(e) {
    var t, n, i, s;
    let { role: a, guildId: o, disableInteraction: c } = e,
        d = ei(F.NW.string(F.t.Mi9KbW)),
        u = {
            nick: d.author.username,
            colorStrings: {
                primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
                tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
            },
            colorString: null != (s = a.colorString) ? s : void 0
        },
        p = {
            src: Y,
            name: a.name
        },
        h = {
            src: K,
            name: a.name
        },
        f = (0, _.oC)(o, a),
        x = (0, j.Q3)('RolePreview') ? [U.BRd.LIGHT, U.BRd.DARK, U.BRd.DARKER, U.BRd.MIDNIGHT] : [U.BRd.LIGHT, U.BRd.DARK];
    return (0, r.jsx)(g.Rny, {
        children: (0, r.jsx)('div', {
            className: l()(H.previewContainer, { [H.disableInteraction]: c }),
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
                                    className: H.messageContainer,
                                    children: (0, r.jsx)(C.Z, {
                                        author: u,
                                        message: d,
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
function el(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, Z.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: F.NW.string(F.t.vceJPj)
            }),
            (0, r.jsx)(g.$i$, { className: H.divider }),
            (0, r.jsx)(g.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, Z.we)(t.id, t.hoist, e),
                note: F.NW.string(F.t.kRg5W1),
                hideBorder: !0,
                children: F.NW.format(F.t.DTXoJS, {})
            })
        ]
    });
}
function ea(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: s } = e,
        a = (0, S.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        o = (0, d.e7)([D.Z], () => D.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : D.g.SOLID,
        u = (0, I.Ek)(t.id, 'GuildSettingsRolesEditDisplay') && (0, y.QZ)('GuildSettingsRolesEditDisplay') && !(0, y.OC)(t.id, 'GuildSettingsRolesEditDisplay'),
        m = (0, x.pM)(null == t ? void 0 : t.id, n.id),
        p = i || m,
        h = (0, d.e7)([w.Z], () => w.Z.canImpersonateRole(t, n)),
        { headerHeight: f, headerRef: b } = (0, A.Z)(0),
        { scrolledToTop: j, handleScroll: N } = (0, W.V)();
    return (0, r.jsx)(g.yWw, {
        className: H.scroller,
        style: { scrollPaddingTop: f },
        onScroll: N,
        children: (0, r.jsxs)('div', {
            className: V.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: l()(V.header, V.stickyHeader, { [V.stickyHeaderElevated]: !j }),
                    ref: b,
                    children: (0, r.jsx)(W.Z, {
                        guild: t,
                        role: n,
                        selectedSection: G.ZI.DISPLAY,
                        setSelectedSection: s
                    })
                }),
                (0, r.jsx)($, {
                    role: n,
                    disabled: p
                }),
                (0, r.jsx)('div', {
                    className: H.noticeContainer,
                    children: (0, r.jsx)(M.Z, { role: n })
                }),
                (0, r.jsx)(g.$i$, { className: H.divider }),
                (a || u) &&
                    null != c &&
                    (0, r.jsx)(et, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: c,
                        disabled: p,
                        shouldShowUpsell: u
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
                        className: H.holographicInfoBox,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-xs/medium',
                            children: F.NW.string(z.Z.tBhCys)
                        })
                    }),
                (0, r.jsx)(k.Z, {
                    guild: t,
                    disabled: p,
                    role: n
                }),
                (0, r.jsx)(es, {
                    role: n,
                    guildId: t.id,
                    disableInteraction: !a
                }),
                (0, r.jsx)(g.$i$, { className: H.divider }),
                (0, r.jsx)(el, {
                    role: n,
                    disabled: p
                }),
                h
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.$i$, { className: H.divider }),
                              (0, r.jsx)(L.L, {
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
