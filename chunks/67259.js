"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = new Map();
class a extends i.Ay.Store {
    static displayName = "ThreadsAlsoSendToChannelStore";
    getAlsoSendToChannel(e) {
        return !!s.has(e) && s.get(e);
    }
}
let o = new a(r.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: function (e) {
        let { channelId: t, enabled: n } = e;
        s.set(t, n);
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        s.delete(t);
    },
});
