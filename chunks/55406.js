let a;
n.r(t),
    n.d(t, {
        default: () => y,
        renderChangelogMessageMarkup: () => N
    }),
    n(757143);
var o = n(477660),
    i = n.n(o),
    r = n(800927),
    s = n(945884),
    l = n(594199),
    c = n(454585);
let u = i().defaultRules.lheading,
    d = i().defaultRules.heading,
    p = i().defaultRules.link,
    m = i().defaultRules.image,
    g = i().defaultRules.list,
    _ = i().defaultRules.blockQuote,
    h = i().defaultRules.paragraph,
    f = /\{(.+?)}/,
    C = /^\$(\w+?)\$/;
a = n(235375);
let x = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, a) => {
            let o = f.exec(e[1]),
                r = e[1].replace(f, '');
            return (
                t && (r = r.toUpperCase()),
                {
                    className: null != o ? o[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: i().parseInline(n, r, a)
                }
            );
        };
    },
    v = (e) => ({
        ...a.baseRules,
        image: {
            ...m,
            ...('function' == typeof a.customRules.image ? a.customRules.image(e) : a.customRules.image)
        },
        link: {
            ...p,
            ...('function' == typeof a.customRules.link ? a.customRules.link(e) : a.customRules.link)
        },
        list: {
            ...g,
            ...('function' == typeof a.customRules.list ? a.customRules.list(e) : a.customRules.list)
        },
        interpolation: {
            order: l.ZP.order,
            match: (e) => C.exec(e),
            parse(e, t, n) {
                let a = n.interpolations[e[1]];
                return null == a
                    ? {
                          type: 'text',
                          content: e[0]
                      }
                    : {
                          type: 'interpolation',
                          renderer: a
                      };
            },
            react: (e) => e.renderer()
        },
        lheading: {
            ...u,
            parse: x({ transformUpperCase: !0 }),
            ...('function' == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading)
        },
        heading: {
            ...d,
            ...('function' == typeof a.customRules.heading ? a.customRules.heading(e) : a.customRules.heading)
        },
        blockQuote: {
            ..._,
            ...('function' == typeof a.customRules.blockQuote ? a.customRules.blockQuote(e) : a.customRules.blockQuote)
        },
        paragraph: {
            ...h,
            ...('function' == typeof a.customRules.paragraph ? a.customRules.paragraph(e) : a.customRules.paragraph)
        }
    }),
    b = (e) => ({
        lheading: {
            ...u,
            parse: x({ transformUpperCase: !1 }),
            ...('function' == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading)
        }
    }),
    T = (e) => ({
        ...v(e),
        newline: { ...i().defaultRules.newline },
        text: l.ZP,
        list: r.Z,
        subtext: s.Z
    });
function I(e) {
    return { ...v(e) };
}
let y = {
    getDefaultRules: I,
    getSpecialRules: (e) => ({
        ...v(e),
        ...b(e)
    }),
    getMessageRules: (e) => ({ ...T(e) })
};
function N(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        content: c.Z.reactParserFor(I(t))(e.content, !1, null != n ? { changeLog: n } : {})
    };
}
