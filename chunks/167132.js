"use strict";
n.d(t, { A: () => p });
var i = n(451988),
    r = n(720149),
    s = n(730852),
    a = n(439372),
    o = n(933958),
    l = n(734057),
    u = n(977997),
    c = n(607567),
    d = n(375708);
function _() {
    let e = u.A.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.A.getChannel(e);
    return (
        !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.Ay.countVoiceStatesForChannel(e) > 1) &&
        null == o.Ay.getSelfEmbeddedActivityForChannel(e)
    );
}
function h() {
    if (!_()) return;
    let e = u.A.getCurrentClientVoiceChannelId(null);
    null != e &&
        (r.A.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5G, { number: 3 })),
        s.default.selectVoiceChannel(null));
}
class f extends a.A {
    idleTimeout = new i.Ep();
    handleConnectionClosed = () => {
        this.idleTimeout.stop();
    };
    handleEmbeddedActivityDisconnect = () => {
        _() && this.idleTimeout.start(18e4, h, !0);
    };
    handleVoiceStateUpdates = () => {
        _() ? this.idleTimeout.start(18e4, h, !1) : this.idleTimeout.stop();
    };
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        CONNECTION_CLOSED: this.handleConnectionClosed,
        EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect,
    };
}
let p = new f();
