(n.d(t, { Z: () => el }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(392711),
    s = n(498607),
    c = n.n(s),
    u = n(399606),
    d = n(692547),
    C = n(481060),
    m = n(700582),
    b = n(745735),
    p = n(906732),
    f = n(346486),
    h = n(715903),
    j = n(69882),
    g = n(189432),
    x = n(189357),
    v = n(172751),
    O = n(493892),
    y = n(884902),
    _ = n(433355),
    H = n(430824),
    w = n(496675),
    N = n(594174),
    S = n(203893),
    D = n(777288),
    Z = n(5192),
    L = n(709054),
    R = n(51144),
    I = n(815790),
    P = n(588215),
    M = n(241559),
    V = n(893966),
    E = n(685244),
    T = n(16829),
    k = n(256003),
    A = n(472596),
    B = n(285173),
    U = n(981631),
    F = n(176505),
    z = n(50493),
    q = n(388032),
    G = n(350381);
function Y(e) {
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
function W(e, t) {
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
let X = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, j.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            o = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, r.jsxs)('div', {
            className: G.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(C.ua7, {
                        text: q.intl.string(q.t.QrfVTk),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(C.b6m, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_MUTED.css
                            });
                        }
                    }),
                n &&
                    (0, r.jsx)(C.ua7, {
                        'aria-label': q.intl.string(q.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, r.jsxs)('div', {
                            className: G.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)('div', { children: q.intl.string(q.t['xfJP+v']) }),
                                (0, r.jsx)(f.Z, {
                                    deadline: o,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            ]
                        }),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(C.YlB, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, O.He)(t.userId) &&
                    (0, r.jsx)(C.ua7, {
                        text: q.intl.string(q.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(S.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, h.EY)(t) &&
                    (0, r.jsx)(C.ua7, {
                        text: q.intl.string(q.t.qOVbaW),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(C.ics, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_MUTED.css
                            });
                        }
                    })
            ]
        });
    }),
    J = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            o = (0, u.e7)([H.Z], () => H.Z.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(q.intl.currentLocale).format(a), [a]),
            c = (0, A.vN)(t),
            d = (0, A.vN)(t, !0),
            m = (0, u.e7)([w.Z], () => w.Z.can(U.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: G.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(B.Z, {
                              className: i()(G.roleTooltipItem, G.highestRole),
                              role: n,
                              guildId: t.guildId
                          }),
                      a > 0 &&
                          (0, r.jsx)(C.P3F, {
                              className: G.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(C.ua7, {
                                  text: q.intl.string(q.t.DY6n4u),
                                  children: (e) =>
                                      (0, r.jsxs)(
                                          C.Text,
                                          W(
                                              Y(
                                                  {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-primary'
                                                  },
                                                  e
                                              ),
                                              {
                                                  children: ['+', s]
                                              }
                                          )
                                      )
                              })
                          }),
                      m &&
                          (0, r.jsx)(C.ua7, {
                              text: q.intl.string(q.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, r.jsx)(C.P3F, {
                                      className: i()(G.otherRoles, G.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, r.jsx)(C.qJs, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: G.addRoleIcon,
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    K = l.memo(function (e) {
        var t, n;
        let { member: l, user: o } = e,
            i = (0, y.X7)(null == l ? void 0 : l.guildId, null == l ? void 0 : l.userId, null != (t = null == l ? void 0 : l.colorStrings) ? t : null);
        return null == o || null == l
            ? null
            : (0, r.jsxs)('div', {
                  className: G.memberNameContainer,
                  children: [
                      (0, r.jsx)('div', {
                          className: G.memberAvatar,
                          children: (0, r.jsx)(m.Z, { user: o })
                      }),
                      (0, r.jsx)('div', {
                          className: G.memberName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-sm/medium',
                              children: (0, r.jsxs)('div', {
                                  className: G.nameContainer,
                                  children: [
                                      (0, r.jsx)(C.PUh, {
                                          name: Z.ZP.getName(l.guildId, null, o),
                                          colorString: null != (n = l.colorString) ? n : null,
                                          colorStrings: i,
                                          className: G.memberNameText
                                      }),
                                      (0, r.jsx)(v.ZP, {
                                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                                          userId: null == o ? void 0 : o.id,
                                          contextGuildId: l.guildId,
                                          containerClassName: G.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: G.memberGlobalName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: R.ZP.getUserTag(o)
                          })
                      })
                  ]
              });
    });
function Q(e) {
    return {
        short: null == e ? null : (0, I.fv)(e, I.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(q.intl.currentLocale, I.UG)
    };
}
function $(e) {
    let { member: t, showLongDate: n, isSortedBy: o } = e,
        [i, a] = l.useState(null);
    (l.useEffect(() => {
        a(Q(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, b.Z)(() => {
            a(Q(t.joinedAtTimestamp));
        }, 10000));
    let s = o ? 'text-brand' : 'text-default';
    return (null == i ? void 0 : i.short) == null
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: G.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.Text, {
                    variant: 'text-sm/medium',
                    color: s,
                    children: i.long
                })
            })
          : (0, r.jsx)('div', {
                className: G.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.ua7, {
                    align: 'left',
                    text: i.long,
                    children: (e) =>
                        (0, r.jsx)(
                            C.Text,
                            W(Y({}, e), {
                                variant: 'text-sm/medium',
                                color: s,
                                children: i.short
                            })
                        )
                })
            });
}
let ee = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: o } = e,
            { accountCreationDateShort: i, accountCreationDateLong: a } = l.useMemo(() => {
                let e = L.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, I.fv)(e, I.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(q.intl.currentLocale, I.I)
                };
            }, [t.userId]),
            s = o ? 'text-brand' : 'text-default';
        return n
            ? (0, r.jsx)(C.Text, {
                  variant: 'text-sm/medium',
                  color: s,
                  children: a
              })
            : (0, r.jsx)(C.ua7, {
                  align: 'left',
                  text: a,
                  children: (e) =>
                      (0, r.jsx)(
                          C.Text,
                          W(Y({}, e), {
                              variant: 'text-sm/medium',
                              color: s,
                              children: i
                          })
                      )
              });
    }),
    et = l.memo(function (e) {
        let { member: t, user: n, highestRole: o, isHoldingAdvancedInfoKey: a, onOpenModerationMenu: s, onOpenMemberView: d, compact: m, hasModViewPanelAccess: b } = e,
            p = (0, u.e7)([w.Z, H.Z], () => w.Z.can(U.Plq.MANAGE_GUILD, H.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: f, addUsers: h, removeUser: j } = (0, k.Z)(t.guildId),
            g = (0, M.xC)(t.guildId),
            x = (0, M.hB)(t.guildId, g, t.userId),
            v = (0, u.e7)(
                [V.Z],
                () => {
                    var e;
                    return null != (e = V.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : P.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            O = l.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != t && x && (f.has(t.userId) ? j(t.userId) : h([t.userId])));
                },
                [h, x, t, j, f]
            ),
            y = v === P.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            _ = v === P.d$.ORDER_BY_USER_ID_ASC || v === P.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                g &&
                    (0, r.jsx)(C.ua7, {
                        tooltipClassName: G.disabledActionTooltip,
                        shouldShow: !x,
                        text: q.intl.string(q.t['Se4c7+']),
                        children: (e) =>
                            (0, r.jsx)(
                                'td',
                                W(Y({}, e), {
                                    children: (0, r.jsx)('div', {
                                        className: i()(G.__invalid_checkbox, G.xsmallCol),
                                        children: (0, r.jsx)(C.P3F, {
                                            onClick: O,
                                            children: (0, r.jsx)(C.XZJ, {
                                                type: C.XZJ.Types.INVERTED,
                                                value: f.has(t.userId),
                                                disabled: !x
                                            })
                                        })
                                    })
                                })
                            )
                    }),
                (0, r.jsx)('td', {
                    className: i()({ [G.compact]: m }),
                    children: (0, r.jsx)(K, {
                        member: t,
                        user: n
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(G.smallCol, { [G.compact]: m }),
                    children: (0, r.jsx)($, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: y
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(G.smallCol, { [G.compact]: m }),
                    children: (0, r.jsx)(ee, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: _
                    })
                }),
                p &&
                    (0, r.jsx)('td', {
                        className: i()(G.smallCol, { [G.compact]: m }),
                        children: (0, r.jsx)(T.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, r.jsx)('td', {
                    className: i()(G.mediumCol, { [G.compact]: m }),
                    children: (0, r.jsx)(J, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(G.smallCol, { [G.compact]: m }),
                    children: (0, r.jsx)(X, { member: t })
                }),
                (0, r.jsx)('td', {
                    className: i()(G.smallCol, { [G.compact]: m }),
                    children: (0, r.jsxs)('div', {
                        className: G.actionCell,
                        children: [
                            (0, r.jsx)(C.ua7, {
                                text: b ? q.intl.string(q.t.nHfkf3) : q.intl.string(q.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: d,
                                        className: G.button,
                                        children: b
                                            ? (0, r.jsx)(D.Z, {
                                                  width: en,
                                                  height: en
                                              })
                                            : (0, r.jsx)(C.tBG, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: en,
                                                  height: en
                                              })
                                    });
                                }
                            }),
                            (0, r.jsx)(C.ua7, {
                                text: q.intl.string(q.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: G.button,
                                        children: (0, r.jsx)(C.Huf, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: en,
                                            height: en
                                        })
                                    });
                                }
                            })
                        ]
                    })
                })
            ]
        });
    }),
    en = 18,
    er = ['sourceInviteCode', 'joinSourceType', 'inviterId', 'integrationType', 'joinedAt', 'joinedAtTimestamp'],
    el = l.memo(function (e) {
        let { userId: t, guildId: n, style: o, rowSelected: s, isLoading: d = !1, isHoldingAdvancedInfoKey: C = !1, compact: m = !1 } = e,
            { analyticsLocations: b } = (0, p.ZP)(),
            f = (0, u.e7)([_.ZP], () => _.ZP.getGuildSidebarState(n), [n]),
            h = (null == f ? void 0 : f.details.userId) === t,
            j = (0, u.e7)([V.Z], () => V.Z.getEnhancedMember(n, t), [n, t]),
            v = (0, A.zq)(j),
            O = (0, u.e7)([N.default], () => N.default.getUser(t), [t]),
            y = (0, x.m)(n),
            H = (0, A.RN)(null != j ? j : void 0),
            w = l.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), H(e));
                },
                [H]
            ),
            S = l.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != j && (0, A.RE)(j, b));
                },
                [j, b]
            ),
            D = l.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != j && (y ? (0, g.r)(j.guildId, j.userId, F.oC.MEMBER_SAFETY, { modViewPanel: z.k.INFO }) : (0, A.RE)(j, b)));
                },
                [j, b, y]
            ),
            Z = l.useCallback((e, t) => c()((0, a.omit)(e, er), (0, a.omit)(t, er)), []);
        return null == j
            ? null
            : (0, r.jsx)(E.Z, {
                  role: 'row',
                  value: j,
                  style: o,
                  className: i()(G.roundedRow, G.memberRowContainer, s && G.selected, h && G.memberSelected, d && G.loading),
                  equalityFn: Z,
                  onClick: S,
                  onContextMenu: w,
                  children: (0, r.jsx)(et, {
                      member: j,
                      user: O,
                      highestRole: v,
                      isHoldingAdvancedInfoKey: C,
                      onOpenModerationMenu: w,
                      onOpenMemberView: D,
                      compact: m,
                      hasModViewPanelAccess: y
                  })
              });
    });
