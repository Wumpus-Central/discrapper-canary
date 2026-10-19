n.d(t, { d: () => m, t: () => h });
var l = n(723702),
    i = n(205693),
    r = n(77729),
    s = n(626584),
    a = n(192820);
n(518950);
let o = new s.A("VoiceMessageMediaEngineCapture");
function u(e, t, n) {
    return new Promise((l, i) => {
        let r = window.setTimeout(() => {
            i(Error(`Voice message ${n} timed out after ${t}ms`));
        }, t);
        e.then(
            (e) => {
                (window.clearTimeout(r), l(e));
            },
            (e) => {
                (window.clearTimeout(r), i(e));
            },
        );
    });
}
function c(e) {
    if (null == e) return;
    let t = r.A.fileManager.deleteVoiceMessageRecording?.(e);
    t?.catch((e) => o.warn("Failed to delete voice message recording temp file", e));
}
class d {
    onSample = null;
    handleVoiceActivity = (e) => {
        this.onSample?.(Math.round(((Math.max(-100, Math.min(0, e)) - -100) / 100) * 255));
    };
    async start(e) {
        this.onSample = e;
        let t = a.Ay.getMediaEngine();
        t.on(i.bg.VoiceActivity, this.handleVoiceActivity);
        try {
            await u(
                t.startLocalAudioRecording({
                    echoCancellation: a.Ay.getEchoCancellation(),
                    echoCancellationPreEcho: !1,
                    noiseSuppression: a.Ay.getNoiseSuppression(),
                    automaticGainControlConfig: { enabled: a.Ay.getAutomaticGainControl() },
                    noiseCancellation: a.Ay.getNoiseCancellation(),
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
                a.Ay.getMediaEngine().stopLocalAudioRecording((n, l) => {
                    if (!t) {
                        (o.warn("Ignoring late voice message stop callback"), c(n));
                        return;
                    }
                    e({ fileName: n, durationMs: l });
                });
            });
        try {
            e = await u(n, 12e4, "native stop");
        } finally {
            ((t = !1), this.teardown());
        }
        let { fileName: l, durationMs: i } = e;
        try {
            let e = await u(r.A.fileManager.readVoiceMessageRecording(l), 12e4, "file preparation");
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
                durationSecs: i / 1e3,
                cleanup: () => c(l),
            };
        } catch (e) {
            throw (c(l), e);
        }
    }
    cancel() {
        try {
            a.Ay.getMediaEngine().stopLocalAudioRecording((e) => {
                c(e);
            });
        } catch (e) {
            o.warn("Failed to stop media engine recording on cancel", e);
        }
        this.teardown();
    }
    teardown() {
        (a.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, this.handleVoiceActivity), (this.onSample = null));
    }
}
function h() {
    let e = window.DiscordNative?.fileManager;
    return (0, l.isDesktop)() && e?.readVoiceMessageRecording != null;
}
function m() {
    if (!h()) throw Error("Voice message recording requires the supported desktop native bridge");
    return new d();
}
