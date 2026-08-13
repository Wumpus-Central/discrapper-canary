"use strict";
n.d(t, {
    Xh: () => N,
    Dr: () => O,
    Ys: () => T,
    HW: () => L,
    x2: () => I,
    zK: () => D,
    z5: () => v,
    zD: () => g,
    WT: () => R,
    tB: () => b,
    yF: () => y,
    WQ: () => f,
    AQ: () => p,
    TJ: () => m,
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
    E = n(652215);
let A = { x: 0, y: 0 };
async function h(e, t, n) {
    try {
        let d = n ?? A,
            c = await r.Bo.post({ url: E.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: d }, rejectWithError: !0 }),
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
function I(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: l.default.getId(), roomId: t }),
        t !== e && (0, o.e6)({ guildId: e, channelId: t });
}
function f(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: e, roomId: t });
}
async function p(e, t, n) {
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
        let s = await r.Bo.post({ url: E.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
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
function T() {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_CLEARED" });
}
function m(e) {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function g(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
async function S(e, t, n) {
    return await r.Bo.post({ url: E.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
async function N(e, t, n, i) {
    return await r.Bo.post({ url: E.Rsh.GUILD_ROOM_OBJECT_UPDATE(e, t, n), body: i, rejectWithError: !0 });
}
async function C(e, t, n, i) {
    return await r.Bo.del({ url: E.Rsh.GUILD_ROOM_OBJECT_DELETE(e, t, n), body: i, rejectWithError: !0 });
}
function R(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_START", roomId: e });
}
function O(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId: e, position: t });
}
function L(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId: e });
}
async function D(e, t, n, i) {
    L(t);
    try {
        await S(e, t, { object_type: u.N.NOTE, content: n, position: i }),
            t !== e && (0, o.Ql)({ interactionType: "note_created", guildId: e, channelId: t }),
            a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: t });
    } catch (e) {
        throw (a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: t }), e);
    }
}
async function y(e, t, n) {
    await C(e, t, n, { object_type: u.N.NOTE }),
        t !== e && (0, o.Ql)({ interactionType: "note_deleted", guildId: e, channelId: t });
}
async function v(e, t) {
    try {
        let n = await r.Bo.get({ url: E.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
            i = (0, _.S)(n.body);
        a.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
    } catch (e) {
        (0, d.b)({ silent: !0 });
    }
}
async function b(e, t, n) {
    try {
        await h(e, t, n);
    } catch (e) {
        (0, d.b)();
    }
}
