n.d(t, { Z: () => _ }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(872810),
    o = n(147913),
    s = n(569545),
    l = n(199902),
    c = n(944486),
    u = n(45652);
function d(e, t, n) {
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
let f = 1000;
class p extends o.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        u.d.getState().isEnabled && null != t && this.findAndWatchStream();
    }
    findAndWatchStream() {
        let e = c.Z.getVoiceChannelId();
        if (null == e) return;
        let t = l.Z.getAllApplicationStreamsForChannel(e)[0];
        null != t && (0, a.rn)(t);
    }
    constructor(...e) {
        super(...e),
            d(this, "actions", {
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
            }),
            d(
                this,
                "handleVoiceStateUpdates",
                i().debounce((e) => {
                    let { voiceStates: t } = e;
                    u.d.getState().isEnabled &&
                        t.forEach((e) => {
                            let t = l.Z.getStreamForUser(e.userId, e.guildId),
                                n = l.Z.getActiveStreamForUser(e.userId, e.guildId);
                            null != t && null == n
                                ? (0, a.rn)(t)
                                : null == t && null != n && ((0, a.g)((0, s.V9)(n), !1, !0), this.findAndWatchStream());
                        });
                }, f),
            );
    }
}
let _ = new p();
