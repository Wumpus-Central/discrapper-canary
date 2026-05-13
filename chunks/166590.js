"use strict";
n.d(t, { A: () => a, g: () => s });
var i = n(575593),
    r = n(149807);
let s = (e) => e instanceof a;
class a extends r.A {
    constructor(e) {
        super(e), (this.type = i.R.NONE);
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), type: i.R.NONE });
    }
}
