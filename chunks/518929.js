n.d(t, {
    VZ: () => u,
    ZY: () => d,
    b5: () => c,
    q3: () => p,
});
var r = n(818083),
    i = n(638395),
    a = n(171393),
    o = n(987338);
let s = "hide_icymi_tab",
    l = (0, r.B)({
        kind: "user",
        id: "2024-07_icymi",
        label: "In-case-you-missed-it tab",
        commonTriggerPoint: o.$P.CONNECTION_OPEN_MOBILE,
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "enables the new icymi tab",
                config: { enabled: !0 },
            },
        ],
    });
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.Z)(s),
        r = l.useExperiment(
            { location: e },
            {
                autoTrackExposure: t,
                disable: n,
            },
        ),
        i = _.useExperiment(
            { location: e },
            {
                autoTrackExposure: !1,
                disable: !r.enabled,
            },
        );
    return r.enabled && i.icymiDesktopEnabled;
}
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.Z.get(s),
        r = l.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: t,
                disable: n,
            },
        );
    {
        let t = _.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: !1,
                disable: !r.enabled,
            },
        );
        return r.enabled && t.icymiDesktopEnabled;
    }
}
let d = (0, r.B)({
        kind: "user",
        id: "2024-07_icymi_negative_items",
        label: "icymi negative content (debugging only)",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "allow negative items only",
                config: { enabled: !0 },
            },
        ],
    }),
    f = (0, r.B)({
        kind: "user",
        id: "2025-05_icymi_new_conversation_summaries",
        label: "New conversation summary in ICYMI",
        defaultConfig: { contentGenerationEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: "New conversation summary types in ICYMI",
                config: { contentGenerationEnabled: !0 },
            },
        ],
    });
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = u(e, !1);
    return f.getCurrentConfig(
        { location: e },
        {
            autoTrackExposure: t,
            disable: !n,
        },
    );
}
let _ = (0, r.B)({
    kind: "user",
    id: "2025-10_icymi_desktop_client",
    label: "ICYMI desktop client",
    defaultConfig: { icymiDesktopEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable ICYMI desktop client",
            config: { icymiDesktopEnabled: !0 },
        },
    ],
});
