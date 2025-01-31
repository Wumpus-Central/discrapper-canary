n.d(t, { Z: () => a });
var i = n(695103),
    r = n(115130);
function a(e) {
    let t = r.Z.getState();
    return t.useActivityUrlOverride && null != t.activityUrlOverride && '' !== t.activityUrlOverride ? t.activityUrlOverride : i.Z.inTestModeForEmbeddedApplication(e) ? i.Z.testModeOriginURL : s(e);
}
function s(e) {
    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == t ? null : 'https://'.concat(e, '.').concat(t);
}
