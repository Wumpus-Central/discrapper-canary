"use strict";
n.d(t, { AQ: () => A, Ix: () => p, TJ: () => h, tB: () => _, x2: () => E, zD: () => I, zK: () => T });
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(27620),
    l = n(280450),
    o = n(920639),
    d = n(872772),
    c = n(996512),
    u = n(652215);
async function _(e, t, n) {
    try {
        let d = await r.Bo.post({ url: u.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: n }, rejectWithError: !0 }),
            _ = (0, c.S)(d.body);
        if ((a.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: _, guildId: e, pendingPosition: n }), t !== e)) {
            (0, o.E2)({ guildId: e, channelId: t });
            let n = _.users.get(l.default.getId());
            if (null != n)
                for (let e of [
                    { updateType: "position", updateReason: "default", position: n.position },
                    { updateType: "status_id", updateReason: "default", statusId: n.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: n.statusText },
                ])
                    (0, o.U8)({ channelId: t, update: e });
        }
        (0, s.hs)(i.w.GUILD_ROOM_JOINED);
    } catch (e) {}
}
async function E(e, t) {
    try {
        a.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: l.default.getId(), roomId: t }),
            await r.Bo.post({ url: u.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 }),
            t !== e && (0, o.e6)({ guildId: e, channelId: t });
    } catch (e) {}
}
async function A(e, t, n) {
    try {
        a.h.dispatch({
            type: "GUILD_ROOM_LOCAL_UPDATE",
            roomId: t,
            background: n.background,
            position: n.user_position,
            statusId: n.user_status_id,
            statusText: n.user_status_text,
        }),
            await r.Bo.post({ url: u.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
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
    } catch (e) {}
}
function h(e) {
    a.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function I(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
async function f(e, t, n) {
    return await r.Bo.post({ url: u.Rsh.GUILD_ROOM_OBJECT_CREATE(e, t), body: n, rejectWithError: !0 });
}
function p(e, t) {
    a.h.dispatch({ type: "GUILD_ROOM_PENDING_NOTE_CREATE", roomId: e, note: t });
}
async function T(e, t, n, i) {
    a.h.dispatch({ type: "GUILD_ROOM_NOTE_CREATE_START", roomId: t }),
        await f(e, t, { object_type: d.N.NOTE, content: n, position: i });
}
