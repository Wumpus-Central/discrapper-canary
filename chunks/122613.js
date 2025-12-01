n.d(t, { Z: () => _ });
var r = n(592125),
    i = n(594174),
    a = n(636449),
    o = n(337682),
    s = n(566620),
    l = n(224189),
    c = n(574952);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function _(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, l.Z)(e.targetApplicationId, e.channelId)), (n = (0, a.R)());
    } catch (e) {
        return !1;
    }
    return (0, a.C)(n, () => m(p(d({}, e), { targetApplication: t })));
}
async function m(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: l,
            componentId: u,
            commandOrigin: d,
            sectionName: f,
            source: p,
            onExecutedCallback: _,
            referrerId: m,
            customId: h,
            inviterUserId: g,
            onConfirmActivityLaunchChecksAlertOpen: E,
        } = e,
        b = (0, c.Z)(),
        y = i.default.getCurrentUser();
    return (
        null != a &&
        null != r.Z.getChannel(a) &&
        null != y &&
        null != t &&
        (o.tZ(t.id),
        await (0, s.G6)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: b,
            componentId: u,
            commandOrigin: d,
            sectionName: f,
            locationObject: n,
            analyticsLocations: l,
            source: p,
            onExecutedCallback: _,
            referrerId: m,
            customId: h,
            inviterUserId: g,
            onConfirmActivityLaunchChecksAlertOpen: E,
        }))
    );
}
