n.d(t, { Y: () => r });
var i = n(36056);
function r(e, t, n) {
    if (t === n) return !0;
    if (!t || !n) return !1;
    for (let r of e.fields) {
        let e = r.localName,
            u = r.oneof ? t[r.oneof][e] : t[e],
            c = r.oneof ? n[r.oneof][e] : n[e];
        switch (r.kind) {
            case 'enum':
            case 'scalar':
                let d = 'enum' == r.kind ? i.wx.INT32 : r.T;
                if (!(r.repeat ? o(d, u, c) : s(d, u, c))) return !1;
                break;
            case 'map':
                if (!('message' == r.V.kind ? l(r.V.T(), a(u), a(c)) : o('enum' == r.V.kind ? i.wx.INT32 : r.V.T, a(u), a(c)))) return !1;
                break;
            case 'message':
                let f = r.T();
                if (!(r.repeat ? l(f, u, c) : f.equals(u, c))) return !1;
        }
    }
    return !0;
}
let a = Object.values;
function s(e, t, n) {
    if (t === n) return !0;
    if (e !== i.wx.BYTES) return !1;
    let r = t,
        a = n;
    if (r.length !== a.length) return !1;
    for (let e = 0; e < r.length; e++) if (r[e] != a[e]) return !1;
    return !0;
}
function o(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let i = 0; i < t.length; i++) if (!s(e, t[i], n[i])) return !1;
    return !0;
}
function l(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let i = 0; i < t.length; i++) if (!e.equals(t[i], n[i])) return !1;
    return !0;
}
