n.d(t, { Z: () => et }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(392711),
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
    y = n(493892),
    v = n(884902),
    O = n(433355),
    N = n(430824),
    _ = n(496675),
    H = n(594174),
    w = n(203893),
    S = n(777288),
    D = n(5192),
    Z = n(709054),
    R = n(51144),
    L = n(815790),
    I = n(588215),
    P = n(241559),
    M = n(893966),
    V = n(685244),
    E = n(16829),
    T = n(256003),
    k = n(472596),
    A = n(285173),
    B = n(981631),
    W = n(388032),
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
                    (0, r.jsx)(C.ua7, {
                        text: W.NW.string(W.t.QrfVTk),
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
                        'aria-label': W.NW.string(W.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, r.jsxs)('div', {
                            className: U.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)('div', { children: W.NW.string(W.t['xfJP+v']) }),
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
                (0, y.He)(t.userId) &&
                    (0, r.jsx)(C.ua7, {
                        text: W.NW.string(W.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(w.Z, {
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
                        text: W.NW.string(W.t.qOVbaW),
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
    G = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            o = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]),
            i = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(W.NW.currentLocale).format(i), [i]),
            c = (0, k.vN)(t),
            d = (0, k.vN)(t, !0),
            m = (0, u.e7)([_.Z], () => _.Z.can(B.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: U.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(A.Z, {
                              className: a()(U.roleTooltipItem, U.highestRole),
                              role: n,
                              guildId: t.guildId
                          }),
                      i > 0 &&
                          (0, r.jsx)(C.P3F, {
                              className: U.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(C.ua7, {
                                  text: W.NW.string(W.t.DY6n4u),
                                  children: (e) =>
                                      (0, r.jsxs)(
                                          C.Text,
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
                          (0, r.jsx)(C.ua7, {
                              text: W.NW.string(W.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, r.jsx)(C.P3F, {
                                      className: a()(U.otherRoles, U.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, r.jsx)(C.qJs, {
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
            { analyticsLocations: a } = (0, p.ZP)(),
            i = l.useCallback(
                (e) => {
                    null != n && (e.stopPropagation(), e.preventDefault(), (0, k.RE)(n, a));
                },
                [n, a]
            ),
            s = (0, v.E)(null == n ? void 0 : n.guildId, null == n ? void 0 : n.colorStrings);
        return null == o || null == n
            ? null
            : (0, r.jsxs)('div', {
                  className: U.memberNameContainer,
                  children: [
                      (0, r.jsx)(C.P3F, {
                          className: U.memberAvatar,
                          onClick: i,
                          children: (0, r.jsx)(m.Z, { user: o })
                      }),
                      (0, r.jsx)('div', {
                          className: U.memberName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-sm/medium',
                              children: (0, r.jsxs)(C.P3F, {
                                  onClick: i,
                                  className: U.nameContainer,
                                  children: [
                                      (0, r.jsx)(C.PUh, {
                                          name: D.ZP.getName(n.guildId, null, o),
                                          color: null != (t = n.colorString) ? t : void 0,
                                          roleGradient: s,
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
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, r.jsx)(C.P3F, {
                                  onClick: i,
                                  tag: 'span',
                                  children: R.ZP.getUserTag(o)
                              })
                          })
                      })
                  ]
              });
    });
function K(e) {
    return {
        short: null == e ? null : (0, L.fv)(e, L.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(W.NW.currentLocale, L.UG)
    };
}
function X(e) {
    let { member: t, showLongDate: n, isSortedBy: o } = e,
        [a, i] = l.useState(null);
    l.useEffect(() => {
        i(K(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, b.Z)(() => {
            i(K(t.joinedAtTimestamp));
        }, 10000);
    let s = o ? 'text-brand' : 'text-normal';
    return (null == a ? void 0 : a.short) == null
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: U.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.Text, {
                    variant: 'text-sm/medium',
                    color: s,
                    children: a.long
                })
            })
          : (0, r.jsx)('div', {
                className: U.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.ua7, {
                    align: 'left',
                    text: a.long,
                    children: (e) =>
                        (0, r.jsx)(
                            C.Text,
                            z(F({}, e), {
                                variant: 'text-sm/medium',
                                color: s,
                                children: a.short
                            })
                        )
                })
            });
}
let J = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: o } = e,
            { accountCreationDateShort: a, accountCreationDateLong: i } = l.useMemo(() => {
                let e = Z.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, L.fv)(e, L.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(W.NW.currentLocale, L.I)
                };
            }, [t.userId]),
            s = o ? 'text-brand' : 'text-normal';
        return n
            ? (0, r.jsx)(C.Text, {
                  variant: 'text-sm/medium',
                  color: s,
                  children: i
              })
            : (0, r.jsx)(C.ua7, {
                  align: 'left',
                  text: i,
                  children: (e) =>
                      (0, r.jsx)(
                          C.Text,
                          z(F({}, e), {
                              variant: 'text-sm/medium',
                              color: s,
                              children: a
                          })
                      )
              });
    }),
    Q = l.memo(function (e) {
        let { member: t, user: n, highestRole: o, isHoldingAdvancedInfoKey: i, onOpenModerationMenu: s, onOpenProfileMenu: d, compact: m } = e,
            b = (0, u.e7)([_.Z, N.Z], () => _.Z.can(B.Plq.MANAGE_GUILD, N.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: p, addUsers: f, removeUser: h } = (0, T.Z)(t.guildId),
            j = (0, P.xC)(t.guildId),
            g = (0, P.hB)(t.guildId, j, t.userId),
            y = (0, x.m)(t.guildId),
            v = (0, u.e7)(
                [M.Z],
                () => {
                    var e;
                    return null != (e = M.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : I.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            O = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != t && g && (p.has(t.userId) ? h(t.userId) : f([t.userId]));
                },
                [f, g, t, h, p]
            ),
            H = v === I.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            w = v === I.d$.ORDER_BY_USER_ID_ASC || v === I.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                j &&
                    (0, r.jsx)(C.ua7, {
                        tooltipClassName: U.disabledActionTooltip,
                        shouldShow: !g,
                        text: W.NW.string(W.t['Se4c7+']),
                        children: (e) =>
                            (0, r.jsx)(
                                'td',
                                z(F({}, e), {
                                    children: (0, r.jsx)('div', {
                                        className: a()(U.__invalid_checkbox, U.xsmallCol),
                                        children: (0, r.jsx)(C.P3F, {
                                            onClick: O,
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
                    className: a()({ [U.compact]: m }),
                    children: (0, r.jsx)(Y, {
                        member: t,
                        user: n
                    })
                }),
                (0, r.jsx)('td', {
                    className: a()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsx)(X, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: H
                    })
                }),
                (0, r.jsx)('td', {
                    className: a()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsx)(J, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: w
                    })
                }),
                b &&
                    (0, r.jsx)('td', {
                        className: a()(U.smallCol, { [U.compact]: m }),
                        children: (0, r.jsx)(E.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, r.jsx)('td', {
                    className: a()(U.mediumCol, { [U.compact]: m }),
                    children: (0, r.jsx)(G, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, r.jsx)('td', {
                    className: a()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsx)(q, { member: t })
                }),
                (0, r.jsx)('td', {
                    className: a()(U.smallCol, { [U.compact]: m }),
                    children: (0, r.jsxs)('div', {
                        className: U.actionCell,
                        children: [
                            (0, r.jsx)(C.ua7, {
                                text: y ? W.NW.string(W.t.nHfkf3) : W.NW.string(W.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: d,
                                        className: U.button,
                                        children: y
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
                                text: W.NW.string(W.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: U.button,
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
            p = (0, u.e7)([O.ZP], () => O.ZP.getGuildSidebarState(n), [n]),
            f = (null == p ? void 0 : p.details.userId) === t,
            h = (0, u.e7)([M.Z], () => M.Z.getEnhancedMember(n, t), [n, t]),
            j = (0, k.zq)(h),
            g = (0, u.e7)([H.default], () => H.default.getUser(t), [t]),
            x = (0, k.RN)(null != h ? h : void 0),
            y = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), x(e);
                },
                [x]
            ),
            v = l.useCallback(
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
            _ = l.useCallback((e, t) => c()((0, i.omit)(e, ee), (0, i.omit)(t, ee)), []);
        return null == h
            ? null
            : (0, r.jsx)(V.Z, {
                  role: 'row',
                  value: h,
                  style: o,
                  className: a()(U.roundedRow, U.memberRowContainer, d && U.selected, f && U.memberSelected, C && U.loading),
                  equalityFn: _,
                  onClick: v,
                  onContextMenu: y,
                  children: (0, r.jsx)(Q, {
                      member: h,
                      user: g,
                      highestRole: j,
                      isHoldingAdvancedInfoKey: m,
                      onOpenModerationMenu: y,
                      onOpenProfileMenu: N,
                      compact: b
                  })
              });
    });
