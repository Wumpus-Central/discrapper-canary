n.d(e, { a: () => A });
var i = n(951288),
    l = n(657707),
    u = n(704215),
    r = n(481060),
    s = n(631885),
    a = n(509613),
    o = n(28682),
    c = n(313789),
    E = n(54942),
    d = n(726985),
    T = n(388032),
    I = n(41418);
let O = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => T.intl.string(I.default.RZqaJn),
        buildLayout: () => [],
        render: () => (0, i.jsx)(E.Z, {}),
    }),
    S = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => T.intl.string(I.default.RZqaJn),
        buildLayout: () => [O],
    }),
    A = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        icon: l.BFJ,
        useTitle: () => T.intl.string(I.default.RZqaJn),
        legacySearchKey: d.s6.PRIVACY_FAMILY_CENTER,
        buildLayout: () => [S],
        trailing: {
            type: o.PU.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [u.z.FAMILY_CENTER_NEW_BADGE],
            useDecoration: function (t) {
                let e = (0, s.gU)();
                return t === u.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(r.IGR, { text: T.intl.string(T.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(r.mAB, { count: e })
                      : null;
            },
        },
    });
