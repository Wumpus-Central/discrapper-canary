r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(592125),
    a = r(594174),
    o = r(585483),
    s = r(636449),
    l = r(337682),
    u = r(566620),
    c = r(224189),
    d = r(574952),
    f = r(981631);
function p(e) {
    return (0, s.C)(() => h(e));
}
async function h(e) {
    let { targetApplicationId: n, locationObject: r, channelId: s, analyticsLocations: p, componentId: h, commandOrigin: _, sectionName: m, source: g, onExecutedCallback: E, referrerId: v, customId: y, inviterUserId: b } = e,
        I = (0, d.Z)(),
        T = a.default.getCurrentUser();
    if (null == n) return !1;
    let S = await (0, c.Z)(n, s);
    return null == s
        ? (o.S.dispatch(f.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1)
        : null != i.Z.getChannel(s) &&
              null != T &&
              null != S &&
              (l.tZ(S.id),
              await (0, u.af)({
                  channelId: s,
                  applicationId: S.id,
                  isStart: !0,
                  embeddedActivitiesManager: I,
                  componentId: h,
                  commandOrigin: _,
                  sectionName: m,
                  locationObject: r,
                  analyticsLocations: p,
                  source: g,
                  onExecutedCallback: E,
                  referrerId: v,
                  customId: y,
                  inviterUserId: b
              }));
}
