"use strict";
n.d(t, { a: () => m });
var r = n(651162),
    i = n(510801),
    s = n(419709),
    a = n(319835),
    o = n(85073),
    l = n(793295),
    u = n(824699),
    c = n(53941),
    d = n(686647),
    _ = n(163608),
    f = n(237463),
    p = n(150493),
    h = n(893998);
class m {
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
                        return h.y.fromServer(e);
                    case r.g.SHELF:
                        return f.r.fromServer(e);
                    case r.g.COUNTDOWN_TIMER:
                        return a.z.fromServer(e);
                    case r.g.IMMERSIVE_BANNER:
                        return c.A.fromServer(e);
                    case r.g.REWARD_HERO:
                        return _.E.fromServer(e);
                    case r.g.MARVEL_RIVALS_PROMOTIONAL_BANNER:
                        return d.T.fromServer(e);
                    case r.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return p.$.fromServer(e);
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
