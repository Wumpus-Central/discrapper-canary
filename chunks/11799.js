n.d(t, { y6: () => m }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(45114),
    l = n(733427),
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
                items: E,
                hasMore: v,
                cursor: O,
                errored: N
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: j, everyoneFilter: C } = (0, i.cj)([o.Z], () => ({
                everyoneFilter: o.Z.everyoneFilter,
                roleFilter: o.Z.roleFilter
            }));
        r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                x && t && (0, a.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, x]);
        let I = (0, l.Z)();
        r.useEffect(
            () => () => {
                p ? !I() && (N || E.length > 100) && (0, s.jF)() : n && E.length > 100 && (0, s.jF)();
            },
            [n, E, p, I, N]
        ),
            r.useEffect(() => {
                let e = h && t;
                (!x || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : m ? 8 : 20,
                        with_mentions: m,
                        roles_filter: j,
                        everyone_filter: C
                    });
            }, [x, h, t, m, j, C, f]);
        let S = r.useCallback(
            async (e) => {
                !g.current &&
                    x &&
                    v &&
                    null != O &&
                    (e || !N) &&
                    ((g.current = !0),
                    b(!0),
                    await (0, s.jk)(
                        {
                            after: O,
                            with_mentions: m,
                            roles_filter: j,
                            everyone_filter: C,
                            limit: m ? 8 : 20
                        },
                        () => {
                            g.current = !1;
                        }
                    ),
                    b(!1));
            },
            [x, v, O, N, m, j, C]
        );
        return {
            initialized: x,
            loading: y,
            items: E,
            hasMore: v,
            loadMore: S,
            loadingMore: _,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: N
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
