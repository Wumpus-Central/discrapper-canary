n.d(t, { K: () => u, L: () => d });
var i = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(198982),
    r = n(661191),
    o = n(624458),
    c = n(513461);
let d = 100;
function u(e) {
    let { guildId: t, guildJoinRequests: n } = e,
        l = i.useRef(!1),
        [u, h] = i.useState(null),
        A = i.useRef(null),
        _ = i.useRef(!1);
    return {
        fetchNextPage: i.useCallback(
            async (e, i) => {
                if (l.current) return;
                let m = `${e}-${i}`,
                    g = !1;
                if ((m !== A.current && ((A.current = m), (_.current = !1), (g = !0)), _.current)) return;
                null != u && h(null);
                let p = (function (e, t, n, i) {
                    let l = n === c.B5.SUBMITTED;
                    if (t === c._e.TIMESTAMP_DESC)
                        if (i) return { before: r.default.fromTimestamp(new Date().getTime()) };
                        else {
                            let t = e[e.length - 1];
                            return { before: l ? t.joinRequestId : t.actionedAt };
                        }
                    if (i) return { after: r.default.fromTimestamp(s()().subtract(180, "days").valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: l ? t.joinRequestId : t.actionedAt };
                    }
                })(n, e, i, g);
                try {
                    l.current = !0;
                    let e = await o.A.fetchGuildJoinRequests({ guildId: t, status: i, limit: d, force: !0, ...p });
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < d && (_.current = !0);
                    }
                } catch (e) {
                    h(new a.LG(e).getAnyErrorMessage());
                } finally {
                    l.current = !1;
                }
            },
            [u, t, n],
        ),
        error: u,
    };
}
