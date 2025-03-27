n.d(t, { OC: () => c });
var r = n(818083),
    i = n(430824),
    o = n(981631),
    a = n(987338);
let s = (0, r.B)({
    kind: 'user',
    id: '2025-03_enhanced_role_colors',
    label: 'Enhanced Role Colors',
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    return s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
function c(e, t) {
    let n = i.Z.getGuild(e);
    return l(t) && null != n && n.hasFeature(o.oNc.ENHANCED_ROLE_COLORS);
}
