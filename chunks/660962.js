n.d(t, { ZP: () => X }), n(388685);
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
    v = n(494620),
    O = n(598077),
    C = n(496675),
    y = n(764260),
    I = n(95242),
    E = n(541575),
    S = n(420966),
    T = n(337344),
    P = n(275296),
    w = n(203377),
    R = n(981631),
    Z = n(141006),
    D = n(388032),
    A = n(680278),
    W = n(275302),
    k = n(877248),
    L = n(179517),
    M = n(79829);
let G = (0, h.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    U = o().debounce((e, t) => (0, y.Uv)(e, t), 200);
function B(e) {
    let { role: t, disabled: n } = e,
        [s, l] = i.useState(t.name);
    return (
        i.useEffect(() => {
            l(t.name);
        }, [t.name]),
        (0, r.jsx)(m.xJW, {
            title: D.NW.string(D.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(m.oil, {
                type: 'text',
                value: s,
                maxLength: R.VKK,
                onChange: function (e) {
                    l(e), U(t.id, e);
                },
                disabled: n
            })
        })
    );
}
let F = [
    {
        id: 'solid',
        colors: { primary_color: R.p6O },
        labelString: D.t['8Qyaho']
    },
    {
        id: 'gradient',
        colors: Z.Eg,
        labelString: D.t.XpWmJy
    },
    {
        id: 'holographic',
        colors: Z.SK,
        labelString: D.t.QTKppa
    }
];
function z(e) {
    let { role: t, guildId: n, selectedStyle: i, onStyleSelect: s, disabled: a } = e,
        o = V(D.NW.string(D.t.Mi9KbW)),
        d = (0, g.ZP)(),
        p = (0, x.oC)(n, t),
        h = {
            dark: {
                src: L,
                name: t.name
            },
            light: {
                src: M,
                name: t.name
            }
        };
    return (0, r.jsx)(m.xJW, {
        title: D.NW.string(D.t['9wVJRE']),
        children: (0, r.jsx)('div', {
            className: W.roleStyleContainer,
            children: F.map((e) => {
                let { id: g, colors: f, labelString: x } = e;
                return (0, r.jsxs)(
                    'button',
                    {
                        className: l()(W.roleStylePreviewContainer, {
                            [W.selected]: i === g,
                            [W.disabled]: a
                        }),
                        onClick: () =>
                            (function (e) {
                                let n;
                                s(e);
                                var r = t.id;
                                switch (e) {
                                    case 'gradient':
                                        n = {
                                            primary_color: Z.Eg.primary_color,
                                            secondary_color: Z.Eg.secondary_color,
                                            tertiary_color: void 0
                                        };
                                        break;
                                    case 'holographic':
                                        n = {
                                            primary_color: Z.SK.primary_color,
                                            secondary_color: Z.SK.secondary_color,
                                            tertiary_color: Z.SK.tertiary_color
                                        };
                                        break;
                                    default:
                                        n = {
                                            primary_color: t.color,
                                            secondary_color: void 0,
                                            tertiary_color: void 0
                                        };
                                }
                                (0, y.TW)(r, n);
                            })(g),
                        children: [
                            (0, r.jsx)(m.Rny, {
                                children: (0, r.jsx)('div', {
                                    className: W.roleStyleMessageContainer,
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
                                className: W.roleStyleLabel,
                                children: D.NW.string(x)
                            })
                        ]
                    },
                    g
                );
            })
        })
    });
}
function H(e) {
    var t;
    let { role: n, disabled: i, currentStyle: s, hasEnhancedRoleColors: l } = e;
    return (0, r.jsxs)(m.xJW, {
        className: W.colorPicker,
        title: D.NW.string(D.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(m.R94, {
                className: W.colorDescription,
                children: D.NW.string(D.t['9UCxlZ'])
            }),
            (0, r.jsx)(
                G,
                {
                    defaultColor: R.p6O,
                    colors: 'gradient' === s && l ? Z.tl : R.pmI,
                    value: n.color,
                    disabled: i,
                    onChange: (e) => {
                        var t;
                        return (t = e), void (n.color !== t && (t !== R.p6O || 0 !== n.color) && (t === R.p6O && (t = 0), (0, y.OW)(n.id, t)));
                    },
                    secondaryValue: 'gradient' === s && l ? (null == (t = n.colors) ? void 0 : t.secondary_color) : void 0,
                    onChangeGradientColors: (e) =>
                        (0, y.TW)(n.id, {
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
function V(e) {
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
                    state: R.yb.SENT,
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
            (i.author = new O.Z({
                id: '313337',
                username: D.NW.string(D.t.cqpybG),
                discriminator: '0000',
                bot: !1
            })),
            (i.author.getAvatarURL = () => n(52008)),
            i
        );
    }, [e]);
}
function Y(e) {
    var t, n, i, s;
    let { role: l, guildId: a } = e,
        o = V(D.NW.string(D.t.Mi9KbW)),
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
            src: L,
            name: l.name
        },
        g = {
            src: M,
            name: l.name
        },
        p = (0, x.oC)(a, l),
        h = (0, f.Q3)('RolePreview') ? [R.BRd.LIGHT, R.BRd.DARK, R.BRd.DARKER, R.BRd.MIDNIGHT] : [R.BRd.LIGHT, R.BRd.DARK];
    return (0, r.jsx)(m.Rny, {
        children: (0, r.jsx)('div', {
            className: W.previewContainer,
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
                                    className: W.messageContainer,
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
function K(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, y.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: D.NW.string(D.t.vceJPj)
            }),
            (0, r.jsx)(m.$i$, { className: W.divider }),
            (0, r.jsx)(m.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, y.we)(t.id, t.hoist, e),
                note: D.NW.string(D.t.kRg5W1),
                hideBorder: !0,
                children: D.NW.format(D.t.DTXoJS, {})
            })
        ]
    });
}
function X(e) {
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
        x = (0, d.e7)([C.Z], () => C.Z.canImpersonateRole(t, n)),
        { headerHeight: b, headerRef: j } = (0, I.Z)(0),
        { scrolledToTop: N, handleScroll: O } = (0, S.V)();
    return (0, r.jsx)(m.yWw, {
        className: W.scroller,
        style: { scrollPaddingTop: b },
        onScroll: O,
        children: (0, r.jsxs)('div', {
            className: k.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: l()(k.header, k.stickyHeader, { [k.stickyHeaderElevated]: !N }),
                    ref: j,
                    children: (0, r.jsx)(S.Z, {
                        guild: t,
                        role: n,
                        selectedSection: w.ZI.DISPLAY,
                        setSelectedSection: a
                    })
                }),
                (0, r.jsx)(B, {
                    role: n,
                    disabled: f
                }),
                (0, r.jsx)('div', {
                    className: W.noticeContainer,
                    children: (0, r.jsx)(P.Z, { role: n })
                }),
                (0, r.jsx)(m.$i$, { className: W.divider }),
                o &&
                    (0, r.jsx)(z, {
                        role: n,
                        guildId: t.id,
                        selectedStyle: u,
                        onStyleSelect: g,
                        disabled: f
                    }),
                'holographic' !== u &&
                    (0, r.jsx)(H, {
                        role: n,
                        disabled: f,
                        currentStyle: u,
                        hasEnhancedRoleColors: o
                    }),
                'holographic' === u &&
                    (0, r.jsx)(v.Z, {
                        className: W.holographicInfoBox,
                        children: (0, r.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            children: D.NW.string(A.Z.tBhCys)
                        })
                    }),
                (0, r.jsx)(E.Z, {
                    guild: t,
                    disabled: f,
                    role: n
                }),
                (0, r.jsx)(Y, {
                    role: n,
                    guildId: t.id
                }),
                (0, r.jsx)(m.$i$, { className: W.divider }),
                (0, r.jsx)(K, {
                    role: n,
                    disabled: f
                }),
                x
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.$i$, { className: W.divider }),
                              (0, r.jsx)(T.L, {
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
