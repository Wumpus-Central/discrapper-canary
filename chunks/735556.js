"use strict";
function t(e) {
    return (e - 30) * 3.62 + 194;
}
e.exports = {
    fromOrigamiTensionAndFriction: function (e, r) {
        return { tension: t(e), friction: (r - 8) * 3 + 25 };
    },
    fromBouncinessAndSpeed: function (e, r) {
        var n,
            i,
            o,
            a = (e / 1.7 - 0) / 20,
            s = 0.5 + ((r / 1.7 - 0) / 20) * 199.5,
            l =
                ((n = a = 0 + 0.8 * a),
                (i = (function (e) {
                    return e <= 18
                        ? 7e-4 * Math.pow(e, 3) - 0.031 * Math.pow(e, 2) + 0.64 * e + 1.28
                        : e > 18 && e <= 44
                          ? 44e-6 * Math.pow(e, 3) - 0.006 * Math.pow(e, 2) + 0.36 * e + 2
                          : 45e-8 * Math.pow(e, 3) - 332e-6 * Math.pow(e, 2) + 0.1078 * e + 5.84;
                })(s)),
                0.01 * (o = 2 * n - n * n) + (1 - o) * i);
        return { tension: t(s), friction: (l - 8) * 3 + 25 };
    },
};
