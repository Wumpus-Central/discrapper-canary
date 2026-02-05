"use strict";
n.d(t, { A: () => a });
var r = n(315069);
class i extends r.A {
    id;
    path;
    static fromPath(e) {
        return new i({ id: e, path: e });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.path = e.path);
    }
}
let a = i;
