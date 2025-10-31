n.d(e, { a: () => I });
var i = n(951288),
    l = n(657707),
    r = n(704215),
    u = n(481060),
    s = n(631885),
    a = n(509613),
    o = n(28682),
    c = n(313789),
    d = n(54942),
    E = n(726985),
    O = n(388032),
    T = n(602698);
let S = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => O.intl.string(T.default.RZqaJn),
        buildLayout: () => [],
        render: () => (0, i.jsx)(d.Z, {}),
    }),
    g = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => O.intl.string(T.default.RZqaJn),
        buildLayout: () => [S],
    }),
    I = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        icon: l.BFJ,
        useTitle: () => O.intl.string(T.default.RZqaJn),
        legacySearchKey: E.s6.PRIVACY_FAMILY_CENTER,
        buildLayout: () => [g],
        trailing: {
            type: o.PU.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [r.z.FAMILY_CENTER_NEW_BADGE],
            useDecoration: function (t) {
                let e = (0, s.gU)();
                return t === r.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(u.IGR, { text: O.intl.string(O.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(u.mAB, { count: e })
                      : null;
            },
        },
    });
