n.d(e, { x: () => r }), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
async function r(t, e, n) {
    if (0 !== t) throw Error('unsupported fingerprint format version');
    if (0 === e.byteLength) throw Error('zero-length key');
    if (0 === n.length) throw Error('zero-length user ID');
    let r = BigInt(n);
    if (r < 0n || r >= 2n ** 64n) throw Error('user ID out of range');
    let i = new Uint8Array(2 + e.byteLength + 8);
    i.set(e, 2);
    let a = new DataView(i.buffer);
    return a.setUint16(0, t), a.setBigUint64(2 + e.byteLength, r), i;
}
