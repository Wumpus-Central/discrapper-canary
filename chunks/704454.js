n.d(t, {
    G7: () => s,
    UQ: () => l,
    bc: () => u,
    g2: () => c
});
var r = n(818083),
    i = n(128064);
let a = (0, r.B)({
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
function s(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
        { enabled: n } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t || n || (0, i.c_)(e);
}
function l(e) {
    let { enabled: t } = a.useExperiment({ location: e }, { autoTrackExposure: !1 }),
        { enabled: n } = o.useExperiment({ location: e }, { autoTrackExposure: !1 }),
        r = (0, i.pY)(e);
    return t || n || r;
}
function c(e) {
    let { allBlur: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
function u(e) {
    let { mixed: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t || (0, i.c_)(e);
}
