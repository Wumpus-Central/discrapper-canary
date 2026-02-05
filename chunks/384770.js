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
                if (!(i.repeat ? o(d, u, c) : s(d, u, c))) return !1;
                break;
            case "map":
                if (
                    !("message" == i.V.kind
                        ? l(i.V.T(), a(u), a(c))
                        : o("enum" == i.V.kind ? r.LN.INT32 : i.V.T, a(u), a(c)))
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
let a = Object.values;
function s(e, t, n) {
    if (t === n) return !0;
    if (e !== r.LN.BYTES) return !1;
    let i = t,
        a = n;
    if (i.length !== a.length) return !1;
    for (let e = 0; e < i.length; e++) if (i[e] != a[e]) return !1;
    return !0;
}
function o(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (!s(e, t[r], n[r])) return !1;
    return !0;
}
function l(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (!e.equals(t[r], n[r])) return !1;
    return !0;
}
