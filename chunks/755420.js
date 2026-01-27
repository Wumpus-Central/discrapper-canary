n.d(t, {
    FL: () => a,
    z4: () => o,
}),
    n(896048),
    n(321073);
var r,
    i = n(64700),
    l = n(652215),
    a =
        (((r = {}).DESKTOP = "desktop"),
        (r.MOBILE = "mobile"),
        (r.ANDROID = "android"),
        (r.IOS = "ios"),
        (r.PLAYSTATION = "playstation"),
        (r.XBOX = "xbox"),
        (r.VR = "vr"),
        r);
l.yTV.DESKTOP,
    l.yTV.ANDROID,
    l.yTV.IOS,
    l.yTV.XBOX,
    l.yTV.PS4,
    l.yTV.PS5,
    l.yTV.SAMSUNG,
    l.yTV.EMBEDDED,
    l.yTV.META_QUEST;
let s = [];

function o(e) {
    let { platforms: t, currentPlatform: n } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { platforms: t, currentPlatform: n } = e,
                    r = new Set(t),
                    i = [];
                return null == t || 0 === t.length || (null != n && r.has(n))
                    ? s
                    : (r.has(l.yTV.ANDROID) && r.has(l.yTV.IOS)
                          ? i.push("mobile")
                          : r.has(l.yTV.ANDROID)
                            ? i.push("android")
                            : r.has(l.yTV.IOS) && i.push("ios"),
                      (r.has(l.yTV.PS4) || r.has(l.yTV.PS5)) && i.push("playstation"),
                      r.has(l.yTV.XBOX) && i.push("xbox"),
                      r.has(l.yTV.DESKTOP) && i.push("desktop"),
                      r.has(l.yTV.META_QUEST) && i.push("vr"),
                      i);
            })({
                platforms: t,
                currentPlatform: n,
            }),
        [n, t],
    );
}
