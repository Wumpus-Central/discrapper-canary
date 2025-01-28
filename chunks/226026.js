t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(990547),
    l = t(442837),
    a = t(213609),
    o = t(541099),
    r = t(312871);
function s(e) {
    let { applicationId: n, sectionName: t, sectionPosition: s, sectionOverallPosition: c } = e,
        d = (0, l.e7)([o.Z], () => o.Z.entrypoint());
    return {
        trackItemImpressionRef: (0, r.Z)({
            onVisible: () => {
                (0, a.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                    properties: {
                        application_id: n,
                        section_name: t,
                        section_position: s,
                        section_overall_position: c,
                        source: d
                    }
                });
            },
            threshold: 0.5,
            minTimeVisibleMs: 1000
        })
    };
}
