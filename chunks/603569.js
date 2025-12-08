n.d(e, { a: () => _ });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    r = n(481060),
    u = n(631885),
    a = n(509613),
    o = n(970013),
    c = n(313789),
    d = n(54942),
    T = n(726985),
    E = n(388032),
    S = n(225753);
let I = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => E.intl.string(S.default.RZqaJn),
        render: () => (0, i.jsx)(d.Z, {}),
        buildLayout: () => [],
    }),
    g = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => E.intl.string(S.default.RZqaJn),
        buildLayout: () => [I],
    }),
    _ = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(S.default.RZqaJn),
        getLegacySearchKey: () => T.s6.PRIVACY_FAMILY_CENTER,
        icon: l.BFJ,
        trailing: {
            type: o.W.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (t) {
                let e = (0, u.gU)();
                return t === s.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(r.IGR, { text: E.intl.string(E.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(r.mAB, { count: e })
                      : null;
            },
        },
        buildLayout: () => [g],
    });
