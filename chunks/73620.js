n.d(t, { default: () => l });
var i = n(200651),
    o = n(373230),
    r = n(850085),
    a = n(712451);
function l(e) {
    let { allowSkip: t, ...n } = e,
        { enabled: l } = o.i3.useExperiment({ location: 'ImageEditingModalExperimentWrapper' }, { autoTrackExposure: !1 });
    return l
        ? (0, i.jsx)(a.default, { ...n })
        : (0, i.jsx)(r.default, {
              ...n,
              allowSkip: t
          });
}
