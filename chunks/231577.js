r.d(t, { eJ: () => i });
var n = r(978862);
function i() {
    let e = n.O,
        t = e.crypto || e.msCrypto,
        r = () => 16 * Math.random();
    try {
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        t &&
            t.getRandomValues &&
            (r = () => {
                let e = new Uint8Array(1);
                return t.getRandomValues(e), e[0];
            });
    } catch (e) {}
    return "10000000100040008000100000000000".replace(/[018]/g, (e) => (e ^ ((15 & r()) >> (e / 4))).toString(16));
}
