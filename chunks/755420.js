n.d(t, {
    FL: () => a,
    z4: () => l,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(652215),
    a = (function (e) {
        return (
            (e.DESKTOP = "desktop"),
            (e.MOBILE = "mobile"),
            (e.ANDROID = "android"),
            (e.IOS = "ios"),
            (e.PLAYSTATION = "playstation"),
            (e.XBOX = "xbox"),
            (e.VR = "vr"),
            e
        );
    })({});
i.yTV.DESKTOP,
    i.yTV.ANDROID,
    i.yTV.IOS,
    i.yTV.XBOX,
    i.yTV.PS4,
    i.yTV.PS5,
    i.yTV.SAMSUNG,
    i.yTV.EMBEDDED,
    i.yTV.META_QUEST;
let s = [];

function o(e) {
    let { platforms: t, currentPlatform: n } = e,
        r = new Set(t),
        a = [];
    return null == t || 0 === t.length || (null != n && r.has(n))
        ? s
        : (r.has(i.yTV.ANDROID) && r.has(i.yTV.IOS)
              ? a.push("mobile")
              : r.has(i.yTV.ANDROID)
                ? a.push("android")
                : r.has(i.yTV.IOS) && a.push("ios"),
          (r.has(i.yTV.PS4) || r.has(i.yTV.PS5)) && a.push("playstation"),
          r.has(i.yTV.XBOX) && a.push("xbox"),
          r.has(i.yTV.DESKTOP) && a.push("desktop"),
          r.has(i.yTV.META_QUEST) && a.push("vr"),
          a);
}

function l(e) {
    let { platforms: t, currentPlatform: n } = e;
    return r.useMemo(
        () =>
            o({
                platforms: t,
                currentPlatform: n,
            }),
        [n, t],
    );
}
