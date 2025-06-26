n.d(t, { Z: () => c });
var l = n(73800),
    i = n(990547),
    r = n(442837),
    a = n(213609),
    o = n(541099),
    s = n(312871);
function c(e) {
    let { applicationId: t, applicationFlags: n, sectionName: c, sectionPosition: u, sectionOverallPosition: d, promotionalLabel: p, numFriendsWhoPlay: m } = e,
        f = (0, r.e7)([o.Z], () => o.Z.entrypoint()),
        h = l.useCallback(() => {
            (0, a.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: c,
                    section_position: u,
                    section_overall_position: d,
                    source: f,
                    promotional_label: p,
                    num_friends_who_play: m
                }
            });
        }, [m]);
    return {
        trackItemImpressionRef: (0, s.Z)({
            onVisible: h,
            threshold: 0.5,
            minTimeVisibleMs: 1000
        })
    };
}
