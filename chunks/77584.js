"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(803306),
    a = n(439372),
    o = n(734057),
    l = n(309010),
    u = n(287809),
    c = n(716371),
    d = n(652215);
let _ = !1;
function h(e) {
    if (__OVERLAY__) return;
    let t = u.default.getCurrentUser();
    if (null == t) return;
    let n = l.A.getChannelId(),
        i = o.A.getDMFromUserId(c.K);
    if (!t.hasUrgentMessages() || i === n) return f({ channelId: n });
    _ || ((_ = !0), e());
}
function f(e) {
    let { channelId: t } = e,
        n = u.default.getCurrentUser(),
        i = t === o.A.getDMFromUserId(c.K);
    null != n && n.hasUrgentMessages() && i && ((_ = !1), s.lA(d.nhx.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class p extends a.A {
    handleShowUrgentMessageAlert;
    actions = {
        POST_CONNECTION_OPEN: () => h(this.handleShowUrgentMessageAlert),
        MESSAGE_CREATE: () => h(this.handleShowUrgentMessageAlert),
        CHANNEL_SELECT: f,
    };
    constructor(e) {
        super(), (this.handleShowUrgentMessageAlert = e);
    }
}
let E = new p(() =>
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("89913"), n.e("36724")]).then(n.bind(n, 531519));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: c.r, onCloseRequest: d.FXj },
    ),
);
