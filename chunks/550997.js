"use strict";
let r;
n.r(t), n.d(t, { default: () => v, renderChangelogMessageMarkup: () => C });
var i = n(791332),
    a = n.n(i),
    s = n(873879),
    o = n(683412),
    l = n(704726),
    u = n(46054);
let c = a().defaultRules.lheading,
    d = a().defaultRules.heading,
    _ = a().defaultRules.link,
    f = a().defaultRules.image,
    p = a().defaultRules.list,
    h = a().defaultRules.blockQuote,
    m = a().defaultRules.paragraph,
    g = /\{(.+?)}/,
    E = /^\$(\w+?)\$/;
r = n(482644);
let A = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, r) => {
            let i = g.exec(e[1]),
                s = e[1].replace(g, "");
            return (
                t && (s = s.toUpperCase()),
                { className: null != i ? i[1] : null, level: "=" === e[2] ? 1 : 2, content: a().parseInline(n, s, r) }
            );
        };
    },
    I = (e) => ({
        ...r.baseRules,
        image: { ...f, ...("function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image) },
        link: { ..._, ...("function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link) },
        list: { ...p, ...("function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list) },
        interpolation: {
            order: l.Ay.order,
            match: (e) => E.exec(e),
            parse(e, t, n) {
                let r = n.interpolations[e[1]];
                return null == r ? { type: "text", content: e[0] } : { type: "interpolation", renderer: r };
            },
            react: (e) => e.renderer(),
        },
        lheading: {
            ...c,
            parse: A({ transformUpperCase: !0 }),
            ...("function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
        },
        heading: {
            ...d,
            ...("function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
        },
        blockQuote: {
            ...h,
            ...("function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
        },
        paragraph: {
            ...m,
            ...("function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph),
        },
    }),
    T = (e) => ({
        lheading: {
            ...c,
            parse: A({ transformUpperCase: !1 }),
            ...("function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
        },
    }),
    y = (e) => ({ ...I(e), newline: { ...a().defaultRules.newline }, text: l.Ay, list: s.A, subtext: o.A });
function S(e) {
    return { ...I(e) };
}
let v = { getDefaultRules: S, getSpecialRules: (e) => ({ ...I(e), ...T(e) }), getMessageRules: (e) => ({ ...y(e) }) };
function C(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        hasBailedAst: !1,
        content: u.A.reactParserFor(S(t))(e.content, !1, null != n ? { changeLog: n } : {}),
    };
}
