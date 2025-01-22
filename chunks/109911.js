r.d(n, {
    Ji: function () {
        return h;
    },
    XN: function () {
        return f;
    }
});
var i,
    a = r(818083),
    o = r(638395);
r(171393);
var s = r(987338);
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
    u = (0, a.B)({
        kind: 'user',
        id: '2024-10_icymi_sorting_fe',
        label: 'FE experiment for sorting on ICYMI',
        commonTriggerPoint: s.$P.CONNECTION_OPEN_MOBILE,
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
    c = (0, a.B)({
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
    });
!(function (e) {
    (e[(e.NO_BADGE = 1)] = 'NO_BADGE'), (e[(e.RED_BADGE = 2)] = 'RED_BADGE'), (e[(e.BLUE_BADGE = 3)] = 'BLUE_BADGE');
})(i || (i = {}));
let d = (0, a.B)({
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
});
function f(e) {
    let { location: n, autoTrackExposure: r = !0 } = e,
        i = o.Z.get('hide_icymi_tab'),
        a = h(n, !1),
        {
            enabled: s,
            tabBadgeVariant: l,
            removeHomeMentionBadges: u
        } = d.getCurrentConfig(
            { location: n },
            {
                autoTrackExposure: r,
                disable: !0
            }
        );
    return {
        enabled: s && !i && a,
        tabBadgeVariant: l,
        removeHomeMentionBadges: u
    };
}
function p(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = l.useExperiment(
            { location: e },
            {
                autoTrackExposure: n,
                disable: !0
            }
        ),
        i = u.useExperiment(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: !0
            }
        );
    return r.enabled || i.enabled;
}
function h(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = l.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: n
            }
        ).enabled,
        i = u.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: n
            }
        ).enabled;
    return r || i;
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
});
