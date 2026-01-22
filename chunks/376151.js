n.d(t, { A: () => y }), n(896048);
var r = n(451988),
    i = n(439372),
    a = n(855511),
    s = n(15285),
    o = n(847521),
    l = n(430452),
    c = n(383501),
    u = n(461213),
    d = n(485296),
    f = n(607567),
    p = n(927813),
    _ = n(58149),
    h = n(652215);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = +p.A.Millis.MINUTE;
class b extends i.A {
    _initialize() {
        __OVERLAY__
            ? (this.stores = new Map())
            : ((this.stores = new Map()
                  .set(d.A, () => this._handleSpeakingStoreChanged())
                  .set(c.A, () => this._handleRTCConnectionStoreChanged())),
              this._reset());
    }
    _reset() {
        (this._currentUserSpeaking = !1),
            (this._anyoneElseSpeaking = !1),
            null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = c.A.getChannelId(),
                t = c.A.getGuildId();
            (0, _.zV)(
                h.HAw.START_SPEAKING,
                g(
                    {
                        mode: l.A.getMode(),
                        priority: d.A.isCurrentUserPrioritySpeaking(),
                        channel: e,
                        server: t,
                        channel_id: e,
                        guild_id: t,
                        rtc_connection_id: c.A.getRTCConnectionId(),
                        media_session_id: c.A.getMediaSessionId(),
                        voice_state_count: f.Ay.countVoiceStatesForChannel(this._voiceChannelId),
                    },
                    this.getGameMetadata(),
                    c.A.getPacketStats(),
                ),
            );
        }
    }
    _trackStartListening() {
        if (l.A.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = c.A.getChannelId(),
            t = c.A.getGuildId();
        (0, _.zV)(
            h.HAw.START_LISTENING,
            g(
                {
                    mute: l.A.isMute(),
                    anyone_priority: d.A.isAnyonePrioritySpeaking(),
                    channel: e,
                    server: t,
                    channel_id: e,
                    guild_id: t,
                    rtc_connection_id: c.A.getRTCConnectionId(),
                    media_session_id: c.A.getMediaSessionId(),
                    voice_state_count: f.Ay.countVoiceStatesForChannel(this._voiceChannelId),
                },
                this.getGameMetadata(),
            ),
        );
    }
    _terminate() {
        this._reset(),
            d.A.removeChangeListener(this._handleSpeakingStoreChanged),
            c.A.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = u.A.findActivity((e) => e.type === h.$pd.PLAYING),
            t = s.Ay.getCurrentGameForAnalytics();
        return {
            game_platform: (0, a.A)(e),
            game_name: null != e ? e.name : null,
            game_exe_name: null != t ? t.exeName : null,
            game_id: null != e ? e.application_id : null,
            game_distributor: null != t ? t.distributor : null,
            game_distributor_game_id: null != t ? t.sku : null,
            game_metadata: null != t ? (0, o.MT)(t) : null,
        };
    }
    constructor(...e) {
        super(...e),
            m(this, "_currentUserSpeaking", !1),
            m(this, "_anyoneElseSpeaking", !1),
            m(this, "_voiceChannelId", void 0),
            m(this, "_reportInterval", void 0),
            m(this, "_handleRTCConnectionStoreChanged", () => {
                let e = c.A.getChannelId();
                if (this._voiceChannelId !== e) {
                    if (((this._voiceChannelId = e), null == e)) return void this._reset();
                    null == this._reportInterval &&
                        ((this._reportInterval = new r.IX()),
                        this._reportInterval.start(E, () => {
                            this._trackStartSpeaking(), this._trackStartListening();
                        }));
                }
            }),
            m(this, "_handleSpeakingStoreChanged", () => {
                let e = d.A.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
                let t = d.A.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
            });
    }
}
let y = new b();
