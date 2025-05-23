n.d(t, { f: () => U }), n(388685), n(997841);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(533800),
    d = n(442837),
    c = n(692547),
    g = n(481060),
    h = n(239091),
    m = n(657305),
    p = n(835473),
    v = n(471445),
    x = n(313201),
    I = n(925329),
    f = n(65361),
    j = n(60034),
    N = n(246946),
    _ = n(626135),
    S = n(934415),
    E = n(572004),
    b = n(971130),
    T = n(366980),
    O = n(76234),
    y = n(981631),
    C = n(388032),
    P = n(942558);
function Z(e) {
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
function w(e, t) {
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
let A = (e) => {
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                null == t
                    ? null
                    : (0, l.jsx)('div', {
                          className: P.inviteIcon,
                          children: t
                      }),
                (0, l.jsxs)('div', {
                    className: P.inviteTarget,
                    children: [
                        (0, l.jsxs)('div', {
                            className: P.inviteTargetHeading,
                            children: [
                                null == n ? null : n,
                                (0, l.jsx)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-secondary',
                                    lineClamp: 1,
                                    children: i
                                })
                            ]
                        }),
                        r
                    ]
                })
            ]
        });
    },
    k = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, S.a5)({ type: n.type }),
            r = (0, l.jsx)(g.Text, {
                variant: 'text-xs/medium',
                color: 'header-muted',
                lineClamp: 1,
                children: [i, t.name].join('\xA0\xA0\u2022\xA0\xA0')
            }),
            s = (0, v.KS)(n, t),
            a = (0, l.jsx)(j.Ft, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 40
            });
        return (0, l.jsx)(A, {
            inviteIcon: a,
            channelIcon:
                null == s
                    ? null
                    : (0, l.jsx)(s, {
                          className: P.inviteTargetIcon,
                          size: 'xs'
                      }),
            heading: n.name,
            subheading: r
        });
    },
    M = (e) => {
        let t,
            { guild: n } = e,
            { guildProfile: r, fetchGuildProfile: s } = (0, f.u)(n.id);
        i.useEffect(() => {
            s();
        }, [s]),
            (t =
                null === r
                    ? null
                    : (0, l.jsxs)('div', {
                          className: P.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: P.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: P.dot }),
                                      (0, l.jsx)(g.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: C.intl.format(C.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: P.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: P.dot }),
                                      (0, l.jsx)(g.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: C.intl.format(C.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
        let a = (0, l.jsx)(j.Ft, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 40
        });
        return (0, l.jsx)(A, {
            inviteIcon: a,
            heading: n.name,
            subheading: t
        });
    },
    R = (e) => {
        let { applicationId: t } = e,
            [n] = (0, p.Z)([t]);
        if (null == n) return null;
        let i = (0, m.Z)(n.name),
            r = (0, l.jsx)(g.Text, {
                variant: 'text-xs/medium',
                color: 'header-muted',
                lineClamp: 1,
                children: (0, l.jsx)(l.Fragment, { children: n.tags.join('\xA0\xA0\u2022\xA0\xA0') })
            }),
            s = (0, l.jsx)(I.Z, {
                game: n,
                size: I.Z.Sizes.MEDIUM,
                className: P.inviteIcon
            });
        return (0, l.jsx)(A, {
            inviteIcon: s,
            heading: i,
            subheading: r
        });
    };
function D(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(R, { applicationId: i })
        : null != n
          ? (0, l.jsx)(k, {
                guild: t,
                channel: n
            })
          : (0, l.jsx)(M, { guild: t });
}
function L(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: s()(t, P.advancedOptions),
        children: n
    });
}
function V(e) {
    let t,
        n,
        { className: i, children: r, htmlFor: a, onClick: o } = e;
    return (
        null != a ? ((t = 'label'), (n = { htmlFor: a })) : null != o ? ((t = g.P3F), (n = { onClick: o })) : ((t = 'div'), (n = {})),
        (0, l.jsx)(
            t,
            w(Z({ className: P.advancedOption }, n), {
                children: (0, l.jsx)('div', {
                    className: s()(i, P.advancedOptionInner),
                    children: r
                })
            })
        )
    );
}
function U(e) {
    let { className: t, guild: r, channel: a, applicationId: m, getInviteKey: p, sendInvite: v, canUseVanityURL: I, disabled: f, hasSelection: j, options: S, setOptions: A, isApplicationBypassAllowed: k, isGuestInviteAllowed: M, isTemporaryInviteAllowed: R, setError: U, analyticsLocation: F } = e,
        [B, z] = i.useState(!1),
        [G, H] = i.useState(!1),
        q = i.useRef(null),
        [W] = (0, d.Wu)([N.Z], () => [N.Z.hideInstantInvites]),
        Y = (0, x.Dt)(),
        K = (0, x.Dt)(),
        X = (0, x.Dt)(),
        J = i.useMemo(() => (I && null != r.vanityURLCode ? (0, T.Z)(r.vanityURLCode, !1) : null), [r, I]),
        Q = i.useCallback(async () => {
            var e, t;
            if (f) return;
            null !== q.current && clearTimeout(q.current);
            let n = await p();
            o()(null != n, 'Invite key could not be determined.');
            let l = (0, T.Z)(n);
            return (
                (0, E.JG)(
                    l,
                    () => {
                        z(!0),
                            (q.current = setTimeout(() => {
                                z(!1), (q.current = null);
                            }, 1000));
                    },
                    (e) => {
                        U(e);
                    }
                ),
                _.default.track(y.rMx.COPY_INSTANT_INVITE, {
                    server: r.id,
                    channel: null != (e = null == a ? void 0 : a.id) ? e : null,
                    channel_type: null != (t = null == a ? void 0 : a.type) ? t : null,
                    location: F,
                    code: n,
                    application_id: m
                }),
                () => {
                    null !== q.current && clearTimeout(q.current);
                }
            );
        }, [f, p, r, a, F, m, U]),
        $ = i.useCallback(
            (e) => {
                A({ max_age: e });
            },
            [A]
        ),
        ee = i.useCallback(
            (e) => {
                A({ max_uses: e });
            },
            [A]
        ),
        et = i.useCallback(
            (e) => {
                S.flags === e ? A({ flags: void 0 }) : A({ flags: e });
            },
            [S, A]
        ),
        en = i.useCallback(
            (e) => {
                A({ temporary: e });
            },
            [A]
        ),
        el = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.currentTarget) ? void 0 : t.getBoundingClientRect(),
                    { left: r = 0, width: s = 0 } = null != i ? i : {};
                (e.pageX = r + s + 12),
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('84212').then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                w(Z({}, t), {
                                    initialOptions: S,
                                    onChangeMaxAge: $,
                                    onChangeMaxUses: ee
                                })
                            );
                    });
            },
            [S, $, ee]
        ),
        ei = (function (e) {
            let t = O.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = O.p.find((t) => {
                    let { value: n } = t;
                    return n === e.max_uses;
                });
            return null == t || null == n
                ? null
                : t.value === b.ZP.INVITE_OPTIONS_FOREVER.value && n.value === b.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? C.intl.string(C.t['5u4A6e'])
                  : t.value !== b.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== b.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? C.intl.formatToPlainString(C.t['Z5Vt5+'], {
                          maxAge: t.label,
                          maxUses: n.label
                      })
                    : n.value === b.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== b.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== b.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === b.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(S);
    return (0, l.jsxs)('div', {
        className: s()(t, P.footer),
        children: [
            (0, l.jsxs)('div', {
                className: P.guildRow,
                children: [
                    (0, l.jsx)(D, {
                        guild: r,
                        channel: a,
                        applicationId: m
                    }),
                    (0, l.jsx)(g.ua7, {
                        position: 'top',
                        text: C.intl.string(C.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                g.P3F,
                                w(Z({ className: s()(P.settingsButton, { [P.settingsOpen]: G }) }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), H((e) => !e);
                                    },
                                    children: (0, l.jsx)(g.ewm, {
                                        size: 'refresh_sm',
                                        color: c.Z.colors.ICON_PRIMARY
                                    })
                                })
                            )
                    })
                ]
            }),
            G &&
                (0, l.jsxs)(L, {
                    children: [
                        (0, l.jsxs)(V, {
                            onClick: el,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: P.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(g.X6q, {
                                            variant: 'heading-md/medium',
                                            children: C.intl.string(C.t.YlT5MT)
                                        }),
                                        (0, l.jsx)(g.ua7, {
                                            position: 'top',
                                            text: C.intl.string(C.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    g.idN,
                                                    w(Z({}, e), {
                                                        size: 'xs',
                                                        color: c.Z.colors.INTERACTIVE_NORMAL
                                                    })
                                                )
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: P.advancedOptionContent,
                                    children: [
                                        null != ei &&
                                            (0, l.jsx)(g.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'header-muted',
                                                children: ei
                                            }),
                                        (0, l.jsx)(g.Fbu, {
                                            size: 'xs',
                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        k &&
                            (0, l.jsxs)(V, {
                                htmlFor: Y,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(g.X6q, {
                                                variant: 'heading-md/medium',
                                                children: C.intl.string(C.t.EPIOl5)
                                            }),
                                            (0, l.jsx)(g.ua7, {
                                                position: 'top',
                                                text: C.intl.string(C.t['jvd/LC']),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        g.idN,
                                                        w(Z({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(g.rsf, {
                                        id: Y,
                                        checked: S.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => et(u.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        M &&
                            (0, l.jsxs)(V, {
                                htmlFor: K,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(g.X6q, {
                                                variant: 'heading-md/medium',
                                                children: C.intl.string(C.t.NKqlpq)
                                            }),
                                            (0, l.jsx)(g.ua7, {
                                                position: 'top',
                                                text: C.intl.string(C.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        g.idN,
                                                        w(Z({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(g.rsf, {
                                        id: K,
                                        checked: S.flags === u.$.IS_GUEST_INVITE,
                                        onChange: () => et(u.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        R &&
                            (0, l.jsxs)(V, {
                                htmlFor: X,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(g.X6q, {
                                                variant: 'heading-md/medium',
                                                children: C.intl.string(C.t.UL177u)
                                            }),
                                            (0, l.jsx)(g.ua7, {
                                                position: 'top',
                                                text: C.intl.string(C.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        g.idN,
                                                        w(Z({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(g.rsf, {
                                        id: X,
                                        checked: !!S.temporary,
                                        onChange: (e) => en(e)
                                    })
                                ]
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: P.buttonRow,
                children: [
                    (0, l.jsx)(g.ua7, {
                        position: 'top',
                        text: J,
                        shouldShow: null !== J && !W,
                        children: (e) =>
                            (0, l.jsx)(
                                g.zxk,
                                w(
                                    Z(
                                        {
                                            className: P.button,
                                            innerClassName: P.buttonInner,
                                            color: g.zxk.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), Q();
                                        },
                                        disabled: f,
                                        children: B
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(g.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: C.intl.string(C.t['+5kSoa']) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(g.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: C.intl.string(C.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(g.zxk, {
                        className: P.button,
                        innerClassName: P.buttonInner,
                        onClick: () => v(),
                        disabled: !j || f,
                        children: [
                            (0, l.jsx)('span', { children: C.intl.string(C.t.BcAABg) }),
                            (0, l.jsx)(g.Uuj, {
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
