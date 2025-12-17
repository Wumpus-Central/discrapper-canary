n.d(t, {
    II: () => A,
    Ow: () => h,
    P2: () => S,
    mw: () => T,
    z0: () => O,
}),
    n(49124),
    n(388685);
var r,
    l = n(473749),
    i = n(55160),
    a = n(748521),
    s = n(731965),
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
function I(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = JSON.stringify(r);
    return l
        ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i)
        : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i);
}
let m = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: A,
        lastMessage: null,
    },
    f = (0, a.F)(() => new Map()),
    g = (e, t) => {
        (0, s.j)(() => {
            f.setState((n) => {
                let r = n.get(e);
                return null == r ? n.set(e, _({}, m, t)) : n.set(e, _({}, r, t)), n;
            });
        });
    },
    N = (e) => f((t) => t.get(e), i.X);
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
        let { addtionalQuery: i, shouldDispatch: a = !1 } = r,
            s = l.useMemo(() => I(e, t, n, i), [e, t, n, i]),
            _ = N(s),
            T = (0, u.Z)(s),
            [f, O] = l.useState({});
        return (
            l.useEffect(() => {
                if (T !== s) {
                    let r = h(e, n, i),
                        l = new c.Yn(t, d.aib.GUILD, r);
                    g(s, {
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
                                        (g(s, {
                                            searchFetcher: l,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: r,
                                        }),
                                        O({}),
                                        a)
                                    ) {
                                        var i, u, c;
                                        o.Z.dispatch({
                                            type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                                            guildId: t,
                                            data: [
                                                {
                                                    id: t,
                                                    analyticsId: n.analytics_id,
                                                    totalResults: n.total_results,
                                                    channels: null != (i = n.channels) ? i : [],
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
                                    g(s, {
                                        messageCount: 0,
                                        lastMessage: null,
                                    }),
                                        O({});
                                },
                            );
                        });
                }
                return () => {};
            }, [e, t, _, s, n, i, T, a]),
            null != _ ? _ : m
        );
    })(e, t, "messages", n);
}
function R(e, t, n, r) {
    let i = l.useMemo(() => I(e, t, n, r, !0), [e, t, n, r]),
        a = N(i),
        s = (0, u.Z)(i);
    return {
        key: i,
        previousKey: s,
        state: a,
    };
}
function S(e, t, n) {
    var r, i, a;
    let { key: s, state: o } = R(e, t, "messages", n),
        { key: u, state: E } = R(e, t, "links", n),
        { key: _, state: T } = R(e, t, "media", n),
        I = l.useMemo(() => h(e, "all_counts", n), [e, n]),
        m = l.useMemo(
            () => ({
                tabs: {
                    messages: h(e, "messages", I),
                    links: h(e, "links", I),
                    media: h(e, "media", I),
                },
                track_exact_total_hits: !0,
                include_nsfw: !0,
            }),
            [e, I],
        ),
        f = l.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    r = e.media;
                g(s, t), g(u, n), g(_, r);
            },
            [u, _, s],
        ),
        N = l.useCallback(
            (e) => {
                f({
                    messages: e,
                    links: e,
                    media: e,
                });
            },
            [f],
        );
    l.useEffect(() => {
        let e = new c.tJ(t, d.aib.GUILD, I, m);
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
                var n, r, l, i, a, s;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    u = t.tabs.media;
                f({
                    messages: {
                        messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
                        lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null,
                    },
                    links: {
                        messageCount: null != (l = null == o ? void 0 : o.total_results) ? l : 0,
                        lastMessage: null != (i = null == o ? void 0 : o.messages[0]) ? i : null,
                    },
                    media: {
                        messageCount: null != (a = null == u ? void 0 : u.total_results) ? a : 0,
                        lastMessage: null != (s = null == u ? void 0 : u.messages[0]) ? s : null,
                    },
                });
            }
            S({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, I, m, N, f]);
    let [O, S] = l.useState({});
    return {
        messagesCount: null != (r = null == o ? void 0 : o.messageCount) ? r : A,
        linksCount: null != (i = null == E ? void 0 : E.messageCount) ? i : A,
        mediaCount: null != (a = null == T ? void 0 : T.messageCount) ? a : A,
    };
}
