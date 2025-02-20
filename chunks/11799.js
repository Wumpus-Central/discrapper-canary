n.d(t, { y6: () => m }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(45114),
    o = n(733427),
    l = n(455199),
    s = n(833592),
    c = n(140155),
    d = n(774807),
    u = n(490897);
let p = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: p, withMentions: m = !1, initialPageSize: f } = e,
            h = (0, i.e7)([d.Z], () => d.Z.shouldReload()),
            g = r.useRef(!1),
            [_, b] = r.useState(!1),
            {
                initialized: v,
                loading: y,
                items: x,
                hasMore: O,
                cursor: E,
                errored: j
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: N, everyoneFilter: C } = (0, i.cj)([l.Z], () => ({
                everyoneFilter: l.Z.everyoneFilter,
                roleFilter: l.Z.roleFilter
            }));
        r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                v && t && (0, a.FT)(u.W.NOTIFICATION_CENTER);
            }, [t, v]);
        let I = (0, o.Z)();
        r.useEffect(
            () => () => {
                p ? !I() && (j || x.length > 100) && (0, s.jF)() : n && x.length > 100 && (0, s.jF)();
            },
            [n, x, p, I, j]
        ),
            r.useEffect(() => {
                let e = h && t;
                (!v || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : m ? 8 : 20,
                        with_mentions: m,
                        roles_filter: N,
                        everyone_filter: C
                    });
            }, [v, h, t, m, N, C, f]);
        let S = r.useCallback(
            async (e) => {
                !g.current &&
                    v &&
                    O &&
                    null != E &&
                    (e || !j) &&
                    ((g.current = !0),
                    b(!0),
                    await (0, s.jk)(
                        {
                            after: E,
                            with_mentions: m,
                            roles_filter: N,
                            everyone_filter: C,
                            limit: m ? 8 : 20
                        },
                        () => {
                            g.current = !1;
                        }
                    ),
                    b(!1));
            },
            [v, O, E, j, m, N, C]
        );
        return {
            initialized: v,
            loading: y,
            items: x,
            hasMore: O,
            loadMore: S,
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
