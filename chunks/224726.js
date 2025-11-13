n.d(t, { Z: () => I }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(224706),
    o = n(100527),
    c = n(906732),
    d = n(314852),
    u = n(65361),
    g = n(798476),
    m = n(496675),
    p = n(434404),
    f = n(999382),
    h = n(12078),
    b = n(934638),
    x = n(566036),
    j = n(979664),
    _ = n(343397),
    v = n(509798),
    O = n(75733),
    C = n(474024),
    y = n(981631),
    N = n(388032),
    E = n(805220);
let I = function () {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.e7)([f.Z], () => f.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: I, fetchStatus: S } = (0, u.u)(null == t ? void 0 : t.id),
        T = (0, l.e7)([f.Z], () => f.Z.getGuildProfile(), []),
        P = (0, l.e7)([m.Z], () => m.Z.can(y.Plq.MANAGE_GUILD, t)),
        w = i.useCallback(
            (e) => {
                null != n && (p.Z.updateGuild({ icon: e }), p.Z.updateGuildProfile(n, { icon: e }));
            },
            [n],
        ),
        Z = i.useCallback(
            (e) => {
                null != n && p.Z.updateGuildProfile(n, { customBanner: e });
            },
            [n],
        );
    i.useEffect(() => {
        null != n && I();
    }, [n, I]);
    let R = i.useCallback(() => {
        I(!0);
    }, [I]);
    return (i.useEffect(() => {
        s.Z.getDetectableGames();
    }, []),
    S === d.a.FETCHED && null == T)
        ? (0, r.jsx)(v.g, { forceFetchGuildProfile: R })
        : S === d.a.NOT_FETCHED || S === d.a.FETCHING
          ? (0, r.jsx)("main", {
                className: E.spinner,
                children: (0, r.jsx)(a.$jN, {}),
            })
          : null == t || null == T
            ? null
            : (0, r.jsx)(c.Gt, {
                  value: e,
                  children: (0, r.jsxs)("main", {
                      className: E.content,
                      children: [
                          (0, r.jsxs)("div", {
                              className: E.leftColumn,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(a.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "header-primary",
                                              children: N.intl.string(N.t.txdaxf),
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "header-secondary",
                                              className: E.description,
                                              children: N.intl.string(N.t["5PGZWS"]),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(_.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: E.divider }),
                                  (0, r.jsx)(j.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                      onIconChange: w,
                                  }),
                                  (0, r.jsx)("div", { className: E.divider }),
                                  (0, r.jsx)(h.Z, {
                                      profile: T,
                                      onCustomBannerChange: Z,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: E.divider }),
                                  (0, r.jsx)(O.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: E.divider }),
                                  (0, r.jsx)(b.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: E.divider }),
                                  (0, r.jsx)(x.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: E.divider }),
                                  (0, r.jsx)(C.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: E.rightColumn,
                              children: (0, r.jsx)(a.Ttm, {
                                  className: E.profilePreviewContainer,
                                  children: (0, r.jsx)(g.ZP, {
                                      className: E.profilePreview,
                                      profile: T,
                                      disableCTA: !0,
                                      onIconChange: P ? w : void 0,
                                      disableGuildNameClick: !0,
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
};
