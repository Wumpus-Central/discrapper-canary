"use strict";
var t = {
    linear: function (e, t, n, r) {
        return ((n - t) * e) / r + t;
    },
    easeInQuad: function (e, t, n, r) {
        return (n - t) * (e /= r) * e + t;
    },
    easeOutQuad: function (e, t, n, r) {
        return -(n - t) * (e /= r) * (e - 2) + t;
    },
    easeInOutQuad: function (e, t, n, r) {
        var i = n - t;
        return (e /= r / 2) < 1 ? (i / 2) * e * e + t : (-i / 2) * (--e * (e - 2) - 1) + t;
    },
    easeInCubic: function (e, t, n, r) {
        return (n - t) * (e /= r) * e * e + t;
    },
    easeOutCubic: function (e, t, n, r) {
        return (n - t) * ((e = e / r - 1) * e * e + 1) + t;
    },
    easeInOutCubic: function (e, t, n, r) {
        var i = n - t;
        return (e /= r / 2) < 1 ? (i / 2) * e * e * e + t : (i / 2) * ((e -= 2) * e * e + 2) + t;
    },
    easeInQuart: function (e, t, n, r) {
        return (n - t) * (e /= r) * e * e * e + t;
    },
    easeOutQuart: function (e, t, n, r) {
        return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t;
    },
    easeInOutQuart: function (e, t, n, r) {
        var i = n - t;
        return (e /= r / 2) < 1 ? (i / 2) * e * e * e * e + t : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
    },
    easeInQuint: function (e, t, n, r) {
        return (n - t) * (e /= r) * e * e * e * e + t;
    },
    easeOutQuint: function (e, t, n, r) {
        return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t;
    },
    easeInOutQuint: function (e, t, n, r) {
        var i = n - t;
        return (e /= r / 2) < 1 ? (i / 2) * e * e * e * e * e + t : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
    },
    easeInSine: function (e, t, n, r) {
        var i = n - t;
        return -i * Math.cos((e / r) * (Math.PI / 2)) + i + t;
    },
    easeOutSine: function (e, t, n, r) {
        return (n - t) * Math.sin((e / r) * (Math.PI / 2)) + t;
    },
    easeInOutSine: function (e, t, n, r) {
        return (-(n - t) / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
    },
    easeInExpo: function (e, t, n, r) {
        return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t;
    },
    easeOutExpo: function (e, t, n, r) {
        var i = n - t;
        return e == r ? t + i : i * (-Math.pow(2, (-10 * e) / r) + 1) + t;
    },
    easeInOutExpo: function (e, t, n, r) {
        var i = n - t;
        return 0 === e
            ? t
            : e === r
              ? t + i
              : (e /= r / 2) < 1
                ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
    },
    easeInCirc: function (e, t, n, r) {
        return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
    },
    easeOutCirc: function (e, t, n, r) {
        return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t;
    },
    easeInOutCirc: function (e, t, n, r) {
        var i = n - t;
        return (e /= r / 2) < 1
            ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
            : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
    },
    easeInElastic: function (e, t, n, r) {
        var i,
            a,
            u,
            o = n - t;
        return ((u = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + o
              : (a || (a = 0.3 * r),
                i < Math.abs(o) ? ((i = o), (u = a / 4)) : (u = (a / (2 * Math.PI)) * Math.asin(o / i)),
                -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * r - u)) / a)) + t);
    },
    easeOutElastic: function (e, t, n, r) {
        var i,
            a,
            u,
            o = n - t;
        return ((u = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + o
              : (a || (a = 0.3 * r),
                i < Math.abs(o) ? ((i = o), (u = a / 4)) : (u = (a / (2 * Math.PI)) * Math.asin(o / i)),
                i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e * r - u)) / a) + o + t);
    },
    easeInOutElastic: function (e, t, n, r) {
        var i,
            a,
            u,
            o = n - t;
        return ((u = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 2 == (e /= r / 2)
              ? t + o
              : (a || (a = 0.3 * 1.5 * r),
                  i < Math.abs(o) ? ((i = o), (u = a / 4)) : (u = (a / (2 * Math.PI)) * Math.asin(o / i)),
                  e < 1)
                ? -0.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * r - u)) / a)) + t
                : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * r - u)) / a) * 0.5 + o + t;
    },
    easeInBack: function (e, t, n, r, i) {
        return void 0 === i && (i = 1.70158), (n - t) * (e /= r) * e * ((i + 1) * e - i) + t;
    },
    easeOutBack: function (e, t, n, r, i) {
        return void 0 === i && (i = 1.70158), (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t;
    },
    easeInOutBack: function (e, t, n, r, i) {
        var a = n - t;
        return (void 0 === i && (i = 1.70158), (e /= r / 2) < 1)
            ? (a / 2) * (e * e * (((i *= 1.525) + 1) * e - i)) + t
            : (a / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t;
    },
    easeInBounce: function (e, n, r, i) {
        var a,
            u = r - n;
        return (a = t.easeOutBounce(i - e, 0, u, i)), u - a + n;
    },
    easeOutBounce: function (e, t, n, r) {
        var i = n - t;
        return (e /= r) < 1 / 2.75
            ? 7.5625 * e * e * i + t
            : e < 2 / 2.75
              ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
              : e < 2.5 / 2.75
                ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
                : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
    },
    easeInOutBounce: function (e, n, r, i) {
        var a = r - n;
        return e < i / 2
            ? 0.5 * t.easeInBounce(2 * e, 0, a, i) + n
            : 0.5 * t.easeOutBounce(2 * e - i, 0, a, i) + 0.5 * a + n;
    },
};
e.exports = t;
