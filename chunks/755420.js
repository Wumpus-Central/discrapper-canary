n.d(t, { FL: () => a, z4: () => o }), n(321073);
var i,
    l = n(64700),
    r = n(652215),
    a =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
r.yTV.DESKTOP,
    r.yTV.ANDROID,
    r.yTV.IOS,
    r.yTV.XBOX,
    r.yTV.PS4,
    r.yTV.PS5,
    r.yTV.SAMSUNG,
    r.yTV.EMBEDDED,
    r.yTV.META_QUEST;
let s = [];
function o(e) {
    let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                    l = new Set(t),
                    a = [];
                return null == t || 0 === t.length || (null != n && l.has(n) && i)
                    ? s
                    : (l.has(r.yTV.ANDROID) && l.has(r.yTV.IOS)
                          ? a.push("mobile")
                          : l.has(r.yTV.ANDROID)
                            ? a.push("android")
                            : l.has(r.yTV.IOS) && a.push("ios"),
                      (l.has(r.yTV.PS4) || l.has(r.yTV.PS5)) && a.push("playstation"),
                      l.has(r.yTV.XBOX) && a.push("xbox"),
                      l.has(r.yTV.DESKTOP) && a.push("desktop"),
                      l.has(r.yTV.META_QUEST) && a.push("vr"),
                      a);
            })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
        [n, t, i],
    );
}
