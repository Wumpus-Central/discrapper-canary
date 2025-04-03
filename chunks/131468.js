n.d(t, { Z: () => s }), n(47120);
var r = n(570140),
    i = n(317770),
    l = n(314897),
    a = n(131951);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s extends i.Z {
    _initialize() {
        __OVERLAY__ || (r.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleSoundboardSoundReceived), r.Z.subscribe('GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', this._handleSoundboardSoundPlayLocally), r.Z.subscribe('VOICE_CHANNEL_SELECT', this._handleVoiceChannelSelect), r.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this._handleToggleSelfDeafened));
    }
    _terminate() {
        __OVERLAY__ || (r.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleSoundboardSoundReceived), r.Z.unsubscribe('GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', this._handleSoundboardSoundPlayLocally), r.Z.unsubscribe('VOICE_CHANNEL_SELECT', this._handleVoiceChannelSelect), r.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this._handleToggleSelfDeafened));
    }
    constructor(...e) {
        super(...e),
            o(this, '_playSound', function (e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3];
            }),
            o(this, '_stopAndClearSounds', () => {}),
            o(this, '_handleToggleSelfDeafened', () => {
                a.Z.isDeaf() && this._stopAndClearSounds();
            }),
            o(this, '_handleSoundboardSoundReceived', (e) => {
                let { soundId: t, soundVolume: n, userId: r, channelId: i } = e;
                if (null != t && r !== l.default.getId()) return this._playSound(t, n, r, i);
            }),
            o(this, '_handleSoundboardSoundPlayLocally', (e) => {
                let { sound: t, channelId: n } = e,
                    r = l.default.getId();
                return this._playSound(t.soundId, t.volume, r, n);
            }),
            o(this, '_handleVoiceChannelSelect', () => {
                this._stopAndClearSounds();
            });
    }
}
