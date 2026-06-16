"use strict";
n.d(t, { eJ: () => r });
var i = n(978862);
function r() {
    let e = i.O,
        t = e.crypto || e.msCrypto,
        n = () => 16 * Math.random();
    try {
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        t &&
            t.getRandomValues &&
            (n = () => {
                let e = new Uint8Array(1);
                return t.getRandomValues(e), e[0];
            });
    } catch (e) {}
    return "10000000100040008000100000000000".replace(/[018]/g, (e) => (e ^ ((15 & n()) >> (e / 4))).toString(16));
}
