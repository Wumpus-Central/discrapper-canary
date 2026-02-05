"use strict";
n.d(t, { y: () => d });
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(927813),
    o = n(405473),
    l = n(652215);
function u(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count,
    };
}
let c = 3;
async function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (_ > c) throw Error("Unable to search guild members after max retries");
    let { autoRetry: f = !0, signal: p } = n;
    try {
        let a = await r.Bo.post({ url: l.Rsh.GUILD_MEMBER_SEARCH(e), body: t, signal: p, rejectWithError: !1 });
        if (202 === a.status) {
            if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
            if (!f) throw Error("Indexing response received but autoRetry is disabled");
            return (
                await i.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", guildId: e }),
                await new Promise((e) => setTimeout(e, a.body.retry_after * s.A.Millis.SECOND)),
                d(e, t, n, _ + 1)
            );
        }
        return { type: o.r.SUCCESSFUL_QUERY, body: u(a.body) };
    } catch (t) {
        let e = new a.LG(t);
        return { type: o.r.ERROR, body: e };
    }
}
