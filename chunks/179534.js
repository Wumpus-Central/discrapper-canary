"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(985925),
    m = n(547015),
    g = n(997509),
    x = n(138298),
    h = n(657331),
    _ = n(761640),
    p = n(71393),
    A = n(343969),
    f = n(266047),
    j = n(221950),
    N = n(735937),
    E = n(104685),
    b = n(856768),
    T = n(189552),
    C = n(508160),
    I = n(749060),
    v = n(374963),
    S = n(636670),
    y = n(652215),
    R = n(985018),
    O = n(334063),
    G = n(21397);
function L(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([p.A], () => p.A.getGuild(t)),
        { analyticsLocations: l } = (0, c.Ay)(d.A.GUILD_SETTINGS_MEMBERS_PAGE),
        L = (0, u.q)(t),
        D = (0, a.bG)([_.Ay], () => _.Ay.getGuildSidebarState(t), [t]),
        M = s.useCallback(() => {
            x.A.closeGuildSidebar(t);
        }, [t]),
        k = !1 == !!n?.features.has(y.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        U = (0, a.bG)([f.A], () => f.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        P = s.useCallback(
            (e) => {
                null != e &&
                    (0, h.openUserProfileModal)({ userId: e.userId, guildId: e.guildId, sourceAnalyticsLocations: l });
            },
            [l],
        ),
        w = s.useRef(null),
        B = s.useCallback(() => {
            w.current?.resetSearchText();
        }, []),
        F = (0, A.Ms)(t),
        H = (0, A.Wl)(t);
    if (null == n) return null;
    let V = (0, T.ii)(H, F, U);
    return (0, i.jsxs)(c.f5, {
        value: l,
        children: [
            (0, i.jsx)("div", {
                className: r()(G.customColumn, O.$Z, O.ed),
                children: (0, i.jsx)("div", {
                    className: G.customContainer,
                    children: (0, i.jsx)(o.ArX, {
                        className: r()(G.customScroller, O.cj),
                        orientation: "auto",
                        children: (0, i.jsx)(o.ArX, {
                            className: O.mh,
                            orientation: "auto",
                            children: (0, i.jsxs)("main", {
                                className: r()(G.customColumn, G.contentColumnDefault, O.$Z, O.ed, O.z1),
                                children: [
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: O.wx,
                                            children: (0, i.jsx)(o.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: R.intl.string(R.t.S40K66),
                                            }),
                                        },
                                        "header",
                                    ),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            children: (0, i.jsxs)("div", {
                                                className: O.CZ,
                                                children: [
                                                    (0, i.jsx)(E.A, { guild: n }),
                                                    (0, i.jsx)(N.A, { guild: n }),
                                                    k
                                                        ? (0, i.jsxs)("div", {
                                                              className: O.FV,
                                                              children: [
                                                                  (0, i.jsx)(v.A, { guild: n, ref: w }),
                                                                  (0, i.jsx)(C.A, {
                                                                      guild: n,
                                                                      searchState: V,
                                                                      compact: !0,
                                                                      onSelectRow: P,
                                                                      onResetForNewMembers: B,
                                                                  }),
                                                                  V !== T.IY.SUCCESS_STILL_INDEXING &&
                                                                      (0, i.jsx)(I.A, { guildId: n.id }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)("div", {
                                                              className: O.qQ,
                                                              children: (0, i.jsxs)("div", {
                                                                  className: O.pb,
                                                                  children: [
                                                                      (0, i.jsx)("div", {
                                                                          children: (0, i.jsx)(S.A, {}),
                                                                      }),
                                                                      (0, i.jsx)(o.Text, {
                                                                          variant: "text-md/normal",
                                                                          color: "text-muted",
                                                                          children: R.intl.format(R.t.Bf6yxB, {
                                                                              onClick: (e) => {
                                                                                  null != n &&
                                                                                      (e.preventDefault(),
                                                                                      g.A.close(),
                                                                                      (0, j.aZ)(n.id));
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
                                    (0, i.jsx)(b.A, { guildId: n.id }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            L &&
                null != D &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.pkL, { isVisible: !0, onClick: M }),
                        (0, i.jsx)("div", {
                            className: O.zd,
                            style: { width: y.da6 },
                            children: (0, i.jsx)(m.A, {
                                userId: D.details.userId,
                                guildId: D.details.guildId,
                                onClose: M,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
