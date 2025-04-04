n.d(t, { f: () => y }), n(47120), n(789020);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(533800),
    o = n(442837),
    d = n(692547),
    u = n(481060),
    c = n(239091),
    h = n(471445),
    g = n(114487),
    m = n(313201),
    x = n(65361),
    v = n(246946),
    p = n(934415),
    N = n(572004),
    I = n(366980),
    f = n(76234),
    j = n(388032),
    S = n(942558);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { channel: t, guild: n } = e,
        { guildProfile: s, fetchGuildProfile: r } = (0, x.u)(n.id);
    i.useEffect(() => {
        r();
    }, [r]);
    let a = (0, h.KS)(t, n),
        o = null,
        d = null;
    if (null !== t) {
        o = null == t ? void 0 : t.name;
        let e = (0, p.a5)({ type: t.type });
        d = (0, l.jsxs)(u.Text, {
            className: S.inviteTargetContent,
            variant: 'text-xs/medium',
            color: 'header-muted',
            children: [
                (0, l.jsx)('span', { children: e }),
                (0, l.jsx)('span', {
                    'aria-hidden': !0,
                    children: '\u2022'
                }),
                (0, l.jsx)('span', { children: n.name })
            ]
        });
    } else
        (o = n.name),
            (d =
                null === s
                    ? null
                    : (0, l.jsxs)('div', {
                          className: S.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: S.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: S.dot }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: j.NW.format(j.t['LC+S+v'], { membersOnline: s.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: S.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: S.dot }),
                                      (0, l.jsx)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: j.NW.format(j.t.zRl6XV, { count: s.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
    return (0, l.jsxs)('div', {
        className: S.inviteTarget,
        children: [
            (0, l.jsxs)('div', {
                className: S.inviteTargetHeading,
                children: [
                    null !== a &&
                        (0, l.jsx)(a, {
                            className: S.inviteTargetIcon,
                            size: 'xs'
                        }),
                    (0, l.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        lineClamp: 1,
                        children: o
                    })
                ]
            }),
            d
        ]
    });
}
function C(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: r()(t, S.advancedOptions),
        children: n
    });
}
function _(e) {
    let t,
        n,
        { className: i, children: s, htmlFor: a, onClick: o } = e;
    return (
        null != a ? ((t = 'label'), (n = { htmlFor: a })) : null != o ? ((t = u.P3F), (n = { onClick: o })) : ((t = 'div'), (n = {})),
        (0, l.jsx)(
            t,
            T(E({ className: r()(S.advancedOption, { [S.clickableAdvancedOption]: !!o }) }, n), {
                children: (0, l.jsx)('div', {
                    className: r()(i, S.advancedOptionInner),
                    children: s
                })
            })
        )
    );
}
function y(e) {
    var t;
    let { className: s, guild: h, channel: x, sendInvite: p, inviteKey: y, sending: O, options: P, setOptions: Z, isApplicationBypassAllowed: A, isGuestInviteAllowed: w, isTemporaryInviteAllowed: k, setError: R } = e,
        [M] = (0, o.Wu)([v.Z], () => [v.Z.hideInstantInvites]),
        [W, L] = i.useState(!1),
        [D, U] = i.useState(!1),
        V = i.useRef(null),
        B = (0, m.Dt)(),
        F = (0, m.Dt)(),
        G = (0, m.Dt)(),
        z = null == y,
        [H, q] = z ? [null, null] : [(0, I.Z)(y), (0, I.Z)(y, !1)],
        Y = i.useCallback(() => {
            if (z || null == H) return;
            null !== V.current && clearTimeout(V.current);
            let e = !1;
            try {
                (0, N.JG)(H), (e = !0);
            } catch (e) {
                R(e);
            }
            return (
                e &&
                    (L(!0),
                    (V.current = setTimeout(() => {
                        L(!1);
                    }, 1000))),
                () => {
                    null !== V.current && clearTimeout(V.current);
                }
            );
        }, [z, L, R, H]),
        K = i.useCallback(
            (e) => {
                Z({ max_age: e });
            },
            [Z]
        ),
        X = i.useCallback(
            (e) => {
                Z({ max_uses: e });
            },
            [Z]
        ),
        J = i.useCallback(
            (e) => {
                P.flags === e ? Z({ flags: void 0 }) : Z({ flags: e });
            },
            [P, Z]
        ),
        Q = i.useCallback(
            (e) => {
                Z({ temporary: e });
            },
            [Z]
        ),
        $ = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.target) ? void 0 : t.getBoundingClientRect(),
                    { left: s = 0, width: r = 0 } = null != i ? i : {};
                (e.pageX = s + r + 12),
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('84212').then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                T(E({}, t), {
                                    initialOptions: P,
                                    onChangeMaxAge: K,
                                    onChangeMaxUses: X
                                })
                            );
                    });
            },
            [P, K, X]
        ),
        ee = f.H.find((e) => {
            let { value: t } = e;
            return t === P.max_age;
        });
    return (0, l.jsxs)('div', {
        className: r()(s, S.footer),
        children: [
            (0, l.jsxs)('div', {
                className: S.guildRow,
                children: [
                    (0, l.jsx)('div', {
                        className: S.guildAsset,
                        children: (0, l.jsx)(g.b, {
                            guildId: h.id,
                            guildName: h.name,
                            guildIcon: h.icon,
                            iconSize: 32
                        })
                    }),
                    (0, l.jsx)(b, {
                        guild: h,
                        channel: x,
                        isStreamerMode: M
                    }),
                    (0, l.jsx)(u.ua7, {
                        position: 'top',
                        text: j.NW.string(j.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                u.P3F,
                                T(E({ className: S.settingsButton }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), U((e) => !e);
                                    },
                                    children: (0, l.jsx)(u.ewm, {
                                        size: 'refresh_sm',
                                        color: d.Z.colors.ICON_PRIMARY
                                    })
                                })
                            )
                    })
                ]
            }),
            D &&
                (0, l.jsxs)(C, {
                    children: [
                        (0, l.jsxs)(_, {
                            onClick: $,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: S.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(u.X6q, {
                                            variant: 'heading-md/medium',
                                            children: j.NW.string(j.t.YlT5MT)
                                        }),
                                        (0, l.jsx)(u.ua7, {
                                            position: 'top',
                                            text: j.NW.string(j.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    u.idN,
                                                    T(E({}, e), {
                                                        size: 'xs',
                                                        color: d.Z.colors.INTERACTIVE_NORMAL
                                                    })
                                                )
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: S.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-muted',
                                            children: null != (t = null == ee ? void 0 : ee.label) ? t : null
                                        }),
                                        (0, l.jsx)(u.Fbu, {
                                            size: 'xs',
                                            color: d.Z.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        A &&
                            (0, l.jsxs)(_, {
                                htmlFor: B,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: S.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(u.X6q, {
                                                variant: 'heading-md/medium',
                                                children: j.NW.string(j.t.EPIOl5)
                                            }),
                                            (0, l.jsx)(u.ua7, {
                                                position: 'top',
                                                text: j.NW.string(j.t['jvd/LC']),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        u.idN,
                                                        T(E({}, e), {
                                                            size: 'xs',
                                                            color: d.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(u.rsf, {
                                        id: B,
                                        checked: P.flags === a.$.IS_APPLICATION_BYPASS,
                                        onChange: () => J(a.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        w &&
                            (0, l.jsxs)(_, {
                                htmlFor: F,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: S.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(u.X6q, {
                                                variant: 'heading-md/medium',
                                                children: j.NW.string(j.t.NKqlpq)
                                            }),
                                            (0, l.jsx)(u.ua7, {
                                                position: 'top',
                                                text: j.NW.string(j.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        u.idN,
                                                        T(E({}, e), {
                                                            size: 'xs',
                                                            color: d.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(u.rsf, {
                                        id: F,
                                        checked: P.flags === a.$.IS_GUEST_INVITE,
                                        onChange: () => J(a.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        k &&
                            (0, l.jsxs)(_, {
                                htmlFor: G,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: S.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(u.X6q, {
                                                variant: 'heading-md/medium',
                                                children: j.NW.string(j.t.UL177u)
                                            }),
                                            (0, l.jsx)(u.ua7, {
                                                position: 'top',
                                                text: j.NW.string(j.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        u.idN,
                                                        T(E({}, e), {
                                                            size: 'xs',
                                                            color: d.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(u.rsf, {
                                        id: G,
                                        checked: !!P.temporary,
                                        onChange: (e) => Q(e)
                                    })
                                ]
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: S.buttonRow,
                children: [
                    (0, l.jsx)(u.ua7, {
                        position: 'top',
                        text: q,
                        shouldShow: !z && !M,
                        children: (e) =>
                            (0, l.jsx)(
                                u.zxk,
                                T(
                                    E(
                                        {
                                            className: S.button,
                                            innerClassName: S.buttonInner,
                                            color: u.zxk.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        disabled: z,
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), Y();
                                        },
                                        children: W
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(u.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: j.NW.string(j.t['+5kSoa']) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(u.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: j.NW.string(j.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(u.zxk, {
                        className: S.button,
                        innerClassName: S.buttonInner,
                        onClick: () => p(),
                        disabled: z || O,
                        children: [
                            (0, l.jsx)('span', { children: j.NW.string(j.t.BcAABg) }),
                            (0, l.jsx)(u.Uuj, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
