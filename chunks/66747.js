n.d(t, { Z: () => et }), n(388685);
var r = n(200651),
    l = n(192379),
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
    f = n(979264),
    h = n(346486),
    j = n(715903),
    g = n(69882),
    x = n(189357),
    v = n(493892),
    O = n(884902),
    y = n(433355),
    _ = n(430824),
    H = n(496675),
    w = n(594174),
    N = n(203893),
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
    T = n(256003),
    k = n(472596),
    A = n(285173),
    B = n(981631),
    U = n(388032),
    F = n(350381);
function z(e) {
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
function q(e, t) {
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
let G = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, g.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            o = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, r.jsxs)('div', {
            className: F.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(C.ua7, {
                        text: U.intl.string(U.t.QrfVTk),
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
                        'aria-label': U.intl.string(U.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, r.jsxs)('div', {
                            className: F.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)('div', { children: U.intl.string(U.t['xfJP+v']) }),
                                (0, r.jsx)(h.Z, {
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
                (0, v.He)(t.userId) &&
                    (0, r.jsx)(C.ua7, {
                        text: U.intl.string(U.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(N.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, j.EY)(t) &&
                    (0, r.jsx)(C.ua7, {
                        text: U.intl.string(U.t.qOVbaW),
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
    Y = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            o = (0, u.e7)([_.Z], () => _.Z.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(U.intl.currentLocale).format(a), [a]),
            c = (0, k.vN)(t),
            d = (0, k.vN)(t, !0),
            m = (0, u.e7)([H.Z], () => H.Z.can(B.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: F.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(A.Z, {
                              className: i()(F.roleTooltipItem, F.highestRole),
                              role: n,
                              guildId: t.guildId
                          }),
                      a > 0 &&
                          (0, r.jsx)(C.P3F, {
                              className: F.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(C.ua7, {
                                  text: U.intl.string(U.t.DY6n4u),
                                  children: (e) =>
                                      (0, r.jsxs)(
                                          C.Text,
                                          q(
                                              z(
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
                              text: U.intl.string(U.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, r.jsx)(C.P3F, {
                                      className: i()(F.otherRoles, F.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, r.jsx)(C.qJs, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: F.addRoleIcon,
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    W = l.memo(function (e) {
        var t;
        let { member: n, user: o } = e,
            { analyticsLocations: i } = (0, p.ZP)(),
            a = l.useCallback(
                (e) => {
                    null != n && (e.stopPropagation(), e.preventDefault(), (0, k.RE)(n, i));
                },
                [n, i]
            ),
            s = (0, O.X)(null == n ? void 0 : n.guildId, null == n ? void 0 : n.colorStrings);
        return null == o || null == n
            ? null
            : (0, r.jsxs)('div', {
                  className: F.memberNameContainer,
                  children: [
                      (0, r.jsx)(C.P3F, {
                          className: F.memberAvatar,
                          onClick: a,
                          children: (0, r.jsx)(m.Z, { user: o })
                      }),
                      (0, r.jsx)('div', {
                          className: F.memberName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-sm/medium',
                              children: (0, r.jsxs)(C.P3F, {
                                  onClick: a,
                                  className: F.nameContainer,
                                  children: [
                                      (0, r.jsx)(C.PUh, {
                                          name: D.ZP.getName(n.guildId, null, o),
                                          color: null != (t = n.colorString) ? t : void 0,
                                          roleColors: s,
                                          className: F.memberNameText
                                      }),
                                      (0, r.jsx)(f.ZP, {
                                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                                          userId: null == o ? void 0 : o.id,
                                          contextGuildId: n.guildId,
                                          containerClassName: F.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: F.memberGlobalName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, r.jsx)(C.P3F, {
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
        long: new Date(null != e ? e : 0).toLocaleDateString(U.intl.currentLocale, R.UG)
    };
}
function K(e) {
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
                className: F.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.Text, {
                    variant: 'text-sm/medium',
                    color: s,
                    children: i.long
                })
            })
          : (0, r.jsx)('div', {
                className: F.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.ua7, {
                    align: 'left',
                    text: i.long,
                    children: (e) =>
                        (0, r.jsx)(
                            C.Text,
                            q(z({}, e), {
                                variant: 'text-sm/medium',
                                color: s,
                                children: i.short
                            })
                        )
                })
            });
}
let J = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: o } = e,
            { accountCreationDateShort: i, accountCreationDateLong: a } = l.useMemo(() => {
                let e = Z.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, R.fv)(e, R.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(U.intl.currentLocale, R.I)
                };
            }, [t.userId]),
            s = o ? 'text-brand' : 'text-normal';
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
                          q(z({}, e), {
                              variant: 'text-sm/medium',
                              color: s,
                              children: i
                          })
                      )
              });
    }),
    Q = l.memo(function (e) {
        let { member: t, user: n, highestRole: o, isHoldingAdvancedInfoKey: a, onOpenModerationMenu: s, onOpenProfileMenu: d, compact: m } = e,
            b = (0, u.e7)([H.Z, _.Z], () => H.Z.can(B.Plq.MANAGE_GUILD, _.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: p, addUsers: f, removeUser: h } = (0, T.Z)(t.guildId),
            j = (0, I.xC)(t.guildId),
            g = (0, I.hB)(t.guildId, j, t.userId),
            v = (0, x.m)(t.guildId),
            O = (0, u.e7)(
                [M.Z],
                () => {
                    var e;
                    return null != (e = M.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : P.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            y = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != t && g && (p.has(t.userId) ? h(t.userId) : f([t.userId]));
                },
                [f, g, t, h, p]
            ),
            w = O === P.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            N = O === P.d$.ORDER_BY_USER_ID_ASC || O === P.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                j &&
                    (0, r.jsx)(C.ua7, {
                        tooltipClassName: F.disabledActionTooltip,
                        shouldShow: !g,
                        text: U.intl.string(U.t['Se4c7+']),
                        children: (e) =>
                            (0, r.jsx)(
                                'td',
                                q(z({}, e), {
                                    children: (0, r.jsx)('div', {
                                        className: i()(F.__invalid_checkbox, F.xsmallCol),
                                        children: (0, r.jsx)(C.P3F, {
                                            onClick: y,
                                            children: (0, r.jsx)(C.XZJ, {
                                                type: C.XZJ.Types.INVERTED,
                                                value: p.has(t.userId),
                                                disabled: !g
                                            })
                                        })
                                    })
                                })
                            )
                    }),
                (0, r.jsx)('td', {
                    className: i()({ [F.compact]: m }),
                    children: (0, r.jsx)(W, {
                        member: t,
                        user: n
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(F.smallCol, { [F.compact]: m }),
                    children: (0, r.jsx)(K, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: w
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(F.smallCol, { [F.compact]: m }),
                    children: (0, r.jsx)(J, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: N
                    })
                }),
                b &&
                    (0, r.jsx)('td', {
                        className: i()(F.smallCol, { [F.compact]: m }),
                        children: (0, r.jsx)(E.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, r.jsx)('td', {
                    className: i()(F.mediumCol, { [F.compact]: m }),
                    children: (0, r.jsx)(Y, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, r.jsx)('td', {
                    className: i()(F.smallCol, { [F.compact]: m }),
                    children: (0, r.jsx)(G, { member: t })
                }),
                (0, r.jsx)('td', {
                    className: i()(F.smallCol, { [F.compact]: m }),
                    children: (0, r.jsxs)('div', {
                        className: F.actionCell,
                        children: [
                            (0, r.jsx)(C.ua7, {
                                text: v ? U.intl.string(U.t.nHfkf3) : U.intl.string(U.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: d,
                                        className: F.button,
                                        children: v
                                            ? (0, r.jsx)(S.Z, {
                                                  width: $,
                                                  height: $
                                              })
                                            : (0, r.jsx)(C.tBG, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: $,
                                                  height: $
                                              })
                                    });
                                }
                            }),
                            (0, r.jsx)(C.ua7, {
                                text: U.intl.string(U.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: F.button,
                                        children: (0, r.jsx)(C.Huf, {
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
        let { userId: t, guildId: n, style: o, onSelect: s, rowSelected: d, isLoading: C = !1, isHoldingAdvancedInfoKey: m = !1, compact: b = !1 } = e,
            p = (0, u.e7)([y.ZP], () => y.ZP.getGuildSidebarState(n), [n]),
            f = (null == p ? void 0 : p.details.userId) === t,
            h = (0, u.e7)([M.Z], () => M.Z.getEnhancedMember(n, t), [n, t]),
            j = (0, k.zq)(h),
            g = (0, u.e7)([w.default], () => w.default.getUser(t), [t]),
            x = (0, k.RN)(null != h ? h : void 0),
            v = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), x(e);
                },
                [x]
            ),
            O = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (null == s || s(h));
                },
                [s, h]
            ),
            _ = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (null == s || s(h));
                },
                [h, s]
            ),
            H = l.useCallback((e, t) => c()((0, a.omit)(e, ee), (0, a.omit)(t, ee)), []);
        return null == h
            ? null
            : (0, r.jsx)(V.Z, {
                  role: 'row',
                  value: h,
                  style: o,
                  className: i()(F.roundedRow, F.memberRowContainer, d && F.selected, f && F.memberSelected, C && F.loading),
                  equalityFn: H,
                  onClick: O,
                  onContextMenu: v,
                  children: (0, r.jsx)(Q, {
                      member: h,
                      user: g,
                      highestRole: j,
                      isHoldingAdvancedInfoKey: m,
                      onOpenModerationMenu: v,
                      onOpenProfileMenu: _,
                      compact: b
                  })
              });
    });
