i.d(t, { A: () => r });
var n = i(872863);
let r = {
    isHeicFile: function (e) {
        if (!e) return !1;
        try {
            let t = (0, n.vN)(e, 0);
            return (
                t &&
                -1 !== ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"].indexOf(t.majorBrand)
            );
        } catch (e) {
            return !1;
        }
    },
    findHeicOffsets: function (e) {
        return (0, n.OH)(e);
    },
};
