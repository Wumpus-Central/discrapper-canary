n.d(t, {
    KR: () => m,
    SA: () => A,
    ry: () => N,
    u5: () => p,
    zu: () => g,
}),
    n(457529),
    n(896048);
var l,
    r = n(64700),
    a = n(942381),
    i = n(265690),
    s = n(121894),
    o = n(73153),
    c = n(475743),
    u = n(177068),
    E = n(736130),
    d = n(652215);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let g = -1;
var A = (((l = {}).MESSAGES = "messages"), (l.LINKS = "links"), (l.MEDIA = "media"), (l.ALL_COUNTS = "all_counts"), l);
function T(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(l);
    return r
        ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(a)
        : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(a);
}
let f = {
        searchFetcher: null,
        searchTabFetcher: null,
        result: null,
        messageCount: g,
        lastMessage: null,
    },
    h = (0, i.h)(() => new Map()),
    I = (e, t) => {
        (0, s.r)(() => {
            h.setState((n) => {
                let l = n.get(e);
                return null == l ? n.set(e, _({}, f, t)) : n.set(e, _({}, l, t)), n;
            });
        });
    },
    O = (e) => h((t) => t.get(e), a.x);
function N(e, t, n) {
    let l = null != n ? n : {};
    switch (t) {
        case "links":
            return _(
                {
                    author_id: e,
                    has: ["link"],
                },
                l,
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
                l,
            );
        case "all_counts":
            return _(
                {
                    author_id: [e],
                    limit: 1,
                    cursor: null,
                },
                l,
            );
        default:
            return _({ author_id: e }, l);
    }
}
function m(e, t, n) {
    return (function (e, t, n, l) {
        let { addtionalQuery: a, shouldDispatch: i = !1 } = l,
            s = r.useMemo(() => T(e, t, n, a), [e, t, n, a]),
            _ = O(s),
            A = (0, c.A)(s),
            [h, m] = r.useState({});
        return (
            r.useEffect(() => {
                if (A !== s) {
                    let l = N(e, n, a),
                        r = new u.MS(t, d.I4_.GUILD, l);
                    I(s, {
                        searchFetcher: r,
                        messageCount: g,
                        lastMessage: null,
                    }),
                        setTimeout(() => {
                            r.fetch(
                                (e) => {
                                    let n = e.body,
                                        l = n.messages[0];
                                    if (
                                        (I(s, {
                                            searchFetcher: r,
                                            result: n,
                                            messageCount: n.total_results,
                                            lastMessage: l,
                                        }),
                                        m({}),
                                        i)
                                    ) {
                                        var a, c, u;
                                        o.h.dispatch({
                                            type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                                            guildId: t,
                                            data: [
                                                {
                                                    id: t,
                                                    analyticsId: n.analytics_id,
                                                    totalResults: n.total_results,
                                                    channels: null != (a = n.channels) ? a : [],
                                                    messages: n.messages,
                                                    threads: null != (c = n.threads) ? c : [],
                                                    members: (null != (u = n.members) ? u : []).map((e) => (0, E.A)(e)),
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
                                    I(s, {
                                        messageCount: 0,
                                        lastMessage: null,
                                    }),
                                        m({});
                                },
                            );
                        });
                }
                return () => {};
            }, [e, t, _, s, n, a, A, i]),
            null != _ ? _ : f
        );
    })(e, t, "messages", n);
}
function S(e, t, n, l) {
    let a = r.useMemo(() => T(e, t, n, l, !0), [e, t, n, l]),
        i = O(a),
        s = (0, c.A)(a);
    return {
        key: a,
        previousKey: s,
        state: i,
    };
}
function p(e, t, n) {
    var l, a, i;
    let { key: s, state: o } = S(e, t, "messages", n),
        { key: c, state: E } = S(e, t, "links", n),
        { key: _, state: A } = S(e, t, "media", n),
        T = r.useMemo(() => N(e, "all_counts", n), [e, n]),
        f = r.useMemo(
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
        h = r.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    l = e.media;
                I(s, t), I(c, n), I(_, l);
            },
            [c, _, s],
        ),
        O = r.useCallback(
            (e) => {
                h({
                    messages: e,
                    links: e,
                    media: e,
                });
            },
            [h],
        );
    r.useEffect(() => {
        let e = new u.DX(t, d.I4_.GUILD, T, f);
        O({
            searchTabFetcher: e,
            messageCount: g,
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
                O({
                    messageCount: 0,
                    lastMessage: null,
                });
            else {
                var n, l, r, a, i, s;
                let e = t.tabs.messages,
                    o = t.tabs.links,
                    c = t.tabs.media;
                h({
                    messages: {
                        messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
                        lastMessage: null != (l = null == e ? void 0 : e.messages[0]) ? l : null,
                    },
                    links: {
                        messageCount: null != (r = null == o ? void 0 : o.total_results) ? r : 0,
                        lastMessage: null != (a = null == o ? void 0 : o.messages[0]) ? a : null,
                    },
                    media: {
                        messageCount: null != (i = null == c ? void 0 : c.total_results) ? i : 0,
                        lastMessage: null != (s = null == c ? void 0 : c.messages[0]) ? s : null,
                    },
                });
            }
            p({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, T, f, O, h]);
    let [m, p] = r.useState({});
    return {
        messagesCount: null != (l = null == o ? void 0 : o.messageCount) ? l : g,
        linksCount: null != (a = null == E ? void 0 : E.messageCount) ? a : g,
        mediaCount: null != (i = null == A ? void 0 : A.messageCount) ? i : g,
    };
}
