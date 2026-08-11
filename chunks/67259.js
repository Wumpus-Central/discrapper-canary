"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = new Map();
class s extends i.Ay.Store {
    static displayName = "ThreadsAlsoSendToChannelStore";
    getAlsoSendToChannel(e) {
        return !!a.has(e) && a.get(e);
    }
}
let l = new s(r.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: function (e) {
        let { channelId: t, enabled: n } = e;
        a.set(t, n);
    },
    SCHEDULED_MESSAGE_DRAFT_CHANGE: function (e) {
        let { channelId: t } = e;
        a.delete(t);
    },
});
