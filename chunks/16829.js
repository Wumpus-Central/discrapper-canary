(t.d(e, { ZP: () => Z }), t(781311));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(442837),
    a = t(481060),
    o = t(749210),
    g = t(700582),
    f = t(835473),
    v = t(933557),
    c = t(925329),
    h = t(884902),
    E = t(484459),
    u = t(592125),
    d = t(271383),
    C = t(246946),
    B = t(594174),
    w = t(785195),
    D = t(5192),
    M = t(893966),
    I = t(527379),
    p = t(327999),
    H = t(388032),
    b = t(615133);
function Q(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
function O(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let P = r.memo(function () {
        return (0, n.jsx)(a.ua7, {
            text: H.intl.string(H.t['vu/MiY']),
            children: (A) =>
                (0, n.jsx)(
                    a.Text,
                    O(Q({}, A), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: b.unknownInvite,
                        children: H.intl.string(H.t.yobFdn)
                    })
                )
        });
    }),
    V = r.memo(function () {
        return (0, n.jsx)(a.ua7, {
            text: H.intl.string(H.t.OrCp9v),
            children: (A) =>
                (0, n.jsx)(
                    a.Text,
                    O(Q({}, A), {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: b.unknownInvite,
                        children: H.intl.string(H.t['4upToa'])
                    })
                )
        });
    }),
    j = {
        [p.gq.UNSPECIFIED]: {
            type: p.gq.UNSPECIFIED,
            getJoinTypeLabel: () => H.intl.string(H.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [p.gq.BOT]: {
            type: p.gq.BOT,
            getJoinTypeLabel: () => H.intl.string(H.t.HumZAg),
            icon: (0, n.jsx)(a.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: b.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [p.gq.INTEGRATION]: {
            type: p.gq.INTEGRATION,
            getJoinTypeLabel: () => H.intl.string(H.t.gmCUFx),
            icon: (0, n.jsx)(a.tYf, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [p.gq.DISCOVERY]: {
            type: p.gq.DISCOVERY,
            getJoinTypeLabel: () => H.intl.string(H.t['Ql/e9f']),
            icon: (0, n.jsx)(a.Jmo, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [p.gq.HUB]: {
            type: p.gq.HUB,
            getJoinTypeLabel: () => H.intl.string(H.t.Op8B3N),
            icon: (0, n.jsx)(a.aVH, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [p.gq.INVITE]: {
            type: p.gq.INVITE,
            getJoinTypeLabel: (A) => A,
            icon: (0, n.jsx)(a.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [p.gq.VANITY_URL]: {
            type: p.gq.VANITY_URL,
            getJoinTypeLabel: (A) => A,
            icon: (0, n.jsx)(a.xPt, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [p.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: p.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: (A) => (null != A ? H.intl.formatToPlainString(H.t['VHLp+v'], { code: A }) : H.intl.string(H.t.vdu7oa)),
            icon: (0, n.jsx)(w.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
            type: p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
            getJoinTypeLabel: () => H.intl.string(H.t['9/ZreX']),
            icon: (0, n.jsx)(a.iWm, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        }
    };
function T(A) {
    var e, t;
    let { guildId: l, inviterUser: o, joinSourceType: f, className: v, onClickInviter: c } = A,
        E = (0, s.e7)([d.ZP], () => (null == o ? null : d.ZP.getMember(l, o.id)), [o, l]),
        u = (0, h.X7)(null == E ? void 0 : E.guildId, null == E ? void 0 : E.userId, null != (e = null == E ? void 0 : E.colorStrings) ? e : null),
        C = r.useCallback(
            (A) => {
                (A.stopPropagation(), A.preventDefault(), null != o && (null == c || c(o)));
            },
            [o, c]
        );
    return null == o
        ? null
        : (0, n.jsxs)('div', {
              className: i()(b.inviterTooltipContainer, v),
              children: [
                  (0, n.jsx)(a.Text, {
                      variant: 'text-xs/medium',
                      children: f !== p.gq.BOT ? H.intl.string(H.t.azhY2t) : H.intl.string(H.t['2ByN2t'])
                  }),
                  (0, n.jsxs)(a.P3F, {
                      className: i()(b.inviterUserContainer, null != c && b.clickable),
                      onClick: C,
                      children: [
                          (0, n.jsx)(g.Z, {
                              user: o,
                              size: a.EFr.SIZE_16
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: 'text-xs/medium',
                              children: (0, n.jsx)(a.PUh, {
                                  name: D.ZP.getName(l, null, o),
                                  colorString: null != (t = null == E ? void 0 : E.colorString) ? t : null,
                                  colorStrings: u
                              })
                          })
                      ]
                  })
              ]
          });
}
function y(A) {
    let { channel: e, className: t } = A,
        r = (0, v.ZP)(e, !0);
    return (0, n.jsx)('div', {
        className: i()(b.inviterUserContainer, t),
        children: (0, n.jsx)(a.Text, {
            variant: 'text-xs/medium',
            children: H.intl.format(H.t['2VQq2t'], { channelName: null != r ? r : H.intl.string(H.t.zLZPmp) })
        })
    });
}
function m(A) {
    let { children: e, hasTooltip: t, guildId: l, inviterUser: i, joinSourceType: o, joinSourceChannelId: g } = A,
        f = (0, s.e7)([u.Z], () => u.Z.getChannel(g)),
        c = (0, v.ZP)(f, !0),
        h = !!t && (o === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i),
        E = r.useMemo(
            () =>
                o === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL
                    ? (0, n.jsx)(y, { channel: f })
                    : (0, n.jsx)(T, {
                          guildId: l,
                          inviterUser: i,
                          joinSourceType: o
                      }),
            [o, l, i, f]
        );
    if (!h) return (0, n.jsx)(n.Fragment, { children: e({}) });
    let d = o === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? H.intl.formatToPlainString(H.t['2VQq2t'], { channelName: null != c ? c : H.intl.string(H.t.zLZPmp) }) : o === p.gq.BOT ? H.intl.string(H.t['2ByN2t']) : H.intl.string(H.t.azhY2t);
    return (0, n.jsx)(a.ua7, {
        'aria-label': d,
        allowOverflow: !0,
        text: E,
        children: (A) => (0, n.jsx)(n.Fragment, { children: e(A) })
    });
}
function L(A) {
    let { type: e } = A,
        t = (0, p.Ph)(e);
    return null == t
        ? null
        : (0, n.jsx)('div', {
              className: b.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: t
              }
          });
}
function x(A) {
    var { sourceInviteCode: e, joinSourceType: t, joinSourceApplicationId: l, integrationType: o, joinSourceChannelId: g, showJoinMethodContextAsFooter: v, guildId: h, inviterUser: E, onClickInviter: d } = A,
        C = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
            }
            return r;
        })(A, ['sourceInviteCode', 'joinSourceType', 'joinSourceApplicationId', 'integrationType', 'joinSourceChannelId', 'showJoinMethodContextAsFooter', 'guildId', 'inviterUser', 'onClickInviter']);
    let B = null != t ? j[t] : null,
        w = t === p.gq.INTEGRATION && null != o,
        D = (0, f.q)(l),
        M = (0, s.e7)([u.Z], () => u.Z.getChannel(g)),
        H = r.useCallback(
            (A) => {
                switch ((A.stopPropagation(), A.preventDefault(), !0)) {
                    case null == e && null == t:
                    case null == t:
                        return;
                    case t === p.gq.INVITE && null != e:
                        var n;
                        (0, I.Dr)(h, {
                            selectedSourceInviteCode: null != (n = null == e ? void 0 : e.trim()) ? n : void 0,
                            selectedJoinSourceType: t
                        });
                        return;
                    default:
                        return void (0, I.Dr)(h, {
                            selectedSourceInviteCode: null,
                            selectedJoinSourceType: null != t ? t : void 0
                        });
                }
            },
            [h, t, e]
        );
    switch (!0) {
        case null == B:
        case null == t:
        case t === p.gq.UNSPECIFIED:
            return (0, n.jsx)(P, Q({}, C));
        case null != o && w:
            return (0, n.jsxs)(
                a.P3F,
                O(Q({ className: b.inviteContainer }, C), {
                    'aria-label': (0, p.MS)(o),
                    role: 'button',
                    tabIndex: 0,
                    onClick: H,
                    children: [
                        (0, n.jsx)(L, { type: o }),
                        (0, n.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            children: (0, p.MS)(o)
                        })
                    ]
                })
            );
        case t === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != D:
            return (0, n.jsxs)('div', {
                className: i()(v && b.footerAlignment),
                children: [
                    (0, n.jsxs)(
                        a.P3F,
                        O(Q({ className: b.linkedChannelContainer }, C), {
                            'aria-label': null == B ? void 0 : B.getJoinTypeLabel(null != e ? e : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: H,
                            children: [
                                (0, n.jsx)(c.Z, {
                                    game: D,
                                    size: c.Z.Sizes.XXSMALL
                                }),
                                (0, n.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    className: b.linkedChannelApplicationName,
                                    children: D.name
                                })
                            ]
                        })
                    ),
                    v && (0, n.jsx)(y, { channel: M })
                ]
            });
        case null != B:
            return (0, n.jsxs)('div', {
                className: i()(v && b.footerAlignment),
                children: [
                    (0, n.jsxs)(
                        a.P3F,
                        O(Q({ className: b.inviteContainer }, C), {
                            'aria-label': null == B ? void 0 : B.getJoinTypeLabel(null != e ? e : void 0),
                            role: 'button',
                            tabIndex: 0,
                            onClick: H,
                            children: [
                                null == B ? void 0 : B.icon,
                                (0, n.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    children: null == B ? void 0 : B.getJoinTypeLabel(null != e ? e : void 0)
                                })
                            ]
                        })
                    ),
                    v &&
                        (0, n.jsx)(T, {
                            guildId: h,
                            inviterUser: E,
                            joinSourceType: t,
                            className: b.inviterFooter,
                            onClickInviter: d
                        })
                ]
            });
        default:
            return (0, n.jsx)(P, Q({}, C));
    }
}
let Z = r.memo(function (A) {
    var e, t;
    let { userId: l, guildId: i, showJoinMethodContextAsFooter: a, onClickInviter: g } = A,
        f = (0, s.e7)([M.Z], () => M.Z.getEnhancedMember(i, l), [i, l]),
        v = null != (e = null == f ? void 0 : f.inviterId) ? e : null,
        c = (0, s.e7)([B.default], () => B.default.getUser(v), [v]);
    r.useEffect(() => {
        null != v && (o.Z.requestMembersById(i, [v]), (0, E.Z)(v, void 0, { guildId: i }));
    }, [i, v]);
    let h = (0, s.e7)([C.Z], () => C.Z.hideInstantInvites, []);
    if (null == f) return (0, n.jsx)(P, {});
    let { sourceInviteCode: u, joinSourceType: d, joinSourceChannelId: w, joinSourceApplicationId: D, integrationType: I } = f,
        H = null != d ? j[d] : null,
        b = null != (t = null == H ? void 0 : H.hasTooltip) && t;
    return (d === p.gq.INVITE || d === p.gq.VANITY_URL || (d === p.gq.MANUAL_MEMBER_VERIFICATION && null != u)) && h
        ? (0, n.jsx)(V, {})
        : (0, n.jsx)(m, {
              hasTooltip: b && !a,
              inviterUser: null != c ? c : null,
              guildId: i,
              joinSourceType: d,
              joinSourceChannelId: w,
              children: (A) =>
                  (0, n.jsx)(
                      x,
                      Q(
                          {
                              sourceInviteCode: u,
                              joinSourceType: d,
                              joinSourceApplicationId: D,
                              joinSourceChannelId: w,
                              integrationType: I,
                              showJoinMethodContextAsFooter: a,
                              inviterUser: null != c ? c : null,
                              guildId: i,
                              onClickInviter: g
                          },
                          A
                      )
                  )
          });
});
