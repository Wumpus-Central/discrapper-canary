"use strict";
n.d(t, { y: () => u });
var r = n(562465),
    i = n(73153),
    s = n(198982),
    a = n(927813),
    o = n(405473),
    l = n(652215);
async function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (c > 3) throw Error("Unable to search guild members after max retries");
    let { autoRetry: d = !0, signal: _ } = n;
    try {
        var f;
        let s = await r.Bo.post({ url: l.Rsh.GUILD_MEMBER_SEARCH(e), body: t, signal: _, rejectWithError: !1 });
        if (202 === s.status) {
            if (null == s.body.retry_after) throw Error("Indexing response did not include retry_after");
            if (!d) throw Error("Indexing response received but autoRetry is disabled");
            return (
                await i.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", guildId: e }),
                await new Promise((e) => setTimeout(e, s.body.retry_after * a.A.Millis.SECOND)),
                u(e, t, n, c + 1)
            );
        }
        return {
            type: o.r.SUCCESSFUL_QUERY,
            body: {
                guild_id: (f = s.body).guild_id,
                members: f.members,
                page_result_count: f.page_result_count,
                total_result_count: f.total_result_count,
            },
        };
    } catch (t) {
        let e = new s.LG(t);
        return { type: o.r.ERROR, body: e };
    }
}
