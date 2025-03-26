Object.defineProperty(t, '__esModule', { value: !0 }), (t.runtimeHashMessageKey = s);
let r = n(820401),
    i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    o = (() => {
        let e = new Uint8Array(4);
        return !((new Uint32Array(e.buffer)[0] = 1) & e[0]);
    })();
function a(e) {
    e = BigInt(e);
    let t = [],
        n = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8);
    for (let r = 0; r < n; r++) t.unshift(Number((e >> BigInt(8 * r)) & BigInt(255)));
    let r = new Uint8Array(t);
    return o ? r : r.reverse();
}
function s(e) {
    let t = a((0, r.hash)(e, 0));
    return [i[t[0] >> 2], i[((3 & t[0]) << 4) | (t[1] >> 4)], i[((15 & t[1]) << 2) | (t[2] >> 6)], i[63 & t[2]], i[t[3] >> 2], i[((3 & t[3]) << 4) | (t[3] >> 4)]].join('');
}
