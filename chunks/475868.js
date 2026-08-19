"use strict";
n.d(t, { A: () => h });
var i = n(827343),
    r = n(439372),
    a = n(736056),
    s = n(710195),
    l = n(280450),
    o = n(734057),
    d = n(966497),
    c = n(763827),
    u = n(470741),
    _ = n(558076),
    E = n(360729);
class A extends r.A {
    actions = {
        AUDIO_SET_AUDIO_MIXER_SETTINGS: () => this.apply(),
        RTC_CONNECTION_STATE: () => this.apply(),
        RTC_CONNECTION_USERS_MERGED: () => this.apply(),
        MEDIA_SESSION_JOINED: () => this.apply(),
        GUILD_ROOM_CONNECT: () => this.apply(),
        GUILD_ROOM_UPDATE: () => this.apply(),
        GUILD_ROOM_LOCAL_UPDATE: () => this.apply(),
        GUILD_ROOM_DISCONNECT: () => this.apply(),
    };
    _initialize() {
        this.stores = new Map().set(a.A, this.reapplyForExperimentUpdate).set(s.A, this.reapplyForExperimentUpdate);
    }
    _terminate() {}
    reapplyForExperimentUpdate = () => {
        let e = d.Ay.getAudioMixerSettings();
        i.A.setAudioMixerSettings(e), this.apply();
    };
    isLivingRoomAvailable() {
        let e = c.A.getGuildId();
        return (
            null != e &&
            E.A.getCurrentConfig({ guildId: e, location: "GuildRoomSpatialAudioManager" }, { autoTrackExposure: !1 })
                .interactionsEnabled
        );
    }
    apply() {
        if (!d.Ay.getAudioMixerSettings().enabled) return;
        let e = c.A.getChannelId();
        if (null == e || !this.isLivingRoomAvailable() || o.A.getChannel(e)?.isGuildStageVoice()) return;
        let t = (0, u.L)({ users: _.A.getRoomUsers(e), currentUserId: l.default.getId(), channelId: e });
        d.Ay.getMediaEngine().eachConnection((e) => {
            for (let [n, i] of Object.entries(t)) e.setUserPosition(n, (0, u.aQ)(i));
        });
    }
}
let h = new A();
