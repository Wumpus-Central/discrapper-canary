i.d(o, { init: () => r });
let n = async (e) =>
        window.Meticulous?.isRunningAsTest
            ? (console.debug("Running as part of a Meticulous test case, so skipping loading the Meticulous recorder."),
              { stopRecording: async () => {} })
            : await t(e).catch((e) => (console.error(e), { stopRecording: async () => {} })),
    t = ({
        projectId: e,
        recordingToken: o,
        uploadIntervalMs: i,
        snapshotLinkedStylesheets: n,
        commitHash: t,
        maxMsToBlockFor: s,
        snippetsBaseUrl: r,
        forceRecording: d,
        middleware: c,
        responseSanitizers: l,
        isProduction: u,
        version: a,
    }) => {
        let p = !1;
        return new Promise((_, w) => {
            var E;
            let S = s ?? 2e3;
            S > 0 &&
                setTimeout(() => {
                    (p = !0), _({ stopRecording: async () => {} });
                }, S);
            let R = document.createElement("script");
            (R.type = "text/javascript"),
                (R.src = new URL(
                    `${null != a ? "record/" : ""}${null == ((E = a ?? null)) ? "v1" : `v/${E}`}/meticulous-manual-init.js`,
                    r || "https://snippet.meticulous.ai",
                ).href);
            let M = window;
            (M.METICULOUS_RECORDING_TOKEN = o ?? e),
                void 0 !== i && (M.METICULOUS_UPLOAD_INTERVAL_MS = i),
                void 0 !== t && (M.METICULOUS_APP_COMMIT_HASH = t),
                void 0 !== n && (M.METICULOUS_SNAPSHOT_LINKED_STYLESHEETS = n),
                void 0 !== d && (M.METICULOUS_FORCE_RECORDING = d),
                void 0 !== u && (M.METICULOUS_IS_PRODUCTION_ENVIRONMENT = u),
                null != l && l.length > 0 && (M.METICULOUS_NETWORK_RESPONSE_SANITIZERS = l),
                null != c && c.length > 0 && (M.METICULOUS_RECORDER_MIDDLEWARE_V1 = c),
                (R.onload = function () {
                    if (p) return void console.debug("Meticulous snippet abandoned due to max blocking time reached.");
                    let e = window.__meticulous?.initialiseRecorder;
                    if ("function" != typeof e) return void w("Meticulous recorder failed to initialise.");
                    try {
                        e();
                    } catch (e) {
                        w(e);
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
                (R.onerror = () => {
                    w("Meticulous recorder failed to initialise.");
                }),
                document.head.appendChild(R);
        });
    },
    s = async () => {
        let e = window?.__meticulous?.earlyNetworkRecorder?.dispose;
        e && (await e());
    };
function r() {
    window.DiscordDevSession = { start: d, stop: c, started: !1 };
}
function d() {
    let e = window.GLOBAL_ENV.DEV_SESSION_KEY;
    null == e
        ? console.log("Meticulous token not found")
        : (n({ recordingToken: e, isProduction: !1 }),
          null != window.DiscordDevSession && (window.DiscordDevSession.started = !0),
          console.log("Meticulous session recording started"));
}
function c() {
    s(), null != window.DiscordDevSession && (window.DiscordDevSession.started = !1);
}
