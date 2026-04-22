n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(289873),
    a = n(534514),
    o = n(834730),
    d = n(573613),
    c = n(544420),
    u = n(793574),
    m = n(688810),
    g = n(837011),
    h = n(90084),
    x = n(42780),
    _ = n(576705),
    p = n(997509),
    A = n(555337),
    E = n(33888),
    f = n(494492),
    j = n(377337),
    N = n(249434),
    I = n(89145),
    C = n(913443),
    b = n(474215),
    v = n(561923),
    S = n(652215),
    T = n(985018),
    y = n(786513);
let R = function () {
    let { analyticsLocations: e } = (0, m.Ay)(u.A.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, s.bG)([A.A], () => A.A.getGuild(), []),
        n = t?.id,
        { fetchGuildProfile: R, fetchStatus: L } = (0, h.u)(t?.id),
        D = (0, s.bG)([A.A], () => A.A.getGuildProfile(), []),
        O = (0, s.bG)([_.A], () => _.A.can(S.xBc.MANAGE_GUILD, t)),
        G = l.useCallback(
            (e) => {
                null != n && (p.A.updateGuild({ icon: e }), p.A.updateGuildProfile(n, { icon: e }));
            },
            [n],
        ),
        M = l.useCallback(
            (e) => {
                null != n && p.A.updateGuildProfile(n, { customBanner: e });
            },
            [n],
        );
    l.useEffect(() => {
        null != n && R();
    }, [n, R]);
    let k = l.useCallback(() => {
        R(!0);
    }, [R]);
    return (l.useEffect(() => {
        c.Ay.getDetectableGames();
    }, []),
    L === g.X.FETCHED && null == D)
        ? (0, i.jsx)(C.g, { forceFetchGuildProfile: k })
        : L === g.X.NOT_FETCHED || L === g.X.FETCHING
          ? (0, i.jsx)("main", { className: y.u1, children: (0, i.jsx)(r.y, {}) })
          : null == t || null == D
            ? null
            : (0, i.jsx)(m.f5, {
                  value: e,
                  children: (0, i.jsxs)("main", {
                      className: y.Qs,
                      children: [
                          (0, i.jsxs)("div", {
                              className: y.Cd,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(a.D, {
                                              variant: "heading-lg/semibold",
                                              color: "text-strong",
                                              children: T.intl.string(T.t.txdaxf),
                                          }),
                                          (0, i.jsx)(o.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: y.h_,
                                              children: T.intl.string(T.t["5PGZWS"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(I.A, { profile: D, canManageGuild: O }),
                                  (0, i.jsx)("div", { className: y.yF }),
                                  (0, i.jsx)(N.A, { profile: D, canManageGuild: O, onIconChange: G }),
                                  (0, i.jsx)("div", { className: y.yF }),
                                  (0, i.jsx)(E.A, { profile: D, onCustomBannerChange: M, canManageGuild: O }),
                                  (0, i.jsx)("div", { className: y.yF }),
                                  (0, i.jsx)(b.A, { profile: D, canManageGuild: O }),
                                  (0, i.jsx)("div", { className: y.yF }),
                                  (0, i.jsx)(f.A, { profile: D, canManageGuild: O }),
                                  (0, i.jsx)("div", { className: y.yF }),
                                  (0, i.jsx)(j.A, { profile: D, canManageGuild: O }),
                                  (0, i.jsx)("div", { className: y.yF }),
                                  (0, i.jsx)(v.A, { profile: D, canManageGuild: O }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: y.DK,
                              children: (0, i.jsx)(d.Ip, {
                                  className: y.ti,
                                  children: (0, i.jsx)(x.Ay, {
                                      className: y.q5,
                                      profile: D,
                                      disableCTA: !0,
                                      onIconChange: O ? G : void 0,
                                      disableGuildNameClick: !0,
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
};
