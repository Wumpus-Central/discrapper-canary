(n.d(t, {
    Cx: () => s,
    Ol: () => a
}),
    n(388685),
    n(539854));
var r,
    i = n(73800),
    l = n(981631),
    a = (((r = {}).DESKTOP = 'desktop'), (r.MOBILE = 'mobile'), (r.ANDROID = 'android'), (r.IOS = 'ios'), (r.PLAYSTATION = 'playstation'), (r.XBOX = 'xbox'), r);
let o = [];
function s(e) {
    let { platforms: t, currentPlatform: n } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { platforms: t, currentPlatform: n } = e,
                    r = new Set(t),
                    i = [];
                return null == t || 0 === t.length || (null != n && r.has(n)) ? o : (r.has(l.M7m.ANDROID) && r.has(l.M7m.IOS) ? i.push('mobile') : r.has(l.M7m.ANDROID) ? i.push('android') : r.has(l.M7m.IOS) && i.push('ios'), (r.has(l.M7m.PS4) || r.has(l.M7m.PS5)) && i.push('playstation'), r.has(l.M7m.XBOX) && i.push('xbox'), r.has(l.M7m.DESKTOP) && i.push('desktop'), i);
            })({
                platforms: t,
                currentPlatform: n
            }),
        [n, t]
    );
}
