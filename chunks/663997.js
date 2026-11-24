var n = r(582128),
    u = r(627784),
    l = r(661191),
    i = r(624458),
    s = r(513461);
r.d(
    t,
    {},
    {
        K: function (e) {
            let { guildId: t, guildJoinRequests: r } = e,
                a = n.useRef(new Set()),
                [c, f] = n.useState(null),
                d = n.useRef(null),
                o = n.useRef(!1);
            return {
                fetchNextPage: n.useCallback(
                    async (e, n) => {
                        if (a.current.has(n)) return;
                        let h = `${e}-${n}`,
                            g = !1;
                        if ((h !== d.current && ((d.current = h), (o.current = !1), (g = !0)), o.current)) return;
                        null != c && f(null);
                        let p = (function (e, t, r, n, u) {
                            let i = n === s.B5.SUBMITTED;
                            if (r === s._e.TIMESTAMP_DESC)
                                if (u || 0 === t.length)
                                    return { before: l.default.fromTimestamp(new Date().getTime()) };
                                else {
                                    let e = t[t.length - 1];
                                    return { before: i ? e.joinRequestId : e.actionedAt };
                                }
                            {
                                if (u || 0 === t.length) return { after: e };
                                let r = t[t.length - 1];
                                return { after: i ? r.joinRequestId : r.actionedAt };
                            }
                        })(t, r, e, n, g);
                        try {
                            a.current.add(n);
                            let e = await i.A.fetchGuildJoinRequests({
                                guildId: t,
                                status: n,
                                limit: 100,
                                force: !0,
                                ...p,
                            });
                            if (null != e && h === d.current) {
                                let { guild_join_requests: t } = e.body;
                                t.length < 100 && (o.current = !0);
                            }
                        } catch (e) {
                            f(new u.LG(e).getAnyErrorMessage());
                        } finally {
                            a.current.delete(n);
                        }
                    },
                    [c, t, r],
                ),
                error: c,
            };
        },
        L: 100,
    },
);
