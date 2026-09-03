n.d(t, { A: () => h });
var i = n(141931),
    r = n(459838),
    a = n(439372),
    s = n(280450),
    l = n(19575),
    o = n(652215);
let d = new Set();
function c(e) {
    switch (e) {
        case r.x.DEFAULT:
            return i.du.VideoMediaSessionId;
        case r.x.STREAM:
            return i.du.StreamMediaSessionId;
    }
}
function u(e) {
    l.Ay.setCrashInformation(c(e.context), e.mediaSessionId ?? null);
}
function _(e) {
    let t = (e.channelId ?? "unknown") + e.context;
    switch (e.state) {
        case o.S7L.RTC_CONNECTED:
            d.add(t), l.Ay.setCrashInformation(i.du.HasRTCConnection, 1);
            break;
        case o.S7L.DISCONNECTED:
            l.Ay.setCrashInformation(c(e.context), null),
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
                            l.Ay.setCrashInformation(e, 0);
                    })();
    }
}
function E(e) {
    let t = e.userId === s.default.getId(),
        n = null != e.streamId,
        a = null;
    switch (e.context) {
        case r.x.DEFAULT:
            a = t ? i.du.IsSendingVideo : i.du.IsReceivingVideo;
            break;
        case r.x.STREAM:
            a = t ? i.du.IsSendingStream : i.du.IsReceivingStream;
    }
    l.Ay.setCrashInformation(a, +!!n);
}
class A extends a.A {
    actions = { RTC_CONNECTION_STATE: _, RTC_CONNECTION_VIDEO: E, MEDIA_SESSION_JOINED: u };
}
let h = new A();
