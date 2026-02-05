"use strict";
n.d(t, { A: () => i });
var r = n(7584);
let i = (e) => {
    let t = new Map();
    for (let n of e) {
        if (null != n.id) {
            t.set(n.id, n);
            continue;
        }
        let e = r.Ay.convertSurrogateToBase(n.surrogates) ?? n;
        t.set(e.name, e);
    }
    return t;
};
