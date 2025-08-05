(n.d(t, { ZP: () => G }), n(781311));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(700582),
    E = n(835473),
    d = n(933557),
    _ = n(925329),
    A = n(884902),
    T = n(484459),
    I = n(592125),
    g = n(271383),
    m = n(246946),
    N = n(594174),
    O = n(785195),
    f = n(5192),
    R = n(893966),
    S = n(527379),
    C = n(327999),
    h = n(388032),
    p = n(615133);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
let L = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: h.intl.string(h.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    U(D({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: p.unknownInvite,
                        children: h.intl.string(h.t.yobFdn)
                    })
                )
        });
    }),
    v = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: h.intl.string(h.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    U(D({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: p.unknownInvite,
                        children: h.intl.string(h.t['4upToa'])
                    })
                )
        });
    }),
    b = {
        [C.gq.UNSPECIFIED]: {
            type: C.gq.UNSPECIFIED,
            getJoinTypeLabel: () => h.intl.string(h.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [C.gq.BOT]: {
            type: C.gq.BOT,
            getJoinTypeLabel: () => h.intl.string(h.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: p.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [C.gq.INTEGRATION]: {
            type: C.gq.INTEGRATION,
            getJoinTypeLabel: () => h.intl.string(h.t.gmCUFx),
            icon: (0, r.jsx)(o.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [C.gq.DISCOVERY]: {
            type: C.gq.DISCOVERY,
            getJoinTypeLabel: () => h.intl.string(h.t['Ql/e9f']),
            icon: (0, r.jsx)(o.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [C.gq.HUB]: {
            type: C.gq.HUB,
            getJoinTypeLabel: () => h.intl.string(h.t.Op8B3N),
            icon: (0, r.jsx)(o.aVH, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [C.gq.INVITE]: {
            type: C.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [C.gq.VANITY_URL]: {
            type: C.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [C.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: C.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? h.intl.formatToPlainString(h.t['VHLp+v'], { code: e }) : h.intl.string(h.t.vdu7oa)),
            icon: (0, r.jsx)(O.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [C.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: C.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => h.intl.string(h.t['9/ZreX']),
            icon: (0, r.jsx)(o.iWm, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        }
    };
function M(e) {
    var t, n;
    let { guildId: i, inviterUser: u, joinSourceType: E, className: d, onClickInviter: _ } = e,
        T = (0, a.e7)([g.ZP], () => (null == u ? null : g.ZP.getMember(i, u.id)), [u, i]),
        I = (0, A.X7)(null == T ? void 0 : T.guildId, null == T ? void 0 : T.userId, null != (t = null == T ? void 0 : T.colorStrings) ? t : null),
        m = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != u && (null == _ || _(u)));
            },
            [u, _]
        );
    return null == u
        ? null
        : (0, r.jsxs)('div', {
              className: s()(p.inviterTooltipContainer, d),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: E !== C.gq.BOT ? h.intl.string(h.t.azhY2t) : h.intl.string(h.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: s()(p.inviterUserContainer, null != _ && p.clickable),
                      onClick: m,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: u,
                              size: o.EFr.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.PUh, {
                                  name: f.ZP.getName(i, null, u),
                                  colorString: null != (n = null == T ? void 0 : T.colorString) ? n : null,
                                  colorStrings: I
                              })
                          })
                      ]
                  })
              ]
          });
}
function x(e) {
    let { channel: t, className: n } = e,
        l = (0, d.ZP)(t, !0);
    return (0, r.jsx)('div', {
        className: s()(p.inviterUserContainer, n),
        children: (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            children: h.intl.format(h.t['2VQq2t'], { channelName: null != l ? l : h.intl.string(h.t.zLZPmp) })
        })
    });
}
function P(e) {
    let { children: t, hasTooltip: n, guildId: i, inviterUser: s, joinSourceType: u, joinSourceChannelId: c } = e,
        E = (0, a.e7)([I.Z], () => I.Z.getChannel(c)),
        _ = (0, d.ZP)(E, !0),
        A = !!n && (u === C.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != s),
        T = l.useMemo(
            () =>
                u === C.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, r.jsx)(x, { channel: E })
                    : (0, r.jsx)(M, {
                          guildId: i,
                          inviterUser: s,
                          joinSourceType: u
                      }),
            [u, i, s, E]
        );
    if (!A) return (0, r.jsx)(r.Fragment, { children: t({}) });
    let g = u === C.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? h.intl.formatToPlainString(h.t['2VQq2t'], { channelName: null != _ ? _ : h.intl.string(h.t.zLZPmp) }) : u === C.gq.BOT ? h.intl.string(h.t['2ByN2t']) : h.intl.string(h.t.azhY2t);
    return (0, r.jsx)(o.ua7, {
        'aria-label': g,
        allowOverflow: !0,
        text: T,
        children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
    });
}
function j(e) {
    let { type: t } = e,
        n = (0, C.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: p.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function y(e) {
    var { sourceInviteCode: t, joinSourceType: n, joinSourceApplicationId: i, integrationType: u, joinSourceChannelId: c, showJoinMethodContextAsFooter: d, guildId: A, inviterUser: T, onClickInviter: g } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['sourceInviteCode', 'joinSourceType', 'joinSourceApplicationId', 'integrationType', 'joinSourceChannelId', 'showJoinMethodContextAsFooter', 'guildId', 'inviterUser', 'onClickInviter']);
    let N = null != n ? b[n] : null,
        O = n === C.gq.INTEGRATION && null != u,
        f = (0, E.q)(i),
        R = (0, a.e7)([I.Z], () => I.Z.getChannel(c)),
        h = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === C.gq.INVITE && null != t:
                        var r;
                        (0, S.Dr)(A, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        return void (0, S.Dr)(A, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0
                        });
                }
            },
            [A, n, t]
        );
    switch (!0) {
        case null == N:
        case null == n:
        case n === C.gq.UNSPECIFIED:
            return (0, r.jsx)(L, D({}, m));
        case null != u && O:
            return (0, r.jsxs)(
                o.P3F,
                U(D({ className: p.inviteContainer }, m), {
                    'aria-label': (0, C.MS)(u),
                    role: 'button',
                    tabIndex: 0,
                    onClick: h,
                    children: [
                        (0, r.jsx)(j, { type: u }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: (0, C.MS)(u)
                        })
                    ]
                })
            );
        case n === C.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != f:
            return (0, r.jsxs)('div', {
                className: s()(d && p.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        U(D({ className: p.linkedChannelContainer }, m), {
                            'aria-label': null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: h,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    game: f,
                                    size: _.Z.Sizes.XXSMALL
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    className: p.linkedChannelApplicationName,
                                    children: f.name
                                })
                            ]
                        })
                    ),
                    d && (0, r.jsx)(x, { channel: R })
                ]
            });
        case null != N:
            return (0, r.jsxs)('div', {
                className: s()(d && p.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        U(D({ className: p.inviteContainer }, m), {
                            'aria-label': null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: h,
                            children: [
                                null == N ? void 0 : N.icon,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    children: null == N ? void 0 : N.getJoinTypeLabel(null != t ? t : void 0)
                                })
                            ]
                        })
                    ),
                    d &&
                        (0, r.jsx)(M, {
                            guildId: A,
                            inviterUser: T,
                            joinSourceType: n,
                            className: p.inviterFooter,
                            onClickInviter: g
                        })
                ]
            });
        default:
            return (0, r.jsx)(L, D({}, m));
    }
}
let G = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: s, showJoinMethodContextAsFooter: o, onClickInviter: c } = e,
        E = (0, a.e7)([R.Z], () => R.Z.getEnhancedMember(s, i), [s, i]),
        d = null != (t = null == E ? void 0 : E.inviterId) ? t : null,
        _ = (0, a.e7)([N.default], () => N.default.getUser(d), [d]);
    l.useEffect(() => {
        null != d && (u.Z.requestMembersById(s, [d]), (0, T.Z)(d, void 0, { guildId: s }));
    }, [s, d]);
    let A = (0, a.e7)([m.Z], () => m.Z.hideInstantInvites, []);
    if (null == E) return (0, r.jsx)(L, {});
    let { sourceInviteCode: I, joinSourceType: g, joinSourceChannelId: O, joinSourceApplicationId: f, integrationType: S } = E,
        h = null != g ? b[g] : null,
        p = null != (n = null == h ? void 0 : h.hasTooltip) && n;
    return (g === C.gq.INVITE || g === C.gq.VANITY_URL || (g === C.gq.MANUAL_MEMBER_VERIFICATION && null != I)) && A
        ? (0, r.jsx)(v, {})
        : (0, r.jsx)(P, {
              hasTooltip: p && !o,
              inviterUser: null != _ ? _ : null,
              guildId: s,
              joinSourceType: g,
              joinSourceChannelId: O,
              children: (e) =>
                  (0, r.jsx)(
                      y,
                      D(
                          {
                              sourceInviteCode: I,
                              joinSourceType: g,
                              joinSourceApplicationId: f,
                              joinSourceChannelId: O,
                              integrationType: S,
                              showJoinMethodContextAsFooter: o,
                              inviterUser: null != _ ? _ : null,
                              guildId: s,
                              onClickInviter: c
                          },
                          e
                      )
                  )
          });
});
