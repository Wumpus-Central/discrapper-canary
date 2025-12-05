n.d(t, {
    Q: () => d,
    Z: () => f,
}),
    n(539854),
    n(388685),
    n(415506);
var r = n(979554),
    i = n(922347),
    a = n(135483),
    o = n(212161),
    s = n(523080),
    l = n(981631);
function c(e, t, n) {
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
let u = (e) => {
        switch (e.type) {
            case r.Z.AVATAR_DECORATION:
                return i.Z.fromServer(e);
            case r.Z.PROFILE_EFFECT:
                return o.Z.fromServer(e);
            case r.Z.NAMEPLATE:
                return a.Z.fromServer(e);
            default:
                return null;
        }
    },
    d = (e) => e instanceof f;
class f extends s.Z {
    static fromServer(e) {
        return new f(e);
    }
    constructor(e) {
        if (
            (super(e),
            c(this, "collectiblesItem", void 0),
            c(this, "bundleItems", void 0),
            (this.skuProductLine = l.POd.COLLECTIBLES),
            null != e.bundle_items)
        ) {
            let t = [];
            for (let n of e.bundle_items) {
                let e = u(n);
                null != e && t.push(e);
            }
            if (0 === t.length) throw Error("Bundle has no valid items");
            this.bundleItems = t;
        } else if (null != e.collectibles_item) {
            let t = u(e.collectibles_item);
            if (null == t) throw Error("Collectibles item not found");
            this.collectiblesItem = t;
        } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items");
    }
}
