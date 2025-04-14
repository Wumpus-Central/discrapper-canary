n.d(t, { f: () => L }), n(388685), n(997841);
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
    v = n(835473),
    x = n(471445),
    p = n(114487),
    I = n(313201),
    N = n(925329),
    f = n(65361),
    j = n(246946),
    b = n(934415),
    S = n(572004),
    T = n(971130),
    E = n(366980),
    _ = n(76234),
    O = n(388032),
    y = n(942558);
function C(e) {
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
function P(e, t) {
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
let Z = (e) => {
        let { inviteIcon: t, channelIcon: n, heading: i, subheading: r } = e;
        return (0, l.jsxs)('div', {
            className: y.preview,
            children: [
                null == t
                    ? null
                    : (0, l.jsx)('div', {
                          className: y.inviteIcon,
                          children: t
                      }),
                (0, l.jsxs)('div', {
                    className: y.inviteTarget,
                    children: [
                        (0, l.jsxs)('div', {
                            className: y.inviteTargetHeading,
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
    w = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, b.a5)({ type: n.type }),
            r = (0, l.jsxs)(h.Text, {
                className: y.inviteTargetContent,
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
            s = (0, x.KS)(n, t),
            a = (0, l.jsx)(p.b, {
                guildId: t.id,
                guildName: t.name,
                guildIcon: t.icon,
                iconSize: 32
            });
        return (0, l.jsx)(Z, {
            inviteIcon: a,
            channelIcon:
                null == s
                    ? null
                    : (0, l.jsx)(s, {
                          className: y.inviteTargetIcon,
                          size: 'xs'
                      }),
            heading: n.name,
            subheading: r
        });
    },
    A = (e) => {
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
                          className: y.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: y.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: y.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: O.NW.format(O.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: y.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: y.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: O.NW.format(O.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
        let a = (0, l.jsx)(p.b, {
            guildId: n.id,
            guildName: n.name,
            guildIcon: n.icon,
            iconSize: 32
        });
        return (0, l.jsx)(Z, {
            inviteIcon: a,
            heading: n.name,
            subheading: t
        });
    },
    R = (e) => {
        let { applicationId: t } = e,
            [n] = (0, v.Z)([t]);
        if (null == n) return null;
        let r = (0, m.Z)(n.name),
            s = (0, l.jsx)(h.Text, {
                className: y.inviteTargetContent,
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
                className: y.inviteIcon
            });
        return (0, l.jsx)(Z, {
            inviteIcon: a,
            heading: r,
            subheading: s
        });
    };
function k(e) {
    let { guild: t, channel: n, applicationId: i } = e;
    return null != i
        ? (0, l.jsx)(R, { applicationId: i })
        : null != n
          ? (0, l.jsx)(w, {
                guild: t,
                channel: n
            })
          : (0, l.jsx)(A, { guild: t });
}
function M(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: s()(t, y.advancedOptions),
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
            P(C({ className: y.advancedOption }, n), {
                children: (0, l.jsx)('div', {
                    className: s()(i, y.advancedOptionInner),
                    children: r
                })
            })
        )
    );
}
function L(e) {
    let { className: t, guild: r, channel: a, applicationId: m, getInviteKey: v, sendInvite: x, canUseVanityURL: p, disabled: N, hasSelection: f, options: b, setOptions: Z, isApplicationBypassAllowed: w, isGuestInviteAllowed: A, isTemporaryInviteAllowed: R, setError: L } = e,
        [V, D] = i.useState(!1),
        [U, B] = i.useState(!1),
        F = i.useRef(null),
        [G] = (0, d.Wu)([j.Z], () => [j.Z.hideInstantInvites]),
        z = (0, I.Dt)(),
        H = (0, I.Dt)(),
        q = (0, I.Dt)(),
        Y = i.useMemo(() => (p && null != r.vanityURLCode ? (0, E.Z)(r.vanityURLCode, !1) : null), [r, p]),
        K = i.useCallback(async () => {
            if (N) return;
            null !== F.current && clearTimeout(F.current);
            let e = !1;
            try {
                let t = await v();
                o()(null != t, 'Invite key could not be determined.');
                let n = (0, E.Z)(t);
                (0, S.JG)(n), (e = !0);
            } catch (e) {
                L(e);
            }
            return (
                e &&
                    (D(!0),
                    (F.current = setTimeout(() => {
                        D(!1);
                    }, 1000))),
                () => {
                    null !== F.current && clearTimeout(F.current);
                }
            );
        }, [D, L, v, N]),
        X = i.useCallback(
            (e) => {
                Z({ max_age: e });
            },
            [Z]
        ),
        J = i.useCallback(
            (e) => {
                Z({ max_uses: e });
            },
            [Z]
        ),
        Q = i.useCallback(
            (e) => {
                b.flags === e ? Z({ flags: void 0 }) : Z({ flags: e });
            },
            [b, Z]
        ),
        $ = i.useCallback(
            (e) => {
                Z({ temporary: e });
            },
            [Z]
        ),
        ee = i.useCallback(
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
                                P(C({}, t), {
                                    initialOptions: b,
                                    onChangeMaxAge: X,
                                    onChangeMaxUses: J
                                })
                            );
                    });
            },
            [b, X, J]
        ),
        et = (function (e) {
            let t = _.H.find((t) => {
                    let { value: n } = t;
                    return n === e.max_age;
                }),
                n = _.p.find((t) => {
                    let { value: n } = t;
                    return n === e.max_uses;
                });
            return null == t || null == n
                ? null
                : t.value === T.ZP.INVITE_OPTIONS_FOREVER.value && n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value
                  ? O.NW.string(O.t['5u4A6e'])
                  : t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value
                    ? O.NW.formatToPlainString(O.t['Z5Vt5+'], {
                          maxAge: t.label,
                          maxUses: n.label
                      })
                    : n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value
                      ? t.label
                      : n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === T.ZP.INVITE_OPTIONS_FOREVER.value
                        ? n.label
                        : null;
        })(b);
    return (0, l.jsxs)('div', {
        className: s()(t, y.footer),
        children: [
            (0, l.jsxs)('div', {
                className: y.guildRow,
                children: [
                    (0, l.jsx)(k, {
                        guild: r,
                        channel: a,
                        applicationId: m
                    }),
                    (0, l.jsx)(h.ua7, {
                        position: 'top',
                        text: O.NW.string(O.t['4QuV7O']),
                        children: (e) =>
                            (0, l.jsx)(
                                h.P3F,
                                P(C({ className: s()(y.settingsButton, { [y.settingsOpen]: U }) }, e), {
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
            U &&
                (0, l.jsxs)(M, {
                    children: [
                        (0, l.jsxs)(W, {
                            onClick: ee,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: y.advancedOptionContent,
                                    children: [
                                        (0, l.jsx)(h.X6q, {
                                            variant: 'heading-md/medium',
                                            children: O.NW.string(O.t.YlT5MT)
                                        }),
                                        (0, l.jsx)(h.ua7, {
                                            position: 'top',
                                            text: O.NW.string(O.t.efLzgY),
                                            children: (e) =>
                                                (0, l.jsx)(
                                                    h.idN,
                                                    P(C({}, e), {
                                                        size: 'xs',
                                                        color: c.Z.colors.INTERACTIVE_NORMAL
                                                    })
                                                )
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: y.advancedOptionContent,
                                    children: [
                                        null != et &&
                                            (0, l.jsx)(h.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'header-muted',
                                                children: et
                                            }),
                                        (0, l.jsx)(h.Fbu, {
                                            size: 'xs',
                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                        })
                                    ]
                                })
                            ]
                        }),
                        w &&
                            (0, l.jsxs)(W, {
                                htmlFor: z,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: y.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: O.NW.string(O.t.EPIOl5)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: O.NW.string(O.t['jvd/LC']),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        P(C({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: z,
                                        checked: b.flags === u.$.IS_APPLICATION_BYPASS,
                                        onChange: () => Q(u.$.IS_APPLICATION_BYPASS)
                                    })
                                ]
                            }),
                        A &&
                            (0, l.jsxs)(W, {
                                htmlFor: H,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: y.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: O.NW.string(O.t.NKqlpq)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: O.NW.string(O.t.pBOevb),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        P(C({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: H,
                                        checked: b.flags === u.$.IS_GUEST_INVITE,
                                        onChange: () => Q(u.$.IS_GUEST_INVITE)
                                    })
                                ]
                            }),
                        R &&
                            (0, l.jsxs)(W, {
                                htmlFor: q,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: y.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: O.NW.string(O.t.UL177u)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: O.NW.string(O.t.cl1HNT),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        P(C({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(h.rsf, {
                                        id: q,
                                        checked: !!b.temporary,
                                        onChange: (e) => $(e)
                                    })
                                ]
                            })
                    ]
                }),
            (0, l.jsxs)('div', {
                className: y.buttonRow,
                children: [
                    (0, l.jsx)(h.ua7, {
                        position: 'top',
                        text: Y,
                        shouldShow: null !== Y && !G,
                        children: (e) =>
                            (0, l.jsx)(
                                h.zxk,
                                P(
                                    C(
                                        {
                                            className: y.button,
                                            innerClassName: y.buttonInner,
                                            color: h.zxk.Colors.PRIMARY
                                        },
                                        e
                                    ),
                                    {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), K();
                                        },
                                        disabled: N,
                                        children: V
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.dz2, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: O.NW.string(O.t['+5kSoa']) })
                                                  ]
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(h.xPt, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      }),
                                                      (0, l.jsx)('span', { children: O.NW.string(O.t.WqhZsr) })
                                                  ]
                                              })
                                    }
                                )
                            )
                    }),
                    (0, l.jsxs)(h.zxk, {
                        className: y.button,
                        innerClassName: y.buttonInner,
                        onClick: () => x(),
                        disabled: !f || N,
                        children: [
                            (0, l.jsx)('span', { children: O.NW.string(O.t.BcAABg) }),
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
