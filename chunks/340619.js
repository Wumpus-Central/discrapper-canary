"use strict";
n.d(t, { A: () => s });
var r = n(143236),
    i = n(201327);
class s extends r.EventEmitter {
    id;
    stream;
    pool;
    streamId;
    static async get(e, t, n) {
        let r = {
            audio: t && { echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
            video: { ...e, frameRate: 30 },
        };
        if (navigator.mediaDevices?.getDisplayMedia != null)
            return new s(await navigator.mediaDevices.getDisplayMedia(r), n);
        throw Error("UNKNOWN");
    }
    constructor(e, t) {
        super(),
            e.getVideoTracks().forEach((e) => {
                e.onended = () => {
                    this.emit("desktopsourceend");
                };
            }),
            (this.id = e.getVideoTracks()[0].label),
            (this.stream = e),
            (this.streamId = (0, i.ju)(e)),
            (this.pool = t);
    }
    reuse() {
        this.removeAllListeners(), this.pool.release(this);
    }
    destroy() {
        this.removeAllListeners(), (0, i.it)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
    }
    reset() {
        this.refreshSpeaking();
    }
    getStreamId() {
        return this.streamId;
    }
    refreshSpeaking() {
        this.emit(
            "speaking",
            this.stream.getAudioTracks().some((e) => e.enabled),
        );
    }
}
