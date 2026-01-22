n.d(t, {
    IH: () => l,
    IS: () => a,
    P2: () => s,
    RN: () => d,
    bQ: () => o,
    gB: () => u,
    iz: () => p,
    qB: () => f,
    ym: () => c,
});
var r = n(575223),
    i = n(438767);

function a(e, t) {
    return e
        ? {
              value: t(e.value),
              rest: e.rest,
          }
        : e;
}

function s(e, t) {
    var n = t.match(e);
    return n
        ? {
              value: parseInt(n[0], 10),
              rest: t.slice(n[0].length),
          }
        : null;
}

function o(e, t) {
    var n = t.match(e);
    if (!n) return null;
    if ("Z" === n[0])
        return {
            value: 0,
            rest: t.slice(1),
        };
    var i = "+" === n[1] ? 1 : -1,
        a = n[2] ? parseInt(n[2], 10) : 0,
        s = n[3] ? parseInt(n[3], 10) : 0,
        o = n[5] ? parseInt(n[5], 10) : 0;
    return {
        value: i * (a * r.s0 + s * r.Cg + o * r._m),
        rest: t.slice(n[0].length),
    };
}

function l(e) {
    return s(i.h.anyDigitsSigned, e);
}

function c(e, t) {
    switch (e) {
        case 1:
            return s(i.h.singleDigit, t);
        case 2:
            return s(i.h.twoDigits, t);
        case 3:
            return s(i.h.threeDigits, t);
        case 4:
            return s(i.h.fourDigits, t);
        default:
            return s(RegExp("^\\d{1," + e + "}"), t);
    }
}

function u(e, t) {
    switch (e) {
        case 1:
            return s(i.h.singleDigitSigned, t);
        case 2:
            return s(i.h.twoDigitsSigned, t);
        case 3:
            return s(i.h.threeDigitsSigned, t);
        case 4:
            return s(i.h.fourDigitsSigned, t);
        default:
            return s(RegExp("^-?\\d{1," + e + "}"), t);
    }
}

function d(e) {
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

function f(e, t) {
    var n,
        r = t > 0,
        i = r ? t : 1 - t;
    if (i <= 50) n = e || 100;
    else {
        var a = i + 50,
            s = 100 * Math.floor(a / 100),
            o = e >= a % 100;
        n = e + s - 100 * !!o;
    }
    return r ? n : 1 - n;
}

function p(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
