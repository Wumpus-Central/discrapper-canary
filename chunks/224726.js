n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(224706),
    o = n(100527),
    c = n(906732),
    d = n(65361),
    u = n(910200),
    m = n(999382),
    p = n(12078),
    g = n(934638),
    h = n(566036),
    f = n(979664),
    b = n(343397),
    x = n(509798),
    j = n(75733),
    N = n(474024),
    v = n(850606);
let _ = function () {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, s.e7)([m.Z], () => m.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: _, isFetching: O } = (0, d.u)(null == t ? void 0 : t.id),
        y = (0, s.e7)([m.Z], () => m.Z.getGuildProfile(), []);
    i.useEffect(() => {
        null != n && _();
    }, [n, _]);
    let C = i.useCallback(() => {
        _(!0);
    }, [_]);
    return (i.useEffect(() => {
        l.Z.getDetectableGames();
    }, []),
    O || null != y)
        ? O
            ? (0, r.jsx)('main', {
                  className: v.spinner,
                  children: (0, r.jsx)(a.$jN, {})
              })
            : null == t || null == y
              ? null
              : (0, r.jsx)(c.Gt, {
                    value: e,
                    children: (0, r.jsxs)('main', {
                        className: v.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v.leftColumn,
                                children: [(0, r.jsx)(f.Z, { guild: t }), (0, r.jsx)(b.Z, { guild: t }), (0, r.jsx)(p.Z, { guild: t }), (0, r.jsx)('div', { className: v.divider }), (0, r.jsx)(j.Z, { guild: t }), (0, r.jsx)('div', { className: v.divider }), (0, r.jsx)(g.Z, { guild: t }), (0, r.jsx)(h.Z, { guild: t })]
                            }),
                            (0, r.jsxs)('div', {
                                className: v.rightColumn,
                                children: [
                                    (0, r.jsx)(u.Z, {
                                        profile: y,
                                        disableCTA: !0
                                    }),
                                    (0, r.jsx)(N.Z, { guild: t })
                                ]
                            })
                        ]
                    })
                })
        : (0, r.jsx)(x.g, { forceFetchGuildProfile: C });
};
