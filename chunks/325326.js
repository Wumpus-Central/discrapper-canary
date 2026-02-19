"use strict";
n.d(t, { LF: () => h });
var i = n(64700),
    s = n(311907),
    l = n(334738),
    r = n(964459),
    a = n(187508),
    o = n(245205),
    c = n(252431),
    d = n(810153),
    u = n(790782);
let h = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: h,
        loadMore: A,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: h, withMentions: A = !1, initialPageSize: p } = e,
            g = (0, s.bG)([d.A], () => d.A.shouldReload()),
            m = i.useRef(!1),
            [_, f] = i.useState(!1),
            {
                initialized: x,
                loading: C,
                items: E,
                hasMore: I,
                cursor: b,
                errored: N,
            } = (0, s.cf)([c.A], () => ({
                initialized: c.A.initialized,
                loading: c.A.loading,
                items: c.A.items,
                hasMore: c.A.hasMore,
                cursor: c.A.cursor,
                errored: c.A.errored,
            })),
            { roleFilter: S, everyoneFilter: T } = (0, s.cf)([a.Ay], () => ({
                everyoneFilter: a.Ay.everyoneFilter,
                roleFilter: a.Ay.roleFilter,
            }));
        i.useEffect(() => ((0, o.BZ)(!0), () => (0, o.BZ)(!1)), []),
            i.useEffect(() => {
                x && t && (0, l.d_)(u.P.NOTIFICATION_CENTER);
            }, [t, x]);
        let v = (0, r.A)();
        i.useEffect(
            () => () => {
                h ? !v() && (N || E.length > 100) && (0, o.S3)() : n && E.length > 100 && (0, o.S3)();
            },
            [n, E, h, v, N],
        ),
            i.useEffect(() => {
                let e = g && t;
                (!x || e) &&
                    (0, o.ni)({ limit: p ?? (A ? 8 : 20), with_mentions: A, roles_filter: S, everyone_filter: T });
            }, [x, g, t, A, S, T, p]);
        let y = i.useCallback(
            async (e) => {
                !m.current &&
                    x &&
                    I &&
                    null != b &&
                    (e || !N) &&
                    ((m.current = !0),
                    f(!0),
                    await (0, o.ni)(
                        { after: b, with_mentions: A, roles_filter: S, everyone_filter: T, limit: A ? 8 : 20 },
                        () => {
                            m.current = !1;
                        },
                    ),
                    f(!1));
            },
            [x, I, b, N, A, S, T],
        );
        return {
            initialized: x,
            loading: C,
            items: E,
            hasMore: I,
            loadMore: y,
            loadingMore: _,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: N,
        };
    })({ isFocused: !0, isDesktop: !0 });
    return {
        initialized: e,
        loading: t,
        items: n.filter((e) => "notification-center-item" === e.kind),
        hasMore: h,
        loadMore: A,
    };
};
