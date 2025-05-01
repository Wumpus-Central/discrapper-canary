n.d(t, { Tm: () => i }), n(539854), n(997841), n(913527), n(592125), n(630388), n(862825);
var r = n(981631);
function i(e) {
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
n(388032);
