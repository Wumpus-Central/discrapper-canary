n.d(t, { A: () => f });
var i = n(451988),
    r = n(148494),
    a = n(730852),
    s = n(439372),
    l = n(933958),
    o = n(734057),
    d = n(977997),
    c = n(607567);
let u = (0, n(945810).mj)({
    kind: "user",
    name: "2026-10-camp-in-dm",
    defaultConfig: { disableIdleDisconnect: !1 },
    variations: { 1: { disableIdleDisconnect: !0 } },
});
var _ = n(105292);
function E() {
    let e = d.A.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = o.A.getChannel(e);
    return (
        !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.Ay.countVoiceStatesForChannel(e) > 1) &&
        null == l.Ay.getSelfEmbeddedActivityForChannel(e) &&
        !u.getConfig({ location: "CallIdleManager" }).disableIdleDisconnect
    );
}
function A() {
    if (!E()) return;
    let e = d.A.getCurrentClientVoiceChannelId(null);
    null != e &&
        (r.A.sendBotMessage(e, _.intl.formatToPlainString(_.t.XYof5G, { number: 3 })),
        a.default.selectVoiceChannel(null));
}
class h extends s.A {
    idleTimeout = new i.Ep();
    handleConnectionClosed = () => {
        this.idleTimeout.stop();
    };
    handleEmbeddedActivityDisconnect = () => {
        E() && this.idleTimeout.start(18e4, A, !0);
    };
    handleVoiceStateUpdates = () => {
        E() ? this.idleTimeout.start(18e4, A, !1) : this.idleTimeout.stop();
    };
    actions = {
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        CONNECTION_CLOSED: this.handleConnectionClosed,
        EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect,
    };
}
let f = new h();
