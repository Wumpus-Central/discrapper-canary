n.d(e, { a: () => _ });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    u = n(481060),
    r = n(631885),
    a = n(509613),
    o = n(970013),
    S = n(313789),
    T = n(54942),
    c = n(726985),
    E = n(388032),
    d = n(517319);
let g = (0, a.wf)(S.n.FAMILY_CENTER_PANEL, {
        useTitle: () => E.intl.string(d.default.RZqaJn),
        StronglyDiscouragedCustomComponent: T.Z,
        buildLayout: () => [],
    }),
    _ = (0, a.m7)(S.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(d.default.RZqaJn),
        getLegacySearchKey: () => c.s6.PRIVACY_FAMILY_CENTER,
        icon: l.BFJ,
        trailing: {
            type: o.W.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (t) {
                let e = (0, r.gU)();
                return t === s.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(u.IGR, { text: E.intl.string(E.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(u.mAB, { count: e })
                      : null;
            },
        },
        buildLayout: () => [g],
    });
