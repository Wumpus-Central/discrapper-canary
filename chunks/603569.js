n.d(e, { a: () => I });
var i = n(951288),
    l = n(657707),
    r = n(704215),
    u = n(481060),
    s = n(631885),
    a = n(509613),
    o = n(28682),
    c = n(313789),
    E = n(54942),
    d = n(726985),
    S = n(388032),
    T = n(602698);
let O = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => S.intl.string(T.default.RZqaJn),
        buildLayout: () => [],
        render: () => (0, i.jsx)(E.Z, {}),
    }),
    g = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => S.intl.string(T.default.RZqaJn),
        buildLayout: () => [O],
    }),
    I = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        icon: l.BFJ,
        useTitle: () => S.intl.string(T.default.RZqaJn),
        getLegacySearchKey: () => d.s6.PRIVACY_FAMILY_CENTER,
        buildLayout: () => [g],
        trailing: {
            type: o.PU.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [r.z.FAMILY_CENTER_NEW_BADGE],
            useDecoration: function (t) {
                let e = (0, s.gU)();
                return t === r.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(u.IGR, { text: S.intl.string(S.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(u.mAB, { count: e })
                      : null;
            },
        },
    });
