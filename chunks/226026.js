n.d(t, { Z: () => c });
var i = n(73800),
    r = n(990547),
    l = n(442837),
    o = n(213609),
    a = n(541099),
    s = n(312871);
function c(e) {
    let { applicationId: t, applicationFlags: n, sectionName: c, sectionPosition: u, sectionOverallPosition: d, promotionalLabel: p, numFriendsWhoPlay: m } = e,
        f = (0, l.e7)([a.Z], () => a.Z.entrypoint()),
        h = i.useCallback(() => {
            (0, o.h)({
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.APP_LAUNCHER_ITEM,
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
