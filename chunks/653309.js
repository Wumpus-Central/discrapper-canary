r.d(n, {
    U: function () {
        return h;
    },
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(390547);
var s = r(411104);
var o = r(200651);
r(192379);
var l = r(120356),
    u = r.n(l),
    c = r(887490),
    d = r(982862),
    f = r(223979),
    _ = r(354431);
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
    spoiler: u()(_.spoilerContent, _.spoilerMarkdownContent, _.obscuredTextContent, d.spoiler),
    staticRouteLink: d.fakeLink,
    syntaxBefore: d.syntaxBefore,
    syntaxAfter: d.syntaxAfter,
    codeBlockText: d.codeBlockText,
    codeBlockSyntax: d.codeBlockSyntax,
    codeBlockLang: d.codeBlockLang,
    subtext: d.subtext
};
function p(e, n) {
    let r;
    let { attributes: i, children: a, leaf: s, text: l } = n,
        _ = !1,
        [p] = c.bN.node(e, c.C0.parent(c.bN.findPath(e, l)));
    switch (c.bN.isEditor(p) ? 'editor' : p.type) {
        case 'line':
        case 'blockQuote': {
            _ = void 0;
            let e = Object.entries(s)
                .filter((e) => {
                    let [n] = e;
                    return 'text' !== n;
                })
                .flatMap((e) => {
                    let [n, r] = e;
                    if ('hljsTypes' === n) return r;
                    if (!0 === r) {
                        if ((('codeBlockLang' === n || 'codeBlockSyntax' === n) && (_ = !1), n.startsWith('before_') || n.startsWith('after_'))) return [d[n]];
                        if (n in h) return [h[n]];
                        throw Error('Slate: Unknown decoration attribute: '.concat(n));
                    }
                })
                .filter((e) => null != e)
                .join(' ');
            r = u()(e, { [d.syntaxOverride]: '||' === s.text || '\\' === s.text });
        }
    }
    return (
        (r = u()(r, { [f.emptyText]: '' === l.text })),
        (0, o.jsx)('span', {
            ...i,
            className: r,
            spellCheck: _,
            children: a
        })
    );
}
