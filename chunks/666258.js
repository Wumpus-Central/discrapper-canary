(n.d(t, { f: () => B }), n(388685), n(997841));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(533800),
    d = n(442837),
    c = n(692547),
    h = n(755721),
    g = n(481060),
    m = n(239091),
    p = n(657305),
    v = n(835473),
    x = n(471445),
    I = n(313201),
    f = n(925329),
    N = n(65361),
    j = n(305347),
    _ = n(246946),
    E = n(626135),
    S = n(934415),
    b = n(572004),
    T = n(971130),
    O = n(366980),
    y = n(76234),
    C = n(981631),
    P = n(388032),
    Z = n(942558);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function A(e, t) {
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
let R = (e) => {
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: r } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                null == t
                    ? null
                    : (0, l.jsx)('div', {
                          className: Z.inviteIcon,
                          children: t
                      }),
                (0, l.jsxs)('div', {
                    className: Z.inviteTarget,
                    children: [
                        (0, l.jsxs)('div', {
                            className: Z.inviteTargetHeading,
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
    M = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, S.a5)({ type: n.type }),
            r = (0, l.jsx)(g.Text, {
                variant: 'text-xs/medium',
                color: 'header-muted',
                lineClamp: 1,
                children: [i, t.name].join('\xA0\xA0\u2022\xA0\xA0')
            }),
            s = (0, x.KS)(n, t),
            a = (0, l.jsx)(j.Ft, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 40
            });
        return (0, l.jsx)(R, {
            inviteIcon: a,
            channelIcon:
                null == s
                    ? null
                    : (0, l.jsx)(s, {
                          className: Z.inviteTargetIcon,
                          size: 'xs'
                      }),
            heading: n.name,
            subheading: r
        });
    },
    D = (e) => {
        let t,
            { guild: n } = e,
            { guildProfile: r, fetchGuildProfile: s } = (0, N.u)(n.id);
        (i.useEffect(() => {
            s();
        }, [s]),
            (t =
                null === r
                    ? null
                    : (0, l.jsxs)('div', {
                          className: Z.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: Z.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: Z.dot }),
                                      (0, l.jsx)(g.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: P.intl.format(P.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: Z.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: Z.dot }),
                                      (0, l.jsx)(g.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: P.intl.format(P.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      })));
        let a = (0, l.jsx)(j.Ft, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 40
        });
        return (0, l.jsx)(R, {
            inviteIcon: a,
            heading: n.name,
            subheading: t
        });
    },
    k = (e) => {
        let { applicationId: t } = e,
            [n] = (0, v.Z)([t]);
        if (null == n) return null;
        let i = (0, p.Z)(n.name),
            r = (0, l.jsx)(g.Text, {
                variant: 'text-xs/medium',
                color: 'header-muted',
                lineClamp: 1,
                children: (0, l.jsx)(l.Fragment, { children: n.tags.join('\xA0\xA0\u2022\xA0\xA0') })
            }),
            s = (0, l.jsx)(f.Z, {
                game: n,
                size: f.Z.Sizes.MEDIUM,
                className: Z.inviteIcon
            });
        return (0, l.jsx)(R, {
            inviteIcon: s,
            heading: i,
            subheading: r
        });
    };
function L(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(k, { applicationId: i })
        : null != n
          ? (0, l.jsx)(M, {
                guild: t,
                channel: n
            })
          : (0, l.jsx)(D, { guild: t });
}
function U(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: s()(t, Z.advancedOptions),
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
            A(w({ className: Z.advancedOption }, n), {
                children: (0, l.jsx)('div', {
                    className: s()(i, Z.advancedOptionInner),
                    children: r
                })
            })
        )
    );
}
function B(e) {
    let { className: t, guild: r, channel: a, applicationId: p, getInviteKey: v, sendInvite: x, canUseVanityURL: f, disabled: N, hasSelection: j, options: S, setOptions: R, isApplicationBypassAllowed: M, isGuestInviteAllowed: D, isTemporaryInviteAllowed: k, setError: B, analyticsLocation: F } = e,
        [G, z] = i.useState(!1),
        [H, q] = i.useState(!1),
        W = i.useRef(null),
        [Y] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]),
        X = (0, I.Dt)(),
        K = (0, I.Dt)(),
        J = (0, I.Dt)(),
        Q = i.useMemo(() => (f && null != r.vanityURLCode ? (0, O.Z)(r.vanityURLCode, !1) : null), [r, f]),
        $ = i.useCallback(async () => {
            var e, t;
            if (N) return;
            null !== W.current && clearTimeout(W.current);
            let n = await v();
            o()(null != n, 'Invite key could not be determined.');
            let l = (0, O.Z)(n);
            return (
                (0, b.JG)(
                    l,
                    () => {
                        (z(!0),
                            (W.current = setTimeout(() => {
                                (z(!1), (W.current = null));
                            }, 1000)));
                    },
                    (e) => {
                        B(e);
                    }
                ),
                E.default.track(C.rMx.COPY_INSTANT_INVITE, {
                    server: r.id,
                    channel: null != (e = null == a ? void 0 : a.id) ? e : null,
                    channel_type: null != (t = null == a ? void 0 : a.type) ? t : null,
                    location: F,
                    code: n,
                    application_id: p
                }),
                () => {
                    null !== W.current && clearTimeout(W.current);
                }
            );
        }, [N, v, r, a, F, p, B]),
        ee = i.useCallback(
            (e) => {
                R({ max_age: e });
            },
            [R]
        ),
        et = i.useCallback(
            (e) => {
                R({ max_uses: e });
            },
            [R]
        ),
        en = i.useCallback(
            (e) => {
                S.flags === e ? R({ flags: void 0 }) : R({ flags: e });
            },
            [S, R]
        ),
        el = i.useCallback(
            (e) => {
                R({ temporary: e });
            },
            [R]
        ),
        ei = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.currentTarget) ? void 0 : t.getBoundingClientRect(),
                    { left: r = 0, width: s = 0 } = null != i ? i : {};
                ((e.pageX = r + s + 12),
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('84212').then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                A(w({}, t), {
                                    initialOptions: S,
                                    onChangeMaxAge: ee,
                                    onChangeMaxUses: et
                                })
                            );
                    }));
            },
            [S, ee, et]
        ),
        er = (function (e) {
            let t = y.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = y.p.find((t) => {
                    let { value: n } = t;
                    return n === e.max_uses;
                });
            return null == t || null == n
                ? null
                : t.value === T.ZP.INVITE_OPTIONS_FOREVER.value && n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? P.intl.string(P.t['5u4A6e'])
                  : t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? P.intl.formatToPlainString(P.t['Z5Vt5+'], {
                          maxAge: t.label,
                          maxUses: n.label
                      })
                    : n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === T.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(S);
    return (0, l.jsxs)('div', {
        className: s()(t, Z.footer),
        children: [
            (0, l.jsxs)('div', {
                className: Z.guildRow,
                children: [
                    (0, l.jsx)(L, {
                        guild: r,
                        channel: a,
                        applicationId: p
                    }),
                    (0, l.jsx)(g.ua7, {
                        position: 'top',
                        text: P.intl.string(P.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                g.P3F,
                                A(w({ className: s()(Z.settingsButton, { [Z.settingsOpen]: H }) }, e), {
                                    onClick: () => {
                                        var t;
                                        (null == e || null == (t = e.onClick) || t.call(e), q((e) => !e));
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
            H &&
                (0, l.jsxs)(U, {
                    children: [
                        (0, l.jsxs)(V, {
                            onClick: ei,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: Z.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(g.X6q, {
                                            variant: 'heading-md/medium',
                                            children: P.intl.string(P.t.YlT5MT)
                                        }),
                                        (0, l.jsx)(g.ua7, {
                                            position: 'top',
                                            text: P.intl.string(P.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    g.idN,
                                                    A(w({}, e), {
                                                        size: 'xs',
                                                        color: c.Z.colors.INTERACTIVE_NORMAL
                                                    })
                                                )
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: Z.advancedOptionContent,
                                    children: [
                                        null != er &&
                                            (0, l.jsx)(g.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'header-muted',
                                                children: er
                                            }),
                                        (0, l.jsx)(g.Fbu, {
                                            size: 'xs',
                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        M &&
                            (0, l.jsxs)(V, {
                                htmlFor: X,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(g.X6q, {
                                                variant: 'heading-md/medium',
                                                children: P.intl.string(P.t.EPIOl5)
                                            }),
                                            (0, l.jsx)(g.ua7, {
                                                position: 'top',
                                                text: P.intl.string(P.t['jvd/LC']),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        g.idN,
                                                        A(w({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(g.rsf, {
                                        id: X,
                                        checked: S.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => en(u.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        D &&
                            (0, l.jsxs)(V, {
                                htmlFor: K,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(g.X6q, {
                                                variant: 'heading-md/medium',
                                                children: P.intl.string(P.t.NKqlpq)
                                            }),
                                            (0, l.jsx)(g.ua7, {
                                                position: 'top',
                                                text: P.intl.string(P.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        g.idN,
                                                        A(w({}, e), {
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
                                        onChange: () => en(u.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        k &&
                            (0, l.jsxs)(V, {
                                htmlFor: J,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: Z.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(g.X6q, {
                                                variant: 'heading-md/medium',
                                                children: P.intl.string(P.t.UL177u)
                                            }),
                                            (0, l.jsx)(g.ua7, {
                                                position: 'top',
                                                text: P.intl.string(P.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        g.idN,
                                                        A(w({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(g.rsf, {
                                        id: J,
                                        checked: !!S.temporary,
                                        onChange: (e) => el(e)
                                    })
                                ]
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: Z.buttonRow,
                children: [
                    (0, l.jsx)(g.ua7, {
                        position: 'top',
                        text: Q,
                        shouldShow: null !== Q && !Y,
                        children: (e) =>
                            (0, l.jsx)(
                                h.zx,
                                A(
                                    w(
                                        {
                                            className: Z.button,
                                            innerClassName: Z.buttonInner,
                                            color: h.zx.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            (null == e || null == (t = e.onClick) || t.call(e), $());
                                        },
                                        disabled: N,
                                        children: G
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(g.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: P.intl.string(P.t['+5kSoa']) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(g.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: P.intl.string(P.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(h.zx, {
                        className: Z.button,
                        innerClassName: Z.buttonInner,
                        onClick: () => x(),
                        disabled: !j || N,
                        children: [
                            (0, l.jsx)('span', { children: P.intl.string(P.t.BcAABg) }),
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
