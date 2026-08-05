"use strict";
n.d(t, { H: () => d, s: () => o });
var i = n(974293),
    r = n(240899),
    a = n(458977),
    s = n(526233),
    l = n(270962);
function o() {
    let e = (0, i.$i)("isAutoClipsAvailable"),
        t = a.A.getConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        n = l.A.getConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline,
        o = s.A.getConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents,
        d = r.A.getConfig({ location: "isAutoClipsAvailable" }).enableCs2Gsi;
    return e || t || n || o || d;
}
function d() {
    let e = (0, i.aJ)("useIsAutoClipsAvailable"),
        t = a.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        n = l.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline,
        o = s.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents,
        d = r.A.useConfig({ location: "isAutoClipsAvailable" }).enableCs2Gsi;
    return e || t || n || o || d;
}
