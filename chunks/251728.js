n.d(t, { Y: () => u });
var r = n(685816),
    i = n(549616),
    o = n(794934),
    a = n(885577),
    s = n(198647),
    l = n(608413);
function c(e, t, n) {
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
class u {
    static fromServer(e) {
        return new u(e);
    }
    constructor(e) {
        c(this, 'shopBlocks', void 0),
            c(this, 'categories', void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case r.z.HERO:
                            return s.s.fromServer(e);
                        case r.z.FEATURED:
                            return o.I.fromServer(e);
                        case r.z.FEED:
                            return a.K.fromServer(e);
                        case r.z.WIDE_BANNER:
                            return l.j.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.Z.fromServer(e)));
    }
}
