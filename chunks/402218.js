l.d(t, { A: () => eu });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    C = l(735438),
    r = l(33851),
    o = l.n(r),
    d = l(417597),
    c = l(827734),
    u = l(990078),
    m = l(953822),
    h = l(60270),
    x = l(353182),
    g = l(939249),
    H = l(834730),
    _ = l(307301),
    p = l(463930),
    f = l(658675),
    j = l(950305),
    b = l(530005),
    A = l(966327),
    v = l(396583),
    V = l(688810),
    L = l(576470),
    D = l(229527),
    R = l(316031),
    M = l(706752),
    E = l(985925),
    N = l(534400),
    I = l(694318),
    S = l(967144),
    y = l(761640),
    Z = l(71393),
    w = l(576705),
    T = l(287809),
    U = l(530347),
    k = l(881548),
    O = l(562153),
    F = l(661191),
    B = l(427262),
    G = l(157347),
    P = l(70738),
    Y = l(587426),
    z = l(134413),
    q = l(266047),
    K = l(178052),
    $ = l(589935),
    Q = l(189552),
    X = l(950072),
    J = l(652215),
    W = l(746080),
    ee = l(486974),
    et = l(985018),
    el = l(62255);
let en = i.memo(function (e) {
        let { member: t } = e,
            l = i.useMemo(() => (0, R.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            a = i.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, n.jsxs)("div", {
            className: el.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, n.jsx)(u.m, {
                        text: et.intl.string(et.t.QrfVTp),
                        children: (0, n.jsx)(m.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, n.jsx)(u.m, {
                        "aria-label": et.intl.string(et.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                            className: el.CN,
                            children: [
                                (0, n.jsx)("div", { children: et.intl.string(et.t["xfJP+u"]) }),
                                (0, n.jsx)(L.A, { deadline: a, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, n.jsx)(h.g, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, I.cx)(t.userId) &&
                    (0, n.jsx)(u.m, {
                        text: et.intl.string(et.t.PK9FQ2),
                        children: (0, n.jsx)(U.A, {
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, D.TR)(t) &&
                    (0, n.jsx)(u.m, {
                        text: et.intl.string(et.t.qOVbaX),
                        children: (0, n.jsx)(x._, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: c.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    ei = i.memo(function (e) {
        let { member: t, highestRole: l } = e,
            a = (0, d.bG)([Z.A], () => Z.A.getGuild(t.guildId), [t.guildId]),
            C = t.roles.length - 1,
            r = i.useMemo(() => new Intl.NumberFormat(et.intl.currentLocale).format(C), [C]),
            o = (0, Q.Cy)(t),
            c = (0, Q.Cy)(t, !0),
            m = (0, d.bG)([w.A], () => w.A.can(J.xBc.MANAGE_ROLES, a), [a]);
        return null == a
            ? null
            : (0, n.jsxs)("div", {
                  className: el.yk,
                  children: [
                      null != l && (0, n.jsx)(X.A, { className: s()(el.Zf, el.Lc), role: l, guildId: t.guildId }),
                      C > 0 &&
                          (0, n.jsx)(g.D, {
                              className: el.yt,
                              onClick: (e) => c(e),
                              children: (0, n.jsx)(u.m, {
                                  text: et.intl.string(et.t.DY6n4q),
                                  children: (0, n.jsxs)(H.E, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      m &&
                          (0, n.jsx)(u.m, {
                              text: et.intl.string(et.t.h3pSLR),
                              children: (0, n.jsx)(g.D, {
                                  onClick: o,
                                  className: s()(el.yt, el.$g),
                                  children: (0, n.jsx)(_.j, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: el.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    ea = i.memo(function (e) {
        let { member: t, user: l } = e,
            i = (0, S.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, n.jsxs)("div", {
                  className: el.FD,
                  children: [
                      (0, n.jsx)("div", { className: el.Wn, children: (0, n.jsx)(A.A, { user: l }) }),
                      (0, n.jsx)("div", {
                          className: el.eg,
                          children: (0, n.jsx)(H.E, {
                              variant: "text-sm/medium",
                              children: (0, n.jsxs)("div", {
                                  className: el.VW,
                                  children: [
                                      (0, n.jsx)(p.g, {
                                          name: O.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: i,
                                          className: el.bc,
                                      }),
                                      (0, n.jsx)(N.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: el.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, n.jsx)("div", {
                          className: el.Br,
                          children: (0, n.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: B.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function es(e) {
    return {
        short: null == e ? null : (0, G.hL)(e, G.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(et.intl.currentLocale, G.wp),
    };
}
function eC(e) {
    let { member: t, showLongDate: l, isSortedBy: a } = e,
        [s, C] = i.useState(null);
    i.useEffect(() => {
        C(es(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, v.A)(() => {
            C(es(t.joinedAtTimestamp));
        }, 1e4);
    let r = a ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, n.jsx)("div", {
                className: el.__invalid_joinedAtContainer,
                children: (0, n.jsx)(H.E, { variant: "text-sm/medium", color: r, children: s.long }),
            })
          : (0, n.jsx)("div", {
                className: el.__invalid_joinedAtContainer,
                children: (0, n.jsx)(u.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, n.jsx)(H.E, { variant: "text-sm/medium", color: r, children: s.short }),
                }),
            });
}
let er = i.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: a } = e,
            { accountCreationDateShort: s, accountCreationDateLong: C } = i.useMemo(() => {
                let e = F.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, G.hL)(e, G.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(et.intl.currentLocale, G.OA),
                };
            }, [t.userId]),
            r = a ? "text-brand" : "text-default";
        return l
            ? (0, n.jsx)(H.E, { variant: "text-sm/medium", color: r, children: C })
            : (0, n.jsx)(u.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: C,
                  children: (0, n.jsx)(H.E, { variant: "text-sm/medium", color: r, children: s }),
              });
    }),
    eo = i.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: a,
                isHoldingAdvancedInfoKey: C,
                onOpenModerationMenu: r,
                onOpenMemberView: c,
                compact: m,
                hasModViewPanelAccess: h,
            } = e,
            x = (0, d.bG)([w.A, Z.A], () => w.A.can(J.xBc.MANAGE_GUILD, Z.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: H, addUsers: _, removeUser: p } = (0, Y.A)(t.guildId),
            A = (0, z.vA)(t.guildId),
            v = (0, z.O6)(t.guildId, A, t.userId),
            V = (0, d.bG)(
                [q.A],
                () => q.A.getSearchStateByGuildId(t.guildId).selectedSort ?? P.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                o(),
            ),
            L = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && v && (H.has(t.userId) ? p(t.userId) : _([t.userId]));
                },
                [_, v, t, p, H],
            ),
            D = V === P.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            R = V === P.mF.ORDER_BY_USER_ID_ASC || V === P.mF.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                A &&
                    (0, n.jsx)("td", {
                        children: (0, n.jsx)(u.m, {
                            shouldShow: !v,
                            ariaHidden: v,
                            text: et.intl.string(et.t["Se4c7+"]),
                            children: (0, n.jsx)(g.D, {
                                onClick: L,
                                children: (0, n.jsx)(f.P, { checked: H.has(t.userId), disabled: !v }),
                            }),
                        }),
                    }),
                (0, n.jsx)("td", {
                    className: s()(el.QB, { [el.oE]: m }),
                    children: (0, n.jsx)(ea, { member: t, user: l }),
                }),
                (0, n.jsx)("td", {
                    className: s()(el.qp, { [el.oE]: m }),
                    children: (0, n.jsx)(eC, { showLongDate: C, member: t, isSortedBy: D }),
                }),
                (0, n.jsx)("td", {
                    className: s()(el.qp, { [el.oE]: m }),
                    children: (0, n.jsx)(er, { showLongDate: C, member: t, isSortedBy: R }),
                }),
                x &&
                    (0, n.jsx)("td", {
                        className: s()(el.qp, { [el.oE]: m }),
                        children: (0, n.jsx)($.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, n.jsx)("td", {
                    className: s()(el.QB, { [el.oE]: m }),
                    children: (0, n.jsx)(ei, { member: t, highestRole: a }),
                }),
                (0, n.jsx)("td", { className: s()(el.qp, { [el.oE]: m }), children: (0, n.jsx)(en, { member: t }) }),
                (0, n.jsx)("td", {
                    className: s()(el.OL, { [el.oE]: m }),
                    children: (0, n.jsxs)("div", {
                        className: el.$E,
                        children: [
                            (0, n.jsx)(u.m, {
                                asContainer: !0,
                                text: h ? et.intl.string(et.t.nHfkf4) : et.intl.string(et.t.uTre2y),
                                children: (0, n.jsx)(g.D, {
                                    onClick: c,
                                    className: el.x6,
                                    children: h
                                        ? (0, n.jsx)(k.A, { width: ed, height: ed })
                                        : (0, n.jsx)(j.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: ed,
                                              height: ed,
                                          }),
                                }),
                            }),
                            (0, n.jsx)(u.m, {
                                asContainer: !0,
                                text: et.intl.string(et.t.x8Nn4M),
                                children: (0, n.jsx)(g.D, {
                                    onClick: r,
                                    className: el.x6,
                                    children: (0, n.jsx)(b.F, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: ed,
                                        height: ed,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    ed = 18,
    ec = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    eu = i.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: a,
                rowSelected: r,
                isLoading: c = !1,
                isHoldingAdvancedInfoKey: u = !1,
                compact: m = !1,
            } = e,
            { analyticsLocations: h } = (0, V.Ay)(),
            x = (0, d.bG)([y.Ay], () => y.Ay.getGuildSidebarState(l), [l]),
            g = x?.details.userId === t,
            H = (0, d.bG)([q.A], () => q.A.getEnhancedMember(l, t), [l, t]),
            _ = (0, Q.YH)(H),
            p = (0, d.bG)([T.default], () => T.default.getUser(t), [t]),
            f = (0, E.q)(l),
            j = (0, Q.UY)(H ?? void 0),
            b = i.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), j(e);
                },
                [j],
            ),
            A = i.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != H && (0, Q.Ko)(H, h);
                },
                [H, h],
            ),
            v = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != H &&
                            (f
                                ? (0, M.z)(H.guildId, H.userId, W.VV.MEMBER_SAFETY, { modViewPanel: ee.g.INFO })
                                : (0, Q.Ko)(H, h));
                },
                [H, h, f],
            ),
            L = i.useCallback((e, t) => o()((0, C.omit)(e, ec), (0, C.omit)(t, ec)), []);
        return null == H
            ? null
            : (0, n.jsx)(K.A, {
                  role: "row",
                  value: H,
                  style: a,
                  className: s()(el.yF, el.iA, r && el.wH, g && el.qb, c && el.Lq),
                  equalityFn: L,
                  onClick: A,
                  onContextMenu: b,
                  children: (0, n.jsx)(eo, {
                      member: H,
                      user: p,
                      highestRole: _,
                      isHoldingAdvancedInfoKey: u,
                      onOpenModerationMenu: b,
                      onOpenMemberView: v,
                      compact: m,
                      hasModViewPanelAccess: f,
                  }),
              });
    });
