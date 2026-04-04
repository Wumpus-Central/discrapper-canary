n.d(t, { i: () => x });
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(158954),
    r = n(827734),
    o = n(155984),
    d = n(419954),
    c = n(933297),
    u = n(780964),
    m = n(681283),
    g = n(985018);
let _ = (0, d.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [m.J] }),
    x = (0, d.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: l.SubscriptionIcon,
        usePersistentBadge: function () {
            return s.useMemo(
                () => ({
                    badgeType: c.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, o.l)() ? (0, i.jsx)(a.EpV, { size: "xs", color: r.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [_],
    });
