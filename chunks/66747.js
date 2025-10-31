n.d(t, { Z: () => er }), n(388685);
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
    m = n(481060),
    b = n(700582),
    p = n(745735),
    f = n(906732),
    h = n(346486),
    g = n(715903),
    j = n(69882),
    x = n(189432),
    v = n(189357),
    y = n(172751),
    O = n(493892),
    H = n(884902),
    _ = n(433355),
    w = n(430824),
    S = n(496675),
    Z = n(594174),
    N = n(203893),
    D = n(777288),
    R = n(5192),
    L = n(709054),
    P = n(51144),
    I = n(815790),
    V = n(588215),
    M = n(241559),
    E = n(893966),
    T = n(685244),
    k = n(16829),
    A = n(256003),
    U = n(472596),
    F = n(285173),
    B = n(981631),
    q = n(176505),
    G = n(50493),
    z = n(388032),
    Y = n(266631);
let Q = l.memo(function (e) {
        let { member: t } = e,
            n = l.useMemo(() => (0, j.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            i = l.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, r.jsxs)("div", {
            className: Y.flagContainer,
            children: [
                t.hasUnusualDmActivity &&
                    (0, r.jsx)(C.u, {
                        text: z.intl.string(z.t.QrfVTp),
                        children: (0, r.jsx)(m.b6m, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_MUTED.css,
                        }),
                    }),
                n &&
                    (0, r.jsx)(C.u, {
                        "aria-label": z.intl.string(z.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                            className: Y.communicationDisabledTooltip,
                            children: [
                                (0, r.jsx)("div", { children: z.intl.string(z.t["xfJP+u"]) }),
                                (0, r.jsx)(h.Z, {
                                    deadline: i,
                                    showUnits: !0,
                                    stopAtOneSec: !0,
                                }),
                            ],
                        }),
                        children: (0, r.jsx)(m.YlB, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_DANGER.css,
                        }),
                    }),
                (0, O.He)(t.userId) &&
                    (0, r.jsx)(C.u, {
                        text: z.intl.string(z.t.PK9FQ2),
                        children: (0, r.jsx)(N.Z, {
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_DANGER.css,
                        }),
                    }),
                (0, g.EY)(t) &&
                    (0, r.jsx)(C.u, {
                        text: z.intl.string(z.t.qOVbaX),
                        children: (0, r.jsx)(m.ics, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.Z.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    W = l.memo(function (e) {
        let { member: t, highestRole: n } = e,
            i = (0, u.e7)([w.Z], () => w.Z.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            s = l.useMemo(() => new Intl.NumberFormat(z.intl.currentLocale).format(a), [a]),
            c = (0, U.vN)(t),
            d = (0, U.vN)(t, !0),
            b = (0, u.e7)([S.Z], () => S.Z.can(B.Plq.MANAGE_ROLES, i), [i]);
        return null == i
            ? null
            : (0, r.jsxs)("div", {
                  className: Y.roleContainer,
                  children: [
                      null != n &&
                          (0, r.jsx)(F.Z, {
                              className: o()(Y.roleTooltipItem, Y.highestRole),
                              role: n,
                              guildId: t.guildId,
                          }),
                      a > 0 &&
                          (0, r.jsx)(m.P3F, {
                              className: Y.otherRoles,
                              onClick: (e) => d(e),
                              children: (0, r.jsx)(C.u, {
                                  text: z.intl.string(z.t.DY6n4q),
                                  children: (0, r.jsxs)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "header-primary",
                                      children: ["+", s],
                                  }),
                              }),
                          }),
                      b &&
                          (0, r.jsx)(C.u, {
                              text: z.intl.string(z.t.h3pSLR),
                              children: (0, r.jsx)(m.P3F, {
                                  onClick: c,
                                  className: o()(Y.otherRoles, Y.addRoleContainer),
                                  children: (0, r.jsx)(m.qJs, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: Y.addRoleIcon,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    K = l.memo(function (e) {
        var t, n;
        let { member: l, user: i } = e,
            o = (0, H.X7)(
                null == l ? void 0 : l.guildId,
                null == l ? void 0 : l.userId,
                null != (t = null == l ? void 0 : l.colorStrings) ? t : null,
            );
        return null == i || null == l
            ? null
            : (0, r.jsxs)("div", {
                  className: Y.memberNameContainer,
                  children: [
                      (0, r.jsx)("div", {
                          className: Y.memberAvatar,
                          children: (0, r.jsx)(b.Z, { user: i }),
                      }),
                      (0, r.jsx)("div", {
                          className: Y.memberName,
                          children: (0, r.jsx)(m.Text, {
                              variant: "text-sm/medium",
                              children: (0, r.jsxs)("div", {
                                  className: Y.nameContainer,
                                  children: [
                                      (0, r.jsx)(m.PUh, {
                                          name: R.ZP.getName(l.guildId, null, i),
                                          colorString: null != (n = l.colorString) ? n : null,
                                          colorStrings: o,
                                          className: Y.memberNameText,
                                      }),
                                      (0, r.jsx)(y.ZP, {
                                          primaryGuild: null == i ? void 0 : i.primaryGuild,
                                          userId: null == i ? void 0 : i.id,
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
                              children: P.ZP.getUserTag(i),
                          }),
                      }),
                  ],
              });
    });
function J(e) {
    return {
        short: null == e ? null : (0, I.fv)(e, I.jq.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(z.intl.currentLocale, I.UG),
    };
}
function X(e) {
    let { member: t, showLongDate: n, isSortedBy: i } = e,
        [o, a] = l.useState(null);
    l.useEffect(() => {
        a(J(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, p.Z)(() => {
            a(J(t.joinedAtTimestamp));
        }, 10000);
    let s = i ? "text-brand" : "text-default";
    return (null == o ? void 0 : o.short) == null
        ? null
        : n
          ? (0, r.jsx)("div", {
                className: Y.__invalid_joinedAtContainer,
                children: (0, r.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    color: s,
                    children: o.long,
                }),
            })
          : (0, r.jsx)("div", {
                className: Y.__invalid_joinedAtContainer,
                children: (0, r.jsx)(C.u, {
                    align: "left",
                    __unsupportedReactNodeAsText: o.long,
                    children: (0, r.jsx)(m.Text, {
                        variant: "text-sm/medium",
                        color: s,
                        children: o.short,
                    }),
                }),
            });
}
let $ = l.memo(function (e) {
        let { member: t, showLongDate: n, isSortedBy: i } = e,
            { accountCreationDateShort: o, accountCreationDateLong: a } = l.useMemo(() => {
                let e = L.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, I.fv)(e, I.jq.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(z.intl.currentLocale, I.I),
                };
            }, [t.userId]),
            s = i ? "text-brand" : "text-default";
        return n
            ? (0, r.jsx)(m.Text, {
                  variant: "text-sm/medium",
                  color: s,
                  children: a,
              })
            : (0, r.jsx)(C.u, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, r.jsx)(m.Text, {
                      variant: "text-sm/medium",
                      color: s,
                      children: o,
                  }),
              });
    }),
    ee = l.memo(function (e) {
        let {
                member: t,
                user: n,
                highestRole: i,
                isHoldingAdvancedInfoKey: a,
                onOpenModerationMenu: s,
                onOpenMemberView: d,
                compact: b,
                hasModViewPanelAccess: p,
            } = e,
            f = (0, u.e7)([S.Z, w.Z], () => S.Z.can(B.Plq.MANAGE_GUILD, w.Z.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: h, addUsers: g, removeUser: j } = (0, A.Z)(t.guildId),
            x = (0, M.xC)(t.guildId),
            v = (0, M.hB)(t.guildId, x, t.userId),
            y = (0, u.e7)(
                [E.Z],
                () => {
                    var e;
                    return null != (e = E.Z.getSearchStateByGuildId(t.guildId).selectedSort)
                        ? e
                        : V.d$.ORDER_BY_UNSPECIFIED;
                },
                [t.guildId],
                c(),
            ),
            O = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && v && (h.has(t.userId) ? j(t.userId) : g([t.userId]));
                },
                [g, v, t, j, h],
            ),
            H = y === V.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
            _ = y === V.d$.ORDER_BY_USER_ID_ASC || y === V.d$.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                x &&
                    (0, r.jsx)(C.u, {
                        shouldShow: !v,
                        text: z.intl.string(z.t["Se4c7+"]),
                        children: (0, r.jsx)("td", {
                            children: (0, r.jsx)("div", {
                                className: o()(Y.__invalid_checkbox, Y.xsmallCol),
                                children: (0, r.jsx)(m.P3F, {
                                    onClick: O,
                                    children: (0, r.jsx)(m.FZ5, {
                                        checked: h.has(t.userId),
                                        disabled: !v,
                                    }),
                                }),
                            }),
                        }),
                    }),
                (0, r.jsx)("td", {
                    className: o()({ [Y.compact]: b }),
                    children: (0, r.jsx)(K, {
                        member: t,
                        user: n,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: o()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(X, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: H,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: o()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsx)($, {
                        showLongDate: a,
                        member: t,
                        isSortedBy: _,
                    }),
                }),
                f &&
                    (0, r.jsx)("td", {
                        className: o()(Y.smallCol, { [Y.compact]: b }),
                        children: (0, r.jsx)(k.ZP, {
                            userId: t.userId,
                            guildId: t.guildId,
                        }),
                    }),
                (0, r.jsx)("td", {
                    className: o()(Y.mediumCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(W, {
                        member: t,
                        highestRole: i,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: o()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsx)(Q, { member: t }),
                }),
                (0, r.jsx)("td", {
                    className: o()(Y.smallCol, { [Y.compact]: b }),
                    children: (0, r.jsxs)("div", {
                        className: Y.actionCell,
                        children: [
                            (0, r.jsx)(C.u, {
                                asContainer: !0,
                                text: p ? z.intl.string(z.t.nHfkf4) : z.intl.string(z.t.uTre2y),
                                children: (0, r.jsx)(m.P3F, {
                                    onClick: d,
                                    className: Y.button,
                                    children: p
                                        ? (0, r.jsx)(D.Z, {
                                              width: et,
                                              height: et,
                                          })
                                        : (0, r.jsx)(m.tBG, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: et,
                                              height: et,
                                          }),
                                }),
                            }),
                            (0, r.jsx)(C.u, {
                                asContainer: !0,
                                text: z.intl.string(z.t.x8Nn4M),
                                children: (0, r.jsx)(m.P3F, {
                                    onClick: s,
                                    className: Y.button,
                                    children: (0, r.jsx)(m.Huf, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: et,
                                        height: et,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    et = 18,
    en = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    er = l.memo(function (e) {
        let {
                userId: t,
                guildId: n,
                style: i,
                rowSelected: s,
                isLoading: d = !1,
                isHoldingAdvancedInfoKey: C = !1,
                compact: m = !1,
            } = e,
            { analyticsLocations: b } = (0, f.ZP)(),
            p = (0, u.e7)([_.ZP], () => _.ZP.getGuildSidebarState(n), [n]),
            h = (null == p ? void 0 : p.details.userId) === t,
            g = (0, u.e7)([E.Z], () => E.Z.getEnhancedMember(n, t), [n, t]),
            j = (0, U.zq)(g),
            y = (0, u.e7)([Z.default], () => Z.default.getUser(t), [t]),
            O = (0, v.m)(n),
            H = (0, U.RN)(null != g ? g : void 0),
            w = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), H(e);
                },
                [H],
            ),
            S = l.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != g && (0, U.RE)(g, b);
                },
                [g, b],
            ),
            N = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != g &&
                            (O
                                ? (0, x.r)(g.guildId, g.userId, q.oC.MEMBER_SAFETY, { modViewPanel: G.k.INFO })
                                : (0, U.RE)(g, b));
                },
                [g, b, O],
            ),
            D = l.useCallback((e, t) => c()((0, a.omit)(e, en), (0, a.omit)(t, en)), []);
        return null == g
            ? null
            : (0, r.jsx)(T.Z, {
                  role: "row",
                  value: g,
                  style: i,
                  className: o()(
                      Y.roundedRow,
                      Y.memberRowContainer,
                      s && Y.selected,
                      h && Y.memberSelected,
                      d && Y.loading,
                  ),
                  equalityFn: D,
                  onClick: S,
                  onContextMenu: w,
                  children: (0, r.jsx)(ee, {
                      member: g,
                      user: y,
                      highestRole: j,
                      isHoldingAdvancedInfoKey: C,
                      onOpenModerationMenu: w,
                      onOpenMemberView: N,
                      compact: m,
                      hasModViewPanelAccess: O,
                  }),
              });
    });
