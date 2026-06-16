"use strict";
n.d(t, { A: () => a });
var l = n(17928),
    i = n(228366);
let r = new Map();
class s extends l.Ay.Store {
    static displayName = "ThreadsAlsoSendToChannelStore";
    getAlsoSendToChannel(e) {
        return !!r.has(e) && r.get(e);
    }
}
let a = new s(i.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: function (e) {
        let { channelId: t, enabled: n } = e;
        r.set(t, n);
    },
    CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
        let { channelId: t } = e;
        r.delete(t);
    },
});
