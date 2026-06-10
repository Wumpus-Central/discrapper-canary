t.d(l, { A: () => N });
var r = t(627968),
    n = t(64700),
    a = t(503698),
    s = t.n(a),
    u = t(791332),
    c = t.n(u),
    d = t(268218),
    o = t(481859),
    i = t(157941),
    h = t(527214),
    g = t(29814),
    p = t(881140),
    f = t(399314),
    k = t(429128);
let m = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function j(e) {
    return "string" == typeof e.content ? e.content : y(e.content);
}
let x = {
        ...c().defaultRules,
        heading: {
            ...c().defaultRules.heading,
            react(e, l, t) {
                let n = `h${e.level}`;
                return (0, r.jsx)(o.A, { tag: n, children: l(e.content, t) }, t.key);
            },
        },
        paragraph: {
            ...c().defaultRules.paragraph,
            react: (e, l, t) => (0, r.jsx)("div", { className: f.FY, children: l(e.content, t) }, t.key),
        },
        strong: { ...c().defaultRules.strong, order: 6 },
        em: { ...c().defaultRules.em, order: 6 },
        u: { ...c().defaultRules.u, order: 5 },
        del: { ...c().defaultRules.del, order: 6 },
        link: { ...h.Ay, ...(0, p.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...c().defaultRules.blockQuote,
            react: (e, l, t) => (0, r.jsx)("blockquote", { className: f.aV, children: j(e) }, t.key),
        },
        image: {
            ...c().defaultRules.image,
            order: 6,
            match(e, l, t) {
                let r = c().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let n = r.match(e, l, t);
                if (null != n && Array.isArray(n) && n.length >= 3) {
                    let e = n[2];
                    if ("string" == typeof e) return null != e.match(m) ? n : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ...g.A.RULES.inlineCode,
            order: 6,
            react: (e, l, t) => (0, r.jsx)("code", { className: f.hQ, children: j(e) }, t.key),
        },
        codeBlock: {
            ...c().defaultRules.codeBlock,
            react(e, l, n) {
                let a = () => (0, r.jsx)("code", { className: s()(k.kw, "hljs"), children: j(e) });
                return (0, r.jsx)(
                    "pre",
                    {
                        children: (0, r.jsx)(i.l, {
                            location: "Markdown",
                            lang: e.lang,
                            code: e.content,
                            className: s()(k.kw, "hljs"),
                            children: (0, r.jsx)(d.c2, {
                                createPromise: () => Promise.all([t.e("57036"), t.e("75134")]).then(t.bind(t, 981776)),
                                webpackId: 981776,
                                renderFallback: a,
                                render: (l) => {
                                    if (!(e.lang && l.hasLanguage(e.lang)) || "string" != typeof e.content) return a();
                                    {
                                        let t = l.highlight(e.lang, e.content, !0);
                                        return null == t
                                            ? a()
                                            : (0, r.jsx)("code", {
                                                  className: s()(k.kw, "hljs", t.language),
                                                  dangerouslySetInnerHTML: { __html: t.value },
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
    R = c().parserFor(x),
    y = c().reactFor(c().ruleOutput(x, "react"));
class w extends n.PureComponent {
    static rules = x;
    static defaultProps = { parser: R, output: y };
    render() {
        let { className: e, children: l, state: t, parser: n, output: a } = this.props,
            u = a(
                n(
                    `${l}

`,
                    { inline: !1, ...t },
                ),
            );
        return (0, r.jsx)("div", { className: s()(f.wD, e), children: u });
    }
}
let N = w;
