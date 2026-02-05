"use strict";
n.d(t, { a: () => p });
var r = n(651162),
    i = n(510801),
    a = n(419709),
    s = n(319835),
    o = n(85073),
    l = n(793295),
    u = n(824699),
    c = n(53941),
    d = n(163608),
    _ = n(237463),
    f = n(893998);
class p {
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
                        return f.y.fromServer(e);
                    case r.g.SHELF:
                        return _.r.fromServer(e);
                    case r.g.COUNTDOWN_TIMER:
                        return s.z.fromServer(e);
                    case r.g.IMMERSIVE_BANNER:
                        return c.A.fromServer(e);
                    case r.g.REWARD_HERO:
                        return d.E.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => a.T.fromServer(e)));
    }
    static fromServer(e) {
        return new p(e);
    }
}
