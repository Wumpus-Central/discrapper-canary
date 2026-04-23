"use strict";
n.d(t, { f: () => T, s: () => S });
var r = n(64700),
    i = n(311907),
    s = n(73153),
    a = n(963307),
    o = n(734057),
    l = n(71393),
    u = n(531685),
    c = n(954571),
    d = n(99066),
    _ = n(435738),
    f = n(376261),
    p = n(947593),
    h = n(188737),
    E = n(420706),
    m = n(424994),
    g = n(495744),
    A = n(652215),
    I = n(985018);
let T = 0;
function S(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: T },
            channelId: S,
            guildId: y,
        } = e,
        [N, v] = r.useState(!1),
        { requestId: C, entries: O, impressionCappedEntryIds: R } = (0, h.A)(S),
        b = (0, i.bG)([_.A], () => _.A.hidden),
        D = (0, i.bG)([u.A], () => u.A.isFocused()),
        L = (0, i.bG)([o.A], () => o.A.getChannel(S)),
        w = (0, i.bG)([l.A], () => l.A.getGuild(y), [y]),
        M = ((0, f.T)(w) ?? !1) && L?.isForumChannel() === !1,
        [P, x, k, U] = r.useMemo(() => {
            let e;
            if (null == O || 0 === O.length || null == C || !M) return [t, n, T];
            let r = N ? O.length : 3,
                i = O.slice(0, r);
            e = b
                ? [{ type: a.S9.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({ type: a.S9.CONTENT_INVENTORY, entry: e, requestId: C }));
            let s = {
                id: g.C,
                type: a.S9.CONTENT_INVENTORY_GROUP,
                key: g.C,
                count: e.length,
                index: n.length,
                title: I.intl.string(I.t["6gwSFY"]),
                onToggleExpand: () => {
                    v((e) => {
                        let t = !e;
                        return (
                            c.default.track(A.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: S,
                                guild_id: y,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                expanded: N,
                expandedCount: O.length,
                feedHeight: e.map(E.h9).reduce((e, t) => e + t, 0),
            };
            return [[s, ...t], [...n, s, ...e], Math.random(), e];
        }, [S, O, N, t, y, C, n, T, b, M]),
        G = r.useRef(0),
        F = r.useRef(O),
        V = r.useRef(void 0),
        B = r.useRef({ impressionCappedEntryIds: R }),
        H = r.useCallback(
            (e) => {
                let t = Math.floor(e / E.bG),
                    n = Math.min(U?.length ?? 0, t);
                G.current = Math.max(G.current, n);
            },
            [U],
        );
    return (
        r.useEffect(() => {
            F.current = O;
        }, [O]),
        r.useEffect(() => {
            B.current = { impressionCappedEntryIds: R };
        }, [R]),
        r.useEffect(
            () => (
                (G.current = 0),
                (V.current = Date.now()),
                () => {
                    if (null == C || null == V.current || Date.now() - V.current < 3e3) return;
                    let e = F.current?.map((e) => e.id) ?? [],
                        t = e.slice(0, G.current);
                    !b &&
                        D &&
                        M &&
                        ((0, p.D)(A.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: C,
                            first_shown_at: V.current,
                            item_ids: t,
                            surface_type: m.UG.GUILD_MEMBER_LIST,
                            channel_id: S,
                            guild_id: y,
                            all_item_ids: e,
                            impression_capped_item_ids: [...B.current.impressionCappedEntryIds],
                        }),
                        (0, d.sE)("useInjectContentInventoryFeed") &&
                            s.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                }
            ),
            [C, S, y, b, D, M],
        ),
        { groups: P, rows: x, version: k, updateMaxRowSeen: H }
    );
}
