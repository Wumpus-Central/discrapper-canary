n.d(e, { a: () => A });
var i = n(54381),
    l = n(657707),
    s = n(704215),
    u = n(481060),
    r = n(631885),
    a = n(106939),
    o = n(509613),
    T = n(970013),
    S = n(313789),
    c = n(526665),
    E = n(231582),
    d = n(726985),
    _ = n(388032),
    g = n(517319);
let I = (0, o.wf)(S.n.FAMILY_CENTER_PANEL, {
        usePredicate: () => !(0, c.gN)("LegacyFamilyCenterPanel"),
        useTitle: () => _.intl.string(g.default.RZqaJn),
        StronglyDiscouragedCustomComponent: a.M,
        buildLayout: () => [],
    }),
    N = (0, o.wf)(S.n.FAMILY_CENTER_PANEL, {
        usePredicate: () => (0, c.gN)("FamilyCenterPanel"),
        useTitle: () => _.intl.string(g.default.RZqaJn),
        buildLayout: () => [E.W],
    }),
    A = (0, o.m7)(S.n.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(g.default.RZqaJn),
        getLegacySearchKey: () => ((0, c.Gl)("FamilyCenterPanel") ? void 0 : d.s6.PRIVACY_FAMILY_CENTER),
        icon: l.GroupIcon,
        trailing: {
            type: T.W.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.z.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (t) {
                let e = (0, r.gU)();
                return t === s.z.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(u.IGR, { text: _.intl.string(_.t.y2b7CA) })
                    : e > 0
                      ? (0, i.jsx)(u.mAB, { count: e })
                      : null;
            },
        },
        buildLayout: () => ((0, c.Gl)("FamilyCenterPanel") ? [N] : [I]),
    });
