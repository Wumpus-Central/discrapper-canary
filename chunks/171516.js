n.d(t, {
    F: () => d,
    h: () => f,
});
var r = n(442837),
    i = n(728345),
    a = n(592745),
    o = n(757266),
    s = n(404577),
    l = n(283595),
    c = n(417363),
    u = n(804739);
function d(e) {
    return (0, r.e7)(
        [l.Z, a.Z, c.Z, o.Z],
        () =>
            null != e &&
            (0, u.t)({
                LibraryApplicationStore: l.Z,
                LaunchableGameStore: a.Z,
                DispatchApplicationStore: c.Z,
                ConnectedAppsStore: o.Z,
                applicationId: e,
            }),
        [e],
    );
}
function f(e) {
    let { data: t } = (0, i.IX)(e),
        n = (0, r.e7)([s.Z], () => {
            var e;
            return null != t ? (null != (e = s.Z.getOfficialGame(t)) ? e : s.Z.getGameByApplication(t)) : null;
        }, [t]),
        a = d(e),
        o = d(null == n ? void 0 : n.id);
    return null != n && o ? n.id : a && null != e ? e : null;
}
