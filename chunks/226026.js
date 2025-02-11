n.d(t, { Z: () => r });
var i = n(990547),
    l = n(442837),
    a = n(213609),
    o = n(541099),
    s = n(312871);
function r(e) {
    let { applicationId: t, applicationFlags: n, sectionName: r, sectionPosition: c, sectionOverallPosition: d } = e,
        u = (0, l.e7)([o.Z], () => o.Z.entrypoint());
    return {
        trackItemImpressionRef: (0, s.Z)({
            onVisible: () => {
                (0, a.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                    properties: {
                        application_id: t,
                        application_flags: n,
                        section_name: r,
                        section_position: c,
                        section_overall_position: d,
                        source: u
                    }
                });
            },
            threshold: 0.5,
            minTimeVisibleMs: 1000
        })
    };
}
