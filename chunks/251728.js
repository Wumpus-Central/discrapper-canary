n.d(t, { Y: () => _ });
var r = n(685816),
    i = n(549616),
    o = n(472756),
    a = n(794934),
    s = n(885577),
    l = n(198647),
    c = n(820200),
    u = n(690913),
    d = n(608413);
function f(e, t, n) {
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
class _ {
    static fromServer(e) {
        return new _(e);
    }
    constructor(e) {
        f(this, "shopBlocks", void 0),
            f(this, "categories", void 0),
            (this.shopBlocks = e.shop_blocks
                .map((e) => {
                    switch (e.type) {
                        case r.z.HERO:
                            return l.s.fromServer(e);
                        case r.z.FEATURED:
                            return a.I.fromServer(e);
                        case r.z.FEED:
                            return s.K.fromServer(e);
                        case r.z.WIDE_BANNER:
                            return d.j.fromServer(e);
                        case r.z.SHELF:
                            return u.O.fromServer(e);
                        case r.z.COUNTDOWN_TIMER:
                            return o.G.fromServer(e);
                        case r.z.IMMERSIVE_BANNER:
                            return c.k.fromServer(e);
                        default:
                            return;
                    }
                })
                .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => i.Z.fromServer(e)));
    }
}
