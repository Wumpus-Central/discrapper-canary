"use strict";
n.d(e, { eJ: () => i });
var r = n(978862);
function i() {
    let t = r.O,
        e = t.crypto || t.msCrypto,
        n = () => 16 * Math.random();
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        e &&
            e.getRandomValues &&
            (n = () => {
                let t = new Uint8Array(1);
                return e.getRandomValues(t), t[0];
            });
    } catch (t) {}
    return "10000000100040008000100000000000".replace(/[018]/g, (t) => (t ^ ((15 & n()) >> (t / 4))).toString(16));
}
