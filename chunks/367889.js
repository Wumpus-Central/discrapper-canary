n.d(e, { F: () => I });
var i = n(54381),
    l = n(657707),
    s = n(793030),
    u = n(692547),
    r = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(970013),
    d = n(313789),
    S = n(726985),
    T = n(388032);
let E = (0, o.x1)(d.n.SUBSCRIPTIONS_PANE, {
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    g = (0, o.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => T.intl.string(T.t.trSpHX),
        buildLayout: () => [E],
    }),
    I = (0, o.m7)(d.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.trSpHX),
        getLegacySearchKey: () => S.s6.SUBSCRIPTIONS,
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
        buildLayout: () => [g],
    });
