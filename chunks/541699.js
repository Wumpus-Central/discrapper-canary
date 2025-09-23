n.d(t, { Z: () => d }), n(415506);
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
};
class d extends s.Z {
    static fromServer(e) {
        return new d(e);
    }
    constructor(e) {
        super(e), c(this, "collectiblesItem", void 0), (this.skuProductLine = l.POd.COLLECTIBLES);
        let t = u(e.collectibles_item);
        if (null == t) throw Error("Collectibles item not found");
        this.collectiblesItem = t;
    }
}
