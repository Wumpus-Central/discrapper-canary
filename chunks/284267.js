r.d(n, {
    Y: function () {
        return a;
    }
});
var i = r(36056);
function a(e, n, r) {
    if (n === r) return !0;
    if (!n || !r) return !1;
    for (let a of e.fields) {
        let e = a.localName,
            c = a.oneof ? n[a.oneof][e] : n[e],
            d = a.oneof ? r[a.oneof][e] : r[e];
        switch (a.kind) {
            case 'enum':
            case 'scalar':
                let f = 'enum' == a.kind ? i.wx.INT32 : a.T;
                if (!(a.repeat ? l(f, c, d) : s(f, c, d))) return !1;
                break;
            case 'map':
                if (!('message' == a.V.kind ? u(a.V.T(), o(c), o(d)) : l('enum' == a.V.kind ? i.wx.INT32 : a.V.T, o(c), o(d)))) return !1;
                break;
            case 'message':
                let p = a.T();
                if (!(a.repeat ? u(p, c, d) : p.equals(c, d))) return !1;
        }
    }
    return !0;
}
let o = Object.values;
function s(e, n, r) {
    if (n === r) return !0;
    if (e !== i.wx.BYTES) return !1;
    let a = n,
        o = r;
    if (a.length !== o.length) return !1;
    for (let e = 0; e < a.length; e++) if (a[e] != o[e]) return !1;
    return !0;
}
function l(e, n, r) {
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++) if (!s(e, n[i], r[i])) return !1;
    return !0;
}
function u(e, n, r) {
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++) if (!e.equals(n[i], r[i])) return !1;
    return !0;
}
