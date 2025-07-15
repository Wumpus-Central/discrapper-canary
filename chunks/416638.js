(n.d(t, {
    Tm: () => l,
    WJ: () => o,
    s5: () => s
}),
    n(539854),
    n(997841),
    n(913527));
var i = n(592125);
(n(630388), n(862825));
var r = n(981631);
function l(e) {
    switch (e.type) {
        case r.aib.GUILD:
            return e.guildId;
        case r.aib.GUILD_CHANNEL:
        case r.aib.CHANNEL:
        case r.aib.THREAD:
            return e.channelId;
        case r.aib.DMS:
        case r.aib.FAVORITES:
            return e.type;
    }
}
function o(e) {
    switch (e.type) {
        case r.aib.GUILD:
        case r.aib.GUILD_CHANNEL:
            return e.guildId;
        case r.aib.CHANNEL:
        case r.aib.THREAD:
            return e.channelId;
        case r.aib.DMS:
        case r.aib.FAVORITES:
            return e.type;
    }
}
function s(e) {
    switch (e.type) {
        case r.aib.GUILD_CHANNEL:
        case r.aib.GUILD:
            return e.guildId;
        case r.aib.CHANNEL:
            var t;
            let n = i.Z.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        default:
            return null;
    }
}
n(388032);
