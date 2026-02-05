"use strict";
n.d(t, { f: () => y, s: () => v });
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(963307),
    o = n(734057),
    l = n(71393),
    u = n(531685),
    c = n(954571),
    d = n(99066),
    _ = n(435738),
    f = n(376261),
    p = n(947593),
    h = n(188737),
    m = n(420706),
    g = n(424994),
    E = n(495744),
    A = n(652215),
    I = n(985018);
let T = 3,
    y = 0,
    S = 3e3;
function v(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: y },
            channelId: v,
            guildId: C,
        } = e,
        [b, N] = r.useState(!1),
        { requestId: R, entries: O, impressionCappedEntryIds: D } = (0, h.A)(v),
        L = (0, i.bG)([_.A], () => _.A.hidden),
        w = (0, i.bG)([u.A], () => u.A.isFocused()),
        x = (0, i.bG)([o.A], () => o.A.getChannel(v)),
        P = (0, i.bG)([l.A], () => l.A.getGuild(C), [C]),
        M = ((0, f.T)(P) ?? !1) && x?.isForumChannel() === !1,
        [k, U, G, V] = r.useMemo(() => {
            let e;
            if (null == O || 0 === O.length || null == R || !M) return [t, n, y];
            let r = T,
                i = b ? O.length : r,
                a = O.slice(0, i);
            e = L
                ? [{ type: s.S9.HIDDEN_CONTENT_INVENTORY }]
                : a.map((e) => ({ type: s.S9.CONTENT_INVENTORY, entry: e, requestId: R }));
            let o = () => {
                    N((e) => {
                        let t = !e;
                        return (
                            c.default.track(A.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: v,
                                guild_id: C,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                l = {
                    id: E.C,
                    type: s.S9.CONTENT_INVENTORY_GROUP,
                    key: E.C,
                    count: e.length,
                    index: n.length,
                    title: I.intl.string(I.t["6gwSFY"]),
                    onToggleExpand: o,
                    expanded: b,
                    expandedCount: O.length,
                    feedHeight: e.map(m.h9).reduce((e, t) => e + t, 0),
                };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [v, O, b, t, C, R, n, y, L, M]),
        F = r.useRef(0),
        B = r.useRef(O),
        j = r.useRef(void 0),
        H = r.useRef({ impressionCappedEntryIds: D }),
        Y = r.useCallback(
            (e) => {
                let t = Math.floor(e / m.bG),
                    n = Math.min(V?.length ?? 0, t);
                F.current = Math.max(F.current, n);
            },
            [V],
        );
    return (
        r.useEffect(() => {
            B.current = O;
        }, [O]),
        r.useEffect(() => {
            H.current = { impressionCappedEntryIds: D };
        }, [D]),
        r.useEffect(
            () => (
                (F.current = 0),
                (j.current = Date.now()),
                () => {
                    if (null == R || null == j.current || Date.now() - j.current < S) return;
                    let e = B.current?.map((e) => e.id) ?? [],
                        t = e.slice(0, F.current);
                    !L &&
                        w &&
                        M &&
                        ((0, p.D)(A.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: R,
                            first_shown_at: j.current,
                            item_ids: t,
                            surface_type: g.UG.GUILD_MEMBER_LIST,
                            channel_id: v,
                            guild_id: C,
                            all_item_ids: e,
                            impression_capped_item_ids: [...H.current.impressionCappedEntryIds],
                        }),
                        (0, d.sE)("useInjectContentInventoryFeed") &&
                            a.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                }
            ),
            [R, v, C, L, w, M],
        ),
        { groups: k, rows: U, version: G, updateMaxRowSeen: Y }
    );
}
