"use strict";
n.d(t, { A: () => o }), n(321073);
var i = n(22098),
    r = n(820066);
let s = new Set(["line", "blockQuote"]),
    a = [];
function o(e, t, n) {
    if (r.VW.areStylesDisabled(e)) return [];
    let [o, u] = t;
    if (1 !== u.length || !r.AS.isInTypes(o, s)) return a;
    let { entries: c, serializedChildren: d } = r.cv.markdown(o, n, !0),
        _ = [];
    for (let t = 0; t < c.length; t++) {
        let n = c[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let s = c[t - 1],
                a = c[t + 1],
                o = { anchor: (0, i.Q)(e, u, d, n.start), focus: (0, i.Q)(e, u, d, n.start + n.text.length) },
                h = r.VW.nodes(e, { at: o, mode: "lowest", voids: !1 }),
                f = {};
            for (let e of n.attributes)
                if (((f[e] = !0), "syntaxBefore" === e && null != a))
                    for (let e of a.attributes) l(e) || (f[`before_${e}`] = !0);
                else if ("syntaxAfter" === e && null != s) for (let e of s.attributes) l(e) || (f[`after_${e}`] = !0);
            for (let [t, n] of h) {
                let t = { anchor: r.VW.start(e, n), focus: r.VW.end(e, n) };
                r.Kh.isBefore(t.anchor, o.anchor) && (t.anchor = o.anchor),
                    r.Kh.isAfter(t.focus, o.focus) && (t.focus = o.focus),
                    _.push({ ...f, ...t });
            }
        }
    }
    return _;
}
function l(e) {
    return "syntaxBefore" === e || "syntaxAfter" === e || e.startsWith("before_") || e.startsWith("after_");
}
