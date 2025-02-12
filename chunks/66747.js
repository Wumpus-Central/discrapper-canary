l.d(t, { Z: () => Q }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(392711),
    r = l(498607),
    c = l.n(r),
    d = l(399606),
    C = l(692547),
    u = l(481060),
    m = l(700582),
    h = l(745735),
    x = l(906732),
    g = l(979264),
    p = l(346486),
    _ = l(715903),
    b = l(69882),
    f = l(189357),
    j = l(493892),
    H = l(433355),
    v = l(430824),
    N = l(496675),
    Z = l(594174),
    L = l(203893),
    R = l(777288),
    I = l(5192),
    M = l(709054),
    V = l(51144),
    D = l(815790),
    S = l(588215),
    T = l(241559),
    E = l(893966),
    w = l(685244),
    k = l(16829),
    y = l(256003),
    A = l(472596),
    B = l(285173),
    O = l(981631),
    U = l(388032),
    F = l(697301);
let P = a.memo(function (e) {
        let { member: t } = e,
            l = a.useMemo(() => (0, b.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            i = a.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, n.jsxs)('div', {
            className: o()(F.flagContainer),
            children: [
                t.hasUnusualDmActivity &&
                    (0, n.jsx)(u.ua7, {
                        text: U.intl.string(U.t.QrfVTk),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: l } = e;
                            return (0, n.jsx)(u.b6m, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: C.Z.colors.TEXT_MUTED.css
                            });
                        }
                    }),
                l &&
                    (0, n.jsx)(u.ua7, {
                        'aria-label': U.intl.string(U.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, n.jsxs)('div', {
                            className: F.communicationDisabledTooltip,
                            children: [
                                (0, n.jsx)('div', { children: U.intl.string(U.t['xfJP+v']) }),
                                (0, n.jsx)(p.Z, {
                                    deadline: i,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            ]
                        }),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: l } = e;
                            return (0, n.jsx)(u.YlB, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: C.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, j.He)(t.userId) &&
                    (0, n.jsx)(u.ua7, {
                        text: U.intl.string(U.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: l } = e;
                            return (0, n.jsx)(L.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: C.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, _.EY)(t) &&
                    (0, n.jsx)(u.ua7, {
                        text: U.intl.string(U.t.qOVbaW),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: l } = e;
                            return (0, n.jsx)(u.ics, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: C.Z.colors.TEXT_MUTED.css
                            });
                        }
                    })
            ]
        });
    }),
    z = a.memo(function (e) {
        let { member: t, highestRole: l } = e,
            i = (0, d.e7)([v.Z], () => v.Z.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = a.useMemo(() => new Intl.NumberFormat(U.intl.currentLocale).format(s), [s]),
            c = (0, A.vN)(t),
            C = (0, A.vN)(t, !0),
            m = (0, d.e7)([N.Z], () => N.Z.can(O.Plq.MANAGE_ROLES, i), [i]);
        return null == i
            ? null
            : (0, n.jsxs)('div', {
                  className: o()(F.roleContainer),
                  children: [
                      null != l &&
                          (0, n.jsx)(B.Z, {
                              className: o()(F.roleTooltipItem, F.highestRole),
                              role: l,
                              guildId: t.guildId
                          }),
                      s > 0 &&
                          (0, n.jsx)(u.P3F, {
                              className: o()(F.otherRoles),
                              onClick: (e) => C(e),
                              children: (0, n.jsx)(u.ua7, {
                                  text: U.intl.string(U.t.DY6n4u),
                                  children: (e) =>
                                      (0, n.jsxs)(u.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'header-primary',
                                          ...e,
                                          children: ['+', r]
                                      })
                              })
                          }),
                      m &&
                          (0, n.jsx)(u.ua7, {
                              text: U.intl.string(U.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: l } = e;
                                  return (0, n.jsx)(u.P3F, {
                                      className: o()(F.otherRoles, F.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: l,
                                      children: (0, n.jsx)(u.qJs, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: o()(F.addRoleIcon),
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    q = a.memo(function (e) {
        var t;
        let { member: l, user: i } = e,
            { analyticsLocations: s } = (0, x.ZP)(),
            r = a.useCallback(
                (e) => {
                    null != l && (e.stopPropagation(), e.preventDefault(), (0, A.RE)(l, s));
                },
                [l, s]
            );
        return null == i || null == l
            ? null
            : (0, n.jsxs)('div', {
                  className: o()(F.memberNameContainer),
                  children: [
                      (0, n.jsx)(u.P3F, {
                          className: o()(F.memberAvatar),
                          onClick: r,
                          children: (0, n.jsx)(m.Z, { user: i })
                      }),
                      (0, n.jsx)('div', {
                          className: o()(F.memberName),
                          children: (0, n.jsx)(u.Text, {
                              variant: 'text-sm/medium',
                              children: (0, n.jsxs)(u.P3F, {
                                  onClick: r,
                                  className: F.nameContainer,
                                  children: [
                                      (0, n.jsx)(u.PUh, {
                                          name: I.ZP.getName(l.guildId, null, i),
                                          color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
                                          className: o()(F.memberNameText)
                                      }),
                                      (0, n.jsx)(g.ZP, {
                                          primaryGuild: null == i ? void 0 : i.primaryGuild,
                                          userId: null == i ? void 0 : i.id,
                                          contextGuildId: l.guildId,
                                          containerClassName: F.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, n.jsx)('div', {
                          className: o()(F.memberGlobalName),
                          children: (0, n.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, n.jsx)(u.P3F, {
                                  onClick: r,
                                  tag: 'span',
                                  children: V.ZP.getUserTag(i)
                              })
                          })
                      })
                  ]
              });
    });
function G(e) {
    return {
        short: null == e ? null : (0, D.fv)(e, D.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(U.intl.currentLocale, D.UG)
    };
}
function Y(e) {
    let { member: t, showLongDate: l, isSortedBy: i } = e,
        [s, r] = a.useState(null);
    a.useEffect(() => {
        r(G(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, h.Z)(() => {
            r(G(t.joinedAtTimestamp));
        }, 10000);
    let c = i ? 'text-brand' : 'text-normal';
    return (null == s ? void 0 : s.short) == null
        ? null
        : l
          ? (0, n.jsx)('div', {
                className: o()(F.__invalid_joinedAtContainer),
                children: (0, n.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: c,
                    children: s.long
                })
            })
          : (0, n.jsx)('div', {
                className: o()(F.__invalid_joinedAtContainer),
                children: (0, n.jsx)(u.ua7, {
                    align: 'left',
                    text: s.long,
                    children: (e) =>
                        (0, n.jsx)(u.Text, {
                            ...e,
                            variant: 'text-sm/medium',
                            color: c,
                            children: s.short
                        })
                })
            });
}
let K = a.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: i } = e,
            { accountCreationDateShort: o, accountCreationDateLong: s } = a.useMemo(() => {
                let e = M.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, D.fv)(e, D.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(U.intl.currentLocale, D.I)
                };
            }, [t.userId]),
            r = i ? 'text-brand' : 'text-normal';
        return l
            ? (0, n.jsx)(u.Text, {
                  variant: 'text-sm/medium',
                  color: r,
                  children: s
              })
            : (0, n.jsx)(u.ua7, {
                  align: 'left',
                  text: s,
                  children: (e) =>
                      (0, n.jsx)(u.Text, {
                          ...e,
                          variant: 'text-sm/medium',
                          color: r,
                          children: o
                      })
              });
    }),
    W = a.memo(function (e) {
        let { member: t, user: l, highestRole: i, isHoldingAdvancedInfoKey: s, onOpenModerationMenu: r, onOpenProfileMenu: C, compact: m } = e,
            h = (0, d.e7)([N.Z, v.Z], () => N.Z.can(O.Plq.MANAGE_GUILD, v.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: x, addUsers: g, removeUser: p } = (0, y.Z)(t.guildId),
            _ = (0, T.xC)(t.guildId),
            b = (0, T.hB)(t.guildId, _, t.userId),
            j = (0, f.m)(t.guildId),
            H = (0, d.e7)(
                [E.Z],
                () => {
                    var e;
                    return null !== (e = E.Z.getSearchStateByGuildId(t.guildId).selectedSort) && void 0 !== e ? e : S.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            Z = a.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != t && b && (x.has(t.userId) ? p(t.userId) : g([t.userId]));
                },
                [g, b, t, p, x]
            ),
            L = H === S.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            I = H === S.d$.ORDER_BY_USER_ID_ASC || H === S.d$.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                _ &&
                    (0, n.jsx)(u.ua7, {
                        tooltipClassName: F.disabledActionTooltip,
                        shouldShow: !b,
                        text: U.intl.string(U.t['Se4c7+']),
                        children: (e) =>
                            (0, n.jsx)('td', {
                                ...e,
                                children: (0, n.jsx)('div', {
                                    className: o()(F.__invalid_checkbox, F.xsmallCol),
                                    children: (0, n.jsx)(u.P3F, {
                                        onClick: Z,
                                        children: (0, n.jsx)(u.XZJ, {
                                            type: u.XZJ.Types.INVERTED,
                                            value: x.has(t.userId),
                                            disabled: !b
                                        })
                                    })
                                })
                            })
                    }),
                (0, n.jsx)('td', {
                    className: o()({ [F.compact]: m }),
                    children: (0, n.jsx)(q, {
                        member: t,
                        user: l
                    })
                }),
                (0, n.jsx)('td', {
                    className: o()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsx)(Y, {
                        showLongDate: s,
                        member: t,
                        isSortedBy: L
                    })
                }),
                (0, n.jsx)('td', {
                    className: o()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsx)(K, {
                        showLongDate: s,
                        member: t,
                        isSortedBy: I
                    })
                }),
                h &&
                    (0, n.jsx)('td', {
                        className: o()(F.smallCol, { [F.compact]: m }),
                        children: (0, n.jsx)(k.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, n.jsx)('td', {
                    className: o()(F.mediumCol, { [F.compact]: m }),
                    children: (0, n.jsx)(z, {
                        member: t,
                        highestRole: i
                    })
                }),
                (0, n.jsx)('td', {
                    className: o()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsx)(P, { member: t })
                }),
                (0, n.jsx)('td', {
                    className: o()(F.smallCol, { [F.compact]: m }),
                    children: (0, n.jsxs)('div', {
                        className: o()(F.actionCell),
                        children: [
                            (0, n.jsx)(u.ua7, {
                                text: j ? U.intl.string(U.t.nHfkf3) : U.intl.string(U.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: l } = e;
                                    return (0, n.jsx)(u.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: l,
                                        onClick: C,
                                        className: o()(F.button),
                                        children: j
                                            ? (0, n.jsx)(R.Z, {
                                                  width: X,
                                                  height: X
                                              })
                                            : (0, n.jsx)(u.tBG, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: X,
                                                  height: X
                                              })
                                    });
                                }
                            }),
                            (0, n.jsx)(u.ua7, {
                                text: U.intl.string(U.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: l } = e;
                                    return (0, n.jsx)(u.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: l,
                                        onClick: r,
                                        className: o()(F.button),
                                        children: (0, n.jsx)(u.Huf, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: X,
                                            height: X
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
    X = 18,
    J = ['sourceInviteCode', 'joinSourceType', 'inviterId', 'integrationType', 'joinedAt', 'joinedAtTimestamp'],
    Q = a.memo(function (e) {
        let { userId: t, guildId: l, style: i, onSelect: r, rowSelected: C, isLoading: u = !1, isHoldingAdvancedInfoKey: m = !1, compact: h = !1 } = e,
            x = (0, d.e7)([H.ZP], () => H.ZP.getGuildSidebarState(l), [l]),
            g = (null == x ? void 0 : x.details.userId) === t,
            p = (0, d.e7)([E.Z], () => E.Z.getEnhancedMember(l, t), [l, t]),
            _ = (0, A.zq)(p),
            b = (0, d.e7)([Z.default], () => Z.default.getUser(t), [t]),
            f = (0, A.RN)(null != p ? p : void 0),
            j = a.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), f(e);
                },
                [f]
            ),
            v = a.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != p && (null == r || r(p));
                },
                [r, p]
            ),
            N = a.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != p && (null == r || r(p));
                },
                [p, r]
            ),
            L = a.useCallback((e, t) => c()((0, s.omit)(e, J), (0, s.omit)(t, J)), []);
        return null == p
            ? null
            : (0, n.jsx)(w.Z, {
                  role: 'row',
                  value: p,
                  style: i,
                  className: o()(F.roundedRow, F.memberRowContainer, C && F.selected, g && F.memberSelected, u && F.loading),
                  equalityFn: L,
                  onClick: v,
                  onContextMenu: j,
                  children: (0, n.jsx)(W, {
                      member: p,
                      user: b,
                      highestRole: _,
                      isHoldingAdvancedInfoKey: m,
                      onOpenModerationMenu: j,
                      onOpenProfileMenu: N,
                      compact: h
                  })
              });
    });
