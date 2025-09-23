n.d(t, { VZ: () => c });
var r = n(818083),
    i = n(427164),
    a = n(638395);
n(171393);
var o = n(987338);
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
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        a.Z.get(s),
        l.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: t,
                disable: !0,
            },
        ).enabled
    );
}
(0, r.B)({
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
    (0, r.B)({
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
    }),
    (0, i.le)({
        name: "2025-09-destination-icymi-ux-v2",
        kind: "user",
        defaultConfig: {
            isNewHeaderAndInteractions: !1,
            isNewCardDesign: !1,
            isBottomSheetInteractions: !1,
            uxVariation: "default",
        },
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
    });
