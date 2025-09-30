n.d(t, {
    b0: () => u,
    tL: () => l,
});
var r = n(818083),
    i = n(427164),
    a = n(389147),
    o = n(60902),
    s = n(987338);
let l = (0, r.B)({
        kind: "user",
        id: "2025-07_cloud_play_cta",
        commonTriggerPoint: s.$P.CONNECTION_OPEN,
        label: "Cloud Play CTA Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enable Cloud Play CTA",
                config: { enabled: !0 },
            },
        ],
    }),
    c = (0, i.le)({
        name: "2025-09-fortnite-cloud-play-activity-cta",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function u(e) {
    let { enabled: t } = c.useConfig({ location: "useIsCloudPlayActivityCTAEnabled" }),
        { data: n } = (0, o.K)(a.B);
    return t && null != n && null != e && n.isFortniteActivity(e);
}
