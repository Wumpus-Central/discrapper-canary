(n.d(t, { y6: () => p }), n(388685));
var r = n(73800),
    i = n(442837),
    l = n(45114),
    o = n(733427),
    a = n(455199),
    s = n(833592),
    c = n(140155),
    u = n(774807),
    d = n(490897);
let h = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: h, withMentions: p = !1, initialPageSize: f } = e,
            g = (0, i.e7)([u.Z], () => u.Z.shouldReload()),
            m = r.useRef(!1),
            [b, _] = r.useState(!1),
            {
                initialized: O,
                loading: y,
                items: v,
                hasMore: C,
                cursor: j,
                errored: E
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })),
            { roleFilter: S, everyoneFilter: x } = (0, i.cj)([a.Z], () => ({
                everyoneFilter: a.Z.everyoneFilter,
                roleFilter: a.Z.roleFilter
            }));
        (r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                O && t && (0, l.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, O]));
        let I = (0, o.Z)();
        (r.useEffect(
            () => () => {
                h ? !I() && (E || v.length > 100) && (0, s.jF)() : n && v.length > 100 && (0, s.jF)();
            },
            [n, v, h, I, E]
        ),
            r.useEffect(() => {
                let e = g && t;
                (!O || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : p ? 8 : 20,
                        with_mentions: p,
                        roles_filter: S,
                        everyone_filter: x
                    });
            }, [O, g, t, p, S, x, f]));
        let P = r.useCallback(
            async (e) => {
                !m.current &&
                    O &&
                    C &&
                    null != j &&
                    (e || !E) &&
                    ((m.current = !0),
                    _(!0),
                    await (0, s.jk)(
                        {
                            after: j,
                            with_mentions: p,
                            roles_filter: S,
                            everyone_filter: x,
                            limit: p ? 8 : 20
                        },
                        () => {
                            m.current = !1;
                        }
                    ),
                    _(!1));
            },
            [O, C, j, E, p, S, x]
        );
        return {
            initialized: O,
            loading: y,
            items: v,
            hasMore: C,
            loadMore: P,
            loadingMore: b,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: E
        };
    },
    p = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: r,
            loadMore: i
        } = h({
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
