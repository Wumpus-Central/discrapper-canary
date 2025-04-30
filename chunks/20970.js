n.d(t, { j: () => E });
var r = n(477660);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { newline: l, paragraph: c, url: u, link: d, strong: f, u: _, br: p, em: h, image: m, text: g } = r.defaultRules,
    E = {
        newline: l,
        paragraph: c,
        url: u,
        link: s(o({}, d), {
            parse(e, t, n) {
                let r = d.parse(e, t, n);
                return (r.context = n.context), r;
            }
        }),
        strong: f,
        u: _,
        br: p,
        em: h,
        image: m,
        hook: {
            order: g.order,
            match: (0, r.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, t, n) {
                let { context: r } = n;
                return {
                    render: r[e[2]],
                    content: t(e[1], n)
                };
            },
            react: (e, t, n) => e.render(t(e.content, n), n.key)
        },
        noparse: {
            order: g.order,
            match: (0, r.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, t, n) {
                let { unsafeContext: r } = n,
                    i = r[e[1]];
                return (
                    'string' != typeof i && (i = null != i ? i.toString() : ''),
                    {
                        type: 'text',
                        content: i
                    }
                );
            },
            react: (e) => e.content
        },
        text: g
    };
