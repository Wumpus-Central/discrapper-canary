n.d(t, { Z: () => E });
var r = n(951288),
    i = n(657707),
    l = n(704215),
    o = n(481060),
    s = n(631885),
    a = n(509613),
    u = n(28682),
    c = n(313789),
    d = n(54942),
    f = n(726985),
    g = n(388032),
    O = n(345909);
let y = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => g.intl.string(O.default.RZqaJi),
        getLayout: () => [],
        render: () => (0, r.jsx)(d.Z, {}),
    }),
    E = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(O.default.RZqaJi),
        icon: i.BFJ,
        getLayout: () => [y],
        legacySearchKey: f.s6.PRIVACY_FAMILY_CENTER,
        trailing: {
            type: u.PU.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContentTypes: [l.z.FAMILY_CENTER_NEW_BADGE],
            useDecoration: function (e) {
                let t = (0, s.gU)();
                return e === l.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, r.jsx)(o.IGR, { text: g.intl.string(g.t.y2b7CA) })
                    : t > 0
                      ? (0, r.jsx)(o.mAB, { count: t })
                      : null;
            },
        },
    });
