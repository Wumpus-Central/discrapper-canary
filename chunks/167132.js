"use strict";
n.d(t, { A: () => h });
var i = n(451988),
    r = n(148494),
    a = n(730852),
    s = n(439372),
    l = n(933958),
    o = n(734057),
    d = n(977997),
    c = n(607567),
    u = n(375708);
function _() {
    let e = d.A.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = o.A.getChannel(e);
    return (
        !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.Ay.countVoiceStatesForChannel(e) > 1) &&
        null == l.Ay.getSelfEmbeddedActivityForChannel(e)
    );
}
function E() {
    if (!_()) return;
    let e = d.A.getCurrentClientVoiceChannelId(null);
    null != e &&
        (r.A.sendBotMessage(e, u.intl.formatToPlainString(u.t.XYof5G, { number: 3 })),
        a.default.selectVoiceChannel(null));
}
class A extends s.A {
    idleTimeout = new i.Ep();
    handleConnectionClosed = () => {
        this.idleTimeout.stop();
    };
    handleEmbeddedActivityDisconnect = () => {
        _() && this.idleTimeout.start(18e4, E, !0);
    };
    handleVoiceStateUpdates = () => {
        _() ? this.idleTimeout.start(18e4, E, !1) : this.idleTimeout.stop();
    };
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        CONNECTION_CLOSED: this.handleConnectionClosed,
        EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect,
    };
}
let h = new A();
