n.d(t, { default: () => r });
var l = n(200651),
    a = n(373230),
    i = n(885290),
    s = n(28130);
function r(e) {
    let { modalSubTitle: t, ...n } = e,
        { enabled: r } = a.i3.useExperiment({ location: 'SelectImageModalExperimentWrapper' }, { autoTrackExposure: !1 });
    return r
        ? (0, l.jsx)(i.Z, { ...n })
        : (0, l.jsx)(s.Z, {
              ...n,
              modalSubTitle: t
          });
}
