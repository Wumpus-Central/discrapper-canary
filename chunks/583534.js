n.d(t, { A: () => g }), n(896048);
var r = n(141931),
    i = n(205693),
    a = n(439372),
    s = n(961350),
    o = n(837921),
    l = n(652215);
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
let u = new Set();
function d() {
    for (let e of [
        r.du.HasRTCConnection,
        r.du.IsSendingVideo,
        r.du.IsSendingStream,
        r.du.IsReceivingVideo,
        r.du.IsReceivingStream,
    ])
        o.Ay.setCrashInformation(e, 0);
}
function f(e) {
    switch (e) {
        case i.x.DEFAULT:
            return r.du.VideoMediaSessionId;
        case i.x.STREAM:
            return r.du.StreamMediaSessionId;
    }
}
function p(e) {
    var t;
    o.Ay.setCrashInformation(f(e.context), null != (t = e.mediaSessionId) ? t : null);
}
function _(e) {
    var t;
    let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
    switch (e.state) {
        case l.S7L.RTC_CONNECTED:
            u.add(n), o.Ay.setCrashInformation(r.du.HasRTCConnection, 1);
            break;
        case l.S7L.DISCONNECTED:
            o.Ay.setCrashInformation(f(e.context), null), u.delete(n), 0 === u.size && d();
    }
}
function h(e) {
    let t = e.userId === s.default.getId(),
        n = null != e.streamId,
        a = null;
    switch (e.context) {
        case i.x.DEFAULT:
            a = t ? r.du.IsSendingVideo : r.du.IsReceivingVideo;
            break;
        case i.x.STREAM:
            a = t ? r.du.IsSendingStream : r.du.IsReceivingStream;
    }
    o.Ay.setCrashInformation(a, +!!n);
}
class m extends a.A {
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                RTC_CONNECTION_STATE: _,
                RTC_CONNECTION_VIDEO: h,
                MEDIA_SESSION_JOINED: p,
            });
    }
}
let g = new m();
