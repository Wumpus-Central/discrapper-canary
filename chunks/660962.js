n.d(t, { ZP: () => U }), n(47120);
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
    p = n(663993),
    g = n(540059),
    h = n(518738),
    f = n(786761),
    b = n(3148),
    x = n(753206),
    j = n(598077),
    N = n(496675),
    v = n(764260),
    _ = n(95242),
    O = n(541575),
    y = n(420966),
    C = n(337344),
    I = n(275296),
    E = n(203377),
    S = n(981631),
    T = n(388032),
    P = n(866476),
    w = n(29931),
    R = n(179517),
    D = n(79829);
let Z = (0, p.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 336231)),
        webpackId: 336231
    }),
    A = o().debounce((e, t) => (0, v.Uv)(e, t), 200);
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
                Z,
                {
                    defaultColor: S.p6O,
                    colors: S.pmI,
                    value: t.color,
                    disabled: n,
                    onChange: (e) => {
                        var n, r;
                        return (n = t), (r = e), void (n.color !== r && (r !== S.p6O || 0 !== n.color) && (r === S.p6O && (r = 0), (0, v.OW)(n.id, r)));
                    },
                    customPickerPosition: 'right'
                },
                t.id
            )
        ]
    });
}
function L(e) {
    var t, s;
    let { role: a, guildId: l } = e,
        o =
            ((s = T.NW.string(T.t.Mi9KbW)),
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
                            content: s
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
            }, [s])),
        c = {
            nick: o.author.username,
            colorString: null !== (t = a.colorString) && void 0 !== t ? t : void 0
        },
        m = {
            src: R,
            name: a.name
        },
        p = {
            src: D,
            name: a.name
        },
        N = (0, h.oC)(l, a),
        v = (0, g.Q3)('RolePreview') ? [S.BRd.LIGHT, S.BRd.DARK, S.BRd.DARKER, S.BRd.MIDNIGHT] : [S.BRd.LIGHT, S.BRd.DARK];
    return (0, r.jsx)(u.Rny, {
        children: (0, r.jsx)('div', {
            className: P.previewContainer,
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: v.map((e) =>
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
                                        author: c,
                                        message: o,
                                        roleIcon: null != N ? N : (0, d.ap)(e) ? p : m,
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
                onChange: (e) => (0, v.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: T.NW.string(T.t.vceJPj)
            }),
            (0, r.jsx)(u.$i$, { className: P.divider }),
            (0, r.jsx)(u.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, v.we)(t.id, t.hoist, e),
                note: T.NW.string(T.t.kRg5W1),
                hideBorder: !0,
                children: T.NW.format(T.t.DTXoJS, {})
            })
        ]
    });
}
function U(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: s } = e,
        l = (0, m.pM)(null == t ? void 0 : t.id, n.id),
        o = i || l,
        d = (0, c.e7)([N.Z], () => N.Z.canImpersonateRole(t, n)),
        { headerHeight: p, headerRef: g } = (0, _.Z)(0),
        { scrolledToTop: h, handleScroll: f } = (0, y.V)();
    return (0, r.jsx)(u.yWw, {
        className: P.scroller,
        style: { scrollPaddingTop: p },
        onScroll: f,
        children: (0, r.jsxs)('div', {
            className: w.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: a()(w.header, w.stickyHeader, { [w.stickyHeaderElevated]: !h }),
                    ref: g,
                    children: (0, r.jsx)(y.Z, {
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
                (0, r.jsx)(O.Z, {
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
                              (0, r.jsx)(C.L, {
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
