n.d(t, { Z: () => j });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(224706),
    o = n(100527),
    c = n(906732),
    d = n(65361),
    u = n(910200),
    m = n(999382),
    h = n(12078),
    g = n(934638),
    x = n(566036),
    p = n(979664),
    _ = n(343397),
    C = n(509798),
    f = n(75733),
    v = n(474024),
    N = n(996259);
let j = function () {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.e7)([m.Z], () => m.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: j, isFetching: I } = (0, d.u)(null == t ? void 0 : t.id),
        E = (0, l.e7)([m.Z], () => m.Z.getGuildProfile(), []);
    r.useEffect(() => {
        null != n && j();
    }, [n, j]);
    let b = r.useCallback(() => {
        j(!0);
    }, [j]);
    return (r.useEffect(() => {
        a.Z.getDetectableGames();
    }, []),
    I || null != E)
        ? I
            ? (0, i.jsx)('main', {
                  className: N.spinner,
                  children: (0, i.jsx)(s.$jN, {})
              })
            : null == t || null == E
              ? null
              : (0, i.jsx)(c.Gt, {
                    value: e,
                    children: (0, i.jsxs)('main', {
                        className: N.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: N.leftColumn,
                                children: [(0, i.jsx)(p.Z, { guild: t }), (0, i.jsx)(_.Z, { guild: t }), (0, i.jsx)(h.Z, { guild: t }), (0, i.jsx)('div', { className: N.divider }), (0, i.jsx)(f.Z, { guild: t }), (0, i.jsx)('div', { className: N.divider }), (0, i.jsx)(g.Z, { guild: t }), (0, i.jsx)(x.Z, { guild: t })]
                            }),
                            (0, i.jsxs)('div', {
                                className: N.rightColumn,
                                children: [(0, i.jsx)(u.Z, { profile: E }), (0, i.jsx)(v.Z, { guild: t })]
                            })
                        ]
                    })
                })
        : (0, i.jsx)(C.g, { forceFetchGuildProfile: b });
};
