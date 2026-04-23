"use strict";
n.d(t, { HT: () => l, WY: () => s });
var r = n(573648),
    i = n(611010);
let s = "spotify",
    a = r.A.get(s);
class o extends i.Ay {
    constructor() {
        super({}), (this.id = s), (this.name = a.name);
    }
    getIconURL(e) {
        return a.icon.lightPNG;
    }
    getWhiteIconURL() {
        return a.icon.whitePNG;
    }
}
let l = new o();
