"use strict";
n.d(t, { A: () => d, Y: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(711371),
    o = n(675841),
    l = n(562650),
    u = n(388963);
let c = {
    strong: o.bold,
    em: o.italics,
    u: o.underline,
    s: o.strikethrough,
    inlineCode: o.inlineCode,
    link: o.fakeLink,
    url: o.fakeLink,
    autolink: o.fakeLink,
    silentPrefix: o.fakeLink,
    spoiler: s()(u.ur, u.F0, u.kx, o.spoiler),
    staticRouteLink: o.fakeLink,
    syntaxBefore: o.syntaxBefore,
    syntaxAfter: o.syntaxAfter,
    codeBlockText: o.codeBlockText,
    codeBlockSyntax: o.codeBlockSyntax,
    codeBlockLang: o.codeBlockLang,
    subtext: o.subtext,
    mentionSuggestion: l.Z2,
    mentionSuggestionSimpleColorVariant: l.xD,
};
function d(e, t) {
    let n,
        { attributes: i, children: u, leaf: d, text: _ } = t,
        f = !1,
        [p] = a.VW.node(e, a.PW.parent(a.VW.findPath(e, _)));
    switch (a.VW.isEditor(p) ? "editor" : p.type) {
        case "line":
        case "blockQuote": {
            f = void 0;
            let e = Object.entries(d)
                .filter((e) => {
                    let [t] = e;
                    return "text" !== t;
                })
                .flatMap((e) => {
                    let [t, n] = e;
                    if ("hljsTypes" === t) return n;
                    if (!0 === n) {
                        if (
                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (f = !1),
                            t.startsWith("before_") || t.startsWith("after_"))
                        )
                            return [o[t]];
                        if (t in c) return [c[t]];
                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                    }
                })
                .filter((e) => null != e)
                .join(" ");
            n = s()(e, { [o.syntaxOverride]: "||" === d.text || "\\" === d.text });
        }
    }
    return (
        (n = s()(n, { [l.BI]: "" === _.text })), (0, r.jsx)("span", { ...i, className: n, spellCheck: f, children: u })
    );
}
