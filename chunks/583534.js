"use strict";
n.d(t, { A: () => p });
var i = n(141931),
    r = n(459838),
    s = n(439372),
    a = n(495544),
    o = n(19575),
    l = n(652215);
let u = new Set();
function c(e) {
    switch (e) {
        case r.x.DEFAULT:
            return i.du.VideoMediaSessionId;
        case r.x.STREAM:
            return i.du.StreamMediaSessionId;
    }
}
function d(e) {
    o.Ay.setCrashInformation(c(e.context), e.mediaSessionId ?? null);
}
function _(e) {
    let t = (e.channelId ?? "unknown") + e.context;
    switch (e.state) {
        case l.S7L.RTC_CONNECTED:
            u.add(t), o.Ay.setCrashInformation(i.du.HasRTCConnection, 1);
            break;
        case l.S7L.DISCONNECTED:
            o.Ay.setCrashInformation(c(e.context), null),
                u.delete(t),
                0 === u.size &&
                    (function () {
                        for (let e of [
                            i.du.HasRTCConnection,
                            i.du.IsSendingVideo,
                            i.du.IsSendingStream,
                            i.du.IsReceivingVideo,
                            i.du.IsReceivingStream,
                        ])
                            o.Ay.setCrashInformation(e, 0);
                    })();
    }
}
function h(e) {
    let t = e.userId === a.default.getId(),
        n = null != e.streamId,
        s = null;
    switch (e.context) {
        case r.x.DEFAULT:
            s = t ? i.du.IsSendingVideo : i.du.IsReceivingVideo;
            break;
        case r.x.STREAM:
            s = t ? i.du.IsSendingStream : i.du.IsReceivingStream;
    }
    o.Ay.setCrashInformation(s, +!!n);
}
class f extends s.A {
    actions = { RTC_CONNECTION_STATE: _, RTC_CONNECTION_VIDEO: h, MEDIA_SESSION_JOINED: d };
}
let p = new f();
