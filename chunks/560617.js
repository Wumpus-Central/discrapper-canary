"use strict";
let n;
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.runtimeHashMessageKey = function (e) {
        let t = (function (e) {
            e = BigInt(e);
            let t = [],
                r = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8);
            for (let n = 0; n < r; n++) t.unshift(Number((e >> BigInt(8 * n)) & BigInt(255)));
            let n = new Uint8Array(t);
            return a ? n : n.reverse();
        })((0, i.hash)(e, 0));
        return [
            o[t[0] >> 2],
            o[((3 & t[0]) << 4) | (t[1] >> 4)],
            o[((15 & t[1]) << 2) | (t[2] >> 6)],
            o[63 & t[2]],
            o[t[3] >> 2],
            o[((3 & t[3]) << 4) | (t[4] >> 4)],
        ].join("");
    });
let i = r(618830),
    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    a = !((new Uint32Array((n = new Uint8Array(4)).buffer)[0] = 1) & n[0]);
