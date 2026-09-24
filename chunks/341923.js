n.d(t, { GZ: () => E, HN: () => u, jJ: () => _, s$: () => c });
var i = n(17928),
    r = n(507868),
    a = n(974293),
    s = n(240899),
    l = n(458977),
    o = n(399091),
    d = n(526233);
function c() {
    let e = (0, a.$i)("isAutoClipsAvailable"),
        t = l.A.getConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        n = d.A.getConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents,
        i = s.A.getConfig({ location: "isAutoClipsAvailable" }).enableCs2Gsi,
        r = o.A.getConfig({ location: "isAutoClipsAvailable" }).enableDotaGsi;
    return e || t || n || i || r;
}
function u() {
    let e = (0, a.aJ)("useIsAutoClipsAvailable"),
        t = l.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        n = d.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents,
        i = s.A.useConfig({ location: "isAutoClipsAvailable" }).enableCs2Gsi,
        r = o.A.useConfig({ location: "isAutoClipsAvailable" }).enableDotaGsi;
    return e || t || n || i || r;
}
function _(e) {
    return c() && r.A.isGameAllowed(e);
}
function E(e) {
    let t = u(),
        n = (0, i.bG)([r.A], () => r.A.isGameAllowed(e), [e]);
    return t && n;
}
