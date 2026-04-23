"use strict";
n.d(t, { A: () => c });
var r = n(143236),
    i = n(277738),
    s = n(256398),
    a = n(201327),
    o = n(731854),
    l = n(818348);
let u = new s.A();
class c extends r.EventEmitter {
    stream = new MediaStream();
    sourceId = o.qe;
    streamId = null;
    destroyed = !1;
    destroy() {
        null != this.stream && (u.release(this.stream), (this.stream = null)),
            null != this.streamId && (0, a.it)(this.streamId),
            (this.destroyed = !0);
    }
    getStreamId() {
        return this.streamId;
    }
    async setSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.sourceId === e) return this.stream;
        (this.sourceId = e), null != this.stream && (u.release(this.stream), (this.stream = null));
        let n = await (0, i.DT)();
        if (this.sourceId === o.qe) return this.setStream(new MediaStream());
        let r = { width: 1280, ...t };
        n.some((e) => e.id === this.sourceId) && (r.deviceId = this.sourceId);
        try {
            let e = await u.acquire({ audio: !1, video: r });
            if (this.destroyed) throw (u.release(e), Error("VideoInput: Already destroyed"));
            return this.emit("permission", !0), this.setStream(e);
        } catch (e) {
            if ("string" != typeof e)
                switch (e.name) {
                    case "PermissionDeniedError":
                    case "NotAllowedError":
                        throw (this.emit("permission", !1), l.xe.PERMISSION_DENIED);
                    case "PermissionDismissedError":
                        throw (this.emit("permission", !1), l.xe.PERMISSION_DISMISSED);
                    case "DevicesNotFoundError":
                    case "NotFoundError":
                        throw l.xe.NO_DEVICES_FOUND;
                    default:
                        throw e.name || "UNKNOWN";
                }
            throw e;
        }
    }
    setStream(e) {
        return (
            null != this.streamId && ((0, a.it)(this.streamId), (this.streamId = null)),
            (this.stream = e),
            (e.onaddtrack = (e) => this.emit("add-video-track", e)),
            e.getVideoTracks().length > 0 && (this.streamId = (0, a.ju)(e)),
            this.emit("stream", e),
            this.emit("video", this.getStreamId()),
            e
        );
    }
}
