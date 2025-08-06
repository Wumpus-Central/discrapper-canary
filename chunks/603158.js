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
n.d(t, { F: () => o }), n(413496), n(433524), n(35282);
let i = (function e(e) {
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
})(
    {},
    {
        "-": "-",
        " ": " ",
    },
    {
        "[": " ",
        "]": " ",
        "(": " ",
        ")": " ",
        "|": " ",
        "~": " ",
    },
    {
        "\u200B": "",
        "‌": "",
        "‍": "",
        "\u200E": "",
        "\uFEFF": "",
    },
    { "|": " " },
);
function o(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        null != i[r] ? (t += i[r]) : RegExp("[\\p{Pd}\\p{Pc}\\p{Po}]", "gu").test(r) ? (t += " ") : (t += r);
    }
    return t.toLowerCase();
}
