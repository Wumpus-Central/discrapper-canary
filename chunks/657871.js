n.d(t, {
    kB: () => i,
    zM: () => a,
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2025-09_mention_suggestion",
    label: "Mention Suggestions",
    defaultConfig: {
        enabled: !1,
        suggestionDesign: "horizontal",
        highlightDesign: "mention",
        onlyExactMatch: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Default",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !1,
            },
        },
        {
            id: 2,
            label: "Exact match only",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
            },
        },
        {
            id: 3,
            label: "Alternate highlight design",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "mention",
                onlyExactMatch: !1,
            },
        },
        {
            id: 4,
            label: "Horizontal suggestions",
            config: {
                enabled: !0,
                suggestionDesign: "horizontal",
                highlightDesign: "simple",
                onlyExactMatch: !1,
            },
        },
    ],
});
function i(e, t) {
    return r.getCurrentConfig({ location: e }, t);
}
function a(e, t) {
    return r.useExperiment({ location: e }, t);
}
