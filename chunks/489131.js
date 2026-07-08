i.d(t, { a: () => d, i: () => u, n: () => c, r: () => l, t: () => p });
var r = i(209688),
    n = i(64755),
    o = i(389777),
    a = i(161370),
    s = i(840237);
let l = (e) => !0 === e.onDeviceFaceResultsSubmissionEnabled;
async function c(e) {
    let t = (0, r.r)(),
        i = (await e.recordingService?.stop())?.recordingId ?? null;
    try {
        e.deepsightService &&
            (await Promise.all([
                e.deepsightService.performVirtualCameraCheck(t, "SELFIE"),
                e.deepsightService.analyzeFrame(e.capturedImage.getImageData()),
            ]));
    } catch (e) {}
    let n = e.deepsightService?.getPipelineState() ?? "";
    return (
        e.dependencies.trackCaptureAttemptFinished?.({ logs: n }),
        {
            encryptedBase64Image: await (0, a.o)({ canvas: e.capturedImage, dependencies: e.dependencies }),
            recordingId: i,
        }
    );
}
async function d(e) {
    if (!e.capturedImage) throw Error("On-device capture requires a captured image canvas");
    if (!e.provider) throw Error("On-device capture requires the FaceDetectionProvider to be initialized");
    return (
        e.manualCaptureTriggered &&
            (await new Promise((e) => {
                let t = !1,
                    i = () => {
                        t || ((t = !0), e());
                    };
                "function" == typeof requestAnimationFrame &&
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setTimeout(i, 0);
                        });
                    }),
                    setTimeout(i, 100);
            }),
            await (0, o.t)(350),
            e.provider.processPhoto(e.capturedImage.canvas)),
        { encryptedBase64Image: "", recordingId: null }
    );
}
async function u(e, t) {
    let i = e.provider;
    if (!i) throw Error("On-device upload requires the FaceDetectionProvider to be initialized");
    let n = (0, r.r)();
    return (await i.postFaceResults({ headers: n ? { "X-Incode-Hardware-Id": n } : void 0, timeout: 3e4 })) ?? {};
}
let h = (e) => e.captureAttempts ?? e.numberOfAttempts ?? 3,
    p = (0, n.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            checkPermission: (0, n.a)(async () => (0, s.t)()),
            requestPermission: (0, n.a)(async ({ input: e }) => (0, s.n)({ requestMotion: e.requestMotionPermission })),
            initializeCamera: (0, n.a)(async ({ input: e }) =>
                (0, a.s)({ config: e.config, deepsightService: e.deepsightService }),
            ),
            runDetection: (0, n.i)(({ input: e, sendBack: t }) => {
                if (!e.frameCapturer || !e.provider) return t({ type: "DETECTION_UPDATE", status: "error" }), () => {};
                if (e.manualCaptureTriggered) return t({ type: "DETECTION_UPDATE", status: "manualCapture" }), () => {};
                let { cleanup: i, reset: r } = (0, a.u)({
                    config: e.config,
                    capturer: e.frameCapturer,
                    onUpdate: (e) => t({ type: "DETECTION_UPDATE", status: e }),
                    onFrame: (e) => t({ type: "DETECTION_FRAME", frame: e }),
                    onSuccess: (e, i) => t({ type: "DETECTION_SUCCESS", canvas: e, faceCoordinates: i }),
                    provider: e.provider,
                });
                return t({ type: "DETECTION_RESET_READY", reset: r }), i;
            }),
            initializeDeepsightSession: (0, n.a)(
                async ({ input: e }) => await (0, a.c)({ ds: e.ds, storage: e.storage }),
            ),
            startRecording: (0, n.a)(async ({ input: e }) => {
                if (!e.stream) return e.recordingService;
                let t = await e.dependencies.getWasmUtil(),
                    i = (0, r.r)(),
                    n = e.recordingService ?? (0, a.t)({ config: e.config, wasmUtil: t, sessionToken: i });
                return n && (await n.start(e.stream)), n;
            }),
            checkVirtualCamera: (0, n.a)(async ({ input: e }) => {
                if (!e.deepsightService || !e.stream) return !1;
                let t = e.stream.getVideoTracks()[0];
                return !!t && e.deepsightService.checkVirtualCamera(t);
            }),
            prepareFaceUpload: (0, n.a)(async () => {
                throw Error("prepareFaceUpload must be provided by variant");
            }),
            uploadFace: (0, n.a)(async () => {
                throw Error("uploadFace must be provided by variant");
            }),
            processFace: (0, n.a)(async () => {
                throw Error("processFace must be provided by variant");
            }),
        },
        actions: {
            stopMediaStream: (0, n.r)(
                ({ context: e }) => (
                    e.frameCapturer?.dispose(),
                    e.stream && (0, a.d)(e.stream),
                    e.provider?.dispose(),
                    { stream: void 0, provider: void 0, frameCapturer: void 0 }
                ),
            ),
            setStreamAndCapturer: (0, n.r)({
                stream: ({ event: e }) => {
                    if ("output" in e) return e.output.stream;
                },
                provider: ({ event: e }) => {
                    if ("output" in e) return e.output.provider;
                },
                frameCapturer: ({ event: e }) => {
                    if ("output" in e) return new a.a(e.output.stream);
                },
            }),
            trackTutorial: () => void 0,
            trackContinue: () => {},
            resetContext: (0, n.r)(({ context: e }) => ({
                stream: void 0,
                provider: void 0,
                frameCapturer: void 0,
                error: void 0,
                detectionStatus: "idle",
                debugFrame: void 0,
                capturedImage: void 0,
                faceCoordinates: void 0,
                uploadResponse: void 0,
                processResponse: void 0,
                recordingService: void 0,
                attemptsRemaining: h(e.config),
                uploadError: void 0,
                permissionResult: void 0,
                resetDetection: void 0,
                deepsightService: void 0,
                manualCaptureTriggered: !1,
                captureOnlyResult: void 0,
            })),
            resetDetection: ({ context: e }) => {
                e.resetDetection?.();
            },
            captureImage: (0, n.r)({
                capturedImage: ({ context: e }) =>
                    e.capturedImage ? e.capturedImage : (e.frameCapturer?.getLatestCanvas() ?? void 0),
            }),
            captureLatestFrame: (0, n.r)({
                capturedImage: ({ context: e }) => e.frameCapturer?.getLatestCanvas() ?? void 0,
            }),
            clearUploadFailure: (0, n.r)({
                uploadError: () => void 0,
                detectionStatus: () => "idle",
                capturedImage: () => void 0,
            }),
            clearStreamForRetry: (0, n.r)(
                ({ context: e }) => (
                    e.frameCapturer?.dispose(),
                    e.stream && (0, a.d)(e.stream),
                    e.provider?.dispose(),
                    { stream: void 0, provider: void 0, frameCapturer: void 0 }
                ),
            ),
            decrementAttemptsRemaining: (0, n.r)(({ context: e }) => ({ attemptsRemaining: e.attemptsRemaining - 1 })),
            setUploadErrorFromUploadValidation: (0, n.r)({ uploadError: () => a.m.SERVER }),
            setTerminalError: (0, n.r)({ error: () => "Authentication failed" }),
            clearRecordingService: (0, n.r)({ recordingService: () => void 0 }),
            cleanup: ({ context: e }) => {
                e.deepsightService?.cleanup(), e.recordingService?.cleanup();
            },
            setPermissionResultFromEvent: (0, n.r)({ permissionResult: ({ event: e }) => e.output }),
            setPermissionDenied: (0, n.r)({ permissionResult: () => "denied" }),
            setPermissionRefresh: (0, n.r)({ permissionResult: () => "refresh" }),
            setDeepsightServiceFromEvent: (0, n.r)({ deepsightService: ({ event: e }) => e.output }),
            setErrorFromEvent: (0, n.r)({ error: ({ event: e }) => String(e.error) }),
            setDetectionStatusDetecting: (0, n.r)({
                detectionStatus: ({ context: e }) => (e.manualCaptureTriggered ? "manualCapture" : "detecting"),
            }),
            setRecordingServiceFromEvent: (0, n.r)({
                recordingService: ({ context: e, event: t }) => t.output ?? e.recordingService,
            }),
            setDetectionStatusFromEvent: (0, n.r)({ detectionStatus: ({ event: e }) => e.status }),
            setManualCaptureTriggered: (0, n.r)({
                manualCaptureTriggered: ({ context: e, event: t }) => {
                    let i = t.status;
                    return e.manualCaptureTriggered || "manualCapture" === i;
                },
            }),
            setDebugFrameFromEvent: (0, n.r)({ debugFrame: ({ event: e }) => e.frame }),
            setResetDetectionFromEvent: (0, n.r)({ resetDetection: ({ event: e }) => e.reset }),
            setCapturedImageFromEvent: (0, n.r)({
                capturedImage: ({ event: e }) => e.canvas,
                faceCoordinates: ({ event: e }) => e.faceCoordinates,
            }),
            setUploadPreparationFromEvent: (0, n.r)({
                encryptedBase64Image: ({ event: e }) => e.output.encryptedBase64Image,
                uploadRecordingId: ({ event: e }) => e.output.recordingId,
            }),
            setUploadResponseFromEvent: (0, n.r)({ uploadResponse: ({ event: e }) => e.output }),
            setProcessResponseFromEvent: (0, n.r)({ processResponse: ({ event: e }) => e.output }),
            setServerErrorAndDecrement: (0, n.r)(({ context: e }) => ({
                uploadError: a.m.SERVER,
                attemptsRemaining: e.attemptsRemaining - 1,
            })),
            sendLabelInspection: () => {
                (0, a.l)();
            },
            flagFaceManualReview: () => {
                (0, a.r)();
            },
            preloadRecordingProvider: ({ context: e }) => {
                !0 === e.config.enableFaceRecording && "VIDEOLIVENESS" !== e.config.deepsightLiveness && (0, a.n)();
            },
            noOp: () => void 0,
        },
        guards: {
            hasShowTutorial: ({ context: e }) => e.config.showTutorial,
            isPermissionGranted: ({ event: e }) => "output" in e && "granted" === e.output,
            isPermissionDeniedError: ({ event: e }) => {
                if ("error" in e) {
                    let t = e.error;
                    return t?.name === "NotAllowedError" || t?.name === "PermissionDeniedError";
                }
                return !1;
            },
            hasStream: ({ context: e }) => void 0 !== e.stream,
            isCameraAndDeepsightReady: ({ context: e }) => void 0 !== e.stream && void 0 !== e.deepsightService,
            hasAttemptsRemaining: ({ context: e }) => e.attemptsRemaining > 0,
            hasCapturedImage: ({ context: e }) => void 0 !== e.capturedImage,
            hasUploadValidationError: () => !1,
            isTerminalUploadError: () => !1,
            isNoAttemptsTerminal: () => !1,
        },
    }).createMachine({
        id: "faceCapture",
        initial: "idle",
        context: ({ input: e }) => ({
            config: e.config,
            dependencies: e.dependencies,
            authHint: e.authHint,
            stream: void 0,
            provider: void 0,
            frameCapturer: void 0,
            error: void 0,
            detectionStatus: "idle",
            debugFrame: void 0,
            capturedImage: void 0,
            faceCoordinates: void 0,
            uploadResponse: void 0,
            processResponse: void 0,
            recordingService: void 0,
            attemptsRemaining: h(e.config),
            uploadError: void 0,
            permissionResult: void 0,
            resetDetection: void 0,
            deepsightService: void 0,
            encryptedBase64Image: void 0,
            uploadRecordingId: void 0,
            manualCaptureTriggered: !1,
            captureOnlyResult: void 0,
        }),
        on: { QUIT: { target: "#faceCapture.closed" } },
        states: {
            idle: { on: { LOAD: [{ target: "tutorial", guard: "hasShowTutorial" }, { target: "loading" }] } },
            loading: {
                entry: "preloadRecordingProvider",
                invoke: [
                    {
                        id: "checkPermissionLoading",
                        src: "checkPermission",
                        onDone: [
                            {
                                target: "capture",
                                guard: "isPermissionGranted",
                                actions: "setPermissionResultFromEvent",
                            },
                            { target: "permissions", actions: "setPermissionResultFromEvent" },
                        ],
                    },
                    {
                        id: "loadingInitDeepsight",
                        src: "initializeDeepsightSession",
                        input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                        onDone: { actions: "setDeepsightServiceFromEvent" },
                        onError: { actions: "noOp" },
                    },
                ],
            },
            tutorial: {
                initial: "checkingPermission",
                entry: ["trackTutorial", "preloadRecordingProvider"],
                states: {
                    checkingPermission: {
                        invoke: {
                            id: "checkPermissionTutorial",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "initializingCamera",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "ready", actions: "setPermissionResultFromEvent" },
                            ],
                        },
                    },
                    initializingCamera: {
                        type: "parallel",
                        states: {
                            cameraInit: {
                                initial: "initializingDeepsight",
                                states: {
                                    initializingDeepsight: {
                                        invoke: {
                                            id: "tutorialInitDeepsight",
                                            src: "initializeDeepsightSession",
                                            input: ({ context: e }) => ({
                                                ds: e.config.ds,
                                                storage: e.dependencies.storage,
                                            }),
                                            onDone: {
                                                target: "initializingStream",
                                                actions: "setDeepsightServiceFromEvent",
                                            },
                                            onError: { target: "#faceCapture.tutorial.ready" },
                                        },
                                    },
                                    initializingStream: {
                                        invoke: {
                                            id: "tutorialInitCamera",
                                            src: "initializeCamera",
                                            input: ({ context: e }) => ({
                                                config: e.config,
                                                dependencies: e.dependencies,
                                                deepsightService: e.deepsightService,
                                            }),
                                            onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                            onError: [
                                                {
                                                    target: "#faceCapture.tutorial.ready",
                                                    guard: "isPermissionDeniedError",
                                                    actions: "setPermissionDenied",
                                                },
                                                { target: "#faceCapture.tutorial.ready", actions: "setErrorFromEvent" },
                                            ],
                                        },
                                    },
                                    ready: { type: "final" },
                                },
                            },
                            userIntent: {
                                initial: "waiting",
                                states: {
                                    waiting: { on: { NEXT_STEP: { target: "clicked", actions: "trackContinue" } } },
                                    clicked: { type: "final" },
                                },
                            },
                        },
                        onDone: { target: "#faceCapture.capture" },
                    },
                    ready: {
                        initial: "idle",
                        states: {
                            idle: {
                                always: [
                                    {
                                        target: "initializingDeepsight",
                                        guard: ({ context: e }) => void 0 === e.deepsightService,
                                    },
                                    { target: "readyForNext" },
                                ],
                            },
                            initializingDeepsight: {
                                invoke: {
                                    id: "initializeDeepsightTutorial",
                                    src: "initializeDeepsightSession",
                                    input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                                    onDone: { target: "readyForNext", actions: "setDeepsightServiceFromEvent" },
                                    onError: { target: "readyForNext" },
                                },
                            },
                            readyForNext: {
                                on: {
                                    NEXT_STEP: {
                                        target: "#faceCapture.tutorial.waitingForPermission",
                                        actions: "trackContinue",
                                    },
                                },
                            },
                        },
                    },
                    waitingForPermission: {
                        invoke: {
                            id: "checkPermissionWaiting",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "#faceCapture.permissions", actions: "setPermissionResultFromEvent" },
                            ],
                        },
                    },
                },
            },
            permissions: {
                entry: "preloadRecordingProvider",
                initial: "checkingDeepsight",
                states: {
                    checkingDeepsight: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: e }) => void 0 === e.deepsightService,
                            },
                            { target: "idle" },
                        ],
                    },
                    initializingDeepsight: {
                        invoke: {
                            id: "initializeDeepsightPerms",
                            src: "initializeDeepsightSession",
                            input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                            onDone: { target: "idle", actions: "setDeepsightServiceFromEvent" },
                            onError: { target: "idle" },
                        },
                    },
                    idle: {
                        invoke: {
                            id: "checkPermissionIdle",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: e }) => "denied" === e.output,
                                    actions: "setPermissionResultFromEvent",
                                },
                            ],
                        },
                        on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" },
                    },
                    learnMore: { on: { BACK: "idle", REQUEST_PERMISSION: "requesting" } },
                    requesting: {
                        invoke: {
                            id: "requestPermission",
                            src: "requestPermission",
                            input: ({ context: e }) => ({ requestMotionPermission: !0 === e.config.ds }),
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isPermissionGranted",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: e }) => "denied" === e.output,
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "idle", actions: "setPermissionResultFromEvent" },
                            ],
                            onError: { target: "denied" },
                        },
                    },
                    denied: { entry: "setPermissionRefresh" },
                },
            },
            capture: {
                entry: "preloadRecordingProvider",
                initial: "checkingDeepsight",
                exit: ["stopMediaStream", "cleanup", "clearRecordingService"],
                states: {
                    checkingDeepsight: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: e }) => void 0 === e.deepsightService,
                            },
                            { target: "checkingStream" },
                        ],
                    },
                    initializingDeepsight: {
                        invoke: {
                            id: "initializeDeepsightCapture",
                            src: "initializeDeepsightSession",
                            input: ({ context: e }) => ({ ds: e.config.ds, storage: e.dependencies.storage }),
                            onDone: { target: "checkingStream", actions: ["setDeepsightServiceFromEvent"] },
                            onError: { target: "#faceCapture.permissions" },
                        },
                    },
                    checkingStream: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: e }) => void 0 === e.deepsightService,
                            },
                            { target: "detecting", guard: "hasStream" },
                            { target: "initializing" },
                        ],
                    },
                    initializing: {
                        invoke: {
                            id: "initializeCamera",
                            src: "initializeCamera",
                            input: ({ context: e }) => ({
                                config: e.config,
                                dependencies: e.dependencies,
                                deepsightService: e.deepsightService,
                            }),
                            onDone: { target: "detecting", actions: ["setStreamAndCapturer"] },
                            onError: [
                                {
                                    target: "#faceCapture.permissions",
                                    guard: "isPermissionDeniedError",
                                    actions: "setPermissionDenied",
                                },
                                { target: "#faceCapture.error", actions: "setErrorFromEvent" },
                            ],
                        },
                    },
                    detecting: {
                        entry: ["setDetectionStatusDetecting"],
                        invoke: [
                            {
                                id: "checkVirtualCamera",
                                src: "checkVirtualCamera",
                                input: ({ context: e }) => ({ stream: e.stream, deepsightService: e.deepsightService }),
                                onDone: [
                                    {
                                        target: "#faceCapture.processing",
                                        guard: ({ event: e }) => !0 === e.output,
                                        actions: "sendLabelInspection",
                                    },
                                ],
                                onError: { actions: "noOp" },
                            },
                            {
                                id: "startRecording",
                                src: "startRecording",
                                input: ({ context: e }) => ({
                                    config: e.config,
                                    dependencies: e.dependencies,
                                    recordingService: e.recordingService,
                                    stream: e.stream,
                                }),
                                onDone: { actions: "setRecordingServiceFromEvent" },
                                onError: { actions: "noOp" },
                            },
                            {
                                id: "runDetection",
                                src: "runDetection",
                                input: ({ context: e }) => ({
                                    frameCapturer: e.frameCapturer,
                                    provider: e.provider,
                                    config: e.config,
                                    manualCaptureTriggered: e.manualCaptureTriggered,
                                }),
                            },
                        ],
                        on: {
                            DETECTION_UPDATE: { actions: ["setDetectionStatusFromEvent", "setManualCaptureTriggered"] },
                            DETECTION_FRAME: { actions: "setDebugFrameFromEvent" },
                            DETECTION_RESET_READY: { actions: "setResetDetectionFromEvent" },
                            DETECTION_SUCCESS: { target: "capturing", actions: "setCapturedImageFromEvent" },
                            MANUAL_CAPTURE: { target: "capturingManual" },
                        },
                    },
                    capturing: {
                        entry: ["captureImage"],
                        always: [
                            { target: "preparingUpload", guard: "hasCapturedImage" },
                            { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        ],
                    },
                    capturingManual: {
                        entry: ["captureLatestFrame"],
                        always: [
                            { target: "preparingUpload", guard: "hasCapturedImage" },
                            { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        ],
                    },
                    preparingUpload: {
                        invoke: {
                            id: "prepareFaceUpload",
                            src: "prepareFaceUpload",
                            input: ({ context: e }) => e,
                            onDone: { target: "uploading", actions: "setUploadPreparationFromEvent" },
                            onError: { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        },
                    },
                    uploading: {
                        invoke: {
                            id: "uploadFace",
                            src: "uploadFace",
                            input: ({ context: e }) => e,
                            onDone: { target: "validatingUpload", actions: "setUploadResponseFromEvent" },
                            onError: { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        },
                    },
                    validatingUpload: {
                        always: [
                            {
                                target: "#faceCapture.error",
                                guard: "isTerminalUploadError",
                                actions: "setTerminalError",
                            },
                            {
                                target: "uploadError",
                                guard: "hasUploadValidationError",
                                actions: ["setUploadErrorFromUploadValidation", "decrementAttemptsRemaining"],
                            },
                            { target: "success" },
                        ],
                    },
                    uploadError: {
                        on: {
                            RETRY_CAPTURE: [
                                {
                                    target: "checkingStream",
                                    guard: "hasAttemptsRemaining",
                                    actions: ["resetDetection", "clearUploadFailure", "clearStreamForRetry"],
                                },
                                {
                                    target: "#faceCapture.error",
                                    guard: "isNoAttemptsTerminal",
                                    actions: ["setTerminalError"],
                                },
                                { target: "#faceCapture.terminalProcessing", actions: ["flagFaceManualReview"] },
                            ],
                        },
                    },
                    success: { entry: "cleanup", after: { 3e3: { target: "#faceCapture.processing" } } },
                },
            },
            processing: {
                invoke: {
                    id: "processFace",
                    src: "processFace",
                    input: ({ context: e }) => e,
                    onDone: { target: "finished", actions: "setProcessResponseFromEvent" },
                    onError: { target: "finished" },
                },
            },
            terminalProcessing: {
                entry: "cleanup",
                invoke: {
                    id: "processFace",
                    src: "processFace",
                    input: ({ context: e }) => e,
                    onDone: { target: "finished", actions: "setProcessResponseFromEvent" },
                    onError: { target: "finished" },
                },
            },
            finished: { entry: "stopMediaStream", type: "final" },
            closed: { entry: "stopMediaStream", type: "final" },
            error: { entry: "stopMediaStream", on: { RESET: { target: "idle", actions: "resetContext" } } },
        },
    });
