n.d(t, { D: () => r }), n(411104);
function r(e, t, n) {
    if (e.byteLength < t) throw Error('data.byteLength must be greater than or equal to desiredLength');
    if (t % n != 0) throw Error('desiredLength must be a multiple of groupSize');
    if (n > 8) throw Error('groupSize must be less than or equal to '.concat(8));
    let r = BigInt(10 ** n),
        i = '';
    for (let a = 0; a < t; a += n) {
        let t = BigInt(0);
        for (let r = n; r > 0; --r) t = (t << 8n) | BigInt(e[a + (n - r)]);
        (t %= r), (i += t.toString().padStart(n, '0'));
    }
    return i;
}
