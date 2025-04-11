n.d(t, { f: () => Z }), n(388685), n(997841);
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
    m = n(471445),
    v = n(114487),
    x = n(313201),
    p = n(65361),
    I = n(246946),
    N = n(934415),
    f = n(572004),
    j = n(971130),
    S = n(366980),
    E = n(76234),
    b = n(388032),
    T = n(942558);
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
function O(e, t) {
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
        u = null;
    if (null !== t) {
        o = null == t ? void 0 : t.name;
        let e = (0, N.a5)({ type: t.type });
        u = (0, l.jsxs)(h.Text, {
            className: T.inviteTargetContent,
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
            (u =
                null === r
                    ? null
                    : (0, l.jsxs)('div', {
                          className: T.guildPresence,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: T.onlineCount,
                                  children: [
                                      (0, l.jsx)('div', { className: T.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: b.NW.format(b.t['LC+S+v'], { membersOnline: r.onlineCount })
                                      })
                                  ]
                              }),
                              (0, l.jsxs)('div', {
                                  className: T.memberCount,
                                  children: [
                                      (0, l.jsx)('div', { className: T.dot }),
                                      (0, l.jsx)(h.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-muted',
                                          children: b.NW.format(b.t.zRl6XV, { count: r.memberCount })
                                      })
                                  ]
                              })
                          ]
                      }));
    return (0, l.jsxs)('div', {
        className: T.inviteTarget,
        children: [
            (0, l.jsxs)('div', {
                className: T.inviteTargetHeading,
                children: [
                    null !== a &&
                        (0, l.jsx)(a, {
                            className: T.inviteTargetIcon,
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
            u
        ]
    });
}
function C(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: s()(t, T.advancedOptions),
        children: n
    });
}
function P(e) {
    let t,
        n,
        { className: i, children: r, htmlFor: a, onClick: o } = e;
    return (
        null != a ? ((t = 'label'), (n = { htmlFor: a })) : null != o ? ((t = h.P3F), (n = { onClick: o })) : ((t = 'div'), (n = {})),
        (0, l.jsx)(
            t,
            O(_({ className: T.advancedOption }, n), {
                children: (0, l.jsx)('div', {
                    className: s()(i, T.advancedOptionInner),
                    children: r
                })
            })
        )
    );
}
function Z(e) {
    let { className: t, guild: r, channel: a, getInviteKey: m, sendInvite: p, canUseVanityURL: N, disabled: Z, hasSelection: w, options: A, setOptions: R, isApplicationBypassAllowed: k, isGuestInviteAllowed: M, isTemporaryInviteAllowed: W, setError: L } = e,
        [V] = (0, d.Wu)([I.Z], () => [I.Z.hideInstantInvites]),
        [D, U] = i.useState(!1),
        [B, F] = i.useState(!1),
        G = i.useRef(null),
        z = (0, x.Dt)(),
        H = (0, x.Dt)(),
        q = (0, x.Dt)(),
        Y = i.useMemo(() => (N && null != r.vanityURLCode ? (0, S.Z)(r.vanityURLCode, !1) : null), [r, N]),
        K = i.useCallback(async () => {
            if (Z) return;
            null !== G.current && clearTimeout(G.current);
            let e = !1;
            try {
                let t = await m();
                o()(null != t, 'Invite key could not be determined.');
                let n = (0, S.Z)(t);
                (0, f.JG)(n), (e = !0);
            } catch (e) {
                L(e);
            }
            return (
                e &&
                    (U(!0),
                    (G.current = setTimeout(() => {
                        U(!1);
                    }, 1000))),
                () => {
                    null !== G.current && clearTimeout(G.current);
                }
            );
        }, [U, L, m, Z]),
        X = i.useCallback(
            (e) => {
                R({ max_age: e });
            },
            [R]
        ),
        J = i.useCallback(
            (e) => {
                R({ max_uses: e });
            },
            [R]
        ),
        Q = i.useCallback(
            (e) => {
                A.flags === e ? R({ flags: void 0 }) : R({ flags: e });
            },
            [A, R]
        ),
        $ = i.useCallback(
            (e) => {
                R({ temporary: e });
            },
            [R]
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
                                O(_({}, t), {
                                    initialOptions: A,
                                    onChangeMaxAge: X,
                                    onChangeMaxUses: J
                                })
                            );
                    });
            },
            [A, X, J]
        ),
        et = E.H.find((e) => {
            let { value: t } = e;
            return t === A.max_age;
        }),
        en = E.p.find((e) => {
            let { value: t } = e;
            return t === A.max_uses;
        }),
        el = null;
    return (
        null == et || null == en
            ? (el = null)
            : et.value === j.ZP.INVITE_OPTIONS_FOREVER.value && en.value === j.ZP.INVITE_OPTIONS_UNLIMITED.value
              ? (el = b.NW.string(b.t['5u4A6e']))
              : et.value !== j.ZP.INVITE_OPTIONS_FOREVER.value && en.value !== j.ZP.INVITE_OPTIONS_UNLIMITED.value
                ? (el = b.NW.formatToPlainString(b.t['Z5Vt5+'], {
                      maxAge: et.label,
                      maxUses: en.label
                  }))
                : en.value === j.ZP.INVITE_OPTIONS_UNLIMITED.value && et.value !== j.ZP.INVITE_OPTIONS_FOREVER.value
                  ? (el = et.label)
                  : en.value !== j.ZP.INVITE_OPTIONS_UNLIMITED.value && et.value === j.ZP.INVITE_OPTIONS_FOREVER.value && (el = en.label),
        (0, l.jsxs)('div', {
            className: s()(t, T.footer),
            children: [
                (0, l.jsxs)('div', {
                    className: T.guildRow,
                    children: [
                        (0, l.jsx)('div', {
                            className: T.guildAsset,
                            children: (0, l.jsx)(v.b, {
                                guildId: r.id,
                                guildName: r.name,
                                guildIcon: r.icon,
                                iconSize: 32
                            })
                        }),
                        (0, l.jsx)(y, {
                            guild: r,
                            channel: a,
                            isStreamerMode: V
                        }),
                        (0, l.jsx)(h.ua7, {
                            position: 'top',
                            text: b.NW.string(b.t['4QuV7O']),
                            children: (e) =>
                                (0, l.jsx)(
                                    h.P3F,
                                    O(_({ className: s()(T.settingsButton, { [T.settingsOpen]: B }) }, e), {
                                        onClick: () => {
                                            var t;
                                            null == e || null == (t = e.onClick) || t.call(e), F((e) => !e);
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
                B &&
                    (0, l.jsxs)(C, {
                        children: [
                            (0, l.jsxs)(P, {
                                onClick: ee,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: T.advancedOptionContent,
                                        children: [
                                            (0, l.jsx)(h.X6q, {
                                                variant: 'heading-md/medium',
                                                children: b.NW.string(b.t.YlT5MT)
                                            }),
                                            (0, l.jsx)(h.ua7, {
                                                position: 'top',
                                                text: b.NW.string(b.t.efLzgY),
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        h.idN,
                                                        O(_({}, e), {
                                                            size: 'xs',
                                                            color: c.Z.colors.INTERACTIVE_NORMAL
                                                        })
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: T.advancedOptionContent,
                                        children: [
                                            null != el &&
                                                (0, l.jsx)(h.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-muted',
                                                    children: el
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
                                (0, l.jsxs)(P, {
                                    htmlFor: z,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: T.advancedOptionContent,
                                            children: [
                                                (0, l.jsx)(h.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: b.NW.string(b.t.EPIOl5)
                                                }),
                                                (0, l.jsx)(h.ua7, {
                                                    position: 'top',
                                                    text: b.NW.string(b.t['jvd/LC']),
                                                    children: (e) =>
                                                        (0, l.jsx)(
                                                            h.idN,
                                                            O(_({}, e), {
                                                                size: 'xs',
                                                                color: c.Z.colors.INTERACTIVE_NORMAL
                                                            })
                                                        )
                                                })
                                            ]
                                        }),
                                        (0, l.jsx)(h.rsf, {
                                            id: z,
                                            checked: A.flags === u.$.IS_APPLICATION_BYPASS,
                                            onChange: () => Q(u.$.IS_APPLICATION_BYPASS)
                                        })
                                    ]
                                }),
                            M &&
                                (0, l.jsxs)(P, {
                                    htmlFor: H,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: T.advancedOptionContent,
                                            children: [
                                                (0, l.jsx)(h.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: b.NW.string(b.t.NKqlpq)
                                                }),
                                                (0, l.jsx)(h.ua7, {
                                                    position: 'top',
                                                    text: b.NW.string(b.t.pBOevb),
                                                    children: (e) =>
                                                        (0, l.jsx)(
                                                            h.idN,
                                                            O(_({}, e), {
                                                                size: 'xs',
                                                                color: c.Z.colors.INTERACTIVE_NORMAL
                                                            })
                                                        )
                                                })
                                            ]
                                        }),
                                        (0, l.jsx)(h.rsf, {
                                            id: H,
                                            checked: A.flags === u.$.IS_GUEST_INVITE,
                                            onChange: () => Q(u.$.IS_GUEST_INVITE)
                                        })
                                    ]
                                }),
                            W &&
                                (0, l.jsxs)(P, {
                                    htmlFor: q,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: T.advancedOptionContent,
                                            children: [
                                                (0, l.jsx)(h.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: b.NW.string(b.t.UL177u)
                                                }),
                                                (0, l.jsx)(h.ua7, {
                                                    position: 'top',
                                                    text: b.NW.string(b.t.cl1HNT),
                                                    children: (e) =>
                                                        (0, l.jsx)(
                                                            h.idN,
                                                            O(_({}, e), {
                                                                size: 'xs',
                                                                color: c.Z.colors.INTERACTIVE_NORMAL
                                                            })
                                                        )
                                                })
                                            ]
                                        }),
                                        (0, l.jsx)(h.rsf, {
                                            id: q,
                                            checked: !!A.temporary,
                                            onChange: (e) => $(e)
                                        })
                                    ]
                                })
                        ]
                    }),
                (0, l.jsxs)('div', {
                    className: T.buttonRow,
                    children: [
                        (0, l.jsx)(h.ua7, {
                            position: 'top',
                            text: Y,
                            shouldShow: null !== Y && !V,
                            children: (e) =>
                                (0, l.jsx)(
                                    h.zxk,
                                    O(
                                        _(
                                            {
                                                className: T.button,
                                                innerClassName: T.buttonInner,
                                                color: h.zxk.Colors.PRIMARY
                                            },
                                            e
                                        ),
                                        {
                                            onClick: () => {
                                                var t;
                                                null == e || null == (t = e.onClick) || t.call(e), K();
                                            },
                                            disabled: Z,
                                            children: D
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          (0, l.jsx)(h.dz2, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, l.jsx)('span', { children: b.NW.string(b.t['+5kSoa']) })
                                                      ]
                                                  })
                                                : (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          (0, l.jsx)(h.xPt, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, l.jsx)('span', { children: b.NW.string(b.t.WqhZsr) })
                                                      ]
                                                  })
                                        }
                                    )
                                )
                        }),
                        (0, l.jsxs)(h.zxk, {
                            className: T.button,
                            innerClassName: T.buttonInner,
                            onClick: () => p(),
                            disabled: !w || Z,
                            children: [
                                (0, l.jsx)('span', { children: b.NW.string(b.t.BcAABg) }),
                                (0, l.jsx)(h.Uuj, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
