o.d(t, { m: () => l });
var n = o(818083),
    r = o(984134);
let i = (0, n.B)({
    kind: 'user',
    id: '2025-05_av_survey_taxonomy_refresh',
    label: 'AV survey taxonomy refresh',
    defaultConfig: { showRefreshedTaxonomy: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show refreshed taxonomy',
            config: { showRefreshedTaxonomy: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: o = !0 } = e,
        { isInHoldout: n } = r.h.useExperiment({ location: t }, { autoTrackExposure: o });
    return i.useExperiment(
        { location: t },
        {
            disable: n,
            autoTrackExposure: o
        }
    );
}
