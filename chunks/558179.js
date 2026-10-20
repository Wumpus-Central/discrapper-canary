l.d(t, { A: () => A });
var r = l(477900),
    a = l(582128),
    n = l(503698),
    s = l.n(n),
    u = l(478676),
    c = l.n(u),
    d = l(481859),
    o = l(441136),
    i = l(694403),
    h = l(999915),
    p = l(881140),
    f = l(816969),
    g = l(969490);
let m = RegExp(`https?://${window.GLOBAL_ENV.CDN_HOST ?? ""}`);
function k(e) {
    return "string" == typeof e.content ? e.content : y(e.content);
}
let R = {
        ...c().defaultRules,
        heading: {
            ...c().defaultRules.heading,
            react(e, t, l) {
                let a = `h${e.level}`;
                return (0, r.jsx)(d.A, { tag: a, children: t(e.content, l) }, l.key);
            },
        },
        paragraph: {
            ...c().defaultRules.paragraph,
            react: (e, t, l) => (0, r.jsx)("div", { className: f.FY, children: t(e.content, l) }, l.key),
        },
        strong: { ...c().defaultRules.strong, order: 6 },
        em: { ...c().defaultRules.em, order: 6 },
        u: { ...c().defaultRules.u, order: 5 },
        del: {
            ...c().defaultRules.del,
            order: 6,
            match: c().inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),
        },
        link: { ...i.Ay, ...(0, p.A)({ enableBuildOverrides: !1 }), order: 6 },
        blockQuote: {
            ...c().defaultRules.blockQuote,
            react: (e, t, l) => (0, r.jsx)("blockquote", { className: f.aV, children: k(e) }, l.key),
        },
        image: {
            ...c().defaultRules.image,
            order: 6,
            match(e, t, l) {
                let r = c().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let a = r.match(e, t, l);
                if (null != a && Array.isArray(a) && a.length >= 3) {
                    let e = a[2];
                    if ("string" == typeof e) return null != e.match(m) ? a : null;
                }
                return !1;
            },
        },
        inlineCode: {
            ...h.Ay.RULES.inlineCode,
            order: 6,
            react: (e, t, l) => (0, r.jsx)("code", { className: f.hQ, children: k(e) }, l.key),
        },
        codeBlock: {
            ...c().defaultRules.codeBlock,
            react: (e, t, l) =>
                (0, r.jsx)(
                    "pre",
                    { children: (0, r.jsx)(o.E, { lang: e.lang, code: e.content, className: s()(g.kw, "hljs") }) },
                    l.key,
                ),
        },
    },
    x = c().parserFor(R),
    y = c().reactFor(c().ruleOutput(R, "react"));
class j extends a.PureComponent {
    static rules = R;
    static defaultProps = { parser: x, output: y };
    render() {
        let { className: e, children: t, state: l, parser: a, output: n } = this.props,
            u = n(
                a(
                    `${t}

`,
                    { inline: !1, ...l },
                ),
            );
        return (0, r.jsx)("div", { className: s()(f.wD, e), children: u });
    }
}
let A = j;
