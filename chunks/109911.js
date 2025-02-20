n.d(t, {
    Ji: () => c,
    XN: () => l
});
var r = n(818083),
    i = n(638395);
n(171393);
var o = n(987338);
let a = (0, r.B)({
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
    }),
    s =
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
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = i.Z.get('hide_icymi_tab'),
        o = c(t, !1),
        {
            enabled: a,
            tabBadgeVariant: l,
            removeHomeMentionBadges: u
        } = s.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: !0
            }
        );
    return {
        enabled: a && !r && o,
        tabBadgeVariant: l,
        removeHomeMentionBadges: u
    };
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a.getCurrentConfig(
        { location: e },
        {
            disable: !0,
            autoTrackExposure: t
        }
    ).enabled;
}
(0, r.B)({
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
});
