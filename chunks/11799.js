n.d(t, { y6: () => f }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(45114),
    a = n(733427),
    o = n(455199),
    s = n(833592),
    c = n(140155),
    u = n(774807),
    d = n(490897);
let f = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: f,
        loadMore: h,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: f, withMentions: h = !1, initialPageSize: p } = e,
            g = (0, i.e7)([u.Z], () => u.Z.shouldReload()),
            b = r.useRef(!1),
            [m, y] = r.useState(!1),
            {
                initialized: O,
                loading: v,
                items: j,
                hasMore: C,
                cursor: x,
                errored: E,
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored,
            })),
            { roleFilter: S, everyoneFilter: I } = (0, i.cj)([o.ZP], () => ({
                everyoneFilter: o.ZP.everyoneFilter,
                roleFilter: o.ZP.roleFilter,
            }));
        r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                O && t && (0, l.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, O]);
        let _ = (0, a.Z)();
        r.useEffect(
            () => () => {
                f ? !_() && (E || j.length > 100) && (0, s.jF)() : n && j.length > 100 && (0, s.jF)();
            },
            [n, j, f, _, E],
        ),
            r.useEffect(() => {
                let e = g && t;
                (!O || e) &&
                    (0, s.jk)({
                        limit: null != p ? p : h ? 8 : 20,
                        with_mentions: h,
                        roles_filter: S,
                        everyone_filter: I,
                    });
            }, [O, g, t, h, S, I, p]);
        let P = r.useCallback(
            async (e) => {
                !b.current &&
                    O &&
                    C &&
                    null != x &&
                    (e || !E) &&
                    ((b.current = !0),
                    y(!0),
                    await (0, s.jk)(
                        {
                            after: x,
                            with_mentions: h,
                            roles_filter: S,
                            everyone_filter: I,
                            limit: h ? 8 : 20,
                        },
                        () => {
                            b.current = !1;
                        },
                    ),
                    y(!1));
            },
            [O, C, x, E, h, S, I],
        );
        return {
            initialized: O,
            loading: v,
            items: j,
            hasMore: C,
            loadMore: P,
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
        loadMore: h,
    };
};
