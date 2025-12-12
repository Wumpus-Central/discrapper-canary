n.d(e, { z: () => O });
var i = n(657707),
    l = n(725727),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(526665),
    o = n(387747),
    c = n(12025),
    T = n(501419),
    S = n(874235),
    d = n(435342),
    E = n(726985),
    g = n(388032);
let I = (0, s.k4)(r.n.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [c.R, S.n, T.f, d.Y],
    }),
    _ = (0, s.wf)(r.n.GIFT_PANEL, {
        usePredicate: () => !(0, a.gN)("LegacyGiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.ZP,
        buildLayout: () => [],
    }),
    N = (0, s.wf)(r.n.GIFT_PANEL, {
        usePredicate: () => (0, a.gN)("GiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        buildLayout: () => [I],
    }),
    O = (0, s.m7)(r.n.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        getLegacySearchKey: () => ((0, a.Gl)("GiftPanel") ? void 0 : E.s6.GIFT_INVENTORY),
        icon: i.OgN,
        trailing: {
            type: u.W.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
        buildLayout: () => ((0, a.Gl)("GiftPanel") ? [N] : [_]),
    });
