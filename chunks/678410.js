let n = 1e3 / 30;
t.d(
    a,
    {},
    {
        i: function (e, a) {
            return e <= 0 ? 0 : e >= 1 ? 1 : 1 - Math.exp(-a / (-n / Math.log(1 - e)));
        },
        n: function (e) {
            return "function" == typeof e.requestVideoFrameCallback && "function" == typeof e.cancelVideoFrameCallback
                ? e
                : null;
        },
        r: async function (e) {
            let a = window,
                n = a.Module;
            a.Module = void 0;
            try {
                let a = await t(629336)(e.mediapipeModulePath),
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
        },
    },
);
