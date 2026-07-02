"use strict";
n.d(t, { A: () => g });
var i = n(17928),
    r = n(228366),
    s = n(495544),
    a = n(763827),
    o = n(309010);
let l = new Map(),
    u = {},
    d = {},
    c = {},
    _ = null,
    h = {},
    f = new Map(),
    E = !1;
function p() {
    let e = o.A.getVoiceChannelId();
    null != e && (f.delete(e), (h[e] = h[e] ?? !0));
}
class m extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default, a.A, o.A), this.syncWith([o.A], p);
    }
    getRoom(e) {
        return d[e] ?? u;
    }
    getRoomUsers(e) {
        return c[e] ?? l;
    }
    getPendingPosition() {
        return _;
    }
    getMediaSessionId(e) {
        return f.get(e);
    }
    isVisible(e) {
        return h[e] ?? !0;
    }
}
let g = new m(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e,
            { users: i, ...r } = t;
        (d[t.roomId] = r), (c[t.roomId] = i), null != n && null != _ && (_ = null);
    },
    GUILD_ROOM_DISCONNECT: function (e) {
        let { userId: t, roomId: n } = e;
        if (null == d[n]) return !1;
        let i = new Map(c[n]);
        i.delete(t), (c[n] = i), E && t === s.default.getId() && ((h[n] = !0), (E = !1));
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        d[t.roomId] = i;
        let r = s.default.getId(),
            a = c[t.roomId]?.get(r);
        (c[t.roomId] = n), null != a && c[t.roomId]?.set(r, a);
    },
    GUILD_ROOM_LOCAL_POSITION_REQUESTED: function (e) {
        let { position: t } = e;
        _ = t;
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t, clearLayout: n } = e;
        (h[t] = !h[t]), n && (E = !0);
    },
    GUILD_ROOM_LOCAL_UPDATE: function (e) {
        let { roomId: t, background: n, position: i, statusId: r, statusText: a } = e;
        if (null == d[t]) return !1;
        let o = s.default.getId();
        if ((null != n && (d[t] = { ...d[t], background: n }), null != i || null != r || null != a)) {
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
    MEDIA_SESSION_JOINED: function () {
        let e = a.A.getChannelId(),
            t = a.A.getMediaSessionId();
        null != e && null != t && f.set(e, t);
    },
});
