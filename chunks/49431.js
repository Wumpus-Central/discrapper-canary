"use strict";
n.d(t, { A: () => a });
var r = n(439372),
    i = n(733391);
class s extends r.A {
    actions = { POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this) };
    onPostConnectionOpen() {
        (0, i.Xw)();
    }
}
let a = new s();
