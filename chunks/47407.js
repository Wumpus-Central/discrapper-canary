"use strict";
n.d(t, { A: () => s, W: () => a });
var r = n(573648),
    i = n(611010);
let a = "xbox:";
class s extends i.Ay {
    constructor(e) {
        super(e), (this.id = `${a}${e.name}`), (this.name = e.name);
    }
    getIconURL() {
        return r.A.get("xbox").icon.lightPNG;
    }
}
