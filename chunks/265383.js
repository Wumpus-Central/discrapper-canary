"use strict";
function r(e) {
    let t = "";
    for (let n of Object.keys(e)) {
        let r = e[n];
        void 0 !== r && ("boolean" == typeof r && (r = r ? "yes" : "no"), (t += `${n}=${r},`));
    }
    return t;
}
n.d(t, { A: () => r });
