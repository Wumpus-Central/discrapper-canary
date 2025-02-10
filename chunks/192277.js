n.d(l, { default: () => o });
var i = n(200651),
    t = n(373230),
    s = n(885290),
    a = n(28130);
function o(e) {
    let { modalSubTitle: l, ...n } = e,
        { enabled: o } = t.i3.useExperiment({ location: 'SelectImageModalExperimentWrapper' }, { autoTrackExposure: !1 });
    return o
        ? (0, i.jsx)(s.Z, { ...n })
        : (0, i.jsx)(a.Z, {
              ...n,
              modalSubTitle: l
          });
}
