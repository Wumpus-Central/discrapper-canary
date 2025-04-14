n.d(t, { ZP: () => Y }), n(388685);
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
    p = n(605436),
    h = n(663993),
    f = n(540059),
    x = n(518738),
    b = n(786761),
    j = n(3148),
    N = n(753206),
    _ = n(477747),
    v = n(598077),
    O = n(496675),
    C = n(764260),
    y = n(95242),
    I = n(541575),
    E = n(420966),
    S = n(337344),
    T = n(275296),
    P = n(203377),
    w = n(981631),
    R = n(141006),
    Z = n(388032),
    D = n(275302),
    A = n(877248),
    k = n(179517),
    W = n(79829);
let L = (0, h.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    M = o().debounce((e, t) => (0, C.Uv)(e, t), 200);
function G(e) {
    let { role: t, disabled: n } = e,
        [s, l] = i.useState(t.name);
    return (
        i.useEffect(() => {
            l(t.name);
        }, [t.name]),
        (0, r.jsx)(m.xJW, {
            title: Z.NW.string(Z.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(m.oil, {
                type: 'text',
                value: s,
                maxLength: w.VKK,
                onChange: function (e) {
                    l(e), M(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let U = [
    {
        id: 'solid',
        colors: { primary_color: w.p6O },
        labelString: Z.t['8Qyaho']
    },
    {
        id: 'gradient',
        colors: R.Eg,
        labelString: Z.t.XpWmJy
    },
    {
        id: 'holographic',
        colors: R.SK,
        labelString: Z.t.QTKppa
    }
];
function B(e) {
    let { role: t, guildId: n, selectedStyle: i, onStyleSelect: s, disabled: a } = e,
        o = z(Z.NW.string(Z.t.Mi9KbW)),
        d = (0, g.ZP)(),
        p = (0, x.oC)(n, t),
        h = {
            dark: {
                src: k,
                name: t.name
            },
            light: {
                src: W,
                name: t.name
            }
        };
    return (0, r.jsx)(m.xJW, {
        title: Z.NW.string(Z.t['9wVJRE']),
        children: (0, r.jsx)('div', {
            className: D.roleStyleContainer,
            children: U.map((e) => {
                let { id: g, colors: f, labelString: x } = e;
                return (0, r.jsxs)(
                    'button',
                    {
                        className: l()(D.roleStylePreviewContainer, {
                            [D.selected]: i === g,
                            [D.disabled]: a
                        }),
                        onClick: () =>
                            (function (e) {
                                let n;
                                s(e);
                                var r = t.id;
                                switch (e) {
                                    case 'gradient':
                                        n = {
                                            primary_color: R.Eg.primary_color,
                                            secondary_color: R.Eg.secondary_color,
                                            tertiary_color: void 0
                                        };
                                        break;
                                    case 'holographic':
                                        n = {
                                            primary_color: R.SK.primary_color,
                                            secondary_color: R.SK.secondary_color,
                                            tertiary_color: R.SK.tertiary_color
                                        };
                                        break;
                                    default:
                                        n = {
                                            primary_color: t.color,
                                            secondary_color: void 0,
                                            tertiary_color: void 0
                                        };
                                }
                                (0, C.TW)(r, n);
                            })(g),
                        children: [
                            (0, r.jsx)(m.Rny, {
                                children: (0, r.jsx)('div', {
                                    className: D.roleStyleMessageContainer,
                                    children: (0, r.jsx)(N.Z, {
                                        author: {
                                            nick: o.author.username,
                                            colorStrings: {
                                                primaryColor: null != f.primary_color ? (0, c.Rf)(f.primary_color) : void 0,
                                                secondaryColor: null != f.secondary_color ? (0, c.Rf)(f.secondary_color) : void 0,
                                                tertiaryColor: null != f.tertiary_color ? (0, c.Rf)(f.tertiary_color) : void 0
                                            },
                                            colorString: null != f.primary_color ? (0, c.Rf)(f.primary_color) : void 0
                                        },
                                        message: o,
                                        preview: !0,
                                        roleIcon: null != p ? p : (0, u.ap)(d) ? h.light : h.dark,
                                        isGroupStart: !0,
                                        disableInteraction: !0,
                                        previewGuildId: n
                                    })
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: D.roleStyleLabel,
                                children: Z.NW.string(x)
                            })
                        ]
                    },
                    g
                );
            })
        })
    });
}
function F(e) {
    var t;
    let { role: n, disabled: i, currentStyle: s, hasEnhancedRoleColors: l } = e;
    return (0, r.jsxs)(m.xJW, {
        className: D.colorPicker,
        title: Z.NW.string(Z.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(m.R94, {
                className: D.colorDescription,
                children: Z.NW.string(Z.t['9UCxlZ'])
            }),
            (0, r.jsx)(
                L,
                {
                    defaultColor: w.p6O,
                    colors: 'gradient' === s && l ? R.tl : w.pmI,
                    value: n.color,
                    disabled: i,
                    onChange: (e) => {
                        var t;
                        return (t = e), void (n.color !== t && (t !== w.p6O || 0 !== n.color) && (t === w.p6O && (t = 0), (0, C.OW)(n.id, t)));
                    },
                    secondaryValue: 'gradient' === s && l ? (null == (t = n.colors) ? void 0 : t.secondary_color) : void 0,
                    onChangeGradientColors: (e) =>
                        (0, C.TW)(n.id, {
                            primary_color: e[0],
                            secondary_color: e[1],
                            tertiary_color: void 0
                        }),
                    customPickerPosition: 'right'
                },
                n.id
            )
        ]
    });
}
function z(e) {
    return i.useMemo(() => {
        var t, r;
        let i = (0, b.e5)(
            ((t = (function (e) {
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
            })(
                {},
                (0, j.ZP)({
                    channelId: '1337',
                    content: e
                })
            )),
            (r = r =
                {
                    state: w.yb.SENT,
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
            (i.author = new v.Z({
                id: '313337',
                username: Z.NW.string(Z.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (i.author.getAvatarURL = () => n(52008)),
            i
        );
    }, [e]);
}
function H(e) {
    var t, n, i, s;
    let { role: l, guildId: a } = e,
        o = z(Z.NW.string(Z.t.Mi9KbW)),
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
            src: k,
            name: l.name
        },
        g = {
            src: W,
            name: l.name
        },
        p = (0, x.oC)(a, l),
        h = (0, f.Q3)('RolePreview') ? [w.BRd.LIGHT, w.BRd.DARK, w.BRd.DARKER, w.BRd.MIDNIGHT] : [w.BRd.LIGHT, w.BRd.DARK];
    return (0, r.jsx)(m.Rny, {
        children: (0, r.jsx)('div', {
            className: D.previewContainer,
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
                                    className: D.messageContainer,
                                    children: (0, r.jsx)(N.Z, {
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
function V(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, C.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: Z.NW.string(Z.t.vceJPj)
            }),
            (0, r.jsx)(m.$i$, { className: D.divider }),
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, C.we)(t.id, t.hoist, e),
                note: Z.NW.string(Z.t.kRg5W1),
                hideBorder: !0,
                children: Z.NW.format(Z.t.DTXoJS, {})
            })
        ]
    });
}
function Y(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: a } = e,
        o = (0, _.Z)(t.id, 'GuildSettingsRolesEditDisplay'),
        c = (e) => {
            var t, n, r;
            return (null == (t = e.colorStrings) ? void 0 : t.secondaryColor) != null && (null == (n = e.colorStrings) ? void 0 : n.tertiaryColor) != null ? 'holographic' : (null == (r = e.colorStrings) ? void 0 : r.secondaryColor) != null ? 'gradient' : 'solid';
        },
        [u, g] = i.useState(() => c(n));
    i.useEffect(() => {
        g(c(n));
    }, [n]);
    let h = (0, p.pM)(null == t ? void 0 : t.id, n.id),
        f = s || h,
        x = (0, d.e7)([O.Z], () => O.Z.canImpersonateRole(t, n)),
        { headerHeight: b, headerRef: j } = (0, y.Z)(0),
        { scrolledToTop: N, handleScroll: v } = (0, E.V)();
    return (0, r.jsx)(m.yWw, {
        className: D.scroller,
        style: { scrollPaddingTop: b },
        onScroll: v,
        children: (0, r.jsxs)('div', {
            className: A.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: l()(A.header, A.stickyHeader, { [A.stickyHeaderElevated]: !N }),
                    ref: j,
                    children: (0, r.jsx)(E.Z, {
                        guild: t,
                        role: n,
                        selectedSection: P.ZI.DISPLAY,
                        setSelectedSection: a
                    })
                }),
                (0, r.jsx)(G, {
                    role: n,
                    disabled: f
                }),
                (0, r.jsx)('div', {
                    className: D.noticeContainer,
                    children: (0, r.jsx)(T.Z, { role: n })
                }),
                (0, r.jsx)(m.$i$, { className: D.divider }),
                o &&
                    (0, r.jsx)(B, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        onStyleSelect: g,
                        disabled: f
                    }),
                'holographic' !== u &&
                    (0, r.jsx)(F, {
                        role: n,
                        disabled: f,
                        currentStyle: u,
                        hasEnhancedRoleColors: o
                    }),
                (0, r.jsx)(I.Z, {
                    guild: t,
                    disabled: f,
                    role: n
                }),
                (0, r.jsx)(H, {
                    role: n,
                    guildId: t.id
                }),
                (0, r.jsx)(m.$i$, { className: D.divider }),
                (0, r.jsx)(V, {
                    role: n,
                    disabled: f
                }),
                x
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.$i$, { className: D.divider }),
                              (0, r.jsx)(S.L, {
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
