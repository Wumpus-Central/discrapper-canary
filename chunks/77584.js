"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(803306),
    a = n(439372),
    o = n(734057),
    l = n(309010),
    _ = n(287809),
    d = n(716371),
    u = n(652215);
let c = !1;
function E(e) {
    if (__OVERLAY__) return;
    let t = _.default.getCurrentUser();
    if (null == t) return;
    let n = l.A.getChannelId(),
        i = o.A.getDMFromUserId(d.K);
    if (!t.hasUrgentMessages() || i === n) return h({ channelId: n });
    c || ((c = !0), e());
}
function h(e) {
    let { channelId: t } = e,
        n = _.default.getCurrentUser(),
        i = t === o.A.getDMFromUserId(d.K);
    null != n && n.hasUrgentMessages() && i && ((c = !1), s.lA(u.nhx.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class m extends a.A {
    handleShowUrgentMessageAlert;
    actions = {
        POST_CONNECTION_OPEN: () => E(this.handleShowUrgentMessageAlert),
        MESSAGE_CREATE: () => E(this.handleShowUrgentMessageAlert),
        CHANNEL_SELECT: h,
    };
    constructor(e) {
        super(), (this.handleShowUrgentMessageAlert = e);
    }
}
let f = new m(() =>
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("89913"), n.e("36724")]).then(n.bind(n, 531519));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: d.r, onCloseRequest: u.FXj },
    ),
);
