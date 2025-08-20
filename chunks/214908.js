n.d(t, { x: () => a }),
    n(415506),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
let r = 2,
    i = 8;
async function a(e, t, n) {
    if (0 !== e) throw Error("unsupported fingerprint format version");
    if (0 === t.byteLength) throw Error("zero-length key");
    if (0 === n.length) throw Error("zero-length user ID");
    let a = BigInt(n);
    if (a < 0n || a >= 2n ** 64n) throw Error("user ID out of range");
    let o = new Uint8Array(r + t.byteLength + i);
    o.set(t, r);
    let s = new DataView(o.buffer);
    return s.setUint16(0, e), s.setBigUint64(r + t.byteLength, a), o;
}
