(n.d(t, {
    II: () => A,
    Ow: () => N,
    P2: () => p,
    mw: () => T,
    z0: () => h
}),
    n(49124),
    n(388685));
var r,
    l = n(73800),
    i = n(94171),
    s = n(362383),
    a = n(731965),
    o = n(570140),
    u = n(110924),
    c = n(840877),
    E = n(952537),
    d = n(981631);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let A = -1;
var T = (((r = {}).MESSAGES = 'messages'), (r.LINKS = 'links'), (r.MEDIA = 'media'), (r.ALL_COUNTS = 'all_counts'), r);
function I(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = JSON.stringify(r);
    return l ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(i) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(i);
}
let g = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: A,
        lastMessage: null
    },
    m = (0, s.F)(() => new Map()),
    f = (e, t) => {
        (0, a.j)(() => {
            m.setState((n) => {
                let r = n.get(e);
                return (null == r ? n.set(e, _({}, g, t)) : n.set(e, _({}, r, t)), n);
            });
        });
    },
    O = (e) => m((t) => t.get(e), i.X);
function N(e, t, n) {
    let r = null != n ? n : {};
    switch (t) {
        case 'links':
            return _(
                {
                    author_id: e,
                    has: ['link']
                },
                r
            );
        case 'media':
            return _(
                {
                    author_id: e,
                    attachment_extension: ['png', 'jpg', 'webp', 'mov', 'mp4', 'gif', 'mp3', 'wav', 'flac', 'ogg', 'opus']
                },
                r
            );
        case 'all_counts':
            return _(
                {
                    author_id: [e],
                    limit: 1,
                    cursor: null
                },
                r
            );
        default:
            return _({ author_id: e }, r);
    }
}
function h(e, t, n) {
    return (function (e, t, n, r) {
        let { addtionalQuery: i, shouldDispatch: s = !1 } = r,
            a = l.useMemo(() => I(e, t, n, i), [e, t, n, i]),
            _ = O(a),
            T = (0, u.Z)(a),
            [m, h] = l.useState({});
        return (
            l.useEffect(() => {
                if (T !== a) {
                    let r = N(e, n, i),
                        l = new c.ZP(t, d.aib.GUILD, r);
                    (f(a, {
                        searchFetcher: l,
                        messageCount: A,
                        lastMessage: null
                    }),
                        setTimeout(() => {
                            l.fetch(
                                (e) => {
                                    let n = e.body,
                                        r = n.messages[0];
                                    if (
                                        (f(a, {
                                            searchFetcher: l,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: r
                                        }),
                                        h({}),
                                        s)
                                    ) {
                                        var i, u;
                                        o.Z.dispatch({
                                            type: 'MOD_VIEW_SEARCH_FINISH',
                                            searchId: t,
                                            guildId: t,
                                            analyticsId: n.analytics_id,
                                            totalResults: n.total_results,
                                            channels: n.channels,
                                            messages: n.messages,
                                            threads: null != (i = n.threads) ? i : [],
                                            members: (null != (u = n.members) ? u : []).map((e) => (0, E.Z)(e)),
                                            hasError: !1,
                                            doingHistoricalIndex: n.doing_deep_historical_index,
                                            documentsIndexed: n.documents_indexed
                                        });
                                    }
                                },
                                (e) => {},
                                (e) => {
                                    (f(a, {
                                        messageCount: 0,
                                        lastMessage: null
                                    }),
                                        h({}));
                                }
                            );
                        }));
                }
                return () => {};
            }, [e, t, _, a, n, i, T, s]),
            null != _ ? _ : g
        );
    })(e, t, 'messages', n);
}
function R(e, t, n, r) {
    let i = l.useMemo(() => I(e, t, n, r, !0), [e, t, n, r]),
        s = O(i),
        a = (0, u.Z)(i);
    return {
        key: i,
        previousKey: a,
        state: s
    };
}
function p(e, t, n) {
    var r, i, s;
    let { key: a, state: o } = R(e, t, 'messages', n),
        { key: u, state: E } = R(e, t, 'links', n),
        { key: _, state: T } = R(e, t, 'media', n),
        I = l.useMemo(() => N(e, 'all_counts', n), [e, n]),
        g = l.useMemo(
            () => ({
                tabs: {
                    messages: N(e, 'messages', I),
                    links: N(e, 'links', I),
                    media: N(e, 'media', I)
                },
                track_exact_total_hits: !0,
                include_nsfw: !0
            }),
            [e, I]
        ),
        m = l.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    r = e.media;
                (f(a, t), f(u, n), f(_, r));
            },
            [u, _, a]
        ),
        O = l.useCallback(
            (e) => {
                m({
                    messages: e,
                    links: e,
                    media: e
                });
            },
            [m]
        );
    l.useEffect(() => {
        let e = new c.tJ(t, d.aib.GUILD, I, g);
        O({
            searchTabFetcher: e,
            messageCount: A,
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
                O({
                    messageCount: 0,
                    lastMessage: null
                });
            else {
                var n, r, l, i, s, a;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    u = t.tabs.media;
                m({
                    messages: {
                        messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
                        lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null
                    },
                    links: {
                        messageCount: null != (l = null == o ? void 0 : o.total_results) ? l : 0,
                        lastMessage: null != (i = null == o ? void 0 : o.messages[0]) ? i : null
                    },
                    media: {
                        messageCount: null != (s = null == u ? void 0 : u.total_results) ? s : 0,
                        lastMessage: null != (a = null == u ? void 0 : u.messages[0]) ? a : null
                    }
                });
            }
            p({});
        });
        return () => {
            (e.cancel(), clearTimeout(n));
        };
    }, [e, t, I, g, O, m]);
    let [h, p] = l.useState({});
    return {
        messagesCount: null != (r = null == o ? void 0 : o.messageCount) ? r : A,
        linksCount: null != (i = null == E ? void 0 : E.messageCount) ? i : A,
        mediaCount: null != (s = null == T ? void 0 : T.messageCount) ? s : A
    };
}
