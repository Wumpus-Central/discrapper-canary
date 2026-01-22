n.d(t, { A: () => d }), n(65821), n(896048);
var r = n(143236),
    i = n(277738),
    a = n(256398),
    s = n(201327),
    o = n(731854),
    l = n(818348);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = new a.A();
class d extends r.EventEmitter {
    destroy() {
        null != this.stream && (u.release(this.stream), (this.stream = null)),
            null != this.streamId && (0, s.it)(this.streamId),
            (this.destroyed = !0);
    }
    getStreamId() {
        return this.streamId;
    }
    async setSource(e) {
        if (this.sourceId === e) return this.stream;
        (this.sourceId = e), null != this.stream && (u.release(this.stream), (this.stream = null));
        let t = await (0, i.DT)();
        if (this.sourceId === o.qe) return this.setStream(new MediaStream());
        let n = { width: 1280 };
        t.some((e) => e.id === this.sourceId) && (n.deviceId = this.sourceId);
        try {
            let e = await u.acquire({
                audio: !1,
                video: n,
            });
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
            null != this.streamId && ((0, s.it)(this.streamId), (this.streamId = null)),
            (this.stream = e),
            (e.onaddtrack = (e) => this.emit("add-video-track", e)),
            e.getVideoTracks().length > 0 && (this.streamId = (0, s.ju)(e)),
            this.emit("stream", e),
            this.emit("video", this.getStreamId()),
            e
        );
    }
    constructor(...e) {
        super(...e),
            c(this, "stream", new MediaStream()),
            c(this, "sourceId", o.qe),
            c(this, "streamId", null),
            c(this, "destroyed", !1);
    }
}
