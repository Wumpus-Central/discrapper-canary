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
n.d(t, {
    Ay: () => u,
});
let a = Object.freeze({
        overflowY: "scroll",
        overflowX: "hidden",
    }),
    s = Object.freeze({
        overflowY: "auto",
        overflowX: "hidden",
    }),
    o = Object.freeze({
        overflowX: "scroll",
        overflowY: "hidden",
    }),
    l = Object.freeze({
        overflowX: "auto",
        overflowY: "hidden",
    }),
    c = Object.freeze({
        overflow: "auto",
    });

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "scroll",
        r = "vertical" === t ? ("auto" === n ? s : a) : "horizontal" === t ? ("auto" === n ? l : o) : c;
    return null != e ? i({}, r, e) : r;
}
