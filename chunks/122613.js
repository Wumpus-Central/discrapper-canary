n.d(t, { Z: () => g });
var r = n(592125),
    i = n(594174),
    o = n(585483),
    a = n(636449),
    s = n(774226),
    l = n(337682),
    c = n(566620),
    u = n(224189),
    d = n(574952),
    f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function g(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, u.Z)(e.targetApplicationId, e.channelId)), (n = (0, a.R)({ isContextless: (0, s.Kb)(t) }));
    } catch (e) {
        return !1;
    }
    return (0, a.C)(n, () => E(m(p({}, e), { targetApplication: t })));
}
async function E(e) {
    let { targetApplication: t, locationObject: n, channelId: a, analyticsLocations: s, componentId: u, commandOrigin: _, sectionName: p, source: h, onExecutedCallback: m, referrerId: g, customId: E, inviterUserId: b, onConfirmActivityLaunchChecksAlertOpen: y } = e,
        v = (0, d.Z)(),
        O = i.default.getCurrentUser();
    return null == a
        ? (o.S.dispatch(f.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t.id }), !1)
        : null != r.Z.getChannel(a) &&
              null != O &&
              null != t &&
              (l.tZ(t.id),
              await (0, c.G6)({
                  channelId: a,
                  applicationId: t.id,
                  isStart: !0,
                  embeddedActivitiesManager: v,
                  componentId: u,
                  commandOrigin: _,
                  sectionName: p,
                  locationObject: n,
                  analyticsLocations: s,
                  source: h,
                  onExecutedCallback: m,
                  referrerId: g,
                  customId: E,
                  instanceId: void 0,
                  inviterUserId: b,
                  onConfirmActivityLaunchChecksAlertOpen: y
              }));
}
