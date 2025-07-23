(r.d(t, {
    Tm: () => i,
    WJ: () => a,
    s5: () => c
}),
    r(539854),
    r(997841),
    r(913527));
var n = r(592125);
(r(630388), r(862825));
var l = r(981631);
function i(e) {
    switch (e.type) {
        case l.aib.GUILD:
            return e.guildId;
        case l.aib.GUILD_CHANNEL:
        case l.aib.CHANNEL:
        case l.aib.THREAD:
            return e.channelId;
        case l.aib.DMS:
        case l.aib.FAVORITES:
            return e.type;
    }
}
function a(e) {
    switch (e.type) {
        case l.aib.GUILD:
        case l.aib.GUILD_CHANNEL:
            return e.guildId;
        case l.aib.CHANNEL:
        case l.aib.THREAD:
            return e.channelId;
        case l.aib.DMS:
        case l.aib.FAVORITES:
            return e.type;
    }
}
function c(e) {
    switch (e.type) {
        case l.aib.GUILD_CHANNEL:
        case l.aib.GUILD:
            return e.guildId;
        case l.aib.CHANNEL:
            var t;
            let r = n.Z.getChannel(e.channelId);
            return null != (t = null == r ? void 0 : r.guild_id) ? t : null;
        default:
            return null;
    }
}
r(388032);
