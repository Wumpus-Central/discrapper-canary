let r;
n.r(t),
    n.d(t, {
        default: () => N,
        renderChangelogMessageMarkup: () => R,
    }),
    n(747238),
    n(812715);
var i = n(280230),
    a = n.n(i),
    s = n(873879),
    o = n(683412),
    l = n(704726),
    c = n(46054);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = a().defaultRules.lheading,
    h = a().defaultRules.heading,
    m = a().defaultRules.link,
    g = a().defaultRules.image,
    E = a().defaultRules.list,
    b = a().defaultRules.blockQuote,
    y = a().defaultRules.paragraph,
    O = /\{(.+?)}/,
    A = /^\$(\w+?)\$/;
r = n(482644);
let v = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, r) => {
            let i = O.exec(e[1]),
                s = e[1].replace(O, "");
            return (
                t && (s = s.toUpperCase()),
                {
                    className: null != i ? i[1] : null,
                    level: "=" === e[2] ? 1 : 2,
                    content: a().parseInline(n, s, r),
                }
            );
        };
    },
    S = (e) =>
        p(d({}, r.baseRules), {
            image: d({}, g, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
            link: d({}, m, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
            list: d({}, E, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
            interpolation: {
                order: l.Ay.order,
                match: (e) => A.exec(e),
                parse(e, t, n) {
                    let r = n.interpolations[e[1]];
                    return null == r
                        ? {
                              type: "text",
                              content: e[0],
                          }
                        : {
                              type: "interpolation",
                              renderer: r,
                          };
                },
                react: (e) => e.renderer(),
            },
            lheading: d(
                p(d({}, _), {
                    parse: v({
                        transformUpperCase: !0,
                    }),
                }),
                "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading,
            ),
            heading: d(
                {},
                h,
                "function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading,
            ),
            blockQuote: d(
                {},
                b,
                "function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote,
            ),
            paragraph: d(
                {},
                y,
                "function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph,
            ),
        }),
    I = (e) => ({
        lheading: d(
            p(d({}, _), {
                parse: v({
                    transformUpperCase: !1,
                }),
            }),
            "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading,
        ),
    }),
    T = (e) =>
        p(d({}, S(e)), {
            newline: d({}, a().defaultRules.newline),
            text: l.Ay,
            list: s.A,
            subtext: o.A,
        });

function C(e) {
    return d({}, S(e));
}
let N = {
    getDefaultRules: C,
    getSpecialRules: (e) => d({}, S(e), I(e)),
    getMessageRules: (e) => d({}, T(e)),
};

function R(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        hasBailedAst: !1,
        content: c.A.reactParserFor(C(t))(
            e.content,
            !1,
            null != n
                ? {
                      changeLog: n,
                  }
                : {},
        ),
    };
}
