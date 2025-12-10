n.d(e, { KL: () => O });
var i = n(54381),
    l = n(657707),
    s = n(924557),
    u = n(703288),
    r = n(574755),
    a = n(509613),
    o = n(313789),
    c = n(526665),
    d = n(698151),
    S = n(183353),
    T = n(726985),
    E = n(388032);
let g = (0, a.x1)(o.n.CLIPS_PANE, {
        usePredicate: () => !(0, c.BK)("LegacyClipsPane"),
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    I = (0, a.x1)(o.n.CLIPS_PANE, {
        usePredicate: () => {
            let t = (0, c.BK)("ClipsPanel"),
                e = (0, s.w9)();
            return t && e;
        },
        buildLayout: () => [S.x, d.K],
    }),
    _ = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => E.intl.string(E.t.z2jK6X),
        useBadge: () => (0, i.jsx)(u.Z, {}),
        buildLayout: () => ((0, c.Ml)("ClipsPanel") ? [I] : [g]),
    }),
    O = (0, a.m7)(o.n.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t.z2jK6X),
        getLegacySearchKey: () => ((0, c.Ml)("ClipsPanel") ? void 0 : T.s6.CLIPS),
        icon: l.AlX,
        buildLayout: () => [_],
    });
