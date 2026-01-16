n.d(t, {
    II: () => A,
    Ow: () => N,
    P2: () => R,
    mw: () => f,
    z0: () => O,
}),
    n(49124),
    n(388685);
var r,
    l = n(473749),
    i = n(782425),
    a = n(524550),
    s = n(731965),
    o = n(570140),
    c = n(110924),
    u = n(558706),
    d = n(952537),
    E = n(981631);
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
var f = (((r = {}).MESSAGES = "messages"), (r.LINKS = "links"), (r.MEDIA = "media"), (r.ALL_COUNTS = "all_counts"), r);
function T(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = JSON.stringify(r);
    return l
        ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i)
        : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i);
}
let g = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: A,
        lastMessage: null,
    },
    I = (0, a.F)(() => new Map()),
    m = (e, t) => {
        (0, s.j)(() => {
            I.setState((n) => {
                let r = n.get(e);
                return null == r ? n.set(e, _({}, g, t)) : n.set(e, _({}, r, t)), n;
            });
        });
    },
    h = (e) => I((t) => t.get(e), i.X);
function N(e, t, n) {
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
            s = l.useMemo(() => T(e, t, n, i), [e, t, n, i]),
            _ = h(s),
            f = (0, c.Z)(s),
            [I, O] = l.useState({});
        return (
            l.useEffect(() => {
                if (f !== s) {
                    let r = N(e, n, i),
                        l = new u.Yn(t, E.aib.GUILD, r);
                    m(s, {
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
                                        (m(s, {
                                            searchFetcher: l,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: r,
                                        }),
                                        O({}),
                                        a)
                                    ) {
                                        var i, c, u;
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
                                                    threads: null != (c = n.threads) ? c : [],
                                                    members: (null != (u = n.members) ? u : []).map((e) => (0, d.Z)(e)),
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
                                    m(s, {
                                        messageCount: 0,
                                        lastMessage: null,
                                    }),
                                        O({});
                                },
                            );
                        });
                }
                return () => {};
            }, [e, t, _, s, n, i, f, a]),
            null != _ ? _ : g
        );
    })(e, t, "messages", n);
}
function p(e, t, n, r) {
    let i = l.useMemo(() => T(e, t, n, r, !0), [e, t, n, r]),
        a = h(i),
        s = (0, c.Z)(i);
    return {
        key: i,
        previousKey: s,
        state: a,
    };
}
function R(e, t, n) {
    var r, i, a;
    let { key: s, state: o } = p(e, t, "messages", n),
        { key: c, state: d } = p(e, t, "links", n),
        { key: _, state: f } = p(e, t, "media", n),
        T = l.useMemo(() => N(e, "all_counts", n), [e, n]),
        g = l.useMemo(
            () => ({
                tabs: {
                    messages: N(e, "messages", T),
                    links: N(e, "links", T),
                    media: N(e, "media", T),
                },
                track_exact_total_hits: !0,
                include_nsfw: !0,
            }),
            [e, T],
        ),
        I = l.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    r = e.media;
                m(s, t), m(c, n), m(_, r);
            },
            [c, _, s],
        ),
        h = l.useCallback(
            (e) => {
                I({
                    messages: e,
                    links: e,
                    media: e,
                });
            },
            [I],
        );
    l.useEffect(() => {
        let e = new u.tJ(t, E.aib.GUILD, T, g);
        h({
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
                h({
                    messageCount: 0,
                    lastMessage: null,
                });
            else {
                var n, r, l, i, a, s;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    c = t.tabs.media;
                I({
                    messages: {
                        messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
                        lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null,
                    },
                    links: {
                        messageCount: null != (l = null == o ? void 0 : o.total_results) ? l : 0,
                        lastMessage: null != (i = null == o ? void 0 : o.messages[0]) ? i : null,
                    },
                    media: {
                        messageCount: null != (a = null == c ? void 0 : c.total_results) ? a : 0,
                        lastMessage: null != (s = null == c ? void 0 : c.messages[0]) ? s : null,
                    },
                });
            }
            R({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, T, g, h, I]);
    let [O, R] = l.useState({});
    return {
        messagesCount: null != (r = null == o ? void 0 : o.messageCount) ? r : A,
        linksCount: null != (i = null == d ? void 0 : d.messageCount) ? i : A,
        mediaCount: null != (a = null == f ? void 0 : f.messageCount) ? a : A,
    };
}
