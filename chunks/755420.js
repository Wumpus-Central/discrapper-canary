n.d(t, { FL: () => r, z4: () => o }), n(321073);
var i,
    l = n(64700),
    s = n(652215),
    r =
        (((i = {}).DESKTOP = "desktop"),
        (i.MOBILE = "mobile"),
        (i.ANDROID = "android"),
        (i.IOS = "ios"),
        (i.PLAYSTATION = "playstation"),
        (i.XBOX = "xbox"),
        (i.VR = "vr"),
        i);
s.yTV.DESKTOP,
    s.yTV.ANDROID,
    s.yTV.IOS,
    s.yTV.XBOX,
    s.yTV.PS4,
    s.yTV.PS5,
    s.yTV.SAMSUNG,
    s.yTV.EMBEDDED,
    s.yTV.META_QUEST;
let a = [];
function o(e) {
    let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { platforms: t, currentPlatform: n, isGameLaunchable: i } = e,
                    l = new Set(t),
                    r = [];
                return null == t || 0 === t.length || (null != n && l.has(n) && i)
                    ? a
                    : (l.has(s.yTV.ANDROID) && l.has(s.yTV.IOS)
                          ? r.push("mobile")
                          : l.has(s.yTV.ANDROID)
                            ? r.push("android")
                            : l.has(s.yTV.IOS) && r.push("ios"),
                      (l.has(s.yTV.PS4) || l.has(s.yTV.PS5)) && r.push("playstation"),
                      l.has(s.yTV.XBOX) && r.push("xbox"),
                      l.has(s.yTV.DESKTOP) && r.push("desktop"),
                      l.has(s.yTV.META_QUEST) && r.push("vr"),
                      r);
            })({ platforms: t, currentPlatform: n, isGameLaunchable: i }),
        [n, t, i],
    );
}
