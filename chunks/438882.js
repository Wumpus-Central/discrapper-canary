n.d(e, { D: () => r }), n(411104);
function r(t, e, n) {
    if (t.byteLength < e) throw Error('data.byteLength must be greater than or equal to desiredLength');
    if (e % n != 0) throw Error('desiredLength must be a multiple of groupSize');
    if (n > 8) throw Error('groupSize must be less than or equal to '.concat(8));
    let r = BigInt(10 ** n),
        i = '';
    for (let a = 0; a < e; a += n) {
        let e = BigInt(0);
        for (let r = n; r > 0; --r) e = (e << 8n) | BigInt(t[a + (n - r)]);
        (e %= r), (i += e.toString().padStart(n, '0'));
    }
    return i;
}
