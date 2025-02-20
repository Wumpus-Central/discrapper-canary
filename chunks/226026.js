n.d(t, { Z: () => s });
var i = n(990547),
    l = n(442837),
    r = n(213609),
    o = n(541099),
    a = n(312871);
function s(e) {
    let { applicationId: t, applicationFlags: n, sectionName: s, sectionPosition: c, sectionOverallPosition: u } = e,
        d = (0, l.e7)([o.Z], () => o.Z.entrypoint());
    return {
        trackItemImpressionRef: (0, a.Z)({
            onVisible: () => {
                (0, r.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                    properties: {
                        application_id: t,
                        application_flags: n,
                        section_name: s,
                        section_position: c,
                        section_overall_position: u,
                        source: d
                    }
                });
            },
            threshold: 0.5,
            minTimeVisibleMs: 1000
        })
    };
}
