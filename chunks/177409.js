"use strict";
function t(e) {
    return (e - 30) * 3.62 + 194;
}
function n(e) {
    return (e - 8) * 3 + 25;
}
e.exports = {
    fromOrigamiTensionAndFriction: function (e, r) {
        return { tension: t(e), friction: n(r) };
    },
    fromBouncinessAndSpeed: function (e, r) {
        function i(e, t, n) {
            return (e - t) / (n - t);
        }
        function a(e, t, n) {
            return t + e * (n - t);
        }
        function s(e, t, n) {
            return e * n + (1 - e) * t;
        }
        function o(e, t, n) {
            return s(2 * e - e * e, t, n);
        }
        function l(e) {
            return 7e-4 * Math.pow(e, 3) - 0.031 * Math.pow(e, 2) + 0.64 * e + 1.28;
        }
        function u(e) {
            return 44e-6 * Math.pow(e, 3) - 0.006 * Math.pow(e, 2) + 0.36 * e + 2;
        }
        function c(e) {
            return 45e-8 * Math.pow(e, 3) - 332e-6 * Math.pow(e, 2) + 0.1078 * e + 5.84;
        }
        function d(e) {
            return e <= 18 ? l(e) : e > 18 && e <= 44 ? u(e) : c(e);
        }
        var _ = i(e / 1.7, 0, 20);
        _ = a(_, 0, 0.8);
        var f = a(i(r / 1.7, 0, 20), 0.5, 200),
            p = o(_, d(f), 0.01);
        return { tension: t(f), friction: n(p) };
    },
};
