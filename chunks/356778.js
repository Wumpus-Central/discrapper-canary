t.d(e, {
    II: () => u,
    Ow: () => D,
    P2: () => I,
    mw: () => h,
    z0: () => M,
}),
    t(49124),
    t(388685);
var n,
    r = t(73800),
    l = t(94171),
    i = t(362383),
    a = t(731965),
    s = t(570140),
    o = t(110924),
    g = t(558706),
    c = t(952537),
    f = t(981631);
function v(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
let u = -1;
var h = (((n = {}).MESSAGES = "messages"), (n.LINKS = "links"), (n.MEDIA = "media"), (n.ALL_COUNTS = "all_counts"), n);
function d(A, e, t) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        l = JSON.stringify(n);
    return r
        ? "guild_".concat(e, "_search_tab_").concat(t, "_for_").concat(A, "_with_additonal_").concat(l)
        : "guild_".concat(e, "_search_").concat(t, "_for_").concat(A, "_with_additonal_").concat(l);
}
let E = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: u,
        lastMessage: null,
    },
    C = (0, i.F)(() => new Map()),
    B = (A, e) => {
        (0, a.j)(() => {
            C.setState((t) => {
                let n = t.get(A);
                return null == n ? t.set(A, v({}, E, e)) : t.set(A, v({}, n, e)), t;
            });
        });
    },
    w = (A) => C((e) => e.get(A), l.X);
function D(A, e, t) {
    let n = null != t ? t : {};
    switch (e) {
        case "links":
            return v(
                {
                    author_id: A,
                    has: ["link"],
                },
                n,
            );
        case "media":
            return v(
                {
                    author_id: A,
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
                n,
            );
        case "all_counts":
            return v(
                {
                    author_id: [A],
                    limit: 1,
                    cursor: null,
                },
                n,
            );
        default:
            return v({ author_id: A }, n);
    }
}
function M(A, e, t) {
    return (function (A, e, t, n) {
        let { addtionalQuery: l, shouldDispatch: i = !1 } = n,
            a = r.useMemo(() => d(A, e, t, l), [A, e, t, l]),
            v = w(a),
            h = (0, o.Z)(a),
            [C, M] = r.useState({});
        return (
            r.useEffect(() => {
                if (h !== a) {
                    let n = D(A, t, l),
                        r = new g.Yn(e, f.aib.GUILD, n);
                    B(a, {
                        searchFetcher: r,
                        messageCount: u,
                        lastMessage: null,
                    }),
                        setTimeout(() => {
                            r.fetch(
                                (A) => {
                                    let t = A.body,
                                        n = t.messages[0];
                                    if (
                                        (B(a, {
                                            searchFetcher: r,
                                            result: t,
                                            messageCount: t.total_results,
                                            lastMessage: n,
                                        }),
                                        M({}),
                                        i)
                                    ) {
                                        var l, o, g;
                                        s.Z.dispatch({
                                            type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                                            guildId: e,
                                            data: [
                                                {
                                                    id: e,
                                                    analyticsId: t.analytics_id,
                                                    totalResults: t.total_results,
                                                    channels: null != (l = t.channels) ? l : [],
                                                    messages: t.messages,
                                                    threads: null != (o = t.threads) ? o : [],
                                                    members: (null != (g = t.members) ? g : []).map((A) => (0, c.Z)(A)),
                                                    doingHistoricalIndex: t.doing_deep_historical_index,
                                                    documentsIndexed: t.documents_indexed,
                                                    cursor: null,
                                                },
                                            ],
                                        });
                                    }
                                },
                                (A) => {},
                                (A) => {
                                    B(a, {
                                        messageCount: 0,
                                        lastMessage: null,
                                    }),
                                        M({});
                                },
                            );
                        });
                }
                return () => {};
            }, [A, e, v, a, t, l, h, i]),
            null != v ? v : E
        );
    })(A, e, "messages", t);
}
function p(A, e, t, n) {
    let l = r.useMemo(() => d(A, e, t, n, !0), [A, e, t, n]),
        i = w(l),
        a = (0, o.Z)(l);
    return {
        key: l,
        previousKey: a,
        state: i,
    };
}
function I(A, e, t) {
    var n, l, i;
    let { key: a, state: s } = p(A, e, "messages", t),
        { key: o, state: c } = p(A, e, "links", t),
        { key: v, state: h } = p(A, e, "media", t),
        d = r.useMemo(() => D(A, "all_counts", t), [A, t]),
        E = r.useMemo(
            () => ({
                tabs: {
                    messages: D(A, "messages", d),
                    links: D(A, "links", d),
                    media: D(A, "media", d),
                },
                track_exact_total_hits: !0,
                include_nsfw: !0,
            }),
            [A, d],
        ),
        C = r.useCallback(
            (A) => {
                let e = A.messages,
                    t = A.links,
                    n = A.media;
                B(a, e), B(o, t), B(v, n);
            },
            [o, v, a],
        ),
        w = r.useCallback(
            (A) => {
                C({
                    messages: A,
                    links: A,
                    media: A,
                });
            },
            [C],
        );
    r.useEffect(() => {
        let A = new g.tJ(e, f.aib.GUILD, d, E);
        w({
            searchTabFetcher: A,
            messageCount: u,
            lastMessage: null,
        });
        let t = setTimeout(async () => {
            let e = null;
            try {
                let t = await A.makeRequest({ rejectWithError: !1 });
                e = null == t ? void 0 : t.body;
            } catch (A) {
                e = null;
            }
            if (null == e)
                w({
                    messageCount: 0,
                    lastMessage: null,
                });
            else {
                var t, n, r, l, i, a;
                let A = e.tabs.messages,
                    s = e.tabs.links,
                    o = e.tabs.media;
                C({
                    messages: {
                        messageCount: null != (t = null == A ? void 0 : A.total_results) ? t : 0,
                        lastMessage: null != (n = null == A ? void 0 : A.messages[0]) ? n : null,
                    },
                    links: {
                        messageCount: null != (r = null == s ? void 0 : s.total_results) ? r : 0,
                        lastMessage: null != (l = null == s ? void 0 : s.messages[0]) ? l : null,
                    },
                    media: {
                        messageCount: null != (i = null == o ? void 0 : o.total_results) ? i : 0,
                        lastMessage: null != (a = null == o ? void 0 : o.messages[0]) ? a : null,
                    },
                });
            }
            I({});
        });
        return () => {
            A.cancel(), clearTimeout(t);
        };
    }, [A, e, d, E, w, C]);
    let [M, I] = r.useState({});
    return {
        messagesCount: null != (n = null == s ? void 0 : s.messageCount) ? n : u,
        linksCount: null != (l = null == c ? void 0 : c.messageCount) ? l : u,
        mediaCount: null != (i = null == h ? void 0 : h.messageCount) ? i : u,
    };
}
