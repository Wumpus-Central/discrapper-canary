n.d(t, { Z: () => eo }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(392711),
    s = n(498607),
    c = n.n(s),
    u = n(399606),
    d = n(692547),
    C = n(755721),
    m = n(481060),
    b = n(700582),
    p = n(745735),
    f = n(906732),
    h = n(346486),
    j = n(715903),
    g = n(69882),
    x = n(189432),
    v = n(189357),
    y = n(172751),
    O = n(493892),
    _ = n(884902),
    H = n(433355),
    w = n(430824),
    N = n(496675),
    S = n(594174),
    D = n(203893),
    Z = n(777288),
    R = n(5192),
    L = n(709054),
    I = n(51144),
    P = n(815790),
    M = n(588215),
    V = n(241559),
    E = n(893966),
    T = n(685244),
    k = n(16829),
    A = n(256003),
    B = n(472596),
    U = n(285173),
    F = n(981631),
    q = n(176505),
    z = n(50493),
    G = n(388032),
    Y = n(266631);
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function K(e, t) {
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
let Q = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, g.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            o = l.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, r.jsxs)("div", {
            className: Y.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(m.ua7, {
                        text: G.intl.string(G.t.QrfVTk),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(m.b6m, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_MUTED.css,
                            });
                        },
                    }),
                n &&
                    (0, r.jsx)(m.ua7, {
                        "aria-label": G.intl.string(G.t["xfJP+v"]),
                        allowOverflow: !0,
                        text: (0, r.jsxs)("div", {
                            className: Y.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)("div", { children: G.intl.string(G.t["xfJP+v"]) }),
                                (0, r.jsx)(h.Z, {
                                    deadline: o,
                                    showUnits: !0,
                                    stopAtOneSec: !0,
                                }),
                            ],
                        }),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(m.YlB, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css,
                            });
                        },
                    }),
                (0, O.He)(t.userId) &&
                    (0, r.jsx)(m.ua7, {
                        text: G.intl.string(G.t.PK9FQ0),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(D.Z, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_DANGER.css,
                            });
                        },
                    }),
                (0, j.EY)(t) &&
                    (0, r.jsx)(m.ua7, {
                        text: G.intl.string(G.t.qOVbaW),
                        children: (e) => {
                            let { onMouseEnter: t, onMouseLeave: n } = e;
                            return (0, r.jsx)(m.ics, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                color: d.Z.colors.TEXT_MUTED.css,
                            });
                        },
                    }),
            ],
        });
    }),
    X = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            o = (0, u.e7)([w.Z], () => w.Z.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(G.intl.currentLocale).format(a), [a]),
            c = (0, B.vN)(t),
            d = (0, B.vN)(t, !0),
            C = (0, u.e7)([N.Z], () => N.Z.can(F.Plq.MANAGE_ROLES, o), [o]);
        return null == o
            ? null
            : (0, r.jsxs)("div", {
                  className: Y.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(U.Z, {
                              className: i()(Y.roleTooltipItem, Y.highestRole),
                              role: n,
                              guildId: t.guildId,
                          }),
                      a > 0 &&
                          (0, r.jsx)(m.P3F, {
                              className: Y.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(m.ua7, {
                                  text: G.intl.string(G.t.DY6n4u),
                                  children: (e) =>
                                      (0, r.jsxs)(
                                          m.Text,
                                          K(
                                              W(
                                                  {
                                                      variant: "text-xs/medium",
                                                      color: "header-primary",
                                                  },
                                                  e,
                                              ),
                                              {
                                                  children: ["+", s],
                                              },
                                          ),
                                      ),
                              }),
                          }),
                      C &&
                          (0, r.jsx)(m.ua7, {
                              text: G.intl.string(G.t.h3pSLS),
                              children: (e) => {
                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                  return (0, r.jsx)(m.P3F, {
                                      className: i()(Y.otherRoles, Y.addRoleContainer),
                                      onClick: c,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: (0, r.jsx)(m.qJs, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: Y.addRoleIcon,
                                          width: 16,
                                          height: 16,
                                      }),
                                  });
                              },
                          }),
                  ],
              });
    }),
    J = l.memo(function (e) {
        var t, n;
        let { member: l, user: o } = e,
            i = (0, _.X7)(
                null == l ? void 0 : l.guildId,
                null == l ? void 0 : l.userId,
                null != (t = null == l ? void 0 : l.colorStrings) ? t : null,
            );
        return null == o || null == l
            ? null
            : (0, r.jsxs)("div", {
                  className: Y.memberNameContainer,
                  children: [
                      (0, r.jsx)("div", {
                          className: Y.memberAvatar,
                          children: (0, r.jsx)(b.Z, { user: o }),
                      }),
                      (0, r.jsx)("div", {
                          className: Y.memberName,
                          children: (0, r.jsx)(m.Text, {
                              variant: "text-sm/medium",
                              children: (0, r.jsxs)("div", {
                                  className: Y.nameContainer,
                                  children: [
                                      (0, r.jsx)(m.PUh, {
                                          name: R.ZP.getName(l.guildId, null, o),
                                          colorString: null != (n = l.colorString) ? n : null,
                                          colorStrings: i,
                                          className: Y.memberNameText,
                                      }),
                                      (0, r.jsx)(y.ZP, {
                                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                                          userId: null == o ? void 0 : o.id,
                                          contextGuildId: l.guildId,
                                          containerClassName: Y.memberClanTag,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: Y.memberGlobalName,
                          children: (0, r.jsx)(m.Text, {
                              variant: "text-xs/normal",
                              color: "header-secondary",
                              tag: "span",
                              children: I.ZP.getUserTag(o),
                          }),
                      }),
                  ],
              });
    });
function $(e) {
    return {
        short: null == e ? null : (0, P.fv)(e, P.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(G.intl.currentLocale, P.UG),
    };
}
function ee(e) {
    let { member: t, showLongDate: n, isSortedBy: o } = e,
        [i, a] = l.useState(null);
    l.useEffect(() => {
        a($(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, p.Z)(() => {
            a($(t.joinedAtTimestamp));
        }, 10000);
    let s = o ? "text-brand" : "text-default";
    return (null == i ? void 0 : i.short) == null
        ? null
        : n
          ? (0, r.jsx)("div", {
                className: Y.__invalid_joinedAtContainer,
                children: (0, r.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    color: s,
                    children: i.long,
                }),
            })
          : (0, r.jsx)("div", {
                className: Y.__invalid_joinedAtContainer,
                children: (0, r.jsx)(m.ua7, {
                    align: "left",
                    text: i.long,
                    children: (e) =>
                        (0, r.jsx)(
                            m.Text,
                            K(W({}, e), {
                                variant: "text-sm/medium",
                                color: s,
                                children: i.short,
                            }),
                        ),
                }),
            });
}
let et = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: o } = e,
            { accountCreationDateShort: i, accountCreationDateLong: a } = l.useMemo(() => {
                let e = L.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, P.fv)(e, P.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(G.intl.currentLocale, P.I),
                };
            }, [t.userId]),
            s = o ? "text-brand" : "text-default";
        return n
            ? (0, r.jsx)(m.Text, {
                  variant: "text-sm/medium",
                  color: s,
                  children: a,
              })
            : (0, r.jsx)(m.ua7, {
                  align: "left",
                  text: a,
                  children: (e) =>
                      (0, r.jsx)(
                          m.Text,
                          K(W({}, e), {
                              variant: "text-sm/medium",
                              color: s,
                              children: i,
                          }),
                      ),
              });
    }),
    en = l.memo(function (e) {
        let {
                member: t,
                user: n,
                highestRole: o,
                isHoldingAdvancedInfoKey: a,
                onOpenModerationMenu: s,
                onOpenMemberView: d,
                compact: b,
                hasModViewPanelAccess: p,
            } = e,
            f = (0, u.e7)([N.Z, w.Z], () => N.Z.can(F.Plq.MANAGE_GUILD, w.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: h, addUsers: j, removeUser: g } = (0, A.Z)(t.guildId),
            x = (0, V.xC)(t.guildId),
            v = (0, V.hB)(t.guildId, x, t.userId),
            y = (0, u.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getSearchStateByGuildId(t.guildId).selectedSort)
                        ? e
                        : M.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c(),
            ),
            O = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && v && (h.has(t.userId) ? g(t.userId) : j([t.userId]));
                },
                [j, v, t, g, h],
            ),
            _ = y === M.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            H = y === M.d$.ORDER_BY_USER_ID_ASC || y === M.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                x &&
                    (0, r.jsx)(m.ua7, {
                        tooltipClassName: Y.disabledActionTooltip,
                        shouldShow: !v,
                        text: G.intl.string(G.t["Se4c7+"]),
                        children: (e) =>
                            (0, r.jsx)(
                                "td",
                                K(W({}, e), {
                                    children: (0, r.jsx)("div", {
                                        className: i()(Y.__invalid_checkbox, Y.xsmallCol),
                                        children: (0, r.jsx)(m.P3F, {
                                            onClick: O,
                                            children: (0, r.jsx)(C.$q, {
                                                type: C.M0.INVERTED,
                                                value: h.has(t.userId),
                                                disabled: !v,
                                            }),
                                        }),
                                    }),
                                }),
                            ),
                    }),
                (0, r.jsx)("td", {
                    className: i()({ [Y.compact]: b }),
                    children: (0, r.jsx)(J, {
                        member: t,
                        user: n,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: i()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(ee, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: _,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: i()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(et, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: H,
                    }),
                }),
                f &&
                    (0, r.jsx)("td", {
                        className: i()(Y.smallCol, { [Y.compact]: b }),
                        children: (0, r.jsx)(k.ZP, {
                            userId: t.userId,
                            guildId: t.guildId,
                        }),
                    }),
                (0, r.jsx)("td", {
                    className: i()(Y.mediumCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(X, {
                        member: t,
                        highestRole: o,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: i()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(Q, { member: t }),
                }),
                (0, r.jsx)("td", {
                    className: i()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsxs)("div", {
                        className: Y.actionCell,
                        children: [
                            (0, r.jsx)(m.ua7, {
                                text: p ? G.intl.string(G.t.nHfkf3) : G.intl.string(G.t.uTre29),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(m.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: d,
                                        className: Y.button,
                                        children: p
                                            ? (0, r.jsx)(Z.Z, {
                                                  width: er,
                                                  height: er,
                                              })
                                            : (0, r.jsx)(m.tBG, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: er,
                                                  height: er,
                                              }),
                                    });
                                },
                            }),
                            (0, r.jsx)(m.ua7, {
                                text: G.intl.string(G.t.x8Nn4O),
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, r.jsx)(m.P3F, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onClick: s,
                                        className: Y.button,
                                        children: (0, r.jsx)(m.Huf, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: er,
                                            height: er,
                                        }),
                                    });
                                },
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    er = 18,
    el = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    eo = l.memo(function (e) {
        let {
                userId: t,
                guildId: n,
                style: o,
                rowSelected: s,
                isLoading: d = !1,
                isHoldingAdvancedInfoKey: C = !1,
                compact: m = !1,
            } = e,
            { analyticsLocations: b } = (0, f.ZP)(),
            p = (0, u.e7)([H.ZP], () => H.ZP.getGuildSidebarState(n), [n]),
            h = (null == p ? void 0 : p.details.userId) === t,
            j = (0, u.e7)([E.Z], () => E.Z.getEnhancedMember(n, t), [n, t]),
            g = (0, B.zq)(j),
            y = (0, u.e7)([S.default], () => S.default.getUser(t), [t]),
            O = (0, v.m)(n),
            _ = (0, B.RN)(null != j ? j : void 0),
            w = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), _(e);
                },
                [_],
            ),
            N = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != j && (0, B.RE)(j, b);
                },
                [j, b],
            ),
            D = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != j &&
                            (O
                                ? (0, x.r)(j.guildId, j.userId, q.oC.MEMBER_SAFETY, { modViewPanel: z.k.INFO })
                                : (0, B.RE)(j, b));
                },
                [j, b, O],
            ),
            Z = l.useCallback((e, t) => c()((0, a.omit)(e, el), (0, a.omit)(t, el)), []);
        return null == j
            ? null
            : (0, r.jsx)(T.Z, {
                  role: "row",
                  value: j,
                  style: o,
                  className: i()(
                      Y.roundedRow,
                      Y.memberRowContainer,
                      s && Y.selected,
                      h && Y.memberSelected,
                      d && Y.loading,
                  ),
                  equalityFn: Z,
                  onClick: N,
                  onContextMenu: w,
                  children: (0, r.jsx)(en, {
                      member: j,
                      user: y,
                      highestRole: g,
                      isHoldingAdvancedInfoKey: C,
                      onOpenModerationMenu: w,
                      onOpenMemberView: D,
                      compact: m,
                      hasModViewPanelAccess: O,
                  }),
              });
    });
