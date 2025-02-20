n.d(t, { Q: () => c }), n(47120);
var r = n(544891),
    i = n(570140),
    o = n(430824),
    a = n(356264),
    s = n(981631);
let l = new Set();
async function c(e) {
    if (null == o.Z.getGuild(e) && null == a.Z.getGuildOrStatus(e) && !l.has(e)) {
        i.Z.dispatch({
            type: 'BASIC_GUILD_FETCH',
            guildId: e
        }),
            l.add(e);
        try {
            let t = (
                await r.tn.get({
                    url: s.ANM.GUILD_BASIC(e),
                    rejectWithError: !0
                })
            ).body;
            i.Z.dispatch({
                type: 'BASIC_GUILD_FETCH_SUCCESS',
                guildId: e,
                guildInfo: t
            });
        } catch (t) {
            i.Z.dispatch({
                type: 'BASIC_GUILD_FETCH_FAILURE',
                guildId: e
            });
        } finally {
            l.delete(e);
        }
    }
}
