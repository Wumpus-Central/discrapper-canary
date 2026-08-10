"use strict";
let l;
s.r(t), s.d(t, { default: () => x, renderChangelogMessageMarkup: () => A });
var a = s(478676),
    n = s.n(a),
    r = s(873879),
    o = s(683412),
    u = s(704726),
    c = s(46054);
let i = n().defaultRules.lheading,
    p = n().defaultRules.heading,
    d = n().defaultRules.link,
    g = n().defaultRules.image,
    m = n().defaultRules.list,
    f = n().defaultRules.blockQuote,
    h = n().defaultRules.paragraph,
    R = /\{(.+?)}/,
    k = /^\$(\w+?)\$/;
function b(e) {
    let { transformUpperCase: t = !1 } = e;
    return (e, s, l) => {
        let a = R.exec(e[1]),
            r = e[1].replace(R, "");
        return (
            t && (r = r.toUpperCase()),
            { className: null != a ? a[1] : null, level: "=" === e[2] ? 1 : 2, content: n().parseInline(s, r, l) }
        );
    };
}
function y(e) {
    return {
        ...l.baseRules,
        ...(null != l.customRules.strong
            ? {
                  strong: {
                      ...l.baseRules.strong,
                      ...("function" == typeof l.customRules.strong ? l.customRules.strong(e) : l.customRules.strong),
                  },
              }
            : {}),
        image: { ...g, ...("function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image) },
        link: { ...d, ...("function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link) },
        list: { ...m, ...("function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list) },
        interpolation: {
            order: u.Ay.order,
            match: (e) => k.exec(e),
            parse(e, t, s) {
                let l = s.interpolations[e[1]];
                return null == l ? { type: "text", content: e[0] } : { type: "interpolation", renderer: l };
            },
            react: (e) => e.renderer(),
        },
        lheading: {
            ...i,
            parse: b({ transformUpperCase: !0 }),
            ...("function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading),
        },
        heading: {
            ...p,
            ...("function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading),
        },
        blockQuote: {
            ...f,
            ...("function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote),
        },
        paragraph: {
            ...h,
            ...("function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph),
        },
    };
}
function C(e) {
    return { ...y(e) };
}
l = s(482644);
let x = {
    getDefaultRules: C,
    getSpecialRules: (e) => ({
        ...y(e),
        ...{
            lheading: {
                ...i,
                parse: b({ transformUpperCase: !1 }),
                ...("function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading),
            },
        },
    }),
    getMessageRules: (e) => ({
        ...{ ...y(e), newline: { ...n().defaultRules.newline }, text: u.Ay, list: r.A, subtext: o.A },
    }),
};
function A(e, t, s) {
    return {
        hasSpoilerEmbeds: !1,
        hasBailedAst: !1,
        content: c.A.reactParserFor(C(t))(e.content, !1, null != s ? { changeLog: s } : {}),
    };
}
