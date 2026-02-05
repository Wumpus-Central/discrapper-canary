l.d(t, { A: () => en });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(735438),
    o = l(33851),
    C = l.n(o),
    d = l(417597),
    c = l(827734),
    u = l(990078),
    m = l(397927),
    x = l(966327),
    h = l(396583),
    g = l(688810),
    _ = l(576470),
    H = l(229527),
    p = l(316031),
    f = l(706752),
    j = l(985925),
    v = l(534400),
    b = l(694318),
    A = l(967144),
    L = l(761640),
    N = l(71393),
    V = l(576705),
    R = l(287809),
    M = l(530347),
    D = l(881548),
    S = l(562153),
    I = l(661191),
    E = l(427262),
    y = l(157347),
    T = l(70738),
    w = l(134413),
    Z = l(266047),
    U = l(178052),
    O = l(589935),
    k = l(225671),
    F = l(189552),
    B = l(950072),
    P = l(652215),
    G = l(746080),
    q = l(486974),
    z = l(985018),
    Y = l(918372);
let K = i.memo(function (e) {
        let { member: t } = e,
            l = i.useMemo(() => (0, p.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            s = i.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, n.jsxs)("div", {
            className: Y.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, n.jsx)(u.m, {
                        text: z.intl.string(z.t.QrfVTp),
                        children: (0, n.jsx)(m.EF8, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, n.jsx)(u.m, {
                        "aria-label": z.intl.string(z.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                            className: Y.CN,
                            children: [
                                (0, n.jsx)("div", { children: z.intl.string(z.t["xfJP+u"]) }),
                                (0, n.jsx)(_.A, { deadline: s, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, n.jsx)(m.gQi, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, b.cx)(t.userId) &&
                    (0, n.jsx)(u.m, {
                        text: z.intl.string(z.t.PK9FQ2),
                        children: (0, n.jsx)(M.A, {
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, H.TR)(t) &&
                    (0, n.jsx)(u.m, {
                        text: z.intl.string(z.t.qOVbaX),
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
            s = (0, d.bG)([N.A], () => N.A.getGuild(t.guildId), [t.guildId]),
            r = t.roles.length - 1,
            o = i.useMemo(() => new Intl.NumberFormat(z.intl.currentLocale).format(r), [r]),
            C = (0, F.Cy)(t),
            c = (0, F.Cy)(t, !0),
            x = (0, d.bG)([V.A], () => V.A.can(P.xBc.MANAGE_ROLES, s), [s]);
        return null == s
            ? null
            : (0, n.jsxs)("div", {
                  className: Y.yk,
                  children: [
                      null != l && (0, n.jsx)(B.A, { className: a()(Y.Zf, Y.Lc), role: l, guildId: t.guildId }),
                      r > 0 &&
                          (0, n.jsx)(m.DUT, {
                              className: Y.yt,
                              onClick: (e) => c(e),
                              children: (0, n.jsx)(u.m, {
                                  text: z.intl.string(z.t.DY6n4q),
                                  children: (0, n.jsxs)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", o],
                                  }),
                              }),
                          }),
                      x &&
                          (0, n.jsx)(u.m, {
                              text: z.intl.string(z.t.h3pSLR),
                              children: (0, n.jsx)(m.DUT, {
                                  onClick: C,
                                  className: a()(Y.yt, Y.$g),
                                  children: (0, n.jsx)(m.j96, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: Y.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    W = i.memo(function (e) {
        let { member: t, user: l } = e,
            i = (0, A.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, n.jsxs)("div", {
                  className: Y.FD,
                  children: [
                      (0, n.jsx)("div", { className: Y.Wn, children: (0, n.jsx)(x.A, { user: l }) }),
                      (0, n.jsx)("div", {
                          className: Y.eg,
                          children: (0, n.jsx)(m.Text, {
                              variant: "text-sm/medium",
                              children: (0, n.jsxs)("div", {
                                  className: Y.VW,
                                  children: [
                                      (0, n.jsx)(m.gyj, {
                                          name: S.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: i,
                                          className: Y.bc,
                                      }),
                                      (0, n.jsx)(v.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: Y.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, n.jsx)("div", {
                          className: Y.Br,
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
function X(e) {
    return {
        short: null == e ? null : (0, y.hL)(e, y.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(z.intl.currentLocale, y.wp),
    };
}
function J(e) {
    let { member: t, showLongDate: l, isSortedBy: s } = e,
        [a, r] = i.useState(null);
    i.useEffect(() => {
        r(X(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, h.A)(() => {
            r(X(t.joinedAtTimestamp));
        }, 1e4);
    let o = s ? "text-brand" : "text-default";
    return a?.short == null
        ? null
        : l
          ? (0, n.jsx)("div", {
                className: Y.__invalid_joinedAtContainer,
                children: (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: o, children: a.long }),
            })
          : (0, n.jsx)("div", {
                className: Y.__invalid_joinedAtContainer,
                children: (0, n.jsx)(u.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: a.long,
                    children: (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: o, children: a.short }),
                }),
            });
}
let $ = i.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: s } = e,
            { accountCreationDateShort: a, accountCreationDateLong: r } = i.useMemo(() => {
                let e = I.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, y.hL)(e, y.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(z.intl.currentLocale, y.OA),
                };
            }, [t.userId]),
            o = s ? "text-brand" : "text-default";
        return l
            ? (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: o, children: r })
            : (0, n.jsx)(u.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: r,
                  children: (0, n.jsx)(m.Text, { variant: "text-sm/medium", color: o, children: a }),
              });
    }),
    ee = i.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: s,
                isHoldingAdvancedInfoKey: r,
                onOpenModerationMenu: o,
                onOpenMemberView: c,
                compact: x,
                hasModViewPanelAccess: h,
            } = e,
            g = (0, d.bG)([V.A, N.A], () => V.A.can(P.xBc.MANAGE_GUILD, N.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: _, addUsers: H, removeUser: p } = (0, k.A)(t.guildId),
            f = (0, w.vA)(t.guildId),
            j = (0, w.O6)(t.guildId, f, t.userId),
            v = (0, d.bG)(
                [Z.A],
                () => Z.A.getSearchStateByGuildId(t.guildId).selectedSort ?? T.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                C(),
            ),
            b = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && j && (_.has(t.userId) ? p(t.userId) : H([t.userId]));
                },
                [H, j, t, p, _],
            ),
            A = v === T.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            L = v === T.mF.ORDER_BY_USER_ID_ASC || v === T.mF.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                f &&
                    (0, n.jsx)("td", {
                        children: (0, n.jsx)(u.m, {
                            shouldShow: !j,
                            ariaHidden: j,
                            text: z.intl.string(z.t["Se4c7+"]),
                            children: (0, n.jsx)(m.DUT, {
                                onClick: b,
                                children: (0, n.jsx)(m.P7L, { checked: _.has(t.userId), disabled: !j }),
                            }),
                        }),
                    }),
                (0, n.jsx)("td", {
                    className: a()(Y.QB, { [Y.oE]: x }),
                    children: (0, n.jsx)(W, { member: t, user: l }),
                }),
                (0, n.jsx)("td", {
                    className: a()(Y.qp, { [Y.oE]: x }),
                    children: (0, n.jsx)(J, { showLongDate: r, member: t, isSortedBy: A }),
                }),
                (0, n.jsx)("td", {
                    className: a()(Y.qp, { [Y.oE]: x }),
                    children: (0, n.jsx)($, { showLongDate: r, member: t, isSortedBy: L }),
                }),
                g &&
                    (0, n.jsx)("td", {
                        className: a()(Y.qp, { [Y.oE]: x }),
                        children: (0, n.jsx)(O.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, n.jsx)("td", {
                    className: a()(Y.QB, { [Y.oE]: x }),
                    children: (0, n.jsx)(Q, { member: t, highestRole: s }),
                }),
                (0, n.jsx)("td", { className: a()(Y.qp, { [Y.oE]: x }), children: (0, n.jsx)(K, { member: t }) }),
                (0, n.jsx)("td", {
                    className: a()(Y.OL, { [Y.oE]: x }),
                    children: (0, n.jsxs)("div", {
                        className: Y.$E,
                        children: [
                            (0, n.jsx)(u.m, {
                                asContainer: !0,
                                text: h ? z.intl.string(z.t.nHfkf4) : z.intl.string(z.t.uTre2y),
                                children: (0, n.jsx)(m.DUT, {
                                    onClick: c,
                                    className: Y.x6,
                                    children: h
                                        ? (0, n.jsx)(D.A, { width: et, height: et })
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
                                text: z.intl.string(z.t.x8Nn4M),
                                children: (0, n.jsx)(m.DUT, {
                                    onClick: o,
                                    className: Y.x6,
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
                rowSelected: o,
                isLoading: c = !1,
                isHoldingAdvancedInfoKey: u = !1,
                compact: m = !1,
            } = e,
            { analyticsLocations: x } = (0, g.Ay)(),
            h = (0, d.bG)([L.Ay], () => L.Ay.getGuildSidebarState(l), [l]),
            _ = h?.details.userId === t,
            H = (0, d.bG)([Z.A], () => Z.A.getEnhancedMember(l, t), [l, t]),
            p = (0, F.YH)(H),
            v = (0, d.bG)([R.default], () => R.default.getUser(t), [t]),
            b = (0, j.q)(l),
            A = (0, F.UY)(H ?? void 0),
            N = i.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), A(e);
                },
                [A],
            ),
            V = i.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != H && (0, F.Ko)(H, x);
                },
                [H, x],
            ),
            M = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != H &&
                            (b
                                ? (0, f.z)(H.guildId, H.userId, G.VV.MEMBER_SAFETY, { modViewPanel: q.g.INFO })
                                : (0, F.Ko)(H, x));
                },
                [H, x, b],
            ),
            D = i.useCallback((e, t) => C()((0, r.omit)(e, el), (0, r.omit)(t, el)), []);
        return null == H
            ? null
            : (0, n.jsx)(U.A, {
                  role: "row",
                  value: H,
                  style: s,
                  className: a()(Y.yF, Y.iA, o && Y.wH, _ && Y.qb, c && Y.Lq),
                  equalityFn: D,
                  onClick: V,
                  onContextMenu: N,
                  children: (0, n.jsx)(ee, {
                      member: H,
                      user: v,
                      highestRole: p,
                      isHoldingAdvancedInfoKey: u,
                      onOpenModerationMenu: N,
                      onOpenMemberView: M,
                      compact: m,
                      hasModViewPanelAccess: b,
                  }),
              });
    });
