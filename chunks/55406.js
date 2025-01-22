let i;
r.d(n, {
    n: function () {
        return C;
    }
});
var a = r(757143);
var o = r(477660),
    s = r.n(o),
    l = r(800927),
    u = r(945884),
    c = r(594199),
    d = r(454585);
let f = s().defaultRules.lheading,
    p = s().defaultRules.heading,
    h = s().defaultRules.link,
    _ = s().defaultRules.image,
    m = s().defaultRules.list,
    g = s().defaultRules.blockQuote,
    E = s().defaultRules.paragraph,
    v = /\{(.+?)}/,
    y = /^\$(\w+?)\$/;
i = r(235375);
let b = (e) => {
        let { transformUpperCase: n = !1 } = e;
        return (e, r, i) => {
            let a = v.exec(e[1]),
                o = e[1].replace(v, '');
            return (
                n && (o = o.toUpperCase()),
                {
                    className: null != a ? a[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: s().parseInline(r, o, i)
                }
            );
        };
    },
    I = (e) => ({
        ...i.baseRules,
        image: {
            ..._,
            ...('function' == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image)
        },
        link: {
            ...h,
            ...('function' == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link)
        },
        list: {
            ...m,
            ...('function' == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list)
        },
        interpolation: {
            order: c.ZP.order,
            match: (e) => y.exec(e),
            parse(e, n, r) {
                let i = r.interpolations[e[1]];
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
            ...f,
            parse: b({ transformUpperCase: !0 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        },
        heading: {
            ...p,
            ...('function' == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading)
        },
        blockQuote: {
            ...g,
            ...('function' == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote)
        },
        paragraph: {
            ...E,
            ...('function' == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph)
        }
    }),
    T = (e) => ({
        lheading: {
            ...f,
            parse: b({ transformUpperCase: !1 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        }
    }),
    S = (e) => ({
        ...I(e),
        newline: { ...s().defaultRules.newline },
        text: c.ZP,
        list: l.Z,
        subtext: u.Z
    });
function A(e) {
    return { ...I(e) };
}
function C(e, n, r) {
    return {
        hasSpoilerEmbeds: !1,
        content: d.Z.reactParserFor(A(n))(e.content, !1, null != r ? { changeLog: r } : {})
    };
}
n.Z = {
    getDefaultRules: A,
    getSpecialRules: (e) => ({
        ...I(e),
        ...T(e)
    }),
    getMessageRules: (e) => ({ ...S(e) })
};
