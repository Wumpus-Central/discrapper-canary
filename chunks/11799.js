n.d(t, { y6: () => p }), n(388685);
var r = n(73800),
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
        loadMore: f,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: p, withMentions: f = !1, initialPageSize: h } = e,
            g = (0, i.e7)([u.Z], () => u.Z.shouldReload()),
            m = r.useRef(!1),
            [b, _] = r.useState(!1),
            {
                initialized: O,
                loading: y,
                items: v,
                hasMore: j,
                cursor: C,
                errored: E,
            } = (0, i.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored,
            })),
            { roleFilter: x, everyoneFilter: S } = (0, i.cj)([a.ZP], () => ({
                everyoneFilter: a.ZP.everyoneFilter,
                roleFilter: a.ZP.roleFilter,
            }));
        r.useEffect(() => ((0, s.Vk)(!0), () => (0, s.Vk)(!1)), []),
            r.useEffect(() => {
                O && t && (0, l.FT)(d.W.NOTIFICATION_CENTER);
            }, [t, O]);
        let I = (0, o.Z)();
        r.useEffect(
            () => () => {
                p ? !I() && (E || v.length > 100) && (0, s.jF)() : n && v.length > 100 && (0, s.jF)();
            },
            [n, v, p, I, E],
        ),
            r.useEffect(() => {
                let e = g && t;
                (!O || e) &&
                    (0, s.jk)({
                        limit: null != h ? h : f ? 8 : 20,
                        with_mentions: f,
                        roles_filter: x,
                        everyone_filter: S,
                    });
            }, [O, g, t, f, x, S, h]);
        let P = r.useCallback(
            async (e) => {
                !m.current &&
                    O &&
                    j &&
                    null != C &&
                    (e || !E) &&
                    ((m.current = !0),
                    _(!0),
                    await (0, s.jk)(
                        {
                            after: C,
                            with_mentions: f,
                            roles_filter: x,
                            everyone_filter: S,
                            limit: f ? 8 : 20,
                        },
                        () => {
                            m.current = !1;
                        },
                    ),
                    _(!1));
            },
            [O, j, C, E, f, x, S],
        );
        return {
            initialized: O,
            loading: y,
            items: v,
            hasMore: j,
            loadMore: P,
            loadingMore: b,
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
        hasMore: p,
        loadMore: f,
    };
};
