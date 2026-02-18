"use strict";
let l;
n.r(t), n.d(t, { default: () => j, renderChangelogMessageMarkup: () => C });
var s = n(791332),
    i = n.n(s),
    r = n(873879),
    a = n(683412),
    o = n(704726),
    u = n(46054);
let c = i().defaultRules.lheading,
    d = i().defaultRules.heading,
    m = i().defaultRules.link,
    h = i().defaultRules.image,
    g = i().defaultRules.list,
    p = i().defaultRules.blockQuote,
    A = i().defaultRules.paragraph,
    f = /\{(.+?)}/,
    x = /^\$(\w+?)\$/;
l = n(482644);
let v = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, l) => {
            let s = f.exec(e[1]),
                r = e[1].replace(f, "");
            return (
                t && (r = r.toUpperCase()),
                { className: null != s ? s[1] : null, level: "=" === e[2] ? 1 : 2, content: i().parseInline(n, r, l) }
            );
        };
    },
    N = (e) => ({
        ...l.baseRules,
        image: { ...h, ...("function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image) },
        link: { ...m, ...("function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link) },
        list: { ...g, ...("function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list) },
        interpolation: {
            order: o.Ay.order,
            match: (e) => x.exec(e),
            parse(e, t, n) {
                let l = n.interpolations[e[1]];
                return null == l ? { type: "text", content: e[0] } : { type: "interpolation", renderer: l };
            },
            react: (e) => e.renderer(),
        },
        lheading: {
            ...c,
            parse: v({ transformUpperCase: !0 }),
            ...("function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading),
        },
        heading: {
            ...d,
            ...("function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading),
        },
        blockQuote: {
            ...p,
            ...("function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote),
        },
        paragraph: {
            ...A,
            ...("function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph),
        },
    });
function b(e) {
    return { ...N(e) };
}
let j = {
    getDefaultRules: b,
    getSpecialRules: (e) => ({
        ...N(e),
        ...{
            lheading: {
                ...c,
                parse: v({ transformUpperCase: !1 }),
                ...("function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading),
            },
        },
    }),
    getMessageRules: (e) => ({
        ...{ ...N(e), newline: { ...i().defaultRules.newline }, text: o.Ay, list: r.A, subtext: a.A },
    }),
};
function C(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        hasBailedAst: !1,
        content: u.A.reactParserFor(b(t))(e.content, !1, null != n ? { changeLog: n } : {}),
    };
}
