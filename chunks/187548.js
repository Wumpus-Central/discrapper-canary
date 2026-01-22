n.d(t, { A: () => _ }), n(896048);
var r = n(367513),
    i = n(401843),
    a = n(439372),
    s = n(313961),
    o = n(652896),
    l = n(616356),
    c = n(309010),
    u = n(945041),
    d = n(806931);
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
class p extends a.A {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        u.U.getState().isEnabled && null != t && this.findAndWatchStream();
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        if (!u.U.getState().isEnabled) return;
        let n = c.A.getVoiceChannelId();
        null != n &&
            t.forEach((e) => {
                if (e.channelId !== n) return;
                let t = l.A.getStreamForUser(e.userId, e.guildId),
                    a = l.A.getActiveStreamForUser(e.userId, e.guildId);
                if (null != t && null == a)
                    return void (0, i.A9)(t, {
                        forceMultiple: !0,
                        forceFocus: !0,
                    });
                if (null == t && null != a) {
                    let e = s.A.getSelectedParticipant(n),
                        t =
                            (null == e ? void 0 : e.type) === d.lp.STREAM &&
                            (null == e ? void 0 : e.id) === (0, o._z)(a);
                    if (((0, i.vN)((0, o._z)(a), !1, !0), !t)) return;
                    let c = l.A.getAllActiveStreamsForChannel(n).find((e) => e.ownerId !== a.ownerId);
                    if (null == c) return;
                    r.A.selectParticipant(n, (0, o._z)(c));
                }
            });
    }
    findAndWatchStream() {
        let e = c.A.getVoiceChannelId();
        if (null == e) return;
        let t = l.A.getAllApplicationStreamsForChannel(e)[0];
        null != t && (0, i.A9)(t);
    }
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
            });
    }
}
let _ = new p();
