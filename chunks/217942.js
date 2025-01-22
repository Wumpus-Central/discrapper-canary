var n = {
    linear: function (e, n, r, i) {
        return ((r - n) * e) / i + n;
    },
    easeInQuad: function (e, n, r, i) {
        return (r - n) * (e /= i) * e + n;
    },
    easeOutQuad: function (e, n, r, i) {
        return -(r - n) * (e /= i) * (e - 2) + n;
    },
    easeInOutQuad: function (e, n, r, i) {
        var a = r - n;
        return (e /= i / 2) < 1 ? (a / 2) * e * e + n : (-a / 2) * (--e * (e - 2) - 1) + n;
    },
    easeInCubic: function (e, n, r, i) {
        return (r - n) * (e /= i) * e * e + n;
    },
    easeOutCubic: function (e, n, r, i) {
        return (r - n) * ((e = e / i - 1) * e * e + 1) + n;
    },
    easeInOutCubic: function (e, n, r, i) {
        var a = r - n;
        return (e /= i / 2) < 1 ? (a / 2) * e * e * e + n : (a / 2) * ((e -= 2) * e * e + 2) + n;
    },
    easeInQuart: function (e, n, r, i) {
        return (r - n) * (e /= i) * e * e * e + n;
    },
    easeOutQuart: function (e, n, r, i) {
        return -(r - n) * ((e = e / i - 1) * e * e * e - 1) + n;
    },
    easeInOutQuart: function (e, n, r, i) {
        var a = r - n;
        return (e /= i / 2) < 1 ? (a / 2) * e * e * e * e + n : (-a / 2) * ((e -= 2) * e * e * e - 2) + n;
    },
    easeInQuint: function (e, n, r, i) {
        return (r - n) * (e /= i) * e * e * e * e + n;
    },
    easeOutQuint: function (e, n, r, i) {
        return (r - n) * ((e = e / i - 1) * e * e * e * e + 1) + n;
    },
    easeInOutQuint: function (e, n, r, i) {
        var a = r - n;
        return (e /= i / 2) < 1 ? (a / 2) * e * e * e * e * e + n : (a / 2) * ((e -= 2) * e * e * e * e + 2) + n;
    },
    easeInSine: function (e, n, r, i) {
        var a = r - n;
        return -a * Math.cos((e / i) * (Math.PI / 2)) + a + n;
    },
    easeOutSine: function (e, n, r, i) {
        return (r - n) * Math.sin((e / i) * (Math.PI / 2)) + n;
    },
    easeInOutSine: function (e, n, r, i) {
        return (-(r - n) / 2) * (Math.cos((Math.PI * e) / i) - 1) + n;
    },
    easeInExpo: function (e, n, r, i) {
        var a = r - n;
        return 0 == e ? n : a * Math.pow(2, 10 * (e / i - 1)) + n;
    },
    easeOutExpo: function (e, n, r, i) {
        var a = r - n;
        return e == i ? n + a : a * (-Math.pow(2, (-10 * e) / i) + 1) + n;
    },
    easeInOutExpo: function (e, n, r, i) {
        var a = r - n;
        return 0 === e ? n : e === i ? n + a : (e /= i / 2) < 1 ? (a / 2) * Math.pow(2, 10 * (e - 1)) + n : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + n;
    },
    easeInCirc: function (e, n, r, i) {
        return -(r - n) * (Math.sqrt(1 - (e /= i) * e) - 1) + n;
    },
    easeOutCirc: function (e, n, r, i) {
        return (r - n) * Math.sqrt(1 - (e = e / i - 1) * e) + n;
    },
    easeInOutCirc: function (e, n, r, i) {
        var a = r - n;
        return (e /= i / 2) < 1 ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + n : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
    },
    easeInElastic: function (e, n, r, i) {
        var a,
            o,
            s,
            l = r - n;
        return ((s = 1.70158), (o = 0), (a = l), 0 === e) ? n : 1 == (e /= i) ? n + l : (!o && (o = 0.3 * i), a < Math.abs(l) ? ((a = l), (s = o / 4)) : (s = (o / (2 * Math.PI)) * Math.asin(l / a)), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * i - s)) / o)) + n);
    },
    easeOutElastic: function (e, n, r, i) {
        var a,
            o,
            s,
            l = r - n;
        return ((s = 1.70158), (o = 0), (a = l), 0 === e) ? n : 1 == (e /= i) ? n + l : (!o && (o = 0.3 * i), a < Math.abs(l) ? ((a = l), (s = o / 4)) : (s = (o / (2 * Math.PI)) * Math.asin(l / a)), a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e * i - s)) / o) + l + n);
    },
    easeInOutElastic: function (e, n, r, i) {
        var a,
            o,
            s,
            l = r - n;
        return ((s = 1.70158), (o = 0), (a = l), 0 === e) ? n : 2 == (e /= i / 2) ? n + l : (!o && (o = 0.3 * 1.5 * i), a < Math.abs(l) ? ((a = l), (s = o / 4)) : (s = (o / (2 * Math.PI)) * Math.asin(l / a)), e < 1) ? -0.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * i - s)) / o)) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * i - s)) / o) * 0.5 + l + n;
    },
    easeInBack: function (e, n, r, i, a) {
        return void 0 === a && (a = 1.70158), (r - n) * (e /= i) * e * ((a + 1) * e - a) + n;
    },
    easeOutBack: function (e, n, r, i, a) {
        return void 0 === a && (a = 1.70158), (r - n) * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + n;
    },
    easeInOutBack: function (e, n, r, i, a) {
        var o = r - n;
        return (void 0 === a && (a = 1.70158), (e /= i / 2) < 1) ? (o / 2) * (e * e * (((a *= 1.525) + 1) * e - a)) + n : (o / 2) * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + n;
    },
    easeInBounce: function (e, r, i, a) {
        var o,
            s = i - r;
        return (o = n.easeOutBounce(a - e, 0, s, a)), s - o + r;
    },
    easeOutBounce: function (e, n, r, i) {
        var a = r - n;
        if ((e /= i) < 1 / 2.75) return 7.5625 * e * e * a + n;
        if (e < 2 / 2.75) return a * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n;
        if (e < 2.5 / 2.75) return a * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n;
        else return a * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
    },
    easeInOutBounce: function (e, r, i, a) {
        var o,
            s = i - r;
        return e < a / 2 ? 0.5 * (o = n.easeInBounce(2 * e, 0, s, a)) + r : 0.5 * (o = n.easeOutBounce(2 * e - a, 0, s, a)) + 0.5 * s + r;
    }
};
e.exports = n;
