"use strict";
n.r(t),
    n.d(t, { parseNumberSkeleton: () => p, parseNumberSkeletonFromString: () => o, parseDateTimeSkeleton: () => r });
var i =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function r(e) {
    var t = {};
    return (
        e.replace(i, function (e) {
            var n = e.length;
            switch (e[0]) {
                case "G":
                    t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                    break;
                case "y":
                    t.year = 2 === n ? "2-digit" : "numeric";
                    break;
                case "Y":
                case "u":
                case "U":
                case "r":
                    throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                case "q":
                case "Q":
                    throw RangeError("`q/Q` (quarter) patterns are not supported");
                case "M":
                case "L":
                    t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
                    break;
                case "w":
                case "W":
                    throw RangeError("`w/W` (week) patterns are not supported");
                case "d":
                    t.day = ["numeric", "2-digit"][n - 1];
                    break;
                case "D":
                case "F":
                case "g":
                    throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                case "E":
                    t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                    break;
                case "e":
                    if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                    t.weekday = ["short", "long", "narrow", "short"][n - 4];
                    break;
                case "c":
                    if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                    t.weekday = ["short", "long", "narrow", "short"][n - 4];
                    break;
                case "a":
                    t.hour12 = !0;
                    break;
                case "b":
                case "B":
                    throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                case "h":
                    (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][n - 1]);
                    break;
                case "H":
                    (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][n - 1]);
                    break;
                case "K":
                    (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][n - 1]);
                    break;
                case "k":
                    (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][n - 1]);
                    break;
                case "j":
                case "J":
                case "C":
                    throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                case "m":
                    t.minute = ["numeric", "2-digit"][n - 1];
                    break;
                case "s":
                    t.second = ["numeric", "2-digit"][n - 1];
                    break;
                case "S":
                case "A":
                    throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                case "z":
                    t.timeZoneName = n < 4 ? "short" : "long";
                    break;
                case "Z":
                case "O":
                case "v":
                case "V":
                case "X":
                case "x":
                    throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
            }
            return "";
        }),
        t
    );
}
var s = n(56636),
    a = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function o(e) {
    if (0 === e.length) throw Error("Number skeleton cannot be empty");
    for (
        var t = e.split(a).filter(function (e) {
                return e.length > 0;
            }),
            n = [],
            i = 0;
        i < t.length;
        i++
    ) {
        var r = t[i].split("/");
        if (0 === r.length) throw Error("Invalid number skeleton");
        for (var s = r[0], o = r.slice(1), l = 0; l < o.length; l++)
            if (0 === o[l].length) throw Error("Invalid number skeleton");
        n.push({ stem: s, options: o });
    }
    return n;
}
var l = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    u = /^(@+)?(\+|#+)?[rs]?$/g,
    c = /(\*)(0+)|(#+)(0+)|(0+)/g,
    d = /^(0+)$/;
function _(e) {
    var t = {};
    return (
        "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
        e.replace(u, function (e, n, i) {
            return (
                "string" != typeof i
                    ? ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length))
                    : "+" === i
                      ? (t.minimumSignificantDigits = n.length)
                      : "#" === n[0]
                        ? (t.maximumSignificantDigits = n.length)
                        : ((t.minimumSignificantDigits = n.length),
                          (t.maximumSignificantDigits = n.length + ("string" == typeof i ? i.length : 0))),
                ""
            );
        }),
        t
    );
}
function h(e) {
    switch (e) {
        case "sign-auto":
            return { signDisplay: "auto" };
        case "sign-accounting":
        case "()":
            return { currencySign: "accounting" };
        case "sign-always":
        case "+!":
            return { signDisplay: "always" };
        case "sign-accounting-always":
        case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
        case "sign-except-zero":
        case "+?":
            return { signDisplay: "exceptZero" };
        case "sign-accounting-except-zero":
        case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
        case "sign-never":
        case "+_":
            return { signDisplay: "never" };
    }
}
function f(e) {
    var t = h(e);
    return t || {};
}
function p(e) {
    for (var t = {}, n = 0; n < e.length; n++) {
        var i = e[n];
        switch (i.stem) {
            case "percent":
            case "%":
                t.style = "percent";
                continue;
            case "%x100":
                (t.style = "percent"), (t.scale = 100);
                continue;
            case "currency":
                (t.style = "currency"), (t.currency = i.options[0]);
                continue;
            case "group-off":
            case ",_":
                t.useGrouping = !1;
                continue;
            case "precision-integer":
            case ".":
                t.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                (t.style = "unit"), (t.unit = i.options[0].replace(/^(.*?)-/, ""));
                continue;
            case "compact-short":
            case "K":
                (t.notation = "compact"), (t.compactDisplay = "short");
                continue;
            case "compact-long":
            case "KK":
                (t.notation = "compact"), (t.compactDisplay = "long");
                continue;
            case "scientific":
                t = (0, s.Cl)(
                    (0, s.Cl)((0, s.Cl)({}, t), { notation: "scientific" }),
                    i.options.reduce(function (e, t) {
                        return (0, s.Cl)((0, s.Cl)({}, e), f(t));
                    }, {}),
                );
                continue;
            case "engineering":
                t = (0, s.Cl)(
                    (0, s.Cl)((0, s.Cl)({}, t), { notation: "engineering" }),
                    i.options.reduce(function (e, t) {
                        return (0, s.Cl)((0, s.Cl)({}, e), f(t));
                    }, {}),
                );
                continue;
            case "notation-simple":
                t.notation = "standard";
                continue;
            case "unit-width-narrow":
                (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
                continue;
            case "unit-width-short":
                (t.currencyDisplay = "code"), (t.unitDisplay = "short");
                continue;
            case "unit-width-full-name":
                (t.currencyDisplay = "name"), (t.unitDisplay = "long");
                continue;
            case "unit-width-iso-code":
                t.currencyDisplay = "symbol";
                continue;
            case "scale":
                t.scale = parseFloat(i.options[0]);
                continue;
            case "rounding-mode-floor":
                t.roundingMode = "floor";
                continue;
            case "rounding-mode-ceiling":
                t.roundingMode = "ceil";
                continue;
            case "rounding-mode-down":
                t.roundingMode = "trunc";
                continue;
            case "rounding-mode-up":
                t.roundingMode = "expand";
                continue;
            case "rounding-mode-half-even":
                t.roundingMode = "halfEven";
                continue;
            case "rounding-mode-half-down":
                t.roundingMode = "halfTrunc";
                continue;
            case "rounding-mode-half-up":
                t.roundingMode = "halfExpand";
                continue;
            case "integer-width":
                if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                i.options[0].replace(c, function (e, n, i, r, s, a) {
                    if (n) t.minimumIntegerDigits = i.length;
                    else if (r && s) throw Error("We currently do not support maximum integer digits");
                    else if (a) throw Error("We currently do not support exact integer digits");
                    return "";
                });
                continue;
        }
        if (d.test(i.stem)) {
            t.minimumIntegerDigits = i.stem.length;
            continue;
        }
        if (l.test(i.stem)) {
            if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(l, function (e, n, i, r, s, a) {
                return (
                    "*" === i
                        ? (t.minimumFractionDigits = n.length)
                        : r && "#" === r[0]
                          ? (t.maximumFractionDigits = r.length)
                          : s && a
                            ? ((t.minimumFractionDigits = s.length), (t.maximumFractionDigits = s.length + a.length))
                            : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)),
                    ""
                );
            });
            var r = i.options[0];
            "w" === r
                ? (t = (0, s.Cl)((0, s.Cl)({}, t), { trailingZeroDisplay: "stripIfInteger" }))
                : r && (t = (0, s.Cl)((0, s.Cl)({}, t), _(r)));
            continue;
        }
        if (u.test(i.stem)) {
            t = (0, s.Cl)((0, s.Cl)({}, t), _(i.stem));
            continue;
        }
        var a = h(i.stem);
        a && (t = (0, s.Cl)((0, s.Cl)({}, t), a));
        var o = (function (e) {
            var t;
            if (
                ("E" === e[0] && "E" === e[1]
                    ? ((t = { notation: "engineering" }), (e = e.slice(2)))
                    : "E" === e[0] && ((t = { notation: "scientific" }), (e = e.slice(1))),
                t)
            ) {
                var n = e.slice(0, 2);
                if (
                    ("+!" === n
                        ? ((t.signDisplay = "always"), (e = e.slice(2)))
                        : "+?" === n && ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
                    !d.test(e))
                )
                    throw Error("Malformed concise eng/scientific notation");
                t.minimumIntegerDigits = e.length;
            }
            return t;
        })(i.stem);
        o && (t = (0, s.Cl)((0, s.Cl)({}, t), o));
    }
    return t;
}
