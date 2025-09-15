n.d(t, { h: () => _ });
var r = n(442837),
    i = n(783097),
    a = n(728345),
    o = n(592745),
    s = n(757266),
    l = n(77498),
    c = n(283595),
    u = n(417363),
    d = n(804739);
function f(e) {
    let { data: t } = (0, a.IX)(e),
        n = null != t && (0, i.ye)(t);
    return (0, r.e7)(
        [c.Z, o.Z, u.Z, s.Z],
        () =>
            !!n ||
            (null != e &&
                (0, d.t)({
                    LibraryApplicationStore: c.Z,
                    LaunchableGameStore: o.Z,
                    DispatchApplicationStore: u.Z,
                    ConnectedAppsStore: s.Z,
                    applicationId: e,
                })),
        [e, n],
    );
}
function _(e) {
    let { data: t } = (0, a.IX)(e),
        n = (0, r.e7)([l.Z], () => {
            var e;
            return null != t ? (null != (e = l.Z.getOfficialGame(t)) ? e : l.Z.getGameByApplication(t)) : null;
        }, [t]),
        i = f(e),
        o = f(null == n ? void 0 : n.id);
    return null != n && o ? n.id : i && null != e ? e : null;
}
