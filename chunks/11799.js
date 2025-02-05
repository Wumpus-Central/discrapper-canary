n.d(t, { y6: () => _ }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(45114),
    r = n(733427),
    s = n(455199),
    o = n(833592),
    c = n(140155),
    d = n(774807),
    u = n(490897);
let m = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: m, withMentions: _ = !1, initialPageSize: h } = e,
            p = (0, l.e7)([d.Z], () => d.Z.shouldReload()),
            g = i.useRef(!1),
            [f, x] = i.useState(!1),
            {
                initialized: C,
                loading: v,
                items: E,
                hasMore: I,
                cursor: N,
                errored: S
            } = (0, l.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: T, everyoneFilter: b } = (0, l.cj)([s.Z], () => ({
                everyoneFilter: s.Z.everyoneFilter,
                roleFilter: s.Z.roleFilter
            }));
        i.useEffect(() => ((0, o.Vk)(!0), () => (0, o.Vk)(!1)), []),
            i.useEffect(() => {
                C && t && (0, a.FT)(u.W.NOTIFICATION_CENTER);
            }, [t, C]);
        let A = (0, r.Z)();
        i.useEffect(
            () => () => {
                m ? !A() && (S || E.length > 100) && (0, o.jF)() : n && E.length > 100 && (0, o.jF)();
            },
            [n, E, m, A, S]
        ),
            i.useEffect(() => {
                let e = p && t;
                (!C || e) &&
                    (0, o.jk)({
                        limit: null != h ? h : _ ? 8 : 20,
                        with_mentions: _,
                        roles_filter: T,
                        everyone_filter: b
                    });
            }, [C, p, t, _, T, b, h]);
        let j = i.useCallback(
            async (e) => {
                !g.current &&
                    C &&
                    I &&
                    null != N &&
                    (e || !S) &&
                    ((g.current = !0),
                    x(!0),
                    await (0, o.jk)(
                        {
                            after: N,
                            with_mentions: _,
                            roles_filter: T,
                            everyone_filter: b,
                            limit: _ ? 8 : 20
                        },
                        () => {
                            g.current = !1;
                        }
                    ),
                    x(!1));
            },
            [C, I, N, S, _, T, b]
        );
        return {
            initialized: C,
            loading: v,
            items: E,
            hasMore: I,
            loadMore: j,
            loadingMore: f,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: S
        };
    },
    _ = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: i,
            loadMore: l
        } = m({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => 'notification-center-item' === e.kind),
            hasMore: i,
            loadMore: l
        };
    };
