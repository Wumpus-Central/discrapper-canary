"use strict";
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => _.q,
        ImpressionGroups: () => d.q,
        ImpressionNames: () => u.I,
        ImpressionTypes: () => d.z,
        NetworkActionNames: () => u.D,
        analyticsTrackingStoreMaker: () => _.b,
        encodeProperties: () => l.q,
        extendSuperProperties: () => c.Fy,
        getCampaignParams: () => c.Pg,
        getDevice: () => c.Pf,
        getOS: () => c.R0,
        getSuperProperties: () => c.BV,
        getSuperPropertiesBase64: () => c.sv,
        isThrottled: () => m,
        trackMaker: () => f,
    });
var i = n(812729),
    r = n.n(i),
    s = n(284009),
    a = n.n(s),
    o = n(753912),
    l = n(368849),
    _ = n(502518),
    d = n(412728),
    u = n(239947),
    c = n(798566);
let E = {},
    h = {};
function m(e) {
    return null != E[e] && E[e] > Date.now();
}
let f = (e) => {
    let { addBreadcrumb: t, analyticEventConfigs: i, dispatcher: s, TRACK_ACTION_NAME: l } = e,
        _ = (0, o.x)(s, l);
    return function (e, s) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let l = s ?? {},
            d = i[e];
        if (("function" == typeof d && (d = d(l) ?? null), null != d))
            if ("throttlePeriod" in d) {
                let t = [e, ...d.throttleKeys(l)].join("_");
                if (m(t) || ("number" == typeof d.throttlePercent && Math.random() > d.throttlePercent))
                    return Promise.resolve();
                if (d.deduplicate) {
                    let e = h[t];
                    if (r()(e, l)) return Promise.resolve();
                    h[t] = l;
                }
                E[t] = Date.now() + d.throttlePeriod;
            } else if ("throttlePercent" in d) {
                if (Math.random() > d.throttlePercent) return Promise.resolve();
            } else a()(!1, `Unsupported analytics event config: ${d}`);
        return t?.(e), _(e, s, o);
    };
};
