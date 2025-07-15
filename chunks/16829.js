(n.d(t, { ZP: () => M }), n(781311));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(700582),
    E = n(884902),
    d = n(484459),
    _ = n(271383),
    A = n(246946),
    T = n(594174),
    I = n(785195),
    g = n(5192),
    m = n(893966),
    f = n(527379),
    O = n(327999),
    N = n(388032),
    h = n(615133);
function R(e) {
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
function p(e, t) {
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
let S = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: N.intl.string(N.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    p(R({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: h.unknownInvite,
                        children: N.intl.string(N.t.yobFdn)
                    })
                )
        });
    }),
    C = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: N.intl.string(N.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    p(R({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: h.unknownInvite,
                        children: N.intl.string(N.t['4upToa'])
                    })
                )
        });
    }),
    b = {
        [O.gq.UNSPECIFIED]: {
            type: O.gq.UNSPECIFIED,
            getJoinTypeLabel: () => N.intl.string(N.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [O.gq.BOT]: {
            type: O.gq.BOT,
            getJoinTypeLabel: () => N.intl.string(N.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: h.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [O.gq.INTEGRATION]: {
            type: O.gq.INTEGRATION,
            getJoinTypeLabel: () => N.intl.string(N.t.gmCUFx),
            icon: (0, r.jsx)(o.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [O.gq.DISCOVERY]: {
            type: O.gq.DISCOVERY,
            getJoinTypeLabel: () => N.intl.string(N.t['Ql/e9f']),
            icon: (0, r.jsx)(o.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [O.gq.HUB]: {
            type: O.gq.HUB,
            getJoinTypeLabel: () => N.intl.string(N.t.Op8B3N),
            icon: (0, r.jsx)(o.aVH, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [O.gq.INVITE]: {
            type: O.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [O.gq.VANITY_URL]: {
            type: O.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [O.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: O.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? N.intl.formatToPlainString(N.t['VHLp+v'], { code: e }) : N.intl.string(N.t.vdu7oa)),
            icon: (0, r.jsx)(I.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function D(e) {
    var t;
    let { guildId: n, inviterUser: i, joinSourceType: u, className: d, onClickInviter: A } = e,
        T = (0, a.e7)([_.ZP], () => (null == i ? null : _.ZP.getMember(n, i.id)), [i, n]),
        I = (0, E.X7)(null == T ? void 0 : T.guildId, null == T ? void 0 : T.userId, null == T ? void 0 : T.colorStrings),
        m = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != i && (null == A || A(i)));
            },
            [i, A]
        );
    return null == i
        ? null
        : (0, r.jsxs)('div', {
              className: s()(h.inviterTooltipContainer, d),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: u !== O.gq.BOT ? N.intl.string(N.t.azhY2t) : N.intl.string(N.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: s()(h.inviterUserContainer, null != A && h.clickable),
                      onClick: m,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: i,
                              size: o.EFr.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.PUh, {
                                  name: g.ZP.getName(n, null, i),
                                  color: null != (t = null == T ? void 0 : T.colorString) ? t : void 0,
                                  roleColors: I
                              })
                          })
                      ]
                  })
              ]
          });
}
function v(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: i, joinSourceType: s } = e;
    return n && null != i
        ? (0, r.jsx)(o.ua7, {
              'aria-label': s !== O.gq.BOT ? N.intl.string(N.t.azhY2t) : N.intl.string(N.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(D, {
                  guildId: l,
                  inviterUser: i,
                  joinSourceType: s
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function U(e) {
    let { type: t } = e,
        n = (0, O.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: h.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function L(e) {
    var { sourceInviteCode: t, joinSourceType: n, integrationType: i, showInviterAsFooter: a, guildId: u, inviterUser: c, onClickInviter: E } = e,
        d = (function (e, t) {
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
        })(e, ['sourceInviteCode', 'joinSourceType', 'integrationType', 'showInviterAsFooter', 'guildId', 'inviterUser', 'onClickInviter']);
    let _ = null != n ? b[n] : null,
        A = n === O.gq.INTEGRATION && null != i,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === O.gq.INVITE && null != t:
                        var r;
                        (0, f.Dr)(u, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        return void (0, f.Dr)(u, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0
                        });
                }
            },
            [u, n, t]
        );
    switch (!0) {
        case null == _:
        case null == n:
        case n === O.gq.UNSPECIFIED:
            return (0, r.jsx)(S, R({}, d));
        case null != i && A:
            return (0, r.jsxs)(
                o.P3F,
                p(R({ className: h.inviteContainer }, d), {
                    'aria-label': (0, O.MS)(i),
                    role: 'button',
                    tabIndex: 0,
                    onClick: T,
                    children: [
                        (0, r.jsx)(U, { type: i }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: (0, O.MS)(i)
                        })
                    ]
                })
            );
        case null != _:
            return (0, r.jsxs)('div', {
                className: s()(a && h.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        p(R({ className: h.inviteContainer }, d), {
                            'aria-label': null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: T,
                            children: [
                                null == _ ? void 0 : _.icon,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    children: null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0)
                                })
                            ]
                        })
                    ),
                    a &&
                        (0, r.jsx)(D, {
                            guildId: u,
                            inviterUser: c,
                            joinSourceType: n,
                            className: h.inviterFooter,
                            onClickInviter: E
                        })
                ]
            });
        default:
            return (0, r.jsx)(S, R({}, d));
    }
}
let M = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: s, showInviterAsFooter: o, onClickInviter: c } = e,
        E = (0, a.e7)([m.Z], () => m.Z.getEnhancedMember(s, i), [s, i]),
        _ = null != (t = null == E ? void 0 : E.inviterId) ? t : null,
        I = (0, a.e7)([T.default], () => T.default.getUser(_), [_]);
    l.useEffect(() => {
        null != _ && (u.Z.requestMembersById(s, [_]), (0, d.Z)(_, void 0, { guildId: s }));
    }, [s, _]);
    let g = (0, a.e7)([A.Z], () => A.Z.hideInstantInvites, []);
    if (null == E) return (0, r.jsx)(S, {});
    let { sourceInviteCode: f, joinSourceType: N, integrationType: h } = E,
        p = null != N ? b[N] : null,
        D = null != (n = null == p ? void 0 : p.hasTooltip) && n;
    return (N === O.gq.INVITE || N === O.gq.VANITY_URL || (N === O.gq.MANUAL_MEMBER_VERIFICATION && null != f)) && g
        ? (0, r.jsx)(C, {})
        : (0, r.jsx)(v, {
              hasTooltip: D && !o,
              inviterUser: null != I ? I : null,
              guildId: s,
              joinSourceType: N,
              children: (e) =>
                  (0, r.jsx)(
                      L,
                      R(
                          {
                              sourceInviteCode: f,
                              joinSourceType: N,
                              integrationType: h,
                              showInviterAsFooter: o,
                              inviterUser: null != I ? I : null,
                              guildId: s,
                              onClickInviter: c
                          },
                          e
                      )
                  )
          });
});
