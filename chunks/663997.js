r.d(t, { K: () => o, L: () => f });
var n = r(64700),
    u = r(989349),
    l = r.n(u),
    a = r(845584),
    i = r(935208),
    s = r(624458),
    c = r(513461);
let f = 100;
function o(e) {
    let { guildId: t, guildJoinRequests: r } = e,
        u = n.useRef(!1),
        [o, d] = n.useState(null),
        h = n.useRef(null),
        g = n.useRef(!1);
    return {
        fetchNextPage: n.useCallback(
            async (e, n) => {
                if (u.current) return;
                let p = `${e}-${n}`,
                    m = !1;
                if ((p !== h.current && ((h.current = p), (g.current = !1), (m = !0)), g.current)) return;
                null != o && d(null);
                let b = (function (e, t, r, n) {
                    let u = r === c.B5.SUBMITTED;
                    if (t === c._e.TIMESTAMP_DESC)
                        if (n || 0 === e.length) return { before: i.default.fromTimestamp(new Date().getTime()) };
                        else {
                            let t = e[e.length - 1];
                            return { before: u ? t.joinRequestId : t.actionedAt };
                        }
                    if (n || 0 === e.length)
                        return { after: i.default.fromTimestamp(l()().subtract(180, "days").valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: u ? t.joinRequestId : t.actionedAt };
                    }
                })(r, e, n, m);
                try {
                    u.current = !0;
                    let e = await s.A.fetchGuildJoinRequests({ guildId: t, status: n, limit: f, force: !0, ...b });
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < f && (g.current = !0);
                    }
                } catch (e) {
                    d(new a.LG(e).getAnyErrorMessage());
                } finally {
                    u.current = !1;
                }
            },
            [o, t, r],
        ),
        error: o,
    };
}
