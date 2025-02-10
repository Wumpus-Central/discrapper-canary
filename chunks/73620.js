i.d(t, { default: () => l });
var n = i(200651),
    o = i(373230),
    r = i(850085),
    a = i(712451);
function l(e) {
    let { allowSkip: t, ...i } = e,
        { enabled: l } = o.i3.useExperiment({ location: 'ImageEditingModalExperimentWrapper' }, { autoTrackExposure: !1 });
    return l
        ? (0, n.jsx)(a.default, { ...i })
        : (0, n.jsx)(r.default, {
              ...i,
              allowSkip: t
          });
}
