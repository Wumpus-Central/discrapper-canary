"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(791332);
function a(e) {
    return (
        (e.heading = i.defaultRules.heading),
        (e.lheading = i.defaultRules.lheading),
        (e.list = i.defaultRules.list),
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, t, n) {
                return (0, r.jsx)("p", { children: t(e.content, n) }, n.key);
            },
        }),
        (e.link = {
            ...e.link,
            react: function (e, t, n) {
                let a = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((a.onClick = t.onClick), (a.onContextMenu = t.onContextMenu)) : (a.onClick = t);
                }
                return (
                    null == a.onClick && ((a.href = (0, i.sanitizeUrl)(e.target) ?? void 0), (a.target = "_blank")),
                    (0, r.jsx)("a", { title: e.title, ...a, rel: "noreferrer", children: t(e.content, n) }, n.key)
                );
            },
        }),
        e
    );
}
