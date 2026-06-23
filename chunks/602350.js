"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(495544),
    s = n(408822),
    a = n(558076),
    o = n(360729),
    l = n(765402);
let u = null,
    c = null;
class d extends i.A {
    actions = {
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
        GUILD_ROOM_CONNECT: (e) => this.handleGuildRoomConnect(e),
    };
    async handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            let { userId: t, guildId: n, channelId: i } = e;
            if (t === r.default.getId() && i !== u) {
                if (
                    (null != u &&
                        null != c &&
                        o.A.getCurrentConfig({ guildId: c, location: "VOICE_STATE_UPDATE" }).enabled &&
                        (await (0, s.x2)(c, u)),
                    null != i && null != n)
                ) {
                    let e =
                        a.A.getPendingPosition() ??
                        (function (e) {
                            let { seats: t } = l.iX[l.I3.DEFAULT],
                                n = a.A.getRoomUsers(e),
                                i = t.findIndex(
                                    (e) =>
                                        ![...n.values()].some(
                                            (t) => t.position.x === e.position.x && t.position.y === e.position.y,
                                        ),
                                );
                            return -1 === i ? null : t[i].position;
                        })(i);
                    null != e &&
                        o.A.getCurrentConfig({ guildId: n, location: "VOICE_STATE_UPDATE" }).enabled &&
                        (0, s.tB)(n, i, e);
                }
                (u = i), (c = n);
            }
        }
    }
    handleGuildRoomConnect(e) {
        let { room: t, guildId: n, pendingPosition: i } = e;
        if (null == i || null == n) return;
        let a = r.default.getId(),
            o = t.users.get(a)?.position;
        (null == o || (0 === o.x && 0 === o.y)) && (0, s.AQ)(n, t.roomId, { user_position: i });
    }
}
let _ = new d();
