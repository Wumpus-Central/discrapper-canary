n.d(t, {
    D: () => i,
}),
    n(65821);
let r = 8;

function i(e, t, n) {
    if (e.byteLength < t) throw Error("data.byteLength must be greater than or equal to desiredLength");
    if (t % n != 0) throw Error("desiredLength must be a multiple of groupSize");
    if (n > r) throw Error("groupSize must be less than or equal to ".concat(r));
    let i = BigInt(10 ** n),
        a = "";
    for (let r = 0; r < t; r += n) {
        let t = BigInt(0);
        for (let i = n; i > 0; --i) {
            let a = e[r + (n - i)];
            if (void 0 === a) throw Error("Out of bounds access from data array");
            t = (t << 8n) | BigInt(a);
        }
        (t %= i), (a += t.toString().padStart(n, "0"));
    }
    return a;
}
