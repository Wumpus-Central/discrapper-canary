"use strict";
n.d(t, { z5: () => g, zD: () => f, zK: () => m, x2: () => A, Ix: () => T, tB: () => S, AQ: () => N, TJ: () => I });
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
async function E(e, t, n) {
    try {
        let d = await r.Bo.post({ url: _.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: n }, rejectWithError: !0 }),
            c = (0, u.S)(d.body);
        if ((a.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: c, guildId: e, pendingPosition: n }), t !== e)) {
            (0, o.E2)({ guildId: e, channelId: t });
            let n = c.users.get(l.default.getId());
            if (null != n)
                for (let e of [
                    { updateType: "position", updateReason: "default", position: n.position },
                    { updateType: "status_id", updateReason: "default", statusId: n.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: n.statusText },
                ])
                    (0, o.U8)({ channelId: t, update: e });
        }
        (0, s.hs)(i.w.GUILD_ROOM_JOINED);
    } catch (n) {
        a.h.dispatch({ type: "GUILD_ROOM_CONNECT_FAILURE", guildId: e, roomId: t });
    }
}
async function A(e, t) {
    try {
        a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: l.default.getId(), roomId: t }),
            await r.Bo.post({ url: _.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 }),
            t !== e && (0, o.e6)({ guildId: e, channelId: t });
    } catch (e) {}
}
async function h(e, t, n) {
    let i = d.A.getRoom(t),
        s = d.A.getRoomUsers(t);
    try {
        a.h.dispatch({
            type: "GUILD_ROOM_LOCAL_UPDATE",
            roomId: t,
            background: n.background,
            position: n.user_position,
            statusId: n.user_status_id,
            statusText: n.user_status_text,
        }),
            await r.Bo.post({ url: _.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
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
                    }));
    } catch (t) {
        a.h.dispatch({ type: "GUILD_ROOM_UPDATE_FAILURE", originalRoom: i, originalRoomUsers: s, guildId: e });
    }
}
function I(e) {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function f(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
async function p(e, t, n) {
    return await r.Bo.post({ url: _.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
function T(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_CREATE", roomId: e, note: t });
}
async function m(e, t, n, i) {
    a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_START", roomId: t }),
        await p(e, t, { object_type: c.N.NOTE, content: n, position: i });
}
async function g(e, t) {
    let n = await r.Bo.get({ url: _.Rsh.GUILD_ROOM(e, t), rejectWithError: !0 }),
        i = (0, u.S)(n.body);
    a.h.dispatch({ type: "GUILD_ROOM_FETCH_SUCCESS", guildId: e, room: i });
}
async function S(e, t, n) {
    try {
        await E(e, t, n);
    } catch (e) {}
}
async function N(e, t, n) {
    try {
        await h(e, t, n);
    } catch (e) {}
}
