r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(317381),
    s = r(835473),
    l = r(719247);
function u(e) {
    let n = (0, a.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
        [r, i] = (0, s.Z)([null == n ? void 0 : n.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]),
        u = (0, a.e7)([o.ZP], () => o.ZP.getEmbeddedActivityForUserId(e.author_id, null == r ? void 0 : r.id));
    return {
        activity: n,
        embeddedActivity: u,
        anyMatchingApplication: null != r ? r : i,
        activityApplication: r,
        fallbackApplication: i
    };
}
