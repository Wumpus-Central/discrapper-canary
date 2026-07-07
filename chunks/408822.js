"use strict";
n.d(t, { AQ: () => h, TJ: () => f, tB: () => d, x2: () => _, zD: () => E });
var i = n(517846),
    r = n(636537),
    s = n(228366),
    a = n(27620),
    o = n(280450),
    l = n(920639),
    u = n(996512),
    c = n(652215);
async function d(e, t, n) {
    try {
        let d = await r.Bo.post({ url: c.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: n }, rejectWithError: !0 }),
            _ = (0, u.S)(d.body);
        if ((s.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: _, guildId: e, pendingPosition: n }), t !== e)) {
            (0, l.E2)({ guildId: e, channelId: t });
            let n = _.users.get(o.default.getId());
            if (null != n)
                for (let e of [
                    { updateType: "position", updateReason: "default", position: n.position },
                    { updateType: "status_id", updateReason: "default", statusId: n.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: n.statusText },
                ])
                    (0, l.U8)({ channelId: t, update: e });
        }
        (0, a.hs)(i.w.GUILD_ROOM_JOINED);
    } catch (e) {}
}
async function _(e, t) {
    try {
        s.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: o.default.getId(), roomId: t }),
            await r.Bo.post({ url: c.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 }),
            t !== e && (0, l.e6)({ guildId: e, channelId: t });
    } catch (e) {}
}
async function h(e, t, n) {
    try {
        s.h.dispatch({
            type: "GUILD_ROOM_LOCAL_UPDATE",
            roomId: t,
            background: n.background,
            position: n.user_position,
            statusId: n.user_status_id,
            statusText: n.user_status_text,
        }),
            await r.Bo.post({ url: c.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            e !== t &&
                (n?.user_position != null &&
                    (0, l.U8)({
                        channelId: t,
                        update: { updateType: "position", updateReason: "user_selected", position: n.user_position },
                    }),
                n?.user_status_id != null &&
                    (0, l.U8)({
                        channelId: t,
                        update: { updateType: "status_id", updateReason: "user_selected", statusId: n.user_status_id },
                    }),
                n?.user_status_text != null &&
                    (0, l.U8)({
                        channelId: t,
                        update: {
                            updateType: "status_text",
                            updateReason: "user_selected",
                            statusText: n.user_status_text,
                        },
                    }));
    } catch (e) {}
}
function f(e) {
    s.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function E(e, t) {
    s.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
