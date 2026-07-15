d.d(t, { t: () => u });
var i = d(768672),
    e = d(599078),
    c = d(28134),
    a = d(768816),
    s = d(305463),
    n = d(117589),
    Z = d(825123),
    b = d(827029);
async function m({ source: l, base64Image: t, token: d }) {
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
}
async function o({ wasmUtil: l, source: t, token: d }) {
    let i = { canvas: null, itr: null, skipped: null };
    if ((await l.poc(i), !1 === i.skipped)) {
        if (i.canvas && d) {
            let l = new n.t(i.canvas).getBase64Image();
            l && (await m({ source: t, base64Image: l, token: d }));
        }
        !0 === i.itr ? ((0, e.t)({ virtualCameraDetected: !0 }), l.setZc("FAIL")) : !1 === i.itr && l.setZc("PASS");
    }
}
function u(l) {
    var t, d, i, e, n;
    let m =
            ((t = l.wasmUtil),
            (d = l.visibility),
            (i = l.browserEnv),
            (e = l.ipLookup),
            {
                async initialize(l, d = !1, s = !1) {
                    t.setSdkPlatform("WEBAPP"), t.setSdkVersion(l);
                    let n = (0, a.t)(),
                        Z = (0, c.r)(n),
                        m = /Android|iPhone|iPad|iPod/i.test(n),
                        o = (0, b.t)(),
                        u = "";
                    if (!s)
                        try {
                            u = await (0, c.n)();
                        } catch {
                            u = i.generateCanvasFingerprint();
                        }
                    let h = d ? "" : await e.getIp(),
                        W = i.getScreenDimensions(),
                        G = {
                            kind: m ? "mobile" : "desktop",
                            model: [Z.device.vendor, Z.device.model].filter(Boolean).join(" "),
                            os: Z.os.name ?? "",
                            osVersion: Z.os.version ?? "",
                            screenDimensions: W,
                            numTouchPoints: o.maxTouchPoints,
                            fingerprintHash: u,
                            ip: h,
                            backgroundMode: !1,
                        };
                    t.setDeviceInfo(G);
                    let p = i.getNavigatorPrefixes(),
                        N = {
                            userAgent: n,
                            getUserMediaAvailability: { webkit: p.webkit, moz: p.moz, o: p.o, ms: p.ms },
                            webglFingerprint: i.getWebGLRenderer(),
                            inspectorOpened: t.getInspectorOpened(),
                            isMockedBrowser: (0, c.t)(i),
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
                            for (let l of await i.enumerateVideoDeviceLabels()) if (t.isVirtualCamera(l)) return !0;
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
                    t.setBackgroundMode(l || d.wasBackgrounded), d.reset();
                },
                estimatePerformance: () => t.estimatePerformance(),
                getMetadata: () => t.getMetadata(),
                getCheck: () => t.getCheck(),
                getPipelineState: () => t.getPipelineState(),
                preparePipelineState() {
                    t.getPipelineState();
                },
            }),
        u =
            ((n = l.motionSensor),
            {
                requestPermission: async () => n.requestPermission(),
                async start() {
                    await n.start();
                },
                stop() {
                    n.stop();
                },
                check: () => n.check(),
                get isRunning() {
                    return n.isRunning;
                },
                get hasPermission() {
                    return n.hasPermission;
                },
            });
    return {
        metadata: m,
        motion: u,
        async initialize(t = !1, d = !1) {
            await m.initialize(l.sdkVersion, t, d), m.estimatePerformance();
        },
        requestMotionPermission: async () => u.requestPermission(),
        async startMotionSensors() {
            await u.start();
        },
        async primeWasmMotionSensor() {
            await l.wasmUtil.rsp(), l.wasmUtil.ssl();
        },
        stopMotionSensors() {
            u.stop();
        },
        checkVirtualCamera: async (l) => (m.updateCameraInfo(l), m.checkForVirtualCameraByLabel(l)),
        async performVirtualCameraCheck(t, d) {
            await o({ wasmUtil: l.wasmUtil, source: d, token: t });
        },
        async performPrcCheck(t) {
            let d = await (0, s.r)(t.constraints),
                i = (0, Z.t)(d);
            try {
                await l.wasmUtil.prc();
            } finally {
                i.dispose(), (0, s.a)(d);
            }
        },
        async analyzeFrame(l) {
            await u.start(), await m.analyzeFrame(l), m.preparePipelineState();
            let t = u.check();
            m.setMotionStatus(t), m.getCheck(), m.setBackgroundMode(!1);
        },
        getMetadata: () => m.getMetadata(),
        getMotionStatus: () => u.check(),
        getAnalysisStatus: () => m.getCheck(),
        getPipelineState: () => m.getPipelineState(),
        cleanup() {
            u.stop();
        },
    };
}
