async function n(e) {
    let a = window,
        n = a.Module;
    a.Module = void 0;
    try {
        let a = await t(395518)(e.mediapipeModulePath),
            n = await a.FilesetResolver.forVisionTasks(e.mediapipeWasmPath);
        return await a.FaceLandmarker.createFromOptions(n, {
            baseOptions: { modelAssetPath: e.faceLandmarkerModelPath, delegate: "CPU" },
            runningMode: "VIDEO",
            numFaces: 1,
            outputFaceBlendshapes: !0,
            outputFacialTransformationMatrixes: !1,
        });
    } finally {
        a.Module = n;
    }
}
function i(e) {
    return "function" == typeof e.requestVideoFrameCallback && "function" == typeof e.cancelVideoFrameCallback
        ? e
        : null;
}
t.d(a, { i: () => r, n: () => i, r: () => n });
let o = 1e3 / 30;
function r(e, a) {
    return e <= 0 ? 0 : e >= 1 ? 1 : 1 - Math.exp(-a / (-o / Math.log(1 - e)));
}
