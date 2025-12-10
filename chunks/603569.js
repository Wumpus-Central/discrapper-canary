n.d(e, { a: () => _ });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    u = n(481060),
    r = n(631885),
    a = n(509613),
    o = n(970013),
    c = n(313789),
    d = n(54942),
    S = n(726985),
    T = n(388032),
    E = n(225753);
let g = (0, a.x1)(c.n.FAMILY_CENTER_PANE, {
        useTitle: () => T.intl.string(E.default.RZqaJn),
        StronglyDiscouragedCustomComponent: d.Z,
        buildLayout: () => [],
    }),
    I = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => T.intl.string(E.default.RZqaJn),
        buildLayout: () => [g],
    }),
    _ = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(E.default.RZqaJn),
        getLegacySearchKey: () => S.s6.PRIVACY_FAMILY_CENTER,
        icon: l.BFJ,
        trailing: {
            type: o.W.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (t) {
                let e = (0, r.gU)();
                return t === s.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(u.IGR, { text: T.intl.string(T.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(u.mAB, { count: e })
                      : null;
            },
        },
        buildLayout: () => [I],
    });
