n.d(t, {
    X: () => a,
}),
    n(65821),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
let r = 2,
    i = 8;
async function a(e, t, n) {
    if (0 !== e) throw Error("unsupported fingerprint format version");
    if (0 === t.byteLength) throw Error("zero-length key");
    if (0 === n.length) throw Error("zero-length user ID");
    let a = BigInt(n);
    if (a < 0n || a >= 2n ** 64n) throw Error("user ID out of range");
    let s = new Uint8Array(r + t.byteLength + i);
    s.set(t, r);
    let o = new DataView(s.buffer);
    return o.setUint16(0, e), o.setBigUint64(r + t.byteLength, a), s;
}
