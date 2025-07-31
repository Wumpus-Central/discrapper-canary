n.d(t, { R: () => l });
var o = n(818083),
    r = n(751823);
let i = (0, o.B)({
    kind: 'user',
    id: '2025-07_animated_faces',
    label: 'AV survey animated faces',
    defaultConfig: { surveyEmojiKind: 'face' },
    treatments: [
        {
            id: 1,
            label: 'Show animated faces in AV survey',
            config: { surveyEmojiKind: 'animated-face' }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: o } = r.L.useExperiment({ location: t }, { autoTrackExposure: n });
    return i.useExperiment(
        { location: t },
        {
            disable: o,
            autoTrackExposure: n
        }
    );
}
