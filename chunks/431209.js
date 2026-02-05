"use strict";
n.d(t, { A: () => i });
var r = n(315069);
class i extends r.A {
    id;
    name;
    static createFromServer(e) {
        return new i(e);
    }
    constructor(e) {
        super(), (this.id = e.id), (this.name = e.name);
    }
}
