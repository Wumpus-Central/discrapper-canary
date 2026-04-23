"use strict";
n.d(t, { a: () => m });
var r = n(651162),
    i = n(510801),
    s = n(419709),
    a = n(319835),
    o = n(85073),
    l = n(793295),
    u = n(325595),
    c = n(141189),
    d = n(824699),
    _ = n(53941),
    f = n(163608),
    p = n(237463),
    h = n(150493),
    E = n(893998);
class m {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case r.g.HERO:
                        return d.B.fromServer(e);
                    case r.g.FEATURED:
                        return o.t.fromServer(e);
                    case r.g.FEED:
                        return l.l.fromServer(e);
                    case r.g.WIDE_BANNER:
                        return E.y.fromServer(e);
                    case r.g.SHELF:
                        return p.r.fromServer(e);
                    case r.g.COUNTDOWN_TIMER:
                        return a.z.fromServer(e);
                    case r.g.IMMERSIVE_BANNER:
                        return _.A.fromServer(e);
                    case r.g.REWARD_HERO:
                        return f.E.fromServer(e);
                    case r.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return h.$.fromServer(e);
                    case r.g.FRAMES_BANNER:
                        return u.p.fromServer(e);
                    case r.g.FRAMES_EXPERIENCE:
                        return c.t.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => s.T.fromServer(e)));
    }
    static fromServer(e) {
        return new m(e);
    }
}
