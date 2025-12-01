n.d(e, { a: () => O });
var i = n(54381),
    r = n(657707),
    l = n(704215),
    u = n(481060),
    s = n(631885),
    a = n(509613),
    o = n(28682),
    c = n(313789),
    d = n(54942),
    E = n(726985),
    S = n(388032),
    T = n(744038);
let I = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => S.intl.string(T.default.RZqaJn),
        buildLayout: () => [],
        render: () => (0, i.jsx)(d.Z, {}),
    }),
    g = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => S.intl.string(T.default.RZqaJn),
        buildLayout: () => [I],
    }),
    O = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        icon: r.BFJ,
        useTitle: () => S.intl.string(T.default.RZqaJn),
        getLegacySearchKey: () => E.s6.PRIVACY_FAMILY_CENTER,
        buildLayout: () => [g],
        trailing: {
            type: o.PU.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [l.z.FAMILY_CENTER_NEW_BADGE],
            useDecoration: function (t) {
                let e = (0, s.gU)();
                return t === l.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(u.IGR, { text: S.intl.string(S.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(u.mAB, { count: e })
                      : null;
            },
        },
    });
