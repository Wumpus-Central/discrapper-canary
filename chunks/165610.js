n.d(t, {
    HD: () => _,
    VA: () => u,
    Yf: () => c,
    h: () => E,
    ny: () => h,
    sV: () => d,
    sd: () => o,
    x1: () => A,
    y0: () => l,
});
var i,
    r,
    a = n(991690),
    s = n(652215),
    l = (((i = {})[(i.FOCUSED = 0)] = "FOCUSED"), (i[(i.PIP = 1)] = "PIP"), i);
let o = { type: a.U.MAIN };
var d = (((r = {})[(r.MAIN = 0)] = "MAIN"), (r[(r.INLINE = 1)] = "INLINE"), r);
function c(e) {
    switch (e.type) {
        case a.U.MAIN:
            return 0;
        case a.U.APP_CHANNEL:
        case a.U.VOICE_CHANNEL:
            return 1;
    }
}
function u(e, t) {
    switch (t.type) {
        case a.U.MAIN:
            return `main:${e}`;
        case a.U.APP_CHANNEL:
            return `app-channel:${e}:${t.channelId}`;
        case a.U.VOICE_CHANNEL:
            return `voice-channel:${e}:${t.channelId}`;
    }
}
function _(e) {
    switch (e.type) {
        case s.rbe.GUILD_APP:
            return { type: a.U.APP_CHANNEL, channelId: e.id, guildId: e.guild_id };
        case s.rbe.GUILD_VOICE:
            return { type: a.U.VOICE_CHANNEL, channelId: e.id, guildId: e.guild_id };
        default:
            return null;
    }
}
function E(e) {
    if (null != e)
        switch (e.type) {
            case a.U.MAIN:
                return;
            case a.U.APP_CHANNEL:
            case a.U.VOICE_CHANNEL:
                return e.channelId;
        }
}
function A(e) {
    return e?.state === "launched";
}
function h(e) {
    return A(e) ? e : null;
}
