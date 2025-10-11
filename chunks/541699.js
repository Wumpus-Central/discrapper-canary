r.d(t, {
    Q: () => l,
    Z: () => a,
}),
    r(415506);
var n = r(979554),
    o = r(922347),
    s = r(135483),
    i = r(212161),
    u = r(523080),
    c = r(981631);
let l = (e) => e instanceof a;
class a extends u.Z {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        super(e),
            (function (e, t, r) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = r);
            })(this, "collectiblesItem", void 0),
            (this.skuProductLine = c.POd.COLLECTIBLES);
        let t = ((e) => {
            switch (e.type) {
                case n.Z.AVATAR_DECORATION:
                    return o.Z.fromServer(e);
                case n.Z.PROFILE_EFFECT:
                    return i.Z.fromServer(e);
                case n.Z.NAMEPLATE:
                    return s.Z.fromServer(e);
                default:
                    return null;
            }
        })(e.collectibles_item);
        if (null == t) throw Error("Collectibles item not found");
        this.collectiblesItem = t;
    }
}
