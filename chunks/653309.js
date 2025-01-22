r.d(n, {
    U: function () {
        return h;
    },
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(390547);
var o = r(411104);
var s = r(200651);
r(192379);
var l = r(120356),
    u = r.n(l),
    c = r(887490),
    d = r(982862),
    f = r(223979),
    p = r(354431);
let h = {
    strong: d.bold,
    em: d.italics,
    u: d.underline,
    s: d.strikethrough,
    inlineCode: d.inlineCode,
    link: d.fakeLink,
    url: d.fakeLink,
    autolink: d.fakeLink,
    silentPrefix: d.fakeLink,
    spoiler: u()(p.spoilerContent, p.spoilerMarkdownContent, p.obscuredTextContent, d.spoiler),
    staticRouteLink: d.fakeLink,
    syntaxBefore: d.syntaxBefore,
    syntaxAfter: d.syntaxAfter,
    codeBlockText: d.codeBlockText,
    codeBlockSyntax: d.codeBlockSyntax,
    codeBlockLang: d.codeBlockLang,
    subtext: d.subtext
};
function _(e, n) {
    let r;
    let { attributes: i, children: a, leaf: o, text: l } = n,
        p = !1,
        [_] = c.bN.node(e, c.C0.parent(c.bN.findPath(e, l)));
    switch (c.bN.isEditor(_) ? 'editor' : _.type) {
        case 'line':
        case 'blockQuote': {
            p = void 0;
            let e = Object.entries(o)
                .filter((e) => {
                    let [n] = e;
                    return 'text' !== n;
                })
                .flatMap((e) => {
                    let [n, r] = e;
                    if ('hljsTypes' === n) return r;
                    if (!0 === r) {
                        if ((('codeBlockLang' === n || 'codeBlockSyntax' === n) && (p = !1), n.startsWith('before_') || n.startsWith('after_'))) return [d[n]];
                        if (n in h) return [h[n]];
                        throw Error('Slate: Unknown decoration attribute: '.concat(n));
                    }
                })
                .filter((e) => null != e)
                .join(' ');
            r = u()(e, { [d.syntaxOverride]: '||' === o.text || '\\' === o.text });
        }
    }
    return (
        (r = u()(r, { [f.emptyText]: '' === l.text })),
        (0, s.jsx)('span', {
            ...i,
            className: r,
            spellCheck: p,
            children: a
        })
    );
}
