"use strict";
let a;
s.r(t), s.d(t, { default: () => x, renderChangelogMessageMarkup: () => A });
var l = s(791332),
    n = s.n(l),
    r = s(873879),
    c = s(683412),
    o = s(704726),
    u = s(46054);
let i = n().defaultRules.lheading,
    p = n().defaultRules.heading,
    d = n().defaultRules.link,
    g = n().defaultRules.image,
    m = n().defaultRules.list,
    h = n().defaultRules.blockQuote,
    f = n().defaultRules.paragraph,
    k = /\{(.+?)}/,
    R = /^\$(\w+?)\$/;
a = s(482644);
let b = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, s, a) => {
            let l = k.exec(e[1]),
                r = e[1].replace(k, "");
            return (
                t && (r = r.toUpperCase()),
                { className: null != l ? l[1] : null, level: "=" === e[2] ? 1 : 2, content: n().parseInline(s, r, a) }
            );
        };
    },
    y = (e) => ({
        ...a.baseRules,
        image: { ...g, ...("function" == typeof a.customRules.image ? a.customRules.image(e) : a.customRules.image) },
        link: { ...d, ...("function" == typeof a.customRules.link ? a.customRules.link(e) : a.customRules.link) },
        list: { ...m, ...("function" == typeof a.customRules.list ? a.customRules.list(e) : a.customRules.list) },
        interpolation: {
            order: o.Ay.order,
            match: (e) => R.exec(e),
            parse(e, t, s) {
                let a = s.interpolations[e[1]];
                return null == a ? { type: "text", content: e[0] } : { type: "interpolation", renderer: a };
            },
            react: (e) => e.renderer(),
        },
        lheading: {
            ...i,
            parse: b({ transformUpperCase: !0 }),
            ...("function" == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading),
        },
        heading: {
            ...p,
            ...("function" == typeof a.customRules.heading ? a.customRules.heading(e) : a.customRules.heading),
        },
        blockQuote: {
            ...h,
            ...("function" == typeof a.customRules.blockQuote ? a.customRules.blockQuote(e) : a.customRules.blockQuote),
        },
        paragraph: {
            ...f,
            ...("function" == typeof a.customRules.paragraph ? a.customRules.paragraph(e) : a.customRules.paragraph),
        },
    });
function C(e) {
    return { ...y(e) };
}
let x = {
    getDefaultRules: C,
    getSpecialRules: (e) => ({
        ...y(e),
        ...{
            lheading: {
                ...i,
                parse: b({ transformUpperCase: !1 }),
                ...("function" == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading),
            },
        },
    }),
    getMessageRules: (e) => ({
        ...{ ...y(e), newline: { ...n().defaultRules.newline }, text: o.Ay, list: r.A, subtext: c.A },
    }),
};
function A(e, t, s) {
    return {
        hasSpoilerEmbeds: !1,
        hasBailedAst: !1,
        content: u.A.reactParserFor(C(t))(e.content, !1, null != s ? { changeLog: s } : {}),
    };
}
