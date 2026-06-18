"use strict";
n.d(t, { k: () => s });
var i = n(627968);
n(64700);
var r = n(260612);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        let { color: s, ...a } = n,
            o = "currentColor";
        null != s && (o = "string" != typeof s && "css" in s ? s.css : s);
        let l = a.size ?? "md",
            u = (0, r.J)(l),
            c = {
                color: o,
                width: u?.width ?? a.width ?? 24,
                height: u?.height ?? a.height ?? 24,
                foreground: a.colorClass,
            };
        for (let [e, n] of Object.entries(t)) null != a[e] && (c[n] = a[e]);
        return (0, i.jsx)(e, { ...a, ...c });
    };
}
