n.d(t, { Z: () => Z });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(189357),
    g = n(613464),
    f = n(434404),
    m = n(6025),
    b = n(892001),
    p = n(433355),
    h = n(430824),
    x = n(893966),
    j = n(527379),
    v = n(305473),
    O = n(113679),
    C = n(440857),
    y = n(472596),
    N = n(598948),
    E = n(428936),
    I = n(41586),
    S = n(918192),
    _ = n(981631),
    T = n(388032),
    P = n(380545),
    w = n(306174);
function Z(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.getGuild(t)),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        Z = (0, u.m)(t),
        R = (0, s.e7)([p.ZP], () => p.ZP.getGuildSidebarState(t), [t]),
        D = i.useCallback(() => {
            m.Z.closeGuildSidebar(t);
        }, [t]),
        A =
            !1 ==
            !!(null == n ? void 0 : n.features.has(_.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        L = (0, s.e7)([x.Z], () => x.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        k = i.useCallback(
            (e) => {
                null != e &&
                    (0, b.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: l,
                    });
            },
            [l],
        ),
        G = i.useRef(null),
        M = i.useCallback(() => {
            var e;
            null == (e = G.current) || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let U = (0, y.xb)(!1, !1, L);
    return (0, r.jsxs)(d.Gt, {
        value: l,
        children: [
            (0, r.jsx)("div", {
                className: a()(w.customColumn, P.override, P.settingsColumn),
                children: (0, r.jsx)("div", {
                    className: w.customContainer,
                    children: (0, r.jsx)(o.w0Z, {
                        className: a()(w.customScroller, P.settingsVerticalScroller),
                        orientation: "auto",
                        children: (0, r.jsx)(o.w0Z, {
                            className: P.settingsHorizontalScroller,
                            orientation: "auto",
                            children: (0, r.jsxs)("main", {
                                className: a()(
                                    w.customColumn,
                                    w.contentColumnDefault,
                                    P.override,
                                    P.settingsColumn,
                                    P.settingsContent,
                                ),
                                children: [
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: P.header,
                                            children: (0, r.jsx)(o.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: T.intl.string(T.t.S40K66),
                                            }),
                                        },
                                        "header",
                                    ),
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            children: (0, r.jsxs)("div", {
                                                className: P.tableContainer,
                                                children: [
                                                    (0, r.jsx)(O.Z, { guild: n }),
                                                    (0, r.jsx)(v.Z, { guild: n }),
                                                    A
                                                        ? (0, r.jsxs)("div", {
                                                              className: P.mainTableContainer,
                                                              children: [
                                                                  (0, r.jsx)(I.Z, {
                                                                      guild: n,
                                                                      ref: G,
                                                                  }),
                                                                  (0, r.jsx)(N.Z, {
                                                                      guild: n,
                                                                      searchState: U,
                                                                      compact: !0,
                                                                      onSelectRow: k,
                                                                      onResetForNewMembers: M,
                                                                  }),
                                                                  U !== y.po.SUCCESS_STILL_INDEXING &&
                                                                      (0, r.jsx)(E.Z, { guildId: n.id }),
                                                              ],
                                                          })
                                                        : (0, r.jsx)("div", {
                                                              className: P.movedTable,
                                                              children: (0, r.jsxs)("div", {
                                                                  className: P.noResultsContainer,
                                                                  children: [
                                                                      (0, r.jsx)("div", {
                                                                          children: (0, r.jsx)(S.Z, {}),
                                                                      }),
                                                                      (0, r.jsx)(o.Text, {
                                                                          variant: "text-md/normal",
                                                                          color: "text-muted",
                                                                          children: T.intl.format(T.t.Bf6yxB, {
                                                                              onClick: (e) => {
                                                                                  null != n &&
                                                                                      (e.preventDefault(),
                                                                                      f.Z.close(),
                                                                                      (0, j._X)(n.id));
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
                                    (0, r.jsx)(C.Z, { guildId: n.id }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            Z &&
                null != R &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.ZMr, {
                            isVisible: !0,
                            onClick: D,
                        }),
                        (0, r.jsx)("div", {
                            className: P.modViewSidebarContainer,
                            style: { width: _.$Y6 },
                            children: (0, r.jsx)(g.Z, {
                                userId: R.details.userId,
                                guildId: R.details.guildId,
                                onClose: D,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
