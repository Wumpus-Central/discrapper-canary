n.d(t, { y: () => d }), n(65821);
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(927813),
    o = n(405473),
    l = n(652215);
function c(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count,
    };
}
let u = 3;
async function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (f > u) throw Error("Unable to search guild members after max retries");
    let { autoRetry: p = !0, signal: _ } = n;
    try {
        let a = await r.Bo.post({
            url: l.Rsh.GUILD_MEMBER_SEARCH(e),
            body: t,
            signal: _,
            rejectWithError: !1,
        });
        if (202 === a.status) {
            if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
            if (!p) throw Error("Indexing response received but autoRetry is disabled");
            return (
                await i.h.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                    guildId: e,
                }),
                await new Promise((e) => setTimeout(e, a.body.retry_after * s.A.Millis.SECOND)),
                d(e, t, n, f + 1)
            );
        }
        return {
            type: o.r.SUCCESSFUL_QUERY,
            body: c(a.body),
        };
    } catch (t) {
        let e = new a.LG(t);
        return {
            type: o.r.ERROR,
            body: e,
        };
    }
}
