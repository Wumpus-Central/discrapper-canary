n.d(t, { KR: () => O, SA: () => A, ry: () => m, u5: () => R, zu: () => d });
var l,
    a = n(64700),
    r = n(942381),
    i = n(265690),
    s = n(121894),
    E = n(73153),
    _ = n(475743),
    u = n(177068),
    o = n(736130),
    c = n(652215);
let d = -1;
var A = (((l = {}).MESSAGES = "messages"), (l.LINKS = "links"), (l.MEDIA = "media"), (l.ALL_COUNTS = "all_counts"), l);
function g(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = JSON.stringify(l);
    return a
        ? `guild_${t}_search_tab_${n}_for_${e}_with_additonal_${r}`
        : `guild_${t}_search_${n}_for_${e}_with_additonal_${r}`;
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
    G = (e) => I((t) => t.get(e), r.x);
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
function O(e, t, n) {
    return (function (e, t, n, l) {
        let { addtionalQuery: r, shouldDispatch: i = !1 } = l,
            s = a.useMemo(() => g(e, t, n, r), [e, t, n, r]),
            A = G(s),
            I = (0, _.A)(s),
            [O, S] = a.useState({});
        return (
            a.useEffect(() => {
                if (I !== s) {
                    let l = m(e, n, r),
                        a = new u.MS(t, c.I4_.GUILD, l);
                    N(s, { searchFetcher: a, messageCount: d, lastMessage: null }),
                        setTimeout(() => {
                            a.fetch(
                                (e) => {
                                    let n = e.body,
                                        l = n.messages[0];
                                    N(s, {
                                        searchFetcher: a,
                                        result: n,
                                        messageCount: n.total_results,
                                        lastMessage: l,
                                    }),
                                        S({}),
                                        i &&
                                            E.h.dispatch({
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
                                                        members: (n.members ?? []).map((e) => (0, o.A)(e)),
                                                        doingHistoricalIndex: n.doing_deep_historical_index,
                                                        documentsIndexed: n.documents_indexed,
                                                        cursor: null,
                                                    },
                                                ],
                                            });
                                },
                                (e) => {},
                                (e) => {
                                    N(s, { messageCount: 0, lastMessage: null }), S({});
                                },
                            );
                        });
                }
                return () => {};
            }, [e, t, A, s, n, r, I, i]),
            A ?? T
        );
    })(e, t, "messages", n);
}
function S(e, t, n, l) {
    let r = a.useMemo(() => g(e, t, n, l, !0), [e, t, n, l]),
        i = G(r),
        s = (0, _.A)(r);
    return { key: r, previousKey: s, state: i };
}
function R(e, t, n) {
    let { key: l, state: r } = S(e, t, "messages", n),
        { key: i, state: s } = S(e, t, "links", n),
        { key: E, state: _ } = S(e, t, "media", n),
        o = a.useMemo(() => m(e, "all_counts", n), [e, n]),
        A = a.useMemo(
            () => ({
                tabs: { messages: m(e, "messages", o), links: m(e, "links", o), media: m(e, "media", o) },
                track_exact_total_hits: !0,
                include_nsfw: !0,
            }),
            [e, o],
        ),
        g = a.useCallback(
            (e) => {
                let t = e.messages,
                    n = e.links,
                    a = e.media;
                N(l, t), N(i, n), N(E, a);
            },
            [i, E, l],
        ),
        T = a.useCallback(
            (e) => {
                g({ messages: e, links: e, media: e });
            },
            [g],
        );
    a.useEffect(() => {
        let e = new u.DX(t, c.I4_.GUILD, o, A);
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
            G({});
        });
        return () => {
            e.cancel(), clearTimeout(n);
        };
    }, [e, t, o, A, T, g]);
    let [I, G] = a.useState({});
    return { messagesCount: r?.messageCount ?? d, linksCount: s?.messageCount ?? d, mediaCount: _?.messageCount ?? d };
}
