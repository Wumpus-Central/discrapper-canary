"use strict";
n.d(t, {
    IH: () => l,
    IS: () => s,
    P2: () => a,
    RN: () => c,
    bQ: () => o,
    gB: () => d,
    iz: () => f,
    qB: () => _,
    ym: () => u,
});
var r = n(575223),
    i = n(438767);
function s(e, t) {
    return e ? { value: t(e.value), rest: e.rest } : e;
}
function a(e, t) {
    var n = t.match(e);
    return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
}
function o(e, t) {
    var n = t.match(e);
    if (!n) return null;
    if ("Z" === n[0]) return { value: 0, rest: t.slice(1) };
    var i = "+" === n[1] ? 1 : -1,
        s = n[2] ? parseInt(n[2], 10) : 0,
        a = n[3] ? parseInt(n[3], 10) : 0,
        o = n[5] ? parseInt(n[5], 10) : 0;
    return { value: i * (s * r.s0 + a * r.Cg + o * r._m), rest: t.slice(n[0].length) };
}
function l(e) {
    return a(i.h.anyDigitsSigned, e);
}
function u(e, t) {
    switch (e) {
        case 1:
            return a(i.h.singleDigit, t);
        case 2:
            return a(i.h.twoDigits, t);
        case 3:
            return a(i.h.threeDigits, t);
        case 4:
            return a(i.h.fourDigits, t);
        default:
            return a(RegExp("^\\d{1," + e + "}"), t);
    }
}
function d(e, t) {
    switch (e) {
        case 1:
            return a(i.h.singleDigitSigned, t);
        case 2:
            return a(i.h.twoDigitsSigned, t);
        case 3:
            return a(i.h.threeDigitsSigned, t);
        case 4:
            return a(i.h.fourDigitsSigned, t);
        default:
            return a(RegExp("^-?\\d{1," + e + "}"), t);
    }
}
function c(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        default:
            return 0;
    }
}
function _(e, t) {
    var n,
        r = t > 0,
        i = r ? t : 1 - t;
    if (i <= 50) n = e || 100;
    else {
        var s = i + 50;
        n = e + 100 * Math.floor(s / 100) - 100 * (e >= s % 100);
    }
    return r ? n : 1 - n;
}
function f(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
