function n(e) {
    return (e - 30) * 3.62 + 194;
}
function r(e) {
    return (e - 8) * 3 + 25;
}
function i(e, i) {
    return {
        tension: n(e),
        friction: r(i)
    };
}
function a(e, i) {
    function a(e, n, r) {
        return (e - n) / (r - n);
    }
    function o(e, n, r) {
        return n + e * (r - n);
    }
    function s(e, n, r) {
        return e * r + (1 - e) * n;
    }
    function l(e, n, r) {
        return s(2 * e - e * e, n, r);
    }
    function u(e) {
        return 0.0007 * Math.pow(e, 3) - 0.031 * Math.pow(e, 2) + 0.64 * e + 1.28;
    }
    function c(e) {
        return 0.000044 * Math.pow(e, 3) - 0.006 * Math.pow(e, 2) + 0.36 * e + 2;
    }
    function d(e) {
        return 4.5e-7 * Math.pow(e, 3) - 0.000332 * Math.pow(e, 2) + 0.1078 * e + 5.84;
    }
    function f(e) {
        return e <= 18 ? u(e) : e > 18 && e <= 44 ? c(e) : d(e);
    }
    var p = a(e / 1.7, 0, 20);
    p = o(p, 0, 0.8);
    var h = o(a(i / 1.7, 0, 20), 0.5, 200),
        _ = l(p, f(h), 0.01);
    return {
        tension: n(h),
        friction: r(_)
    };
}
e.exports = {
    fromOrigamiTensionAndFriction: i,
    fromBouncinessAndSpeed: a
};
