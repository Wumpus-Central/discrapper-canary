"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(22098),
    i = n(711371);
let s = new Set(["line", "blockQuote"]),
    a = [];
function o(e, t, n) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [o, l] = t;
    if (1 !== l.length || !i.AS.isInTypes(o, s)) return a;
    let { entries: u, serializedChildren: c } = i.cv.markdown(o, n, !0),
        d = [];
    for (let t = 0; t < u.length; t++) {
        let n = u[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let s = u[t - 1],
                a = u[t + 1],
                o = { anchor: (0, r.Q)(e, l, c, n.start), focus: (0, r.Q)(e, l, c, n.start + n.text.length) },
                _ = i.VW.nodes(e, { at: o, mode: "lowest", voids: !1 }),
                f = {};
            for (let e of n.attributes)
                if (((f[e] = !0), "syntaxBefore" === e && null != a)) for (let e of a.attributes) f[`before_${e}`] = !0;
                else if ("syntaxAfter" === e && null != s) for (let e of s.attributes) f[`after_${e}`] = !0;
            for (let [t, n] of _) {
                let t = { anchor: i.VW.start(e, n), focus: i.VW.end(e, n) };
                i.Kh.isBefore(t.anchor, o.anchor) && (t.anchor = o.anchor),
                    i.Kh.isAfter(t.focus, o.focus) && (t.focus = o.focus),
                    d.push({ ...f, ...t });
            }
        }
    }
    return d;
}
