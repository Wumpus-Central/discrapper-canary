n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => c.q,
        ImpressionGroups: () => u.q,
        ImpressionNames: () => d.I,
        ImpressionTypes: () => u.z,
        NetworkActionNames: () => d.D,
        analyticsTrackingStoreMaker: () => c.b,
        encodeProperties: () => l.q,
        extendSuperProperties: () => f.Fy,
        getCampaignParams: () => f.Pg,
        getDevice: () => f.Pf,
        getOS: () => f.R0,
        getSuperProperties: () => f.BV,
        getSuperPropertiesBase64: () => f.sv,
        isThrottled: () => h,
        trackMaker: () => m,
    }),
    n(896048);
var r = n(812729),
    i = n.n(r),
    a = n(284009),
    s = n.n(a),
    o = n(753912),
    l = n(368849),
    c = n(502518),
    u = n(412728),
    d = n(239947),
    f = n(798566);
let p = {},
    _ = {};

function h(e) {
    return null != p[e] && p[e] > Date.now();
}
let m = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: a } = e,
        l = (0, o.x)(r, a);
    return function (e, r) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let o = null != r ? r : {},
            c = t[e];
        if ("function" == typeof c) {
            var u;
            c = null != (u = c(o)) ? u : null;
        }
        if (null != c)
            if ("throttlePeriod" in c) {
                let t = [e, ...c.throttleKeys(o)].join("_");
                if (h(t) || ("number" == typeof c.throttlePercent && Math.random() > c.throttlePercent))
                    return Promise.resolve();
                if (c.deduplicate) {
                    let e = _[t];
                    if (i()(e, o)) return Promise.resolve();
                    _[t] = o;
                }
                p[t] = Date.now() + c.throttlePeriod;
            } else if ("throttlePercent" in c) {
                if (Math.random() > c.throttlePercent) return Promise.resolve();
            } else s()(!1, "Unsupported analytics event config: ".concat(c));
        return l(e, r, a);
    };
};
