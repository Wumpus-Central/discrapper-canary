"use strict";
let n;
e.d(r, { A: () => u });
let o = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    i = new Uint8Array(16),
    f = [];
for (let t = 0; t < 256; ++t) f.push((t + 256).toString(16).slice(1));
let u = function (t, r, e) {
    if (o && !r && !t) return o();
    let u =
        (t = t || {}).random ||
        (
            t.rng ||
            function () {
                if (!n && !(n = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                    throw Error(
                        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
                    );
                return n(i);
            }
        )();
    if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), r)) {
        e = e || 0;
        for (let t = 0; t < 16; ++t) r[e + t] = u[t];
        return r;
    }
    return (function (t, r = 0) {
        return (
            f[t[r + 0]] +
            f[t[r + 1]] +
            f[t[r + 2]] +
            f[t[r + 3]] +
            "-" +
            f[t[r + 4]] +
            f[t[r + 5]] +
            "-" +
            f[t[r + 6]] +
            f[t[r + 7]] +
            "-" +
            f[t[r + 8]] +
            f[t[r + 9]] +
            "-" +
            f[t[r + 10]] +
            f[t[r + 11]] +
            f[t[r + 12]] +
            f[t[r + 13]] +
            f[t[r + 14]] +
            f[t[r + 15]]
        );
    })(u);
};
