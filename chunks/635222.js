"use strict";
n.d(t, { A: () => r });
var i = n(7584);
let r = function (e) {
    let t = new Map();
    for (let n of e) {
        if (null != n.id) {
            t.set(n.id, n);
            continue;
        }
        let e = i.Ay.convertSurrogateToBase(n.surrogates) ?? n;
        t.set(e.name, e);
    }
    return t;
};
