n.d(t, { L: () => A });
var i = n(64700),
    s = n(311907),
    l = n(573648),
    a = n(941314),
    r = n(362490),
    o = n(429913),
    d = n(933297),
    u = n(962173),
    c = n(652215),
    g = n(985018),
    m = n(452832);
let _ = [c.fg2.LEAGUE_OF_LEGENDS, c.fg2.RIOT_GAMES];
function A() {
    let e = (0, s.bG)([u.A], () => u.A.getAccounts().find((e) => _.includes(e.type))?.type),
        t = null != e ? l.A.get(e) : null,
        n = (0, o.h)(t?.replacedBy),
        { canStartAuthorization: c, hasAlreadyLinked: A, fetched: h } = (0, r.RD)(n),
        p = g.intl.string(m.default["1S6oAo"]),
        x = a.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
    return i.useMemo(
        () =>
            x && null != t && c && n?.connectionEntrypointUrl != null && !A && h
                ? {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          g.intl.format(m.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: p,
                              connectionEntrypointUrl: n.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, p, n, c, x, A, h],
    );
}
