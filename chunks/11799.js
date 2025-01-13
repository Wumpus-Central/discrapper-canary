n.d(t, {
    y6: function () {
        return h;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(45114),
    a = n(733427),
    o = n(455199),
    s = n(833592),
    c = n(140155),
    d = n(774807),
    u = n(490897);
let m = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: m, withMentions: h = !1, initialPageSize: f } = e,
            p = (0, r.e7)([d.Z], () => d.Z.shouldReload()),
            _ = i.useRef(!1),
            [g, E] = i.useState(!1),
            {
                initialized: C,
                loading: I,
                items: x,
                hasMore: N,
                cursor: v,
                errored: T
            } = (0, r.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: S, everyoneFilter: A } = (0, r.cj)([o.Z], () => ({
                everyoneFilter: o.Z.everyoneFilter,
                roleFilter: o.Z.roleFilter
            }));
        i.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            i.useEffect(() => {
                C && t && (0, l.FT)(u.W.NOTIFICATION_CENTER);
            }, [t, C]);
        let b = (0, a.Z)();
        i.useEffect(
            () => () => {
                m ? !b() && (T || x.length > 100) && (0, s.jF)() : n && x.length > 100 && (0, s.jF)();
            },
            [n, x, m, b, T]
        ),
            i.useEffect(() => {
                let e = p && t;
                (!C || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : h ? 8 : 20,
                        with_mentions: h,
                        roles_filter: S,
                        everyone_filter: A
                    });
            }, [C, p, t, h, S, A, f]);
        let j = i.useCallback(
            async (e) => {
                !_.current &&
                    C &&
                    N &&
                    null != v &&
                    (e || !T) &&
                    ((_.current = !0),
                    E(!0),
                    await (0, s.jk)(
                        {
                            after: v,
                            with_mentions: h,
                            roles_filter: S,
                            everyone_filter: A,
                            limit: h ? 8 : 20
                        },
                        () => {
                            _.current = !1;
                        }
                    ),
                    E(!1));
            },
            [C, N, v, T, h, S, A]
        );
        return {
            initialized: C,
            loading: I,
            items: x,
            hasMore: N,
            loadMore: j,
            loadingMore: g,
            setReadNotifItemToAcked: (e) => {
                !e.acked && (e.acked = !0);
            },
            errored: T
        };
    },
    h = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: i,
            loadMore: r
        } = m({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => 'notification-center-item' === e.kind),
            hasMore: i,
            loadMore: r
        };
    };
