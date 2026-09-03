n.d(t, { A: () => s, g: () => a });
var i = n(575593),
    r = n(338535);
function a(e) {
    return e instanceof s;
}
class s extends r.A {
    constructor(e) {
        super(e), (this.type = i.R.NONE);
    }
    static fromServer(e) {
        return new s({ ...super.fromServer(e), type: i.R.NONE });
    }
}
