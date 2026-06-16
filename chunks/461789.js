o.d(i, { B5: () => s, Lw: () => t });
let t = async (e) =>
        window.Meticulous?.isRunningAsTest
            ? (console.debug("Running as part of a Meticulous test case, so skipping loading the Meticulous recorder."),
              { stopRecording: async () => {} })
            : await n(e).catch((e) => (console.error(e), { stopRecording: async () => {} })),
    n = ({
        projectId: e,
        recordingToken: i,
        uploadIntervalMs: o,
        snapshotLinkedStylesheets: t,
        commitHash: n,
        maxMsToBlockFor: s,
        snippetsBaseUrl: r,
        forceRecording: c,
        middleware: d,
        responseSanitizers: l,
        isProduction: a,
        version: u,
    }) => {
        let p = !1;
        return new Promise((_, E) => {
            var R;
            let w = s ?? 2e3;
            w > 0 &&
                setTimeout(() => {
                    (p = !0), _({ stopRecording: async () => {} });
                }, w);
            let S = document.createElement("script");
            (S.type = "text/javascript"),
                (S.src = new URL(
                    `${null != u ? "record/" : ""}${null == ((R = u ?? null)) ? "v1" : `v/${R}`}/meticulous-manual-init.js`,
                    r || "https://snippet.meticulous.ai",
                ).href);
            let T = window;
            (T.METICULOUS_RECORDING_TOKEN = i ?? e),
                void 0 !== o && (T.METICULOUS_UPLOAD_INTERVAL_MS = o),
                void 0 !== n && (T.METICULOUS_APP_COMMIT_HASH = n),
                void 0 !== t && (T.METICULOUS_SNAPSHOT_LINKED_STYLESHEETS = t),
                void 0 !== c && (T.METICULOUS_FORCE_RECORDING = c),
                void 0 !== a && (T.METICULOUS_IS_PRODUCTION_ENVIRONMENT = a),
                null != l && l.length > 0 && (T.METICULOUS_NETWORK_RESPONSE_SANITIZERS = l),
                null != d && d.length > 0 && (T.METICULOUS_RECORDER_MIDDLEWARE_V1 = d),
                (S.onload = function () {
                    if (p) return void console.debug("Meticulous snippet abandoned due to max blocking time reached.");
                    let e = window.__meticulous?.initialiseRecorder;
                    if ("function" != typeof e) return void E("Meticulous recorder failed to initialise.");
                    try {
                        e();
                    } catch (e) {
                        E(e);
                    }
                    _({
                        stopRecording: async () => {
                            let e = window.__meticulous?.stopRecording;
                            if (!e)
                                throw Error(
                                    "Recorder not initialised: window.__meticulous.stopRecording is not defined.",
                                );
                            await e();
                        },
                    });
                }),
                (S.onerror = () => {
                    E("Meticulous recorder failed to initialise.");
                }),
                document.head.appendChild(S);
        });
    },
    s = async () => {
        let e = window?.__meticulous?.earlyNetworkRecorder?.dispose;
        e && (await e());
    };
