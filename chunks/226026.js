n.d(t, { Z: () => u });
var r = n(73800),
    i = n(990547),
    o = n(442837),
    a = n(213609),
    s = n(541099),
    l = n(312871);
let c = 1000;
function u(e) {
    let { applicationId: t, applicationFlags: n, sectionName: u, sectionPosition: d, sectionOverallPosition: f, promotionalLabel: _, numFriendsWhoPlay: p } = e,
        h = (0, o.e7)([s.Z], () => s.Z.entrypoint()),
        m = r.useCallback(() => {
            (0, a.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: u,
                    section_position: d,
                    section_overall_position: f,
                    source: h,
                    promotional_label: _,
                    num_friends_who_play: p
                }
            });
        }, [p]),
        g = 0.5;
    return {
        trackItemImpressionRef: (0, l.Z)({
            onVisible: m,
            threshold: g,
            minTimeVisibleMs: c
        })
    };
}
