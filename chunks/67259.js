"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    l = n(73153);
let s = new Map();
class r extends i.Ay.Store {
    static displayName = "ThreadsAlsoSendToChannelStore";
    getAlsoSendToChannel(e) {
        return !!s.has(e) && s.get(e);
    }
}
let a = new r(l.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: function (e) {
        let { channelId: t, enabled: n } = e;
        s.set(t, n);
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        s.delete(t);
    },
});
