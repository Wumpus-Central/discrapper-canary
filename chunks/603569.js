n.d(e, { a: () => I });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    r = n(481060),
    u = n(631885),
    a = n(509613),
    o = n(970013),
    c = n(313789),
    d = n(54942),
    g = n(726985),
    S = n(388032),
    T = n(225753);
let E = (0, a.wf)(c.n.FAMILY_CENTER_PANEL, {
        useTitle: () => S.intl.string(T.default.RZqaJn),
        StronglyDiscouragedCustomComponent: d.Z,
        buildLayout: () => [],
    }),
    I = (0, a.m7)(c.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(T.default.RZqaJn),
        getLegacySearchKey: () => g.s6.PRIVACY_FAMILY_CENTER,
        icon: l.BFJ,
        trailing: {
            type: o.W.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (t) {
                let e = (0, u.gU)();
                return t === s.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(r.IGR, { text: S.intl.string(S.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(r.mAB, { count: e })
                      : null;
            },
        },
        buildLayout: () => [E],
    });
