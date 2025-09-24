n.d(t, {
    Q: () => c,
    Z: () => u,
}),
    n(415506);
var r = n(979554),
    i = n(922347),
    l = n(135483),
    a = n(212161),
    o = n(523080),
    s = n(981631);
let c = (e) => e instanceof u;
class u extends o.Z {
    static fromServer(e) {
        return new u(e);
    }
    constructor(e) {
        super(e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "collectiblesItem", void 0),
            (this.skuProductLine = s.POd.COLLECTIBLES);
        let t = ((e) => {
            switch (e.type) {
                case r.Z.AVATAR_DECORATION:
                    return i.Z.fromServer(e);
                case r.Z.PROFILE_EFFECT:
                    return a.Z.fromServer(e);
                case r.Z.NAMEPLATE:
                    return l.Z.fromServer(e);
                default:
                    return null;
            }
        })(e.collectibles_item);
        if (null == t) throw Error("Collectibles item not found");
        this.collectiblesItem = t;
    }
}
