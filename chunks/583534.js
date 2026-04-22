"use strict";
n.d(t, { A: () => h });
var r = n(141931),
    i = n(205693),
    s = n(439372),
    a = n(961350),
    o = n(837921),
    l = n(652215);
let u = new Set();
function d(e) {
    switch (e) {
        case i.x.DEFAULT:
            return r.du.VideoMediaSessionId;
        case i.x.STREAM:
            return r.du.StreamMediaSessionId;
    }
}
function c(e) {
    o.Ay.setCrashInformation(d(e.context), e.mediaSessionId ?? null);
}
function _(e) {
    let t = (e.channelId ?? "unknown") + e.context;
    switch (e.state) {
        case l.S7L.RTC_CONNECTED:
            u.add(t), o.Ay.setCrashInformation(r.du.HasRTCConnection, 1);
            break;
        case l.S7L.DISCONNECTED:
            o.Ay.setCrashInformation(d(e.context), null),
                u.delete(t),
                0 === u.size &&
                    (function () {
                        for (let e of [
                            r.du.HasRTCConnection,
                            r.du.IsSendingVideo,
                            r.du.IsSendingStream,
                            r.du.IsReceivingVideo,
                            r.du.IsReceivingStream,
                        ])
                            o.Ay.setCrashInformation(e, 0);
                    })();
    }
}
function f(e) {
    let t = e.userId === a.default.getId(),
        n = null != e.streamId,
        s = null;
    switch (e.context) {
        case i.x.DEFAULT:
            s = t ? r.du.IsSendingVideo : r.du.IsReceivingVideo;
            break;
        case i.x.STREAM:
            s = t ? r.du.IsSendingStream : r.du.IsReceivingStream;
    }
    o.Ay.setCrashInformation(s, +!!n);
}
class E extends s.A {
    actions = { RTC_CONNECTION_STATE: _, RTC_CONNECTION_VIDEO: f, MEDIA_SESSION_JOINED: c };
}
let h = new E();
