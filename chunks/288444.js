(n.d(t, { Z: () => E }), n(388685));
var r = n(846519),
    i = n(904245),
    a = n(287734),
    o = n(147913),
    s = n(317381),
    l = n(592125),
    c = n(979651),
    u = n(938475),
    d = n(388032);
function _(e, t, n) {
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
let f = 3,
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
    null != e && (i.Z.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5O, { number: f })), a.default.selectVoiceChannel(null));
}
class g extends o.Z {
    constructor(...e) {
        (super(...e),
            _(this, 'idleTimeout', new r.V7()),
            _(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            _(this, 'handleEmbeddedActivityDisconnect', () => {
                h() && this.idleTimeout.start(p, m, !0);
            }),
            _(this, 'handleVoiceStateUpdates', () => {
                if (!h()) return void this.idleTimeout.stop();
                this.idleTimeout.start(p, m, !1);
            }),
            _(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
            }));
    }
}
let E = new g();
