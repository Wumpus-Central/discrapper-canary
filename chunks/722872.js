var t = {
    linear: function (n, t, e, a) {
        return ((e - t) * n) / a + t;
    },
    easeInQuad: function (n, t, e, a) {
        return (e - t) * (n /= a) * n + t;
    },
    easeOutQuad: function (n, t, e, a) {
        return -(e - t) * (n /= a) * (n - 2) + t;
    },
    easeInOutQuad: function (n, t, e, a) {
        var u = e - t;
        return (n /= a / 2) < 1 ? (u / 2) * n * n + t : (-u / 2) * (--n * (n - 2) - 1) + t;
    },
    easeInCubic: function (n, t, e, a) {
        return (e - t) * (n /= a) * n * n + t;
    },
    easeOutCubic: function (n, t, e, a) {
        return (e - t) * ((n = n / a - 1) * n * n + 1) + t;
    },
    easeInOutCubic: function (n, t, e, a) {
        var u = e - t;
        return (n /= a / 2) < 1 ? (u / 2) * n * n * n + t : (u / 2) * ((n -= 2) * n * n + 2) + t;
    },
    easeInQuart: function (n, t, e, a) {
        return (e - t) * (n /= a) * n * n * n + t;
    },
    easeOutQuart: function (n, t, e, a) {
        return -(e - t) * ((n = n / a - 1) * n * n * n - 1) + t;
    },
    easeInOutQuart: function (n, t, e, a) {
        var u = e - t;
        return (n /= a / 2) < 1 ? (u / 2) * n * n * n * n + t : (-u / 2) * ((n -= 2) * n * n * n - 2) + t;
    },
    easeInQuint: function (n, t, e, a) {
        return (e - t) * (n /= a) * n * n * n * n + t;
    },
    easeOutQuint: function (n, t, e, a) {
        return (e - t) * ((n = n / a - 1) * n * n * n * n + 1) + t;
    },
    easeInOutQuint: function (n, t, e, a) {
        var u = e - t;
        return (n /= a / 2) < 1 ? (u / 2) * n * n * n * n * n + t : (u / 2) * ((n -= 2) * n * n * n * n + 2) + t;
    },
    easeInSine: function (n, t, e, a) {
        var u = e - t;
        return -u * Math.cos((n / a) * (Math.PI / 2)) + u + t;
    },
    easeOutSine: function (n, t, e, a) {
        return (e - t) * Math.sin((n / a) * (Math.PI / 2)) + t;
    },
    easeInOutSine: function (n, t, e, a) {
        return (-(e - t) / 2) * (Math.cos((Math.PI * n) / a) - 1) + t;
    },
    easeInExpo: function (n, t, e, a) {
        return 0 == n ? t : (e - t) * Math.pow(2, 10 * (n / a - 1)) + t;
    },
    easeOutExpo: function (n, t, e, a) {
        var u = e - t;
        return n == a ? t + u : u * (-Math.pow(2, (-10 * n) / a) + 1) + t;
    },
    easeInOutExpo: function (n, t, e, a) {
        var u = e - t;
        return 0 === n
            ? t
            : n === a
              ? t + u
              : (n /= a / 2) < 1
                ? (u / 2) * Math.pow(2, 10 * (n - 1)) + t
                : (u / 2) * (-Math.pow(2, -10 * --n) + 2) + t;
    },
    easeInCirc: function (n, t, e, a) {
        return -(e - t) * (Math.sqrt(1 - (n /= a) * n) - 1) + t;
    },
    easeOutCirc: function (n, t, e, a) {
        return (e - t) * Math.sqrt(1 - (n = n / a - 1) * n) + t;
    },
    easeInOutCirc: function (n, t, e, a) {
        var u = e - t;
        return (n /= a / 2) < 1
            ? (-u / 2) * (Math.sqrt(1 - n * n) - 1) + t
            : (u / 2) * (Math.sqrt(1 - (n -= 2) * n) + 1) + t;
    },
    easeInElastic: function (n, t, e, a) {
        var u,
            r,
            i,
            s = e - t;
        return ((i = 1.70158), (r = 0), (u = s), 0 === n)
            ? t
            : 1 == (n /= a)
              ? t + s
              : (r || (r = 0.3 * a),
                u < Math.abs(s) ? ((u = s), (i = r / 4)) : (i = (r / (2 * Math.PI)) * Math.asin(s / u)),
                -(u * Math.pow(2, 10 * (n -= 1)) * Math.sin((2 * Math.PI * (n * a - i)) / r)) + t);
    },
    easeOutElastic: function (n, t, e, a) {
        var u,
            r,
            i,
            s = e - t;
        return ((i = 1.70158), (r = 0), (u = s), 0 === n)
            ? t
            : 1 == (n /= a)
              ? t + s
              : (r || (r = 0.3 * a),
                u < Math.abs(s) ? ((u = s), (i = r / 4)) : (i = (r / (2 * Math.PI)) * Math.asin(s / u)),
                u * Math.pow(2, -10 * n) * Math.sin((2 * Math.PI * (n * a - i)) / r) + s + t);
    },
    easeInOutElastic: function (n, t, e, a) {
        var u,
            r,
            i,
            s = e - t;
        return ((i = 1.70158), (r = 0), (u = s), 0 === n)
            ? t
            : 2 == (n /= a / 2)
              ? t + s
              : (r || (r = 0.3 * 1.5 * a),
                  u < Math.abs(s) ? ((u = s), (i = r / 4)) : (i = (r / (2 * Math.PI)) * Math.asin(s / u)),
                  n < 1)
                ? -0.5 * (u * Math.pow(2, 10 * (n -= 1)) * Math.sin((2 * Math.PI * (n * a - i)) / r)) + t
                : u * Math.pow(2, -10 * (n -= 1)) * Math.sin((2 * Math.PI * (n * a - i)) / r) * 0.5 + s + t;
    },
    easeInBack: function (n, t, e, a, u) {
        return (void 0 === u && (u = 1.70158), (e - t) * (n /= a) * n * ((u + 1) * n - u) + t);
    },
    easeOutBack: function (n, t, e, a, u) {
        return (void 0 === u && (u = 1.70158), (e - t) * ((n = n / a - 1) * n * ((u + 1) * n + u) + 1) + t);
    },
    easeInOutBack: function (n, t, e, a, u) {
        var r = e - t;
        return (void 0 === u && (u = 1.70158), (n /= a / 2) < 1)
            ? (r / 2) * (n * n * (((u *= 1.525) + 1) * n - u)) + t
            : (r / 2) * ((n -= 2) * n * (((u *= 1.525) + 1) * n + u) + 2) + t;
    },
    easeInBounce: function (n, e, a, u) {
        var r,
            i = a - e;
        return ((r = t.easeOutBounce(u - n, 0, i, u)), i - r + e);
    },
    easeOutBounce: function (n, t, e, a) {
        var u = e - t;
        return (n /= a) < 1 / 2.75
            ? 7.5625 * n * n * u + t
            : n < 2 / 2.75
              ? u * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + t
              : n < 2.5 / 2.75
                ? u * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + t
                : u * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + t;
    },
    easeInOutBounce: function (n, e, a, u) {
        var r = a - e;
        return n < u / 2
            ? 0.5 * t.easeInBounce(2 * n, 0, r, u) + e
            : 0.5 * t.easeOutBounce(2 * n - u, 0, r, u) + 0.5 * r + e;
    },
};
n.exports = t;
