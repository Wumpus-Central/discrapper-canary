"use strict";
n.d(t, { A: () => g });
var i = n(451988),
    r = n(439372),
    s = n(855511),
    a = n(952818),
    o = n(871633),
    l = n(235058),
    u = n(763827),
    c = n(461213),
    d = n(485296),
    _ = n(607567),
    f = n(927813),
    h = n(95561),
    p = n(652215);
let E = +f.A.Millis.MINUTE;
class m extends r.A {
    _currentUserSpeaking = !1;
    _anyoneElseSpeaking = !1;
    _voiceChannelId;
    _reportInterval;
    _initialize() {
        __OVERLAY__
            ? (this.stores = new Map())
            : ((this.stores = new Map()
                  .set(d.A, () => this._handleSpeakingStoreChanged())
                  .set(u.A, () => this._handleRTCConnectionStoreChanged())),
              this._reset());
    }
    _handleRTCConnectionStoreChanged = () => {
        let e = u.A.getChannelId();
        if (this._voiceChannelId !== e) {
            if (((this._voiceChannelId = e), null == e)) return void this._reset();
            null == this._reportInterval &&
                ((this._reportInterval = new i.IX()),
                this._reportInterval.start(E, () => {
                    this._trackStartSpeaking(), this._trackStartListening();
                }));
        }
    };
    _handleSpeakingStoreChanged = () => {
        let e = d.A.isCurrentUserSpeaking();
        this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
        let t = d.A.isAnyoneElseSpeaking();
        this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
    };
    _reset() {
        (this._currentUserSpeaking = !1),
            (this._anyoneElseSpeaking = !1),
            null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = u.A.getChannelId(),
                t = u.A.getGuildId();
            (0, h.zV)(p.HAw.START_SPEAKING, {
                mode: l.Ay.getMode(),
                priority: d.A.isCurrentUserPrioritySpeaking(),
                channel: e,
                server: t,
                channel_id: e,
                guild_id: t,
                rtc_connection_id: u.A.getRTCConnectionId(),
                media_session_id: u.A.getMediaSessionId(),
                voice_state_count: _.Ay.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata(),
                ...u.A.getPacketStats(),
            });
        }
    }
    _trackStartListening() {
        if (l.Ay.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = u.A.getChannelId(),
            t = u.A.getGuildId();
        (0, h.zV)(p.HAw.START_LISTENING, {
            mute: l.Ay.isMute(),
            anyone_priority: d.A.isAnyonePrioritySpeaking(),
            channel: e,
            server: t,
            channel_id: e,
            guild_id: t,
            rtc_connection_id: u.A.getRTCConnectionId(),
            media_session_id: u.A.getMediaSessionId(),
            voice_state_count: _.Ay.countVoiceStatesForChannel(this._voiceChannelId),
            ...this.getGameMetadata(),
        });
    }
    _terminate() {
        this._reset(),
            d.A.removeChangeListener(this._handleSpeakingStoreChanged),
            u.A.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = c.A.findActivity((e) => e.type === p.$pd.PLAYING),
            t = a.Ay.getCurrentGameForAnalytics();
        return {
            game_platform: (0, s.A)(e),
            game_name: null != e ? e.name : null,
            game_exe_name: null != t ? t.exeName : null,
            game_id: null != e ? e.application_id : null,
            game_distributor: null != t ? t.distributor : null,
            game_distributor_game_id: null != t ? t.sku : null,
            game_metadata: null != t ? (0, o.MT)(t) : null,
        };
    }
}
let g = new m();
