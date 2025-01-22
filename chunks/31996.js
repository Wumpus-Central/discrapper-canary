r.d(n, {
    Q: function () {
        return d;
    }
});
var i = r(47120);
var a = r(544891),
    o = r(570140),
    s = r(430824),
    l = r(356264),
    u = r(981631);
let c = new Set();
async function d(e) {
    if (null == s.Z.getGuild(e) && null == l.Z.getGuildOrStatus(e)) {
        if (!c.has(e)) {
            o.Z.dispatch({
                type: 'BASIC_GUILD_FETCH',
                guildId: e
            }),
                c.add(e);
            try {
                let n = (
                    await a.tn.get({
                        url: u.ANM.GUILD_BASIC(e),
                        rejectWithError: !0
                    })
                ).body;
                o.Z.dispatch({
                    type: 'BASIC_GUILD_FETCH_SUCCESS',
                    guildId: e,
                    guildInfo: n
                });
            } catch (n) {
                o.Z.dispatch({
                    type: 'BASIC_GUILD_FETCH_FAILURE',
                    guildId: e
                });
            } finally {
                c.delete(e);
            }
        }
    }
}
