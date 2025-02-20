n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(224706),
    o = n(100527),
    c = n(906732),
    d = n(314852),
    u = n(65361),
    m = n(910200),
    p = n(999382),
    g = n(12078),
    h = n(934638),
    f = n(566036),
    b = n(979664),
    x = n(343397),
    j = n(509798),
    N = n(75733),
    v = n(474024),
    _ = n(850606);
let O = function () {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, s.e7)([p.Z], () => p.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: O, fetchStatus: y } = (0, u.u)(null == t ? void 0 : t.id),
        C = (0, s.e7)([p.Z], () => p.Z.getGuildProfile(), []);
    i.useEffect(() => {
        null != n && O();
    }, [n, O]);
    let I = i.useCallback(() => {
        O(!0);
    }, [O]);
    return (i.useEffect(() => {
        l.Z.getDetectableGames();
    }, []),
    y === d.a.FETCHED && null == C)
        ? (0, r.jsx)(j.g, { forceFetchGuildProfile: I })
        : y === d.a.NOT_FETCHED || y === d.a.FETCHING
          ? (0, r.jsx)('main', {
                className: _.spinner,
                children: (0, r.jsx)(a.$jN, {})
            })
          : null == t || null == C
            ? null
            : (0, r.jsx)(c.Gt, {
                  value: e,
                  children: (0, r.jsxs)('main', {
                      className: _.content,
                      children: [
                          (0, r.jsxs)('div', {
                              className: _.leftColumn,
                              children: [(0, r.jsx)(b.Z, { guild: t }), (0, r.jsx)(x.Z, { guild: t }), (0, r.jsx)(g.Z, { guild: t }), (0, r.jsx)('div', { className: _.divider }), (0, r.jsx)(N.Z, { guild: t }), (0, r.jsx)('div', { className: _.divider }), (0, r.jsx)(h.Z, { guild: t }), (0, r.jsx)(f.Z, { guild: t })]
                          }),
                          (0, r.jsxs)('div', {
                              className: _.rightColumn,
                              children: [
                                  (0, r.jsx)(m.Z, {
                                      profile: C,
                                      disableCTA: !0
                                  }),
                                  (0, r.jsx)(v.Z, { guild: t })
                              ]
                          })
                      ]
                  })
              });
};
