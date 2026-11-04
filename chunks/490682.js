n(321073);
var l = n(22098),
    i = n(339200);
let r = new Set(["line", "blockQuote"]),
    s = [];
function a(e, t, n, r) {
    let s = [];
    for (let a = 0; a < r.length; a++) {
        let u = r[a];
        if (u.attributes.length > 0 && u.text.length > 0) {
            let c = r[a - 1],
                d = r[a + 1],
                h = { anchor: (0, l.Q)(e, t, n, u.start), focus: (0, l.Q)(e, t, n, u.start + u.text.length) },
                m = i.VW.nodes(e, { at: h, mode: "lowest", voids: !1 }),
                f = {};
            for (let e of u.attributes)
                if (((f[e] = !0), "syntaxBefore" === e && null != d))
                    for (let e of d.attributes) o(e) || (f[`before_${e}`] = !0);
                else if ("syntaxAfter" === e && null != c) for (let e of c.attributes) o(e) || (f[`after_${e}`] = !0);
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
function o(e) {
    return "syntaxBefore" === e || "syntaxAfter" === e || e.startsWith("before_") || e.startsWith("after_");
}
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            if (i.VW.areStylesDisabled(e)) return [];
            let [l, o] = t;
            if (1 !== o.length || !i.AS.isInTypes(l, r)) return s;
            let { entries: u, serializedChildren: c } = i.cv.markdown(l, n, !0);
            return a(e, o, c, u);
        },
        B: a,
    },
);
