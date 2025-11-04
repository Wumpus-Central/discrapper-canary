n.d(t, {
    VZ: () => d,
    ZY: () => f,
    b5: () => u,
    q3: () => p,
}),
    n(647438);
var r = n(818083),
    i = n(427164),
    a = n(638395),
    o = n(171393),
    s = n(987338);
let l = "hide_icymi_tab",
    c = (0, r.B)({
        kind: "user",
        id: "2024-07_icymi",
        label: "In-case-you-missed-it tab",
        commonTriggerPoint: s.$P.CONNECTION_OPEN_MOBILE,
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "enables the new icymi tab",
                config: { enabled: !0 },
            },
        ],
    });
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, o.Z)(l),
        r = c.useExperiment(
            { location: e },
            {
                autoTrackExposure: t,
                disable: n,
            },
        ),
        i = g.useExperiment(
            { location: e },
            {
                autoTrackExposure: !1,
                disable: !r.enabled,
            },
        );
    return r.enabled && i.icymiDesktopEnabled;
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = a.Z.get(l),
        r = c.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: t,
                disable: n,
            },
        );
    {
        let t = g.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: !1,
                disable: !r.enabled,
            },
        );
        return r.enabled && t.icymiDesktopEnabled;
    }
}
let f = (0, r.B)({
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
    _ = (0, r.B)({
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
        n = d(e, !1);
    return _.getCurrentConfig(
        { location: e },
        {
            autoTrackExposure: t,
            disable: !n,
        },
    );
}
let h = {
        isNewHeaderAndInteractions: !1,
        isNewCardDesign: !1,
        isBottomSheetInteractions: !1,
        uxVariation: "default",
    },
    m = (0, i.le)({
        name: "2025-09-destination-icymi-ux-v2",
        kind: "user",
        defaultConfig: h,
        variations: {
            1: {
                isNewHeaderAndInteractions: !0,
                isNewCardDesign: !1,
                isBottomSheetInteractions: !1,
                uxVariation: "destination_icymi_ia",
            },
            2: {
                isNewHeaderAndInteractions: !0,
                isNewCardDesign: !0,
                isBottomSheetInteractions: !1,
                uxVariation: "destination_icymi_ia_card",
            },
            3: {
                isNewHeaderAndInteractions: !0,
                isNewCardDesign: !1,
                isBottomSheetInteractions: !0,
                uxVariation: "destination_icymi_ia_bottom_sheet",
            },
            4: {
                isNewHeaderAndInteractions: !0,
                isNewCardDesign: !0,
                isBottomSheetInteractions: !0,
                uxVariation: "destination_icymi_ia_bottom_sheet_card",
            },
        },
    }),
    g = (0, r.B)({
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
