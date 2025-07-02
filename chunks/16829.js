(n.d(t, { ZP: () => M }), n(781311));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    u = n(749210),
    c = n(700582),
    d = n(884902),
    E = n(484459),
    _ = n(271383),
    A = n(246946),
    m = n(594174),
    T = n(785195),
    f = n(5192),
    g = n(893966),
    I = n(527379),
    h = n(327999),
    O = n(388032),
    N = n(615133);
function p(e) {
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
function R(e, t) {
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
            text: O.intl.string(O.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    R(p({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: N.unknownInvite,
                        children: O.intl.string(O.t.yobFdn)
                    })
                )
        });
    }),
    C = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: O.intl.string(O.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(
                    o.Text,
                    R(p({}, e), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: N.unknownInvite,
                        children: O.intl.string(O.t['4upToa'])
                    })
                )
        });
    }),
    b = {
        [h.gq.UNSPECIFIED]: {
            type: h.gq.UNSPECIFIED,
            getJoinTypeLabel: () => O.intl.string(O.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [h.gq.BOT]: {
            type: h.gq.BOT,
            getJoinTypeLabel: () => O.intl.string(O.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: N.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [h.gq.INTEGRATION]: {
            type: h.gq.INTEGRATION,
            getJoinTypeLabel: () => O.intl.string(O.t.gmCUFx),
            icon: (0, r.jsx)(o.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [h.gq.DISCOVERY]: {
            type: h.gq.DISCOVERY,
            getJoinTypeLabel: () => O.intl.string(O.t['Ql/e9f']),
            icon: (0, r.jsx)(o.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [h.gq.HUB]: {
            type: h.gq.HUB,
            getJoinTypeLabel: () => O.intl.string(O.t.Op8B3N),
            icon: (0, r.jsx)(o.aVH, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [h.gq.INVITE]: {
            type: h.gq.INVITE,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [h.gq.VANITY_URL]: {
            type: h.gq.VANITY_URL,
            getJoinTypeLabel: (e) => e,
            icon: (0, r.jsx)(o.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [h.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: h.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (e) => (null != e ? O.intl.formatToPlainString(O.t['VHLp+v'], { code: e }) : O.intl.string(O.t.vdu7oa)),
            icon: (0, r.jsx)(T.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function v(e) {
    var t;
    let { guildId: n, inviterUser: i, joinSourceType: u, className: E, onClickInviter: A } = e,
        m = (0, a.e7)([_.ZP], () => (null == i ? null : _.ZP.getMember(n, i.id)), [i, n]),
        T = (0, d.X7)(null == m ? void 0 : m.guildId, null == m ? void 0 : m.userId, null == m ? void 0 : m.colorStrings),
        g = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != i && (null == A || A(i)));
            },
            [i, A]
        );
    return null == i
        ? null
        : (0, r.jsxs)('div', {
              className: s()(N.inviterTooltipContainer, E),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: u !== h.gq.BOT ? O.intl.string(O.t.azhY2t) : O.intl.string(O.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: s()(N.inviterUserContainer, null != A && N.clickable),
                      onClick: g,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: i,
                              size: o.EFr.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.PUh, {
                                  name: f.ZP.getName(n, null, i),
                                  color: null != (t = null == m ? void 0 : m.colorString) ? t : void 0,
                                  roleColors: T
                              })
                          })
                      ]
                  })
              ]
          });
}
function D(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: i, joinSourceType: s } = e;
    return n && null != i
        ? (0, r.jsx)(o.ua7, {
              'aria-label': s !== h.gq.BOT ? O.intl.string(O.t.azhY2t) : O.intl.string(O.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(v, {
                  guildId: l,
                  inviterUser: i,
                  joinSourceType: s
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function x(e) {
    let { type: t } = e,
        n = (0, h.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: N.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function L(e) {
    var { sourceInviteCode: t, joinSourceType: n, integrationType: i, showInviterAsFooter: a, guildId: u, inviterUser: c, onClickInviter: d } = e,
        E = (function (e, t) {
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
        A = n === h.gq.INTEGRATION && null != i,
        m = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === h.gq.INVITE && null != t:
                        var r;
                        (0, I.Dr)(u, {
                            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        return void (0, I.Dr)(u, {
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
        case n === h.gq.UNSPECIFIED:
            return (0, r.jsx)(S, p({}, E));
        case null != i && A:
            return (0, r.jsxs)(
                o.P3F,
                R(p({ className: N.inviteContainer }, E), {
                    'aria-label': (0, h.MS)(i),
                    role: 'button',
                    tabIndex: 0,
                    onClick: m,
                    children: [
                        (0, r.jsx)(x, { type: i }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: (0, h.MS)(i)
                        })
                    ]
                })
            );
        case null != _:
            return (0, r.jsxs)('div', {
                className: s()(a && N.footerAlignment),
                children: [
                    (0, r.jsxs)(
                        o.P3F,
                        R(p({ className: N.inviteContainer }, E), {
                            'aria-label': null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: m,
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
                        (0, r.jsx)(v, {
                            guildId: u,
                            inviterUser: c,
                            joinSourceType: n,
                            className: N.inviterFooter,
                            onClickInviter: d
                        })
                ]
            });
        default:
            return (0, r.jsx)(S, p({}, E));
    }
}
let M = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: s, showInviterAsFooter: o, onClickInviter: c } = e,
        d = (0, a.e7)([g.Z], () => g.Z.getEnhancedMember(s, i), [s, i]),
        _ = null != (t = null == d ? void 0 : d.inviterId) ? t : null,
        T = (0, a.e7)([m.default], () => m.default.getUser(_), [_]);
    l.useEffect(() => {
        null != _ && (u.Z.requestMembersById(s, [_]), (0, E.Z)(_, void 0, { guildId: s }));
    }, [s, _]);
    let f = (0, a.e7)([A.Z], () => A.Z.hideInstantInvites, []);
    if (null == d) return (0, r.jsx)(S, {});
    let { sourceInviteCode: I, joinSourceType: O, integrationType: N } = d,
        R = null != O ? b[O] : null,
        v = null != (n = null == R ? void 0 : R.hasTooltip) && n;
    return (O === h.gq.INVITE || O === h.gq.VANITY_URL || (O === h.gq.MANUAL_MEMBER_VERIFICATION && null != I)) && f
        ? (0, r.jsx)(C, {})
        : (0, r.jsx)(D, {
              hasTooltip: v && !o,
              inviterUser: null != T ? T : null,
              guildId: s,
              joinSourceType: O,
              children: (e) =>
                  (0, r.jsx)(
                      L,
                      p(
                          {
                              sourceInviteCode: I,
                              joinSourceType: O,
                              integrationType: N,
                              showInviterAsFooter: o,
                              inviterUser: null != T ? T : null,
                              guildId: s,
                              onClickInviter: c
                          },
                          e
                      )
                  )
          });
});
