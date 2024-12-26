n(47120);
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(392711),
    s = n(498607),
    c = n.n(s),
    C = n(399606),
    d = n(692547),
    u = n(481060),
    m = n(700582),
    h = n(745735),
    x = n(906732),
    b = n(979264),
    f = n(346486),
    g = n(715903),
    p = n(69882),
    H = n(189357),
    j = n(493892),
    v = n(433355),
    N = n(430824),
    L = n(496675),
    I = n(594174),
    _ = n(203893),
    M = n(777288),
    Z = n(5192),
    R = n(709054),
    D = n(51144),
    S = n(815790),
    V = n(588215),
    T = n(241559),
    E = n(893966),
    w = n(685244),
    A = n(16829),
    k = n(256003),
    y = n(472596),
    B = n(285173),
    O = n(981631),
    U = n(388032),
    P = n(216412);
let F = o.memo(function (e) {
        let { member: t } = e,
            n = o.useMemo(() => (0, p.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            i = o.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
        return (0, l.jsxs)('div', {
            className: a()(P.flagContainer),
            children: [
                t.hasUnusualDmActivity &&
                    (0, l.jsx)(u.Tooltip, {
                        text: U.intl.string(U.t.QrfVTk),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, l.jsx)(u.ChatWarningIcon, {
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
                    (0, l.jsx)(u.Tooltip, {
                        'aria-label': U.intl.string(U.t['xfJP+v']),
                        allowOverflow: !0,
                        text: (0, l.jsxs)('div', {
                            className: P.communicationDisabledTooltip,
                            children: [
                                (0, l.jsx)('div', { children: U.intl.string(U.t['xfJP+v']) }),
                                (0, l.jsx)(f.Z, {
                                    deadline: i,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            ]
                        }),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, l.jsx)(u.ClockWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, j.He)(t.userId) &&
                    (0, l.jsx)(u.Tooltip, {
                        text: U.intl.string(U.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, l.jsx)(_.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css
                            });
                        }
                    }),
                (0, g.EY)(t) &&
                    (0, l.jsx)(u.Tooltip, {
                        text: U.intl.string(U.t.qOVbaW),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, l.jsx)(u.ChatXIcon, {
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
    G = o.memo(function (e) {
        let { member: t, highestRole: n } = e,
            i = (0, C.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]),
            r = t.roles.length - 1,
            s = o.useMemo(() => new Intl.NumberFormat(U.intl.currentLocale).format(r), [r]),
            c = (0, y.vN)(t),
            d = (0, y.vN)(t, !0),
            m = (0, C.e7)([L.Z], () => L.Z.can(O.Plq.MANAGE_ROLES, i), [i]);
        return null == i
            ? null
            : (0, l.jsxs)('div', {
                  className: a()(P.roleContainer),
                  children: [
                      null != n &&
                          (0, l.jsx)(B.Z, {
                              className: a()(P.roleTooltipItem, P.highestRole),
                              role: n,
                              guildId: t.guildId
                          }),
                      r > 0 &&
                          (0, l.jsx)(u.Clickable, {
                              className: a()(P.otherRoles),
                              onMouseEnter: (e) => d(e),
                              children: (0, l.jsxs)(u.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'header-primary',
                                  children: ['+', s]
                              })
                          }),
                      m &&
                          (0, l.jsx)(u.Tooltip, {
                              text: U.intl.string(U.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, l.jsx)(u.Clickable, {
                                      className: a()(P.otherRoles, P.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, l.jsx)(u.PlusSmallIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: a()(P.addRoleIcon),
                                          width: 16,
                                          height: 16
                                      })
                                  });
                              }
                          })
                  ]
              });
    }),
    z = o.memo(function (e) {
        var t;
        let { member: n, user: i } = e,
            { analyticsLocations: r } = (0, x.ZP)(),
            s = o.useCallback(
                (e) => {
                    if (null != n) e.stopPropagation(), e.preventDefault(), (0, y.RE)(n, r);
                },
                [n, r]
            );
        return null == i || null == n
            ? null
            : (0, l.jsxs)('div', {
                  className: a()(P.memberNameContainer),
                  children: [
                      (0, l.jsx)(u.Clickable, {
                          className: a()(P.memberAvatar),
                          onClick: s,
                          children: (0, l.jsx)(m.Z, { user: i })
                      }),
                      (0, l.jsx)('div', {
                          className: a()(P.memberName),
                          children: (0, l.jsx)(u.Text, {
                              variant: 'text-sm/medium',
                              children: (0, l.jsxs)(u.Clickable, {
                                  onClick: s,
                                  className: P.nameContainer,
                                  children: [
                                      (0, l.jsx)(u.NameWithRole, {
                                          name: Z.ZP.getName(n.guildId, null, i),
                                          color: null !== (t = n.colorString) && void 0 !== t ? t : void 0,
                                          className: a()(P.memberNameText)
                                      }),
                                      (0, l.jsx)(b.ZP, {
                                          primaryGuild: null == i ? void 0 : i.primaryGuild,
                                          userId: null == i ? void 0 : i.id,
                                          contextGuildId: n.guildId,
                                          containerClassName: P.memberClanTag
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, l.jsx)('div', {
                          className: a()(P.memberGlobalName),
                          children: (0, l.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'header-secondary',
                              tag: 'span',
                              children: (0, l.jsx)(u.Clickable, {
                                  onClick: s,
                                  tag: 'span',
                                  children: D.ZP.getUserTag(i)
                              })
                          })
                      })
                  ]
              });
    });
function q(e) {
    let t = null == e ? null : (0, S.fv)(e, S.jq.JOINED_AT);
    return {
        short: t,
        long: new Date(null != e ? e : 0).toLocaleDateString(U.intl.currentLocale, S.UG)
    };
}
function Y(e) {
    let { member: t, showLongDate: n, isSortedBy: i } = e,
        [r, s] = o.useState(null);
    o.useEffect(() => {
        s(q(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, h.Z)(() => {
            s(q(t.joinedAtTimestamp));
        }, 10000);
    let c = i ? 'text-brand' : 'text-normal';
    return (null == r ? void 0 : r.short) == null
        ? null
        : n
          ? (0, l.jsx)('div', {
                className: a()(P.__invalid_joinedAtContainer),
                children: (0, l.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: c,
                    children: r.long
                })
            })
          : (0, l.jsx)('div', {
                className: a()(P.__invalid_joinedAtContainer),
                children: (0, l.jsx)(u.Tooltip, {
                    align: 'left',
                    text: r.long,
                    children: (e) =>
                        (0, l.jsx)(u.Text, {
                            ...e,
                            variant: 'text-sm/medium',
                            color: c,
                            children: r.short
                        })
                })
            });
}
let W = o.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: i } = e,
            { accountCreationDateShort: a, accountCreationDateLong: r } = o.useMemo(() => {
                let e = R.default.extractTimestamp(t.userId),
                    n = (0, S.fv)(e, S.jq.ACCOUNT_AGE);
                return {
                    accountCreationDateShort: n,
                    accountCreationDateLong: new Date(e).toLocaleDateString(U.intl.currentLocale, S.I)
                };
            }, [t.userId]),
            s = i ? 'text-brand' : 'text-normal';
        return n
            ? (0, l.jsx)(u.Text, {
                  variant: 'text-sm/medium',
                  color: s,
                  children: r
              })
            : (0, l.jsx)(u.Tooltip, {
                  align: 'left',
                  text: r,
                  children: (e) =>
                      (0, l.jsx)(u.Text, {
                          ...e,
                          variant: 'text-sm/medium',
                          color: s,
                          children: a
                      })
              });
    }),
    K = o.memo(function (e) {
        let { member: t, user: n, highestRole: i, isHoldingAdvancedInfoKey: r, onOpenModerationMenu: s, onOpenProfileMenu: d, compact: m } = e,
            h = (0, C.e7)([L.Z, N.Z], () => L.Z.can(O.Plq.MANAGE_GUILD, N.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: x, addUsers: b, removeUser: f } = (0, k.Z)(t.guildId),
            g = (0, T.xC)(t.guildId),
            p = (0, T.hB)(t.guildId, g, t.userId),
            j = (0, H.ms)(t.guildId),
            v = (0, C.e7)(
                [E.Z],
                () => {
                    var e;
                    return null !== (e = E.Z.getSearchStateByGuildId(t.guildId).selectedSort) && void 0 !== e ? e : V.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c()
            ),
            I = o.useCallback(
                (e) => {
                    if ((e.stopPropagation(), e.preventDefault(), null != t && !!p)) x.has(t.userId) ? f(t.userId) : b([t.userId]);
                },
                [b, p, t, f, x]
            ),
            _ = v === V.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            Z = v === V.d$.ORDER_BY_USER_ID_ASC || v === V.d$.ORDER_BY_USER_ID_DESC;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                g &&
                    (0, l.jsx)(u.Tooltip, {
                        tooltipClassName: P.disabledActionTooltip,
                        shouldShow: !p,
                        text: U.intl.string(U.t['Se4c7+']),
                        children: (e) =>
                            (0, l.jsx)('td', {
                                ...e,
                                children: (0, l.jsx)('div', {
                                    className: a()(P.__invalid_checkbox, P.xsmallCol),
                                    children: (0, l.jsx)(u.Clickable, {
                                        onClick: I,
                                        children: (0, l.jsx)(u.Checkbox, {
                                            type: u.Checkbox.Types.INVERTED,
                                            value: x.has(t.userId),
                                            disabled: !p
                                        })
                                    })
                                })
                            })
                    }),
                (0, l.jsx)('td', {
                    className: a()({ [P.compact]: m }),
                    children: (0, l.jsx)(z, {
                        member: t,
                        user: n
                    })
                }),
                (0, l.jsx)('td', {
                    className: a()(P.smallCol, { [P.compact]: m }),
                    children: (0, l.jsx)(Y, {
                        showLongDate: r,
                        member: t,
                        isSortedBy: _
                    })
                }),
                (0, l.jsx)('td', {
                    className: a()(P.smallCol, { [P.compact]: m }),
                    children: (0, l.jsx)(W, {
                        showLongDate: r,
                        member: t,
                        isSortedBy: Z
                    })
                }),
                h &&
                    (0, l.jsx)('td', {
                        className: a()(P.smallCol, { [P.compact]: m }),
                        children: (0, l.jsx)(A.ZP, {
                            userId: t.userId,
                            guildId: t.guildId
                        })
                    }),
                (0, l.jsx)('td', {
                    className: a()(P.mediumCol, { [P.compact]: m }),
                    children: (0, l.jsx)(G, {
                        member: t,
                        highestRole: i
                    })
                }),
                (0, l.jsx)('td', {
                    className: a()(P.smallCol, { [P.compact]: m }),
                    children: (0, l.jsx)(F, { member: t })
                }),
                (0, l.jsx)('td', {
                    className: a()(P.smallCol, { [P.compact]: m }),
                    children: (0, l.jsxs)('div', {
                        className: a()(P.actionCell),
                        children: [
                            (0, l.jsx)(u.Tooltip, {
                                text: j ? U.intl.string(U.t.nHfkf3) : U.intl.string(U.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, l.jsx)(u.Clickable, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: d,
                                        className: a()(P.button),
                                        children: j
                                            ? (0, l.jsx)(M.Z, {
                                                  width: J,
                                                  height: J
                                              })
                                            : (0, l.jsx)(u.UserIcon, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: J,
                                                  height: J
                                              })
                                    });
                                }
                            }),
                            (0, l.jsx)(u.Tooltip, {
                                text: U.intl.string(U.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, l.jsx)(u.Clickable, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: a()(P.button),
                                        children: (0, l.jsx)(u.MoreVerticalIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: J,
                                            height: J
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
    J = 18,
    X = ['sourceInviteCode', 'joinSourceType', 'inviterId', 'integrationType', 'joinedAt', 'joinedAtTimestamp'];
t.Z = o.memo(function (e) {
    let { userId: t, guildId: n, style: i, onSelect: s, rowSelected: d, isLoading: u = !1, isHoldingAdvancedInfoKey: m = !1, compact: h = !1 } = e,
        x = (0, C.e7)([v.ZP], () => v.ZP.getGuildSidebarState(n), [n]),
        b = (null == x ? void 0 : x.details.userId) === t,
        f = (0, C.e7)([E.Z], () => E.Z.getEnhancedMember(n, t), [n, t]),
        g = (0, y.zq)(f),
        p = (0, C.e7)([I.default], () => I.default.getUser(t), [t]),
        H = (0, y.RN)(null != f ? f : void 0),
        j = o.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), H(e);
            },
            [H]
        ),
        N = o.useCallback(
            (e) => {
                if ((e.stopPropagation(), e.preventDefault(), null != f)) null == s || s(f);
            },
            [s, f]
        ),
        L = o.useCallback(
            (e) => {
                if ((e.stopPropagation(), e.preventDefault(), null != f)) null == s || s(f);
            },
            [f, s]
        ),
        _ = o.useCallback((e, t) => c()((0, r.omit)(e, X), (0, r.omit)(t, X)), []);
    return null == f
        ? null
        : (0, l.jsx)(w.Z, {
              role: 'row',
              value: f,
              style: i,
              className: a()(P.roundedRow, P.memberRowContainer, d && P.selected, b && P.memberSelected, u && P.loading),
              equalityFn: _,
              onClick: N,
              onContextMenu: j,
              children: (0, l.jsx)(K, {
                  member: f,
                  user: p,
                  highestRole: g,
                  isHoldingAdvancedInfoKey: m,
                  onOpenModerationMenu: j,
                  onOpenProfileMenu: L,
                  compact: h
              })
          });
});
