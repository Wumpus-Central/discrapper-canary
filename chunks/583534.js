"use strict";
n.d(t, { A: () => m });
var i = n(141931),
    r = n(205693),
    s = n(439372),
    a = n(495544),
    o = n(19575),
    l = n(652215);
let d = new Set();
function _(e) {
    switch (e) {
        case r.x.DEFAULT:
            return i.du.VideoMediaSessionId;
        case r.x.STREAM:
            return i.du.StreamMediaSessionId;
    }
}
function u(e) {
    o.Ay.setCrashInformation(_(e.context), e.mediaSessionId ?? null);
}
function c(e) {
    let t = (e.channelId ?? "unknown") + e.context;
    switch (e.state) {
        case l.S7L.RTC_CONNECTED:
            d.add(t), o.Ay.setCrashInformation(i.du.HasRTCConnection, 1);
            break;
        case l.S7L.DISCONNECTED:
            o.Ay.setCrashInformation(_(e.context), null),
                d.delete(t),
                0 === d.size &&
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
function E(e) {
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
class h extends s.A {
    actions = { RTC_CONNECTION_STATE: c, RTC_CONNECTION_VIDEO: E, MEDIA_SESSION_JOINED: u };
}
let m = new h();
