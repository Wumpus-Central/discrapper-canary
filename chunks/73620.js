n.d(t, { default: () => l });
var i = n(200651),
    a = n(373230),
    o = n(850085),
    r = n(712451);
function l(e) {
    let { allowSkip: t, ...n } = e,
        { enabled: l } = a.i3.useExperiment({ location: 'ImageEditingModalExperimentWrapper' }, { autoTrackExposure: !1 });
    return l
        ? (0, i.jsx)(r.default, { ...n })
        : (0, i.jsx)(o.default, {
              ...n,
              allowSkip: t
          });
}
