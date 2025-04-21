n.d(t, { Z: () => m });
var r = n(592125),
    i = n(594174),
    a = n(585483),
    o = n(636449),
    s = n(337682),
    l = n(566620),
    c = n(224189),
    u = n(574952),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function m(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, c.Z)(e.targetApplicationId, e.channelId)), (n = (0, o.R)());
    } catch (e) {
        return !1;
    }
    return (0, o.C)(n, () => g(h(_({}, e), { targetApplication: t })));
}
async function g(e) {
    let { targetApplication: t, locationObject: n, channelId: o, analyticsLocations: c, componentId: f, commandOrigin: _, sectionName: p, source: h, onExecutedCallback: m, referrerId: g, customId: E, inviterUserId: b, onConfirmActivityLaunchChecksAlertOpen: y } = e,
        v = (0, u.Z)(),
        O = i.default.getCurrentUser();
    return null == o
        ? (a.S.dispatch(d.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t.id }), !1)
        : null != r.Z.getChannel(o) &&
              null != O &&
              null != t &&
              (s.tZ(t.id),
              await (0, l.G6)({
                  channelId: o,
                  applicationId: t.id,
                  isStart: !0,
                  embeddedActivitiesManager: v,
                  componentId: f,
                  commandOrigin: _,
                  sectionName: p,
                  locationObject: n,
                  analyticsLocations: c,
                  source: h,
                  onExecutedCallback: m,
                  referrerId: g,
                  customId: E,
                  instanceId: void 0,
                  inviterUserId: b,
                  onConfirmActivityLaunchChecksAlertOpen: y
              }));
}
