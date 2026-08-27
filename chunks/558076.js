"use strict";
n.d(t, { A: () => v, i: () => c });
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
    f = null,
    p = {},
    T = new Map(),
    m = !1,
    g = !1,
    S = !1,
    N = {},
    C = {},
    O = [];
function R(e) {
    let { x: t, y: n } = e;
    return `${t},${n}`;
}
function L(e, t) {
    let n = C[e];
    if (null == n || 0 === n.length) return;
    let i = t.get(o.N.NOTE);
    if (null == i || 0 === i.length) return;
    let r = a.default.getId(),
        s = new Set(i.filter((e) => e.createdBy === r).map((e) => R(e.position))),
        l = n.filter((e) => !s.has(R(e.position)));
    l.length !== n.length && (0 === l.length ? delete C[e] : (C[e] = l));
}
function y() {
    let e = l.Ay.getVoiceChannelId();
    null != e && (T.delete(e), (p[e] = p[e] ?? !0));
}
class D extends i.Ay.PersistedStore {
    static displayName = "GuildRoomStore";
    static persistKey = "GuildRoomStore";
    initialize(e) {
        this.waitFor(a.default, s.A, l.Ay),
            this.syncWith([l.Ay], y),
            (m = (g = e?.rememberVideoOverlayVisibility ?? !1) && (e?.videoOverlayVisibility ?? !1));
    }
    getState() {
        return { videoOverlayVisibility: m, rememberVideoOverlayVisibility: g };
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
    getPendingSeat() {
        return f;
    }
    getMediaSessionId(e) {
        return T.get(e);
    }
    isVisible(e) {
        return p[e] ?? !0;
    }
    getPendingNote(e) {
        return N[e] ?? null;
    }
    getCreatingNotes(e) {
        return C[e] ?? O;
    }
    getNotes(e) {
        return this.getRoomObjects(e).get(o.N.NOTE) ?? u;
    }
    getVideoOverlayVisibility() {
        return m;
    }
    getRememberVideoOverlayVisibility() {
        return g;
    }
}
let v = new D(r.h, {
    GUILD_ROOM_CONNECT: function (e) {
        let { room: t, guildId: n } = e,
            { users: i, objects: r, ...a } = t;
        (E[t.roomId] = a),
            (A[t.roomId] = i),
            (h[t.roomId] = r),
            L(t.roomId, r),
            null != n && (null != I && (I = null), null != f && (f = null));
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
            S && t === a.default.getId() && ((p[n] = !0), (S = !1)),
            t === a.default.getId() && (delete N[n], delete C[n], g || (m = !1));
    },
    GUILD_ROOM_UPDATE: function (e) {
        let { room: t } = e,
            { users: n, objects: i, ...r } = t;
        (E[t.roomId] = r), (h[t.roomId] = i), L(t.roomId, i);
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
        let { position: t, seat: n } = e;
        (I = t), (f = n);
    },
    GUILD_ROOM_LOCAL_POSITION_CLEARED: function () {
        (I = null), (f = null);
    },
    GUILD_ROOM_TOGGLE_LAYOUT: function (e) {
        let { roomId: t, clearLayout: n } = e;
        (p[t] = !p[t]), n && (S = !0);
    },
    GUILD_ROOM_LOCAL_UPDATE: function (e) {
        let { roomId: t, background: n, position: i, seat: r, statusId: s, statusText: l } = e;
        if (null == E[t]) return !1;
        let o = a.default.getId();
        if ((null != n && (E[t] = { ...E[t], background: n }), null != i || null != s || null != r)) {
            let e = A[t].get(o);
            if (null != e) {
                let n = new Map(A[t]);
                n.set(o, {
                    ...e,
                    position: i ?? e.position,
                    seat: r ?? e.seat,
                    statusId: s ?? e.statusId,
                    statusText: l ?? e.statusText,
                }),
                    (A[t] = n);
            }
        }
    },
    MEDIA_SESSION_JOINED: function () {
        let e = s.A.getChannelId(),
            t = s.A.getMediaSessionId();
        null != e && null != t && T.set(e, t);
    },
    GUILD_ROOM_PENDING_NOTE_START: function (e) {
        let { roomId: t } = e;
        N[t] = { position: null };
    },
    GUILD_ROOM_PENDING_NOTE_PLACE: function (e) {
        let { roomId: t, position: n } = e,
            i = N[t];
        if (null == i) return !1;
        N[t] = { ...i, position: n };
    },
    GUILD_ROOM_PENDING_NOTE_DELETE: function (e) {
        let { roomId: t } = e;
        delete N[t];
    },
    GUILD_ROOM_NOTE_CREATE_START: function (e) {
        let { roomId: t, localId: n, position: i } = e;
        C[t] = [...(C[t] ?? []), { localId: n, position: i }];
    },
    GUILD_ROOM_NOTE_CREATE_FAILURE: function (e) {
        let { roomId: t, localId: n } = e,
            i = C[t];
        if (null == i) return !1;
        let r = i.filter((e) => e.localId !== n);
        if (r.length === i.length) return !1;
        0 === r.length ? delete C[t] : (C[t] = r);
    },
    GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY: function (e) {
        let { value: t } = e;
        m = t;
    },
    GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY: function (e) {
        let { rememberVideoOverlayVisibility: t } = e;
        g = t;
    },
});
