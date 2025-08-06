(n.d(t, { D: () => i }), n(415506));
let r = 8;
function i(e, t, n) {
    if (e.byteLength < t) throw Error('data.byteLength must be greater than or equal to desiredLength');
    if (t % n != 0) throw Error('desiredLength must be a multiple of groupSize');
    if (n > r) throw Error('groupSize must be less than or equal to '.concat(r));
    let i = BigInt(10 ** n),
        o = '';
    for (let r = 0; r < t; r += n) {
        let t = BigInt(0);
        for (let i = n; i > 0; --i) {
            let o = e[r + (n - i)];
            if (void 0 === o) throw Error('Out of bounds access from data array');
            t = (t << 8n) | BigInt(o);
        }
        ((t %= i), (o += t.toString().padStart(n, '0')));
    }
    return o;
}
