n.d(t, {
    II: () => f,
    Ow: () => C,
    P2: () => O,
    mw: () => m,
    z0: () => v
}),
    n(49124),
    n(388685);
var r,
    i = n(73800),
    l = n(94171),
    a = n(362383),
    o = n(731965),
    s = n(570140),
    c = n(110924),
    u = n(840877),
    d = n(952537),
    p = n(981631);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let f = -1;
var m = (((r = {}).MESSAGES = 'messages'), (r.LINKS = 'links'), (r.MEDIA = 'media'), (r.ALL_COUNTS = 'all_counts'), r);
function g(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        l = JSON.stringify(r);
    return i ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(l) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(l);
}
let b = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: f,
        lastMessage: null
    },
    _ = (0, a.F)(() => new Map()),
    x = (e, t) => {
        (0, o.j)(() => {
            _.setState((n) => {
                let r = n.get(e);
                return null == r ? n.set(e, h({}, b, t)) : n.set(e, h({}, r, t)), n;
            });
        });
    },
    y = (e) => _((t) => t.get(e), l.X);
function C(e, t, n) {
    let r = null != n ? n : {};
    switch (t) {
        case 'links':
            return h(
                {
                    author_id: e,
                    has: ['link']
                },
                r
            );
        case 'media':
            return h(
                {
                    author_id: e,
                    attachment_extension: ['png', 'jpg', 'webp', 'mov', 'mp4', 'gif', 'mp3', 'wav', 'flac', 'ogg', 'opus']
                },
                r
            );
        case 'all_counts':
            return h(
                {
                    author_id: [e],
                    limit: 1,
                    cursor: null
                },
                r
            );
        default:
            return h({ author_id: e }, r);
    }
}
function v(e, t, n) {
    return (function (e, t, n, r) {
        let { addtionalQuery: l, shouldDispatch: a = !1 } = r,
            o = i.useMemo(() => g(e, t, n, l), [e, t, n, l]),
            h = y(o),
            m = (0, c.Z)(o),
            [_, v] = i.useState({});
        return (
            i.useEffect(() => {
                if (m !== o) {
                    let r = C(e, n, l),
                        i = new u.ZP(t, p.aib.GUILD, r);
                    x(o, {
                        searchFetcher: i,
                        messageCount: f,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            i.fetch(
                                (e) => {
                                    let n = e.body,
                                        r = n.messages[0];
                                    if (
                                        (x(o, {
                                            searchFetcher: i,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: r
                                        }),
                                        v({}),
                                        a)
                                    ) {
                                        var l, c;
                                        s.Z.dispatch({
                                            type: 'MOD_VIEW_SEARCH_FINISH',
                                            searchId: t,
                                            guildId: t,
                                            analyticsId: n.analytics_id,
                                            totalResults: n.total_results,
                                            channels: n.channels,
                                            messages: n.messages,
                                            threads: null != (l = n.threads) ? l : [],
                                            members: (null != (c = n.members) ? c : []).map((e) => (0, d.Z)(e)),
                                            hasError: !1,
                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                            documentsIndexed: n.documents_indexed
                                        });
                                    }
                                },
                                (e) => {},
                                (e) => {
                                    x(o, {
                                        messageCount: 0,
                                        lastMessage: null
                                    }),
                                        v({});
                                }
                            );
                        });
                }
                return () => {};
            }, [e, t, h, o, n, l, m, a]),
            null != h ? h : b
        );
    })(e, t, 'messages', n);
}
function j(e, t, n, r) {
    let l = i.useMemo(() => g(e, t, n, r, !0), [e, t, n, r]),
        a = y(l),
        o = (0, c.Z)(l);
    return {
        key: l,
        previousKey: o,
        state: a
    };
}
function O(e, t, n) {
    var r, l, a;
    let { key: o, state: s } = j(e, t, 'messages', n),
        { key: c, state: d } = j(e, t, 'links', n),
        { key: h, state: m } = j(e, t, 'media', n),
        g = i.useMemo(() => C(e, 'all_counts', n), [e, n]),
        b = i.useMemo(
            () => ({
                tabs: {
                    messages: C(e, 'messages', g),
                    links: C(e, 'links', g),
                    media: C(e, 'media', g)
                },
                track_exact_total_hits: !0,
                include_nsfw: !0
            }),
            [e, g]
        ),
        _ = i.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    r = e.media;
                x(o, t), x(c, n), x(h, r);
            },
            [c, h, o]
        ),
        y = i.useCallback(
            (e) => {
                _({
                    messages: e,
                    links: e,
                    media: e
                });
            },
            [_]
        );
    i.useEffect(() => {
        let e = new u.tJ(t, p.aib.GUILD, g, b);
        y({
            searchTabFetcher: e,
            messageCount: f,
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
                y({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var n, r, i, l, a, o;
                let e = t.tabs.messages,
                    s = t.tabs.links,
                    c = t.tabs.media;
                _({
                    messages: {
                        messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
                        lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null
                    },
                    links: {
                        messageCount: null != (i = null == s ? void 0 : s.total_results) ? i : 0,
                        lastMessage: null != (l = null == s ? void 0 : s.messages[0]) ? l : null
                    },
                    media: {
                        messageCount: null != (a = null == c ? void 0 : c.total_results) ? a : 0,
                        lastMessage: null != (o = null == c ? void 0 : c.messages[0]) ? o : null
                    }
                });
            }
            O({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, g, b, y, _]);
    let [v, O] = i.useState({});
    return {
        messagesCount: null != (r = null == s ? void 0 : s.messageCount) ? r : f,
        linksCount: null != (l = null == d ? void 0 : d.messageCount) ? l : f,
        mediaCount: null != (a = null == m ? void 0 : m.messageCount) ? a : f
    };
}
