r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(836560);
var s = r(740197),
    l = r(106617),
    u = r(376398),
    c = r(65154),
    d = r(231338);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = new l.Z();
class h extends o.EventEmitter {
    destroy() {
        null != this.stream && (p.release(this.stream), (this.stream = null)), null != this.streamId && (0, u.jC)(this.streamId), (this.destroyed = !0);
    }
    getStreamId() {
        return this.streamId;
    }
    async setSource(e) {
        if (this.sourceId === e) return this.stream;
        (this.sourceId = e), null != this.stream && (p.release(this.stream), (this.stream = null));
        let n = await (0, s.l0)();
        if (this.sourceId === c.Av) return this.setStream(new MediaStream());
        let r = { width: 1280 };
        n.some((e) => e.id === this.sourceId) && (r.deviceId = this.sourceId);
        try {
            let e = await p.acquire({
                audio: !1,
                video: r
            });
            if (this.destroyed) throw (p.release(e), Error('VideoInput: Already destroyed'));
            return this.emit('permission', !0), this.setStream(e);
        } catch (e) {
            if ('string' != typeof e)
                switch (e.name) {
                    case 'PermissionDeniedError':
                    case 'NotAllowedError':
                        throw (this.emit('permission', !1), d.ET.PERMISSION_DENIED);
                    case 'PermissionDismissedError':
                        throw (this.emit('permission', !1), d.ET.PERMISSION_DISMISSED);
                    case 'DevicesNotFoundError':
                    case 'NotFoundError':
                        throw d.ET.NO_DEVICES_FOUND;
                    default:
                        throw e.name || 'UNKNOWN';
                }
            throw e;
        }
    }
    setStream(e) {
        return null != this.streamId && ((0, u.jC)(this.streamId), (this.streamId = null)), (this.stream = e), (e.onaddtrack = (e) => this.emit('add-video-track', e)), e.getVideoTracks().length > 0 && (this.streamId = (0, u.N7)(e)), this.emit('stream', e), this.emit('video', this.getStreamId()), e;
    }
    constructor(...e) {
        super(...e), f(this, 'stream', new MediaStream()), f(this, 'sourceId', c.Av), f(this, 'streamId', null), f(this, 'destroyed', !1);
    }
}
