n.d(t, { Ji: () => o });
var r = n(818083);
(n(638395), n(171393));
var i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-07_icymi',
    label: 'In-case-you-missed-it tab',
    commonTriggerPoint: i.$P.CONNECTION_OPEN_MOBILE,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enables the new icymi tab',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'new icymi tab with some new features',
            config: { enabled: !0 }
        },
        {
            id: 3,
            label: 'new icymi tab with more new features',
            config: {
                enabled: !0,
                forumThreads: !0
            }
        }
    ]
});
((0, r.B)({
    kind: 'user',
    id: '2024-12_icymi_status_with_media',
    label: 'Shows media with custom status in ICYMI',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables showing media with custom status in ICYMI',
            config: { enabled: !0 }
        }
    ]
}),
    (0, r.B)({
        kind: 'user',
        id: '2025-07_icymi_split_notification_tab',
        label: 'Split notifications tab',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Split notifications tab',
                config: { enabled: !0 }
            }
        ]
    }));
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a.getCurrentConfig(
        { location: e },
        {
            disable: !0,
            autoTrackExposure: t
        }
    ).enabled;
}
((0, r.B)({
    kind: 'user',
    id: '2024-07_icymi_negative_items',
    label: 'icymi negative content (debugging only)',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'allow negative items only',
            config: { enabled: !0 }
        }
    ]
}),
    (0, r.B)({
        kind: 'user',
        id: '2025-05_icymi_new_conversation_summaries',
        label: 'New conversation summary in ICYMI',
        defaultConfig: { contentGenerationEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'New conversation summary types in ICYMI',
                config: { contentGenerationEnabled: !0 }
            }
        ]
    }));
