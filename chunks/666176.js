"use strict";
n.d(t, { HT: () => l, WY: () => s });
var i = n(573648),
    r = n(395671);
let s = "spotify",
    a = i.A.get(s);
class o extends r.Ay {
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
