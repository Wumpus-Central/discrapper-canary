n.d(t, { wG: () => d }), n(321073);
var a = n(735438),
    r = n.n(a);
n(309613);
var l = n(289732);
let s = new Set([
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "but",
    "by",
    "for",
    "if",
    "in",
    "into",
    "is",
    "it",
    "no",
    "not",
    "of",
    "on",
    "or",
    "such",
    "that",
    "the",
    "their",
    "then",
    "there",
    "these",
    "they",
    "this",
    "to",
    "was",
    "will",
    "with",
]);
function i(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function u(e) {
    return e.toLowerCase();
}
function o(e) {
    return s.has(e);
}
function c(e) {
    return 0 === e.length;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.length >= 3 && e.length <= 12 && t,
        a = new Set(r()(e.split(/\W+/)).map(i).reject(c).map(u).reject(o).map(l.U).value());
    return (e) =>
        (function e(t, n, a) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n, a));
            else if ("list" === t.type) t.items.forEach((t) => e(t, n, a));
            else if ("string" == typeof t.content && "codeBlock" !== t.type) {
                let e = [],
                    r = "";
                t.content.split(/(\W+)/g).forEach((t) => {
                    !(function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (c((e = u(i(e)))) || o(e)) return !1;
                        let a = (0, l.U)(e);
                        if (n) {
                            for (let e of t.values()) if (a.includes(e)) return !0;
                            return !1;
                        }
                        return t.has(a);
                    })(t, n, a)
                        ? (r += t)
                        : (r.length > 0 && e.push({ type: "text", content: r }),
                          e.push({ type: "highlight", content: t }),
                          (r = ""));
                }),
                    e.length > 0 &&
                        (r.length > 0 && e.push({ type: "text", content: r }),
                        "text" === t.type ? (t.content = e) : (t.content = [{ type: "text", content: e }]));
            } else null != t.content && e(t.content, n, a);
            return t;
        })(e, a, n);
}
