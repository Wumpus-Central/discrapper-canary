n.d(t, {
    II: () => p,
    Ow: () => v,
    P2: () => b,
    mw: () => m,
    z0: () => E
}),
    n(47120);
var i,
    l = n(192379),
    a = n(232713),
    r = n(65400),
    s = n(731965),
    o = n(570140),
    c = n(110924),
    d = n(840877),
    u = n(952537),
    h = n(981631);
let p = -1;
var m = (((i = {}).MESSAGES = 'messages'), (i.LINKS = 'links'), (i.MEDIA = 'media'), (i.ALL_COUNTS = 'all_counts'), i);
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(i);
    return l ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(a) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(a);
}
let g = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: p,
        lastMessage: null
    },
    _ = (0, r.F)(() => new Map()),
    C = (e, t) => {
        (0, s.j)(() => {
            _.setState((n) => {
                let i = n.get(e);
                return (
                    null == i
                        ? n.set(e, {
                              ...g,
                              ...t
                          })
                        : n.set(e, {
                              ...i,
                              ...t
                          }),
                    n
                );
            });
        });
    },
    x = (e) => _((t) => t.get(e), a.X);
function v(e, t, n) {
    let i = null != n ? n : {};
    switch (t) {
        case 'links':
            return {
                author_id: e,
                has: ['link'],
                ...i
            };
        case 'media':
            return {
                author_id: e,
                attachment_extension: ['png', 'jpg', 'webp', 'mov', 'mp4', 'gif', 'mp3', 'wav', 'flac', 'ogg', 'opus'],
                ...i
            };
        case 'all_counts':
            return {
                author_id: [e],
                limit: 1,
                cursor: null,
                ...i
            };
        default:
            return {
                author_id: e,
                ...i
            };
    }
}
function E(e, t, n) {
    return (function (e, t, n, i) {
        let { addtionalQuery: a, shouldDispatch: r = !1 } = i,
            s = l.useMemo(() => f(e, t, n, a), [e, t, n, a]),
            m = x(s),
            _ = (0, c.Z)(s),
            [E, I] = l.useState({});
        return (
            l.useEffect(() => {
                if (_ !== s) {
                    let i = v(e, n, a),
                        l = new d.ZP(t, h.aib.GUILD, i);
                    C(s, {
                        searchFetcher: l,
                        messageCount: p,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            l.fetch(
                                (e) => {
                                    let n = e.body,
                                        i = n.messages[0];
                                    if (
                                        (C(s, {
                                            searchFetcher: l,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: i
                                        }),
                                        I({}),
                                        r)
                                    ) {
                                        var a, c;
                                        o.Z.dispatch({
                                            type: 'MOD_VIEW_SEARCH_FINISH',
                                            searchId: t,
                                            guildId: t,
                                            analyticsId: n.analytics_id,
                                            totalResults: n.total_results,
                                            channels: n.channels,
                                            messages: n.messages,
                                            threads: null !== (a = n.threads) && void 0 !== a ? a : [],
                                            members: (null !== (c = n.members) && void 0 !== c ? c : []).map((e) => (0, u.Z)(e)),
                                            hasError: !1,
                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                            documentsIndexed: n.documents_indexed
                                        });
                                    }
                                },
                                (e) => {},
                                (e) => {
                                    C(s, {
                                        messageCount: 0,
                                        lastMessage: null
                                    }),
                                        I({});
                                }
                            );
                        });
                }
                return () => {};
            }, [e, t, m, s, n, a, _, r]),
            null != m ? m : g
        );
    })(e, t, 'messages', n);
}
function I(e, t, n, i) {
    let a = l.useMemo(() => f(e, t, n, i, !0), [e, t, n, i]),
        r = x(a),
        s = (0, c.Z)(a);
    return {
        key: a,
        previousKey: s,
        state: r
    };
}
function b(e, t, n) {
    var i, a, r;
    let { key: s, state: o } = I(e, t, 'messages', n),
        { key: c, state: u } = I(e, t, 'links', n),
        { key: m, state: f } = I(e, t, 'media', n),
        g = l.useMemo(() => v(e, 'all_counts', n), [e, n]),
        _ = l.useMemo(
            () => ({
                tabs: {
                    messages: v(e, 'messages', g),
                    links: v(e, 'links', g),
                    media: v(e, 'media', g)
                },
                track_exact_total_hits: !0
            }),
            [e, g]
        ),
        x = l.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    i = e.media;
                C(s, t), C(c, n), C(m, i);
            },
            [c, m, s]
        ),
        E = l.useCallback(
            (e) => {
                x({
                    messages: e,
                    links: e,
                    media: e
                });
            },
            [x]
        );
    l.useEffect(() => {
        let e = new d.tJ(t, h.aib.GUILD, g, _);
        E({
            searchTabFetcher: e,
            messageCount: p,
            lastMessage: null
        });
        let n = setTimeout(async () => {
            let t = null;
            try {
                let n = await e.makeRequest();
                t = null == n ? void 0 : n.body;
            } catch (e) {
                t = null;
            }
            if (null == t)
                E({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var n, i, l, a, r, s;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    c = t.tabs.media;
                x({
                    messages: {
                        messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
                        lastMessage: null !== (i = null == e ? void 0 : e.messages[0]) && void 0 !== i ? i : null
                    },
                    links: {
                        messageCount: null !== (l = null == o ? void 0 : o.total_results) && void 0 !== l ? l : 0,
                        lastMessage: null !== (a = null == o ? void 0 : o.messages[0]) && void 0 !== a ? a : null
                    },
                    media: {
                        messageCount: null !== (r = null == c ? void 0 : c.total_results) && void 0 !== r ? r : 0,
                        lastMessage: null !== (s = null == c ? void 0 : c.messages[0]) && void 0 !== s ? s : null
                    }
                });
            }
            Z({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, g, _, E, x]);
    let [b, Z] = l.useState({});
    return {
        messagesCount: null !== (i = null == o ? void 0 : o.messageCount) && void 0 !== i ? i : p,
        linksCount: null !== (a = null == u ? void 0 : u.messageCount) && void 0 !== a ? a : p,
        mediaCount: null !== (r = null == f ? void 0 : f.messageCount) && void 0 !== r ? r : p
    };
}
