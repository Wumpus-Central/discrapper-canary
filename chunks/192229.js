(n.d(t, { Z: () => _ }), n(388685));
var r = n(872810),
    i = n(147913),
    a = n(994339),
    o = n(199902),
    s = n(375954),
    l = n(158776),
    c = n(172029),
    u = n(981631);
function d(e, t, n) {
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
class f extends i.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            var n, i;
            if (null == e.channelId || !0 !== e.selfStream) continue;
            let t = c.Z.getPendingRequestForUser(e.userId);
            if (null == t) continue;
            let d = s.Z.getMessage(e.channelId, t);
            if ((null == d || null == (n = d.activity) ? void 0 : n.type) !== u.mFx.STREAM_REQUEST || (null == (i = d.application) ? void 0 : i.id) == null) continue;
            let f = l.Z.getApplicationActivity(e.userId, d.application.id, e.guildId);
            if (!(0, a.Z)(f, d, d.application.id)) continue;
            let _ = o.Z.getStreamForUser(e.userId, e.guildId);
            null != _ && r.rn(_);
        }
    }
    constructor(...e) {
        (super(...e), d(this, 'actions', { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates }));
    }
}
let _ = new f();
