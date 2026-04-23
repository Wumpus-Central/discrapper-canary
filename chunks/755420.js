n.d(t, { FL: () => s, z4: () => o }), n(321073);
var i,
    l = n(64700),
    a = n(652215),
    s =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
a.yTV.DESKTOP,
    a.yTV.ANDROID,
    a.yTV.IOS,
    a.yTV.XBOX,
    a.yTV.PS4,
    a.yTV.PS5,
    a.yTV.SAMSUNG,
    a.yTV.EMBEDDED,
    a.yTV.META_QUEST;
let r = [];
function o(e) {
    let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                    l = new Set(t),
                    s = [];
                return null == t || 0 === t.length || (null != n && l.has(n) && i)
                    ? r
                    : (l.has(a.yTV.ANDROID) && l.has(a.yTV.IOS)
                          ? s.push("mobile")
                          : l.has(a.yTV.ANDROID)
                            ? s.push("android")
                            : l.has(a.yTV.IOS) && s.push("ios"),
                      (l.has(a.yTV.PS4) || l.has(a.yTV.PS5)) && s.push("playstation"),
                      l.has(a.yTV.XBOX) && s.push("xbox"),
                      l.has(a.yTV.DESKTOP) && s.push("desktop"),
                      l.has(a.yTV.META_QUEST) && s.push("vr"),
                      s);
            })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
        [n, t, i],
    );
}
