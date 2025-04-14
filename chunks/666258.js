n.d(t, { f: () => V }), n(388685), n(997841);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    u = n(533800),
    d = n(442837),
    c = n(692547),
    h = n(481060),
    g = n(239091),
    m = n(657305),
    p = n(835473),
    v = n(471445),
    x = n(114487),
    I = n(313201),
    N = n(925329),
    f = n(65361),
    j = n(246946),
    _ = n(626135),
    E = n(934415),
    S = n(572004),
    T = n(971130),
    b = n(366980),
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
let w = (e) => {
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: r } = e;
        return (0, l.jsxs)('div', {
            className: P.preview,
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
                                (0, l.jsx)(h.X6q, {
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
            i = (0, E.a5)({ type: n.type }),
            r = (0, l.jsxs)(h.Text, {
                className: P.inviteTargetContent,
                variant: 'text-xs/medium',
                color: 'header-muted',
                children: [
                    (0, l.jsx)('span', { children: i }),
                    (0, l.jsx)('span', {
                        'aria-hidden': !0,
                        children: '\u2022'
                    }),
                    (0, l.jsx)('span', { children: t.name })
                ]
            }),
            s = (0, v.KS)(n, t),
            a = (0, l.jsx)(x.b, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 32
            });
        return (0, l.jsx)(w, {
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
    R = (e) => {
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
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: C.NW.format(C.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: P.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: P.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: C.NW.format(C.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
        let a = (0, l.jsx)(x.b, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 32
        });
        return (0, l.jsx)(w, {
            inviteIcon: a,
            heading: n.name,
            subheading: t
        });
    },
    M = (e) => {
        let { applicationId: t } = e,
            [n] = (0, p.Z)([t]);
        if (null == n) return null;
        let r = (0, m.Z)(n.name),
            s = (0, l.jsx)(h.Text, {
                className: P.inviteTargetContent,
                variant: 'text-xs/medium',
                color: 'header-muted',
                children: (0, l.jsx)(l.Fragment, {
                    children: n.tags.map((e, t) =>
                        (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)('span', { children: e }),
                                    t + 1 === n.tags.length
                                        ? null
                                        : (0, l.jsx)('span', {
                                              'aria-hidden': !0,
                                              children: '\u2022'
                                          })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            a = (0, l.jsx)(N.Z, {
                game: n,
                className: P.inviteIcon
            });
        return (0, l.jsx)(w, {
            inviteIcon: a,
            heading: r,
            subheading: s
        });
    };
function D(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(M, { applicationId: i })
        : null != n
          ? (0, l.jsx)(k, {
                guild: t,
                channel: n
            })
          : (0, l.jsx)(R, { guild: t });
}
function L(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: s()(t, P.advancedOptions),
        children: n
    });
}
function W(e) {
    let t,
        n,
        { className: i, children: r, htmlFor: a, onClick: o } = e;
    return (
        null != a ? ((t = 'label'), (n = { htmlFor: a })) : null != o ? ((t = h.P3F), (n = { onClick: o })) : ((t = 'div'), (n = {})),
        (0, l.jsx)(
            t,
            A(Z({ className: P.advancedOption }, n), {
                children: (0, l.jsx)('div', {
                    className: s()(i, P.advancedOptionInner),
                    children: r
                })
            })
        )
    );
}
function V(e) {
    let { className: t, guild: r, channel: a, applicationId: m, getInviteKey: p, sendInvite: v, canUseVanityURL: x, disabled: N, hasSelection: f, options: E, setOptions: w, isApplicationBypassAllowed: k, isGuestInviteAllowed: R, isTemporaryInviteAllowed: M, setError: V, analyticsLocation: U } = e,
        [B, F] = i.useState(!1),
        [G, z] = i.useState(!1),
        H = i.useRef(null),
        [q] = (0, d.Wu)([j.Z], () => [j.Z.hideInstantInvites]),
        Y = (0, I.Dt)(),
        K = (0, I.Dt)(),
        X = (0, I.Dt)(),
        J = i.useMemo(() => (x && null != r.vanityURLCode ? (0, b.Z)(r.vanityURLCode, !1) : null), [r, x]),
        Q = i.useCallback(async () => {
            if (N) return;
            null !== H.current && clearTimeout(H.current);
            let e = !1;
            try {
                var t, n;
                let l = await p();
                o()(null != l, 'Invite key could not be determined.');
                let i = (0, b.Z)(l);
                (0, S.JG)(i),
                    _.default.track(y.rMx.COPY_INSTANT_INVITE, {
                        server: r.id,
                        channel: null != (t = null == a ? void 0 : a.id) ? t : null,
                        channel_type: null != (n = null == a ? void 0 : a.type) ? n : null,
                        location: U,
                        code: l,
                        application_id: m
                    }),
                    (e = !0);
            } catch (e) {
                V(e);
            }
            return (
                e &&
                    (F(!0),
                    (H.current = setTimeout(() => {
                        F(!1);
                    }, 1000))),
                () => {
                    null !== H.current && clearTimeout(H.current);
                }
            );
        }, [N, p, r, a, U, m, V]),
        $ = i.useCallback(
            (e) => {
                w({ max_age: e });
            },
            [w]
        ),
        ee = i.useCallback(
            (e) => {
                w({ max_uses: e });
            },
            [w]
        ),
        et = i.useCallback(
            (e) => {
                E.flags === e ? w({ flags: void 0 }) : w({ flags: e });
            },
            [E, w]
        ),
        en = i.useCallback(
            (e) => {
                w({ temporary: e });
            },
            [w]
        ),
        el = i.useCallback(
            (e) => {
                var t;
                let i = null == (t = e.currentTarget) ? void 0 : t.getBoundingClientRect(),
                    { left: r = 0, width: s = 0 } = null != i ? i : {};
                (e.pageX = r + s + 12),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e('84212').then(n.bind(n, 593851));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                A(Z({}, t), {
                                    initialOptions: E,
                                    onChangeMaxAge: $,
                                    onChangeMaxUses: ee
                                })
                            );
                    });
            },
            [E, $, ee]
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
                : t.value === T.ZP.INVITE_OPTIONS_FOREVER.value && n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? C.NW.string(C.t['5u4A6e'])
                  : t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? C.NW.formatToPlainString(C.t['Z5Vt5+'], {
                          maxAge: t.label,
                          maxUses: n.label
                      })
                    : n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === T.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(E);
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
                    (0, l.jsx)(h.ua7, {
                        position: 'top',
                        text: C.NW.string(C.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                h.P3F,
                                A(Z({ className: s()(P.settingsButton, { [P.settingsOpen]: G }) }, e), {
                                    onClick: () => {
                                        var t;
                                        null == e || null == (t = e.onClick) || t.call(e), z((e) => !e);
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
            G &&
                (0, l.jsxs)(L, {
                    children: [
                        (0, l.jsxs)(W, {
                            onClick: el,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: P.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(h.X6q, {
                                            variant: 'heading-md/medium',
                                            children: C.NW.string(C.t.YlT5MT)
                                        }),
                                        (0, l.jsx)(h.ua7, {
                                            position: 'top',
                                            text: C.NW.string(C.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    h.idN,
                                                    A(Z({}, e), {
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
                                            (0, l.jsx)(h.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'header-muted',
                                                children: ei
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
                            (0, l.jsxs)(W, {
                                htmlFor: Y,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: C.NW.string(C.t.EPIOl5)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: C.NW.string(C.t['jvd/LC']),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        A(Z({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: Y,
                                        checked: E.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => et(u.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        R &&
                            (0, l.jsxs)(W, {
                                htmlFor: K,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: C.NW.string(C.t.NKqlpq)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: C.NW.string(C.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        A(Z({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: K,
                                        checked: E.flags === u.$.IS_GUEST_INVITE,
                                        onChange: () => et(u.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        M &&
                            (0, l.jsxs)(W, {
                                htmlFor: X,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: C.NW.string(C.t.UL177u)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: C.NW.string(C.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        A(Z({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: X,
                                        checked: !!E.temporary,
                                        onChange: (e) => en(e)
                                    })
                                ]
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: P.buttonRow,
                children: [
                    (0, l.jsx)(h.ua7, {
                        position: 'top',
                        text: J,
                        shouldShow: null !== J && !q,
                        children: (e) =>
                            (0, l.jsx)(
                                h.zxk,
                                A(
                                    Z(
                                        {
                                            className: P.button,
                                            innerClassName: P.buttonInner,
                                            color: h.zxk.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), Q();
                                        },
                                        disabled: N,
                                        children: B
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: C.NW.string(C.t['+5kSoa']) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: C.NW.string(C.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(h.zxk, {
                        className: P.button,
                        innerClassName: P.buttonInner,
                        onClick: () => v(),
                        disabled: !f || N,
                        children: [
                            (0, l.jsx)('span', { children: C.NW.string(C.t.BcAABg) }),
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
