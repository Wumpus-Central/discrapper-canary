l.d(t, { A: () => C });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(791332),
    s = l.n(o),
    d = l(268218),
    c = l(481859),
    u = l(157941),
    p = l(694403),
    m = l(542664),
    b = l(49005),
    h = l(399314),
    x = l(429128);
let y = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function v(e) {
    return "string" == typeof e.content ? e.content : _(e.content);
}
let g = {
        ...s().defaultRules,
        heading: {
            ...s().defaultRules.heading,
            react(e, t, l) {
                let n = `h${e.level}`;
                return (0, a.jsx)(c.A, { tag: n, children: t(e.content, l) }, l.key);
            },
        },
        paragraph: {
            ...s().defaultRules.paragraph,
            react: (e, t, l) => (0, a.jsx)("div", { className: h.FY, children: t(e.content, l) }, l.key),
        },
        strong: { ...s().defaultRules.strong, order: 6 },
        em: { ...s().defaultRules.em, order: 6 },
        u: { ...s().defaultRules.u, order: 5 },
        del: { ...s().defaultRules.del, order: 6 },
        link: { ...p.Ay, ...(0, b.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...s().defaultRules.blockQuote,
            react: (e, t, l) => (0, a.jsx)("blockquote", { className: h.aV, children: v(e) }, l.key),
        },
        image: {
            ...s().defaultRules.image,
            order: 6,
            match(e, t, l) {
                let a = s().defaultRules.image;
                if (null == a || null == a.match) return !1;
                let n = a.match(e, t, l);
                if (null != n && Array.isArray(n) && n.length >= 3) {
                    let e = n[2];
                    if ("string" == typeof e) return null != e.match(y) ? n : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ...m.A.RULES.inlineCode,
            order: 6,
            react: (e, t, l) => (0, a.jsx)("code", { className: h.hQ, children: v(e) }, l.key),
        },
        codeBlock: {
            ...s().defaultRules.codeBlock,
            react(e, t, n) {
                let r = () => (0, a.jsx)("code", { className: i()(x.kw, "hljs"), children: v(e) });
                return (0, a.jsx)(
                    "pre",
                    {
                        children: (0, a.jsx)(u.l, {
                            location: "Markdown",
                            lang: e.lang,
                            code: e.content,
                            className: i()(x.kw, "hljs"),
                            children: (0, a.jsx)(d.c2, {
                                createPromise: () => Promise.all([l.e("57036"), l.e("75134")]).then(l.bind(l, 752238)),
                                webpackId: 752238,
                                renderFallback: r,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return r();
                                    {
                                        let l = t.highlight(e.lang, e.content, !0);
                                        return null == l
                                            ? r()
                                            : (0, a.jsx)("code", {
                                                  className: i()(x.kw, "hljs", l.language),
                                                  dangerouslySetInnerHTML: { __html: l.value },
                                              });
                                    }
                                },
                            }),
                        }),
                    },
                    n.key,
                );
            },
        },
    },
    f = s().parserFor(g),
    _ = s().reactFor(s().ruleOutput(g, "react"));
class E extends n.PureComponent {
    static rules = g;
    static defaultProps = { parser: f, output: _ };
    render() {
        let { className: e, children: t, state: l, parser: n, output: r } = this.props,
            o = r(
                n(
                    `${t}

`,
                    { inline: !1, ...l },
                ),
            );
        return (0, a.jsx)("div", { className: i()(h.wD, e), children: o });
    }
}
let C = E;
