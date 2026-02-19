"use strict";
n.d(t, { K: () => u, L: () => d });
var i = n(64700),
    s = n(989349),
    l = n.n(s),
    r = n(198982),
    a = n(661191),
    o = n(624458),
    c = n(513461);
let d = 100;
function u(e) {
    let { guildId: t, guildJoinRequests: n } = e,
        s = i.useRef(!1),
        [u, h] = i.useState(null),
        A = i.useRef(null),
        p = i.useRef(!1);
    return {
        fetchNextPage: i.useCallback(
            async (e, i) => {
                if (s.current) return;
                let g = `${e}-${i}`,
                    m = !1;
                if ((g !== A.current && ((A.current = g), (p.current = !1), (m = !0)), p.current)) return;
                null != u && h(null);
                let _ = (function (e, t, n, i) {
                    let s = n === c.B5.SUBMITTED;
                    if (t === c._e.TIMESTAMP_DESC)
                        if (i) return { before: a.default.fromTimestamp(new Date().getTime()) };
                        else {
                            let t = e[e.length - 1];
                            return { before: s ? t.joinRequestId : t.actionedAt };
                        }
                    if (i) return { after: a.default.fromTimestamp(l()().subtract(180, "days").valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: s ? t.joinRequestId : t.actionedAt };
                    }
                })(n, e, i, m);
                try {
                    s.current = !0;
                    let e = await o.A.fetchGuildJoinRequests({ guildId: t, status: i, limit: d, force: !0, ..._ });
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < d && (p.current = !0);
                    }
                } catch (e) {
                    h(new r.LG(e).getAnyErrorMessage());
                } finally {
                    s.current = !1;
                }
            },
            [u, t, n],
        ),
        error: u,
    };
}
