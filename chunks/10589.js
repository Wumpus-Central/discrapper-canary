"use strict";
n.d(t, { A: () => _ });
var r = n(439372),
    i = n(734057),
    s = n(309010),
    a = n(557279),
    o = n(617641),
    l = n(420738);
function u(e) {
    let { channelId: t } = e;
    if (null == t || !(0, o.wv)({ location: "channel_select" }) || !(0, a.gz)()) return !1;
    let n = i.A.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let r = (0, a.Di)(t);
    return (
        null != r &&
        ((0, l.U)({ warningId: r.id, warningType: r.type, senderId: n.getRecipientId(), channelId: t }), !0)
    );
}
function c(e) {
    let { channels: t } = e;
    if (!(0, o.wv)({ location: "channel_updates" }) || !(0, a.gz)()) return !1;
    let n = s.A.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let r = t.find((e) => e.id === n);
    if (null == r) return !1;
    let i = (0, a.Di)(r.id);
    return (
        !!(null != i && r.isDM()) &&
        ((0, l.U)({ warningId: i.id, warningType: i.type, senderId: r.getRecipientId(), channelId: r.id }), !0)
    );
}
class d extends r.A {
    actions = { CHANNEL_SELECT: u, CHANNEL_UPDATES: c };
}
let _ = new d();
