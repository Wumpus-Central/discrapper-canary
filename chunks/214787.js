"use strict";
n.d(t, { A: () => h }), n(827343);
var i = n(439372),
    r = n(736056),
    a = n(710195),
    s = n(280450),
    l = n(734057),
    o = n(453028),
    d = n(763827),
    c = n(821578);
n(17928);
var u = n(558076),
    _ = (n(360729), n(739820));
let E = { x: 50, y: 50 };
class A extends i.A {
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
        this.stores = new Map().set(r.A, this.reapplyForExperimentUpdate).set(a.A, this.reapplyForExperimentUpdate);
    }
    _terminate() {}
    reapplyForExperimentUpdate = () => {};
    isLivingRoomAvailable() {
        return !1;
    }
    apply() {
        if (!o.Ay.getAudioMixerSettings().enabled) return;
        let e = d.A.getChannelId();
        if (null == e || !this.isLivingRoomAvailable() || l.A.getChannel(e)?.isGuildStageVoice()) return;
        let t = (function (e) {
            let { users: t, currentUserId: n, channelId: i } = e,
                r = t.get(n)?.position ?? null,
                a = u.A.getRoom(i)?.background ?? c.I.DEFAULT,
                { aspectRatio: s } = _.iX[a];
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
                                    r = t ?? E;
                                return {
                                    worldX: ((e.x - r.x) / 100) * i * 8,
                                    worldY: 0,
                                    worldZ: ((e.y - r.y) / 100) * 8,
                                };
                            })(n, r, { aspectRatio: s }),
                        ];
                    }),
            );
        })({ users: u.A.getRoomUsers(e), currentUserId: s.default.getId(), channelId: e });
        o.Ay.getMediaEngine().eachConnection((e) => {
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
let h = new A();
