n.d(t, { L: () => x });
var i = n(64700),
    s = n(311907),
    l = n(573648),
    r = n(342169),
    a = n(362490),
    o = n(429913),
    d = n(933297),
    c = n(962173),
    u = n(652215),
    m = n(985018),
    g = n(873494);
let _ = [u.fg2.LEAGUE_OF_LEGENDS, u.fg2.RIOT_GAMES];
function x() {
    let e = (0, s.bG)([c.A], () => c.A.getAccounts().find((e) => _.includes(e.type))?.type),
        t = null != e ? l.A.get(e) : null,
        n = (0, o.h)(t?.replacedBy),
        { canStartAuthorization: u } = (0, a.RD)(n),
        x = m.intl.string(g.default["1S6oAo"]),
        h = r.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
    return i.useMemo(
        () =>
            h && null != t && u && n?.connectionEntrypointUrl != null
                ? {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          m.intl.format(g.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: x,
                              connectionEntrypointUrl: n.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, x, n, u, h],
    );
}
