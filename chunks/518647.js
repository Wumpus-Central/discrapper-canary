n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(73153),
    i = n(272355),
    l = n(961350),
    a = n(430452);

function s(e, t, n) {
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
class o extends i.A {
    _initialize() {
        __OVERLAY__ ||
            (r.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            r.h.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            r.h.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            r.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _terminate() {
        __OVERLAY__ ||
            (r.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            r.h.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            r.h.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            r.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    constructor(...e) {
        super(...e),
            s(this, "_playSound", function (e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    arguments.length > 2 && arguments[2],
                    arguments.length > 3 && arguments[3];
            }),
            s(this, "_stopAndClearSounds", () => {}),
            s(this, "_handleToggleSelfDeafened", () => {
                a.A.isDeaf() && this._stopAndClearSounds();
            }),
            s(this, "_handleSoundboardSoundReceived", (e) => {
                let { soundId: t, soundVolume: n, userId: r, channelId: i } = e;
                if (null != t && r !== l.default.getId()) return this._playSound(t, n, r, i);
            }),
            s(this, "_handleSoundboardSoundPlayLocally", (e) => {
                let { sound: t, channelId: n } = e,
                    r = l.default.getId();
                return this._playSound(t.soundId, t.volume, r, n);
            }),
            s(this, "_handleVoiceChannelSelect", () => {
                this._stopAndClearSounds();
            });
    }
}
