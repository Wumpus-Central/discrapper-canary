n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(736653),
    u = n(573648),
    h = n(793574),
    A = n(688810),
    _ = n(429913),
    m = n(826673),
    p = n(780964),
    g = n(858897),
    f = n(962173),
    E = n(362490),
    x = n(652215),
    I = n(49999),
    C = n(873494),
    N = n(985018),
    T = n(381703);
let S = (e) => {
    let { markAsDismissed: t, applicationName: n } = e,
        s = [x.fg2.LEAGUE_OF_LEGENDS, x.fg2.RIOT_GAMES],
        S = (0, r.bG)([f.A], () => f.A.getAccounts().find((e) => s.includes(e.type))?.type),
        b = (0, c.Ay)(),
        y = null != S ? u.A.get(S) : null,
        v = y?.replacedBy,
        j = (0, _.h)(v);
    n = n ?? j?.name;
    let { startAuthorization: R, canStartAuthorization: O, hasAlreadyLinked: L, fetched: M } = (0, E.RD)(j),
        { analyticsLocations: D } = (0, A.Ay)(h.A.NOTICE);
    if (
        (l.useEffect(() => {
            L && M && ((0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(I.i.INDIRECT_ACTION));
        }, [L, M, t]),
        null == j || !O || !M || L)
    )
        return null;
    let U = u.A.get(x.fg2.RIOT_GAMES);
    return (0, i.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [
            (0, i.jsx)(d.PMB, {
                noticeType: x.kqX.RIOT_MIGRATION,
                onClick: () => {
                    (0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(I.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === b ? U?.icon.blackSVG : U?.icon.whiteSVG,
                alt: N.intl.string(C.default["1S6oAo"]),
                className: a()(T.tV, T._R),
            }),
            N.intl.format(C.default.YnnXb6, { connectionName: y?.name, applicationName: n }),
            (0, i.jsx)(d.Z_L, {
                onClick: () => {
                    (0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                        t(I.i.TAKE_ACTION),
                        (0, g.openUserSettings)(p.X.CONNECTIONS_PANEL),
                        setTimeout(() => R({ analyticsLocations: D }), 0);
                },
                className: T.HE,
                noticeType: x.kqX.RIOT_MIGRATION,
                children: N.intl.string(C.default.ZeOhh9),
            }),
            (0, i.jsx)(d.zr9, {
                onClick: () => {
                    t(I.i.USER_DISMISS);
                },
                className: T.wX,
                children: N.intl.string(C.default["MVB/Ab"]),
            }),
        ],
    });
};
