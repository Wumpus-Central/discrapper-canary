"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(791332),
    o = n.n(r),
    c = n(268218),
    d = n(481859),
    u = n(157941),
    h = n(527214),
    p = n(29814),
    m = n(881140),
    _ = n(399314),
    g = n(429128);
let x = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function f(e) {
    return "string" == typeof e.content ? e.content : b(e.content);
}
let A = {
        ...o().defaultRules,
        heading: {
            ...o().defaultRules.heading,
            react(e, t, n) {
                let a = `h${e.level}`;
                return (0, i.jsx)(d.A, { tag: a, children: t(e.content, n) }, n.key);
            },
        },
        paragraph: {
            ...o().defaultRules.paragraph,
            react: (e, t, n) => (0, i.jsx)("div", { className: _.FY, children: t(e.content, n) }, n.key),
        },
        strong: { ...o().defaultRules.strong, order: 6 },
        em: { ...o().defaultRules.em, order: 6 },
        u: { ...o().defaultRules.u, order: 5 },
        del: { ...o().defaultRules.del, order: 6 },
        link: { ...h.Ay, ...(0, m.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...o().defaultRules.blockQuote,
            react: (e, t, n) => (0, i.jsx)("blockquote", { className: _.aV, children: f(e) }, n.key),
        },
        image: {
            ...o().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let i = o().defaultRules.image;
                if (null == i || null == i.match) return !1;
                let a = i.match(e, t, n);
                if (null != a && Array.isArray(a) && a.length >= 3) {
                    let e = a[2];
                    if ("string" == typeof e) return null != e.match(x) ? a : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ...p.A.RULES.inlineCode,
            order: 6,
            react: (e, t, n) => (0, i.jsx)("code", { className: _.hQ, children: f(e) }, n.key),
        },
        codeBlock: {
            ...o().defaultRules.codeBlock,
            react(e, t, a) {
                let s = () => (0, i.jsx)("code", { className: l()(g.kw, "hljs"), children: f(e) });
                return (0, i.jsx)(
                    "pre",
                    {
                        children: (0, i.jsx)(u.l, {
                            location: "Markdown",
                            lang: e.lang,
                            code: e.content,
                            className: l()(g.kw, "hljs"),
                            children: (0, i.jsx)(c.c2, {
                                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                                webpackId: 981776,
                                renderFallback: s,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return s();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? s()
                                            : (0, i.jsx)("code", {
                                                  className: l()(g.kw, "hljs", n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value },
                                              });
                                    }
                                },
                            }),
                        }),
                    },
                    a.key,
                );
            },
        },
    },
    C = o().parserFor(A),
    b = o().reactFor(o().ruleOutput(A, "react"));
class v extends a.PureComponent {
    static rules = A;
    static defaultProps = { parser: C, output: b };
    render() {
        let { className: e, children: t, state: n, parser: a, output: s } = this.props,
            r = s(
                a(
                    `${t}

`,
                    { inline: !1, ...n },
                ),
            );
        return (0, i.jsx)("div", { className: l()(_.wD, e), children: r });
    }
}
let I = v;
