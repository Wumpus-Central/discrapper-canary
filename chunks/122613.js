n.d(t, { Z: () => f });
var i = n(592125),
    r = n(594174),
    a = n(585483),
    s = n(636449),
    o = n(337682),
    l = n(566620),
    u = n(224189),
    c = n(574952),
    d = n(981631);
function f(e) {
    return (0, s.C)(() => _(e));
}
async function _(e) {
    let { targetApplicationId: t, locationObject: n, channelId: s, analyticsLocations: f, componentId: _, commandOrigin: p, sectionName: h, source: m, onExecutedCallback: g, referrerId: E, customId: v, inviterUserId: y } = e,
        I = (0, c.Z)(),
        b = r.default.getCurrentUser();
    if (null == t) return !1;
    let T = await (0, u.Z)(t, s);
    return null == s
        ? (a.S.dispatch(d.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != i.Z.getChannel(s) &&
              null != b &&
              null != T &&
              (o.tZ(T.id),
              await (0, l.af)({
                  channelId: s,
                  applicationId: T.id,
                  isStart: !0,
                  embeddedActivitiesManager: I,
                  componentId: _,
                  commandOrigin: p,
                  sectionName: h,
                  locationObject: n,
                  analyticsLocations: f,
                  source: m,
                  onExecutedCallback: g,
                  referrerId: E,
                  customId: v,
                  inviterUserId: y
              }));
}
