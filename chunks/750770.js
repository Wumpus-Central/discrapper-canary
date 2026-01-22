n.d(t, {
    f: () => A,
    s: () => S,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(963307),
    o = n(734057),
    l = n(71393),
    c = n(531685),
    u = n(954571),
    d = n(99066),
    f = n(435738),
    p = n(376261),
    _ = n(947593),
    h = n(188737),
    m = n(420706),
    g = n(424994),
    E = n(495744),
    b = n(652215),
    y = n(985018);
let O = 3,
    A = 0,
    v = 3e3;

function S(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: A },
            channelId: S,
            guildId: I,
        } = e,
        [T, C] = r.useState(!1),
        { requestId: N, entries: R, impressionCappedEntryIds: w } = (0, h.A)(S),
        P = (0, i.bG)([f.A], () => f.A.hidden),
        D = (0, i.bG)([c.A], () => c.A.isFocused()),
        x = (0, i.bG)([o.A], () => o.A.getChannel(S)),
        L = (0, i.bG)([l.A], () => l.A.getGuild(I), [I]),
        j = (0, p.T)(L),
        M = null != j && j && (null == x ? void 0 : x.isForumChannel()) === !1,
        [k, U, G, V] = r.useMemo(() => {
            let e;
            if (null == R || 0 === R.length || null == N || !M) return [t, n, A];
            let r = O,
                i = T ? R.length : r,
                a = R.slice(0, i);
            e = P
                ? [
                      {
                          type: s.S9.HIDDEN_CONTENT_INVENTORY,
                      },
                  ]
                : a.map((e) => ({
                      type: s.S9.CONTENT_INVENTORY,
                      entry: e,
                      requestId: N,
                  }));
            let o = () => {
                    C((e) => {
                        let t = !e;
                        return (
                            u.default.track(b.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: S,
                                guild_id: I,
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
                    title: y.intl.string(y.t["6gwSFY"]),
                    onToggleExpand: o,
                    expanded: T,
                    expandedCount: R.length,
                    feedHeight: e.map(m.h9).reduce((e, t) => e + t, 0),
                };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [S, R, T, t, I, N, n, A, P, M]),
        F = r.useRef(0),
        B = r.useRef(R),
        H = r.useRef(void 0),
        Y = r.useRef({
            impressionCappedEntryIds: w,
        }),
        W = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / m.bG),
                    r = Math.min(null != (t = null == V ? void 0 : V.length) ? t : 0, n);
                F.current = Math.max(F.current, r);
            },
            [V],
        );
    return (
        r.useEffect(() => {
            B.current = R;
        }, [R]),
        r.useEffect(() => {
            Y.current = {
                impressionCappedEntryIds: w,
            };
        }, [w]),
        r.useEffect(
            () => (
                (F.current = 0),
                (H.current = Date.now()),
                () => {
                    var e, t;
                    if (null == N || null == H.current || Date.now() - H.current < v) return;
                    let n = null != (e = null == (t = B.current) ? void 0 : t.map((e) => e.id)) ? e : [],
                        r = n.slice(0, F.current);
                    !P &&
                        D &&
                        M &&
                        ((0, _.D)(b.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: N,
                            first_shown_at: H.current,
                            item_ids: r,
                            surface_type: g.UG.GUILD_MEMBER_LIST,
                            channel_id: S,
                            guild_id: I,
                            all_item_ids: n,
                            impression_capped_item_ids: [...Y.current.impressionCappedEntryIds],
                        }),
                        (0, d.sE)("useInjectContentInventoryFeed") &&
                            a.h.dispatch({
                                type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
                                itemIds: r,
                            }));
                }
            ),
            [N, S, I, P, D, M],
        ),
        {
            groups: k,
            rows: U,
            version: G,
            updateMaxRowSeen: W,
        }
    );
}
