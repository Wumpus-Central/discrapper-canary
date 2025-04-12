s.d(e, { DM: () => n });
var i = s(899517);
function n() {
    let t = i.n,
        e = t.crypto || t.msCrypto,
        s = () => 16 * Math.random();
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, '');
        e &&
            e.getRandomValues &&
            (s = () => {
                let t = new Uint8Array(1);
                return e.getRandomValues(t), t[0];
            });
    } catch (t) {}
    return '10000000100040008000100000000000'.replace(/[018]/g, (t) => (t ^ ((15 & s()) >> (t / 4))).toString(16));
}
