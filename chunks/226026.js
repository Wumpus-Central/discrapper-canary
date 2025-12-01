n.d(t, { Z: () => u });
var r = n(473749),
    i = n(990547),
    a = n(442837),
    o = n(213609),
    s = n(541099),
    l = n(312871);
let c = 1000;
function u(e) {
    let {
            applicationId: t,
            applicationFlags: n,
            sectionName: u,
            sectionPosition: d,
            sectionOverallPosition: f,
            promotionalLabel: p,
            numFriendsWhoPlay: _,
        } = e,
        m = (0, a.e7)([s.Z], () => s.Z.entrypoint()),
        h = r.useCallback(() => {
            (0, o.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: u,
                    section_position: d,
                    section_overall_position: f,
                    source: m,
                    promotional_label: p,
                    num_friends_who_play: _,
                },
            });
        }, [_]),
        g = 0.5;
    return {
        trackItemImpressionRef: (0, l.Z)({
            onVisible: h,
            threshold: g,
            minTimeVisibleMs: c,
        }),
    };
}
