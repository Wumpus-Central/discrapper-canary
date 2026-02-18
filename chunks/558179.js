l.d(t, { A: () => S });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(791332),
    o = l.n(s),
    u = l(268218),
    c = l(481859),
    d = l(694403),
    p = l(542664),
    m = l(49005),
    h = l(529223),
    x = l(829681);
let b = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function g(e) {
    return "string" == typeof e.content ? e.content : f(e.content);
}
let y = {
        ...o().defaultRules,
        heading: {
            ...o().defaultRules.heading,
            react(e, t, l) {
                let n = `h${e.level}`;
                return (0, a.jsx)(c.A, { tag: n, children: t(e.content, l) }, l.key);
            },
        },
        paragraph: {
            ...o().defaultRules.paragraph,
            react: (e, t, l) => (0, a.jsx)("div", { className: h.FY, children: t(e.content, l) }, l.key),
        },
        strong: { ...o().defaultRules.strong, order: 6 },
        em: { ...o().defaultRules.em, order: 6 },
        u: { ...o().defaultRules.u, order: 5 },
        del: { ...o().defaultRules.del, order: 6 },
        link: { ...d.Ay, ...(0, m.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...o().defaultRules.blockQuote,
            react: (e, t, l) => (0, a.jsx)("blockquote", { className: h.aV, children: g(e) }, l.key),
        },
        image: {
            ...o().defaultRules.image,
            order: 6,
            match(e, t, l) {
                let a = o().defaultRules.image;
                if (null == a || null == a.match) return !1;
                let n = a.match(e, t, l);
                if (null != n && Array.isArray(n) && n.length >= 3) {
                    let e = n[2];
                    if ("string" == typeof e) return null != e.match(b) ? n : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ...p.A.RULES.inlineCode,
            order: 6,
            react: (e, t, l) => (0, a.jsx)("code", { className: h.hQ, children: g(e) }, l.key),
        },
        codeBlock: {
            ...o().defaultRules.codeBlock,
            react(e, t, n) {
                let r = () =>
                    (0, a.jsx)(
                        "pre",
                        { children: (0, a.jsx)("code", { className: i()(x.kw, "hljs"), children: g(e) }) },
                        n.key,
                    );
                return (0, a.jsx)(
                    u.c2,
                    {
                        createPromise: () => Promise.resolve().then(l.bind(l, 752238)),
                        webpackId: 752238,
                        renderFallback: r,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return r();
                            {
                                let l = t.highlight(e.lang, e.content, !0);
                                return null == l
                                    ? r()
                                    : (0, a.jsx)(
                                          "pre",
                                          {
                                              children: (0, a.jsx)("code", {
                                                  className: i()(x.kw, "hljs", l.language),
                                                  dangerouslySetInnerHTML: { __html: l.value },
                                              }),
                                          },
                                          n.key,
                                      );
                            }
                        },
                    },
                    n.key,
                );
            },
        },
    },
    E = o().parserFor(y),
    f = o().reactFor(o().ruleOutput(y, "react"));
class v extends n.PureComponent {
    static rules = y;
    static defaultProps = { parser: E, output: f };
    render() {
        let { className: e, children: t, state: l, parser: n, output: r } = this.props,
            s = r(
                n(
                    `${t}

`,
                    { inline: !1, ...l },
                ),
            );
        return (0, a.jsx)("div", { className: i()(h.wD, e), children: s });
    }
}
let S = v;
