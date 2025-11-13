n.d(t, { y6: () => p }), n(388685);
var r = n(647438),
    i = n(442837),
    l = n(45114),
    o = n(733427),
    a = n(455199),
    s = n(833592),
    c = n(140155),
    u = n(774807),
    d = n(490897);
let p = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: p,
        loadMore: h,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: p, withMentions: h = !1, initialPageSize: f } = e,
            g = (0, i.e7)([u.Z], () => u.Z.shouldReload()),
            m = r.useRef(!1),
            [b, _] = r.useState(!1),
            {
                initialized: y,
                loading: O,
                items: v,
                hasMore: j,
                cursor: x,
                errored: C,
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored,
            })),
            { roleFilter: E, everyoneFilter: S } = (0, i.cj)([a.ZP], () => ({
                everyoneFilter: a.ZP.everyoneFilter,
                roleFilter: a.ZP.roleFilter,
            }));
        r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                y && t && (0, l.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, y]);
        let I = (0, o.Z)();
        r.useEffect(
            () => () => {
                p ? !I() && (C || v.length > 100) && (0, s.jF)() : n && v.length > 100 && (0, s.jF)();
            },
            [n, v, p, I, C],
        ),
            r.useEffect(() => {
                let e = g && t;
                (!y || e) &&
                    (0, s.jk)({
                        limit: null != f ? f : h ? 8 : 20,
                        with_mentions: h,
                        roles_filter: E,
                        everyone_filter: S,
                    });
            }, [y, g, t, h, E, S, f]);
        let P = r.useCallback(
            async (e) => {
                !m.current &&
                    y &&
                    j &&
                    null != x &&
                    (e || !C) &&
                    ((m.current = !0),
                    _(!0),
                    await (0, s.jk)(
                        {
                            after: x,
                            with_mentions: h,
                            roles_filter: E,
                            everyone_filter: S,
                            limit: h ? 8 : 20,
                        },
                        () => {
                            m.current = !1;
                        },
                    ),
                    _(!1));
            },
            [y, j, x, C, h, E, S],
        );
        return {
            initialized: y,
            loading: O,
            items: v,
            hasMore: j,
            loadMore: P,
            loadingMore: b,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: C,
        };
    })({
        isFocused: !0,
        isDesktop: !0,
    });
    return {
        initialized: e,
        loading: t,
        items: n.filter((e) => "notification-center-item" === e.kind),
        hasMore: p,
        loadMore: h,
    };
};
