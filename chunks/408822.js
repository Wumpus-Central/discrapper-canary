"use strict";
n.d(t, { AQ: () => c, TJ: () => d, tB: () => l, x2: () => u, zD: () => _ });
var i = n(636537),
    r = n(228366),
    s = n(495544),
    a = n(996512),
    o = n(652215);
async function l(e, t, n) {
    try {
        let s = await i.Bo.post({ url: o.Rsh.GUILD_ROOM_CONNECT(e, t), body: { position: n }, rejectWithError: !0 });
        r.h.dispatch({ type: "GUILD_ROOM_CONNECT", room: (0, a.S)(s.body), guildId: e, pendingPosition: n });
    } catch (e) {}
}
async function u(e, t) {
    try {
        r.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: s.default.getId(), roomId: t }),
            await i.Bo.post({ url: o.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 });
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
            await i.Bo.post({ url: o.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 });
    } catch (e) {}
}
function d(e) {
    r.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function _(e, t) {
    r.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e, clearLayout: t });
}
