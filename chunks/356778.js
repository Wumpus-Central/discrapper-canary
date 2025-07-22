(t.d(e, {
    II: () => h,
    Ow: () => D,
    P2: () => p,
    mw: () => u,
    z0: () => M
}),
    t(49124),
    t(388685));
var n,
    r = t(73800),
    l = t(94171),
    i = t(362383),
    s = t(731965),
    a = t(570140),
    o = t(110924),
    g = t(840877),
    v = t(952537),
    f = t(981631);
function c(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
let h = -1;
var u = (((n = {}).MESSAGES = 'messages'), (n.LINKS = 'links'), (n.MEDIA = 'media'), (n.ALL_COUNTS = 'all_counts'), n);
function E(A, e, t) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        l = JSON.stringify(n);
    return r ? 'guild_'.concat(e, '_search_tab_').concat(t, '_for_').concat(A, '_with_additonal_').concat(l) : 'guild_'.concat(e, '_search_').concat(t, '_for_').concat(A, '_with_additonal_').concat(l);
}
let d = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: h,
        lastMessage: null
    },
    C = (0, i.F)(() => new Map()),
    B = (A, e) => {
        (0, s.j)(() => {
            C.setState((t) => {
                let n = t.get(A);
                return (null == n ? t.set(A, c({}, d, e)) : t.set(A, c({}, n, e)), t);
            });
        });
    },
    w = (A) => C((e) => e.get(A), l.X);
function D(A, e, t) {
    let n = null != t ? t : {};
    switch (e) {
        case 'links':
            return c(
                {
                    author_id: A,
                    has: ['link']
                },
                n
            );
        case 'media':
            return c(
                {
                    author_id: A,
                    attachment_extension: ['png', 'jpg', 'webp', 'mov', 'mp4', 'gif', 'mp3', 'wav', 'flac', 'ogg', 'opus']
                },
                n
            );
        case 'all_counts':
            return c(
                {
                    author_id: [A],
                    limit: 1,
                    cursor: null
                },
                n
            );
        default:
            return c({ author_id: A }, n);
    }
}
function M(A, e, t) {
    return (function (A, e, t, n) {
        let { addtionalQuery: l, shouldDispatch: i = !1 } = n,
            s = r.useMemo(() => E(A, e, t, l), [A, e, t, l]),
            c = w(s),
            u = (0, o.Z)(s),
            [C, M] = r.useState({});
        return (
            r.useEffect(() => {
                if (u !== s) {
                    let n = D(A, t, l),
                        r = new g.ZP(e, f.aib.GUILD, n);
                    (B(s, {
                        searchFetcher: r,
                        messageCount: h,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            r.fetch(
                                (A) => {
                                    let t = A.body,
                                        n = t.messages[0];
                                    if (
                                        (B(s, {
                                            searchFetcher: r,
                                            result: t,
                                            messageCount: t.total_results,
                                            lastMessage: n
                                        }),
                                        M({}),
                                        i)
                                    ) {
                                        var l, o;
                                        a.Z.dispatch({
                                            type: 'MOD_VIEW_SEARCH_FINISH',
                                            searchId: e,
                                            guildId: e,
                                            analyticsId: t.analytics_id,
                                            totalResults: t.total_results,
                                            channels: t.channels,
                                            messages: t.messages,
                                            threads: null != (l = t.threads) ? l : [],
                                            members: (null != (o = t.members) ? o : []).map((A) => (0, v.Z)(A)),
                                            hasError: !1,
                                            doingHistoricalIndex: t.doing_deep_historical_index,
                                            documentsIndexed: t.documents_indexed
                                        });
                                    }
                                },
                                (A) => {},
                                (A) => {
                                    (B(s, {
                                        messageCount: 0,
                                        lastMessage: null
                                    }),
                                        M({}));
                                }
                            );
                        }));
                }
                return () => {};
            }, [A, e, c, s, t, l, u, i]),
            null != c ? c : d
        );
    })(A, e, 'messages', t);
}
function I(A, e, t, n) {
    let l = r.useMemo(() => E(A, e, t, n, !0), [A, e, t, n]),
        i = w(l),
        s = (0, o.Z)(l);
    return {
        key: l,
        previousKey: s,
        state: i
    };
}
function p(A, e, t) {
    var n, l, i;
    let { key: s, state: a } = I(A, e, 'messages', t),
        { key: o, state: v } = I(A, e, 'links', t),
        { key: c, state: u } = I(A, e, 'media', t),
        E = r.useMemo(() => D(A, 'all_counts', t), [A, t]),
        d = r.useMemo(
            () => ({
                tabs: {
                    messages: D(A, 'messages', E),
                    links: D(A, 'links', E),
                    media: D(A, 'media', E)
                },
                track_exact_total_hits: !0,
                include_nsfw: !0
            }),
            [A, E]
        ),
        C = r.useCallback(
            (A) => {
                let e = A.messages,
                    t = A.links,
                    n = A.media;
                (B(s, e), B(o, t), B(c, n));
            },
            [o, c, s]
        ),
        w = r.useCallback(
            (A) => {
                C({
                    messages: A,
                    links: A,
                    media: A
                });
            },
            [C]
        );
    r.useEffect(() => {
        let A = new g.tJ(e, f.aib.GUILD, E, d);
        w({
            searchTabFetcher: A,
            messageCount: h,
            lastMessage: null
        });
        let t = setTimeout(async () => {
            let e = null;
            try {
                let t = await A.makeRequest();
                e = null == t ? void 0 : t.body;
            } catch (A) {
                e = null;
            }
            if (null == e)
                w({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var t, n, r, l, i, s;
                let A = e.tabs.messages,
                    a = e.tabs.links,
                    o = e.tabs.media;
                C({
                    messages: {
                        messageCount: null != (t = null == A ? void 0 : A.total_results) ? t : 0,
                        lastMessage: null != (n = null == A ? void 0 : A.messages[0]) ? n : null
                    },
                    links: {
                        messageCount: null != (r = null == a ? void 0 : a.total_results) ? r : 0,
                        lastMessage: null != (l = null == a ? void 0 : a.messages[0]) ? l : null
                    },
                    media: {
                        messageCount: null != (i = null == o ? void 0 : o.total_results) ? i : 0,
                        lastMessage: null != (s = null == o ? void 0 : o.messages[0]) ? s : null
                    }
                });
            }
            p({});
        });
        return () => {
            (A.cancel(), clearTimeout(t));
        };
    }, [A, e, E, d, w, C]);
    let [M, p] = r.useState({});
    return {
        messagesCount: null != (n = null == a ? void 0 : a.messageCount) ? n : h,
        linksCount: null != (l = null == v ? void 0 : v.messageCount) ? l : h,
        mediaCount: null != (i = null == u ? void 0 : u.messageCount) ? i : h
    };
}
