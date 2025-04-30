n.d(t, {
    ZP: () => a,
    n9: () => s
});
var r = n(695103),
    i = n(115130);
function a(e) {
    return s() ? i.Z.getState().activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : o(e);
}
function o(e) {
    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == t ? null : 'https://'.concat(e, '.').concat(t);
}
function s() {
    let e = i.Z.getState();
    return e.useActivityUrlOverride && null != e.activityUrlOverride && '' !== e.activityUrlOverride;
}
