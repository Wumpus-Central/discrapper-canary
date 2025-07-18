n.d(t, { Ji: () => l });
var r = n(570140),
    i = n(317770),
    a = n(818083);
(n(638395), n(171393));
var o = n(987338);
let s = (0, a.B)({
    kind: 'user',
    id: '2024-07_icymi',
    label: 'In-case-you-missed-it tab',
    commonTriggerPoint: o.$P.CONNECTION_OPEN_MOBILE,
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
            config: {
                enabled: !0,
                activeVoice: !1,
                activeConvos: !0
            }
        },
        {
            id: 3,
            label: 'new icymi tab with more new features',
            config: {
                enabled: !0,
                activeVoice: !0,
                activeConvos: !0,
                forumThreads: !0
            }
        }
    ]
});
((0, a.B)({
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
    (0, a.B)({
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
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return s.getCurrentConfig(
        { location: e },
        {
            disable: !0,
            autoTrackExposure: t
        }
    ).enabled;
}
((0, a.B)({
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
    (0, a.B)({
        kind: 'user',
        id: '2025-04_icymi_search_experience',
        label: 'ICYMI Search Experience',
        defaultConfig: {
            searchEnabled: !1,
            renameEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'control group - IGNORE THIS DO NOT USE',
                config: {
                    searchEnabled: !1,
                    renameEnabled: !1
                }
            },
            {
                id: 2,
                label: 'search experience - search only',
                config: {
                    searchEnabled: !0,
                    renameEnabled: !1
                }
            },
            {
                id: 3,
                label: 'search experience - search + rename',
                config: {
                    searchEnabled: !0,
                    renameEnabled: !0
                }
            }
        ]
    }));
class c extends i.Z {
    _initialize() {
        r.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    handleConnectionOpen() {
        l('SearchExperimentManager', !1);
    }
}
(new c(),
    (0, a.B)({
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
