var i = n(620632),
    r = n(73153),
    a = n(627784),
    s = n(927813),
    l = n(405473),
    o = n(652215);
n.d(
    t,
    {},
    {
        y: async function e(t, n) {
            let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if (c > 3) throw Error("Unable to search guild members after max retries");
            let { autoRetry: u = !0, signal: _ } = d;
            try {
                var E;
                let a = await i.Bo.post({ url: o.Rsh.GUILD_MEMBER_SEARCH(t), body: n, signal: _, rejectWithError: !1 });
                if (202 === a.status) {
                    if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
                    if (!u) throw Error("Indexing response received but autoRetry is disabled");
                    return (
                        await r.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", guildId: t }),
                        await new Promise((e) => setTimeout(e, a.body.retry_after * s.A.Millis.SECOND)),
                        e(t, n, d, c + 1)
                    );
                }
                return {
                    type: l.r.SUCCESSFUL_QUERY,
                    body: {
                        guild_id: (E = a.body).guild_id,
                        members: E.members,
                        page_result_count: E.page_result_count,
                        total_result_count: E.total_result_count,
                    },
                };
            } catch (t) {
                let e = new a.LG(t);
                return { type: l.r.ERROR, body: e };
            }
        },
    },
);
