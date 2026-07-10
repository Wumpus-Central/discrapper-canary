"use strict";
n.d(t, {
    z5: () => R,
    HW: () => S,
    x2: () => h,
    zK: () => N,
    Ix: () => g,
    zD: () => p,
    tB: () => O,
    yF: () => C,
    AQ: () => L,
    TJ: () => f,
});
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(27620),
    l = n(280450),
    o = n(920639),
    d = n(558076),
    c = n(872772),
    u = n(996512),
    _ = n(652215);
let E = { x: 0, y: 0 };
async function A(e, t, n) {
    try {
        let d = n ?? E,
            c = await r.Bo.post({ url: _.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: d }, rejectWithError: !0 }),
            A = (0, u.S)(c.body);
        if ((a.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: A, guildId: e, pendingPosition: d }), t !== e)) {
            (0, o.E2)({ guildId: e, channelId: t });
            let i = A.users.get(l.default.getId());
            if (null != i) {
                for (let e of [
                    { updateType: "position", updateReason: "default", position: i.position },
                    { updateType: "status_id", updateReason: "default", statusId: i.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: i.statusText },
                ])
                    (0, o.U8)({ channelId: t, update: e });
                (0, o.Yv)({ guildId: e, channelId: t, actualSeatPosition: i.position, targetSeatPosition: n });
            }
        }
        (0, s.hs)(i.w.GUILD_ROOM_JOINED);
    } catch (n) {
        a.h.dispatch({ type: "GUILD_ROOM_CONNECT_FAILURE", guildId: e, roomId: t });
    }
}
async function h(e, t) {
    try {
        a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: l.default.getId(), roomId: t }),
            await r.Bo.post({ url: _.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 }),
            t !== e && (0, o.e6)({ guildId: e, channelId: t });
    } catch (e) {}
}
async function I(e, t, n) {
    let i = d.A.getRoom(t),
        s = d.A.getRoomUsers(t);
    try {
        let i = { type: "GUILD_ROOM_LOCAL_UPDATE", roomId: t };
        n?.background != null && (i.background = n.background),
            n?.user_position != null && (i.position = n.user_position),
            n?.user_status_id != null && (i.statusId = n.user_status_id),
            n?.user_status_text != null && (i.statusText = n.user_status_text),
            a.h.dispatch(i);
        let s = await r.Bo.post({ url: _.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            d = (0, u.S)(s.body);
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
        a.h.dispatch({ type: "GUILD_ROOM_UPDATE_FAILURE", originalRoom: i, originalRoomUsers: s, guildId: e });
    }
}
function f(e) {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function p(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
async function T(e, t, n) {
    return await r.Bo.post({ url: _.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
async function m(e, t, n, i) {
    return await r.Bo.del({ url: _.Rsh.GUILD_ROOM_OBJECT_DELETE(e, t, n), body: i, rejectWithError: !0 });
}
function g(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_CREATE", roomId: e, note: t });
}
function S(e) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId: e });
}
async function N(e, t, n, i) {
    try {
        await T(e, t, { object_type: c.N.NOTE, content: n, position: i }),
            t !== e && (0, o.Ql)({ interactionType: "note_created", guildId: e, channelId: t }),
            a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: t });
    } catch (e) {
        a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_COMPLETE", roomId: t });
    }
}
async function C(e, t, n) {
    await m(e, t, n, { object_type: c.N.NOTE }),
        t !== e && (0, o.Ql)({ interactionType: "note_deleted", guildId: e, channelId: t });
}
async function R(e, t) {
    let n = await r.Bo.get({ url: _.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
        i = (0, u.S)(n.body);
    a.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
}
async function O(e, t, n) {
    try {
        await A(e, t, n);
    } catch (e) {}
}
async function L(e, t, n) {
    try {
        await I(e, t, n);
    } catch (e) {}
}
