n.d(t, { Z: () => r });
let r = (0, n(987170).Z)({
    kind: "user",
    id: "2025-08_search_phrase_matching",
    label: "Search Phrase Matching",
    defaultConfig: {
        enabled: !1,
        quotes: !1,
        brackets: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enabled.",
            config: {
                enabled: !0,
                quotes: !0,
                brackets: !1,
            },
        },
        {
            id: 2,
            label: "Tokenization only; no quotes",
            config: {
                enabled: !0,
                quotes: !1,
                brackets: !1,
            },
        },
        {
            id: 3,
            label: "[Square brackets] instead of quotes",
            config: {
                enabled: !0,
                quotes: !1,
                brackets: !0,
            },
        },
    ],
});
