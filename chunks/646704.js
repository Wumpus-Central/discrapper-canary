i.d(e, { i: () => c });
var n = i(627968),
    l = i(934551),
    s = i(158954),
    r = i(827734),
    u = i(155984),
    a = i(682829),
    o = i(419954),
    T = i(933297),
    A = i(780964),
    S = i(358776),
    E = i(616415),
    d = i(531525),
    _ = i(985018);
let I = (0, o.t_)(A.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    g = (0, o.t_)(A.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        buildLayout: () => [E.J],
    }),
    c = (0, o.i4)(A.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        getLegacySearchKey: () => ((0, S.WJ)("SubscriptionsPanel") ? void 0 : d.H.SUBSCRIPTIONS),
        icon: l.SubscriptionIcon,
        trailing: {
            type: T.S.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, u.l)()
                    ? (0, n.jsx)(s.EpV, {
                          size: "xs",
                          color: r.A.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        buildLayout: () => ((0, S.WJ)("SubscriptionsPanel") ? [g] : [I]),
    });
