n.d(t, { A: () => S }), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(544420),
    c = n(793574),
    o = n(688810),
    d = n(837011),
    u = n(90084),
    f = n(42780),
    g = n(576705),
    b = n(997509),
    m = n(555337),
    p = n(33888),
    x = n(494492),
    h = n(377337),
    j = n(249434),
    O = n(89145),
    y = n(913443),
    v = n(474215),
    A = n(561923),
    E = n(652215),
    N = n(985018),
    _ = n(754136);
let S = function () {
    let { analyticsLocations: e } = (0, o.Ay)(c.A.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.bG)([m.A], () => m.A.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: S, fetchStatus: T } = (0, u.u)(null == t ? void 0 : t.id),
        I = (0, l.bG)([m.A], () => m.A.getGuildProfile(), []),
        C = (0, l.bG)([g.A], () => g.A.can(E.xBc.MANAGE_GUILD, t)),
        P = i.useCallback(
            (e) => {
                null != n && (b.A.updateGuild({ icon: e }), b.A.updateGuildProfile(n, { icon: e }));
            },
            [n],
        ),
        w = i.useCallback(
            (e) => {
                null != n && b.A.updateGuildProfile(n, { customBanner: e });
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
        a.A.getDetectableGames();
    }, []),
    T === d.X.FETCHED && null == I)
        ? (0, r.jsx)(y.g, { forceFetchGuildProfile: R })
        : T === d.X.NOT_FETCHED || T === d.X.FETCHING
          ? (0, r.jsx)("main", {
                className: _.u1,
                children: (0, r.jsx)(s.y$y, {}),
            })
          : null == t || null == I
            ? null
            : (0, r.jsx)(o.f5, {
                  value: e,
                  children: (0, r.jsxs)("main", {
                      className: _.Qs,
                      children: [
                          (0, r.jsxs)("div", {
                              className: _.Cd,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(s.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-strong",
                                              children: N.intl.string(N.t.txdaxf),
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: _.h_,
                                              children: N.intl.string(N.t["5PGZWS"]),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(O.A, {
                                      profile: I,
                                      canManageGuild: C,
                                  }),
                                  (0, r.jsx)("div", { className: _.yF }),
                                  (0, r.jsx)(j.A, {
                                      profile: I,
                                      canManageGuild: C,
                                      onIconChange: P,
                                  }),
                                  (0, r.jsx)("div", { className: _.yF }),
                                  (0, r.jsx)(p.A, {
                                      profile: I,
                                      onCustomBannerChange: w,
                                      canManageGuild: C,
                                  }),
                                  (0, r.jsx)("div", { className: _.yF }),
                                  (0, r.jsx)(v.A, {
                                      profile: I,
                                      canManageGuild: C,
                                  }),
                                  (0, r.jsx)("div", { className: _.yF }),
                                  (0, r.jsx)(x.A, {
                                      profile: I,
                                      canManageGuild: C,
                                  }),
                                  (0, r.jsx)("div", { className: _.yF }),
                                  (0, r.jsx)(h.A, {
                                      profile: I,
                                      canManageGuild: C,
                                  }),
                                  (0, r.jsx)("div", { className: _.yF }),
                                  (0, r.jsx)(A.A, {
                                      profile: I,
                                      canManageGuild: C,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: _.DK,
                              children: (0, r.jsx)(s.HOs, {
                                  className: _.ti,
                                  children: (0, r.jsx)(f.Ay, {
                                      className: _.q5,
                                      profile: I,
                                      disableCTA: !0,
                                      onIconChange: C ? P : void 0,
                                      disableGuildNameClick: !0,
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
};
