let r;
n.r(t),
    n.d(t, {
        default: () => C,
        renderChangelogMessageMarkup: () => R,
    }),
    n(35282),
    n(704826);
var i = n(159635),
    o = n.n(i),
    a = n(800927),
    s = n(945884),
    l = n(594199),
    c = n(454585);
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
function _(e, t) {
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
let p = o().defaultRules.lheading,
    h = o().defaultRules.heading,
    m = o().defaultRules.link,
    g = o().defaultRules.image,
    E = o().defaultRules.list,
    b = o().defaultRules.blockQuote,
    y = o().defaultRules.paragraph,
    O = /\{(.+?)}/,
    v = /^\$(\w+?)\$/;
r = n(235375);
let I = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, r) => {
            let i = O.exec(e[1]),
                a = e[1].replace(O, "");
            return (
                t && (a = a.toUpperCase()),
                {
                    className: null != i ? i[1] : null,
                    level: "=" === e[2] ? 1 : 2,
                    content: o().parseInline(n, a, r),
                }
            );
        };
    },
    T = (e) =>
        _(d({}, r.baseRules), {
            image: d({}, g, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
            link: d({}, m, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
            list: d({}, E, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
            interpolation: {
                order: l.ZP.order,
                match: (e) => v.exec(e),
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
                _(d({}, p), { parse: I({ transformUpperCase: !0 }) }),
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
    S = (e) => ({
        lheading: d(
            _(d({}, p), { parse: I({ transformUpperCase: !1 }) }),
            "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading,
        ),
    }),
    A = (e) =>
        _(d({}, T(e)), {
            newline: d({}, o().defaultRules.newline),
            text: l.ZP,
            list: a.Z,
            subtext: s.Z,
        });
function N(e) {
    return d({}, T(e));
}
let C = {
    getDefaultRules: N,
    getSpecialRules: (e) => d({}, T(e), S(e)),
    getMessageRules: (e) => d({}, A(e)),
};
function R(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        content: c.Z.reactParserFor(N(t))(e.content, !1, null != n ? { changeLog: n } : {}),
    };
}
