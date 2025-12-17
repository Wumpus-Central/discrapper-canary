n.d(e, { KL: () => I });
var i = n(54381),
    l = n(657707),
    s = n(924557),
    u = n(703288),
    r = n(574755),
    a = n(509613),
    o = n(313789),
    S = n(526665),
    T = n(698151),
    c = n(183353),
    E = n(726985),
    d = n(388032);
let g = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => d.intl.string(d.t.z2jK6X),
        useBadge: () => (0, i.jsx)(u.Z, {}),
        usePredicate: () => !(0, S.BK)("LegacyClipsPane"),
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    _ = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => d.intl.string(d.t.z2jK6X),
        useBadge: () => (0, i.jsx)(u.Z, {}),
        usePredicate: () => {
            let t = (0, S.BK)("ClipsPanel"),
                e = (0, s.w9)();
            return t && e;
        },
        buildLayout: () => [c.x, T.K],
    }),
    I = (0, a.m7)(o.n.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t.z2jK6X),
        icon: l.AlX,
        getLegacySearchKey: () => ((0, S.Ml)("ClipsPanel") ? void 0 : E.s6.CLIPS),
        buildLayout: () => ((0, S.Ml)("ClipsPanel") ? [_] : [g]),
    });
