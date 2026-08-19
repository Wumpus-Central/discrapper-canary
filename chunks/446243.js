"use strict";
n.d(t, {
    Xh: () => O,
    Ys: () => g,
    HW: () => D,
    zK: () => v,
    c6: () => U,
    tB: () => G,
    WQ: () => T,
    AQ: () => m,
    Dr: () => y,
    z5: () => M,
    zD: () => N,
    x2: () => p,
    Ft: () => w,
    WT: () => L,
    UV: () => P,
    yF: () => b,
    TJ: () => S,
});
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(27620),
    l = n(280450),
    o = n(935208),
    d = n(920639),
    c = n(538638),
    u = n(558076),
    _ = n(872772),
    E = n(996512),
    A = n(360729),
    h = n(652215);
let I = { x: 0, y: 0 };
async function f(e, t, n) {
    try {
        let o = n ?? I,
            c = await r.Bo.post({ url: h.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: o }, rejectWithError: !0 }),
            u = (0, E.S)(c.body);
        if ((a.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: u, guildId: e, pendingPosition: o }), t !== e)) {
            (0, d.E2)({ guildId: e, channelId: t }), (0, s.hs)(i.w.GUILD_ROOM_JOINED);
            let r = u.users.get(l.default.getId());
            if (null != r) {
                for (let e of [
                    { updateType: "position", updateReason: "default", position: r.position },
                    { updateType: "status_id", updateReason: "default", statusId: r.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: r.statusText },
                ])
                    (0, d.U8)({ channelId: t, update: e });
                (0, d.Yv)({ guildId: e, channelId: t, actualSeatPosition: r.position, targetSeatPosition: n });
            }
        }
    } catch (n) {
        throw (a.h.dispatch({ type: "GUILD_ROOM_CONNECT_FAILURE", guildId: e, roomId: t }), n);
    }
}
function p(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: l.default.getId(), roomId: t }),
        t !== e && (0, d.e6)({ guildId: e, channelId: t });
}
function T(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: e, roomId: t });
}
async function m(e, t, n) {
    let i = u.A.getRoom(t),
        s = u.A.getRoomUsers(t),
        o = u.A.getRoomObjects(t);
    try {
        let i = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: t };
        n?.background != null && (i.background = n.background),
            n?.user_position != null && (i.position = n.user_position),
            n?.user_status_id != null && (i.statusId = n.user_status_id),
            n?.user_status_text != null && (i.statusText = n.user_status_text),
            a.h.dispatch(i);
        let s = await r.Bo.post({ url: h.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            o = (0, E.S)(s.body);
        if (
            e !== t &&
            (n?.user_position != null &&
                (0, d.U8)({
                    channelId: t,
                    update: { updateType: "position", updateReason: "user_selected", position: n.user_position },
                }),
            n?.user_status_id != null &&
                (0, d.U8)({
                    channelId: t,
                    update: { updateType: "status_id", updateReason: "user_selected", statusId: n.user_status_id },
                }),
            n?.user_status_text != null &&
                (0, d.U8)({
                    channelId: t,
                    update: {
                        updateType: "status_text",
                        updateReason: "user_selected",
                        statusText: n.user_status_text,
                    },
                }),
            n?.user_position != null)
        ) {
            let i = o.users.get(l.default.getId());
            null != i &&
                (0, d.Yv)({
                    guildId: e,
                    channelId: t,
                    actualSeatPosition: i.position,
                    targetSeatPosition: n.user_position,
                });
        }
    } catch (t) {
        throw (
            (a.h.dispatch({
                type: "GUILD_ROOM_UPDATE_FAILURE",
                originalRoom: i,
                originalRoomUsers: s,
                originalRoomObjects: o,
                guildId: e,
            }),
            t)
        );
    }
}
function g() {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
}
function S(e) {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function N(e) {
    a.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e });
}
async function C(e, t, n) {
    return await r.Bo.post({ url: h.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
async function O(e, t, n, i) {
    return await r.Bo.post({ url: h.Rsh.GUILD_ROOM_OBJECT_UPDATE(e, t, n), body: i, rejectWithError: !0 });
}
async function R(e, t, n, i) {
    return await r.Bo.del({ url: h.Rsh.GUILD_ROOM_OBJECT_DELETE(e, t, n), body: i, rejectWithError: !0 });
}
function L(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_START", roomId: e });
}
function y(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId: e, position: t });
}
function D(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId: e });
}
async function v(e, t, n, i) {
    let r = o.default.fromTimestamp(Date.now());
    a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_START", roomId: t, localId: r, position: i }), D(t);
    try {
        await C(e, t, { object_type: _.N.NOTE, content: n, position: i }),
            t !== e && (0, d.Ql)({ interactionType: "note_created", guildId: e, channelId: t });
    } catch (e) {
        throw (a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: t, localId: r }), e);
    }
}
async function b(e, t, n) {
    await R(e, t, n, { object_type: _.N.NOTE }),
        t !== e && (0, d.Ql)({ interactionType: "note_deleted", guildId: e, channelId: t });
}
async function M(e, t) {
    try {
        let n = await r.Bo.get({ url: h.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
            i = (0, E.S)(n.body);
        a.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
    } catch (e) {
        (0, c.b)({ silent: !0 });
    }
}
function P(e, t) {
    let n = u.A.getVideoOverlayVisibility();
    a.h.dispatch({ type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value: e }),
        e !== n && (0, d.n0)({ interactionType: e ? "video_overlay_opened" : "video_overlay_closed", channelId: t });
}
function U(e, t, n) {
    A.A.getCurrentConfig({ guildId: t, location: "maybeSetGuildRoomVideoOverlay" }, { autoTrackExposure: !1 })
        .enabled && P(e, n);
}
function w(e) {
    a.h.dispatch({ type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility: e }),
        (0, d.iY)({ rememberVideoOverlayVisibility: e });
}
async function G(e, t, n) {
    try {
        await f(e, t, n);
    } catch (e) {
        (0, c.b)();
    }
}
