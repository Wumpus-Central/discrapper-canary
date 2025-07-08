(n.d(t, {
    M: () => a,
    O: () => l
}),
    n(388685),
    n(539854));
var r,
    i = n(981631),
    l = (((r = {}).DESKTOP = 'desktop'), (r.MOBILE = 'mobile'), (r.ANDROID = 'android'), (r.IOS = 'ios'), (r.PLAYSTATION = 'playstation'), (r.XBOX = 'xbox'), r);
function a(e) {
    let { presenceActivity: t, currentPlatform: n } = e,
        r = null == t ? void 0 : t.supported_platforms,
        l = new Set(r),
        a = [];
    return null == r || 0 === r.length || (null != n && r.includes(n)) ? [] : (l.has(i.M7m.ANDROID) && l.has(i.M7m.IOS) ? a.push('mobile') : l.has(i.M7m.ANDROID) ? a.push('android') : l.has(i.M7m.IOS) && a.push('ios'), (l.has(i.M7m.PS4) || l.has(i.M7m.PS5)) && a.push('playstation'), l.has(i.M7m.XBOX) && a.push('xbox'), l.has(i.M7m.DESKTOP) && a.push('desktop'), a);
}
