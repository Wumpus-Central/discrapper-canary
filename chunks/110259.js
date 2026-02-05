"use strict";
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => u.q,
        ImpressionGroups: () => c.q,
        ImpressionNames: () => d.I,
        ImpressionTypes: () => c.z,
        NetworkActionNames: () => d.D,
        analyticsTrackingStoreMaker: () => u.b,
        encodeProperties: () => l.q,
        extendSuperProperties: () => _.Fy,
        getCampaignParams: () => _.Pg,
        getDevice: () => _.Pf,
        getOS: () => _.R0,
        getSuperProperties: () => _.BV,
        getSuperPropertiesBase64: () => _.sv,
        isThrottled: () => h,
        trackMaker: () => m,
    });
var r = n(812729),
    i = n.n(r),
    a = n(284009),
    s = n.n(a),
    o = n(753912),
    l = n(368849),
    u = n(502518),
    c = n(412728),
    d = n(239947),
    _ = n(798566);
let f = {},
    p = {};
function h(e) {
    return null != f[e] && f[e] > Date.now();
}
let m = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: a } = e,
        l = (0, o.x)(r, a);
    return function (e, r) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let o = r ?? {},
            u = t[e];
        if (("function" == typeof u && (u = u(o) ?? null), null != u))
            if ("throttlePeriod" in u) {
                let t = [e, ...u.throttleKeys(o)].join("_");
                if (h(t) || ("number" == typeof u.throttlePercent && Math.random() > u.throttlePercent))
                    return Promise.resolve();
                if (u.deduplicate) {
                    let e = p[t];
                    if (i()(e, o)) return Promise.resolve();
                    p[t] = o;
                }
                f[t] = Date.now() + u.throttlePeriod;
            } else if ("throttlePercent" in u) {
                if (Math.random() > u.throttlePercent) return Promise.resolve();
            } else s()(!1, `Unsupported analytics event config: ${u}`);
        return l(e, r, a);
    };
};
