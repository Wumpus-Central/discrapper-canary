n.d(t, { Z: () => j });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(699553),
    d = n(934269),
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
    N = n(518802);
let j = function () {
    let { analyticsLocations: e } = (0, o.ZP)(a.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.e7)([m.Z], () => m.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: j, isFetching: I } = (0, d.u)(null == t ? void 0 : t.id),
        E = (0, l.e7)([m.Z], () => m.Z.getGuildProfile(), []),
        b = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                j(e).then((e) => {
                    null != e && (0, c.V)(e);
                });
            },
            [j]
        );
    r.useEffect(() => {
        null != n && b();
    }, [n, b]);
    let T = r.useCallback(() => {
        b(!0);
    }, [b]);
    return I || null != E
        ? I
            ? (0, i.jsx)('main', {
                  className: N.spinner,
                  children: (0, i.jsx)(s.$jN, {})
              })
            : null == t || null == E
              ? null
              : (0, i.jsx)(o.Gt, {
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
        : (0, i.jsx)(C.g, { forceFetchGuildProfile: T });
};
