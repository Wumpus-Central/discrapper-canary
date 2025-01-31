var t = {
    linear: function (e, t, n, i) {
        return ((n - t) * e) / i + t;
    },
    easeInQuad: function (e, t, n, i) {
        return (n - t) * (e /= i) * e + t;
    },
    easeOutQuad: function (e, t, n, i) {
        return -(n - t) * (e /= i) * (e - 2) + t;
    },
    easeInOutQuad: function (e, t, n, i) {
        var r = n - t;
        return (e /= i / 2) < 1 ? (r / 2) * e * e + t : (-r / 2) * (--e * (e - 2) - 1) + t;
    },
    easeInCubic: function (e, t, n, i) {
        return (n - t) * (e /= i) * e * e + t;
    },
    easeOutCubic: function (e, t, n, i) {
        return (n - t) * ((e = e / i - 1) * e * e + 1) + t;
    },
    easeInOutCubic: function (e, t, n, i) {
        var r = n - t;
        return (e /= i / 2) < 1 ? (r / 2) * e * e * e + t : (r / 2) * ((e -= 2) * e * e + 2) + t;
    },
    easeInQuart: function (e, t, n, i) {
        return (n - t) * (e /= i) * e * e * e + t;
    },
    easeOutQuart: function (e, t, n, i) {
        return -(n - t) * ((e = e / i - 1) * e * e * e - 1) + t;
    },
    easeInOutQuart: function (e, t, n, i) {
        var r = n - t;
        return (e /= i / 2) < 1 ? (r / 2) * e * e * e * e + t : (-r / 2) * ((e -= 2) * e * e * e - 2) + t;
    },
    easeInQuint: function (e, t, n, i) {
        return (n - t) * (e /= i) * e * e * e * e + t;
    },
    easeOutQuint: function (e, t, n, i) {
        return (n - t) * ((e = e / i - 1) * e * e * e * e + 1) + t;
    },
    easeInOutQuint: function (e, t, n, i) {
        var r = n - t;
        return (e /= i / 2) < 1 ? (r / 2) * e * e * e * e * e + t : (r / 2) * ((e -= 2) * e * e * e * e + 2) + t;
    },
    easeInSine: function (e, t, n, i) {
        var r = n - t;
        return -r * Math.cos((e / i) * (Math.PI / 2)) + r + t;
    },
    easeOutSine: function (e, t, n, i) {
        return (n - t) * Math.sin((e / i) * (Math.PI / 2)) + t;
    },
    easeInOutSine: function (e, t, n, i) {
        return (-(n - t) / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
    },
    easeInExpo: function (e, t, n, i) {
        var r = n - t;
        return 0 == e ? t : r * Math.pow(2, 10 * (e / i - 1)) + t;
    },
    easeOutExpo: function (e, t, n, i) {
        var r = n - t;
        return e == i ? t + r : r * (-Math.pow(2, (-10 * e) / i) + 1) + t;
    },
    easeInOutExpo: function (e, t, n, i) {
        var r = n - t;
        return 0 === e ? t : e === i ? t + r : (e /= i / 2) < 1 ? (r / 2) * Math.pow(2, 10 * (e - 1)) + t : (r / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
    },
    easeInCirc: function (e, t, n, i) {
        return -(n - t) * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
    },
    easeOutCirc: function (e, t, n, i) {
        return (n - t) * Math.sqrt(1 - (e = e / i - 1) * e) + t;
    },
    easeInOutCirc: function (e, t, n, i) {
        var r = n - t;
        return (e /= i / 2) < 1 ? (-r / 2) * (Math.sqrt(1 - e * e) - 1) + t : (r / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
    },
    easeInElastic: function (e, t, n, i) {
        var r,
            a,
            s,
            o = n - t;
        return ((s = 1.70158), (a = 0), (r = o), 0 === e) ? t : 1 == (e /= i) ? t + o : (a || (a = 0.3 * i), r < Math.abs(o) ? ((r = o), (s = a / 4)) : (s = (a / (2 * Math.PI)) * Math.asin(o / r)), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * i - s)) / a)) + t);
    },
    easeOutElastic: function (e, t, n, i) {
        var r,
            a,
            s,
            o = n - t;
        return ((s = 1.70158), (a = 0), (r = o), 0 === e) ? t : 1 == (e /= i) ? t + o : (a || (a = 0.3 * i), r < Math.abs(o) ? ((r = o), (s = a / 4)) : (s = (a / (2 * Math.PI)) * Math.asin(o / r)), r * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e * i - s)) / a) + o + t);
    },
    easeInOutElastic: function (e, t, n, i) {
        var r,
            a,
            s,
            o = n - t;
        return ((s = 1.70158), (a = 0), (r = o), 0 === e) ? t : 2 == (e /= i / 2) ? t + o : (a || (a = 0.3 * 1.5 * i), r < Math.abs(o) ? ((r = o), (s = a / 4)) : (s = (a / (2 * Math.PI)) * Math.asin(o / r)), e < 1) ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * i - s)) / a)) + t : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * i - s)) / a) * 0.5 + o + t;
    },
    easeInBack: function (e, t, n, i, r) {
        return void 0 === r && (r = 1.70158), (n - t) * (e /= i) * e * ((r + 1) * e - r) + t;
    },
    easeOutBack: function (e, t, n, i, r) {
        return void 0 === r && (r = 1.70158), (n - t) * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t;
    },
    easeInOutBack: function (e, t, n, i, r) {
        var a = n - t;
        return (void 0 === r && (r = 1.70158), (e /= i / 2) < 1) ? (a / 2) * (e * e * (((r *= 1.525) + 1) * e - r)) + t : (a / 2) * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t;
    },
    easeInBounce: function (e, n, i, r) {
        var a,
            s = i - n;
        return (a = t.easeOutBounce(r - e, 0, s, r)), s - a + n;
    },
    easeOutBounce: function (e, t, n, i) {
        var r = n - t;
        return (e /= i) < 1 / 2.75 ? 7.5625 * e * e * r + t : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
    },
    easeInOutBounce: function (e, n, i, r) {
        var a,
            s = i - n;
        return e < r / 2 ? 0.5 * (a = t.easeInBounce(2 * e, 0, s, r)) + n : 0.5 * (a = t.easeOutBounce(2 * e - r, 0, s, r)) + 0.5 * s + n;
    }
};
e.exports = t;
