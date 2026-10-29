(n.d(t, { A: () => a, B: () => o }), n(321073));
var l = n(22098),
    i = n(820066);
let r = new Set(["line", "blockQuote"]),
    s = [];
function a(e, t, n) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [l, a] = t;
    if (1 !== a.length || !i.AS.isInTypes(l, r)) return s;
    let { entries: u, serializedChildren: c } = i.cv.markdown(l, n, !0);
    return o(e, a, c, u);
}
function o(e, t, n, r) {
    let s = [];
    for (let a = 0; a < r.length; a++) {
        let o = r[a];
        if (o.attributes.length > 0 && o.text.length > 0) {
            let c = r[a - 1],
                d = r[a + 1],
                h = { anchor: (0, l.Q)(e, t, n, o.start), focus: (0, l.Q)(e, t, n, o.start + o.text.length) },
                m = i.VW.nodes(e, { at: h, mode: "lowest", voids: !1 }),
                f = {};
            for (let e of o.attributes)
                if (((f[e] = !0), "syntaxBefore" === e && null != d))
                    for (let e of d.attributes) u(e) || (f[`before_${e}`] = !0);
                else if ("syntaxAfter" === e && null != c) for (let e of c.attributes) u(e) || (f[`after_${e}`] = !0);
            for (let [t, n] of m) {
                let t = { anchor: i.VW.start(e, n), focus: i.VW.end(e, n) };
                (i.Kh.isBefore(t.anchor, h.anchor) && (t.anchor = h.anchor),
                    i.Kh.isAfter(t.focus, h.focus) && (t.focus = h.focus),
                    s.push({ ...f, ...t }));
            }
        }
    }
    return s;
}
function u(e) {
    return "syntaxBefore" === e || "syntaxAfter" === e || e.startsWith("before_") || e.startsWith("after_");
}
