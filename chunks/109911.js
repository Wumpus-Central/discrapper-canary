n.d(t, {
    Ji: () => c,
    XN: () => u
});
var i = n(818083),
    r = n(638395);
n(171393);
var a = n(987338);
let s = (0, i.B)({
        kind: 'user',
        id: '2024-07_icymi',
        label: 'In-case-you-missed-it tab',
        commonTriggerPoint: a.$P.CONNECTION_OPEN_MOBILE,
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
    o = (0, i.B)({
        kind: 'user',
        id: '2024-10_icymi_sorting_fe',
        label: 'FE experiment for sorting on ICYMI',
        commonTriggerPoint: a.$P.CONNECTION_OPEN_MOBILE,
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables ICYMI - (heuristic) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 2,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 3,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 4,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 5,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 6,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 7,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            },
            {
                id: 8,
                label: 'Enables ICYMI - (ml) sorting will be controlled by backend exp',
                config: { enabled: !0 }
            }
        ]
    }),
    l =
        ((0, i.B)({
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
        (0, i.B)({
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
        i = r.Z.get('hide_icymi_tab'),
        a = c(t, !1),
        {
            enabled: s,
            tabBadgeVariant: o,
            removeHomeMentionBadges: u
        } = l.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: !0
            }
        );
    return {
        enabled: s && !i && a,
        tabBadgeVariant: o,
        removeHomeMentionBadges: u
    };
}
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = s.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled,
        i = o.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled;
    return n || i;
}
(0, i.B)({
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
