n.d(t, { g: () => d }), n(411104);
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(70956),
    s = n(672458),
    l = n(981631);
function c(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count
    };
}
let u = 3;
async function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (f > u) throw Error('Unable to search guild members after max retries');
    let { autoRetry: _ = !0, signal: p } = n;
    try {
        let o = await r.tn.post({
            url: l.ANM.GUILD_MEMBER_SEARCH(e),
            body: t,
            signal: p,
            rejectWithError: !1
        });
        if (o.status === s.t) {
            if (null == o.body.retry_after) throw Error('Indexing response did not include retry_after');
            if (!_) throw Error('Indexing response received but autoRetry is disabled');
            return (
                await i.Z.dispatch({
                    type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING',
                    guildId: e
                }),
                await new Promise((e) => setTimeout(e, o.body.retry_after * a.Z.Millis.SECOND)),
                d(e, t, n, f + 1)
            );
        }
        return {
            type: s.d.SUCCESSFUL_QUERY,
            body: c(o.body)
        };
    } catch (t) {
        let e = new o.Hx(t);
        return {
            type: s.d.ERROR,
            body: e
        };
    }
}
