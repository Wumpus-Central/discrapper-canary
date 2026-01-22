function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, {
    d: () => l,
    i: () => o,
});
let o = [
        {
            label: "Alberta",
            value: "AB",
        },
        {
            label: "British Columbia",
            value: "BC",
        },
        {
            label: "Manitoba",
            value: "MB",
        },
        {
            label: "New Brunswick",
            value: "NB",
        },
        {
            label: "Newfoundland and Labrador",
            value: "NL",
        },
        {
            label: "Nova Scotia",
            value: "NS",
        },
        {
            label: "Ontario",
            value: "ON",
        },
        {
            label: "Prince Edward Island",
            value: "PE",
        },
        {
            label: "Quebec",
            value: "QC",
        },
        {
            label: "Saskatchewan",
            value: "SK",
        },
        {
            label: "Northwest Territories",
            value: "NT",
        },
        {
            label: "Nunavut",
            value: "NU",
        },
        {
            label: "Yukon",
            value: "YT",
        },
    ],
    l = Object.freeze(o.reduce((e, t) => s(i({}, e), { [t.label.toLowerCase()]: t.value }), {}));
