"use strict";
n.d(t, {
    Xh: () => R,
    Ys: () => S,
    HW: () => v,
    zK: () => b,
    c6: () => w,
    tB: () => x,
    WQ: () => m,
    AQ: () => g,
    Dr: () => D,
    z5: () => P,
    zD: () => C,
    x2: () => T,
    Ft: () => G,
    WT: () => y,
    UV: () => U,
    yF: () => M,
    TJ: () => N,
});
var i = n(750459),
    r = n(517846),
    a = n(636537),
    s = n(228366),
    l = n(27620),
    o = n(280450),
    d = n(935208),
    c = n(920639),
    u = n(538638),
    _ = n(558076),
    E = n(872772),
    A = n(996512),
    h = n(360729),
    I = n(652215);
let f = { x: 0, y: 0 };
async function p(e, t, n, d) {
    try {
        let u = n ?? f,
            _ = d ?? i.x.UNSET,
            E = await a.Bo.post({
                url: I.Rsh.GUILD_ROOM_CONNECT(e, t),
                body: { position: u, seat: _ },
                rejectWithError: !0,
            }),
            h = (0, A.S)(E.body);
        if (
            (s.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: h, guildId: e, pendingPosition: u, pendingSeat: _ }),
            t !== e)
        ) {
            (0, c.E2)({ guildId: e, channelId: t }), (0, l.hs)(r.w.GUILD_ROOM_JOINED);
            let i = h.users.get(o.default.getId());
            if (null != i) {
                for (let e of [
                    { updateType: "position", updateReason: "default", position: i.position },
                    { updateType: "seat", updateReason: "default", seat: i.seat },
                    { updateType: "status_id", updateReason: "default", statusId: i.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: i.statusText },
                ])
                    (0, c.U8)({ channelId: t, update: e });
                (0, c.Yv)({
                    guildId: e,
                    channelId: t,
                    actualSeatPosition: i.position,
                    targetSeatPosition: n,
                    actualSeatId: i.seat,
                    targetSeatId: d,
                });
            }
        }
    } catch (n) {
        throw (s.h.dispatch({ type: "GUILD_ROOM_CONNECT_FAILURE", guildId: e, roomId: t }), n);
    }
}
function T(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: o.default.getId(), roomId: t }),
        t !== e && (0, c.e6)({ guildId: e, channelId: t });
}
function m(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: e, roomId: t });
}
async function g(e, t, n) {
    let i = _.A.getRoom(t),
        r = _.A.getRoomUsers(t),
        l = _.A.getRoomObjects(t);
    try {
        let i = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: t };
        n?.background != null && (i.background = n.background),
            n?.user_position != null && (i.position = n.user_position),
            n?.user_seat != null && (i.seat = n.user_seat),
            n?.user_status_id != null && (i.statusId = n.user_status_id),
            n?.user_status_text != null && (i.statusText = n.user_status_text),
            s.h.dispatch(i);
        let r = await a.Bo.post({ url: I.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            l = (0, A.S)(r.body);
        if (
            e !== t &&
            (n?.user_position != null &&
                (0, c.U8)({
                    channelId: t,
                    update: { updateType: "position", updateReason: "user_selected", position: n.user_position },
                }),
            n?.user_status_id != null &&
                (0, c.U8)({
                    channelId: t,
                    update: { updateType: "status_id", updateReason: "user_selected", statusId: n.user_status_id },
                }),
            n?.user_status_text != null &&
                (0, c.U8)({
                    channelId: t,
                    update: {
                        updateType: "status_text",
                        updateReason: "user_selected",
                        statusText: n.user_status_text,
                    },
                }),
            n?.user_position != null)
        ) {
            let i = l.users.get(o.default.getId());
            null != i &&
                (0, c.Yv)({
                    guildId: e,
                    channelId: t,
                    actualSeatPosition: i.position,
                    targetSeatPosition: n.user_position,
                    actualSeatId: i.seat,
                    targetSeatId: n.user_seat,
                });
        }
    } catch (t) {
        throw (
            (s.h.dispatch({
                type: "GUILD_ROOM_UPDATE_FAILURE",
                originalRoom: i,
                originalRoomUsers: r,
                originalRoomObjects: l,
                guildId: e,
            }),
            t)
        );
    }
}
function S() {
    s.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
}
function N(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e, seat: t });
}
function C(e) {
    s.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e });
}
async function O(e, t, n) {
    return await a.Bo.post({ url: I.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
async function R(e, t, n, i) {
    return await a.Bo.post({ url: I.Rsh.GUILD_ROOM_OBJECT_UPDATE(e, t, n), body: i, rejectWithError: !0 });
}
async function L(e, t, n, i) {
    return await a.Bo.del({ url: I.Rsh.GUILD_ROOM_OBJECT_DELETE(e, t, n), body: i, rejectWithError: !0 });
}
function y(e) {
    s.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_START", roomId: e });
}
function D(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId: e, position: t });
}
function v(e) {
    s.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId: e });
}
async function b(e, t, n, i) {
    let r = d.default.fromTimestamp(Date.now());
    s.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_START", roomId: t, localId: r, position: i }), v(t);
    try {
        await O(e, t, { object_type: E.N.NOTE, content: n, position: i }),
            t !== e && (0, c.Ql)({ interactionType: "note_created", guildId: e, channelId: t });
    } catch (e) {
        throw (s.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_FAILURE", roomId: t, localId: r }), e);
    }
}
async function M(e, t, n) {
    await L(e, t, n, { object_type: E.N.NOTE }),
        t !== e && (0, c.Ql)({ interactionType: "note_deleted", guildId: e, channelId: t });
}
async function P(e, t) {
    try {
        let n = await a.Bo.get({ url: I.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
            i = (0, A.S)(n.body);
        s.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
    } catch (e) {
        (0, u.b)({ silent: !0 });
    }
}
function U(e, t) {
    let n = _.A.getVideoOverlayVisibility();
    s.h.dispatch({ type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value: e }),
        e !== n && (0, c.n0)({ interactionType: e ? "video_overlay_opened" : "video_overlay_closed", channelId: t });
}
function w(e, t, n) {
    (0, h.W8)({ guildId: t, location: "maybeSetGuildRoomVideoOverlay" }, { autoTrackExposure: !1 }).enabled && U(e, n);
}
function G(e) {
    s.h.dispatch({ type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility: e }),
        (0, c.iY)({ rememberVideoOverlayVisibility: e });
}
async function x(e, t, n, i) {
    try {
        await p(e, t, n, i);
    } catch (e) {
        (0, u.b)();
    }
}
