n.d(t, { A: () => T });
var i = n(350835),
    r = n(451988),
    a = n(439372),
    s = n(855511),
    l = n(952818),
    o = n(871633),
    d = n(999926),
    c = n(763827),
    u = n(461213),
    _ = n(485296),
    E = n(607567),
    A = n(927813),
    h = n(666860),
    f = n(652215);
let I = +A.A.Millis.MINUTE;
class p extends a.A {
    _currentUserSpeaking = !1;
    _anyoneElseSpeaking = !1;
    _voiceChannelId;
    _reportInterval;
    _initialize() {
        __OVERLAY__
            ? (this.stores = new Map())
            : ((this.stores = new Map()
                  .set(_.A, () => this._handleSpeakingStoreChanged())
                  .set(c.A, () => this._handleRTCConnectionStoreChanged())),
              this._reset());
    }
    _handleRTCConnectionStoreChanged = () => {
        let e = c.A.getChannelId();
        if (this._voiceChannelId !== e) {
            if (((this._voiceChannelId = e), null == e)) return void this._reset();
            null == this._reportInterval &&
                ((this._reportInterval = new r.IX()),
                this._reportInterval.start(I, () => {
                    (this._trackStartSpeaking(), this._trackStartListening());
                }));
        }
    };
    _handleSpeakingStoreChanged = () => {
        let e = _.A.isCurrentUserSpeaking();
        this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
        let t = _.A.isAnyoneElseSpeaking();
        this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
    };
    _reset() {
        ((this._currentUserSpeaking = !1),
            (this._anyoneElseSpeaking = !1),
            null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null)));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = c.A.getChannelId(),
                t = c.A.getGuildId();
            (0, h.zV)(f.HAw.START_SPEAKING, {
                mode: d.Ay.getMode(),
                priority: _.A.isCurrentUserPrioritySpeaking(),
                channel: e,
                server: t,
                channel_id: e,
                guild_id: t,
                rtc_connection_id: c.A.getRTCConnectionId(),
                media_session_id: c.A.getMediaSessionId(),
                voice_state_count: E.Ay.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata(),
                ...c.A.getPacketStats(),
            });
        }
    }
    _trackStartListening() {
        if (d.Ay.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = c.A.getChannelId(),
            t = c.A.getGuildId();
        (0, h.zV)(f.HAw.START_LISTENING, {
            mute: d.Ay.isMute(),
            anyone_priority: _.A.isAnyonePrioritySpeaking(),
            channel: e,
            server: t,
            channel_id: e,
            guild_id: t,
            rtc_connection_id: c.A.getRTCConnectionId(),
            media_session_id: c.A.getMediaSessionId(),
            voice_state_count: E.Ay.countVoiceStatesForChannel(this._voiceChannelId),
            ...this.getGameMetadata(),
        });
    }
    _terminate() {
        (this._reset(),
            _.A.removeChangeListener(this._handleSpeakingStoreChanged),
            c.A.removeChangeListener(this._handleRTCConnectionStoreChanged));
    }
    getGameMetadata() {
        let e = u.A.findActivity((e) => e.type === i.$.PLAYING),
            t = l.Ay.getCurrentGameForAnalytics();
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
let T = new p();
