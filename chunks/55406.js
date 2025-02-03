let i;
n.r(t),
    n.d(t, {
        default: () => S,
        renderChangelogMessageMarkup: () => A
    }),
    n(757143);
var r = n(477660),
    a = n.n(r),
    s = n(800927),
    o = n(945884),
    l = n(594199),
    u = n(454585);
let c = a().defaultRules.lheading,
    d = a().defaultRules.heading,
    f = a().defaultRules.link,
    _ = a().defaultRules.image,
    p = a().defaultRules.list,
    h = a().defaultRules.blockQuote,
    m = a().defaultRules.paragraph,
    g = /\{(.+?)}/,
    E = /^\$(\w+?)\$/;
i = n(235375);
let v = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, i) => {
            let r = g.exec(e[1]),
                s = e[1].replace(g, '');
            return (
                t && (s = s.toUpperCase()),
                {
                    className: null != r ? r[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: a().parseInline(n, s, i)
                }
            );
        };
    },
    y = (e) => ({
        ...i.baseRules,
        image: {
            ..._,
            ...('function' == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image)
        },
        link: {
            ...f,
            ...('function' == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link)
        },
        list: {
            ...p,
            ...('function' == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list)
        },
        interpolation: {
            order: l.ZP.order,
            match: (e) => E.exec(e),
            parse(e, t, n) {
                let i = n.interpolations[e[1]];
                return null == i
                    ? {
                          type: 'text',
                          content: e[0]
                      }
                    : {
                          type: 'interpolation',
                          renderer: i
                      };
            },
            react: (e) => e.renderer()
        },
        lheading: {
            ...c,
            parse: v({ transformUpperCase: !0 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        },
        heading: {
            ...d,
            ...('function' == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading)
        },
        blockQuote: {
            ...h,
            ...('function' == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote)
        },
        paragraph: {
            ...m,
            ...('function' == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph)
        }
    }),
    I = (e) => ({
        lheading: {
            ...c,
            parse: v({ transformUpperCase: !1 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        }
    }),
    b = (e) => ({
        ...y(e),
        newline: { ...a().defaultRules.newline },
        text: l.ZP,
        list: s.Z,
        subtext: o.Z
    });
function T(e) {
    return { ...y(e) };
}
let S = {
    getDefaultRules: T,
    getSpecialRules: (e) => ({
        ...y(e),
        ...I(e)
    }),
    getMessageRules: (e) => ({ ...b(e) })
};
function A(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        content: u.Z.reactParserFor(T(t))(e.content, !1, null != n ? { changeLog: n } : {})
    };
}
