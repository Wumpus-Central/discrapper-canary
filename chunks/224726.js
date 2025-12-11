n.d(t, { Z: () => S }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(224706),
    o = n(100527),
    c = n(906732),
    d = n(314852),
    u = n(65361),
    g = n(798476),
    f = n(496675),
    m = n(434404),
    b = n(999382),
    p = n(12078),
    h = n(934638),
    x = n(566036),
    j = n(979664),
    v = n(343397),
    O = n(509798),
    C = n(75733),
    y = n(474024),
    N = n(981631),
    E = n(388032),
    I = n(617578);
let S = function () {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.e7)([b.Z], () => b.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: S, fetchStatus: _ } = (0, u.u)(null == t ? void 0 : t.id),
        T = (0, l.e7)([b.Z], () => b.Z.getGuildProfile(), []),
        P = (0, l.e7)([f.Z], () => f.Z.can(N.Plq.MANAGE_GUILD, t)),
        w = i.useCallback(
            (e) => {
                null != n && (m.Z.updateGuild({ icon: e }), m.Z.updateGuildProfile(n, { icon: e }));
            },
            [n],
        ),
        Z = i.useCallback(
            (e) => {
                null != n && m.Z.updateGuildProfile(n, { customBanner: e });
            },
            [n],
        );
    i.useEffect(() => {
        null != n && S();
    }, [n, S]);
    let R = i.useCallback(() => {
        S(!0);
    }, [S]);
    return (i.useEffect(() => {
        s.Z.getDetectableGames();
    }, []),
    _ === d.a.FETCHED && null == T)
        ? (0, r.jsx)(O.g, { forceFetchGuildProfile: R })
        : _ === d.a.NOT_FETCHED || _ === d.a.FETCHING
          ? (0, r.jsx)("main", {
                className: I.spinner,
                children: (0, r.jsx)(a.$jN, {}),
            })
          : null == t || null == T
            ? null
            : (0, r.jsx)(c.Gt, {
                  value: e,
                  children: (0, r.jsxs)("main", {
                      className: I.content,
                      children: [
                          (0, r.jsxs)("div", {
                              className: I.leftColumn,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(a.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-strong",
                                              children: E.intl.string(E.t.txdaxf),
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: I.description,
                                              children: E.intl.string(E.t["5PGZWS"]),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: I.divider }),
                                  (0, r.jsx)(j.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                      onIconChange: w,
                                  }),
                                  (0, r.jsx)("div", { className: I.divider }),
                                  (0, r.jsx)(p.Z, {
                                      profile: T,
                                      onCustomBannerChange: Z,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: I.divider }),
                                  (0, r.jsx)(C.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: I.divider }),
                                  (0, r.jsx)(h.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: I.divider }),
                                  (0, r.jsx)(x.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                                  (0, r.jsx)("div", { className: I.divider }),
                                  (0, r.jsx)(y.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: I.rightColumn,
                              children: (0, r.jsx)(a.Ttm, {
                                  className: I.profilePreviewContainer,
                                  children: (0, r.jsx)(g.ZP, {
                                      className: I.profilePreview,
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
