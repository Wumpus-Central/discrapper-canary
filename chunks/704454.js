n.d(t, {
    bc: () => s,
    g2: () => a
});
var i = n(818083);
let r = (0, i.B)({
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
});
function a(e) {
    let { allBlur: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
function s(e) {
    let { mixed: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
(0, i.B)({
    kind: 'user',
    id: '2025-01_sensitive_content_defaults',
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
