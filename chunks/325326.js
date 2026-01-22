n.d(t, {
    LF: () => f,
}),
    n(896048);
var r = n(64700),
    l = n(311907),
    i = n(334738),
    a = n(964459),
    s = n(187508),
    o = n(245205),
    c = n(252431),
    u = n(810153),
    d = n(790782);
let f = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: f,
        loadMore: p,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: f, withMentions: p = !1, initialPageSize: h } = e,
            b = (0, l.bG)([u.A], () => u.A.shouldReload()),
            g = r.useRef(!1),
            [m, A] = r.useState(!1),
            {
                initialized: y,
                loading: O,
                items: j,
                hasMore: v,
                cursor: x,
                errored: E,
            } = (0, l.cf)([c.A], () => ({
                initialized: c.A.initialized,
                loading: c.A.loading,
                items: c.A.items,
                hasMore: c.A.hasMore,
                cursor: c.A.cursor,
                errored: c.A.errored,
            })),
            { roleFilter: _, everyoneFilter: C } = (0, l.cf)([s.Ay], () => ({
                everyoneFilter: s.Ay.everyoneFilter,
                roleFilter: s.Ay.roleFilter,
            }));
        r.useEffect(() => ((0, o.BZ)(!0), () => (0, o.BZ)(!1)), []),
            r.useEffect(() => {
                y && t && (0, i.d_)(d.P.NOTIFICATION_CENTER);
            }, [t, y]);
        let S = (0, a.A)();
        r.useEffect(
            () => () => {
                f ? !S() && (E || j.length > 100) && (0, o.S3)() : n && j.length > 100 && (0, o.S3)();
            },
            [n, j, f, S, E],
        ),
            r.useEffect(() => {
                let e = b && t;
                (!y || e) &&
                    (0, o.ni)({
                        limit: null != h ? h : p ? 8 : 20,
                        with_mentions: p,
                        roles_filter: _,
                        everyone_filter: C,
                    });
            }, [y, b, t, p, _, C, h]);
        let I = r.useCallback(
            async (e) => {
                !g.current &&
                    y &&
                    v &&
                    null != x &&
                    (e || !E) &&
                    ((g.current = !0),
                    A(!0),
                    await (0, o.ni)(
                        {
                            after: x,
                            with_mentions: p,
                            roles_filter: _,
                            everyone_filter: C,
                            limit: p ? 8 : 20,
                        },
                        () => {
                            g.current = !1;
                        },
                    ),
                    A(!1));
            },
            [y, v, x, E, p, _, C],
        );
        return {
            initialized: y,
            loading: O,
            items: j,
            hasMore: v,
            loadMore: I,
            loadingMore: m,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: E,
        };
    })({
        isFocused: !0,
        isDesktop: !0,
    });
    return {
        initialized: e,
        loading: t,
        items: n.filter((e) => "notification-center-item" === e.kind),
        hasMore: f,
        loadMore: p,
    };
};
