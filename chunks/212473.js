n.d(e, { KL: () => _ });
var i = n(54381),
    l = n(657707),
    s = n(924557),
    r = n(703288),
    u = n(574755),
    a = n(509613),
    o = n(313789),
    c = n(526665),
    d = n(698151),
    g = n(183353),
    S = n(726985),
    T = n(388032);
let E = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => T.intl.string(T.t.z2jK6X),
        useBadge: () => (0, i.jsx)(r.Z, {}),
        usePredicate: () => !(0, c.BK)("LegacyClipsPane"),
        StronglyDiscouragedCustomComponent: u.Z,
        buildLayout: () => [],
    }),
    I = (0, a.wf)(o.n.CLIPS_PANEL, {
        useTitle: () => T.intl.string(T.t.z2jK6X),
        useBadge: () => (0, i.jsx)(r.Z, {}),
        usePredicate: () => {
            let t = (0, c.BK)("ClipsPanel"),
                e = (0, s.w9)();
            return t && e;
        },
        buildLayout: () => [g.x, d.K],
    }),
    _ = (0, a.m7)(o.n.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.z2jK6X),
        icon: l.AlX,
        getLegacySearchKey: () => ((0, c.Ml)("ClipsPanel") ? void 0 : S.s6.CLIPS),
        buildLayout: () => ((0, c.Ml)("ClipsPanel") ? [I] : [E]),
    });
