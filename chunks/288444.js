n.d(t, { Z: () => E }), n(47120);
var i = n(846519),
    r = n(904245),
    a = n(287734),
    s = n(147913),
    o = n(317381),
    l = n(592125),
    u = n(979651),
    c = n(938475),
    d = n(388032);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 3,
    p = 180000;
function h() {
    let e = u.Z.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.Z.getChannel(e);
    return !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.ZP.countVoiceStatesForChannel(e) > 1) && null == o.ZP.getSelfEmbeddedActivityForChannel(e);
}
function m() {
    if (!h()) return;
    let e = u.Z.getCurrentClientVoiceChannelId(null);
    null != e && (r.Z.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5O, { number: _ })), a.default.selectVoiceChannel(null));
}
class g extends s.Z {
    constructor(...e) {
        super(...e),
            f(this, 'idleTimeout', new i.V7()),
            f(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            f(this, 'handleEmbeddedActivityDisconnect', () => {
                h() && this.idleTimeout.start(p, m, !0);
            }),
            f(this, 'handleVoiceStateUpdates', () => {
                if (!h()) {
                    this.idleTimeout.stop();
                    return;
                }
                this.idleTimeout.start(p, m, !1);
            }),
            f(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
            });
    }
}
let E = new g();
