"use strict";
n.d(t, { A: () => s });
var i = n(439372),
    r = n(733391);
class a extends i.A {
    actions = { POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this) };
    onPostConnectionOpen() {
        (0, r.Xw)();
    }
}
let s = new a();
