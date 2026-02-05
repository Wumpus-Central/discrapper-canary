"use strict";
n.d(t, { A: () => f });
var r = n(367513),
    i = n(401843),
    a = n(439372),
    s = n(313961),
    o = n(652896),
    l = n(616356),
    u = n(309010),
    c = n(945041),
    d = n(806931);
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
        let n = u.A.getVoiceChannelId();
        null != n &&
            t.forEach((e) => {
                if (e.channelId !== n) return;
                let t = l.A.getStreamForUser(e.userId, e.guildId),
                    a = l.A.getActiveStreamForUser(e.userId, e.guildId);
                if (null != t && null == a) return void (0, i.A9)(t, { forceMultiple: !0, forceFocus: !0 });
                if (null == t && null != a) {
                    let e = s.A.getSelectedParticipant(n),
                        t = e?.type === d.lp.STREAM && e?.id === (0, o._z)(a);
                    if (((0, i.vN)((0, o._z)(a), !1, !0), !t)) return;
                    let u = l.A.getAllActiveStreamsForChannel(n).find((e) => e.ownerId !== a.ownerId);
                    if (null == u) return;
                    r.A.selectParticipant(n, (0, o._z)(u));
                }
            });
    }
    findAndWatchStream() {
        let e = u.A.getVoiceChannelId();
        if (null == e) return;
        let t = l.A.getAllApplicationStreamsForChannel(e)[0];
        null != t && (0, i.A9)(t);
    }
}
let f = new _();
