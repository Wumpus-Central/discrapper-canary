(t.d(n, { wG: () => f, th: () => h, q$: () => m }), t(321073));
var l = t(435558),
    r = t.n(l);
t(309613);
let i = t(346344).newStemmer("english");
function a(e) {
    return i.stem(e);
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
function s(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function o(e) {
    return e.toLowerCase();
}
function c(e) {
    return u.has(e);
}
function d(e) {
    return 0 === e.length;
}
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = e.length >= 3 && e.length <= 12;
    return {
        words: new Set(r()(e.split(/\W+/)).map(s).reject(d).map(o).reject(c).map(a).value()),
        supportPartialMatches: t && n,
    };
}
function m(e, n) {
    let { words: t, supportPartialMatches: l } = n;
    if (0 === t.size) return null;
    let r = [],
        i = "";
    for (let n of e.split(/(\W+)/g))
        !(function (e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (d((e = o(s(e)))) || c(e)) return !1;
            let l = a(e);
            if (t) {
                for (let e of n.values()) if (l.includes(e)) return !0;
                return !1;
            }
            return n.has(l);
        })(n, t, l)
            ? (i += n)
            : (i.length > 0 && r.push({ text: i, highlight: !1 }), r.push({ text: n, highlight: !0 }), (i = ""));
    return 0 === r.length ? null : (i.length > 0 && r.push({ text: i, highlight: !1 }), r);
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { words: t, supportPartialMatches: l } = h(e, n);
    return (e) =>
        (function e(n, t, l) {
            if (Array.isArray(n)) n.forEach((n) => e(n, t, l));
            else if ("list" === n.type) n.items.forEach((n) => e(n, t, l));
            else if ("string" == typeof n.content && "codeBlock" !== n.type) {
                let e = m(n.content, { words: t, supportPartialMatches: l });
                if (null != e) {
                    let t = e.map((e) => {
                        let { text: n, highlight: t } = e;
                        return { type: t ? "highlight" : "text", content: n };
                    });
                    "text" === n.type ? (n.content = t) : (n.content = [{ type: "text", content: t }]);
                }
            } else null != n.content && e(n.content, t, l);
            return n;
        })(e, t, l);
}
