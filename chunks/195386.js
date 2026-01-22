n.d(t, {
    A: () => i,
});
var r = n(643479);
let i = {
        isGifFile: o,
        findOffsets: l,
    },
    a = 6,
    s = ["GIF87a", "GIF89a"];

function o(e) {
    return !!e && s.includes((0, r.hT)(e, 0, a));
}

function l() {
    return {
        gifHeaderOffset: 0,
    };
}
