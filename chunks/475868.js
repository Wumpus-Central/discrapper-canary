"use strict";
n.d(t, { A: () => I });
var i = n(459838),
    r = n(827343),
    a = n(439372),
    s = n(736056),
    l = n(280450),
    o = n(451409),
    d = n(763827),
    c = n(470741),
    u = n(558076),
    _ = n(360729),
    E = n(765402),
    A = n(829997);
class h extends a.A {
    actions = {
        AUDIO_SET_AUDIO_MIXER_SETTINGS: () => this.apply(),
        RTC_CONNECTION_STATE: () => this.reconcile(),
        RTC_CONNECTION_USERS_MERGED: () => this.apply(),
        MEDIA_SESSION_JOINED: () => this.reconcile(),
        GUILD_ROOM_CONNECT: () => this.apply(),
        GUILD_ROOM_UPDATE: () => this.apply(),
        GUILD_ROOM_LOCAL_UPDATE: () => this.apply(),
        GUILD_ROOM_DISCONNECT: () => this.apply(),
    };
    _initialize() {
        this.stores = new Map().set(s.A, this.reconcile);
    }
    _terminate() {}
    reconcile = () => {
        this.resetModeIfUnavailable(), this.apply();
    };
    isLivingRoomAvailable() {
        let e = d.A.getGuildId();
        return (
            null != e &&
            _.A.getCurrentConfig({ guildId: e, location: "GuildRoomSpatialAudioManager" }, { autoTrackExposure: !1 })
                .experimental
        );
    }
    resetModeIfUnavailable() {
        let e = o.Ay.getAudioMixerSettings();
        e.mode !== E.sg ||
            null == d.A.getChannelId() ||
            this.isLivingRoomAvailable() ||
            r.A.setAudioMixerSettings({ ...e, mode: A.b.mode }, i.x.DEFAULT);
    }
    apply() {
        let e = o.Ay.getAudioMixerSettings();
        if (!e.enabled || e.mode !== E.sg) return;
        let t = d.A.getChannelId();
        if (null == t || !this.isLivingRoomAvailable()) return;
        let n = (0, c.L)({
            users: u.A.getRoomUsers(t),
            currentUserId: l.default.getId(),
            listenerHeight: e.listenerHeight,
        });
        o.Ay.getMediaEngine().eachConnection((e) => {
            for (let [t, i] of Object.entries(n)) e.setUserPosition(t, (0, c.aQ)(i));
        });
    }
}
let I = new h();
