"use strict";
n.d(t, { A: () => S, i: () => c });
var i = n(17928),
    r = n(228366),
    a = n(280450),
    s = n(763827),
    l = n(309010),
    o = n(872772);
let d = new Map(),
    c = {},
    u = [],
    _ = {},
    E = {},
    A = null,
    h = {},
    I = new Map(),
    f = !1,
    p = {};
function T() {
    let e = l.A.getVoiceChannelId();
    null != e && (I.delete(e), (h[e] = h[e] ?? !0));
}
function m(e) {
    let { roomId: t } = e;
    delete p[t];
}
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default, s.A, l.A), this.syncWith([l.A], T);
    }
    getRoom(e) {
        return _[e] ?? c;
    }
    getRoomUsers(e) {
        return E[e] ?? d;
    }
    getPendingPosition() {
        return A;
    }
    getMediaSessionId(e) {
        return I.get(e);
    }
    isVisible(e) {
        return h[e] ?? !0;
    }
    getPendingNote(e) {
        return p[e] ?? null;
    }
    getNotes(e) {
        return _[e]?.objects.get(o.N.NOTE) ?? u;
    }
}
let S = new g(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e,
            { users: i, ...r } = t;
        (_[t.roomId] = r), (E[t.roomId] = i), null != n && null != A && (A = null);
    },
    GUILD_ROOM_CONNECT_FAILURE: function (e) {
        let { roomId: t } = e;
        if (null == _[t]) return !1;
        let n = a.default.getId(),
            i = new Map(E[t]);
        i.delete(n), (E[t] = i);
    },
    GUILD_ROOM_DISCONNECT: function (e) {
        let { userId: t, roomId: n } = e;
        if (null == _[n]) return !1;
        let i = new Map(E[n]);
        i.delete(t),
            (E[n] = i),
            f && t === a.default.getId() && ((h[n] = !0), (f = !1)),
            t === a.default.getId() && delete p[n];
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        _[t.roomId] = i;
        let r = a.default.getId(),
            s = E[t.roomId]?.get(r);
        (E[t.roomId] = n), null != s && E[t.roomId]?.set(r, s);
    },
    GUILD_ROOM_UPDATE_FAILURE: function (e) {
        let { originalRoom: t, originalRoomUsers: n } = e,
            i = _[t.roomId];
        if (null == i) return !1;
        _[t.roomId] = { ...i, background: t.background };
        let r = a.default.getId(),
            s = n.get(r);
        if (null == s) {
            let e = new Map(E[t.roomId]);
            e.delete(r), (E[t.roomId] = e);
        } else E[t.roomId]?.set(r, s);
    },
    GUILD_ROOM_FETCH_SUCCESS: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        (_[t.roomId] = i), (E[t.roomId] = n);
    },
    GUILD_ROOM_LOCAL_POSITION_REQUESTED: function (e) {
        let { position: t } = e;
        A = t;
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t, clearLayout: n } = e;
        (h[t] = !h[t]), n && (f = !0);
    },
    GUILD_ROOM_LOCAL_UPDATE: function (e) {
        let { roomId: t, background: n, position: i, statusId: r, statusText: s } = e;
        if (null == _[t]) return !1;
        let l = a.default.getId();
        if ((null != n && (_[t] = { ..._[t], background: n }), null != i || null != r || null != s)) {
            let e = E[t].get(l);
            if (null != e) {
                let n = new Map(E[t]);
                n.set(l, {
                    userId: l,
                    position: i ?? e.position,
                    statusId: r ?? e.statusId,
                    statusText: s ?? e.statusText,
                }),
                    (E[t] = n);
            }
        }
    },
    MEDIA_SESSION_JOINED: function () {
        let e = s.A.getChannelId(),
            t = s.A.getMediaSessionId();
        null != e && null != t && I.set(e, t);
    },
    GUILD_ROOM_PENDING_NOTE_CREATE: function (e) {
        let { roomId: t, note: n } = e;
        p[t] = n;
    },
    GUILD_ROOM_PENDING_NOTE_DELETE: m,
    GUILD_ROOM_NOTE_CREATE_COMPLETE: m,
});
