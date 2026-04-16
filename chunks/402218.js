l.d(t, { A: () => en });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(735438),
    C = l(33851),
    o = l.n(C),
    d = l(417597),
    c = l(827734),
    u = l(990078),
    m = l(397927),
    x = l(966327),
    h = l(396583),
    g = l(688810),
    H = l(576470),
    j = l(229527),
    _ = l(316031),
    f = l(706752),
    p = l(985925),
    b = l(534400),
    v = l(694318),
    A = l(967144),
    V = l(761640),
    L = l(71393),
    N = l(576705),
    R = l(287809),
    D = l(530347),
    M = l(881548),
    S = l(562153),
    I = l(661191),
    E = l(427262),
    y = l(157347),
    T = l(70738),
    Z = l(587426),
    w = l(134413),
    U = l(266047),
    O = l(178052),
    k = l(589935),
    F = l(189552),
    B = l(950072),
    P = l(652215),
    G = l(746080),
    q = l(486974),
    Y = l(985018),
    z = l(62255);
let K = i.memo(function (e) {
        let { member: t } = e,
            l = i.useMemo(() => (0, _.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            s = i.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, n.jsxs)("div", {
            className: z.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, n.jsx)(u.m, {
                        text: Y.intl.string(Y.t.QrfVTp),
                        children: (0, n.jsx)(m.EF8, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, n.jsx)(u.m, {
                        "aria-label": Y.intl.string(Y.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                            className: z.CN,
                            children: [
                                (0, n.jsx)("div", { children: Y.intl.string(Y.t["xfJP+u"]) }),
                                (0, n.jsx)(H.A, { deadline: s, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, n.jsx)(m.gQi, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, v.cx)(t.userId) &&
                    (0, n.jsx)(u.m, {
                        text: Y.intl.string(Y.t.PK9FQ2),
                        children: (0, n.jsx)(D.A, {
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, j.TR)(t) &&
                    (0, n.jsx)(u.m, {
                        text: Y.intl.string(Y.t.qOVbaX),
                        children: (0, n.jsx)(m._mZ, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    Q = i.memo(function (e) {
        let { member: t, highestRole: l } = e,
            s = (0, d.bG)([L.A], () => L.A.getGuild(t.guildId), [t.guildId]),
            r = t.roles.length - 1,
            C = i.useMemo(() => new Intl.NumberFormat(Y.intl.currentLocale).format(r), [r]),
            o = (0, F.Cy)(t),
            c = (0, F.Cy)(t, !0),
            x = (0, d.bG)([N.A], () => N.A.can(P.xBc.MANAGE_ROLES, s), [s]);
        return null == s
            ? null
            : (0, n.jsxs)("div", {
                  className: z.yk,
                  children: [
                      null != l && (0, n.jsx)(B.A, { className: a()(z.Zf, z.Lc), role: l, guildId: t.guildId }),
                      r > 0 &&
                          (0, n.jsx)(m.DUT, {
                              className: z.yt,
                              onClick: (e) => c(e),
                              children: (0, n.jsx)(u.m, {
                                  text: Y.intl.string(Y.t.DY6n4q),
                                  children: (0, n.jsxs)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", C],
                                  }),
                              }),
                          }),
                      x &&
                          (0, n.jsx)(u.m, {
                              text: Y.intl.string(Y.t.h3pSLR),
                              children: (0, n.jsx)(m.DUT, {
                                  onClick: o,
                                  className: a()(z.yt, z.$g),
                                  children: (0, n.jsx)(m.j96, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: z.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    X = i.memo(function (e) {
        let { member: t, user: l } = e,
            i = (0, A.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, n.jsxs)("div", {
                  className: z.FD,
                  children: [
                      (0, n.jsx)("div", { className: z.Wn, children: (0, n.jsx)(x.A, { user: l }) }),
                      (0, n.jsx)("div", {
                          className: z.eg,
                          children: (0, n.jsx)(m.Text, {
                              variant: "text-sm/medium",
                              children: (0, n.jsxs)("div", {
                                  className: z.VW,
                                  children: [
                                      (0, n.jsx)(m.gyj, {
                                          name: S.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: i,
                                          className: z.bc,
                                      }),
                                      (0, n.jsx)(b.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: z.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, n.jsx)("div", {
                          className: z.Br,
                          children: (0, n.jsx)(m.Text, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: E.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function W(e) {
    return {
        short: null == e ? null : (0, y.hL)(e, y.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(Y.intl.currentLocale, y.wp),
    };
}
function J(e) {
    let { member: t, showLongDate: l, isSortedBy: s } = e,
        [a, r] = i.useState(null);
    i.useEffect(() => {
        r(W(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, h.A)(() => {
            r(W(t.joinedAtTimestamp));
        }, 1e4);
    let C = s ? "text-brand" : "text-default";
    return a?.short == null
        ? null
        : l
          ? (0, n.jsx)("div", {
                className: z.__invalid_joinedAtContainer,
                children: (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: C, children: a.long }),
            })
          : (0, n.jsx)("div", {
                className: z.__invalid_joinedAtContainer,
                children: (0, n.jsx)(u.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: a.long,
                    children: (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: C, children: a.short }),
                }),
            });
}
let $ = i.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: s } = e,
            { accountCreationDateShort: a, accountCreationDateLong: r } = i.useMemo(() => {
                let e = I.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, y.hL)(e, y.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(Y.intl.currentLocale, y.OA),
                };
            }, [t.userId]),
            C = s ? "text-brand" : "text-default";
        return l
            ? (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: C, children: r })
            : (0, n.jsx)(u.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: r,
                  children: (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: C, children: a }),
              });
    }),
    ee = i.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: s,
                isHoldingAdvancedInfoKey: r,
                onOpenModerationMenu: C,
                onOpenMemberView: c,
                compact: x,
                hasModViewPanelAccess: h,
            } = e,
            g = (0, d.bG)([N.A, L.A], () => N.A.can(P.xBc.MANAGE_GUILD, L.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: H, addUsers: j, removeUser: _ } = (0, Z.A)(t.guildId),
            f = (0, w.vA)(t.guildId),
            p = (0, w.O6)(t.guildId, f, t.userId),
            b = (0, d.bG)(
                [U.A],
                () => U.A.getSearchStateByGuildId(t.guildId).selectedSort ?? T.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                o(),
            ),
            v = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && p && (H.has(t.userId) ? _(t.userId) : j([t.userId]));
                },
                [j, p, t, _, H],
            ),
            A = b === T.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            V = b === T.mF.ORDER_BY_USER_ID_ASC || b === T.mF.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                f &&
                    (0, n.jsx)("td", {
                        children: (0, n.jsx)(u.m, {
                            shouldShow: !p,
                            ariaHidden: p,
                            text: Y.intl.string(Y.t["Se4c7+"]),
                            children: (0, n.jsx)(m.DUT, {
                                onClick: v,
                                children: (0, n.jsx)(m.P7L, { checked: H.has(t.userId), disabled: !p }),
                            }),
                        }),
                    }),
                (0, n.jsx)("td", {
                    className: a()(z.QB, { [z.oE]: x }),
                    children: (0, n.jsx)(X, { member: t, user: l }),
                }),
                (0, n.jsx)("td", {
                    className: a()(z.qp, { [z.oE]: x }),
                    children: (0, n.jsx)(J, { showLongDate: r, member: t, isSortedBy: A }),
                }),
                (0, n.jsx)("td", {
                    className: a()(z.qp, { [z.oE]: x }),
                    children: (0, n.jsx)($, { showLongDate: r, member: t, isSortedBy: V }),
                }),
                g &&
                    (0, n.jsx)("td", {
                        className: a()(z.qp, { [z.oE]: x }),
                        children: (0, n.jsx)(k.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, n.jsx)("td", {
                    className: a()(z.QB, { [z.oE]: x }),
                    children: (0, n.jsx)(Q, { member: t, highestRole: s }),
                }),
                (0, n.jsx)("td", { className: a()(z.qp, { [z.oE]: x }), children: (0, n.jsx)(K, { member: t }) }),
                (0, n.jsx)("td", {
                    className: a()(z.OL, { [z.oE]: x }),
                    children: (0, n.jsxs)("div", {
                        className: z.$E,
                        children: [
                            (0, n.jsx)(u.m, {
                                asContainer: !0,
                                text: h ? Y.intl.string(Y.t.nHfkf4) : Y.intl.string(Y.t.uTre2y),
                                children: (0, n.jsx)(m.DUT, {
                                    onClick: c,
                                    className: z.x6,
                                    children: h
                                        ? (0, n.jsx)(M.A, { width: et, height: et })
                                        : (0, n.jsx)(m.nys, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: et,
                                              height: et,
                                          }),
                                }),
                            }),
                            (0, n.jsx)(u.m, {
                                asContainer: !0,
                                text: Y.intl.string(Y.t.x8Nn4M),
                                children: (0, n.jsx)(m.DUT, {
                                    onClick: C,
                                    className: z.x6,
                                    children: (0, n.jsx)(m.FHP, {
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
    el = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    en = i.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: s,
                rowSelected: C,
                isLoading: c = !1,
                isHoldingAdvancedInfoKey: u = !1,
                compact: m = !1,
            } = e,
            { analyticsLocations: x } = (0, g.Ay)(),
            h = (0, d.bG)([V.Ay], () => V.Ay.getGuildSidebarState(l), [l]),
            H = h?.details.userId === t,
            j = (0, d.bG)([U.A], () => U.A.getEnhancedMember(l, t), [l, t]),
            _ = (0, F.YH)(j),
            b = (0, d.bG)([R.default], () => R.default.getUser(t), [t]),
            v = (0, p.q)(l),
            A = (0, F.UY)(j ?? void 0),
            L = i.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), A(e);
                },
                [A],
            ),
            N = i.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != j && (0, F.Ko)(j, x);
                },
                [j, x],
            ),
            D = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != j &&
                            (v
                                ? (0, f.z)(j.guildId, j.userId, G.VV.MEMBER_SAFETY, { modViewPanel: q.g.INFO })
                                : (0, F.Ko)(j, x));
                },
                [j, x, v],
            ),
            M = i.useCallback((e, t) => o()((0, r.omit)(e, el), (0, r.omit)(t, el)), []);
        return null == j
            ? null
            : (0, n.jsx)(O.A, {
                  role: "row",
                  value: j,
                  style: s,
                  className: a()(z.yF, z.iA, C && z.wH, H && z.qb, c && z.Lq),
                  equalityFn: M,
                  onClick: N,
                  onContextMenu: L,
                  children: (0, n.jsx)(ee, {
                      member: j,
                      user: b,
                      highestRole: _,
                      isHoldingAdvancedInfoKey: u,
                      onOpenModerationMenu: L,
                      onOpenMemberView: D,
                      compact: m,
                      hasModViewPanelAccess: v,
                  }),
              });
    });
