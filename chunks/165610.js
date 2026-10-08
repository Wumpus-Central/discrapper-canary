n.d(t, {
    HD: () => h,
    VA: () => A,
    Yf: () => E,
    ZN: () => u,
    ny: () => p,
    sV: () => _,
    sd: () => c,
    x1: () => f,
    y0: () => d,
    zB: () => I,
});
var i,
    r,
    a = n(284009),
    s = n.n(a),
    l = n(991690),
    o = n(652215),
    d = (((i = {})[(i.FOCUSED = 0)] = "FOCUSED"), (i[(i.PIP = 1)] = "PIP"), i);
let c = { type: l.U.MAIN },
    u = { type: l.U.OVERLAY };
var _ = (((r = {})[(r.MAIN = 0)] = "MAIN"), (r[(r.INLINE = 1)] = "INLINE"), r);
function E(e) {
    switch (e.type) {
        case l.U.MAIN:
            return 0;
        case l.U.APP_CHANNEL:
        case l.U.VOICE_CHANNEL:
        case l.U.OVERLAY:
            return 1;
        case l.U.INTERACTION_MODAL:
            s()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface");
    }
}
function A(e, t) {
    switch (t.type) {
        case l.U.MAIN:
            return `main:${e}`;
        case l.U.APP_CHANNEL:
            return `app-channel:${e}:${t.channelId}`;
        case l.U.VOICE_CHANNEL:
            return `voice-channel:${e}:${t.channelId}`;
        case l.U.OVERLAY:
            return `overlay:${e}`;
        case l.U.INTERACTION_MODAL:
            s()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface");
    }
}
function h(e) {
    switch (e.type) {
        case o.rbe.GUILD_APP:
            return { type: l.U.APP_CHANNEL, channelId: e.id, guildId: e.guild_id };
        case o.rbe.GUILD_VOICE:
            return { type: l.U.VOICE_CHANNEL, channelId: e.id, guildId: e.guild_id };
        default:
            return null;
    }
}
function f(e) {
    return e?.state === "launched";
}
function I(e) {
    return f(e) ? e.data.hostWindowKey : e.hostWindowKey;
}
function p(e) {
    return f(e) ? e : null;
}
