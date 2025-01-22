r.d(n, {
    H: function () {
        return o;
    },
    Z: function () {
        return s;
    }
});
var i = r(979554),
    a = r(656698);
let o = (e) => e instanceof s;
class s extends a.Z {
    static fromServer(e) {
        return new s({
            ...super.fromServer(e),
            ...e
        });
    }
    constructor(e) {
        super(e), (this.type = i.Z.PROFILE_EFFECT);
    }
}
