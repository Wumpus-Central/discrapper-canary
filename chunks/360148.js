"use strict";
n.d(t, { a: () => h });
var r = n(651162),
    i = n(510801),
    s = n(419709),
    a = n(319835),
    o = n(85073),
    l = n(793295),
    u = n(824699),
    c = n(53941),
    d = n(163608),
    _ = n(237463),
    f = n(150493),
    p = n(893998);
class h {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case r.g.HERO:
                        return u.B.fromServer(e);
                    case r.g.FEATURED:
                        return o.t.fromServer(e);
                    case r.g.FEED:
                        return l.l.fromServer(e);
                    case r.g.WIDE_BANNER:
                        return p.y.fromServer(e);
                    case r.g.SHELF:
                        return _.r.fromServer(e);
                    case r.g.COUNTDOWN_TIMER:
                        return a.z.fromServer(e);
                    case r.g.IMMERSIVE_BANNER:
                        return c.A.fromServer(e);
                    case r.g.REWARD_HERO:
                        return d.E.fromServer(e);
                    case r.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return f.$.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => s.T.fromServer(e)));
    }
    static fromServer(e) {
        return new h(e);
    }
}
