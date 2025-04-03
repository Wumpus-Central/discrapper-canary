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
function C(e) {
    let { channel: t, guild: n, inviteTarget: s } = e,
        { guildProfile: r, fetchGuildProfile: a } = (0, x.u)(n.id);
    i.useEffect(() => {
        a();
    }, [a]);
    let o = (0, h.KS)(t, n),
        d = null,
        c = null;
    if (null !== t) {
        d = null == t ? void 0 : t.name;
        let e = (0, p.a5)({ type: s.type });
        c = (0, l.jsxs)(u.Text, {
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
        (d = n.name),
            (c =
                null === r
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
                                          children: j.NW.format(j.t['LC+S+v'], { membersOnline: r.onlineCount })
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
                                          children: j.NW.format(j.t.zRl6XV, { count: r.memberCount })
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
                    null !== o &&
                        (0, l.jsx)(o, {
                            className: S.inviteTargetIcon,
                            size: 'xs'
                        }),
                    (0, l.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        lineClamp: 1,
                        children: d
                    })
                ]
            }),
            c
        ]
    });
}
function b(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: r()(t, S.advancedOptions),
        children: n
    });
}
function _(e) {
    let { className: t, children: n, htmlFor: i, onClick: s } = e,
        a = null === s ? 'label' : u.P3F;
    return (0, l.jsx)(a, {
        className: S.advancedOption,
        htmlFor: i,
        onClick: s,
        children: (0, l.jsx)('div', {
            className: r()(t, S.advancedOptionInner),
            children: n
        })
    });
}
function y(e) {
    var t;
    let { className: s, guild: h, channel: x, inviteTarget: p, sendInvite: y, inviteKey: O, sending: P, options: Z, setOptions: A, isApplicationBypassAllowed: w, isGuestInviteAllowed: k, isTemporaryInviteAllowed: R } = e,
        [M] = (0, o.Wu)([v.Z], () => [v.Z.hideInstantInvites]),
        [W, L] = i.useState(!1),
        [D, U] = i.useState(!1),
        V = i.useRef(null),
        B = (0, m.Dt)(),
        z = (0, m.Dt)(),
        F = (0, m.Dt)(),
        G = (0, I.Z)(O),
        H = M ? j.NW.string(j.t['6HzNgY']) : G,
        q = i.useCallback(
            () => (
                L(!0),
                (0, N.JG)(G),
                (V.current = setTimeout(() => {
                    L(!1);
                }, 1000)),
                () => {
                    null !== V.current && clearTimeout(V.current);
                }
            ),
            [L, G]
        ),
        Y = i.useCallback(
            (e) => {
                A({ max_age: e });
            },
            [A]
        ),
        K = i.useCallback(
            (e) => {
                A({ max_uses: e });
            },
            [A]
        ),
        X = i.useCallback(
            (e) => {
                Z.flags === e ? A({ flags: void 0 }) : A({ flags: e });
            },
            [Z, A]
        ),
        J = i.useCallback(
            (e) => {
                A({ temporary: e });
            },
            [A]
        ),
        Q = i.useCallback(
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
                                    initialOptions: Z,
                                    onChangeMaxAge: Y,
                                    onChangeMaxUses: K
                                })
                            );
                    });
            },
            [Z, Y, K]
        ),
        $ = f.H.find((e) => {
            let { value: t } = e;
            return t === Z.max_age;
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
                    (0, l.jsx)(C, {
                        guild: h,
                        channel: x,
                        inviteTarget: p,
                        isStreamerMode: M
                    }),
                    (0, l.jsx)(u.ua7, {
                        position: 'top',
                        text: j.NW.string(j.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                u.zxk,
                                T(
                                    E(
                                        {
                                            size: u.zxk.Sizes.ICON,
                                            look: u.zxk.Looks.BLANK,
                                            className: S.settingsButton
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), U(!D);
                                        },
                                        children: (0, l.jsx)(u.ewm, {
                                            size: 'md',
                                            color: d.Z.colors.ICON_PRIMARY.css
                                        })
                                    }
                                )
                            )
                    })
                ]
            }),
            D &&
                (0, l.jsxs)(b, {
                    children: [
                        (0, l.jsxs)(_, {
                            onClick: Q,
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
                                            children: null != (t = null == $ ? void 0 : $.label) ? t : null
                                        }),
                                        (0, l.jsx)(u.Fbu, {
                                            size: 'xs',
                                            color: d.Z.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        w &&
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
                                        checked: Z.flags === a.$.IS_APPLICATION_BYPASS,
                                        onChange: () => X(a.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        k &&
                            (0, l.jsxs)(_, {
                                htmlFor: z,
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
                                        id: z,
                                        checked: Z.flags === a.$.IS_GUEST_INVITE,
                                        onChange: () => X(a.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        R &&
                            (0, l.jsxs)(_, {
                                htmlFor: F,
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
                                        id: F,
                                        checked: !!Z.temporary,
                                        onChange: (e) => J(e)
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
                        'aria-label': H,
                        text: (0, l.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            children: H
                        }),
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
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), q();
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
                        onClick: () => y(),
                        disabled: P,
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
