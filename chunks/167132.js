"use strict";
n.d(t, { A: () => g });
var r = n(451988),
    i = n(843472),
    a = n(956793),
    s = n(439372),
    o = n(933958),
    l = n(734057),
    u = n(977997),
    c = n(607567),
    d = n(985018);
let _ = 3,
    f = 18e4;
function p() {
    let e = u.A.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.A.getChannel(e);
    return (
        !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.Ay.countVoiceStatesForChannel(e) > 1) &&
        null == o.Ay.getSelfEmbeddedActivityForChannel(e)
    );
}
function h() {
    if (!p()) return;
    let e = u.A.getCurrentClientVoiceChannelId(null);
    null != e &&
        (i.A.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5G, { number: _ })),
        a.default.selectVoiceChannel(null));
}
class m extends s.A {
    idleTimeout = new r.Ep();
    handleConnectionClosed = () => {
        this.idleTimeout.stop();
    };
    handleEmbeddedActivityDisconnect = () => {
        p() && this.idleTimeout.start(f, h, !0);
    };
    handleVoiceStateUpdates = () => {
        p() ? this.idleTimeout.start(f, h, !1) : this.idleTimeout.stop();
    };
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        CONNECTION_CLOSED: this.handleConnectionClosed,
        EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect,
    };
}
let g = new m();
