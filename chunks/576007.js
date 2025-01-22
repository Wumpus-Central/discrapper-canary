r.d(n, {
    g: function () {
        return p;
    }
});
var i = r(411104);
var a = r(544891),
    o = r(570140),
    s = r(881052),
    l = r(70956),
    u = r(672458),
    c = r(981631);
function d(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count
    };
}
let f = 3;
async function p(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (i > f) throw Error('Unable to search guild members after max retries');
    let { autoRetry: h = !0, signal: _ } = r;
    try {
        let s = await a.tn.post({
            url: c.ANM.GUILD_MEMBER_SEARCH(e),
            body: n,
            signal: _,
            rejectWithError: !1
        });
        if (s.status === u.t) {
            if (null == s.body.retry_after) throw Error('Indexing response did not include retry_after');
            if (!h) throw Error('Indexing response received but autoRetry is disabled');
            return (
                await o.Z.dispatch({
                    type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING',
                    guildId: e
                }),
                await new Promise((e) => setTimeout(e, s.body.retry_after * l.Z.Millis.SECOND)),
                p(e, n, r, i + 1)
            );
        }
        return {
            type: u.d.SUCCESSFUL_QUERY,
            body: d(s.body)
        };
    } catch (n) {
        let e = new s.Hx(n);
        return {
            type: u.d.ERROR,
            body: e
        };
    }
}
