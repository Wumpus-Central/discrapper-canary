"use strict";
n.d(t, { A: () => T, i: () => d });
var i = n(17928),
    r = n(228366),
    a = n(280450),
    s = n(763827),
    l = n(309010);
let o = new Map(),
    d = {},
    c = {},
    u = {},
    _ = null,
    E = {},
    A = new Map(),
    h = !1,
    I = {};
function f() {
    let e = l.A.getVoiceChannelId();
    null != e && (A.delete(e), (E[e] = E[e] ?? !0));
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default, s.A, l.A), this.syncWith([l.A], f);
    }
    getRoom(e) {
        return c[e] ?? d;
    }
    getRoomUsers(e) {
        return u[e] ?? o;
    }
    getPendingPosition() {
        return _;
    }
    getMediaSessionId(e) {
        return A.get(e);
    }
    isVisible(e) {
        return E[e] ?? !0;
    }
    getPendingNote(e) {
        return I[e] ?? null;
    }
}
let T = new p(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e,
            { users: i, ...r } = t;
        (c[t.roomId] = r), (u[t.roomId] = i), null != n && null != _ && (_ = null);
    },
    GUILD_ROOM_CONNECT_FAILURE: function (e) {
        let { roomId: t } = e;
        if (null == c[t]) return !1;
        let n = a.default.getId(),
            i = new Map(u[t]);
        i.delete(n), (u[t] = i);
    },
    GUILD_ROOM_DISCONNECT: function (e) {
        let { userId: t, roomId: n } = e;
        if (null == c[n]) return !1;
        let i = new Map(u[n]);
        i.delete(t),
            (u[n] = i),
            h && t === a.default.getId() && ((E[n] = !0), (h = !1)),
            t === a.default.getId() && delete I[n];
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        c[t.roomId] = i;
        let r = a.default.getId(),
            s = u[t.roomId]?.get(r);
        (u[t.roomId] = n), null != s && u[t.roomId]?.set(r, s);
    },
    GUILD_ROOM_UPDATE_FAILURE: function (e) {
        let { originalRoom: t, originalRoomUsers: n } = e,
            i = c[t.roomId];
        if (null == i) return !1;
        c[t.roomId] = { ...i, background: t.background };
        let r = a.default.getId(),
            s = n.get(r);
        if (null == s) {
            let e = new Map(u[t.roomId]);
            e.delete(r), (u[t.roomId] = e);
        } else u[t.roomId]?.set(r, s);
    },
    GUILD_ROOM_FETCH_SUCCESS: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        (c[t.roomId] = i), (u[t.roomId] = n);
    },
    GUILD_ROOM_LOCAL_POSITION_REQUESTED: function (e) {
        let { position: t } = e;
        _ = t;
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t, clearLayout: n } = e;
        (E[t] = !E[t]), n && (h = !0);
    },
    GUILD_ROOM_LOCAL_UPDATE: function (e) {
        let { roomId: t, background: n, position: i, statusId: r, statusText: s } = e;
        if (null == c[t]) return !1;
        let l = a.default.getId();
        if ((null != n && (c[t] = { ...c[t], background: n }), null != i || null != r || null != s)) {
            let e = u[t].get(l);
            if (null != e) {
                let n = new Map(u[t]);
                n.set(l, {
                    userId: l,
                    position: i ?? e.position,
                    statusId: r ?? e.statusId,
                    statusText: s ?? e.statusText,
                }),
                    (u[t] = n);
            }
        }
    },
    MEDIA_SESSION_JOINED: function () {
        let e = s.A.getChannelId(),
            t = s.A.getMediaSessionId();
        null != e && null != t && A.set(e, t);
    },
    GUILD_ROOM_PENDING_NOTE_CREATE: function (e) {
        let { roomId: t, note: n } = e;
        I[t] = n;
    },
    GUILD_ROOM_NOTE_CREATE_START: function (e) {
        let { roomId: t } = e;
        delete I[t];
    },
});
