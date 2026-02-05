n.d(t, { FL: () => r, z4: () => o }), n(321073);
var i,
    l = n(64700),
    a = n(652215),
    r =
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
let s = [];
function o(e) {
    let { platforms: t, currentPlatform: n } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { platforms: t, currentPlatform: n } = e,
                    i = new Set(t),
                    l = [];
                return null == t || 0 === t.length || (null != n && i.has(n))
                    ? s
                    : (i.has(a.yTV.ANDROID) && i.has(a.yTV.IOS)
                          ? l.push("mobile")
                          : i.has(a.yTV.ANDROID)
                            ? l.push("android")
                            : i.has(a.yTV.IOS) && l.push("ios"),
                      (i.has(a.yTV.PS4) || i.has(a.yTV.PS5)) && l.push("playstation"),
                      i.has(a.yTV.XBOX) && l.push("xbox"),
                      i.has(a.yTV.DESKTOP) && l.push("desktop"),
                      i.has(a.yTV.META_QUEST) && l.push("vr"),
                      l);
            })({ platforms: t, currentPlatform: n }),
        [n, t],
    );
}
