n.d(e, { KL: () => _ });
var i = n(54381),
    r = n(657707),
    l = n(924557),
    u = n(703288),
    s = n(574755),
    a = n(509613),
    o = n(313789),
    c = n(526665),
    E = n(698151),
    d = n(183353),
    S = n(726985),
    T = n(388032);
let I = (0, a.x1)(o.n.CLIPS_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
        usePredicate: () => !(0, c.BK)("LegacyClipsPane"),
    }),
    O = (0, a.x1)(o.n.CLIPS_PANE, {
        buildLayout: () => [d.Z, E.Z],
        usePredicate: () => {
            let t = (0, c.BK)("ClipsPanel"),
                e = (0, l.w9)();
            return t && e;
        },
    }),
    g = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => T.intl.string(T.t.z2jK6X),
        useBadge: () => (0, i.jsx)(u.Z, {}),
        buildLayout: () => ((0, c.Ml)("ClipsPanel") ? [O] : [I]),
    }),
    _ = (0, a.m7)(o.n.CLIPS_SIDEBAR_ITEM, {
        icon: r.AlX,
        useTitle: () => T.intl.string(T.t.z2jK6X),
        getLegacySearchKey: () => ((0, c.Ml)("ClipsPanel") ? void 0 : S.s6.CLIPS),
        buildLayout: () => [g],
    });
