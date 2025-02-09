Object.defineProperty(t, '__esModule', { value: !0 }), (t.runtimeHashMessageKey = o);
let i = n(820401),
    r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    a = (() => {
        let e = new Uint8Array(4);
        return !((new Uint32Array(e.buffer)[0] = 1) & e[0]);
    })();
function s(e) {
    e = BigInt(e);
    let t = [],
        n = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8);
    for (let i = 0; i < n; i++) t.unshift(Number((e >> BigInt(8 * i)) & BigInt(255)));
    let i = new Uint8Array(t);
    return a ? i : i.reverse();
}
function o(e) {
    let t = s((0, i.hash)(e, 0));
    return [r[t[0] >> 2], r[((3 & t[0]) << 4) | (t[1] >> 4)], r[((15 & t[1]) << 2) | (t[2] >> 6)], r[63 & t[2]], r[t[3] >> 2], r[((3 & t[3]) << 4) | (t[3] >> 4)]].join('');
}
