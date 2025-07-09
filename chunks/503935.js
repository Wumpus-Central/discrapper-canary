n.d(t, { m: () => l });
var o = n(818083),
    i = n(984134);
let r = (0, o.B)({
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
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: o } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return r.useExperiment(
        { location: t },
        {
            disable: o,
            autoTrackExposure: n
        }
    );
}
