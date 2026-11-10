(t.d(n, { wG: () => f, th: () => h, q$: () => m }), t(321073));
var r = t(435558),
    l = t.n(r);
t(309613);
var i = t(83956);
function a(e) {
    return (0, i.W)(e);
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
        words: new Set(l()(e.split(/\W+/)).map(s).reject(d).map(o).reject(c).map(a).value()),
        supportPartialMatches: t && n,
    };
}
function m(e, n) {
    let { words: t, supportPartialMatches: r } = n;
    if (0 === t.size) return null;
    let l = [],
        i = "";
    for (let n of e.split(/(\W+)/g))
        !(function (e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (d((e = o(s(e)))) || c(e)) return !1;
            let r = a(e);
            if (t) {
                for (let e of n.values()) if (r.includes(e)) return !0;
                return !1;
            }
            return n.has(r);
        })(n, t, r)
            ? (i += n)
            : (i.length > 0 && l.push({ text: i, highlight: !1 }), l.push({ text: n, highlight: !0 }), (i = ""));
    return 0 === l.length ? null : (i.length > 0 && l.push({ text: i, highlight: !1 }), l);
}
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { words: t, supportPartialMatches: r } = h(e, n);
    return (e) =>
        (function e(n, t, r) {
            if (Array.isArray(n)) n.forEach((n) => e(n, t, r));
            else if ("list" === n.type) n.items.forEach((n) => e(n, t, r));
            else if ("string" == typeof n.content && "codeBlock" !== n.type) {
                let e = m(n.content, { words: t, supportPartialMatches: r });
                if (null != e) {
                    let t = e.map((e) => {
                        let { text: n, highlight: t } = e;
                        return { type: t ? "highlight" : "text", content: n };
                    });
                    "text" === n.type ? (n.content = t) : (n.content = [{ type: "text", content: t }]);
                }
            } else null != n.content && e(n.content, t, r);
            return n;
        })(e, t, r);
}
