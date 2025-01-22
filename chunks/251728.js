r.d(n, {
    Y: function () {
        return c;
    }
});
var i = r(685816),
    a = r(549616),
    o = r(794934),
    s = r(885577),
    l = r(198647);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class c {
    static fromServer(e) {
        return new c(e);
    }
    constructor(e) {
        u(this, 'shopBlocks', void 0),
            u(this, 'categories', void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case i.z.HERO:
                            return l.s.fromServer(e);
                        case i.z.FEATURED:
                            return o.I.fromServer(e);
                        case i.z.FEED:
                            return s.K.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => a.Z.fromServer(e)));
    }
}
