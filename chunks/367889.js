n.d(e, { F: () => E });
var i = n(54381),
    l = n(657707),
    s = n(793030),
    r = n(692547),
    u = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(970013),
    d = n(313789),
    g = n(726985),
    S = n(388032);
let T = (0, o.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => S.intl.string(S.t.trSpHX),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    E = (0, o.m7)(d.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.trSpHX),
        getLegacySearchKey: () => g.s6.SUBSCRIPTIONS,
        icon: l.XOf,
        trailing: {
            type: c.W.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, u.U)()
                    ? (0, i.jsx)(s.Mgn, {
                          size: "xs",
                          color: r.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        buildLayout: () => [T],
    });
