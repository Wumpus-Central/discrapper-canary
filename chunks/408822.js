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
        await i.Bo.post({ url: o.Rsh.GUILD_ROOM_DISCONNECT(e, t), rejectWithError: !0 }),
            r.h.dispatch({ type: "GUILD_ROOM_DISCONNECT", userId: s.default.getId(), roomId: t });
    } catch (e) {}
}
async function c(e, t, n) {
    try {
        let s = await i.Bo.post({ url: o.Rsh.GUILD_ROOM_UPDATE(e, t), body: n, rejectWithError: !0 });
        r.h.dispatch({ type: "GUILD_ROOM_UPDATE", room: (0, a.S)(s.body) });
    } catch (e) {}
}
function d(e) {
    r.h.dispatch({ type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position: e });
}
function _(e) {
    r.h.dispatch({ type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: e });
}
