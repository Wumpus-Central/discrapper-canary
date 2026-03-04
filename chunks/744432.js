n.d(t, { KR: () => S, SA: () => A, ry: () => m, u5: () => O, zu: () => d });
var l,
    r = n(64700),
    a = n(942381),
    i = n(265690),
    s = n(121894),
    o = n(73153),
    E = n(475743),
    u = n(177068),
    c = n(736130),
    _ = n(652215);
let d = -1;
var A = (((l = {}).MESSAGES = "messages"), (l.LINKS = "links"), (l.MEDIA = "media"), (l.ALL_COUNTS = "all_counts"), l);
function g(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = JSON.stringify(l);
    return r
        ? `guild_${t}_search_tab_${n}_for_${e}_with_additonal_${a}`
        : `guild_${t}_search_${n}_for_${e}_with_additonal_${a}`;
}
let T = { searchFetcher: null, searchTabFetcher: null, result: null, messageCount: d, lastMessage: null },
    I = (0, i.h)(() => new Map()),
    N = (e, t) => {
        (0, s.r)(() => {
            I.setState((n) => {
                let l = n.get(e);
                return null == l ? n.set(e, { ...T, ...t }) : n.set(e, { ...l, ...t }), n;
            });
        });
    },
    h = (e) => I((t) => t.get(e), a.x);
function m(e, t, n) {
    let l = n ?? {};
    switch (t) {
        case "links":
            return { author_id: [e], has: ["link"], ...l };
        case "media":
            return {
                author_id: [e],
                attachment_extension: [
                    "png",
                    "jpg",
                    "webp",
                    "mov",
                    "mp4",
                    "qt",
                    "gif",
                    "mp3",
                    "wav",
                    "flac",
                    "ogg",
                    "opus",
                ],
                ...l,
            };
        case "all_counts":
            return { author_id: [e], limit: 1, cursor: null, ...l };
        default:
            return { author_id: [e], ...l };
    }
}
function S(e, t, n) {
    return (function (e, t, n, l) {
        let { addtionalQuery: a, shouldDispatch: i = !1 } = l,
            s = r.useMemo(() => g(e, t, n, a), [e, t, n, a]),
            A = h(s),
            I = (0, E.A)(s),
            [S, G] = r.useState({});
        return (
            r.useEffect(() => {
                if (I !== s) {
                    let l = m(e, n, a),
                        r = new u.MS(t, _.I4_.GUILD, l);
                    N(s, { searchFetcher: r, messageCount: d, lastMessage: null }),
                        setTimeout(() => {
                            r.fetch(
                                (e) => {
                                    let n = e.body,
                                        l = n.messages[0];
                                    N(s, {
                                        searchFetcher: r,
                                        result: n,
                                        messageCount: n.total_results,
                                        lastMessage: l,
                                    }),
                                        G({}),
                                        i &&
                                            o.h.dispatch({
                                                type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                                                guildId: t,
                                                data: [
                                                    {
                                                        id: t,
                                                        analyticsId: n.analytics_id,
                                                        totalResults: n.total_results,
                                                        channels: n.channels ?? [],
                                                        messages: n.messages,
                                                        threads: n.threads ?? [],
                                                        members: (n.members ?? []).map((e) => (0, c.A)(e)),
                                                        doingHistoricalIndex: n.doing_deep_historical_index,
                                                        documentsIndexed: n.documents_indexed,
                                                        cursor: null,
                                                    },
                                                ],
                                            });
                                },
                                (e) => {},
                                (e) => {
                                    N(s, { messageCount: 0, lastMessage: null }), G({});
                                },
                            );
                        });
                }
                return () => {};
            }, [e, t, A, s, n, a, I, i]),
            A ?? T
        );
    })(e, t, "messages", n);
}
function G(e, t, n, l) {
    let a = r.useMemo(() => g(e, t, n, l, !0), [e, t, n, l]),
        i = h(a),
        s = (0, E.A)(a);
    return { key: a, previousKey: s, state: i };
}
function O(e, t, n) {
    let { key: l, state: a } = G(e, t, "messages", n),
        { key: i, state: s } = G(e, t, "links", n),
        { key: o, state: E } = G(e, t, "media", n),
        c = r.useMemo(() => m(e, "all_counts", n), [e, n]),
        A = r.useMemo(
            () => ({
                tabs: { messages: m(e, "messages", c), links: m(e, "links", c), media: m(e, "media", c) },
                track_exact_total_hits: !0,
                include_nsfw: !0,
            }),
            [e, c],
        ),
        g = r.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    r = e.media;
                N(l, t), N(i, n), N(o, r);
            },
            [i, o, l],
        ),
        T = r.useCallback(
            (e) => {
                g({ messages: e, links: e, media: e });
            },
            [g],
        );
    r.useEffect(() => {
        let e = new u.DX(t, _.I4_.GUILD, c, A);
        T({ searchTabFetcher: e, messageCount: d, lastMessage: null });
        let n = setTimeout(async () => {
            let t = null;
            try {
                let n = await e.makeRequest({ rejectWithError: !1 });
                t = n?.body;
            } catch (e) {
                t = null;
            }
            if (null == t) T({ messageCount: 0, lastMessage: null });
            else {
                let e = t.tabs.messages,
                    n = t.tabs.links,
                    l = t.tabs.media;
                g({
                    messages: { messageCount: e?.total_results ?? 0, lastMessage: e?.messages[0] ?? null },
                    links: { messageCount: n?.total_results ?? 0, lastMessage: n?.messages[0] ?? null },
                    media: { messageCount: l?.total_results ?? 0, lastMessage: l?.messages[0] ?? null },
                });
            }
            h({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, c, A, T, g]);
    let [I, h] = r.useState({});
    return { messagesCount: a?.messageCount ?? d, linksCount: s?.messageCount ?? d, mediaCount: E?.messageCount ?? d };
}
