n.d(t, { ZP: () => b }), n(781311);
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    o = n(481060),
    E = n(749210),
    u = n(700582),
    c = n(884902),
    _ = n(484459),
    d = n(271383),
    A = n(246946),
    T = n(594174),
    N = n(785195),
    I = n(5192),
    O = n(893966),
    R = n(527379),
    g = n(327999),
    f = n(388032),
    S = n(615133);
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
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
            text: f.NW.string(f.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    h(U({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: S.unknownInvite,
                        children: f.NW.string(f.t.yobFdn)
                    })
                )
        });
    }),
    p = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: f.NW.string(f.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    h(U({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: S.unknownInvite,
                        children: f.NW.string(f.t['4upToa'])
                    })
                )
        });
    }),
    D = {
        [g.gq.UNSPECIFIED]: {
            type: g.gq.UNSPECIFIED,
            getJoinTypeLabel: () => f.NW.string(f.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [g.gq.BOT]: {
            type: g.gq.BOT,
            getJoinTypeLabel: () => f.NW.string(f.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: S.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [g.gq.INTEGRATION]: {
            type: g.gq.INTEGRATION,
            getJoinTypeLabel: () => f.NW.string(f.t.gmCUFx),
            icon: (0, r.jsx)(o.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.DISCOVERY]: {
            type: g.gq.DISCOVERY,
            getJoinTypeLabel: () => f.NW.string(f.t['Ql/e9f']),
            icon: (0, r.jsx)(o.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.HUB]: {
            type: g.gq.HUB,
            getJoinTypeLabel: () => f.NW.string(f.t.Op8B3N),
            icon: (0, r.jsx)(o.aVH, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.INVITE]: {
            type: g.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [g.gq.VANITY_URL]: {
            type: g.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: g.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? f.NW.formatToPlainString(f.t['VHLp+v'], { code: e }) : f.NW.string(f.t.vdu7oa)),
            icon: (0, r.jsx)(N.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function C(e) {
    var t;
    let { guildId: n, inviterUser: s, joinSourceType: E, className: _, onClickInviter: A } = e,
        T = (0, i.e7)([d.ZP], () => (null == s ? null : d.ZP.getMember(n, s.id)), [s, n]),
        N = (0, c.X)(null == T ? void 0 : T.guildId, null == T ? void 0 : T.colorStrings),
        O = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != s && (null == A || A(s));
            },
            [s, A]
        );
    return null == s
        ? null
        : (0, r.jsxs)('div', {
              className: a()(S.inviterTooltipContainer, _),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: E !== g.gq.BOT ? f.NW.string(f.t.azhY2t) : f.NW.string(f.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: a()(S.inviterUserContainer, null != A && S.clickable),
                      onClick: O,
                      children: [
                          (0, r.jsx)(u.Z, {
                              user: s,
                              size: o.EFr.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.PUh, {
                                  name: I.ZP.getName(n, null, s),
                                  color: null != (t = null == T ? void 0 : T.colorString) ? t : void 0,
                                  roleColors: N
                              })
                          })
                      ]
                  })
              ]
          });
}
function M(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: s, joinSourceType: a } = e;
    return n && null != s
        ? (0, r.jsx)(o.ua7, {
              'aria-label': a !== g.gq.BOT ? f.NW.string(f.t.azhY2t) : f.NW.string(f.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(C, {
                  guildId: l,
                  inviterUser: s,
                  joinSourceType: a
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function m(e) {
    let { type: t } = e,
        n = (0, g.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: S.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function v(e) {
    var { sourceInviteCode: t, joinSourceType: n, integrationType: s, showInviterAsFooter: i, guildId: E, inviterUser: u, onClickInviter: c } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['sourceInviteCode', 'joinSourceType', 'integrationType', 'showInviterAsFooter', 'guildId', 'inviterUser', 'onClickInviter']);
    let d = null != n ? D[n] : null,
        A = n === g.gq.INTEGRATION && null != s,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === g.gq.INVITE && null != t:
                        var r;
                        (0, R.Dr)(E, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        return void (0, R.Dr)(E, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0
                        });
                }
            },
            [E, n, t]
        );
    switch (!0) {
        case null == d:
        case null == n:
        case n === g.gq.UNSPECIFIED:
            return (0, r.jsx)(L, U({}, _));
        case null != s && A:
            return (0, r.jsxs)(
                o.P3F,
                h(U({ className: S.inviteContainer }, _), {
                    'aria-label': (0, g.MS)(s),
                    role: 'button',
                    tabIndex: 0,
                    onClick: T,
                    children: [
                        (0, r.jsx)(m, { type: s }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: (0, g.MS)(s)
                        })
                    ]
                })
            );
        case null != d:
            return (0, r.jsxs)('div', {
                className: a()(i && S.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        h(U({ className: S.inviteContainer }, _), {
                            'aria-label': null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: T,
                            children: [
                                null == d ? void 0 : d.icon,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    children: null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0)
                                })
                            ]
                        })
                    ),
                    i &&
                        (0, r.jsx)(C, {
                            guildId: E,
                            inviterUser: u,
                            joinSourceType: n,
                            className: S.inviterFooter,
                            onClickInviter: c
                        })
                ]
            });
        default:
            return (0, r.jsx)(L, U({}, _));
    }
}
let b = l.memo(function (e) {
    var t, n;
    let { userId: s, guildId: a, showInviterAsFooter: o, onClickInviter: u } = e,
        c = (0, i.e7)([O.Z], () => O.Z.getEnhancedMember(a, s), [a, s]),
        d = null != (t = null == c ? void 0 : c.inviterId) ? t : null,
        N = (0, i.e7)([T.default], () => T.default.getUser(d), [d]);
    l.useEffect(() => {
        null != d && (E.Z.requestMembersById(a, [d]), (0, _.Z)(d, void 0, { guildId: a }));
    }, [a, d]);
    let I = (0, i.e7)([A.Z], () => A.Z.hideInstantInvites, []);
    if (null == c) return (0, r.jsx)(L, {});
    let { sourceInviteCode: R, joinSourceType: f, integrationType: S } = c,
        h = null != f ? D[f] : null,
        C = null != (n = null == h ? void 0 : h.hasTooltip) && n;
    return (f === g.gq.INVITE || f === g.gq.VANITY_URL || (f === g.gq.MANUAL_MEMBER_VERIFICATION && null != R)) && I
        ? (0, r.jsx)(p, {})
        : (0, r.jsx)(M, {
              hasTooltip: C && !o,
              inviterUser: null != N ? N : null,
              guildId: a,
              joinSourceType: f,
              children: (e) =>
                  (0, r.jsx)(
                      v,
                      U(
                          {
                              sourceInviteCode: R,
                              joinSourceType: f,
                              integrationType: S,
                              showInviterAsFooter: o,
                              inviterUser: null != N ? N : null,
                              guildId: a,
                              onClickInviter: u
                          },
                          e
                      )
                  )
          });
});
