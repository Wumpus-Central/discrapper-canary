"use strict";
n.d(t, {
    Xh: () => C,
    Ys: () => m,
    HW: () => D,
    zK: () => y,
    c6: () => P,
    tB: () => w,
    WQ: () => p,
    AQ: () => T,
    Dr: () => L,
    z5: () => b,
    zD: () => S,
    x2: () => f,
    Ft: () => U,
    WT: () => O,
    UV: () => M,
    yF: () => v,
    TJ: () => g,
});
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(27620),
    l = n(280450),
    o = n(920639),
    d = n(538638),
    c = n(558076),
    u = n(872772),
    _ = n(996512),
    E = n(360729),
    A = n(652215);
let h = { x: 0, y: 0 };
async function I(e, t, n) {
    try {
        let d = n ?? h,
            c = await r.Bo.post({ url: A.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: d }, rejectWithError: !0 }),
            u = (0, _.S)(c.body);
        if ((a.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: u, guildId: e, pendingPosition: d }), t !== e)) {
            (0, o.E2)({ guildId: e, channelId: t }), (0, s.hs)(i.w.GUILD_ROOM_JOINED);
            let r = u.users.get(l.default.getId());
            if (null != r) {
                for (let e of [
                    { updateType: "position", updateReason: "default", position: r.position },
                    { updateType: "status_id", updateReason: "default", statusId: r.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: r.statusText },
                ])
                    (0, o.U8)({ channelId: t, update: e });
                (0, o.Yv)({ guildId: e, channelId: t, actualSeatPosition: r.position, targetSeatPosition: n });
            }
        }
    } catch (n) {
        throw (a.h.dispatch({ type: "GUILD_ROOM_CONNECT_FAILURE", guildId: e, roomId: t }), n);
    }
}
function f(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: l.default.getId(), roomId: t }),
        t !== e && (0, o.e6)({ guildId: e, channelId: t });
}
function p(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: e, roomId: t });
}
async function T(e, t, n) {
    let i = c.A.getRoom(t),
        s = c.A.getRoomUsers(t),
        d = c.A.getRoomObjects(t);
    try {
        let i = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: t };
        n?.background != null && (i.background = n.background),
            n?.user_position != null && (i.position = n.user_position),
            n?.user_status_id != null && (i.statusId = n.user_status_id),
            n?.user_status_text != null && (i.statusText = n.user_status_text),
            a.h.dispatch(i);
        let s = await r.Bo.post({ url: A.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            d = (0, _.S)(s.body);
        if (
            e !== t &&
            (n?.user_position != null &&
                (0, o.U8)({
                    channelId: t,
                    update: { updateType: "position", updateReason: "user_selected", position: n.user_position },
                }),
            n?.user_status_id != null &&
                (0, o.U8)({
                    channelId: t,
                    update: { updateType: "status_id", updateReason: "user_selected", statusId: n.user_status_id },
                }),
            n?.user_status_text != null &&
                (0, o.U8)({
                    channelId: t,
                    update: {
                        updateType: "status_text",
                        updateReason: "user_selected",
                        statusText: n.user_status_text,
                    },
                }),
            n?.user_position != null)
        ) {
            let i = d.users.get(l.default.getId());
            null != i &&
                (0, o.Yv)({
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
                originalRoomObjects: d,
                guildId: e,
            }),
            t)
        );
    }
}
function m() {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
}
function g(e) {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function S(e) {
    a.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e });
}
async function N(e, t, n) {
    return await r.Bo.post({ url: A.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
async function C(e, t, n, i) {
    return await r.Bo.post({ url: A.Rsh.GUILD_ROOM_OBJECT_UPDATE(e, t, n), body: i, rejectWithError: !0 });
}
async function R(e, t, n, i) {
    return await r.Bo.del({ url: A.Rsh.GUILD_ROOM_OBJECT_DELETE(e, t, n), body: i, rejectWithError: !0 });
}
function O(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_START", roomId: e });
}
function L(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId: e, position: t });
}
function D(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId: e });
}
async function y(e, t, n, i) {
    D(t);
    try {
        await N(e, t, { object_type: u.N.NOTE, content: n, position: i }),
            t !== e && (0, o.Ql)({ interactionType: "note_created", guildId: e, channelId: t }),
            a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: t });
    } catch (e) {
        throw (a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: t }), e);
    }
}
async function v(e, t, n) {
    await R(e, t, n, { object_type: u.N.NOTE }),
        t !== e && (0, o.Ql)({ interactionType: "note_deleted", guildId: e, channelId: t });
}
async function b(e, t) {
    try {
        let n = await r.Bo.get({ url: A.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
            i = (0, _.S)(n.body);
        a.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
    } catch (e) {
        (0, d.b)({ silent: !0 });
    }
}
function M(e, t) {
    let n = c.A.getVideoOverlayVisibility();
    a.h.dispatch({ type: "GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY", value: e }),
        e !== n && (0, o.n0)({ interactionType: e ? "video_overlay_opened" : "video_overlay_closed", channelId: t });
}
function P(e, t, n) {
    E.A.getCurrentConfig({ guildId: t, location: "maybeSetGuildRoomVideoOverlay" }, { autoTrackExposure: !1 })
        .enabled && M(e, n);
}
function U(e) {
    a.h.dispatch({ type: "GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY", rememberVideoOverlayVisibility: e }),
        (0, o.iY)({ rememberVideoOverlayVisibility: e });
}
async function w(e, t, n) {
    try {
        await I(e, t, n);
    } catch (e) {
        (0, d.b)();
    }
}
