n.d(t, { R: () => r });
var a = n(818083),
    l = n(751823);
let i = (0, a.B)({
    kind: "user",
    id: "2025-07_animated_faces",
    label: "AV survey animated faces",
    defaultConfig: { surveyEmojiKind: "face" },
    treatments: [
        {
            id: 1,
            label: "Show animated faces in AV survey",
            config: { surveyEmojiKind: "animated-face" },
        },
    ],
});
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: a } = l.L.useExperiment({ location: t }, { autoTrackExposure: n });
    return i.useExperiment(
        { location: t },
        {
            disable: a,
            autoTrackExposure: n,
        },
    );
}
