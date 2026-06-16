"use strict";
function t(e) {
    return (e - 30) * 3.62 + 194;
}
e.exports = {
    fromOrigamiTensionAndFriction: function (e, n) {
        return { tension: t(e), friction: (n - 8) * 3 + 25 };
    },
    fromBouncinessAndSpeed: function (e, n) {
        var i,
            r,
            s,
            a = (e / 1.7 - 0) / 20,
            o = 0.5 + ((n / 1.7 - 0) / 20) * 199.5,
            l =
                ((i = a = 0 + 0.8 * a),
                (r = (function (e) {
                    return e <= 18
                        ? 7e-4 * Math.pow(e, 3) - 0.031 * Math.pow(e, 2) + 0.64 * e + 1.28
                        : e > 18 && e <= 44
                          ? 44e-6 * Math.pow(e, 3) - 0.006 * Math.pow(e, 2) + 0.36 * e + 2
                          : 45e-8 * Math.pow(e, 3) - 332e-6 * Math.pow(e, 2) + 0.1078 * e + 5.84;
                })(o)),
                0.01 * (s = 2 * i - i * i) + (1 - s) * r);
        return { tension: t(o), friction: (l - 8) * 3 + 25 };
    },
};
