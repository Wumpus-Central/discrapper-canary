"use strict";
var i = n(503628),
    r = n(380744),
    s = n(257943),
    a = n(105712),
    o = r("iterator");
e.exports = !i(function () {
    var e = new URL("b?a=1&b=2&c=3", "https://a"),
        t = e.searchParams,
        n = new URLSearchParams("a=1&a=2&b=3"),
        i = "";
    return (
        (e.pathname = "c%20d"),
        t.forEach(function (e, n) {
            t.delete("b"), (i += n + e);
        }),
        n.delete("a", 2),
        n.delete("b", void 0),
        (a && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", void 0) || n.has("b"))) ||
            (!t.size && (a || !s)) ||
            !t.sort ||
            "https://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== t.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !t[o] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("https://\u0442\u0435\u0441\u0442").host ||
            "#%D0%B1" !== new URL("https://a#\u0431").hash ||
            "a1c3" !== i ||
            "x" !== new URL("https://x", void 0).host
    );
});
