n.d(t, {
    A: () => w,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    c = n(397927),
    o = n(793574),
    d = n(688810),
    u = n(985925),
    f = n(547015),
    g = n(997509),
    b = n(138298),
    m = n(657331),
    p = n(761640),
    x = n(71393),
    h = n(266047),
    j = n(221950),
    O = n(735937),
    y = n(104685),
    v = n(856768),
    A = n(189552),
    E = n(508160),
    N = n(749060),
    _ = n(374963),
    S = n(636670),
    T = n(652215),
    I = n(985018),
    C = n(503377),
    P = n(63135);

function w(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([x.A], () => x.A.getGuild(t)),
        { analyticsLocations: l } = (0, d.Ay)(o.A.GUILD_SETTINGS_MEMBERS_PAGE),
        w = (0, u.q)(t),
        R = (0, a.bG)([p.Ay], () => p.Ay.getGuildSidebarState(t), [t]),
        D = i.useCallback(() => {
            b.A.closeGuildSidebar(t);
        }, [t]),
        G =
            !1 ==
            !!(null == n ? void 0 : n.features.has(T.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        L = (0, a.bG)([h.A], () => h.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        k = i.useCallback(
            (e) => {
                null != e &&
                    (0, m.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: l,
                    });
            },
            [l],
        ),
        M = i.useRef(null),
        U = i.useCallback(() => {
            var e;
            null == (e = M.current) || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let F = (0, A.ii)(!1, !1, L);
    return (0, r.jsxs)(d.f5, {
        value: l,
        children: [
            (0, r.jsx)("div", {
                className: s()(P.customColumn, C.$Z, C.ed),
                children: (0, r.jsx)("div", {
                    className: P.customContainer,
                    children: (0, r.jsx)(c.ArX, {
                        className: s()(P.customScroller, C.cj),
                        orientation: "auto",
                        children: (0, r.jsx)(c.ArX, {
                            className: C.mh,
                            orientation: "auto",
                            children: (0, r.jsxs)("main", {
                                className: s()(P.customColumn, P.contentColumnDefault, C.$Z, C.ed, C.z1),
                                children: [
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: C.wx,
                                            children: (0, r.jsx)(c.Heading, {
                                                variant: "heading-lg/semibold",
                                                children: I.intl.string(I.t.S40K66),
                                            }),
                                        },
                                        "header",
                                    ),
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            children: (0, r.jsxs)("div", {
                                                className: C.CZ,
                                                children: [
                                                    (0, r.jsx)(y.A, {
                                                        guild: n,
                                                    }),
                                                    (0, r.jsx)(O.A, {
                                                        guild: n,
                                                    }),
                                                    G
                                                        ? (0, r.jsxs)("div", {
                                                              className: C.FV,
                                                              children: [
                                                                  (0, r.jsx)(_.A, {
                                                                      guild: n,
                                                                      ref: M,
                                                                  }),
                                                                  (0, r.jsx)(E.A, {
                                                                      guild: n,
                                                                      searchState: F,
                                                                      compact: !0,
                                                                      onSelectRow: k,
                                                                      onResetForNewMembers: U,
                                                                  }),
                                                                  F !== A.IY.SUCCESS_STILL_INDEXING &&
                                                                      (0, r.jsx)(N.A, {
                                                                          guildId: n.id,
                                                                      }),
                                                              ],
                                                          })
                                                        : (0, r.jsx)("div", {
                                                              className: C.qQ,
                                                              children: (0, r.jsxs)("div", {
                                                                  className: C.pb,
                                                                  children: [
                                                                      (0, r.jsx)("div", {
                                                                          children: (0, r.jsx)(S.A, {}),
                                                                      }),
                                                                      (0, r.jsx)(c.Text, {
                                                                          variant: "text-md/normal",
                                                                          color: "text-muted",
                                                                          children: I.intl.format(I.t.Bf6yxB, {
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
                                    (0, r.jsx)(v.A, {
                                        guildId: n.id,
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            }),
            w &&
                null != R &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.pkL, {
                            isVisible: !0,
                            onClick: D,
                        }),
                        (0, r.jsx)("div", {
                            className: C.zd,
                            style: {
                                width: T.da6,
                            },
                            children: (0, r.jsx)(f.A, {
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
