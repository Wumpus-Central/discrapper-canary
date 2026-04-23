"use strict";
n.d(t, { A: () => p });
var i = n(451988),
    r = n(439372),
    s = n(855511),
    a = n(328153),
    o = n(871633),
    l = n(969341),
    d = n(763827),
    _ = n(461213),
    u = n(485296),
    c = n(607567),
    E = n(927813),
    h = n(58149),
    m = n(652215);
let f = +E.A.Millis.MINUTE;
class g extends r.A {
    _currentUserSpeaking = !1;
    _anyoneElseSpeaking = !1;
    _voiceChannelId;
    _reportInterval;
    _initialize() {
        __OVERLAY__
            ? (this.stores = new Map())
            : ((this.stores = new Map()
                  .set(u.A, () => this._handleSpeakingStoreChanged())
                  .set(d.A, () => this._handleRTCConnectionStoreChanged())),
              this._reset());
    }
    _handleRTCConnectionStoreChanged = () => {
        let e = d.A.getChannelId();
        if (this._voiceChannelId !== e) {
            if (((this._voiceChannelId = e), null == e)) return void this._reset();
            null == this._reportInterval &&
                ((this._reportInterval = new i.IX()),
                this._reportInterval.start(f, () => {
                    this._trackStartSpeaking(), this._trackStartListening();
                }));
        }
    };
    _handleSpeakingStoreChanged = () => {
        let e = u.A.isCurrentUserSpeaking();
        this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
        let t = u.A.isAnyoneElseSpeaking();
        this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
    };
    _reset() {
        (this._currentUserSpeaking = !1),
            (this._anyoneElseSpeaking = !1),
            null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = d.A.getChannelId(),
                t = d.A.getGuildId();
            (0, h.zV)(m.HAw.START_SPEAKING, {
                mode: l.Ay.getMode(),
                priority: u.A.isCurrentUserPrioritySpeaking(),
                channel: e,
                server: t,
                channel_id: e,
                guild_id: t,
                rtc_connection_id: d.A.getRTCConnectionId(),
                media_session_id: d.A.getMediaSessionId(),
                voice_state_count: c.Ay.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata(),
                ...d.A.getPacketStats(),
            });
        }
    }
    _trackStartListening() {
        if (l.Ay.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = d.A.getChannelId(),
            t = d.A.getGuildId();
        (0, h.zV)(m.HAw.START_LISTENING, {
            mute: l.Ay.isMute(),
            anyone_priority: u.A.isAnyonePrioritySpeaking(),
            channel: e,
            server: t,
            channel_id: e,
            guild_id: t,
            rtc_connection_id: d.A.getRTCConnectionId(),
            media_session_id: d.A.getMediaSessionId(),
            voice_state_count: c.Ay.countVoiceStatesForChannel(this._voiceChannelId),
            ...this.getGameMetadata(),
        });
    }
    _terminate() {
        this._reset(),
            u.A.removeChangeListener(this._handleSpeakingStoreChanged),
            d.A.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = _.A.findActivity((e) => e.type === m.$pd.PLAYING),
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
let p = new g();
