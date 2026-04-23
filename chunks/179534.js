n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    o = n(573613),
    d = n(534514),
    c = n(834730),
    u = n(462824),
    m = n(793574),
    g = n(688810),
    h = n(985925),
    x = n(547015),
    _ = n(997509),
    p = n(138298),
    A = n(657331),
    E = n(761640),
    f = n(71393),
    j = n(343969),
    N = n(266047),
    I = n(221950),
    C = n(735937),
    b = n(104685),
    v = n(856768),
    S = n(189552),
    T = n(508160),
    y = n(749060),
    R = n(374963),
    L = n(636670),
    D = n(652215),
    O = n(985018),
    G = n(936258),
    M = n(515810);
function k(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([f.A], () => f.A.getGuild(t)),
        { analyticsLocations: s } = (0, g.Ay)(m.A.GUILD_SETTINGS_MEMBERS_PAGE),
        k = (0, h.q)(t),
        U = (0, a.bG)([E.Ay], () => E.Ay.getGuildSidebarState(t), [t]),
        w = l.useCallback(() => {
            p.A.closeGuildSidebar(t);
        }, [t]),
        P = !1 == !!n?.features.has(D.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        B = (0, a.bG)([N.A], () => N.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        F = l.useCallback(
            (e) => {
                null != e &&
                    (0, A.openUserProfileModal)({ userId: e.userId, guildId: e.guildId, sourceAnalyticsLocations: s });
            },
            [s],
        ),
        H = l.useRef(null),
        V = l.useCallback(() => {
            H.current?.resetSearchText();
        }, []),
        z = (0, j.Ms)(t),
        W = (0, j.Wl)(t);
    if (null == n) return null;
    let Y = (0, S.ii)(W, z, B);
    return (0, i.jsxs)(g.f5, {
        value: s,
        children: [
            (0, i.jsx)("div", {
                className: r()(M.customColumn, G.$Z, G.ed),
                children: (0, i.jsx)("div", {
                    className: M.customContainer,
                    children: (0, i.jsx)(o.Ar, {
                        className: r()(M.customScroller, G.cj),
                        orientation: "auto",
                        children: (0, i.jsx)(o.Ar, {
                            className: G.mh,
                            orientation: "auto",
                            children: (0, i.jsxs)("main", {
                                className: r()(M.customColumn, M.contentColumnDefault, G.$Z, G.ed, G.z1),
                                children: [
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: G.wx,
                                            children: (0, i.jsx)(d.D, {
                                                variant: "heading-lg/semibold",
                                                children: O.intl.string(O.t.S40K66),
                                            }),
                                        },
                                        "header",
                                    ),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            children: (0, i.jsxs)("div", {
                                                className: G.CZ,
                                                children: [
                                                    (0, i.jsx)(b.A, { guild: n }),
                                                    (0, i.jsx)(C.A, { guild: n }),
                                                    P
                                                        ? (0, i.jsxs)("div", {
                                                              className: G.FV,
                                                              children: [
                                                                  (0, i.jsx)(R.A, { guild: n, ref: H }),
                                                                  (0, i.jsx)(T.A, {
                                                                      guild: n,
                                                                      searchState: Y,
                                                                      compact: !0,
                                                                      onSelectRow: F,
                                                                      onResetForNewMembers: V,
                                                                  }),
                                                                  Y !== S.IY.SUCCESS_STILL_INDEXING &&
                                                                      (0, i.jsx)(y.A, { guildId: n.id }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)("div", {
                                                              className: G.qQ,
                                                              children: (0, i.jsxs)("div", {
                                                                  className: G.pb,
                                                                  children: [
                                                                      (0, i.jsx)("div", {
                                                                          children: (0, i.jsx)(L.A, {}),
                                                                      }),
                                                                      (0, i.jsx)(c.E, {
                                                                          variant: "text-md/normal",
                                                                          color: "text-muted",
                                                                          children: O.intl.format(O.t.Bf6yxB, {
                                                                              onClick: (e) => {
                                                                                  null != n &&
                                                                                      (e.preventDefault(),
                                                                                      _.A.close(),
                                                                                      (0, I.aZ)(n.id));
                                                                              },
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          }),
                                                ],
                                            }),
                                        },
                                        "body",
                                    ),
                                    (0, i.jsx)(v.A, { guildId: n.id }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            k &&
                null != U &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u.p, { isVisible: !0, onClick: w }),
                        (0, i.jsx)("div", {
                            className: G.zd,
                            style: { width: D.da6 },
                            children: (0, i.jsx)(x.default, {
                                userId: U.details.userId,
                                guildId: U.details.guildId,
                                onClose: w,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
