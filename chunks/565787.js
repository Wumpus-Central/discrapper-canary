"use strict";
n.d(t, { k: () => a });
var r = n(627968);
n(64700);
var i = n(260612);
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
        let { color: a, ...s } = n,
            o = "currentColor";
        null != a && (o = "string" != typeof a && "css" in a ? a.css : a);
        let l = s.size ?? "md",
            u = (0, i.J)(l),
            c = {
                color: o,
                width: u?.width ?? s.width ?? 24,
                height: u?.height ?? s.height ?? 24,
                foreground: s.colorClass,
            };
        for (let [e, n] of Object.entries(t)) null != s[e] && (c[n] = s[e]);
        return (0, r.jsx)(e, { ...s, ...c });
    };
};
