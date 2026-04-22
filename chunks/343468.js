n.d(t, { i: () => A });
var i = n(627968),
    s = n(64700),
    l = n(153659),
    a = n(695366),
    r = n(827734),
    o = n(155984),
    d = n(419954),
    u = n(933297),
    c = n(780964),
    g = n(681283),
    m = n(985018);
let _ = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => m.intl.string(m.t.trSpHX), buildLayout: () => [g.J] }),
    A = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.trSpHX),
        icon: l.L,
        usePersistentBadge: function () {
            return s.useMemo(
                () => ({
                    badgeType: u.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, o.l)() ? (0, i.jsx)(a.E, { size: "xs", color: r.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [_],
    });
