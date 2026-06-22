"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(309010);
let a = {},
    o = null,
    l = {};
function u() {
    let e = s.A.getVoiceChannelId();
    null != e && (l[e] = l[e] ?? !0);
}
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], u);
    }
    getRoom(e) {
        return a[e];
    }
    getPendingPosition() {
        return o;
    }
    isVisible(e) {
        return l[e] ?? !0;
    }
}
let d = new c(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e;
        (a[t.roomId] = t), null != n && null != o && (o = null);
    },
    GUILD_ROOM_DISCONNECT: function (e) {
        let { userId: t, roomId: n } = e,
            i = a[n].users.filter((e) => e.userId !== t);
        a[n] = { ...a[n], users: i };
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e;
        a[t.roomId] = t;
    },
    GUILD_ROOM_LOCAL_POSITION_REQUESTED: function (e) {
        let { position: t } = e;
        o = t;
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t } = e;
        l[t] = !l[t];
    },
});
