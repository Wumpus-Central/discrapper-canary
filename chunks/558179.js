a.d(t, { A: () => j });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(791332),
    o = a.n(r),
    c = a(268218),
    d = a(481859),
    u = a(157941),
    h = a(694403),
    m = a(542664),
    p = a(49005),
    _ = a(399314),
    g = a(429128);
let x = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function A(e) {
    return "string" == typeof e.content ? e.content : v(e.content);
}
let f = {
        ...o().defaultRules,
        heading: {
            ...o().defaultRules.heading,
            react(e, t, a) {
                let l = `h${e.level}`;
                return (0, n.jsx)(d.A, { tag: l, children: t(e.content, a) }, a.key);
            },
        },
        paragraph: {
            ...o().defaultRules.paragraph,
            react: (e, t, a) => (0, n.jsx)("div", { className: _.FY, children: t(e.content, a) }, a.key),
        },
        strong: { ...o().defaultRules.strong, order: 6 },
        em: { ...o().defaultRules.em, order: 6 },
        u: { ...o().defaultRules.u, order: 5 },
        del: { ...o().defaultRules.del, order: 6 },
        link: { ...h.Ay, ...(0, p.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...o().defaultRules.blockQuote,
            react: (e, t, a) => (0, n.jsx)("blockquote", { className: _.aV, children: A(e) }, a.key),
        },
        image: {
            ...o().defaultRules.image,
            order: 6,
            match(e, t, a) {
                let n = o().defaultRules.image;
                if (null == n || null == n.match) return !1;
                let l = n.match(e, t, a);
                if (null != l && Array.isArray(l) && l.length >= 3) {
                    let e = l[2];
                    if ("string" == typeof e) return null != e.match(x) ? l : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ...m.A.RULES.inlineCode,
            order: 6,
            react: (e, t, a) => (0, n.jsx)("code", { className: _.hQ, children: A(e) }, a.key),
        },
        codeBlock: {
            ...o().defaultRules.codeBlock,
            react(e, t, l) {
                let i = () => (0, n.jsx)("code", { className: s()(g.kw, "hljs"), children: A(e) });
                return (0, n.jsx)(
                    "pre",
                    {
                        children: (0, n.jsx)(u.l, {
                            location: "Markdown",
                            lang: e.lang,
                            code: e.content,
                            className: s()(g.kw, "hljs"),
                            children: (0, n.jsx)(c.c2, {
                                createPromise: () => Promise.resolve().then(a.bind(a, 752238)),
                                webpackId: 752238,
                                renderFallback: i,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
                                    {
                                        let a = t.highlight(e.lang, e.content, !0);
                                        return null == a
                                            ? i()
                                            : (0, n.jsx)("code", {
                                                  className: s()(g.kw, "hljs", a.language),
                                                  dangerouslySetInnerHTML: { __html: a.value },
                                              });
                                    }
                                },
                            }),
                        }),
                    },
                    l.key,
                );
            },
        },
    },
    C = o().parserFor(f),
    v = o().reactFor(o().ruleOutput(f, "react"));
class b extends l.PureComponent {
    static rules = f;
    static defaultProps = { parser: C, output: v };
    render() {
        let { className: e, children: t, state: a, parser: l, output: i } = this.props,
            r = i(
                l(
                    `${t}

`,
                    { inline: !1, ...a },
                ),
            );
        return (0, n.jsx)("div", { className: s()(_.wD, e), children: r });
    }
}
let j = b;
