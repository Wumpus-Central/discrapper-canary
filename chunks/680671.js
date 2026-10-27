n.d(t, { d: () => E, t: () => _ });
var i = n(723702),
    r = n(205693),
    a = n(77729),
    s = n(626584),
    l = n(360906);
n(518950);
let o = new s.A("VoiceMessageMediaEngineCapture");
function d(e, t, n) {
    return new Promise((i, r) => {
        let a = window.setTimeout(() => {
            r(Error(`Voice message ${n} timed out after ${t}ms`));
        }, t);
        e.then(
            (e) => {
                (window.clearTimeout(a), i(e));
            },
            (e) => {
                (window.clearTimeout(a), r(e));
            },
        );
    });
}
function c(e) {
    if (null == e) return;
    let t = a.A.fileManager.deleteVoiceMessageRecording?.(e);
    t?.catch((e) => o.warn("Failed to delete voice message recording temp file", e));
}
class u {
    onSample = null;
    handleVoiceActivity = (e) => {
        this.onSample?.(Math.round(((Math.max(-100, Math.min(0, e)) - -100) / 100) * 255));
    };
    async start(e) {
        this.onSample = e;
        let t = l.Ay.getMediaEngine();
        t.on(r.bg.VoiceActivity, this.handleVoiceActivity);
        try {
            await d(
                t.startLocalAudioRecording({
                    echoCancellation: l.Ay.getEchoCancellation(),
                    echoCancellationPreEcho: !1,
                    noiseSuppression: l.Ay.getNoiseSuppression(),
                    automaticGainControlConfig: { enabled: l.Ay.getAutomaticGainControl() },
                    noiseCancellation: l.Ay.getNoiseCancellation(),
                }),
                1e4,
                "startup",
            );
        } catch (e) {
            throw (this.cancel(), e);
        }
    }
    async stop() {
        let e,
            t = !0,
            n = new Promise((e) => {
                l.Ay.getMediaEngine().stopLocalAudioRecording((n, i) => {
                    if (!t) {
                        (o.warn("Ignoring late voice message stop callback"), c(n));
                        return;
                    }
                    e({ fileName: n, durationMs: i });
                });
            });
        try {
            e = await d(n, 12e4, "native stop");
        } finally {
            ((t = !1), this.teardown());
        }
        let { fileName: i, durationMs: r } = e;
        try {
            let e = await d(a.A.fileManager.readVoiceMessageRecording(i), 12e4, "file preparation");
            return {
                file: new File([e.data], e.filename, {
                    type: (function (e) {
                        switch (e.slice(e.lastIndexOf(".") + 1).toLowerCase()) {
                            case "webm":
                                return "audio/webm";
                            case "wav":
                                return "audio/wav";
                            case "m4a":
                            case "mp4":
                                return "audio/mp4";
                            case "caf":
                                return "audio/x-caf";
                            default:
                                return "audio/ogg";
                        }
                    })(e.filename),
                }),
                durationSecs: r / 1e3,
                cleanup: () => c(i),
            };
        } catch (e) {
            throw (c(i), e);
        }
    }
    cancel() {
        try {
            l.Ay.getMediaEngine().stopLocalAudioRecording((e) => {
                c(e);
            });
        } catch (e) {
            o.warn("Failed to stop media engine recording on cancel", e);
        }
        this.teardown();
    }
    teardown() {
        (l.Ay.getMediaEngine().removeListener(r.bg.VoiceActivity, this.handleVoiceActivity), (this.onSample = null));
    }
}
function _() {
    let e = window.DiscordNative?.fileManager;
    return (0, i.isDesktop)() && e?.readVoiceMessageRecording != null;
}
function E() {
    if (!_()) throw Error("Voice message recording requires the supported desktop native bridge");
    return new u();
}
