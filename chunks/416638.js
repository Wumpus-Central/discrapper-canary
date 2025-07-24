(n.d(t, {
    Tm: () => l,
    WJ: () => a,
    s5: () => o
}),
    n(539854),
    n(997841),
    n(913527));
var r = n(592125);
(n(630388), n(862825));
var i = n(981631);
function l(e) {
    switch (e.type) {
        case i.aib.GUILD:
            return e.guildId;
        case i.aib.GUILD_CHANNEL:
        case i.aib.CHANNEL:
        case i.aib.THREAD:
            return e.channelId;
        case i.aib.DMS:
        case i.aib.FAVORITES:
            return e.type;
    }
}
function a(e) {
    switch (e.type) {
        case i.aib.GUILD:
        case i.aib.GUILD_CHANNEL:
        case i.aib.THREAD:
            return e.guildId;
        case i.aib.CHANNEL:
            return e.channelId;
        case i.aib.DMS:
        case i.aib.FAVORITES:
            return e.type;
    }
}
function o(e) {
    switch (e.type) {
        case i.aib.THREAD:
        case i.aib.GUILD_CHANNEL:
        case i.aib.GUILD:
            return e.guildId;
        case i.aib.CHANNEL:
            var t;
            let n = r.Z.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        default:
            return null;
    }
}
n(388032);
