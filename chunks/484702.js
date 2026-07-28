"use strict";
n.d(t, { A: () => r });
var i = n(582128);
function r() {
    let [, e] = (0, i.useState)(0);
    return (0, i.useCallback)(() => e((e) => e + 1), []);
}
