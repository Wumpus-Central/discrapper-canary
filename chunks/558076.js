"use strict";
n.d(t, { A: () => O, i: () => c });
var i = n(17928),
    r = n(228366),
    a = n(280450),
    s = n(763827),
    l = n(309010),
    o = n(872772);
let d = new Map(),
    c = {},
    u = [],
    _ = new Map(),
    E = {},
    A = {},
    h = {},
    I = null,
    f = {},
    p = new Map(),
    T = !1,
    m = !1,
    g = !1,
    S = {};
function N() {
    let e = l.Ay.getVoiceChannelId();
    null != e && (p.delete(e), (f[e] = f[e] ?? !0));
}
function C(e) {
    let { roomId: t } = e;
    delete S[t];
}
class R extends i.Ay.PersistedStore {
    static displayName = "GuildRoomStore";
    static persistKey = "GuildRoomStore";
    initialize(e) {
        this.waitFor(a.default, s.A, l.Ay),
            this.syncWith([l.Ay], N),
            (T = (m = e?.rememberVideoOverlayVisibility ?? !1) && (e?.videoOverlayVisibility ?? !1));
    }
    getState() {
        return { videoOverlayVisibility: T, rememberVideoOverlayVisibility: m };
    }
    getRoom(e) {
        return E[e] ?? c;
    }
    getRoomUsers(e) {
        return A[e] ?? d;
    }
    getRoomObjects(e) {
        return h[e] ?? _;
    }
    getPendingPosition() {
        return I;
    }
    getMediaSessionId(e) {
        return p.get(e);
    }
    isVisible(e) {
        return f[e] ?? !0;
    }
    getPendingNote(e) {
        return S[e] ?? null;
    }
    getNotes(e) {
        return this.getRoomObjects(e).get(o.N.NOTE) ?? u;
    }
    getVideoOverlayVisibility() {
        return T;
    }
    getRememberVideoOverlayVisibility() {
        return m;
    }
}
let O = new R(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e,
            { users: i, objects: r, ...a } = t;
        (E[t.roomId] = a), (A[t.roomId] = i), (h[t.roomId] = r), null != n && null != I && (I = null);
    },
    GUILD_ROOM_CONNECT_FAILURE: function (e) {
        let { roomId: t } = e;
        if (null == E[t]) return !1;
        let n = a.default.getId(),
            i = new Map(A[t]);
        i.delete(n), (A[t] = i);
    },
    GUILD_ROOM_DISCONNECT: function (e) {
        let { userId: t, roomId: n } = e;
        if (null == E[n]) return !1;
        let i = new Map(A[n]);
        i.delete(t),
            (A[n] = i),
            g && t === a.default.getId() && ((f[n] = !0), (g = !1)),
            t === a.default.getId() && (delete S[n], m || (T = !1));
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e,
            { users: n, objects: i, ...r } = t;
        (E[t.roomId] = r), (h[t.roomId] = i);
        let s = a.default.getId(),
            l = A[t.roomId]?.get(s);
        (A[t.roomId] = n), null != l && A[t.roomId]?.set(s, l);
    },
    GUILD_ROOM_UPDATE_FAILURE: function (e) {
        let { originalRoom: t, originalRoomUsers: n } = e,
            i = E[t.roomId];
        if (null == i) return !1;
        E[t.roomId] = { ...i, background: t.background };
        let r = a.default.getId(),
            s = n.get(r);
        if (null == s) {
            let e = new Map(A[t.roomId]);
            e.delete(r), (A[t.roomId] = e);
        } else A[t.roomId]?.set(r, s);
    },
    GUILD_ROOM_FETCH_SUCCESS: function (e) {
        let { room: t } = e,
            { users: n, ...i } = t;
        (E[t.roomId] = i), (A[t.roomId] = n);
    },
    GUILD_ROOM_LOCAL_POSITION_REQUESTED: function (e) {
        let { position: t } = e;
        I = t;
    },
    GUILD_ROOM_LOCAL_POSITION_CLEARED: function () {
        I = null;
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t, clearLayout: n } = e;
        (f[t] = !f[t]), n && (g = !0);
    },
    GUILD_ROOM_LOCAL_UPDATE: function (e) {
        let { roomId: t, background: n, position: i, statusId: r, statusText: s } = e;
        if (null == E[t]) return !1;
        let l = a.default.getId();
        if ((null != n && (E[t] = { ...E[t], background: n }), null != i || null != r)) {
            let e = A[t].get(l);
            if (null != e) {
                let n = new Map(A[t]);
                n.set(l, { ...e, position: i ?? e.position, statusId: r ?? e.statusId, statusText: s ?? e.statusText }),
                    (A[t] = n);
            }
        }
    },
    MEDIA_SESSION_JOINED: function () {
        let e = s.A.getChannelId(),
            t = s.A.getMediaSessionId();
        null != e && null != t && p.set(e, t);
    },
    GUILD_ROOM_PENDING_NOTE_START: function (e) {
        let { roomId: t } = e;
        S[t] = { position: null };
    },
    GUILD_ROOM_PENDING_NOTE_PLACE: function (e) {
        let { roomId: t, position: n } = e,
            i = S[t];
        if (null == i) return !1;
        S[t] = { ...i, position: n };
    },
    GUILD_ROOM_PENDING_NOTE_DELETE: C,
    GUILD_ROOM_NOTE_CREATE_COMPLETE: C,
    GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY: function (e) {
        let { value: t } = e;
        T = t;
    },
    GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY: function (e) {
        let { rememberVideoOverlayVisibility: t } = e;
        m = t;
    },
});
