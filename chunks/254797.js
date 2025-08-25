n.d(t, { Z: () => i });
var r = n(190485);
let i = {
    isHeicFile: o,
    findHeicOffsets: a,
};
function o(e) {
    if (!e) return !1;
    let t = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
    try {
        let n = (0, r.ER)(e, 0);
        return n && -1 !== t.indexOf(n.majorBrand);
    } catch (e) {
        return !1;
    }
}
function a(e) {
    return (0, r.ku)(e);
}
