n.d(t, {
    U: () => p,
    Z: () => h
}),
    n(47120),
    n(13667),
    n(390547),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(887490),
    s = n(227473),
    l = n(112360),
    c = n(703803);
function u(e, t, n) {
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
function d(e) {
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
let p = {
    strong: s.bold,
    em: s.italics,
    u: s.underline,
    s: s.strikethrough,
    inlineCode: s.inlineCode,
    link: s.fakeLink,
    url: s.fakeLink,
    autolink: s.fakeLink,
    silentPrefix: s.fakeLink,
    spoiler: o()(c.spoilerContent, c.spoilerMarkdownContent, c.obscuredTextContent, s.spoiler),
    staticRouteLink: s.fakeLink,
    syntaxBefore: s.syntaxBefore,
    syntaxAfter: s.syntaxAfter,
    codeBlockText: s.codeBlockText,
    codeBlockSyntax: s.codeBlockSyntax,
    codeBlockLang: s.codeBlockLang,
    subtext: s.subtext
};
function h(e, t) {
    let n,
        { attributes: i, children: c, leaf: u, text: f } = t,
        h = !1,
        [m] = a.bN.node(e, a.C0.parent(a.bN.findPath(e, f)));
    switch (a.bN.isEditor(m) ? 'editor' : m.type) {
        case 'line':
        case 'blockQuote': {
            h = void 0;
            let e = Object.entries(u)
                .filter((e) => {
                    let [t] = e;
                    return 'text' !== t;
                })
                .flatMap((e) => {
                    let [t, n] = e;
                    if ('hljsTypes' === t) return n;
                    if (!0 === n) {
                        if ((('codeBlockLang' === t || 'codeBlockSyntax' === t) && (h = !1), t.startsWith('before_') || t.startsWith('after_'))) return [s[t]];
                        if (t in p) return [p[t]];
                        throw Error('Slate: Unknown decoration attribute: '.concat(t));
                    }
                })
                .filter((e) => null != e)
                .join(' ');
            n = o()(e, { [s.syntaxOverride]: '||' === u.text || '\\' === u.text });
        }
    }
    return (
        (n = o()(n, { [l.emptyText]: '' === f.text })),
        (0, r.jsx)(
            'span',
            _(d({}, i), {
                className: n,
                spellCheck: h,
                children: c
            })
        )
    );
}
