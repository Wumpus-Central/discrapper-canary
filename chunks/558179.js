"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(791332),
    l = n.n(o),
    u = n(268218),
    c = n(481859),
    d = n(694403),
    _ = n(542664),
    f = n(49005),
    p = n(529223),
    h = n(829681);
let m = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function g(e) {
    return "string" == typeof e.content ? e.content : I(e.content);
}
let E = {
        ...l().defaultRules,
        heading: {
            ...l().defaultRules.heading,
            react(e, t, n) {
                let i = `h${e.level}`;
                return (0, r.jsx)(c.A, { tag: i, children: t(e.content, n) }, n.key);
            },
        },
        paragraph: {
            ...l().defaultRules.paragraph,
            react: (e, t, n) => (0, r.jsx)("div", { className: p.FY, children: t(e.content, n) }, n.key),
        },
        strong: { ...l().defaultRules.strong, order: 6 },
        em: { ...l().defaultRules.em, order: 6 },
        u: { ...l().defaultRules.u, order: 5 },
        del: { ...l().defaultRules.del, order: 6 },
        link: { ...d.Ay, ...(0, f.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...l().defaultRules.blockQuote,
            react: (e, t, n) => (0, r.jsx)("blockquote", { className: p.aV, children: g(e) }, n.key),
        },
        image: {
            ...l().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let r = l().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let i = r.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ("string" == typeof e) return null != e.match(m) ? i : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ..._.A.RULES.inlineCode,
            order: 6,
            react: (e, t, n) => (0, r.jsx)("code", { className: p.hQ, children: g(e) }, n.key),
        },
        codeBlock: {
            ...l().defaultRules.codeBlock,
            react(e, t, i) {
                let a = () =>
                    (0, r.jsx)(
                        "pre",
                        { children: (0, r.jsx)("code", { className: s()(h.kw, "hljs"), children: g(e) }) },
                        i.key,
                    );
                return (0, r.jsx)(
                    u.c2,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
                        webpackId: 752238,
                        renderFallback: a,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return a();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? a()
                                    : (0, r.jsx)(
                                          "pre",
                                          {
                                              children: (0, r.jsx)("code", {
                                                  className: s()(h.kw, "hljs", n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value },
                                              }),
                                          },
                                          i.key,
                                      );
                            }
                        },
                    },
                    i.key,
                );
            },
        },
    },
    A = l().parserFor(E),
    I = l().reactFor(l().ruleOutput(E, "react"));
class T extends i.PureComponent {
    static rules = E;
    static defaultProps = { parser: A, output: I };
    render() {
        let { className: e, children: t, state: n, parser: i, output: a } = this.props,
            o = a(
                i(
                    `${t}

`,
                    { inline: !1, ...n },
                ),
            );
        return (0, r.jsx)("div", { className: s()(p.wD, e), children: o });
    }
}
let y = T;
