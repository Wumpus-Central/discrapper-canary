n.d(t, { y6: () => p }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(45114),
    o = n(733427),
    s = n(455199),
    a = n(833592),
    c = n(140155),
    u = n(774807),
    d = n(490897);
let h = (e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: h, withMentions: p = !1, initialPageSize: f } = e,
            g = (0, i.e7)([u.Z], () => u.Z.shouldReload()),
            m = r.useRef(!1),
            [b, O] = r.useState(!1),
            {
                initialized: _,
                loading: y,
                items: C,
                hasMore: v,
                cursor: j,
                errored: E,
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored,
            })),
            { roleFilter: S, everyoneFilter: x } = (0, i.cj)([s.ZP], () => ({
                everyoneFilter: s.ZP.everyoneFilter,
                roleFilter: s.ZP.roleFilter,
            }));
        r.useEffect(() => ((0, a.Vk)(!0), () => (0, a.Vk)(!1)), []),
            r.useEffect(() => {
                _ && t && (0, l.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, _]);
        let I = (0, o.Z)();
        r.useEffect(
            () => () => {
                h ? !I() && (E || C.length > 100) && (0, a.jF)() : n && C.length > 100 && (0, a.jF)();
            },
            [n, C, h, I, E],
        ),
            r.useEffect(() => {
                let e = g && t;
                (!_ || e) &&
                    (0, a.jk)({
                        limit: null != f ? f : p ? 8 : 20,
                        with_mentions: p,
                        roles_filter: S,
                        everyone_filter: x,
                    });
            }, [_, g, t, p, S, x, f]);
        let P = r.useCallback(
            async (e) => {
                !m.current &&
                    _ &&
                    v &&
                    null != j &&
                    (e || !E) &&
                    ((m.current = !0),
                    O(!0),
                    await (0, a.jk)(
                        {
                            after: j,
                            with_mentions: p,
                            roles_filter: S,
                            everyone_filter: x,
                            limit: p ? 8 : 20,
                        },
                        () => {
                            m.current = !1;
                        },
                    ),
                    O(!1));
            },
            [_, v, j, E, p, S, x],
        );
        return {
            initialized: _,
            loading: y,
            items: C,
            hasMore: v,
            loadMore: P,
            loadingMore: b,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: E,
        };
    },
    p = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: r,
            loadMore: i,
        } = h({
            isFocused: !0,
            isDesktop: !0,
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter((e) => "notification-center-item" === e.kind),
            hasMore: r,
            loadMore: i,
        };
    };
