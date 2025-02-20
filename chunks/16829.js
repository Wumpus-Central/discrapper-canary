n.d(t, { ZP: () => v }), n(566702);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    E = n(749210),
    c = n(700582),
    u = n(484459),
    _ = n(271383),
    d = n(246946),
    A = n(594174),
    T = n(785195),
    N = n(5192),
    I = n(893966),
    O = n(527379),
    g = n(327999),
    R = n(388032),
    f = n(551332);
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
let U = l.memo(function () {
        return (0, r.jsx)(s.ua7, {
            text: R.NW.string(R.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(
                    s.Text,
                    p(S({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: f.unknownInvite,
                        children: R.NW.string(R.t.yobFdn)
                    })
                )
        });
    }),
    C = l.memo(function () {
        return (0, r.jsx)(s.ua7, {
            text: R.NW.string(R.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    s.Text,
                    p(S({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: f.unknownInvite,
                        children: R.NW.string(R.t['4upToa'])
                    })
                )
        });
    }),
    D = {
        [g.gq.UNSPECIFIED]: {
            type: g.gq.UNSPECIFIED,
            getJoinTypeLabel: () => R.NW.string(R.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [g.gq.BOT]: {
            type: g.gq.BOT,
            getJoinTypeLabel: () => R.NW.string(R.t.HumZAg),
            icon: (0, r.jsx)(s.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: f.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [g.gq.INTEGRATION]: {
            type: g.gq.INTEGRATION,
            getJoinTypeLabel: () => R.NW.string(R.t.gmCUFx),
            icon: (0, r.jsx)(s.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.DISCOVERY]: {
            type: g.gq.DISCOVERY,
            getJoinTypeLabel: () => R.NW.string(R.t['Ql/e9f']),
            icon: (0, r.jsx)(s.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.HUB]: {
            type: g.gq.HUB,
            getJoinTypeLabel: () => R.NW.string(R.t.Op8B3N),
            icon: (0, r.jsx)(s.aVH, {
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
            icon: (0, r.jsx)(s.xPt, {
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
            icon: (0, r.jsx)(s.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [g.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: g.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? R.NW.formatToPlainString(R.t['VHLp+v'], { code: e }) : R.NW.string(R.t.vdu7oa)),
            icon: (0, r.jsx)(T.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function L(e) {
    var t;
    let { guildId: n, inviterUser: a, joinSourceType: E, className: u, onClickInviter: d } = e,
        A = (0, o.e7)([_.ZP], () => (null == a ? null : _.ZP.getMember(n, a.id)), [a, n]),
        T = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != a && (null == d || d(a));
            },
            [a, d]
        );
    return null == a
        ? null
        : (0, r.jsxs)('div', {
              className: i()(f.inviterTooltipContainer, u),
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: 'text-xs/medium',
                      children: E !== g.gq.BOT ? R.NW.string(R.t.azhY2t) : R.NW.string(R.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(s.P3F, {
                      className: i()(f.inviterUserContainer, null != d && f.clickable),
                      onClick: T,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: a,
                              size: s.EFr.SIZE_16
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(s.PUh, {
                                  name: N.ZP.getName(n, null, a),
                                  color: null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : void 0
                              })
                          })
                      ]
                  })
              ]
          });
}
function h(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: a, joinSourceType: i } = e;
    return n && null != a
        ? (0, r.jsx)(s.ua7, {
              'aria-label': i !== g.gq.BOT ? R.NW.string(R.t.azhY2t) : R.NW.string(R.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(L, {
                  guildId: l,
                  inviterUser: a,
                  joinSourceType: i
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
              className: f.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function M(e) {
    var { sourceInviteCode: t, joinSourceType: n, integrationType: a, showInviterAsFooter: o, guildId: E, inviterUser: c, onClickInviter: u } = e,
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
    let d = null != n ? D[n] : null,
        A = n === g.gq.INTEGRATION && null != a,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === g.gq.INVITE && null != t:
                        var r;
                        (0, O.Dr)(E, {
                            selectedSourceInviteCode: null !== (r = null == t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        (0, O.Dr)(E, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != n ? n : void 0
                        });
                        return;
                }
            },
            [E, n, t]
        );
    switch (!0) {
        case null == d:
        case null == n:
        case n === g.gq.UNSPECIFIED:
            return (0, r.jsx)(U, S({}, _));
        case null != a && A:
            return (0, r.jsxs)(
                s.P3F,
                p(S({ className: f.inviteContainer }, _), {
                    'aria-label': (0, g.MS)(a),
                    role: 'button',
                    tabIndex: 0,
                    onClick: T,
                    children: [
                        (0, r.jsx)(m, { type: a }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            children: (0, g.MS)(a)
                        })
                    ]
                })
            );
        case null != d:
            return (0, r.jsxs)('div', {
                className: i()(o && f.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        s.P3F,
                        p(S({ className: f.inviteContainer }, _), {
                            'aria-label': null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: T,
                            children: [
                                null == d ? void 0 : d.icon,
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    children: null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0)
                                })
                            ]
                        })
                    ),
                    o &&
                        (0, r.jsx)(L, {
                            guildId: E,
                            inviterUser: c,
                            joinSourceType: n,
                            className: f.inviterFooter,
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
    let { userId: a, guildId: i, showInviterAsFooter: s, onClickInviter: c } = e,
        _ = (0, o.e7)([I.Z], () => I.Z.getEnhancedMember(i, a), [i, a]),
        T = null !== (t = null == _ ? void 0 : _.inviterId) && void 0 !== t ? t : null,
        N = (0, o.e7)([A.default], () => A.default.getUser(T), [T]);
    l.useEffect(() => {
        null != T && (E.Z.requestMembersById(i, [T]), (0, u.Z)(T, void 0, { guildId: i }));
    }, [i, T]);
    let O = (0, o.e7)([d.Z], () => d.Z.hideInstantInvites, []);
    if (null == _) return (0, r.jsx)(U, {});
    let { sourceInviteCode: R, joinSourceType: f, integrationType: p } = _,
        L = null != f ? D[f] : null,
        m = null !== (n = null == L ? void 0 : L.hasTooltip) && void 0 !== n && n;
    return (f === g.gq.INVITE || f === g.gq.VANITY_URL || (f === g.gq.MANUAL_MEMBER_VERIFICATION && null != R)) && O
        ? (0, r.jsx)(C, {})
        : (0, r.jsx)(h, {
              hasTooltip: m && !s,
              inviterUser: null != N ? N : null,
              guildId: i,
              joinSourceType: f,
              children: (e) =>
                  (0, r.jsx)(
                      M,
                      S(
                          {
                              sourceInviteCode: R,
                              joinSourceType: f,
                              integrationType: p,
                              showInviterAsFooter: s,
                              inviterUser: null != N ? N : null,
                              guildId: i,
                              onClickInviter: c
                          },
                          e
                      )
                  )
          });
});
