n.d(e, { wG: () => p }), n(321073);
var r = n(735438),
    i = n.n(r);
n(309613);
let o = n(346344).newStemmer("english");
function h(t) {
    return o.stem(t);
}
let u = new Set([
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
function s(t) {
    return t.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function c(t) {
    return t.toLowerCase();
}
function l(t) {
    return u.has(t);
}
function a(t) {
    return 0 === t.length;
}
function p(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = t.length >= 3 && t.length <= 12 && e,
        r = new Set(i()(t.split(/\W+/)).map(s).reject(a).map(c).reject(l).map(h).value());
    return (t) =>
        (function t(e, n, r) {
            if (Array.isArray(e)) e.forEach((e) => t(e, n, r));
            else if ("list" === e.type) e.items.forEach((e) => t(e, n, r));
            else if ("string" == typeof e.content && "codeBlock" !== e.type) {
                let t = [],
                    i = "";
                e.content.split(/(\W+)/g).forEach((e) => {
                    !(function (t, e) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (a((t = c(s(t)))) || l(t)) return !1;
                        let r = h(t);
                        if (n) {
                            for (let t of e.values()) if (r.includes(t)) return !0;
                            return !1;
                        }
                        return e.has(r);
                    })(e, n, r)
                        ? (i += e)
                        : (i.length > 0 && t.push({ type: "text", content: i }),
                          t.push({ type: "highlight", content: e }),
                          (i = ""));
                }),
                    t.length > 0 &&
                        (i.length > 0 && t.push({ type: "text", content: i }),
                        "text" === e.type ? (e.content = t) : (e.content = [{ type: "text", content: t }]));
            } else null != e.content && t(e.content, n, r);
            return e;
        })(t, r, n);
}
