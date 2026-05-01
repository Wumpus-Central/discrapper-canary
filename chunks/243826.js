n.d(t, { D: () => r });
function r(e, t, n) {
    if (e.byteLength < t) throw Error("data.byteLength must be greater than or equal to desiredLength");
    if (t % n != 0) throw Error("desiredLength must be a multiple of groupSize");
    if (n > 8) throw Error("groupSize must be less than or equal to 8");
    let r = BigInt(10 ** n),
        i = "";
    for (let a = 0; a < t; a += n) {
        let t = BigInt(0);
        for (let r = n; r > 0; --r) {
            let i = e[a + (n - r)];
            if (void 0 === i) throw Error("Out of bounds access from data array");
            t = (t << 8n) | BigInt(i);
        }
        (t %= r), (i += t.toString().padStart(n, "0"));
    }
    return i;
}
