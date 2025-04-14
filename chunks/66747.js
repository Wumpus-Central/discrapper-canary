n.d(t, { Z: () => et }), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(392711),
    s = n(498607),
    c = n.n(s),
    u = n(399606),
    C = n(692547),
    d = n(481060),
    m = n(700582),
    b = n(745735),
    p = n(906732),
    f = n(979264),
    h = n(346486),
    j = n(715903),
    g = n(69882),
    x = n(189357),
    O = n(493892),
    y = n(884902),
    v = n(433355),
    N = n(430824),
    _ = n(496675),
    H = n(594174),
    w = n(203893),
    S = n(777288),
    D = n(5192),
    Z = n(709054),
    L = n(51144),
    R = n(815790),
    P = n(588215),
    I = n(241559),
    M = n(893966),
    V = n(685244),
    E = n(16829),
    k = n(256003),
    T = n(472596),
    A = n(285173),
    W = n(981631),
    B = n(388032),
    U = n(350381);
function F(e) {
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
function z(e, t) {
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
let q = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, g.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            o = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, r.jsxs)('div', {
            className: U.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(d.ua7, {
                        text: B.NW.string(B.t.QrfVTk),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(d.b6m, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: C.Z.colors.TEXT_MUTED.css
                            });
                        }
                    }),
                n &&
                    (0, r.jsx)(d.ua7, {
                        'aria-label': B.NW.string(B.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, r.jsxs)('div', {
                            className: U.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)('div', { children: B.NW.string(B.t['xfJP+v']) }),
                                (0, r.jsx)(h.Z, {
                                    deadline: o,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            ]
                        }),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(d.YlB, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: C.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, O.He)(t.userId) &&
                    (0, r.jsx)(d.ua7, {
                        text: B.NW.string(B.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(w.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: C.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, j.EY)(t) &&
                    (0, r.jsx)(d.ua7, {
                        text: B.NW.string(B.t.qOVbaW),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(d.ics, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: C.Z.colors.TEXT_MUTED.css
                            });
                        }
                    })
            ]
        });
    }),
    G = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            o = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(B.NW.currentLocale).format(a), [a]),
            c = (0, T.vN)(t),
            C = (0, T.vN)(t, !0),
            m = (0, u.e7)([_.Z], () => _.Z.can(W.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: U.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(A.Z, {
                              className: i()(U.roleTooltipItem, U.highestRole),
                              role: n,
                              guildId: t.guildId
                          }),
                      a > 0 &&
                          (0, r.jsx)(d.P3F, {
                              className: U.otherRoles,
                              onClick: (e) => C(e),
                              children: (0, r.jsx)(d.ua7, {
                                  text: B.NW.string(B.t.DY6n4u),
                                  children: (e) =>
                                      (0, r.jsxs)(
                                          d.Text,
                                          z(
                                              F(
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
                          (0, r.jsx)(d.ua7, {
                              text: B.NW.string(B.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, r.jsx)(d.P3F, {
                                      className: i()(U.otherRoles, U.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, r.jsx)(d.qJs, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: U.addRoleIcon,
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    Y = l.memo(function (e) {
        var t;
        let { member: n, user: o } = e,
            { analyticsLocations: i } = (0, p.ZP)(),
            a = l.useCallback(
                (e) => {
                    null != n && (e.stopPropagation(), e.preventDefault(), (0, T.RE)(n, i));
                },
                [n, i]
            ),
            s = (0, y.X)(null == n ? void 0 : n.guildId, null == n ? void 0 : n.colorStrings);
        return null == o || null == n
            ? null
            : (0, r.jsxs)('div', {
                  className: U.memberNameContainer,
                  children: [
                      (0, r.jsx)(d.P3F, {
                          className: U.memberAvatar,
                          onClick: a,
                          children: (0, r.jsx)(m.Z, { user: o })
                      }),
                      (0, r.jsx)('div', {
                          className: U.memberName,
                          children: (0, r.jsx)(d.Text, {
                              variant: 'text-sm/medium',
                              children: (0, r.jsxs)(d.P3F, {
                                  onClick: a,
                                  className: U.nameContainer,
                                  children: [
                                      (0, r.jsx)(d.PUh, {
                                          name: D.ZP.getName(n.guildId, null, o),
                                          color: null != (t = n.colorString) ? t : void 0,
                                          roleColors: s,
                                          className: U.memberNameText
                                      }),
                                      (0, r.jsx)(f.ZP, {
                                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                                          userId: null == o ? void 0 : o.id,
                                          contextGuildId: n.guildId,
                                          containerClassName: U.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: U.memberGlobalName,
                          children: (0, r.jsx)(d.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, r.jsx)(d.P3F, {
                                  onClick: a,
                                  tag: 'span',
                                  children: L.ZP.getUserTag(o)
                              })
                          })
                      })
                  ]
              });
    });
function X(e) {
    return {
        short: null == e ? null : (0, R.fv)(e, R.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(B.NW.currentLocale, R.UG)
    };
}
function J(e) {
    let { member: t, showLongDate: n, isSortedBy: o } = e,
        [i, a] = l.useState(null);
    l.useEffect(() => {
        a(X(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, b.Z)(() => {
            a(X(t.joinedAtTimestamp));
        }, 10000);
    let s = o ? 'text-brand' : 'text-normal';
    return (null == i ? void 0 : i.short) == null
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: U.__invalid_joinedAtContainer,
                children: (0, r.jsx)(d.Text, {
                    variant: 'text-sm/medium',
                    color: s,
                    children: i.long
                })
            })
          : (0, r.jsx)('div', {
                className: U.__invalid_joinedAtContainer,
                children: (0, r.jsx)(d.ua7, {
                    align: 'left',
                    text: i.long,
                    children: (e) =>
                        (0, r.jsx)(
                            d.Text,
                            z(F({}, e), {
                                variant: 'text-sm/medium',
                                color: s,
                                children: i.short
                            })
                        )
                })
            });
}
let K = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: o } = e,
            { accountCreationDateShort: i, accountCreationDateLong: a } = l.useMemo(() => {
                let e = Z.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, R.fv)(e, R.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(B.NW.currentLocale, R.I)
                };
            }, [t.userId]),
            s = o ? 'text-brand' : 'text-normal';
        return n
            ? (0, r.jsx)(d.Text, {
                  variant: 'text-sm/medium',
                  color: s,
                  children: a
              })
            : (0, r.jsx)(d.ua7, {
                  align: 'left',
                  text: a,
                  children: (e) =>
                      (0, r.jsx)(
                          d.Text,
                          z(F({}, e), {
                              variant: 'text-sm/medium',
                              color: s,
                              children: i
                          })
                      )
              });
    }),
    Q = l.memo(function (e) {
        let { member: t, user: n, highestRole: o, isHoldingAdvancedInfoKey: a, onOpenModerationMenu: s, onOpenProfileMenu: C, compact: m } = e,
            b = (0, u.e7)([_.Z, N.Z], () => _.Z.can(W.Plq.MANAGE_GUILD, N.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: p, addUsers: f, removeUser: h } = (0, k.Z)(t.guildId),
            j = (0, I.xC)(t.guildId),
            g = (0, I.hB)(t.guildId, j, t.userId),
            O = (0, x.m)(t.guildId),
            y = (0, u.e7)(
                [M.Z],
                () => {
                    var e;
                    return null != (e = M.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : P.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            v = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != t && g && (p.has(t.userId) ? h(t.userId) : f([t.userId]));
                },
                [f, g, t, h, p]
            ),
            H = y === P.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            w = y === P.d$.ORDER_BY_USER_ID_ASC || y === P.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                j &&
                    (0, r.jsx)(d.ua7, {
                        tooltipClassName: U.disabledActionTooltip,
                        shouldShow: !g,
                        text: B.NW.string(B.t['Se4c7+']),
                        children: (e) =>
                            (0, r.jsx)(
                                'td',
                                z(F({}, e), {
                                    children: (0, r.jsx)('div', {
                                        className: i()(U.__invalid_checkbox, U.xsmallCol),
                                        children: (0, r.jsx)(d.P3F, {
                                            onClick: v,
                                            children: (0, r.jsx)(d.XZJ, {
                                                type: d.XZJ.Types.INVERTED,
                                                value: p.has(t.userId),
                                                disabled: !g
                                            })
                                        })
                                    })
                                })
                            )
                    }),
                (0, r.jsx)('td', {
                    className: i()({ [U.compact]: m }),
                    children: (0, r.jsx)(Y, {
                        member: t,
                        user: n
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsx)(J, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: H
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsx)(K, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: w
                    })
                }),
                b &&
                    (0, r.jsx)('td', {
                        className: i()(U.smallCol, { [U.compact]: m }),
                        children: (0, r.jsx)(E.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, r.jsx)('td', {
                    className: i()(U.mediumCol, { [U.compact]: m }),
                    children: (0, r.jsx)(G, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsx)(q, { member: t })
                }),
                (0, r.jsx)('td', {
                    className: i()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsxs)('div', {
                        className: U.actionCell,
                        children: [
                            (0, r.jsx)(d.ua7, {
                                text: O ? B.NW.string(B.t.nHfkf3) : B.NW.string(B.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(d.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: C,
                                        className: U.button,
                                        children: O
                                            ? (0, r.jsx)(S.Z, {
                                                  width: $,
                                                  height: $
                                              })
                                            : (0, r.jsx)(d.tBG, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: $,
                                                  height: $
                                              })
                                    });
                                }
                            }),
                            (0, r.jsx)(d.ua7, {
                                text: B.NW.string(B.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(d.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: U.button,
                                        children: (0, r.jsx)(d.Huf, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: $,
                                            height: $
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
    $ = 18,
    ee = ['sourceInviteCode', 'joinSourceType', 'inviterId', 'integrationType', 'joinedAt', 'joinedAtTimestamp'],
    et = l.memo(function (e) {
        let { userId: t, guildId: n, style: o, onSelect: s, rowSelected: C, isLoading: d = !1, isHoldingAdvancedInfoKey: m = !1, compact: b = !1 } = e,
            p = (0, u.e7)([v.ZP], () => v.ZP.getGuildSidebarState(n), [n]),
            f = (null == p ? void 0 : p.details.userId) === t,
            h = (0, u.e7)([M.Z], () => M.Z.getEnhancedMember(n, t), [n, t]),
            j = (0, T.zq)(h),
            g = (0, u.e7)([H.default], () => H.default.getUser(t), [t]),
            x = (0, T.RN)(null != h ? h : void 0),
            O = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), x(e);
                },
                [x]
            ),
            y = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (null == s || s(h));
                },
                [s, h]
            ),
            N = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (null == s || s(h));
                },
                [h, s]
            ),
            _ = l.useCallback((e, t) => c()((0, a.omit)(e, ee), (0, a.omit)(t, ee)), []);
        return null == h
            ? null
            : (0, r.jsx)(V.Z, {
                  role: 'row',
                  value: h,
                  style: o,
                  className: i()(U.roundedRow, U.memberRowContainer, C && U.selected, f && U.memberSelected, d && U.loading),
                  equalityFn: _,
                  onClick: y,
                  onContextMenu: O,
                  children: (0, r.jsx)(Q, {
                      member: h,
                      user: g,
                      highestRole: j,
                      isHoldingAdvancedInfoKey: m,
                      onOpenModerationMenu: O,
                      onOpenProfileMenu: N,
                      compact: b
                  })
              });
    });
