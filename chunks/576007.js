n.d(t, { g: () => d }), n(411104);
var i = n(544891),
    r = n(570140),
    a = n(881052),
    s = n(70956),
    o = n(672458),
    l = n(981631);
function u(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count
    };
}
let c = 3;
async function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (f > c) throw Error('Unable to search guild members after max retries');
    let { autoRetry: _ = !0, signal: p } = n;
    try {
        let a = await i.tn.post({
            url: l.ANM.GUILD_MEMBER_SEARCH(e),
            body: t,
            signal: p,
            rejectWithError: !1
        });
        if (a.status === o.t) {
            if (null == a.body.retry_after) throw Error('Indexing response did not include retry_after');
            if (!_) throw Error('Indexing response received but autoRetry is disabled');
            return (
                await r.Z.dispatch({
                    type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING',
                    guildId: e
                }),
                await new Promise((e) => setTimeout(e, a.body.retry_after * s.Z.Millis.SECOND)),
                d(e, t, n, f + 1)
            );
        }
        return {
            type: o.d.SUCCESSFUL_QUERY,
            body: u(a.body)
        };
    } catch (t) {
        let e = new a.Hx(t);
        return {
            type: o.d.ERROR,
            body: e
        };
    }
}
