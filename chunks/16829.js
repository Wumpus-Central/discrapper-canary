n.d(t, { ZP: () => v }), n(566702);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    o = n(481060),
    E = n(749210),
    c = n(700582),
    u = n(884902),
    _ = n(484459),
    d = n(271383),
    A = n(246946),
    T = n(594174),
    N = n(785195),
    I = n(5192),
    O = n(893966),
    g = n(527379),
    f = n(327999),
    R = n(388032),
    p = n(615133);
function S(e) {
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
let U = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: R.NW.string(R.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    h(S({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: p.unknownInvite,
                        children: R.NW.string(R.t.yobFdn)
                    })
                )
        });
    }),
    D = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: R.NW.string(R.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    h(S({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: p.unknownInvite,
                        children: R.NW.string(R.t['4upToa'])
                    })
                )
        });
    }),
    L = {
        [f.gq.UNSPECIFIED]: {
            type: f.gq.UNSPECIFIED,
            getJoinTypeLabel: () => R.NW.string(R.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [f.gq.BOT]: {
            type: f.gq.BOT,
            getJoinTypeLabel: () => R.NW.string(R.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: p.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [f.gq.INTEGRATION]: {
            type: f.gq.INTEGRATION,
            getJoinTypeLabel: () => R.NW.string(R.t.gmCUFx),
            icon: (0, r.jsx)(o.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.DISCOVERY]: {
            type: f.gq.DISCOVERY,
            getJoinTypeLabel: () => R.NW.string(R.t['Ql/e9f']),
            icon: (0, r.jsx)(o.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.HUB]: {
            type: f.gq.HUB,
            getJoinTypeLabel: () => R.NW.string(R.t.Op8B3N),
            icon: (0, r.jsx)(o.aVH, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.INVITE]: {
            type: f.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [f.gq.VANITY_URL]: {
            type: f.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [f.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: f.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? R.NW.formatToPlainString(R.t['VHLp+v'], { code: e }) : R.NW.string(R.t.vdu7oa)),
            icon: (0, r.jsx)(N.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function C(e) {
    var t;
    let { guildId: n, inviterUser: a, joinSourceType: E, className: _, onClickInviter: A } = e,
        T = (0, i.e7)([d.ZP], () => (null == a ? null : d.ZP.getMember(n, a.id)), [a, n]),
        N = (0, u.E)(null == T ? void 0 : T.guildId, null == T ? void 0 : T.colorStrings),
        O = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != a && (null == A || A(a));
            },
            [a, A]
        );
    return null == a
        ? null
        : (0, r.jsxs)('div', {
              className: s()(p.inviterTooltipContainer, _),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: E !== f.gq.BOT ? R.NW.string(R.t.azhY2t) : R.NW.string(R.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: s()(p.inviterUserContainer, null != A && p.clickable),
                      onClick: O,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: a,
                              size: o.EFr.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.PUh, {
                                  name: I.ZP.getName(n, null, a),
                                  color: null != (t = null == T ? void 0 : T.colorString) ? t : void 0,
                                  roleGradient: N
                              })
                          })
                      ]
                  })
              ]
          });
}
function m(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: a, joinSourceType: s } = e;
    return n && null != a
        ? (0, r.jsx)(o.ua7, {
              'aria-label': s !== f.gq.BOT ? R.NW.string(R.t.azhY2t) : R.NW.string(R.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(C, {
                  guildId: l,
                  inviterUser: a,
                  joinSourceType: s
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function M(e) {
    let { type: t } = e,
        n = (0, f.Ph)(t);
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
function b(e) {
    var { sourceInviteCode: t, joinSourceType: n, integrationType: a, showInviterAsFooter: i, guildId: E, inviterUser: c, onClickInviter: u } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['sourceInviteCode', 'joinSourceType', 'integrationType', 'showInviterAsFooter', 'guildId', 'inviterUser', 'onClickInviter']);
    let d = null != n ? L[n] : null,
        A = n === f.gq.INTEGRATION && null != a,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === f.gq.INVITE && null != t:
                        var r;
                        (0, g.Dr)(E, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        return void (0, g.Dr)(E, {
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
        case n === f.gq.UNSPECIFIED:
            return (0, r.jsx)(U, S({}, _));
        case null != a && A:
            return (0, r.jsxs)(
                o.P3F,
                h(S({ className: p.inviteContainer }, _), {
                    'aria-label': (0, f.MS)(a),
                    role: 'button',
                    tabIndex: 0,
                    onClick: T,
                    children: [
                        (0, r.jsx)(M, { type: a }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: (0, f.MS)(a)
                        })
                    ]
                })
            );
        case null != d:
            return (0, r.jsxs)('div', {
                className: s()(i && p.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        h(S({ className: p.inviteContainer }, _), {
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
                            inviterUser: c,
                            joinSourceType: n,
                            className: p.inviterFooter,
                            onClickInviter: u
                        })
                ]
            });
        default:
            return (0, r.jsx)(U, S({}, _));
    }
}
let v = l.memo(function (e) {
    var t, n;
    let { userId: a, guildId: s, showInviterAsFooter: o, onClickInviter: c } = e,
        u = (0, i.e7)([O.Z], () => O.Z.getEnhancedMember(s, a), [s, a]),
        d = null != (t = null == u ? void 0 : u.inviterId) ? t : null,
        N = (0, i.e7)([T.default], () => T.default.getUser(d), [d]);
    l.useEffect(() => {
        null != d && (E.Z.requestMembersById(s, [d]), (0, _.Z)(d, void 0, { guildId: s }));
    }, [s, d]);
    let I = (0, i.e7)([A.Z], () => A.Z.hideInstantInvites, []);
    if (null == u) return (0, r.jsx)(U, {});
    let { sourceInviteCode: g, joinSourceType: R, integrationType: p } = u,
        h = null != R ? L[R] : null,
        C = null != (n = null == h ? void 0 : h.hasTooltip) && n;
    return (R === f.gq.INVITE || R === f.gq.VANITY_URL || (R === f.gq.MANUAL_MEMBER_VERIFICATION && null != g)) && I
        ? (0, r.jsx)(D, {})
        : (0, r.jsx)(m, {
              hasTooltip: C && !o,
              inviterUser: null != N ? N : null,
              guildId: s,
              joinSourceType: R,
              children: (e) =>
                  (0, r.jsx)(
                      b,
                      S(
                          {
                              sourceInviteCode: g,
                              joinSourceType: R,
                              integrationType: p,
                              showInviterAsFooter: o,
                              inviterUser: null != N ? N : null,
                              guildId: s,
                              onClickInviter: c
                          },
                          e
                      )
                  )
          });
});
