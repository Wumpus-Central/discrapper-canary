n.d(t, { Y: () => u });
var i = n(685816),
    r = n(549616),
    a = n(794934),
    s = n(885577),
    o = n(198647);
function l(e, t, n) {
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
        l(this, 'shopBlocks', void 0),
            l(this, 'categories', void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case i.z.HERO:
                            return o.s.fromServer(e);
                        case i.z.FEATURED:
                            return a.I.fromServer(e);
                        case i.z.FEED:
                            return s.K.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => r.Z.fromServer(e)));
    }
}
