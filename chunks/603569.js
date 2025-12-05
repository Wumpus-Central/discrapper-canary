n.d(e, { a: () => _ });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    r = n(481060),
    u = n(631885),
    a = n(509613),
    o = n(28682),
    c = n(313789),
    d = n(54942),
    E = n(726985),
    S = n(388032),
    I = n(744038);
let T = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => S.intl.string(I.default.RZqaJn),
        render: () => (0, i.jsx)(d.Z, {}),
        buildLayout: () => [],
    }),
    g = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => S.intl.string(I.default.RZqaJn),
        buildLayout: () => [T],
    }),
    _ = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(I.default.RZqaJn),
        getLegacySearchKey: () => E.s6.PRIVACY_FAMILY_CENTER,
        icon: l.BFJ,
        trailing: {
            type: o.PU.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
            useDecoration: function (t) {
                let e = (0, u.gU)();
                return t === s.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(r.IGR, { text: S.intl.string(S.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(r.mAB, { count: e })
                      : null;
            },
        },
        buildLayout: () => [g],
    });
