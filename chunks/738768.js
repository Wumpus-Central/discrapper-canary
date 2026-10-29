(n.d(e, { wG: () => g, th: () => f, q$: () => p }), n(321073));
var r = n(435558),
    i = n.n(r);
n(309613);
let l = n(346344).newStemmer("english");
function h(t) {
    return l.stem(t);
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
function o(t) {
    return t.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function s(t) {
    return t.toLowerCase();
}
function a(t) {
    return u.has(t);
}
function c(t) {
    return 0 === t.length;
}
function f(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = t.length >= 3 && t.length <= 12;
    return {
        words: new Set(i()(t.split(/\W+/)).map(o).reject(c).map(s).reject(a).map(h).value()),
        supportPartialMatches: n && e,
    };
}
function p(t, e) {
    let { words: n, supportPartialMatches: r } = e;
    if (0 === n.size) return null;
    let i = [],
        l = "";
    for (let e of t.split(/(\W+)/g))
        !(function (t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (c((t = s(o(t)))) || a(t)) return !1;
            let r = h(t);
            if (n) {
                for (let t of e.values()) if (r.includes(t)) return !0;
                return !1;
            }
            return e.has(r);
        })(e, n, r)
            ? (l += e)
            : (l.length > 0 && i.push({ text: l, highlight: !1 }), i.push({ text: e, highlight: !0 }), (l = ""));
    return 0 === i.length ? null : (l.length > 0 && i.push({ text: l, highlight: !1 }), i);
}
function g(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { words: n, supportPartialMatches: r } = f(t, e);
    return (t) =>
        (function t(e, n, r) {
            if (Array.isArray(e)) e.forEach((e) => t(e, n, r));
            else if ("list" === e.type) e.items.forEach((e) => t(e, n, r));
            else if ("string" == typeof e.content && "codeBlock" !== e.type) {
                let t = p(e.content, { words: n, supportPartialMatches: r });
                if (null != t) {
                    let n = t.map((t) => {
                        let { text: e, highlight: n } = t;
                        return { type: n ? "highlight" : "text", content: e };
                    });
                    "text" === e.type ? (e.content = n) : (e.content = [{ type: "text", content: n }]);
                }
            } else null != e.content && t(e.content, n, r);
            return e;
        })(t, n, r);
}
