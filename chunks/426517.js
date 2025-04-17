n.d(t, {
    Fp: () => r,
    GW: () => a,
    JB: () => u,
    NM: () => i,
    VV: () => o,
    ze: () => s
});
let o = Math.min,
    r = Math.max,
    i = Math.round,
    a = Math.floor,
    s = (e) => ({
        x: e,
        y: e
    });
function u(e) {
    let { x: t, y: n, width: o, height: r } = e;
    return {
        width: o,
        height: r,
        top: n,
        left: t,
        right: t + o,
        bottom: n + r,
        x: t,
        y: n
    };
}
