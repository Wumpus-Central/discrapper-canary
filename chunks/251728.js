n.d(t, { Y: () => m });
var r = n(685816),
    i = n(549616),
    a = n(863611),
    o = n(472756),
    s = n(794934),
    l = n(885577),
    c = n(198647),
    u = n(820200),
    d = n(930877),
    f = n(690913),
    p = n(608413);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class m {
    static fromServer(e) {
        return new m(e);
    }
    constructor(e) {
        var t;
        _(this, "shopBlocks", void 0),
            _(this, "categories", void 0),
            _(this, "userDiscounts", void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case r.z.HERO:
                            return c.s.fromServer(e);
                        case r.z.FEATURED:
                            return s.I.fromServer(e);
                        case r.z.FEED:
                            return l.K.fromServer(e);
                        case r.z.WIDE_BANNER:
                            return p.j.fromServer(e);
                        case r.z.SHELF:
                            return f.O.fromServer(e);
                        case r.z.COUNTDOWN_TIMER:
                            return o.G.fromServer(e);
                        case r.z.IMMERSIVE_BANNER:
                            return u.k.fromServer(e);
                        case r.z.REWARD_HERO:
                            return d.r.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.Z.fromServer(e))),
            (this.userDiscounts = null == (t = e.user_discounts) ? void 0 : t.map((e) => a.h.fromServer(e)));
    }
}
