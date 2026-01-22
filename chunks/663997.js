n.d(t, {
    K: () => d,
    L: () => u,
}),
    n(896048);
var r = n(64700),
    l = n(989349),
    i = n.n(l),
    a = n(198982),
    s = n(661191),
    o = n(624458),
    c = n(513461);
let u = 100;
function d(e) {
    let { guildId: t, guildJoinRequests: n } = e,
        l = r.useRef(!1),
        [d, f] = r.useState(null),
        p = r.useRef(null),
        h = r.useRef(!1);
    return {
        fetchNextPage: r.useCallback(
            async (e, r) => {
                if (l.current) return;
                let b = "".concat(e, "-").concat(r),
                    g = !1;
                if ((b !== p.current && ((p.current = b), (h.current = !1), (g = !0)), h.current)) return;
                null != d && f(null);
                let m = (function (e, t, n, r) {
                    let l = n === c.B5.SUBMITTED;
                    if (t === c._e.TIMESTAMP_DESC)
                        if (r) return { before: s.default.fromTimestamp(new Date().getTime()) };
                        else {
                            let t = e[e.length - 1];
                            return { before: l ? t.joinRequestId : t.actionedAt };
                        }
                    if (r) return { after: s.default.fromTimestamp(i()().subtract(180, "days").valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: l ? t.joinRequestId : t.actionedAt };
                    }
                })(n, e, r, g);
                try {
                    l.current = !0;
                    let e = await o.A.fetchGuildJoinRequests(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                guildId: t,
                                status: r,
                                limit: u,
                                force: !0,
                            },
                            m,
                        ),
                    );
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < u && (h.current = !0);
                    }
                } catch (e) {
                    f(new a.LG(e).getAnyErrorMessage());
                } finally {
                    l.current = !1;
                }
            },
            [d, t, n],
        ),
        error: d,
    };
}
