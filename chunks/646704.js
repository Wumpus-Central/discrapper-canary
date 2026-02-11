i.d(t, { i: () => I });
var n = i(627968),
    l = i(934551),
    s = i(158954),
    r = i(827734),
    a = i(155984),
    u = i(682829),
    o = i(419954),
    d = i(933297),
    _ = i(780964),
    T = i(358776),
    A = i(616415),
    S = i(531525),
    E = i(985018);
let c = (0, o.t_)(_.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    g = (0, o.t_)(_.X.SUBSCRIPTIONS_PANEL, { useTitle: () => E.intl.string(E.t.trSpHX), buildLayout: () => [A.J] }),
    I = (0, o.i4)(_.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        getLegacySearchKey: () => ((0, T.WJ)("SubscriptionsPanel") ? void 0 : S.H.SUBSCRIPTIONS),
        icon: l.SubscriptionIcon,
        trailing: {
            type: d.Si.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, a.l)() ? (0, n.jsx)(s.EpV, { size: "xs", color: r.A.unsafe_rawColors.YELLOW_300 }) : null,
        },
        buildLayout: () => ((0, T.WJ)("SubscriptionsPanel") ? [g] : [c]),
    });
