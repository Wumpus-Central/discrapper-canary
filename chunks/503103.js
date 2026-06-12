"use strict";
let i;
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.runtimeHashMessageKey = function (e) {
        let t = (function (e) {
            e = BigInt(e);
            let t = [],
                n = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8);
            for (let i = 0; i < n; i++) t.unshift(Number((e >> BigInt(8 * i)) & BigInt(255)));
            let i = new Uint8Array(t);
            return a ? i : i.reverse();
        })((0, r.hash)(e, 0));
        return [
            s[t[0] >> 2],
            s[((3 & t[0]) << 4) | (t[1] >> 4)],
            s[((15 & t[1]) << 2) | (t[2] >> 6)],
            s[63 & t[2]],
            s[t[3] >> 2],
            s[((3 & t[3]) << 4) | (t[4] >> 4)],
        ].join("");
    });
let r = n(618830),
    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    a = !((new Uint32Array((i = new Uint8Array(4)).buffer)[0] = 1) & i[0]);
