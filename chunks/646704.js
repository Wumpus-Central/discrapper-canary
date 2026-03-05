n.d(t, { i: () => A });
var i = n(627968),
    s = n(934551),
    l = n(158954),
    a = n(827734),
    r = n(155984),
    o = n(682829),
    d = n(419954),
    c = n(933297),
    u = n(780964),
    _ = n(616415),
    g = n(985018);
(0, d.t_)(u.X.SUBSCRIPTIONS_PANEL, {
    useTitle: () => g.intl.string(g.t.trSpHX),
    StronglyDiscouragedCustomComponent: o.A,
    buildLayout: () => [],
});
let m = (0, d.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [_.J] }),
    A = (0, d.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: s.SubscriptionIcon,
        trailing: {
            type: c.Si.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, r.l)() ? (0, i.jsx)(l.EpV, { size: "xs", color: a.A.unsafe_rawColors.YELLOW_300 }) : null,
        },
        buildLayout: () => [m],
    });
