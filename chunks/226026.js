n.d(t, { Z: () => s });
var i = n(73800),
    l = n(990547),
    r = n(442837),
    o = n(213609),
    a = n(541099),
    c = n(312871);
function s(e) {
    let { applicationId: t, applicationFlags: n, sectionName: s, sectionPosition: u, sectionOverallPosition: d, promotionalLabel: p, numFriendsWhoPlay: m } = e,
        f = (0, r.e7)([a.Z], () => a.Z.entrypoint()),
        h = i.useCallback(() => {
            (0, o.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: s,
                    section_position: u,
                    section_overall_position: d,
                    source: f,
                    promotional_label: p,
                    num_friends_who_play: m
                }
            });
        }, [m]);
    return {
        trackItemImpressionRef: (0, c.Z)({
            onVisible: h,
            threshold: 0.5,
            minTimeVisibleMs: 1000
        })
    };
}
