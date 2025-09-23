r.d(t, { Z: () => c }), r(415506);
var n = r(979554),
    l = r(922347),
    i = r(135483),
    a = r(212161),
    o = r(523080),
    s = r(981631);
class c extends o.Z {
    static fromServer(e) {
        return new c(e);
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
            (this.skuProductLine = s.POd.COLLECTIBLES);
        let t = ((e) => {
            switch (e.type) {
                case n.Z.AVATAR_DECORATION:
                    return l.Z.fromServer(e);
                case n.Z.PROFILE_EFFECT:
                    return a.Z.fromServer(e);
                case n.Z.NAMEPLATE:
                    return i.Z.fromServer(e);
                default:
                    return null;
            }
        })(e.collectibles_item);
        if (null == t) throw Error("Collectibles item not found");
        this.collectiblesItem = t;
    }
}
