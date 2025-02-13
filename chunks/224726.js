n.d(t, { Z: () => N });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(65361),
    d = n(910200),
    u = n(999382),
    m = n(12078),
    h = n(934638),
    g = n(566036),
    x = n(979664),
    p = n(343397),
    _ = n(509798),
    C = n(75733),
    f = n(474024),
    v = n(996259);
let N = function () {
    let { analyticsLocations: e } = (0, o.ZP)(a.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.e7)([u.Z], () => u.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: N, isFetching: j } = (0, c.u)(null == t ? void 0 : t.id),
        I = (0, l.e7)([u.Z], () => u.Z.getGuildProfile(), []);
    r.useEffect(() => {
        null != n && N();
    }, [n, N]);
    let E = r.useCallback(() => {
        N(!0);
    }, [N]);
    return j || null != I
        ? j
            ? (0, i.jsx)('main', {
                  className: v.spinner,
                  children: (0, i.jsx)(s.$jN, {})
              })
            : null == t || null == I
              ? null
              : (0, i.jsx)(o.Gt, {
                    value: e,
                    children: (0, i.jsxs)('main', {
                        className: v.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v.leftColumn,
                                children: [(0, i.jsx)(x.Z, { guild: t }), (0, i.jsx)(p.Z, { guild: t }), (0, i.jsx)(m.Z, { guild: t }), (0, i.jsx)('div', { className: v.divider }), (0, i.jsx)(C.Z, { guild: t }), (0, i.jsx)('div', { className: v.divider }), (0, i.jsx)(h.Z, { guild: t }), (0, i.jsx)(g.Z, { guild: t })]
                            }),
                            (0, i.jsxs)('div', {
                                className: v.rightColumn,
                                children: [(0, i.jsx)(d.Z, { profile: I }), (0, i.jsx)(f.Z, { guild: t })]
                            })
                        ]
                    })
                })
        : (0, i.jsx)(_.g, { forceFetchGuildProfile: E });
};
