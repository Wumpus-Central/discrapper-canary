let l;
var s = n(478676),
    a = n.n(s),
    r = n(873879),
    o = n(683412),
    u = n(704726),
    i = n(46054);
let c = a().defaultRules.lheading,
    p = a().defaultRules.heading,
    d = a().defaultRules.link,
    m = a().defaultRules.image,
    g = a().defaultRules.list,
    h = a().defaultRules.blockQuote,
    f = a().defaultRules.paragraph,
    R = /\{(.+?)}/,
    b = /^\$(\w+?)\$/;
function k(e) {
    let { transformUpperCase: t = !1 } = e;
    return (e, n, l) => {
        let s = R.exec(e[1]),
            r = e[1].replace(R, "");
        return (
            t && (r = r.toUpperCase()),
            { className: null != s ? s[1] : null, level: "=" === e[2] ? 1 : 2, content: a().parseInline(n, r, l) }
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
        image: { ...m, ...("function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image) },
        link: { ...d, ...("function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link) },
        list: { ...g, ...("function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list) },
        interpolation: {
            order: u.Ay.order,
            match: (e) => b.exec(e),
            parse(e, t, n) {
                let l = n.interpolations[e[1]];
                return null == l ? { type: "text", content: e[0] } : { type: "interpolation", renderer: l };
            },
            react: (e) => e.renderer(),
        },
        lheading: {
            ...c,
            parse: k({ transformUpperCase: !0 }),
            ...("function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading),
        },
        heading: {
            ...p,
            ...("function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading),
        },
        blockQuote: {
            ...h,
            ...("function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote),
        },
        paragraph: {
            ...f,
            ...("function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph),
        },
    };
}
function x(e) {
    return { ...y(e) };
}
((l = n(843430)),
    n.d(
        t,
        {},
        {
            A: {
                getDefaultRules: x,
                getSpecialRules: (e) => ({
                    ...y(e),
                    ...{
                        lheading: {
                            ...c,
                            parse: k({ transformUpperCase: !1 }),
                            ...("function" == typeof l.customRules.lheading
                                ? l.customRules.lheading(e)
                                : l.customRules.lheading),
                        },
                    },
                }),
                getMessageRules: (e) => ({
                    ...{ ...y(e), newline: { ...a().defaultRules.newline }, text: u.Ay, list: r.A, subtext: o.A },
                }),
            },
            renderChangelogMessageMarkup: function (e, t, n) {
                return {
                    hasSpoilerEmbeds: !1,
                    hasBailedAst: !1,
                    content: i.A.reactParserFor(x(t))(e.content, !1, null != n ? { changeLog: n } : {}),
                };
            },
        },
    ));
