n.d(e, { F: () => N });
var i = n(54381),
    l = n(657707),
    s = n(793030),
    u = n(692547),
    r = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(970013),
    T = n(313789),
    S = n(526665),
    d = n(684610),
    E = n(726985),
    g = n(388032);
let I = (0, o.wf)(T.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    _ = (0, o.wf)(T.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        buildLayout: () => [d.E],
    }),
    N = (0, o.m7)(T.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        getLegacySearchKey: () => ((0, S.Gl)("SubscriptionsPanel") ? void 0 : E.s6.SUBSCRIPTIONS),
        icon: l.XOf,
        trailing: {
            type: c.W.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, r.U)()
                    ? (0, i.jsx)(s.Mgn, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        buildLayout: () => ((0, S.Gl)("SubscriptionsPanel") ? [_] : [I]),
    });
