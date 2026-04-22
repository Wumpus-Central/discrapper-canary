"use strict";
n.d(t, { f: () => E, s: () => v });
var i = n(64700),
    l = n(311907),
    s = n(73153),
    r = n(963307),
    a = n(734057),
    o = n(71393),
    c = n(531685),
    u = n(954571),
    d = n(99066),
    h = n(435738),
    m = n(376261),
    p = n(947593),
    f = n(188737),
    g = n(420706),
    _ = n(424994),
    x = n(495744),
    A = n(652215),
    C = n(985018);
let E = 0,
    I = 21552 == n.j ? 3e3 : null;
function v(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: E },
            channelId: v,
            guildId: y,
        } = e,
        [S, b] = i.useState(!1),
        { requestId: N, entries: T, impressionCappedEntryIds: j } = (0, f.A)(v),
        R = (0, l.bG)([h.A], () => h.A.hidden),
        w = (0, l.bG)([c.A], () => c.A.isFocused()),
        L = (0, l.bG)([a.A], () => a.A.getChannel(v)),
        M = (0, l.bG)([o.A], () => o.A.getGuild(y), [y]),
        k = ((0, m.T)(M) ?? !1) && L?.isForumChannel() === !1,
        [O, P, D, U] = i.useMemo(() => {
            let e;
            if (null == T || 0 === T.length || null == N || !k) return [t, n, E];
            let i = S ? T.length : 3,
                l = T.slice(0, i);
            e = R
                ? [{ type: r.S9.HIDDEN_CONTENT_INVENTORY }]
                : l.map((e) => ({ type: r.S9.CONTENT_INVENTORY, entry: e, requestId: N }));
            let s = {
                id: x.C,
                type: r.S9.CONTENT_INVENTORY_GROUP,
                key: x.C,
                count: e.length,
                index: n.length,
                title: C.intl.string(C.t["6gwSFY"]),
                onToggleExpand: () => {
                    b((e) => {
                        let t = !e;
                        return (
                            u.default.track(A.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: v,
                                guild_id: y,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                expanded: S,
                expandedCount: T.length,
                feedHeight: e.map(g.h9).reduce((e, t) => e + t, 0),
            };
            return [[s, ...t], [...n, s, ...e], Math.random(), e];
        }, [v, T, S, t, y, N, n, E, R, k]),
        V = i.useRef(0),
        G = i.useRef(T),
        F = i.useRef(void 0),
        B = i.useRef({ impressionCappedEntryIds: j }),
        H = i.useCallback(
            (e) => {
                let t = Math.floor(e / g.bG),
                    n = Math.min(U?.length ?? 0, t);
                V.current = Math.max(V.current, n);
            },
            [U],
        );
    return (
        i.useEffect(() => {
            G.current = T;
        }, [T]),
        i.useEffect(() => {
            B.current = { impressionCappedEntryIds: j };
        }, [j]),
        i.useEffect(
            () => (
                (V.current = 0),
                (F.current = Date.now()),
                () => {
                    if (null == N || null == F.current || Date.now() - F.current < I) return;
                    let e = G.current?.map((e) => e.id) ?? [],
                        t = e.slice(0, V.current);
                    !R &&
                        w &&
                        k &&
                        ((0, p.D)(A.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: N,
                            first_shown_at: F.current,
                            item_ids: t,
                            surface_type: _.UG.GUILD_MEMBER_LIST,
                            channel_id: v,
                            guild_id: y,
                            all_item_ids: e,
                            impression_capped_item_ids: [...B.current.impressionCappedEntryIds],
                        }),
                        (0, d.sE)("useInjectContentInventoryFeed") &&
                            s.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                }
            ),
            [N, v, y, R, w, k],
        ),
        { groups: O, rows: P, version: D, updateMaxRowSeen: H }
    );
}
