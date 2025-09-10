n.d(t, { Z: () => i });
var r = n(462049);
let i = {
    isHeicFile: a,
    findHeicOffsets: o,
};
function a(e) {
    if (!e) return !1;
    let t = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
    try {
        let n = (0, r.ER)(e, 0);
        return n && -1 !== t.indexOf(n.majorBrand);
    } catch (e) {
        return !1;
    }
}
function o(e) {
    return (0, r.ku)(e);
}
