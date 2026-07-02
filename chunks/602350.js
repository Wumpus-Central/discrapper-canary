"use strict";
n.d(t, { A: () => h });
var i = n(439372),
    r = n(495544),
    s = n(734057),
    a = n(408822),
    o = n(558076),
    l = n(360729),
    u = n(765402);
let d = null,
    c = null;
class _ extends i.A {
    actions = {
        VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
        GUILD_ROOM_CONNECT: (e) => this.handleGuildRoomConnect(e),
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: (e) => this.handleEmbeddedActivityLaunchSuccess(e),
    };
    isExperimentEnabled(e, t) {
        return l.A.getCurrentConfig({ guildId: e, location: t }).enabled;
    }
    async handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            let { userId: t, guildId: n, channelId: i } = e;
            if (t === r.default.getId() && i !== d) {
                if (
                    (null != d &&
                        null != c &&
                        this.isExperimentEnabled(c, "VOICE_STATE_UPDATE") &&
                        (await (0, a.x2)(c, d)),
                    null != i && null != n)
                ) {
                    let e =
                        o.A.getPendingPosition() ??
                        (function (e) {
                            let { seats: t } = u.iX[u.I3.DEFAULT],
                                n = o.A.getRoomUsers(e),
                                i = t.findIndex(
                                    (e) =>
                                        ![...n.values()].some(
                                            (t) => t.position.x === e.position.x && t.position.y === e.position.y,
                                        ),
                                );
                            return -1 === i ? null : t[i].position;
                        })(i);
                    null != e && this.isExperimentEnabled(n, "VOICE_STATE_UPDATE") && (0, a.tB)(n, i, e);
                }
                (d = i), (c = n);
            }
        }
    }
    handleGuildRoomConnect(e) {
        let { room: t, guildId: n, pendingPosition: i } = e;
        if (null == i || null == n) return;
        let s = r.default.getId(),
            o = t.users.get(s)?.position;
        (null == o || (0 === o.x && 0 === o.y)) && (0, a.AQ)(n, t.roomId, { user_position: i });
    }
    handleEmbeddedActivityLaunchSuccess(e) {
        if (null == e.channelId) return;
        let t = s.A.getChannel(e.channelId);
        null == t ||
            !this.isExperimentEnabled(t.guild_id, "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS") ||
            (o.A.isVisible(e.channelId) && (0, a.zD)(e.channelId, !0));
    }
}
let h = new _();
