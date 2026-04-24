n.d(e, { X: () => r }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
async function r(t, e, n) {
    if (0 !== t) throw Error("unsupported fingerprint format version");
    if (0 === e.byteLength) throw Error("zero-length key");
    if (0 === n.length) throw Error("zero-length user ID");
    let r = BigInt(n);
    if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
    let i = new Uint8Array(2 + e.byteLength + 8);
    i.set(e, 2);
    let a = new DataView(i.buffer);
    return a.setUint16(0, t), a.setBigUint64(2 + e.byteLength, r), i;
}
