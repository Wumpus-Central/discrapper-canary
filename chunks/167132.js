"use strict";
n.d(t, { A: () => h });
var r = n(451988),
    i = n(843472),
    s = n(956793),
    a = n(439372),
    o = n(933958),
    l = n(734057),
    u = n(977997),
    d = n(607567),
    c = n(985018);
function _() {
    let e = u.A.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.A.getChannel(e);
    return (
        !(null == t || !t.isPrivate() || t.recipients.length > 1 || d.Ay.countVoiceStatesForChannel(e) > 1) &&
        null == o.Ay.getSelfEmbeddedActivityForChannel(e)
    );
}
function f() {
    if (!_()) return;
    let e = u.A.getCurrentClientVoiceChannelId(null);
    null != e &&
        (i.A.sendBotMessage(e, c.intl.formatToPlainString(c.t.XYof5G, { number: 3 })),
        s.default.selectVoiceChannel(null));
}
class E extends a.A {
    idleTimeout = new r.Ep();
    handleConnectionClosed = () => {
        this.idleTimeout.stop();
    };
    handleEmbeddedActivityDisconnect = () => {
        _() && this.idleTimeout.start(18e4, f, !0);
    };
    handleVoiceStateUpdates = () => {
        _() ? this.idleTimeout.start(18e4, f, !1) : this.idleTimeout.stop();
    };
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        CONNECTION_CLOSED: this.handleConnectionClosed,
        EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect,
    };
}
let h = new E();
