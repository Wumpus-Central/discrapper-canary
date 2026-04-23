"use strict";
n.d(t, { A: () => f });
var r = n(803306),
    i = n(439372),
    s = n(734057),
    a = n(309010),
    o = n(287809),
    l = n(716371),
    u = n(652215);
let c = !1;
function d(e) {
    if (__OVERLAY__) return;
    let t = o.default.getCurrentUser();
    if (null == t) return;
    let n = a.A.getChannelId(),
        r = s.A.getDMFromUserId(l.K);
    if (!t.hasUrgentMessages() || r === n) return _({ channelId: n });
    c || ((c = !0), e());
}
function _(e) {
    let { channelId: t } = e,
        n = o.default.getCurrentUser(),
        i = t === s.A.getDMFromUserId(l.K);
    null != n && n.hasUrgentMessages() && i && ((c = !1), r.lA(u.nhx.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class f extends i.A {
    handleShowUrgentMessageAlert;
    actions = {
        POST_CONNECTION_OPEN: () => d(this.handleShowUrgentMessageAlert),
        MESSAGE_CREATE: () => d(this.handleShowUrgentMessageAlert),
        CHANNEL_SELECT: _,
    };
    constructor(e) {
        super(), (this.handleShowUrgentMessageAlert = e);
    }
}
