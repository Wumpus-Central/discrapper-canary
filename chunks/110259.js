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
    s = n(284009),
    a = n.n(s),
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
    let { addBreadcrumb: t, analyticEventConfigs: r, dispatcher: s, TRACK_ACTION_NAME: l } = e,
        u = (0, o.x)(s, l);
    return function (e, s) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let l = s ?? {},
            c = r[e];
        if (("function" == typeof c && (c = c(l) ?? null), null != c))
            if ("throttlePeriod" in c) {
                let t = [e, ...c.throttleKeys(l)].join("_");
                if (h(t) || ("number" == typeof c.throttlePercent && Math.random() > c.throttlePercent))
                    return Promise.resolve();
                if (c.deduplicate) {
                    let e = p[t];
                    if (i()(e, l)) return Promise.resolve();
                    p[t] = l;
                }
                f[t] = Date.now() + c.throttlePeriod;
            } else if ("throttlePercent" in c) {
                if (Math.random() > c.throttlePercent) return Promise.resolve();
            } else a()(!1, `Unsupported analytics event config: ${c}`);
        return t?.(e), u(e, s, o);
    };
};
