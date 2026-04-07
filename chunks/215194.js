"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(544420),
    o = n(793574),
    d = n(688810),
    c = n(837011),
    u = n(90084),
    m = n(42780),
    g = n(576705),
    x = n(997509),
    h = n(555337),
    _ = n(33888),
    p = n(494492),
    A = n(377337),
    f = n(249434),
    j = n(89145),
    N = n(913443),
    E = n(474215),
    C = n(561923),
    b = n(652215),
    T = n(985018),
    I = n(978945);
let v = function () {
    let { analyticsLocations: e } = (0, d.Ay)(o.A.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.bG)([h.A], () => h.A.getGuild(), []),
        n = t?.id,
        { fetchGuildProfile: v, fetchStatus: S } = (0, u.u)(t?.id),
        y = (0, l.bG)([h.A], () => h.A.getGuildProfile(), []),
        R = (0, l.bG)([g.A], () => g.A.can(b.xBc.MANAGE_GUILD, t)),
        O = s.useCallback(
            (e) => {
                null != n && (x.A.updateGuild({ icon: e }), x.A.updateGuildProfile(n, { icon: e }));
            },
            [n],
        ),
        G = s.useCallback(
            (e) => {
                null != n && x.A.updateGuildProfile(n, { customBanner: e });
            },
            [n],
        );
    s.useEffect(() => {
        null != n && v();
    }, [n, v]);
    let L = s.useCallback(() => {
        v(!0);
    }, [v]);
    return (s.useEffect(() => {
        a.Ay.getDetectableGames();
    }, []),
    S === c.X.FETCHED && null == y)
        ? (0, i.jsx)(N.g, { forceFetchGuildProfile: L })
        : S === c.X.NOT_FETCHED || S === c.X.FETCHING
          ? (0, i.jsx)("main", { className: I.u1, children: (0, i.jsx)(r.y$y, {}) })
          : null == t || null == y
            ? null
            : (0, i.jsx)(d.f5, {
                  value: e,
                  children: (0, i.jsxs)("main", {
                      className: I.Qs,
                      children: [
                          (0, i.jsxs)("div", {
                              className: I.Cd,
                              children: [
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(r.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-strong",
                                              children: T.intl.string(T.t.txdaxf),
                                          }),
                                          (0, i.jsx)(r.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: I.h_,
                                              children: T.intl.string(T.t["5PGZWS"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(j.A, { profile: y, canManageGuild: R }),
                                  (0, i.jsx)("div", { className: I.yF }),
                                  (0, i.jsx)(f.A, { profile: y, canManageGuild: R, onIconChange: O }),
                                  (0, i.jsx)("div", { className: I.yF }),
                                  (0, i.jsx)(_.A, { profile: y, onCustomBannerChange: G, canManageGuild: R }),
                                  (0, i.jsx)("div", { className: I.yF }),
                                  (0, i.jsx)(E.A, { profile: y, canManageGuild: R }),
                                  (0, i.jsx)("div", { className: I.yF }),
                                  (0, i.jsx)(p.A, { profile: y, canManageGuild: R }),
                                  (0, i.jsx)("div", { className: I.yF }),
                                  (0, i.jsx)(A.A, { profile: y, canManageGuild: R }),
                                  (0, i.jsx)("div", { className: I.yF }),
                                  (0, i.jsx)(C.A, { profile: y, canManageGuild: R }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: I.DK,
                              children: (0, i.jsx)(r.HOs, {
                                  className: I.ti,
                                  children: (0, i.jsx)(m.Ay, {
                                      className: I.q5,
                                      profile: y,
                                      disableCTA: !0,
                                      onIconChange: R ? O : void 0,
                                      disableGuildNameClick: !0,
                                  }),
                              }),
                          }),
                      ],
                  }),
              });
};
