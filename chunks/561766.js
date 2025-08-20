n.d(t, {
    Cx: () => l,
    Ol: () => a,
}),
    n(388685),
    n(539854);
var r = n(647438),
    i = n(981631),
    a = (function (e) {
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
let o = [];
function s(e) {
    let { platforms: t, currentPlatform: n } = e,
        r = new Set(t),
        a = [];
    return null == t || 0 === t.length || (null != n && r.has(n))
        ? o
        : (r.has(i.M7m.ANDROID) && r.has(i.M7m.IOS)
              ? a.push("mobile")
              : r.has(i.M7m.ANDROID)
                ? a.push("android")
                : r.has(i.M7m.IOS) && a.push("ios"),
          (r.has(i.M7m.PS4) || r.has(i.M7m.PS5)) && a.push("playstation"),
          r.has(i.M7m.XBOX) && a.push("xbox"),
          r.has(i.M7m.DESKTOP) && a.push("desktop"),
          a);
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
