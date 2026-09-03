n.d(t, { A: () => a }), n(321073);
var l = n(22098),
    i = n(820066);
let s = new Set(["line", "blockQuote"]),
    r = [];
function a(e, t, n) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [a, u] = t;
    if (1 !== u.length || !i.AS.isInTypes(a, s)) return r;
    let { entries: c, serializedChildren: d } = i.cv.markdown(a, n, !0),
        h = [];
    for (let t = 0; t < c.length; t++) {
        let n = c[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let s = c[t - 1],
                r = c[t + 1],
                a = { anchor: (0, l.Q)(e, u, d, n.start), focus: (0, l.Q)(e, u, d, n.start + n.text.length) },
                m = i.VW.nodes(e, { at: a, mode: "lowest", voids: !1 }),
                f = {};
            for (let e of n.attributes)
                if (((f[e] = !0), "syntaxBefore" === e && null != r))
                    for (let e of r.attributes) o(e) || (f[`before_${e}`] = !0);
                else if ("syntaxAfter" === e && null != s) for (let e of s.attributes) o(e) || (f[`after_${e}`] = !0);
            for (let [t, n] of m) {
                let t = { anchor: i.VW.start(e, n), focus: i.VW.end(e, n) };
                i.Kh.isBefore(t.anchor, a.anchor) && (t.anchor = a.anchor),
                    i.Kh.isAfter(t.focus, a.focus) && (t.focus = a.focus),
                    h.push({ ...f, ...t });
            }
        }
    }
    return h;
}
function o(e) {
    return "syntaxBefore" === e || "syntaxAfter" === e || e.startsWith("before_") || e.startsWith("after_");
}
