n.d(t, { Z: () => E });
var i = n(951288),
    r = n(657707),
    l = n(692547),
    o = n(160913),
    a = n(813732),
    s = n(509613),
    u = n(869235),
    c = n(726985),
    d = n(388032);
let _ = (0, s.x1)(u.t.SUBSCRIPTIONS_PANE, {
        getLayout: () => [],
        render: a.Z,
    }),
    E = (0, s.wf)(u.t.SUBSCRIPTIONS_PANEL, {
        icon: r.SrA,
        useTitle: () => d.intl.string(d.t.trSpHR),
        getLayout: () => [_],
        trailing: {
            useDecoration: () =>
                (0, o.U)()
                    ? (0, i.jsx)(r.Mgn, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        legacySearchKey: c.s6.SUBSCRIPTIONS,
    });
