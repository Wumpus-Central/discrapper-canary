n.d(t, { Z: () => _ }), n(388685);
var r = n(475179),
    i = n(872810),
    a = n(147913),
    o = n(358221),
    s = n(569545),
    l = n(199902),
    c = n(944486),
    u = n(45652),
    d = n(354459);
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
class p extends a.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        u.d.getState().isEnabled && null != t && this.findAndWatchStream();
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        if (!u.d.getState().isEnabled) return;
        let n = c.Z.getVoiceChannelId();
        null != n &&
            t.forEach((e) => {
                if (e.channelId !== n) return;
                let t = l.Z.getStreamForUser(e.userId, e.guildId),
                    a = l.Z.getActiveStreamForUser(e.userId, e.guildId);
                if (null != t && null == a)
                    return void (0, i.rn)(t, {
                        forceMultiple: !0,
                        forceFocus: !0,
                    });
                if (null == t && null != a) {
                    let e = o.Z.getSelectedParticipant(n),
                        t =
                            (null == e ? void 0 : e.type) === d.fO.STREAM &&
                            (null == e ? void 0 : e.id) === (0, s.V9)(a);
                    if (((0, i.g)((0, s.V9)(a), !1, !0), !t)) return;
                    let c = l.Z.getAllActiveStreamsForChannel(n).find((e) => e.ownerId !== a.ownerId);
                    if (null == c) return;
                    r.Z.selectParticipant(n, (0, s.V9)(c));
                }
            });
    }
    findAndWatchStream() {
        let e = c.Z.getVoiceChannelId();
        if (null == e) return;
        let t = l.Z.getAllApplicationStreamsForChannel(e)[0];
        null != t && (0, i.rn)(t);
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
