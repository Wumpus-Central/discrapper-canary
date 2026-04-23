"use strict";
n.d(t, { e: () => f, r: () => s });
var r = n(56636),
    i = n(370330);
function s(e) {
    if (0 === e.length) throw Error("Number skeleton cannot be empty");
    for (
        var t = e.split(i.R).filter(function (e) {
                return e.length > 0;
            }),
            n = [],
            r = 0;
        r < t.length;
        r++
    ) {
        var s = t[r].split("/");
        if (0 === s.length) throw Error("Invalid number skeleton");
        for (var a = s[0], o = s.slice(1), l = 0; l < o.length; l++)
            if (0 === o[l].length) throw Error("Invalid number skeleton");
        n.push({ stem: a, options: o });
    }
    return n;
}
var a = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    o = /^(@+)?(\+|#+)?[rs]?$/g,
    l = /(\*)(0+)|(#+)(0+)|(0+)/g,
    u = /^(0+)$/;
function c(e) {
    var t = {};
    return (
        "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
        e.replace(o, function (e, n, r) {
            return (
                "string" != typeof r
                    ? ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length))
                    : "+" === r
                      ? (t.minimumSignificantDigits = n.length)
                      : "#" === n[0]
                        ? (t.maximumSignificantDigits = n.length)
                        : ((t.minimumSignificantDigits = n.length),
                          (t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0))),
                ""
            );
        }),
        t
    );
}
function d(e) {
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
function _(e) {
    var t = d(e);
    return t || {};
}
function f(e) {
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
                t = (0, r.Cl)(
                    (0, r.Cl)((0, r.Cl)({}, t), { notation: "scientific" }),
                    i.options.reduce(function (e, t) {
                        return (0, r.Cl)((0, r.Cl)({}, e), _(t));
                    }, {}),
                );
                continue;
            case "engineering":
                t = (0, r.Cl)(
                    (0, r.Cl)((0, r.Cl)({}, t), { notation: "engineering" }),
                    i.options.reduce(function (e, t) {
                        return (0, r.Cl)((0, r.Cl)({}, e), _(t));
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
                i.options[0].replace(l, function (e, n, r, i, s, a) {
                    if (n) t.minimumIntegerDigits = r.length;
                    else if (i && s) throw Error("We currently do not support maximum integer digits");
                    else if (a) throw Error("We currently do not support exact integer digits");
                    return "";
                });
                continue;
        }
        if (u.test(i.stem)) {
            t.minimumIntegerDigits = i.stem.length;
            continue;
        }
        if (a.test(i.stem)) {
            if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
            i.stem.replace(a, function (e, n, r, i, s, a) {
                return (
                    "*" === r
                        ? (t.minimumFractionDigits = n.length)
                        : i && "#" === i[0]
                          ? (t.maximumFractionDigits = i.length)
                          : s && a
                            ? ((t.minimumFractionDigits = s.length), (t.maximumFractionDigits = s.length + a.length))
                            : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)),
                    ""
                );
            });
            var s = i.options[0];
            "w" === s
                ? (t = (0, r.Cl)((0, r.Cl)({}, t), { trailingZeroDisplay: "stripIfInteger" }))
                : s && (t = (0, r.Cl)((0, r.Cl)({}, t), c(s)));
            continue;
        }
        if (o.test(i.stem)) {
            t = (0, r.Cl)((0, r.Cl)({}, t), c(i.stem));
            continue;
        }
        var f = d(i.stem);
        f && (t = (0, r.Cl)((0, r.Cl)({}, t), f));
        var p = (function (e) {
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
                    !u.test(e))
                )
                    throw Error("Malformed concise eng/scientific notation");
                t.minimumIntegerDigits = e.length;
            }
            return t;
        })(i.stem);
        p && (t = (0, r.Cl)((0, r.Cl)({}, t), p));
    }
    return t;
}
