n.d(t, { A: () => E }), n(896048);
var r = n(451988),
    i = n(843472),
    a = n(956793),
    s = n(439372),
    o = n(933958),
    l = n(734057),
    c = n(977997),
    u = n(607567),
    d = n(985018);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = 3,
    _ = 180000;
function h() {
    let e = c.A.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.A.getChannel(e);
    return (
        !(null == t || !t.isPrivate() || t.recipients.length > 1 || u.Ay.countVoiceStatesForChannel(e) > 1) &&
        null == o.Ay.getSelfEmbeddedActivityForChannel(e)
    );
}
function m() {
    if (!h()) return;
    let e = c.A.getCurrentClientVoiceChannelId(null);
    null != e &&
        (i.A.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5G, { number: p })),
        a.default.selectVoiceChannel(null));
}
class g extends s.A {
    constructor(...e) {
        super(...e),
            f(this, "idleTimeout", new r.Ep()),
            f(this, "handleConnectionClosed", () => {
                this.idleTimeout.stop();
            }),
            f(this, "handleEmbeddedActivityDisconnect", () => {
                h() && this.idleTimeout.start(_, m, !0);
            }),
            f(this, "handleVoiceStateUpdates", () => {
                h() ? this.idleTimeout.start(_, m, !1) : this.idleTimeout.stop();
            }),
            f(this, "actions", {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect,
            });
    }
}
let E = new g();
