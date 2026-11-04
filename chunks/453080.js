var i = d(41851),
    e = d(829601),
    c = d(489510),
    a = d(219877),
    s = d(154676),
    n = d(693160),
    Z = d(614235),
    b = d(888091);
d.d(
    t,
    {},
    {
        t: function (l) {
            var t, d, m, o, u;
            let h =
                    ((t = l.wasmUtil),
                    (d = l.visibility),
                    (m = l.browserEnv),
                    (o = l.ipLookup),
                    {
                        async initialize(l, d = !1, i = !1) {
                            (t.setSdkPlatform("WEBAPP"), t.setSdkVersion(l));
                            let e = (0, a.t)(),
                                s = (0, c.r)(e),
                                n = /Android|iPhone|iPad|iPod/i.test(e),
                                Z = (0, b.t)(),
                                u = "";
                            if (!i)
                                try {
                                    u = await (0, c.n)();
                                } catch {
                                    u = m.generateCanvasFingerprint();
                                }
                            let h = d ? "" : await o.getIp(),
                                W = m.getScreenDimensions(),
                                G = {
                                    kind: n ? "mobile" : "desktop",
                                    model: [s.device.vendor, s.device.model].filter(Boolean).join(" "),
                                    os: s.os.name ?? "",
                                    osVersion: s.os.version ?? "",
                                    screenDimensions: W,
                                    numTouchPoints: Z.maxTouchPoints,
                                    fingerprintHash: u,
                                    ip: h,
                                    backgroundMode: !1,
                                };
                            t.setDeviceInfo(G);
                            let p = m.getNavigatorPrefixes(),
                                N = {
                                    userAgent: e,
                                    getUserMediaAvailability: { webkit: p.webkit, moz: p.moz, o: p.o, ms: p.ms },
                                    webglFingerprint: m.getWebGLRenderer(),
                                    inspectorOpened: t.getInspectorOpened(),
                                    isMockedBrowser: (0, c.t)(m),
                                };
                            t.setBrowserInfo(N, !1);
                        },
                        updateCameraInfo(l) {
                            let d = l.getSettings(),
                                i = l.getCapabilities?.() ?? {},
                                e = l.label ? [l.label] : [],
                                c = {
                                    facingMode:
                                        "user" === d.facingMode
                                            ? "frontal"
                                            : "environment" === d.facingMode
                                              ? "back"
                                              : d.facingMode || "unknown",
                                    settings: d,
                                    capabilities: i,
                                    labels: e,
                                };
                            t.setCameraInfo(c);
                        },
                        async checkForVirtualCameraByLabel(l = null) {
                            try {
                                if (!l) {
                                    for (let l of await m.enumerateVideoDeviceLabels())
                                        if (t.isVirtualCamera(l)) return !0;
                                }
                                if (l && t.isVirtualCamera(l.label)) return !0;
                                return !1;
                            } catch {
                                return !1;
                            }
                        },
                        async analyzeFrame(l) {
                            await t.analyzeFrame(l);
                        },
                        setMotionStatus(l) {
                            t.setMotionStatus(l);
                        },
                        setBackgroundMode(l) {
                            (t.setBackgroundMode(l || d.wasBackgrounded), d.reset());
                        },
                        estimatePerformance: () => t.estimatePerformance(),
                        getMetadata: () => t.getMetadata(),
                        getCheck: () => t.getCheck(),
                        getPipelineState: () => t.getPipelineState(),
                        preparePipelineState() {
                            t.getPipelineState();
                        },
                    }),
                W =
                    ((u = l.motionSensor),
                    {
                        requestPermission: async () => u.requestPermission(),
                        async start() {
                            await u.start();
                        },
                        stop() {
                            u.stop();
                        },
                        check: () => u.check(),
                        get isRunning() {
                            return u.isRunning;
                        },
                        get hasPermission() {
                            return u.hasPermission;
                        },
                    });
            return {
                metadata: h,
                motion: W,
                async initialize(t = !1, d = !1) {
                    (await h.initialize(l.sdkVersion, t, d), h.estimatePerformance());
                },
                requestMotionPermission: async () => W.requestPermission(),
                async startMotionSensors() {
                    await W.start();
                },
                async primeWasmMotionSensor() {
                    (await l.wasmUtil.rsp(), l.wasmUtil.ssl());
                },
                stopMotionSensors() {
                    W.stop();
                },
                checkVirtualCamera: async (l) => (h.updateCameraInfo(l), h.checkForVirtualCameraByLabel(l)),
                async performVirtualCameraCheck(t, d) {
                    await (async function ({ wasmUtil: l, source: t, token: d }) {
                        let c = { canvas: null, itr: null, skipped: null };
                        if ((await l.poc(c), !1 === c.skipped)) {
                            if (c.canvas && d) {
                                let l = new n.t(c.canvas).getBase64Image();
                                l &&
                                    (await (async function ({ source: l, base64Image: t, token: d }) {
                                        try {
                                            return (
                                                await i.t.post(
                                                    "/omni/log/frame/v2",
                                                    { base64Image: t },
                                                    { query: { source: l }, headers: { "X-Incode-Hardware-Id": d } },
                                                )
                                            ).data;
                                        } catch {
                                            return;
                                        }
                                    })({ source: t, base64Image: l, token: d }));
                            }
                            !0 === c.itr
                                ? ((0, e.t)({ virtualCameraDetected: !0 }), l.setZc("FAIL"))
                                : !1 === c.itr && l.setZc("PASS");
                        }
                    })({ wasmUtil: l.wasmUtil, source: d, token: t });
                },
                async performPrcCheck(t) {
                    let d = await (0, s.r)(t.constraints),
                        i = (0, Z.t)(d);
                    try {
                        await l.wasmUtil.prc();
                    } finally {
                        (i.dispose(), (0, s.a)(d));
                    }
                },
                async analyzeFrame(l) {
                    (await W.start(), await h.analyzeFrame(l), h.preparePipelineState());
                    let t = W.check();
                    (h.setMotionStatus(t), h.getCheck(), h.setBackgroundMode(!1));
                },
                getMetadata: () => h.getMetadata(),
                getMotionStatus: () => W.check(),
                getAnalysisStatus: () => h.getCheck(),
                getPipelineState: () => h.getPipelineState(),
                cleanup() {
                    W.stop();
                },
            };
        },
    },
);
