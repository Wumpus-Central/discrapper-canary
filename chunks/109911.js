n.d(t, {
    Ji: () => d,
    XN: () => u
});
var r = n(570140),
    i = n(317770),
    a = n(818083),
    o = n(638395);
n(171393);
var s = n(987338);
let l = (0, a.B)({
        kind: 'user',
        id: '2024-07_icymi',
        label: 'In-case-you-missed-it tab',
        commonTriggerPoint: s.$P.CONNECTION_OPEN_MOBILE,
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
    }),
    c =
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
            id: '2024-10_merge_notifications_tab',
            label: 'Merge notifications tab',
            defaultConfig: {
                enabled: !1,
                tabBadgeVariant: 1,
                removeHomeMentionBadges: !1
            },
            treatments: [
                {
                    id: 1,
                    label: 'Merge notifications tab - no badging changes',
                    config: {
                        enabled: !0,
                        tabBadgeVariant: 1,
                        removeHomeMentionBadges: !1
                    }
                },
                {
                    id: 2,
                    label: 'Merge notifications tab - move recent mentions badges to ICYMI',
                    config: {
                        enabled: !0,
                        tabBadgeVariant: 2,
                        removeHomeMentionBadges: !0
                    }
                },
                {
                    id: 3,
                    label: 'Merge notifications tab - duplciate recent mentions tab badges to ICYMI',
                    config: {
                        enabled: !0,
                        tabBadgeVariant: 2,
                        removeHomeMentionBadges: !1
                    }
                },
                {
                    id: 4,
                    label: 'Merge notifications tab - blue badge ICYMI tab when there are new recent mentinos',
                    config: {
                        enabled: !0,
                        tabBadgeVariant: 3,
                        removeHomeMentionBadges: !1
                    }
                }
            ]
        }));
function u(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = o.Z.get('hide_icymi_tab'),
        i = d(t, !1),
        {
            enabled: a,
            tabBadgeVariant: s,
            removeHomeMentionBadges: l
        } = c.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: !0
            }
        );
    return {
        enabled: a && !r && i,
        tabBadgeVariant: s,
        removeHomeMentionBadges: l
    };
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return l.getCurrentConfig(
        { location: e },
        {
            disable: !0,
            autoTrackExposure: t
        }
    ).enabled;
}
(0, a.B)({
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
    });
class f extends i.Z {
    _initialize() {
        r.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    handleConnectionOpen() {
        d('SearchExperimentManager', !1);
    }
}
new f();
