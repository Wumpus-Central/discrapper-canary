"use strict";
n.d(t, { A: () => G });
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
    A = n(71393),
    p = n(266047),
    f = n(221950),
    j = n(735937),
    N = n(104685),
    E = n(856768),
    b = n(189552),
    T = n(508160),
    C = n(749060),
    I = n(374963),
    v = n(636670),
    S = n(652215),
    y = n(985018),
    R = n(503377),
    O = n(63135);
function G(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([A.A], () => A.A.getGuild(t)),
        { analyticsLocations: l } = (0, c.Ay)(d.A.GUILD_SETTINGS_MEMBERS_PAGE),
        G = (0, u.q)(t),
        L = (0, a.bG)([_.Ay], () => _.Ay.getGuildSidebarState(t), [t]),
        D = s.useCallback(() => {
            x.A.closeGuildSidebar(t);
        }, [t]),
        M = !1 == !!n?.features.has(S.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        k = (0, a.bG)([p.A], () => p.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        U = s.useCallback(
            (e) => {
                null != e &&
                    (0, h.openUserProfileModal)({ userId: e.userId, guildId: e.guildId, sourceAnalyticsLocations: l });
            },
            [l],
        ),
        P = s.useRef(null),
        w = s.useCallback(() => {
            P.current?.resetSearchText();
        }, []);
    if (null == n) return null;
    let B = (0, b.ii)(!1, !1, k);
    return (0, i.jsxs)(c.f5, {
        value: l,
        children: [
            (0, i.jsx)("div", {
                className: r()(O.customColumn, R.$Z, R.ed),
                children: (0, i.jsx)("div", {
                    className: O.customContainer,
                    children: (0, i.jsx)(o.ArX, {
                        className: r()(O.customScroller, R.cj),
                        orientation: "auto",
                        children: (0, i.jsx)(o.ArX, {
                            className: R.mh,
                            orientation: "auto",
                            children: (0, i.jsxs)("main", {
                                className: r()(O.customColumn, O.contentColumnDefault, R.$Z, R.ed, R.z1),
                                children: [
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: R.wx,
                                            children: (0, i.jsx)(o.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: y.intl.string(y.t.S40K66),
                                            }),
                                        },
                                        "header",
                                    ),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            children: (0, i.jsxs)("div", {
                                                className: R.CZ,
                                                children: [
                                                    (0, i.jsx)(N.A, { guild: n }),
                                                    (0, i.jsx)(j.A, { guild: n }),
                                                    M
                                                        ? (0, i.jsxs)("div", {
                                                              className: R.FV,
                                                              children: [
                                                                  (0, i.jsx)(I.A, { guild: n, ref: P }),
                                                                  (0, i.jsx)(T.A, {
                                                                      guild: n,
                                                                      searchState: B,
                                                                      compact: !0,
                                                                      onSelectRow: U,
                                                                      onResetForNewMembers: w,
                                                                  }),
                                                                  B !== b.IY.SUCCESS_STILL_INDEXING &&
                                                                      (0, i.jsx)(C.A, { guildId: n.id }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)("div", {
                                                              className: R.qQ,
                                                              children: (0, i.jsxs)("div", {
                                                                  className: R.pb,
                                                                  children: [
                                                                      (0, i.jsx)("div", {
                                                                          children: (0, i.jsx)(v.A, {}),
                                                                      }),
                                                                      (0, i.jsx)(o.Text, {
                                                                          variant: "text-md/normal",
                                                                          color: "text-muted",
                                                                          children: y.intl.format(y.t.Bf6yxB, {
                                                                              onClick: (e) => {
                                                                                  null != n &&
                                                                                      (e.preventDefault(),
                                                                                      g.A.close(),
                                                                                      (0, f.aZ)(n.id));
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
                                    (0, i.jsx)(E.A, { guildId: n.id }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            G &&
                null != L &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.pkL, { isVisible: !0, onClick: D }),
                        (0, i.jsx)("div", {
                            className: R.zd,
                            style: { width: S.da6 },
                            children: (0, i.jsx)(m.A, {
                                userId: L.details.userId,
                                guildId: L.details.guildId,
                                onClose: D,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
