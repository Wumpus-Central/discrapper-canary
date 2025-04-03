n.d(t, {
    $V: () => d,
    OC: () => f
});
var r = n(442837),
    i = n(818083),
    o = n(430824),
    a = n(981631),
    s = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2025-03_enhanced_role_colors',
    label: 'Enhanced Role Colors',
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function c(e) {
    return l.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
function u(e) {
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
function d(e, t) {
    let n = c(t),
        i = (0, r.e7)([o.Z], () => {
            let t = o.Z.getGuild(e);
            return null != t && t.hasFeature(a.oNc.ENHANCED_ROLE_COLORS);
        });
    return n && i;
}
function f(e, t) {
    let n = o.Z.getGuild(e);
    return u(t) && null != n && n.hasFeature(a.oNc.ENHANCED_ROLE_COLORS);
}
