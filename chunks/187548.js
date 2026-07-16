"use strict";
n.d(t, { A: () => E });
var i = n(367513),
    r = n(401843),
    a = n(439372),
    s = n(313961),
    l = n(652896),
    o = n(616356),
    d = n(309010),
    c = n(945041),
    u = n(806931);
class _ extends a.A {
    actions = {
        VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
    };
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        c.Uq.getState().isEnabled && null != t && this.findAndWatchStream();
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        if (!c.Uq.getState().isEnabled) return;
        let n = d.Ay.getVoiceChannelId();
        null != n &&
            t.forEach((e) => {
                if (e.channelId !== n) return;
                let t = o.A.getStreamForUser(e.userId, e.guildId),
                    a = o.A.getActiveStreamForUser(e.userId, e.guildId);
                if (null != t && null == a) return void (0, r.A9)(t, { forceMultiple: !0, forceFocus: !0 });
                if (null == t && null != a) {
                    let e = s.A.getSelectedParticipant(n),
                        t = e?.type === u.lp.STREAM && e?.id === (0, l._z)(a);
                    if (((0, r.vN)((0, l._z)(a), !1, !0), !t)) return;
                    let d = o.A.getAllActiveStreamsForChannel(n).find((e) => e.ownerId !== a.ownerId);
                    if (null == d) return;
                    i.A.selectParticipant(n, (0, l._z)(d));
                }
            });
    }
    findAndWatchStream() {
        let e = d.Ay.getVoiceChannelId();
        if (null == e) return;
        let t = o.A.getAllApplicationStreamsForChannel(e)[0];
        null != t && (0, r.A9)(t);
    }
}
let E = new _();
