"use strict";
n.d(t, { T: () => a, w: () => r });
var i = n(375708);
function r() {
    return i.intl.string(i.t.T1Frnm);
}
function a(e, t) {
    if ("" === t) return e;
    let n = t.toLowerCase().replace(/[-_ ]/g, "");
    return e.filter((e) => {
        let { url: t } = e;
        return t.toLowerCase().replace(/[-_]/g, "").includes(n);
    });
}
