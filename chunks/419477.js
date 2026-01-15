n.d(e, { z: () => A });
var i = n(657707),
    l = n(725727),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(526665),
    o = n(387747),
    T = n(12025),
    S = n(501419),
    c = n(874235),
    E = n(435342),
    d = n(726985),
    _ = n(388032);
let g = (0, s.k4)(r.n.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [T.R, c.n, S.f, E.Y],
    }),
    I = (0, s.wf)(r.n.GIFT_PANEL, {
        usePredicate: () => !(0, a.gN)("LegacyGiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.ZP,
        buildLayout: () => [],
    }),
    N = (0, s.wf)(r.n.GIFT_PANEL, {
        usePredicate: () => (0, a.gN)("GiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        buildLayout: () => [g],
    }),
    A = (0, s.m7)(r.n.GIFT_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        getLegacySearchKey: () => ((0, a.Gl)("GiftPanel") ? void 0 : d.s6.GIFT_INVENTORY),
        icon: i.GiftIcon,
        trailing: {
            type: u.W.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
        buildLayout: () => ((0, a.Gl)("GiftPanel") ? [N] : [I]),
    });
