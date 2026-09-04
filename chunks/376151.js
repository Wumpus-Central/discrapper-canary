n.d(t, { A: () => p });
var i = n(451988),
    r = n(439372),
    a = n(855511),
    s = n(952818),
    l = n(871633),
    o = n(303277),
    d = n(763827),
    c = n(461213),
    u = n(485296),
    _ = n(607567),
    E = n(927813),
    A = n(95561),
    h = n(652215);
let I = +E.A.Millis.MINUTE;
class f extends r.A {
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
                this._reportInterval.start(I, () => {
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
            (0, A.zV)(h.HAw.START_SPEAKING, {
                mode: o.Ay.getMode(),
                priority: u.A.isCurrentUserPrioritySpeaking(),
                channel: e,
                server: t,
                channel_id: e,
                guild_id: t,
                rtc_connection_id: d.A.getRTCConnectionId(),
                media_session_id: d.A.getMediaSessionId(),
                voice_state_count: _.Ay.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata(),
                ...d.A.getPacketStats(),
            });
        }
    }
    _trackStartListening() {
        if (o.Ay.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = d.A.getChannelId(),
            t = d.A.getGuildId();
        (0, A.zV)(h.HAw.START_LISTENING, {
            mute: o.Ay.isMute(),
            anyone_priority: u.A.isAnyonePrioritySpeaking(),
            channel: e,
            server: t,
            channel_id: e,
            guild_id: t,
            rtc_connection_id: d.A.getRTCConnectionId(),
            media_session_id: d.A.getMediaSessionId(),
            voice_state_count: _.Ay.countVoiceStatesForChannel(this._voiceChannelId),
            ...this.getGameMetadata(),
        });
    }
    _terminate() {
        this._reset(),
            u.A.removeChangeListener(this._handleSpeakingStoreChanged),
            d.A.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = c.A.findActivity((e) => e.type === h.$pd.PLAYING),
            t = s.Ay.getCurrentGameForAnalytics();
        return {
            game_platform: (0, a.A)(e),
            game_name: null != e ? e.name : null,
            game_exe_name: null != t ? t.exeName : null,
            game_id: null != e ? e.application_id : null,
            game_distributor: null != t ? t.distributor : null,
            game_distributor_game_id: null != t ? t.sku : null,
            game_metadata: null != t ? (0, l.MT)(t) : null,
        };
    }
}
let p = new f();
