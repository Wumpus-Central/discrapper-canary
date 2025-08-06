n.d(t, { Y: () => i });
var r = n(36056);
function i(e, t, n) {
    if (t === n) return !0;
    if (!t || !n) return !1;
    for (let i of e.fields) {
        let e = i.localName,
            c = i.oneof ? t[i.oneof][e] : t[e],
            u = i.oneof ? n[i.oneof][e] : n[e];
        switch (i.kind) {
            case 'enum':
            case 'scalar':
                let d = 'enum' == i.kind ? r.wx.INT32 : i.T;
                if (!(i.repeat ? s(d, c, u) : a(d, c, u))) return !1;
                break;
            case 'map':
                if (!('message' == i.V.kind ? l(i.V.T(), o(c), o(u)) : s('enum' == i.V.kind ? r.wx.INT32 : i.V.T, o(c), o(u)))) return !1;
                break;
            case 'message':
                let f = i.T();
                if (!(i.repeat ? l(f, c, u) : f.equals(c, u))) return !1;
        }
    }
    return !0;
}
let o = Object.values;
function a(e, t, n) {
    if (t === n) return !0;
    if (e !== r.wx.BYTES) return !1;
    let i = t,
        o = n;
    if (i.length !== o.length) return !1;
    for (let e = 0; e < i.length; e++) if (i[e] != o[e]) return !1;
    return !0;
}
function s(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (!a(e, t[r], n[r])) return !1;
    return !0;
}
function l(e, t, n) {
    if (t.length !== n.length) return !1;
    for (let r = 0; r < t.length; r++) if (!e.equals(t[r], n[r])) return !1;
    return !0;
}
