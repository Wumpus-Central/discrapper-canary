n.d(t, { y6: () => h }), n(47120);
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
        let { isFocused: t, navigatedAway: n, isDesktop: m, withMentions: h = !1, initialPageSize: _ } = e,
            p = (0, l.e7)([d.Z], () => d.Z.shouldReload()),
            g = i.useRef(!1),
            [f, x] = i.useState(!1),
            {
                initialized: E,
                loading: C,
                items: v,
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
                E && t && (0, a.FT)(u.W.NOTIFICATION_CENTER);
            }, [t, E]);
        let A = (0, r.Z)();
        i.useEffect(
            () => () => {
                m ? !A() && (S || v.length > 100) && (0, o.jF)() : n && v.length > 100 && (0, o.jF)();
            },
            [n, v, m, A, S]
        ),
            i.useEffect(() => {
                let e = p && t;
                (!E || e) &&
                    (0, o.jk)({
                        limit: null != _ ? _ : h ? 8 : 20,
                        with_mentions: h,
                        roles_filter: T,
                        everyone_filter: b
                    });
            }, [E, p, t, h, T, b, _]);
        let j = i.useCallback(
            async (e) => {
                !g.current &&
                    E &&
                    I &&
                    null != N &&
                    (e || !S) &&
                    ((g.current = !0),
                    x(!0),
                    await (0, o.jk)(
                        {
                            after: N,
                            with_mentions: h,
                            roles_filter: T,
                            everyone_filter: b,
                            limit: h ? 8 : 20
                        },
                        () => {
                            g.current = !1;
                        }
                    ),
                    x(!1));
            },
            [E, I, N, S, h, T, b]
        );
        return {
            initialized: E,
            loading: C,
            items: v,
            hasMore: I,
            loadMore: j,
            loadingMore: f,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: S
        };
    },
    h = () => {
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
