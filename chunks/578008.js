function t(e) {
    return (e - 30) * 3.62 + 194;
}
function n(e) {
    return (e - 8) * 3 + 25;
}
function i(e, i) {
    return {
        tension: t(e),
        friction: n(i)
    };
}
function r(e, i) {
    function r(e, t, n) {
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
        return 0.0007 * Math.pow(e, 3) - 0.031 * Math.pow(e, 2) + 0.64 * e + 1.28;
    }
    function u(e) {
        return 0.000044 * Math.pow(e, 3) - 0.006 * Math.pow(e, 2) + 0.36 * e + 2;
    }
    function c(e) {
        return 4.5e-7 * Math.pow(e, 3) - 0.000332 * Math.pow(e, 2) + 0.1078 * e + 5.84;
    }
    function d(e) {
        return e <= 18 ? l(e) : e > 18 && e <= 44 ? u(e) : c(e);
    }
    var f = r(e / 1.7, 0, 20);
    f = a(f, 0, 0.8);
    var _ = a(r(i / 1.7, 0, 20), 0.5, 200),
        p = o(f, d(_), 0.01);
    return {
        tension: t(_),
        friction: n(p)
    };
}
e.exports = {
    fromOrigamiTensionAndFriction: i,
    fromBouncinessAndSpeed: r
};
