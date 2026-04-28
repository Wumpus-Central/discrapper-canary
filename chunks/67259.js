"use strict";
n.d(t, { A: () => r });
var l = n(17928),
    i = n(228366);
let s = new Map();
class a extends l.Ay.Store {
    static displayName = "ThreadsAlsoSendToChannelStore";
    getAlsoSendToChannel(e) {
        return !!s.has(e) && s.get(e);
    }
}
let r = new a(i.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: function (e) {
        let { channelId: t, enabled: n } = e;
        s.set(t, n);
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        s.delete(t);
    },
});
