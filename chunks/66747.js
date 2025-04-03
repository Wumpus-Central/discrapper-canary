n.d(t, { Z: () => ee }), n(47120);
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
    v = n(433355),
    O = n(430824),
    N = n(496675),
    _ = n(594174),
    H = n(203893),
    w = n(777288),
    S = n(5192),
    D = n(709054),
    Z = n(51144),
    R = n(815790),
    L = n(588215),
    I = n(241559),
    P = n(893966),
    M = n(685244),
    V = n(16829),
    E = n(256003),
    T = n(472596),
    k = n(285173),
    A = n(981631),
    B = n(388032),
    W = n(350381);
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
function F(e, t) {
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
let z = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, g.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            o = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, r.jsxs)('div', {
            className: W.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(C.ua7, {
                        text: B.NW.string(B.t.QrfVTk),
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
                        'aria-label': B.NW.string(B.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, r.jsxs)('div', {
                            className: W.communicationDisabledTooltip,
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
                        text: B.NW.string(B.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(H.Z, {
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
                        text: B.NW.string(B.t.qOVbaW),
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
    q = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            o = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]),
            i = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(B.NW.currentLocale).format(i), [i]),
            c = (0, T.vN)(t),
            d = (0, T.vN)(t, !0),
            m = (0, u.e7)([N.Z], () => N.Z.can(A.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: W.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(k.Z, {
                              className: a()(W.roleTooltipItem, W.highestRole),
                              role: n,
                              guildId: t.guildId
                          }),
                      i > 0 &&
                          (0, r.jsx)(C.P3F, {
                              className: W.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(C.ua7, {
                                  text: B.NW.string(B.t.DY6n4u),
                                  children: (e) =>
                                      (0, r.jsxs)(
                                          C.Text,
                                          F(
                                              U(
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
                              text: B.NW.string(B.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, r.jsx)(C.P3F, {
                                      className: a()(W.otherRoles, W.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, r.jsx)(C.qJs, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: W.addRoleIcon,
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    G = l.memo(function (e) {
        var t;
        let { member: n, user: o } = e,
            { analyticsLocations: a } = (0, p.ZP)(),
            i = l.useCallback(
                (e) => {
                    null != n && (e.stopPropagation(), e.preventDefault(), (0, T.RE)(n, a));
                },
                [n, a]
            );
        return null == o || null == n
            ? null
            : (0, r.jsxs)('div', {
                  className: W.memberNameContainer,
                  children: [
                      (0, r.jsx)(C.P3F, {
                          className: W.memberAvatar,
                          onClick: i,
                          children: (0, r.jsx)(m.Z, { user: o })
                      }),
                      (0, r.jsx)('div', {
                          className: W.memberName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-sm/medium',
                              children: (0, r.jsxs)(C.P3F, {
                                  onClick: i,
                                  className: W.nameContainer,
                                  children: [
                                      (0, r.jsx)(C.PUh, {
                                          name: S.ZP.getName(n.guildId, null, o),
                                          color: null != (t = n.colorString) ? t : void 0,
                                          className: W.memberNameText
                                      }),
                                      (0, r.jsx)(f.ZP, {
                                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                                          userId: null == o ? void 0 : o.id,
                                          contextGuildId: n.guildId,
                                          containerClassName: W.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, r.jsx)('div', {
                          className: W.memberGlobalName,
                          children: (0, r.jsx)(C.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, r.jsx)(C.P3F, {
                                  onClick: i,
                                  tag: 'span',
                                  children: Z.ZP.getUserTag(o)
                              })
                          })
                      })
                  ]
              });
    });
function Y(e) {
    return {
        short: null == e ? null : (0, R.fv)(e, R.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(B.NW.currentLocale, R.UG)
    };
}
function K(e) {
    let { member: t, showLongDate: n, isSortedBy: o } = e,
        [a, i] = l.useState(null);
    l.useEffect(() => {
        i(Y(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, b.Z)(() => {
            i(Y(t.joinedAtTimestamp));
        }, 10000);
    let s = o ? 'text-brand' : 'text-normal';
    return (null == a ? void 0 : a.short) == null
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: W.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.Text, {
                    variant: 'text-sm/medium',
                    color: s,
                    children: a.long
                })
            })
          : (0, r.jsx)('div', {
                className: W.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.ua7, {
                    align: 'left',
                    text: a.long,
                    children: (e) =>
                        (0, r.jsx)(
                            C.Text,
                            F(U({}, e), {
                                variant: 'text-sm/medium',
                                color: s,
                                children: a.short
                            })
                        )
                })
            });
}
let X = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: o } = e,
            { accountCreationDateShort: a, accountCreationDateLong: i } = l.useMemo(() => {
                let e = D.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, R.fv)(e, R.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(B.NW.currentLocale, R.I)
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
                          F(U({}, e), {
                              variant: 'text-sm/medium',
                              color: s,
                              children: a
                          })
                      )
              });
    }),
    J = l.memo(function (e) {
        let { member: t, user: n, highestRole: o, isHoldingAdvancedInfoKey: i, onOpenModerationMenu: s, onOpenProfileMenu: d, compact: m } = e,
            b = (0, u.e7)([N.Z, O.Z], () => N.Z.can(A.Plq.MANAGE_GUILD, O.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: p, addUsers: f, removeUser: h } = (0, E.Z)(t.guildId),
            j = (0, I.xC)(t.guildId),
            g = (0, I.hB)(t.guildId, j, t.userId),
            y = (0, x.m)(t.guildId),
            v = (0, u.e7)(
                [P.Z],
                () => {
                    var e;
                    return null != (e = P.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : L.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            _ = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != t && g && (p.has(t.userId) ? h(t.userId) : f([t.userId]));
                },
                [f, g, t, h, p]
            ),
            H = v === L.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            S = v === L.d$.ORDER_BY_USER_ID_ASC || v === L.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                j &&
                    (0, r.jsx)(C.ua7, {
                        tooltipClassName: W.disabledActionTooltip,
                        shouldShow: !g,
                        text: B.NW.string(B.t['Se4c7+']),
                        children: (e) =>
                            (0, r.jsx)(
                                'td',
                                F(U({}, e), {
                                    children: (0, r.jsx)('div', {
                                        className: a()(W.__invalid_checkbox, W.xsmallCol),
                                        children: (0, r.jsx)(C.P3F, {
                                            onClick: _,
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
                    className: a()({ [W.compact]: m }),
                    children: (0, r.jsx)(G, {
                        member: t,
                        user: n
                    })
                }),
                (0, r.jsx)('td', {
                    className: a()(W.smallCol, { [W.compact]: m }),
                    children: (0, r.jsx)(K, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: H
                    })
                }),
                (0, r.jsx)('td', {
                    className: a()(W.smallCol, { [W.compact]: m }),
                    children: (0, r.jsx)(X, {
                        showLongDate: i,
                        member: t,
                        isSortedBy: S
                    })
                }),
                b &&
                    (0, r.jsx)('td', {
                        className: a()(W.smallCol, { [W.compact]: m }),
                        children: (0, r.jsx)(V.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, r.jsx)('td', {
                    className: a()(W.mediumCol, { [W.compact]: m }),
                    children: (0, r.jsx)(q, {
                        member: t,
                        highestRole: o
                    })
                }),
                (0, r.jsx)('td', {
                    className: a()(W.smallCol, { [W.compact]: m }),
                    children: (0, r.jsx)(z, { member: t })
                }),
                (0, r.jsx)('td', {
                    className: a()(W.smallCol, { [W.compact]: m }),
                    children: (0, r.jsxs)('div', {
                        className: W.actionCell,
                        children: [
                            (0, r.jsx)(C.ua7, {
                                text: y ? B.NW.string(B.t.nHfkf3) : B.NW.string(B.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: d,
                                        className: W.button,
                                        children: y
                                            ? (0, r.jsx)(w.Z, {
                                                  width: Q,
                                                  height: Q
                                              })
                                            : (0, r.jsx)(C.tBG, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: Q,
                                                  height: Q
                                              })
                                    });
                                }
                            }),
                            (0, r.jsx)(C.ua7, {
                                text: B.NW.string(B.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(C.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: W.button,
                                        children: (0, r.jsx)(C.Huf, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: Q,
                                            height: Q
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
    Q = 18,
    $ = ['sourceInviteCode', 'joinSourceType', 'inviterId', 'integrationType', 'joinedAt', 'joinedAtTimestamp'],
    ee = l.memo(function (e) {
        let { userId: t, guildId: n, style: o, onSelect: s, rowSelected: d, isLoading: C = !1, isHoldingAdvancedInfoKey: m = !1, compact: b = !1 } = e,
            p = (0, u.e7)([v.ZP], () => v.ZP.getGuildSidebarState(n), [n]),
            f = (null == p ? void 0 : p.details.userId) === t,
            h = (0, u.e7)([P.Z], () => P.Z.getEnhancedMember(n, t), [n, t]),
            j = (0, T.zq)(h),
            g = (0, u.e7)([_.default], () => _.default.getUser(t), [t]),
            x = (0, T.RN)(null != h ? h : void 0),
            y = l.useCallback(
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
            N = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (null == s || s(h));
                },
                [h, s]
            ),
            H = l.useCallback((e, t) => c()((0, i.omit)(e, $), (0, i.omit)(t, $)), []);
        return null == h
            ? null
            : (0, r.jsx)(M.Z, {
                  role: 'row',
                  value: h,
                  style: o,
                  className: a()(W.roundedRow, W.memberRowContainer, d && W.selected, f && W.memberSelected, C && W.loading),
                  equalityFn: H,
                  onClick: O,
                  onContextMenu: y,
                  children: (0, r.jsx)(J, {
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
