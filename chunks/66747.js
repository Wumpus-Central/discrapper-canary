n.d(t, { Z: () => el }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    a = n(392711),
    s = n(498607),
    c = n.n(s),
    u = n(399606),
    d = n(692547),
    C = n(28664),
    m = n(755721),
    b = n(481060),
    p = n(700582),
    f = n(745735),
    h = n(906732),
    g = n(346486),
    j = n(715903),
    x = n(69882),
    v = n(189432),
    y = n(189357),
    O = n(172751),
    H = n(493892),
    _ = n(884902),
    w = n(433355),
    S = n(430824),
    N = n(496675),
    Z = n(594174),
    D = n(203893),
    R = n(777288),
    L = n(5192),
    I = n(709054),
    P = n(51144),
    V = n(815790),
    M = n(588215),
    E = n(241559),
    T = n(893966),
    k = n(685244),
    A = n(16829),
    U = n(256003),
    F = n(472596),
    B = n(285173),
    q = n(981631),
    z = n(176505),
    G = n(50493),
    Y = n(388032),
    W = n(266631);
let K = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, x.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            i = l.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, r.jsxs)("div", {
            className: W.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(C.u, {
                        text: Y.intl.string(Y.t.QrfVTk),
                        children: (0, r.jsx)(b.b6m, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_MUTED.css,
                        }),
                    }),
                n &&
                    (0, r.jsx)(C.u, {
                        "aria-label": Y.intl.string(Y.t["xfJP+v"]),
                        __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                            className: W.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)("div", { children: Y.intl.string(Y.t["xfJP+v"]) }),
                                (0, r.jsx)(g.Z, {
                                    deadline: i,
                                    showUnits: !0,
                                    stopAtOneSec: !0,
                                }),
                            ],
                        }),
                        children: (0, r.jsx)(b.YlB, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_DANGER.css,
                        }),
                    }),
                (0, H.He)(t.userId) &&
                    (0, r.jsx)(C.u, {
                        text: Y.intl.string(Y.t.PK9FQ0),
                        children: (0, r.jsx)(D.Z, {
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_DANGER.css,
                        }),
                    }),
                (0, j.EY)(t) &&
                    (0, r.jsx)(C.u, {
                        text: Y.intl.string(Y.t.qOVbaW),
                        children: (0, r.jsx)(b.ics, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    Q = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            i = (0, u.e7)([S.Z], () => S.Z.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(Y.intl.currentLocale).format(a), [a]),
            c = (0, F.vN)(t),
            d = (0, F.vN)(t, !0),
            m = (0, u.e7)([N.Z], () => N.Z.can(q.Plq.MANAGE_ROLES, i), [i]);
        return null == i
            ? null
            : (0, r.jsxs)("div", {
                  className: W.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(B.Z, {
                              className: o()(W.roleTooltipItem, W.highestRole),
                              role: n,
                              guildId: t.guildId,
                          }),
                      a > 0 &&
                          (0, r.jsx)(b.P3F, {
                              className: W.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(C.u, {
                                  text: Y.intl.string(Y.t.DY6n4u),
                                  children: (0, r.jsxs)(b.Text, {
                                      variant: "text-xs/medium",
                                      color: "header-primary",
                                      children: ["+", s],
                                  }),
                              }),
                          }),
                      m &&
                          (0, r.jsx)(C.u, {
                              text: Y.intl.string(Y.t.h3pSLS),
                              children: (0, r.jsx)(b.P3F, {
                                  onClick: c,
                                  className: o()(W.otherRoles, W.addRoleContainer),
                                  children: (0, r.jsx)(b.qJs, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: W.addRoleIcon,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    X = l.memo(function (e) {
        var t, n;
        let { member: l, user: i } = e,
            o = (0, _.X7)(
                null == l ? void 0 : l.guildId,
                null == l ? void 0 : l.userId,
                null != (t = null == l ? void 0 : l.colorStrings) ? t : null,
            );
        return null == i || null == l
            ? null
            : (0, r.jsxs)("div", {
                  className: W.memberNameContainer,
                  children: [
                      (0, r.jsx)("div", {
                          className: W.memberAvatar,
                          children: (0, r.jsx)(p.Z, { user: i }),
                      }),
                      (0, r.jsx)("div", {
                          className: W.memberName,
                          children: (0, r.jsx)(b.Text, {
                              variant: "text-sm/medium",
                              children: (0, r.jsxs)("div", {
                                  className: W.nameContainer,
                                  children: [
                                      (0, r.jsx)(b.PUh, {
                                          name: L.ZP.getName(l.guildId, null, i),
                                          colorString: null != (n = l.colorString) ? n : null,
                                          colorStrings: o,
                                          className: W.memberNameText,
                                      }),
                                      (0, r.jsx)(O.ZP, {
                                          primaryGuild: null == i ? void 0 : i.primaryGuild,
                                          userId: null == i ? void 0 : i.id,
                                          contextGuildId: l.guildId,
                                          containerClassName: W.memberClanTag,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: W.memberGlobalName,
                          children: (0, r.jsx)(b.Text, {
                              variant: "text-xs/normal",
                              color: "header-secondary",
                              tag: "span",
                              children: P.ZP.getUserTag(i),
                          }),
                      }),
                  ],
              });
    });
function J(e) {
    return {
        short: null == e ? null : (0, V.fv)(e, V.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(Y.intl.currentLocale, V.UG),
    };
}
function $(e) {
    let { member: t, showLongDate: n, isSortedBy: i } = e,
        [o, a] = l.useState(null);
    l.useEffect(() => {
        a(J(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, f.Z)(() => {
            a(J(t.joinedAtTimestamp));
        }, 10000);
    let s = i ? "text-brand" : "text-default";
    return (null == o ? void 0 : o.short) == null
        ? null
        : n
          ? (0, r.jsx)("div", {
                className: W.__invalid_joinedAtContainer,
                children: (0, r.jsx)(b.Text, {
                    variant: "text-sm/medium",
                    color: s,
                    children: o.long,
                }),
            })
          : (0, r.jsx)("div", {
                className: W.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.u, {
                    align: "left",
                    __unsupportedReactNodeAsText: o.long,
                    children: (0, r.jsx)(b.Text, {
                        variant: "text-sm/medium",
                        color: s,
                        children: o.short,
                    }),
                }),
            });
}
let ee = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: i } = e,
            { accountCreationDateShort: o, accountCreationDateLong: a } = l.useMemo(() => {
                let e = I.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, V.fv)(e, V.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(Y.intl.currentLocale, V.I),
                };
            }, [t.userId]),
            s = i ? "text-brand" : "text-default";
        return n
            ? (0, r.jsx)(b.Text, {
                  variant: "text-sm/medium",
                  color: s,
                  children: a,
              })
            : (0, r.jsx)(C.u, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, r.jsx)(b.Text, {
                      variant: "text-sm/medium",
                      color: s,
                      children: o,
                  }),
              });
    }),
    et = l.memo(function (e) {
        let {
                member: t,
                user: n,
                highestRole: i,
                isHoldingAdvancedInfoKey: a,
                onOpenModerationMenu: s,
                onOpenMemberView: d,
                compact: p,
                hasModViewPanelAccess: f,
            } = e,
            h = (0, u.e7)([N.Z, S.Z], () => N.Z.can(q.Plq.MANAGE_GUILD, S.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: g, addUsers: j, removeUser: x } = (0, U.Z)(t.guildId),
            v = (0, E.xC)(t.guildId),
            y = (0, E.hB)(t.guildId, v, t.userId),
            O = (0, u.e7)(
                [T.Z],
                () => {
                    var e;
                    return null != (e = T.Z.getSearchStateByGuildId(t.guildId).selectedSort)
                        ? e
                        : M.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c(),
            ),
            H = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && y && (g.has(t.userId) ? x(t.userId) : j([t.userId]));
                },
                [j, y, t, x, g],
            ),
            _ = O === M.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            w = O === M.d$.ORDER_BY_USER_ID_ASC || O === M.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                v &&
                    (0, r.jsx)(C.u, {
                        shouldShow: !y,
                        text: Y.intl.string(Y.t["Se4c7+"]),
                        children: (0, r.jsx)("td", {
                            children: (0, r.jsx)("div", {
                                className: o()(W.__invalid_checkbox, W.xsmallCol),
                                children: (0, r.jsx)(b.P3F, {
                                    onClick: H,
                                    children: (0, r.jsx)(m.$q, {
                                        type: m.M0.INVERTED,
                                        value: g.has(t.userId),
                                        disabled: !y,
                                    }),
                                }),
                            }),
                        }),
                    }),
                (0, r.jsx)("td", {
                    className: o()({ [W.compact]: p }),
                    children: (0, r.jsx)(X, {
                        member: t,
                        user: n,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: o()(W.smallCol, { [W.compact]: p }),
                    children: (0, r.jsx)($, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: _,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: o()(W.smallCol, { [W.compact]: p }),
                    children: (0, r.jsx)(ee, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: w,
                    }),
                }),
                h &&
                    (0, r.jsx)("td", {
                        className: o()(W.smallCol, { [W.compact]: p }),
                        children: (0, r.jsx)(A.ZP, {
                            userId: t.userId,
                            guildId: t.guildId,
                        }),
                    }),
                (0, r.jsx)("td", {
                    className: o()(W.mediumCol, { [W.compact]: p }),
                    children: (0, r.jsx)(Q, {
                        member: t,
                        highestRole: i,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: o()(W.smallCol, { [W.compact]: p }),
                    children: (0, r.jsx)(K, { member: t }),
                }),
                (0, r.jsx)("td", {
                    className: o()(W.smallCol, { [W.compact]: p }),
                    children: (0, r.jsxs)("div", {
                        className: W.actionCell,
                        children: [
                            (0, r.jsx)(C.u, {
                                asContainer: !0,
                                text: f ? Y.intl.string(Y.t.nHfkf3) : Y.intl.string(Y.t.uTre29),
                                children: (0, r.jsx)(b.P3F, {
                                    onClick: d,
                                    className: W.button,
                                    children: f
                                        ? (0, r.jsx)(R.Z, {
                                              width: en,
                                              height: en,
                                          })
                                        : (0, r.jsx)(b.tBG, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: en,
                                              height: en,
                                          }),
                                }),
                            }),
                            (0, r.jsx)(C.u, {
                                asContainer: !0,
                                text: Y.intl.string(Y.t.x8Nn4O),
                                children: (0, r.jsx)(b.P3F, {
                                    onClick: s,
                                    className: W.button,
                                    children: (0, r.jsx)(b.Huf, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: en,
                                        height: en,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    en = 18,
    er = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    el = l.memo(function (e) {
        let {
                userId: t,
                guildId: n,
                style: i,
                rowSelected: s,
                isLoading: d = !1,
                isHoldingAdvancedInfoKey: C = !1,
                compact: m = !1,
            } = e,
            { analyticsLocations: b } = (0, h.ZP)(),
            p = (0, u.e7)([w.ZP], () => w.ZP.getGuildSidebarState(n), [n]),
            f = (null == p ? void 0 : p.details.userId) === t,
            g = (0, u.e7)([T.Z], () => T.Z.getEnhancedMember(n, t), [n, t]),
            j = (0, F.zq)(g),
            x = (0, u.e7)([Z.default], () => Z.default.getUser(t), [t]),
            O = (0, y.m)(n),
            H = (0, F.RN)(null != g ? g : void 0),
            _ = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), H(e);
                },
                [H],
            ),
            S = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != g && (0, F.RE)(g, b);
                },
                [g, b],
            ),
            N = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != g &&
                            (O
                                ? (0, v.r)(g.guildId, g.userId, z.oC.MEMBER_SAFETY, { modViewPanel: G.k.INFO })
                                : (0, F.RE)(g, b));
                },
                [g, b, O],
            ),
            D = l.useCallback((e, t) => c()((0, a.omit)(e, er), (0, a.omit)(t, er)), []);
        return null == g
            ? null
            : (0, r.jsx)(k.Z, {
                  role: "row",
                  value: g,
                  style: i,
                  className: o()(
                      W.roundedRow,
                      W.memberRowContainer,
                      s && W.selected,
                      f && W.memberSelected,
                      d && W.loading,
                  ),
                  equalityFn: D,
                  onClick: S,
                  onContextMenu: _,
                  children: (0, r.jsx)(et, {
                      member: g,
                      user: x,
                      highestRole: j,
                      isHoldingAdvancedInfoKey: C,
                      onOpenModerationMenu: _,
                      onOpenMemberView: N,
                      compact: m,
                      hasModViewPanelAccess: O,
                  }),
              });
    });
