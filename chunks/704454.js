n.d(t, {
    G7: () => a,
    UQ: () => s,
    bc: () => c,
    g2: () => l
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2025-01_sensitive_content_defaults',
        label: 'Sensitive Content Defaults',
        defaultConfig: {
            enabled: !1,
            allBlur: !1,
            mixed: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Mixed',
                config: {
                    enabled: !0,
                    mixed: !0,
                    allBlur: !1
                }
            },
            {
                id: 2,
                label: 'Blur Default',
                config: {
                    enabled: !0,
                    mixed: !1,
                    allBlur: !0
                }
            }
        ]
    }),
    o = (0, r.B)({
        kind: 'user',
        id: '2025-01_sensitive_content_defaults_new_users',
        label: 'Sensitive Content Defaults - New Users',
        defaultConfig: {
            enabled: !1,
            allBlur: !1,
            mixed: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Mixed',
                config: {
                    enabled: !0,
                    mixed: !0,
                    allBlur: !1
                }
            },
            {
                id: 2,
                label: 'Blur Default',
                config: {
                    enabled: !0,
                    mixed: !1,
                    allBlur: !0
                }
            }
        ]
    });
function a(e) {
    let { enabled: t } = i.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
        { enabled: n } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t || n;
}
function s(e) {
    let { enabled: t } = i.useExperiment({ location: e }, { autoTrackExposure: !1 }),
        { enabled: n } = o.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t || n;
}
function l(e) {
    let { allBlur: t } = i.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
function c(e) {
    let { mixed: t } = i.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
