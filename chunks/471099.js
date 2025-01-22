Object.defineProperty(n, '__esModule', { value: !0 }), (n.runtimeHashMessageKey = l);
let i = r(820401),
    a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    o = (() => {
        let e = new Uint8Array(4);
        return !((new Uint32Array(e.buffer)[0] = 1) & e[0]);
    })();
function s(e) {
    e = BigInt(e);
    let n = [],
        r = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8);
    for (let i = 0; i < r; i++) n.unshift(Number((e >> BigInt(8 * i)) & BigInt(255)));
    let i = new Uint8Array(n);
    return o ? i : i.reverse();
}
function l(e) {
    let n = s((0, i.hash)(e, 0));
    return [a[n[0] >> 2], a[((3 & n[0]) << 4) | (n[1] >> 4)], a[((15 & n[1]) << 2) | (n[2] >> 6)], a[63 & n[2]], a[n[3] >> 2], a[((3 & n[3]) << 4) | (n[3] >> 4)]].join('');
}
