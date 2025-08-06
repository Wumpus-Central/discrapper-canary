n.d(t, {
    II: () => A,
    Ow: () => h,
    P2: () => R,
    mw: () => T,
    z0: () => O,
}),
    n(49124),
    n(388685);
var r,
    l = n(73800),
    s = n(94171),
    i = n(362383),
    a = n(731965),
    o = n(570140),
    u = n(110924),
    c = n(558706),
    E = n(952537),
    d = n(981631);
function _(e) {
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
}
let A = -1;
var T = (((r = {}).MESSAGES = "messages"), (r.LINKS = "links"), (r.MEDIA = "media"), (r.ALL_COUNTS = "all_counts"), r);
function m(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = JSON.stringify(r);
    return l
        ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s)
        : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s);
}
let I = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: A,
        lastMessage: null,
    },
    g = (0, i.F)(() => new Map()),
    f = (e, t) => {
        (0, a.j)(() => {
            g.setState((n) => {
                let r = n.get(e);
                return null == r ? n.set(e, _({}, I, t)) : n.set(e, _({}, r, t)), n;
            });
        });
    },
    N = (e) => g((t) => t.get(e), s.X);
function h(e, t, n) {
    let r = null != n ? n : {};
    switch (t) {
        case "links":
            return _(
                {
                    author_id: e,
                    has: ["link"],
                },
                r,
            );
        case "media":
            return _(
                {
                    author_id: e,
                    attachment_extension: [
                        "png",
                        "jpg",
                        "webp",
                        "mov",
                        "mp4",
                        "gif",
                        "mp3",
                        "wav",
                        "flac",
                        "ogg",
                        "opus",
                    ],
                },
                r,
            );
        case "all_counts":
            return _(
                {
                    author_id: [e],
                    limit: 1,
                    cursor: null,
                },
                r,
            );
        default:
            return _({ author_id: e }, r);
    }
}
function O(e, t, n) {
    return (function (e, t, n, r) {
        let { addtionalQuery: s, shouldDispatch: i = !1 } = r,
            a = l.useMemo(() => m(e, t, n, s), [e, t, n, s]),
            _ = N(a),
            T = (0, u.Z)(a),
            [g, O] = l.useState({});
        return (
            l.useEffect(() => {
                if (T !== a) {
                    let r = h(e, n, s),
                        l = new c.Yn(t, d.aib.GUILD, r);
                    f(a, {
                        searchFetcher: l,
                        messageCount: A,
                        lastMessage: null,
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
                                            lastMessage: r,
                                        }),
                                        O({}),
                                        i)
                                    ) {
                                        var s, u, c;
                                        o.Z.dispatch({
                                            type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                                            guildId: t,
                                            data: [
                                                {
                                                    id: t,
                                                    analyticsId: n.analytics_id,
                                                    totalResults: n.total_results,
                                                    channels: null != (s = n.channels) ? s : [],
                                                    messages: n.messages,
                                                    threads: null != (u = n.threads) ? u : [],
                                                    members: (null != (c = n.members) ? c : []).map((e) => (0, E.Z)(e)),
                                                    doingHistoricalIndex: n.doing_deep_historical_index,
                                                    documentsIndexed: n.documents_indexed,
                                                    cursor: null,
                                                },
                                            ],
                                        });
                                    }
                                },
                                (e) => {},
                                (e) => {
                                    f(a, {
                                        messageCount: 0,
                                        lastMessage: null,
                                    }),
                                        O({});
                                },
                            );
                        });
                }
                return () => {};
            }, [e, t, _, a, n, s, T, i]),
            null != _ ? _ : I
        );
    })(e, t, "messages", n);
}
function p(e, t, n, r) {
    let s = l.useMemo(() => m(e, t, n, r, !0), [e, t, n, r]),
        i = N(s),
        a = (0, u.Z)(s);
    return {
        key: s,
        previousKey: a,
        state: i,
    };
}
function R(e, t, n) {
    var r, s, i;
    let { key: a, state: o } = p(e, t, "messages", n),
        { key: u, state: E } = p(e, t, "links", n),
        { key: _, state: T } = p(e, t, "media", n),
        m = l.useMemo(() => h(e, "all_counts", n), [e, n]),
        I = l.useMemo(
            () => ({
                tabs: {
                    messages: h(e, "messages", m),
                    links: h(e, "links", m),
                    media: h(e, "media", m),
                },
                track_exact_total_hits: !0,
                include_nsfw: !0,
            }),
            [e, m],
        ),
        g = l.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    r = e.media;
                f(a, t), f(u, n), f(_, r);
            },
            [u, _, a],
        ),
        N = l.useCallback(
            (e) => {
                g({
                    messages: e,
                    links: e,
                    media: e,
                });
            },
            [g],
        );
    l.useEffect(() => {
        let e = new c.tJ(t, d.aib.GUILD, m, I);
        N({
            searchTabFetcher: e,
            messageCount: A,
            lastMessage: null,
        });
        let n = setTimeout(async () => {
            let t = null;
            try {
                let n = await e.makeRequest({ rejectWithError: !1 });
                t = null == n ? void 0 : n.body;
            } catch (e) {
                t = null;
            }
            if (null == t)
                N({
                    messageCount: 0,
                    lastMessage: null,
                });
            else {
                var n, r, l, s, i, a;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    u = t.tabs.media;
                g({
                    messages: {
                        messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
                        lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null,
                    },
                    links: {
                        messageCount: null != (l = null == o ? void 0 : o.total_results) ? l : 0,
                        lastMessage: null != (s = null == o ? void 0 : o.messages[0]) ? s : null,
                    },
                    media: {
                        messageCount: null != (i = null == u ? void 0 : u.total_results) ? i : 0,
                        lastMessage: null != (a = null == u ? void 0 : u.messages[0]) ? a : null,
                    },
                });
            }
            R({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, m, I, N, g]);
    let [O, R] = l.useState({});
    return {
        messagesCount: null != (r = null == o ? void 0 : o.messageCount) ? r : A,
        linksCount: null != (s = null == E ? void 0 : E.messageCount) ? s : A,
        mediaCount: null != (i = null == T ? void 0 : T.messageCount) ? i : A,
    };
}
