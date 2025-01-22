r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(695103),
    a = r(115130);
function o(e) {
    let n = a.Z.getState();
    return n.useActivityUrlOverride && null != n.activityUrlOverride && '' !== n.activityUrlOverride ? n.activityUrlOverride : i.Z.inTestModeForEmbeddedApplication(e) ? i.Z.testModeOriginURL : s(e);
}
function s(e) {
    let n = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == n ? null : 'https://'.concat(e, '.').concat(n);
}
