"use strict";
function i(e, t, n) {
    if (e.byteLength < t) throw Error("data.byteLength must be greater than or equal to desiredLength");
    if (t % n != 0) throw Error("desiredLength must be a multiple of groupSize");
    if (n > 8) throw Error("groupSize must be less than or equal to 8");
    let i = BigInt(10 ** n),
        r = "";
    for (let a = 0; a < t; a += n) {
        let t = BigInt(0);
        for (let i = n; i > 0; --i) {
            let r = e[a + (n - i)];
            if (void 0 === r) throw Error("Out of bounds access from data array");
            t = (t << 8n) | BigInt(r);
        }
        (t %= i), (r += t.toString().padStart(n, "0"));
    }
    return r;
}
async function r(e, t, n) {
    if (0 !== e) throw Error("unsupported fingerprint format version");
    if (0 === t.byteLength) throw Error("zero-length key");
    if (0 === n.length) throw Error("zero-length user ID");
    let i = BigInt(n);
    if (i < 0n || i >= 2n ** 64n) throw Error("user ID out of range");
    let r = new Uint8Array(2 + t.byteLength + 8);
    r.set(t, 2);
    let a = new DataView(r.buffer);
    return a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, i), r;
}
n.d(t, { uo: () => u, _x: () => d, DB: () => i }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var a = n(495142);
let s = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    l = { N: 16384, r: 8, p: 2, dkLen: 64 };
function o(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function d(e, t, n, i, d) {
    let c = await Promise.all([r(e, t, n), r(e, i, d)]);
    c.sort(o);
    let u = new Uint8Array(c[0].byteLength + c[1].byteLength);
    return u.set(c[0], 0), u.set(c[1], c[0].byteLength), new Uint8Array(await (0, a.Q)(u, s, l));
}
var c = n(85526);
function u(e) {
    return c.fromByteArray(e);
}
