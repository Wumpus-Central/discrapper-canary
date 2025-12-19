n.d(e, { F: () => N });
var i = n(54381),
    l = n(657707),
    s = n(793030),
    u = n(692547),
    r = n(160913),
    a = n(813732),
    o = n(509613),
    T = n(970013),
    S = n(313789),
    c = n(526665),
    E = n(684610),
    d = n(726985),
    _ = n(388032);
let g = (0, o.wf)(S.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    I = (0, o.wf)(S.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        buildLayout: () => [E.E],
    }),
    N = (0, o.m7)(S.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        getLegacySearchKey: () => ((0, c.Gl)("SubscriptionsPanel") ? void 0 : d.s6.SUBSCRIPTIONS),
        icon: l.XOf,
        trailing: {
            type: T.W.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, r.U)()
                    ? (0, i.jsx)(s.Mgn, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        buildLayout: () => ((0, c.Gl)("SubscriptionsPanel") ? [I] : [g]),
    });
