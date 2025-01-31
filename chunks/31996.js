n.d(t, { Q: () => u }), n(47120);
var i = n(544891),
    r = n(570140),
    a = n(430824),
    s = n(356264),
    o = n(981631);
let l = new Set();
async function u(e) {
    if (null == a.Z.getGuild(e) && null == s.Z.getGuildOrStatus(e) && !l.has(e)) {
        r.Z.dispatch({
            type: 'BASIC_GUILD_FETCH',
            guildId: e
        }),
            l.add(e);
        try {
            let t = (
                await i.tn.get({
                    url: o.ANM.GUILD_BASIC(e),
                    rejectWithError: !0
                })
            ).body;
            r.Z.dispatch({
                type: 'BASIC_GUILD_FETCH_SUCCESS',
                guildId: e,
                guildInfo: t
            });
        } catch (t) {
            r.Z.dispatch({
                type: 'BASIC_GUILD_FETCH_FAILURE',
                guildId: e
            });
        } finally {
            l.delete(e);
        }
    }
}
