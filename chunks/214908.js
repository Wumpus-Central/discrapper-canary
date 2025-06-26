n.d(t, { x: () => r }), n(415506), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
async function r(e, t, n) {
    if (0 !== e) throw Error('unsupported fingerprint format version');
    if (0 === t.byteLength) throw Error('zero-length key');
    if (0 === n.length) throw Error('zero-length user ID');
    let r = BigInt(n);
    if (r < 0n || r >= 2n ** 64n) throw Error('user ID out of range');
    let i = new Uint8Array(2 + t.byteLength + 8);
    i.set(t, 2);
    let a = new DataView(i.buffer);
    return a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, r), i;
}
