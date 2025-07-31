n.d(t, { R: () => o });
var r = n(818083),
    l = n(751823);
let i = (0, r.B)({
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
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = l.L.useExperiment({ location: t }, { autoTrackExposure: n });
    return i.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
