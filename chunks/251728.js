n.d(t, { Y: () => _ });
var r = n(685816),
    i = n(549616),
    a = n(472756),
    o = n(794934),
    s = n(885577),
    l = n(198647),
    c = n(690913),
    u = n(608413);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ {
    static fromServer(e) {
        return new _(e);
    }
    constructor(e) {
        (d(this, 'shopBlocks', void 0),
            d(this, 'categories', void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case r.z.HERO:
                            return l.s.fromServer(e);
                        case r.z.FEATURED:
                            return o.I.fromServer(e);
                        case r.z.FEED:
                            return s.K.fromServer(e);
                        case r.z.WIDE_BANNER:
                            return u.j.fromServer(e);
                        case r.z.SHELF:
                            return c.O.fromServer(e);
                        case r.z.COUNTDOWN_TIMER:
                            return a.G.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.Z.fromServer(e))));
    }
}
