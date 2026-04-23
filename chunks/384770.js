"use strict";
n.d(t, { F: () => i });
var r = n(124651);
function i(e, t, n) {
    if (t === n) return !0;
    if (!t || !n) return !1;
    for (let i of e.fields) {
        let e = i.localName,
            u = i.oneof ? t[i.oneof][e] : t[e],
            c = i.oneof ? n[i.oneof][e] : n[e];
        switch (i.kind) {
            case "enum":
            case "scalar":
                let d = "enum" == i.kind ? r.LN.INT32 : i.T;
                if (!(i.repeat ? o(d, u, c) : a(d, u, c))) return !1;
                break;
            case "map":
                if (
                    !("message" == i.V.kind
                        ? l(i.V.T(), s(u), s(c))
                        : o("enum" == i.V.kind ? r.LN.INT32 : i.V.T, s(u), s(c)))
                )
                    return !1;
                break;
            case "message":
                let _ = i.T();
                if (!(i.repeat ? l(_, u, c) : _.equals(u, c))) return !1;
        }
    }
    return !0;
}
let s = Object.values;
function a(e, t, n) {
    if (t === n) return !0;
    if (e !== r.LN.BYTES || t.length !== n.length) return !1;
    for (let e = 0; e < t.length; e++) if (t[e] != n[e]) return !1;
    return !0;
}
function o(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (!a(e, t[r], n[r])) return !1;
    return !0;
}
function l(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (!e.equals(t[r], n[r])) return !1;
    return !0;
}
