n.d(e, { KL: () => O });
var i = n(54381),
    l = n(657707),
    s = n(924557),
    r = n(703288),
    u = n(574755),
    a = n(509613),
    o = n(313789),
    c = n(526665),
    d = n(698151),
    E = n(183353),
    S = n(726985),
    I = n(388032);
let T = (0, a.x1)(o.n.CLIPS_PANE, {
        usePredicate: () => !(0, c.BK)("LegacyClipsPane"),
        render: () => (0, i.jsx)(u.Z, {}),
        buildLayout: () => [],
    }),
    g = (0, a.x1)(o.n.CLIPS_PANE, {
        usePredicate: () => {
            let t = (0, c.BK)("ClipsPanel"),
                e = (0, s.w9)();
            return t && e;
        },
        buildLayout: () => [E.x, d.K],
    }),
    _ = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => I.intl.string(I.t.z2jK6X),
        useBadge: () => (0, i.jsx)(r.Z, {}),
        buildLayout: () => ((0, c.Ml)("ClipsPanel") ? [g] : [T]),
    }),
    O = (0, a.m7)(o.n.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t.z2jK6X),
        getLegacySearchKey: () => ((0, c.Ml)("ClipsPanel") ? void 0 : S.s6.CLIPS),
        icon: l.AlX,
        buildLayout: () => [_],
    });
