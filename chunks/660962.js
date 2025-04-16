n.d(t, { ZP: () => es }), n(388685);
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
    R = n(946724),
    Z = n(95242),
    D = n(541575),
    A = n(420966),
    k = n(337344),
    W = n(275296),
    L = n(203377),
    M = n(981631),
    G = n(141006),
    U = n(388032),
    B = n(680278),
    F = n(275302),
    z = n(877248),
    H = n(179517),
    V = n(79829),
    Y = n(540167);
function K(e) {
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
let X = (0, x.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    q = o().debounce((e, t) => (0, w.Uv)(e, t), 200);
function J(e) {
    let { role: t, disabled: n } = e,
        [s, l] = i.useState(t.name);
    return (
        i.useEffect(() => {
            l(t.name);
        }, [t.name]),
        (0, r.jsx)(m.xJW, {
            title: U.NW.string(U.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(m.oil, {
                type: 'text',
                value: s,
                maxLength: M.VKK,
                onChange: function (e) {
                    l(e), q(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let Q = [
    {
        id: R.g.SOLID,
        colors: { primary_color: M.p6O },
        labelString: U.t['8Qyaho']
    },
    {
        id: R.g.GRADIENT,
        colors: G.Eg,
        labelString: U.t.XpWmJy
    },
    {
        id: R.g.HOLOGRAPHIC,
        colors: G.SK,
        labelString: U.t.QTKppa
    }
];
function $(e) {
    let { role: t, guildId: n, selectedStyle: i, disabled: s, shouldShowUpsell: a } = e,
        o = (e) => s || (a && [R.g.HOLOGRAPHIC, R.g.GRADIENT].includes(e)),
        d = en(U.NW.string(U.t.Mi9KbW)),
        h = (0, p.ZP)(),
        f = (0, j.oC)(n, t),
        x = {
            dark: {
                src: H,
                name: t.name
            },
            light: {
                src: V,
                name: t.name
            }
        };
    return (0, r.jsxs)(m.xJW, {
        title: U.NW.string(U.t['9wVJRE']),
        children: [
            (0, r.jsx)('div', {
                className: F.roleStyleContainer,
                children: Q.map((e) => {
                    let { id: s, colors: a, labelString: g } = e;
                    return (0, r.jsxs)(
                        'button',
                        {
                            className: l()(F.roleStylePreviewContainer, {
                                [F.selected]: i === s,
                                [F.disabled]: o(s)
                            }),
                            onClick: () => {
                                (0, w.Jf)(t.id, s);
                            },
                            children: [
                                (0, r.jsx)(m.Rny, {
                                    children: (0, r.jsx)('div', {
                                        className: F.roleStyleMessageContainer,
                                        children: (0, r.jsx)(v.Z, {
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
                                            roleIcon: null != f ? f : (0, u.ap)(h) ? x.light : x.dark,
                                            isGroupStart: !0,
                                            disableInteraction: !0,
                                            previewGuildId: n
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: F.roleStyleLabel,
                                    children: U.NW.string(g)
                                })
                            ]
                        },
                        s
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
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'button-outline-primary-text',
                                    children: U.NW.format(B.Z.VpEDJS, { magical: (0, r.jsx)(ee, {}) })
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'button-outline-primary-text',
                                    children: U.NW.string(B.Z.FJZeZG)
                                })
                            ]
                        }),
                        (0, r.jsxs)(m.gtL, {
                            size: m.zxk.Sizes.MEDIUM,
                            className: F.roleStyleUpsellButton,
                            innerClassName: F.roleStyleUpsellButtonContents,
                            shineSize: m.gtL.ShineSizes.SMALL,
                            onClick: function () {
                                (0, y.Z)(n), (0, g.xf)();
                            },
                            look: m.zxk.Looks.FILLED,
                            color: m.zxk.Colors.CUSTOM,
                            children: [
                                (0, r.jsx)(P.Z, {
                                    className: F.guildBoostBadge,
                                    height: 16,
                                    width: 16
                                }),
                                U.NW.string(U.t['+7XY39'])
                            ]
                        })
                    ]
                })
        ]
    });
}
function ee() {
    let e = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        { text: t, gradient: n } = (0, m.JUn)((0, c.Rf)(G.SK.primary_color), (0, c.Rf)(G.SK.secondary_color), (0, c.Rf)(G.SK.tertiary_color), e, 'username');
    return (0, r.jsx)('span', {
        style: K({}, t.gradientStyle),
        className: l()(n.gradientClassName, t.gradientClassName),
        'data-text': 'magical',
        children: U.NW.string(B.Z['+/IHLi'])
    });
}
function et(e) {
    var t, n;
    let { role: i, disabled: s, currentStyle: l, hasEnhancedRoleColors: a } = e;
    return (0, r.jsxs)(m.xJW, {
        className: F.colorPicker,
        title: U.NW.string(U.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(m.R94, {
                className: F.colorDescription,
                children: U.NW.string(U.t['9UCxlZ'])
            }),
            (0, r.jsx)(X, {
                defaultColor: M.p6O,
                colors: l === R.g.GRADIENT && a ? G.tl : M.pmI,
                value: i.color,
                disabled: s,
                onChange: (e) => {
                    var t;
                    return (t = e), void (i.color !== t && (t !== M.p6O || 0 !== i.color) && (t === M.p6O && (t = 0), (0, w.OW)(i.id, t)));
                },
                secondaryValue: l === R.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? (null == (n = i.colors) ? void 0 : n.secondary_color) : void 0,
                onChangeGradientColors: (e) => {
                    let t = {
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: void 0
                    };
                    (0, w.TW)(i.id, t, R.g.GRADIENT);
                },
                isGradient: l === R.g.GRADIENT,
                customPickerPosition: 'right'
            })
        ]
    });
}
function en(e) {
    return i.useMemo(() => {
        var t, n;
        let r = (0, N.e5)(
            ((t = K(
                {},
                (0, _.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (n = n =
                {
                    state: M.yb.SENT,
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
                username: U.NW.string(U.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (r.author.getAvatarURL = () => Y.Z),
            r
        );
    }, [e]);
}
function er(e) {
    var t, n, i, s;
    let { role: a, guildId: o, disableInteraction: c } = e,
        d = en(U.NW.string(U.t.Mi9KbW)),
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
            src: H,
            name: a.name
        },
        h = {
            src: V,
            name: a.name
        },
        f = (0, j.oC)(o, a),
        x = (0, b.Q3)('RolePreview') ? [M.BRd.LIGHT, M.BRd.DARK, M.BRd.DARKER, M.BRd.MIDNIGHT] : [M.BRd.LIGHT, M.BRd.DARK];
    return (0, r.jsx)(m.Rny, {
        children: (0, r.jsx)('div', {
            className: l()(F.previewContainer, { [F.disableInteraction]: c }),
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
                                    className: F.messageContainer,
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
function ei(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, w.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: U.NW.string(U.t.vceJPj)
            }),
            (0, r.jsx)(m.$i$, { className: F.divider }),
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, w.we)(t.id, t.hoist, e),
                note: U.NW.string(U.t.kRg5W1),
                hideBorder: !0,
                children: U.NW.format(U.t.DTXoJS, {})
            })
        ]
    });
}
function es(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: s } = e,
        a = (0, I.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        o = (0, d.e7)([R.Z], () => R.Z.getRoleStyleData(n.id)),
        c = null != o && a ? o.currentStyle : R.g.SOLID,
        u = (0, C.Ek)(t.id, 'GuildSettingsRolesEditDisplay') && (0, O.QZ)('GuildSettingsRolesEditDisplay') && !(0, O.OC)(t.id, 'GuildSettingsRolesEditDisplay'),
        g = (0, f.pM)(null == t ? void 0 : t.id, n.id),
        p = i || g,
        h = (0, d.e7)([T.Z], () => T.Z.canImpersonateRole(t, n)),
        { headerHeight: x, headerRef: b } = (0, Z.Z)(0),
        { scrolledToTop: j, handleScroll: N } = (0, A.V)();
    return (0, r.jsx)(m.yWw, {
        className: F.scroller,
        style: { scrollPaddingTop: x },
        onScroll: N,
        children: (0, r.jsxs)('div', {
            className: z.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: l()(z.header, z.stickyHeader, { [z.stickyHeaderElevated]: !j }),
                    ref: b,
                    children: (0, r.jsx)(A.Z, {
                        guild: t,
                        role: n,
                        selectedSection: L.ZI.DISPLAY,
                        setSelectedSection: s
                    })
                }),
                (0, r.jsx)(J, {
                    role: n,
                    disabled: p
                }),
                (0, r.jsx)('div', {
                    className: F.noticeContainer,
                    children: (0, r.jsx)(W.Z, { role: n })
                }),
                (0, r.jsx)(m.$i$, { className: F.divider }),
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
                        className: F.holographicInfoBox,
                        children: (0, r.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            children: U.NW.string(B.Z.tBhCys)
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
                    disableInteraction: !a
                }),
                (0, r.jsx)(m.$i$, { className: F.divider }),
                (0, r.jsx)(ei, {
                    role: n,
                    disabled: p
                }),
                h
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.$i$, { className: F.divider }),
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
