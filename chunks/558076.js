"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(495544),
    a = n(309010);
let o = new Map(),
    l = {},
    u = {},
    c = {},
    d = null,
    _ = {},
    h = !1;
function f() {
    let e = a.A.getVoiceChannelId();
    null != e && (_[e] = _[e] ?? !0);
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default, a.A), this.syncWith([a.A], f);
    }
    getRoom(e) {
        return u[e] ?? l;
    }
    getRoomUsers(e) {
        return c[e] ?? o;
    }
    getPendingPosition() {
        return d;
    }
    isVisible(e) {
        return _[e] ?? !0;
    }
}
let E = new p(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e,
            { users: i, ...r } = t;
        (u[t.roomId] = r), (c[t.roomId] = i), null != n && null != d && (d = null);
    },
    GUILD_ROOM_DISCONNECT: function (e) {
        let { userId: t, roomId: n } = e;
        if (null == u[n]) return !1;
        let i = new Map(c[n]);
        i.delete(t), (c[n] = i), h && t === s.default.getId() && ((_[n] = !0), (h = !1));
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        (u[t.roomId] = i), (c[t.roomId] = n);
    },
    GUILD_ROOM_LOCAL_POSITION_REQUESTED: function (e) {
        let { position: t } = e;
        d = t;
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t, clearLayout: n } = e;
        (_[t] = !_[t]), n && (h = !0);
    },
    GUILD_ROOM_LOCAL_UPDATE: function (e) {
        let { roomId: t, background: n, position: i, statusId: r, statusText: a } = e;
        if (null == u[t]) return !1;
        let o = s.default.getId();
        if ((null != n && (u[t] = { ...u[t], background: n }), null != i || null != r || null != a)) {
            let e = c[t].get(o);
            if (null != e) {
                let n = new Map(c[t]);
                n.set(o, {
                    userId: o,
                    position: i ?? e.position,
                    statusId: r ?? e.statusId,
                    statusText: a ?? e.statusText,
                }),
                    (c[t] = n);
            }
        }
    },
});
