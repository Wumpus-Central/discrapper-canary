n.d(t, { HD: () => A, VA: () => E, Yf: () => _, ny: () => f, sV: () => u, sd: () => c, x1: () => h, y0: () => d });
var i,
    r,
    a = n(284009),
    s = n.n(a),
    l = n(991690),
    o = n(652215),
    d = (((i = {})[(i.FOCUSED = 0)] = "FOCUSED"), (i[(i.PIP = 1)] = "PIP"), i);
let c = { type: l.U.MAIN };
var u = (((r = {})[(r.MAIN = 0)] = "MAIN"), (r[(r.INLINE = 1)] = "INLINE"), r);
function _(e) {
    switch (e.type) {
        case l.U.MAIN:
            return 0;
        case l.U.APP_CHANNEL:
        case l.U.VOICE_CHANNEL:
            return 1;
        case l.U.INTERACTION_MODAL:
            s()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface");
    }
}
function E(e, t) {
    switch (t.type) {
        case l.U.MAIN:
            return `main:${e}`;
        case l.U.APP_CHANNEL:
            return `app-channel:${e}:${t.channelId}`;
        case l.U.VOICE_CHANNEL:
            return `voice-channel:${e}:${t.channelId}`;
        case l.U.INTERACTION_MODAL:
            s()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface");
    }
}
function A(e) {
    switch (e.type) {
        case o.rbe.GUILD_APP:
            return { type: l.U.APP_CHANNEL, channelId: e.id, guildId: e.guild_id };
        case o.rbe.GUILD_VOICE:
            return { type: l.U.VOICE_CHANNEL, channelId: e.id, guildId: e.guild_id };
        default:
            return null;
    }
}
function h(e) {
    return e?.state === "launched";
}
function f(e) {
    return h(e) ? e : null;
}
