n.d(t, {
    Cx: () => l,
    Ol: () => o,
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(981631),
    o = (function (e) {
        return (
            (e.DESKTOP = "desktop"),
            (e.MOBILE = "mobile"),
            (e.ANDROID = "android"),
            (e.IOS = "ios"),
            (e.PLAYSTATION = "playstation"),
            (e.XBOX = "xbox"),
            e
        );
    })({});
let a = [];
function s(e) {
    let { platforms: t, currentPlatform: n } = e,
        r = new Set(t),
        o = [];
    return null == t || 0 === t.length || (null != n && r.has(n))
        ? a
        : (r.has(i.M7m.ANDROID) && r.has(i.M7m.IOS)
              ? o.push("mobile")
              : r.has(i.M7m.ANDROID)
                ? o.push("android")
                : r.has(i.M7m.IOS) && o.push("ios"),
          (r.has(i.M7m.PS4) || r.has(i.M7m.PS5)) && o.push("playstation"),
          r.has(i.M7m.XBOX) && o.push("xbox"),
          r.has(i.M7m.DESKTOP) && o.push("desktop"),
          o);
}
function l(e) {
    let { platforms: t, currentPlatform: n } = e;
    return r.useMemo(
        () =>
            s({
                platforms: t,
                currentPlatform: n,
            }),
        [n, t],
    );
}
