"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let a = new Map();
function s(e) {
    let { channelId: t, enabled: n } = e;
    a.set(t, n);
}
function o(e) {
    let { channelId: t } = e;
    a.delete(t);
}
class l extends r.Ay.Store {
    static displayName = "ThreadsAlsoSendToChannelStore";
    getAlsoSendToChannel(e) {
        return !!a.has(e) && a.get(e);
    }
}
let u = new l(i.h, { SET_THREADS_ALSO_SEND_TO_CHANNEL: s, CREATE_PENDING_SCHEDULED_MESSAGE: o });
