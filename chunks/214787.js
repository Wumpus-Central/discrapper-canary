"use strict";
n.d(t, { A: () => f });
var i = n(827343),
    r = n(439372),
    a = n(736056),
    s = n(710195),
    l = n(280450),
    o = n(734057),
    d = n(293246),
    c = n(763827),
    u = n(821578);
n(17928);
var _ = n(558076),
    E = n(360729),
    A = n(4264);
let h = { x: 50, y: 50 };
class I extends r.A {
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
        let t = (function (e) {
            let { users: t, currentUserId: n, channelId: i } = e,
                r = t.get(n)?.position ?? null,
                a = _.A.getRoom(i)?.background ?? u.I.DEFAULT,
                { aspectRatio: s } = A.iX[a];
            return Object.fromEntries(
                [...t.values()]
                    .filter((e) => {
                        let { userId: t } = e;
                        return t !== n;
                    })
                    .map((e) => {
                        let { userId: t, position: n } = e;
                        return [
                            t,
                            (function (e, t, n) {
                                let { aspectRatio: i } = n,
                                    r = t ?? h;
                                return {
                                    worldX: ((e.x - r.x) / 100) * i * 8,
                                    worldY: 0,
                                    worldZ: ((e.y - r.y) / 100) * 8,
                                };
                            })(n, r, { aspectRatio: s }),
                        ];
                    }),
            );
        })({ users: _.A.getRoomUsers(e), currentUserId: l.default.getId(), channelId: e });
        d.Ay.getMediaEngine().eachConnection((e) => {
            for (let [n, i] of Object.entries(t))
                e.setUserPosition(
                    n,
                    (function (e) {
                        let { worldX: t, worldY: n, worldZ: i } = e;
                        return { x: t, y: n, z: i };
                    })(i),
                );
        });
    }
}
let f = new I();
