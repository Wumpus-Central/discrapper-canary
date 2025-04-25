n.d(t, { y6: () => m }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(45114),
    a = n(733427),
    o = n(455199),
    s = n(833592),
    c = n(140155),
    u = n(774807),
    d = n(490897);
let p = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: p, withMentions: m = !1, initialPageSize: f } = e,
            h = (0, i.e7)([u.Z], () => u.Z.shouldReload()),
            g = r.useRef(!1),
            [_, b] = r.useState(!1),
            {
                initialized: x,
                loading: y,
                items: v,
                hasMore: E,
                cursor: O,
                errored: j
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: C, everyoneFilter: S } = (0, i.cj)([o.Z], () => ({
                everyoneFilter: o.Z.everyoneFilter,
                roleFilter: o.Z.roleFilter
            }));
        r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                x && t && (0, l.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, x]);
        let I = (0, a.Z)();
        r.useEffect(
            () => () => {
                p ? !I() && (j || v.length > 100) && (0, s.jF)() : n && v.length > 100 && (0, s.jF)();
            },
            [n, v, p, I, j]
        ),
            r.useEffect(() => {
                let e = h && t;
                (!x || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : m ? 8 : 20,
                        with_mentions: m,
                        roles_filter: C,
                        everyone_filter: S
                    });
            }, [x, h, t, m, C, S, f]);
        let N = r.useCallback(
            async (e) => {
                !g.current &&
                    x &&
                    E &&
                    null != O &&
                    (e || !j) &&
                    ((g.current = !0),
                    b(!0),
                    await (0, s.jk)(
                        {
                            after: O,
                            with_mentions: m,
                            roles_filter: C,
                            everyone_filter: S,
                            limit: m ? 8 : 20
                        },
                        () => {
                            g.current = !1;
                        }
                    ),
                    b(!1));
            },
            [x, E, O, j, m, C, S]
        );
        return {
            initialized: x,
            loading: y,
            items: v,
            hasMore: E,
            loadMore: N,
            loadingMore: _,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: j
        };
    },
    m = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: r,
            loadMore: i
        } = p({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => 'notification-center-item' === e.kind),
            hasMore: r,
            loadMore: i
        };
    };
