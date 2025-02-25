n.d(t, { Z: () => f });
var r = n(592125),
    i = n(594174),
    o = n(585483),
    a = n(636449),
    s = n(337682),
    l = n(566620),
    c = n(224189),
    u = n(574952),
    d = n(981631);
function f(e) {
    return (0, a.C)(() => p(e));
}
async function p(e) {
    let { targetApplicationId: t, locationObject: n, channelId: a, analyticsLocations: f, componentId: p, commandOrigin: _, sectionName: h, source: m, onExecutedCallback: g, referrerId: E, customId: v, inviterUserId: b } = e,
        y = (0, u.Z)(),
        O = i.default.getCurrentUser();
    if (null == t) return !1;
    let S = await (0, c.Z)(t, a);
    return null == a
        ? (o.S.dispatch(d.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != r.Z.getChannel(a) &&
              null != O &&
              null != S &&
              (s.tZ(S.id),
              await (0, l.G6)({
                  channelId: a,
                  applicationId: S.id,
                  isStart: !0,
                  embeddedActivitiesManager: y,
                  componentId: p,
                  commandOrigin: _,
                  sectionName: h,
                  locationObject: n,
                  analyticsLocations: f,
                  source: m,
                  onExecutedCallback: g,
                  referrerId: E,
                  customId: v,
                  instanceId: void 0,
                  inviterUserId: b
              }));
}
