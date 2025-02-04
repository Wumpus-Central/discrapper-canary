n.d(t, { ZP: () => p });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    E = n(749210),
    u = n(700582),
    c = n(484459),
    _ = n(271383),
    d = n(246946),
    A = n(594174),
    T = n(785195),
    I = n(5192),
    N = n(893966),
    g = n(527379),
    O = n(327999),
    S = n(388032),
    R = n(106053);
let f = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: S.intl.string(S.t['vu/MiY']),
            children: (e) =>
                (0, r.jsx)(o.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: R.unknownInvite,
                    children: S.intl.string(S.t.yobFdn)
                })
        });
    }),
    U = l.memo(function () {
        return (0, r.jsx)(o.ua7, {
            text: S.intl.string(S.t.OrCp9v),
            children: (e) =>
                (0, r.jsx)(o.Text, {
                    ...e,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: R.unknownInvite,
                    children: S.intl.string(S.t['4upToa'])
                })
        });
    }),
    D = {
        [O.gq.UNSPECIFIED]: {
            type: O.gq.UNSPECIFIED,
            getJoinTypeLabel: () => S.intl.string(S.t.DvMBkZ),
            icon: null,
            hasTooltip: !1
        },
        [O.gq.BOT]: {
            type: O.gq.BOT,
            getJoinTypeLabel: () => S.intl.string(S.t.HumZAg),
            icon: (0, r.jsx)(o.wGt, {
                size: 'custom',
                color: 'currentColor',
                className: R.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [O.gq.INTEGRATION]: {
            type: O.gq.INTEGRATION,
            getJoinTypeLabel: () => S.intl.string(S.t.gmCUFx),
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
            getJoinTypeLabel: () => S.intl.string(S.t['Ql/e9f']),
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
            getJoinTypeLabel: () => S.intl.string(S.t.Op8B3N),
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
            getJoinTypeLabel: (e) => (null != e ? S.intl.formatToPlainString(S.t['VHLp+v'], { code: e }) : S.intl.string(S.t.vdu7oa)),
            icon: (0, r.jsx)(T.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function C(e) {
    var t;
    let { guildId: n, inviterUser: i, joinSourceType: E, className: c, onClickInviter: d } = e,
        A = (0, s.e7)([_.ZP], () => (null == i ? null : _.ZP.getMember(n, i.id)), [i, n]),
        T = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), null != i && (null == d || d(i));
            },
            [i, d]
        );
    return null == i
        ? null
        : (0, r.jsxs)('div', {
              className: a()(R.inviterTooltipContainer, c),
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      children: E !== O.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t['2ByN2t'])
                  }),
                  (0, r.jsxs)(o.P3F, {
                      className: a()(R.inviterUserContainer, null != d && R.clickable),
                      onClick: T,
                      children: [
                          (0, r.jsx)(u.Z, {
                              user: i,
                              size: o.EFr.SIZE_16
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              children: (0, r.jsx)(o.PUh, {
                                  name: I.ZP.getName(n, null, i),
                                  color: null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : void 0
                              })
                          })
                      ]
                  })
              ]
          });
}
function L(e) {
    let { children: t, hasTooltip: n, guildId: l, inviterUser: i, joinSourceType: a } = e;
    return n && null != i
        ? (0, r.jsx)(o.ua7, {
              'aria-label': a !== O.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t['2ByN2t']),
              allowOverflow: !0,
              text: (0, r.jsx)(C, {
                  guildId: l,
                  inviterUser: i,
                  joinSourceType: a
              }),
              children: (e) => (0, r.jsx)(r.Fragment, { children: t(e) })
          })
        : (0, r.jsx)(r.Fragment, { children: t({}) });
}
function M(e) {
    let { type: t } = e,
        n = (0, O.Ph)(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: R.integrationIcon,
              style: {
                  width: 12,
                  height: 12,
                  backgroundImage: n
              }
          });
}
function h(e) {
    let { sourceInviteCode: t, joinSourceType: n, integrationType: i, showInviterAsFooter: s, guildId: E, inviterUser: u, onClickInviter: c, ..._ } = e,
        d = null != n ? D[n] : null,
        A = n === O.gq.INTEGRATION && null != i,
        T = l.useCallback(
            (e) => {
                switch ((e.stopPropagation(), e.preventDefault(), !0)) {
                    case null == t && null == n:
                    case null == n:
                        return;
                    case n === O.gq.INVITE && null != t:
                        var r;
                        (0, g.Dr)(E, {
                            selectedSourceInviteCode: null !== (r = null == t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
                            selectedJoinSourceType: n
                        });
                        return;
                    default:
                        (0, g.Dr)(E, {
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
        case n === O.gq.UNSPECIFIED:
            return (0, r.jsx)(f, { ..._ });
        case null != i && A:
            return (0, r.jsxs)(o.P3F, {
                className: R.inviteContainer,
                ..._,
                'aria-label': (0, O.MS)(i),
                role: 'button',
                tabIndex: 0,
                onClick: T,
                children: [
                    (0, r.jsx)(M, { type: i }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: (0, O.MS)(i)
                    })
                ]
            });
        case null != d:
            return (0, r.jsxs)('div', {
                className: a()(s && R.footerAlignment),
                children: [
                    (0, r.jsxs)(o.P3F, {
                        className: R.inviteContainer,
                        ..._,
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
                    }),
                    s &&
                        (0, r.jsx)(C, {
                            guildId: E,
                            inviterUser: u,
                            joinSourceType: n,
                            className: R.inviterFooter,
                            onClickInviter: c
                        })
                ]
            });
        default:
            return (0, r.jsx)(f, { ..._ });
    }
}
let p = l.memo(function (e) {
    var t, n;
    let { userId: i, guildId: a, showInviterAsFooter: o, onClickInviter: u } = e,
        _ = (0, s.e7)([N.Z], () => N.Z.getEnhancedMember(a, i), [a, i]),
        T = null !== (t = null == _ ? void 0 : _.inviterId) && void 0 !== t ? t : null,
        I = (0, s.e7)([A.default], () => A.default.getUser(T), [T]);
    l.useEffect(() => {
        null != T && (E.Z.requestMembersById(a, [T]), (0, c.Z)(T, void 0, { guildId: a }));
    }, [a, T]);
    let g = (0, s.e7)([d.Z], () => d.Z.hideInstantInvites, []);
    if (null == _) return (0, r.jsx)(f, {});
    let { sourceInviteCode: S, joinSourceType: R, integrationType: C } = _,
        M = null != R ? D[R] : null,
        p = null !== (n = null == M ? void 0 : M.hasTooltip) && void 0 !== n && n;
    return (R === O.gq.INVITE || R === O.gq.VANITY_URL || (R === O.gq.MANUAL_MEMBER_VERIFICATION && null != S)) && g
        ? (0, r.jsx)(U, {})
        : (0, r.jsx)(L, {
              hasTooltip: p && !o,
              inviterUser: null != I ? I : null,
              guildId: a,
              joinSourceType: R,
              children: (e) =>
                  (0, r.jsx)(h, {
                      sourceInviteCode: S,
                      joinSourceType: R,
                      integrationType: C,
                      showInviterAsFooter: o,
                      inviterUser: null != I ? I : null,
                      guildId: a,
                      onClickInviter: u,
                      ...e
                  })
          });
});
