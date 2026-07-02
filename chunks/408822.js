"use strict";
n.d(t, { AQ: () => c, TJ: () => _, tB: () => u, x2: () => d, zD: () => h });
var i = n(636537),
    r = n(228366),
    s = n(495544),
    a = n(920639),
    o = n(996512),
    l = n(652215);
async function u(e, t, n) {
    try {
        let u = await i.Bo.post({ url: l.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: n }, rejectWithError: !0 }),
            d = (0, o.S)(u.body);
        if ((r.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: d, guildId: e, pendingPosition: n }), t !== e)) {
            (0, a.E2)({ guildId: e, channelId: t });
            let n = d.users.get(s.default.getId());
            if (null != n)
                for (let e of [
                    { updateType: "position", updateReason: "default", position: n.position },
                    { updateType: "status_id", updateReason: "default", statusId: n.statusId },
                    { updateType: "status_text", updateReason: "default", statusText: n.statusText },
                ])
                    (0, a.U8)({ channelId: t, update: e });
        }
    } catch (e) {}
}
async function d(e, t) {
    try {
        r.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: s.default.getId(), roomId: t }),
            await i.Bo.post({ url: l.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 }),
            t !== e && (0, a.e6)({ guildId: e, channelId: t });
    } catch (e) {}
}
async function c(e, t, n) {
    try {
        r.h.dispatch({
            type: "GUILD_ROOM_LOCAL_UPDATE",
            roomId: t,
            background: n.background,
            position: n.user_position,
            statusId: n.user_status_id,
            statusText: n.user_status_text,
        }),
            await i.Bo.post({ url: l.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 }),
            e !== t &&
                (n?.user_position != null &&
                    (0, a.U8)({
                        channelId: t,
                        update: { updateType: "position", updateReason: "user_selected", position: n.user_position },
                    }),
                n?.user_status_id != null &&
                    (0, a.U8)({
                        channelId: t,
                        update: { updateType: "status_id", updateReason: "user_selected", statusId: n.user_status_id },
                    }),
                n?.user_status_text != null &&
                    (0, a.U8)({
                        channelId: t,
                        update: {
                            updateType: "status_text",
                            updateReason: "user_selected",
                            statusText: n.user_status_text,
                        },
                    }));
    } catch (e) {}
}
function _(e) {
    r.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function h(e, t) {
    r.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
