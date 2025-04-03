n.d(t, { Z: () => E }), n(47120);
var r = n(846519),
    i = n(904245),
    o = n(287734),
    a = n(147913),
    s = n(317381),
    l = n(592125),
    c = n(979651),
    u = n(938475),
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
    let e = c.Z.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.Z.getChannel(e);
    return !(null == t || !t.isPrivate() || t.recipients.length > 1 || u.ZP.countVoiceStatesForChannel(e) > 1) && null == s.ZP.getSelfEmbeddedActivityForChannel(e);
}
function m() {
    if (!h()) return;
    let e = c.Z.getCurrentClientVoiceChannelId(null);
    null != e && (i.Z.sendBotMessage(e, d.NW.formatToPlainString(d.t.XYof5O, { number: _ })), o.default.selectVoiceChannel(null));
}
class g extends a.Z {
    constructor(...e) {
        super(...e),
            f(this, 'idleTimeout', new r.V7()),
            f(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            f(this, 'handleEmbeddedActivityDisconnect', () => {
                h() && this.idleTimeout.start(p, m, !0);
            }),
            f(this, 'handleVoiceStateUpdates', () => {
                if (!h()) return void this.idleTimeout.stop();
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
