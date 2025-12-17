n.d(e, { z: () => A });
var i = n(657707),
    l = n(725727),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(526665),
    o = n(387747),
    S = n(12025),
    T = n(501419),
    c = n(874235),
    E = n(435342),
    d = n(726985),
    g = n(388032);
let _ = (0, s.k4)(r.n.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [S.R, c.n, T.f, E.Y],
    }),
    I = (0, s.wf)(r.n.GIFT_PANEL, {
        usePredicate: () => !(0, a.gN)("LegacyGiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.ZP,
        buildLayout: () => [],
    }),
    N = (0, s.wf)(r.n.GIFT_PANEL, {
        usePredicate: () => (0, a.gN)("GiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        buildLayout: () => [_],
    }),
    A = (0, s.m7)(r.n.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        getLegacySearchKey: () => ((0, a.Gl)("GiftPanel") ? void 0 : d.s6.GIFT_INVENTORY),
        icon: i.OgN,
        trailing: {
            type: u.W.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
        buildLayout: () => ((0, a.Gl)("GiftPanel") ? [N] : [I]),
    });
