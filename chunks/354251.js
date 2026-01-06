n.d(t, {
    N: () => a,
    y: () => o,
});
var r = n(54381),
    i = n(354012);
let a = new i.IntlManager({
    initialLocale: "en-US",
    defaultLocale: "en-US",
}).withFormatters({
    format: (0, i.makeReactFormatter)({
        $i: (e, t) => (0, r.jsx)("em", { children: e }, t),
        $b: (e, t) => (0, r.jsx)("strong", { children: e }, t),
        $del: (e, t) => (0, r.jsx)("del", { children: e }, t),
        $p: (e, t) => (0, r.jsx)("p", { children: e }, t),
        $code: (e, t) => (0, r.jsx)("code", { children: e }, t),
        $link: (e, t) => (0, r.jsx)("span", { children: e }, t),
    }),
    formatToPlainString: i.stringFormatter,
    formatToMarkdownString: i.markdownFormatter,
    formatToParts: i.astFormatter,
});
function o(e) {
    a = e;
}
