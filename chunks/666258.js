n.d(t, { f: () => P }), n(388685), n(997841);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    d = n(533800),
    u = n(442837),
    c = n(692547),
    h = n(481060),
    g = n(239091),
    m = n(471445),
    v = n(114487),
    x = n(313201),
    p = n(65361),
    N = n(246946),
    I = n(934415),
    f = n(572004),
    j = n(366980),
    b = n(76234),
    S = n(388032),
    E = n(942558);
function _(e) {
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
function y(e) {
    let { channel: t, guild: n } = e,
        { guildProfile: r, fetchGuildProfile: s } = (0, p.u)(n.id);
    i.useEffect(() => {
        s();
    }, [s]);
    let a = (0, m.KS)(t, n),
        o = null,
        d = null;
    if (null !== t) {
        o = null == t ? void 0 : t.name;
        let e = (0, I.a5)({ type: t.type });
        d = (0, l.jsxs)(h.Text, {
            className: E.inviteTargetContent,
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
                null === r
                    ? null
                    : (0, l.jsxs)('div', {
                          className: E.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: E.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: E.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: S.NW.format(S.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: E.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: E.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: S.NW.format(S.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
    return (0, l.jsxs)('div', {
        className: E.inviteTarget,
        children: [
            (0, l.jsxs)('div', {
                className: E.inviteTargetHeading,
                children: [
                    null !== a &&
                        (0, l.jsx)(a, {
                            className: E.inviteTargetIcon,
                            size: 'xs'
                        }),
                    (0, l.jsx)(h.X6q, {
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
        className: s()(t, E.advancedOptions),
        children: n
    });
}
function O(e) {
    let t,
        n,
        { className: i, children: r, htmlFor: a, onClick: o } = e;
    return (
        null != a ? ((t = 'label'), (n = { htmlFor: a })) : null != o ? ((t = h.P3F), (n = { onClick: o })) : ((t = 'div'), (n = {})),
        (0, l.jsx)(
            t,
            T(_({ className: s()(E.advancedOption, { [E.clickableAdvancedOption]: !!o }) }, n), {
                children: (0, l.jsx)('div', {
                    className: s()(i, E.advancedOptionInner),
                    children: r
                })
            })
        )
    );
}
function P(e) {
    var t;
    let { className: r, guild: a, channel: m, getInviteKey: p, sendInvite: I, canUseVanityURL: P, disabled: Z, options: w, setOptions: A, isApplicationBypassAllowed: k, isGuestInviteAllowed: R, isTemporaryInviteAllowed: M, setError: W } = e,
        [L] = (0, u.Wu)([N.Z], () => [N.Z.hideInstantInvites]),
        [D, U] = i.useState(!1),
        [V, B] = i.useState(!1),
        F = i.useRef(null),
        G = (0, x.Dt)(),
        z = (0, x.Dt)(),
        H = (0, x.Dt)(),
        q = i.useMemo(() => (P && null != a.vanityURLCode ? (0, j.Z)(a.vanityURLCode, !1) : null), [a, P]),
        Y = i.useCallback(async () => {
            if (Z) return;
            null !== F.current && clearTimeout(F.current);
            let e = !1;
            try {
                let t = await p();
                o()(null != t, 'Invite key could not be determined.');
                let n = (0, j.Z)(t);
                (0, f.JG)(n), (e = !0);
            } catch (e) {
                W(e);
            }
            return (
                e &&
                    (U(!0),
                    (F.current = setTimeout(() => {
                        U(!1);
                    }, 1000))),
                () => {
                    null !== F.current && clearTimeout(F.current);
                }
            );
        }, [U, W, p, Z]),
        K = i.useCallback(
            (e) => {
                A({ max_age: e });
            },
            [A]
        ),
        X = i.useCallback(
            (e) => {
                A({ max_uses: e });
            },
            [A]
        ),
        J = i.useCallback(
            (e) => {
                w.flags === e ? A({ flags: void 0 }) : A({ flags: e });
            },
            [w, A]
        ),
        Q = i.useCallback(
            (e) => {
                A({ temporary: e });
            },
            [A]
        ),
        $ = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.target) ? void 0 : t.getBoundingClientRect(),
                    { left: r = 0, width: s = 0 } = null != i ? i : {};
                (e.pageX = r + s + 12),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e('84212').then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                T(_({}, t), {
                                    initialOptions: w,
                                    onChangeMaxAge: K,
                                    onChangeMaxUses: X
                                })
                            );
                    });
            },
            [w, K, X]
        ),
        ee = b.H.find((e) => {
            let { value: t } = e;
            return t === w.max_age;
        });
    return (0, l.jsxs)('div', {
        className: s()(r, E.footer),
        children: [
            (0, l.jsxs)('div', {
                className: E.guildRow,
                children: [
                    (0, l.jsx)('div', {
                        className: E.guildAsset,
                        children: (0, l.jsx)(v.b, {
                            guildId: a.id,
                            guildName: a.name,
                            guildIcon: a.icon,
                            iconSize: 32
                        })
                    }),
                    (0, l.jsx)(y, {
                        guild: a,
                        channel: m,
                        isStreamerMode: L
                    }),
                    (0, l.jsx)(h.ua7, {
                        position: 'top',
                        text: S.NW.string(S.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                h.P3F,
                                T(_({ className: E.settingsButton }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), B((e) => !e);
                                    },
                                    children: (0, l.jsx)(h.ewm, {
                                        size: 'refresh_sm',
                                        color: c.Z.colors.ICON_PRIMARY
                                    })
                                })
                            )
                    })
                ]
            }),
            V &&
                (0, l.jsxs)(C, {
                    children: [
                        (0, l.jsxs)(O, {
                            onClick: $,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: E.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(h.X6q, {
                                            variant: 'heading-md/medium',
                                            children: S.NW.string(S.t.YlT5MT)
                                        }),
                                        (0, l.jsx)(h.ua7, {
                                            position: 'top',
                                            text: S.NW.string(S.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    h.idN,
                                                    T(_({}, e), {
                                                        size: 'xs',
                                                        color: c.Z.colors.INTERACTIVE_NORMAL
                                                    })
                                                )
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: E.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(h.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-muted',
                                            children: null != (t = null == ee ? void 0 : ee.label) ? t : null
                                        }),
                                        (0, l.jsx)(h.Fbu, {
                                            size: 'xs',
                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        k &&
                            (0, l.jsxs)(O, {
                                htmlFor: G,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: E.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: S.NW.string(S.t.EPIOl5)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: S.NW.string(S.t['jvd/LC']),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        T(_({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: G,
                                        checked: w.flags === d.$.IS_APPLICATION_BYPASS,
                                        onChange: () => J(d.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        R &&
                            (0, l.jsxs)(O, {
                                htmlFor: z,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: E.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: S.NW.string(S.t.NKqlpq)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: S.NW.string(S.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        T(_({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: z,
                                        checked: w.flags === d.$.IS_GUEST_INVITE,
                                        onChange: () => J(d.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        M &&
                            (0, l.jsxs)(O, {
                                htmlFor: H,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: E.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: S.NW.string(S.t.UL177u)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: S.NW.string(S.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        T(_({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: H,
                                        checked: !!w.temporary,
                                        onChange: (e) => Q(e)
                                    })
                                ]
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: E.buttonRow,
                children: [
                    (0, l.jsx)(h.ua7, {
                        position: 'top',
                        text: q,
                        shouldShow: null !== q && !L,
                        children: (e) =>
                            (0, l.jsx)(
                                h.zxk,
                                T(
                                    _(
                                        {
                                            className: E.button,
                                            innerClassName: E.buttonInner,
                                            color: h.zxk.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), Y();
                                        },
                                        disabled: Z,
                                        children: D
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: S.NW.string(S.t['+5kSoa']) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: S.NW.string(S.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(h.zxk, {
                        className: E.button,
                        innerClassName: E.buttonInner,
                        onClick: () => I(),
                        disabled: Z,
                        children: [
                            (0, l.jsx)('span', { children: S.NW.string(S.t.BcAABg) }),
                            (0, l.jsx)(h.Uuj, {
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
