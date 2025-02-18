n.d(t, {
    ZP: () => a,
    n9: () => o
});
var i = n(695103),
    r = n(115130);
function a(e) {
    return o() ? r.Z.getState().activityUrlOverride : i.Z.inTestModeForEmbeddedApplication(e) ? i.Z.testModeOriginURL : s(e);
}
function s(e) {
    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == t ? null : 'https://'.concat(e, '.').concat(t);
}
function o() {
    let e = r.Z.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && '' !== e.activityUrlOverride;
}
