n.d(t, { X: () => r }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
async function r(e, t, n) {
    if (0 !== e) throw Error("unsupported fingerprint format version");
    if (0 === t.byteLength) throw Error("zero-length key");
    if (0 === n.length) throw Error("zero-length user ID");
    let r = BigInt(n);
    if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
    let i = new Uint8Array(2 + t.byteLength + 8);
    i.set(t, 2);
    let a = new DataView(i.buffer);
    return a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, r), i;
}
