n.d(t, { ZP: () => G }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(605436),
    g = n(663993),
    p = n(540059),
    h = n(518738),
    f = n(786761),
    b = n(3148),
    x = n(753206),
    j = n(598077),
    N = n(496675),
    _ = n(764260),
    v = n(95242),
    C = n(541575),
    O = n(420966),
    y = n(337344),
    I = n(275296),
    E = n(203377),
    S = n(981631),
    T = n(388032),
    P = n(275302),
    w = n(877248),
    R = n(179517),
    Z = n(79829);
let D = (0, g.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 797967)),
        webpackId: 797967
    }),
    A = o().debounce((e, t) => (0, _.Uv)(e, t), 200);
function k(e) {
    let { role: t, disabled: n } = e,
        [s, a] = i.useState(t.name);
    return (
        i.useEffect(() => {
            a(t.name);
        }, [t.name]),
        (0, r.jsx)(u.xJW, {
            title: T.NW.string(T.t.dLbkBg),
            required: !0,
            children: (0, r.jsx)(u.oil, {
                type: 'text',
                value: s,
                maxLength: S.VKK,
                onChange: function (e) {
                    a(e), A(t.id, e);
                },
                disabled: n
            })
        })
    );
}
function W(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(u.xJW, {
        className: P.colorPicker,
        title: T.NW.string(T.t['1F6FzM']),
        required: !0,
        children: [
            (0, r.jsx)(u.R94, {
                className: P.colorDescription,
                children: T.NW.string(T.t['9UCxlZ'])
            }),
            (0, r.jsx)(
                D,
                {
                    defaultColor: S.p6O,
                    colors: S.pmI,
                    value: t.color,
                    disabled: n,
                    onChange: (e) => {
                        var n;
                        return (n = e), void (t.color !== n && (n !== S.p6O || 0 !== t.color) && (n === S.p6O && (n = 0), (0, _.OW)(t.id, n)));
                    },
                    customPickerPosition: 'right'
                },
                t.id
            )
        ]
    });
}
function L(e) {
    var t, s, a, l, o;
    let { role: c, guildId: m } = e,
        g =
            ((o = T.NW.string(T.t.Mi9KbW)),
            i.useMemo(() => {
                var e, t;
                let r = (0, f.e5)(
                    ((e = (function (e) {
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
                        (0, b.ZP)({
                            channelId: '1337',
                            content: o
                        })
                    )),
                    (t = t =
                        {
                            state: S.yb.SENT,
                            id: '31337'
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e)
                );
                return (
                    (r.author = new j.Z({
                        id: '313337',
                        username: T.NW.string(T.t.cqpybG),
                        discriminator: '0000',
                        bot: !1
                    })),
                    (r.author.getAvatarURL = () => n(52008)),
                    r
                );
            }, [o])),
        N = {
            nick: g.author.username,
            colorStrings: {
                primaryColor: null == (t = c.colorStrings) ? void 0 : t.primaryColor,
                secondaryColor: null == (s = c.colorStrings) ? void 0 : s.secondaryColor,
                tertiaryColor: null == (a = c.colorStrings) ? void 0 : a.tertiaryColor
            },
            colorString: null != (l = c.colorString) ? l : void 0
        },
        _ = {
            src: R,
            name: c.name
        },
        v = {
            src: Z,
            name: c.name
        },
        C = (0, h.oC)(m, c),
        O = (0, p.Q3)('RolePreview') ? [S.BRd.LIGHT, S.BRd.DARK, S.BRd.DARKER, S.BRd.MIDNIGHT] : [S.BRd.LIGHT, S.BRd.DARK];
    return (0, r.jsx)(u.Rny, {
        children: (0, r.jsx)('div', {
            className: P.previewContainer,
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: O.map((e) =>
                (0, r.jsx)(
                    u.f6W,
                    {
                        theme: e,
                        children: (t) =>
                            (0, r.jsx)('div', {
                                className: t,
                                children: (0, r.jsx)('div', {
                                    className: P.messageContainer,
                                    children: (0, r.jsx)(x.Z, {
                                        author: N,
                                        message: g,
                                        roleIcon: null != C ? C : (0, d.ap)(e) ? v : _,
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
function M(e) {
    let { role: t, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, _.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: T.NW.string(T.t.vceJPj)
            }),
            (0, r.jsx)(u.$i$, { className: P.divider }),
            (0, r.jsx)(u.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, _.we)(t.id, t.hoist, e),
                note: T.NW.string(T.t.kRg5W1),
                hideBorder: !0,
                children: T.NW.format(T.t.DTXoJS, {})
            })
        ]
    });
}
function G(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: s } = e,
        l = (0, m.pM)(null == t ? void 0 : t.id, n.id),
        o = i || l,
        d = (0, c.e7)([N.Z], () => N.Z.canImpersonateRole(t, n)),
        { headerHeight: g, headerRef: p } = (0, v.Z)(0),
        { scrolledToTop: h, handleScroll: f } = (0, O.V)();
    return (0, r.jsx)(u.yWw, {
        className: P.scroller,
        style: { scrollPaddingTop: g },
        onScroll: f,
        children: (0, r.jsxs)('div', {
            className: w.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: a()(w.header, w.stickyHeader, { [w.stickyHeaderElevated]: !h }),
                    ref: p,
                    children: (0, r.jsx)(O.Z, {
                        guild: t,
                        role: n,
                        selectedSection: E.ZI.DISPLAY,
                        setSelectedSection: s
                    })
                }),
                (0, r.jsx)(k, {
                    role: n,
                    disabled: o
                }),
                (0, r.jsx)('div', {
                    className: P.noticeContainer,
                    children: (0, r.jsx)(I.Z, { role: n })
                }),
                (0, r.jsx)(u.$i$, { className: P.divider }),
                (0, r.jsx)(W, {
                    role: n,
                    disabled: o
                }),
                (0, r.jsx)(C.Z, {
                    guild: t,
                    disabled: o,
                    role: n
                }),
                (0, r.jsx)(L, {
                    role: n,
                    guildId: t.id
                }),
                (0, r.jsx)(u.$i$, { className: P.divider }),
                (0, r.jsx)(M, {
                    role: n,
                    disabled: o
                }),
                d
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.$i$, { className: P.divider }),
                              (0, r.jsx)(y.L, {
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
