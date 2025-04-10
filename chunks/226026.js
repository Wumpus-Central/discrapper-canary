n.d(t, { Z: () => s });
var i = n(990547),
    r = n(442837),
    l = n(213609),
    a = n(541099),
    o = n(312871);
function s(e) {
    let { applicationId: t, applicationFlags: n, sectionName: s, sectionPosition: c, sectionOverallPosition: u } = e,
        d = (0, r.e7)([a.Z], () => a.Z.entrypoint());
    return {
        trackItemImpressionRef: (0, o.Z)({
            onVisible: () => {
                (0, l.h)({
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
