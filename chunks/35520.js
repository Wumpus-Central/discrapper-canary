"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(791332),
    s = n.n(i),
    a = n(349288);
function o(e) {
    return (
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, t, n) {
                return (0, r.jsx)("p", { children: t(e.content, n) }, n.key);
            },
        }),
        (e.link = {
            ...e.link,
            react: function (e, t, n) {
                let i = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((i.onClick = t.onClick), (i.onContextMenu = t.onContextMenu)) : (i.onClick = t);
                }
                return (
                    null == i.onClick && (i.href = s().sanitizeUrl(e.target)),
                    (0, r.jsx)(a.Anchor, { title: e.title, ...i, children: t(e.content, n) }, n.key)
                );
            },
        }),
        e
    );
}
