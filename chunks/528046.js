n.d(t, { k: () => o });
var i = n(581282),
    r = n(69122),
    a = n(36056),
    s = n(17146);
class o {
    constructor(e) {
        var t;
        this.fields = null !== (t = e.fields) && void 0 !== t ? t : [];
    }
    write(e, t) {
        let n = {},
            i = e;
        for (let e of this.fields) {
            if (!e.oneof) {
                let r = this.field(e, i[e.localName], t);
                void 0 !== r && (n[t.useProtoFieldName ? e.name : e.jsonName] = r);
                continue;
            }
            let r = i[e.oneof];
            if (r.oneofKind !== e.localName) continue;
            let a = 'scalar' == e.kind || 'enum' == e.kind ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 }) : t,
                o = this.field(e, r[e.localName], a);
            (0, s.hu)(void 0 !== o), (n[t.useProtoFieldName ? e.name : e.jsonName] = o);
        }
        return n;
    }
    field(e, t, n) {
        let i;
        if ('map' == e.kind) {
            (0, s.hu)('object' == typeof t && null !== t);
            let r = {};
            switch (e.V.kind) {
                case 'scalar':
                    for (let [n, i] of Object.entries(t)) {
                        let t = this.scalar(e.V.T, i, e.name, !1, !0);
                        (0, s.hu)(void 0 !== t), (r[n.toString()] = t);
                    }
                    break;
                case 'message':
                    let a = e.V.T();
                    for (let [i, o] of Object.entries(t)) {
                        let t = this.message(a, o, e.name, n);
                        (0, s.hu)(void 0 !== t), (r[i.toString()] = t);
                    }
                    break;
                case 'enum':
                    let o = e.V.T();
                    for (let [i, a] of Object.entries(t)) {
                        (0, s.hu)(void 0 === a || 'number' == typeof a);
                        let t = this.enum(o, a, e.name, !1, !0, n.enumAsInteger);
                        (0, s.hu)(void 0 !== t), (r[i.toString()] = t);
                    }
            }
            (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r);
        } else if (e.repeat) {
            (0, s.hu)(Array.isArray(t));
            let r = [];
            switch (e.kind) {
                case 'scalar':
                    for (let n = 0; n < t.length; n++) {
                        let i = this.scalar(e.T, t[n], e.name, e.opt, !0);
                        (0, s.hu)(void 0 !== i), r.push(i);
                    }
                    break;
                case 'enum':
                    let a = e.T();
                    for (let i = 0; i < t.length; i++) {
                        (0, s.hu)(void 0 === t[i] || 'number' == typeof t[i]);
                        let o = this.enum(a, t[i], e.name, e.opt, !0, n.enumAsInteger);
                        (0, s.hu)(void 0 !== o), r.push(o);
                    }
                    break;
                case 'message':
                    let o = e.T();
                    for (let i = 0; i < t.length; i++) {
                        let a = this.message(o, t[i], e.name, n);
                        (0, s.hu)(void 0 !== a), r.push(a);
                    }
            }
            (n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r);
        } else
            switch (e.kind) {
                case 'scalar':
                    i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case 'enum':
                    i = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case 'message':
                    i = this.message(e.T(), t, e.name, n);
            }
        return i;
    }
    enum(e, t, n, i, r, a) {
        if ('google.protobuf.NullValue' == e[0]) return null;
        if (void 0 === t) {
            (0, s.hu)(i);
            return;
        }
        if (0 !== t || r || i) return ((0, s.hu)('number' == typeof t), (0, s.hu)(Number.isInteger(t)), a || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t];
    }
    message(e, t, n, i) {
        return void 0 === t ? (i.emitDefaultValues ? null : void 0) : e.internalJsonWrite(t, i);
    }
    scalar(e, t, n, o, l) {
        if (void 0 === t) {
            (0, s.hu)(o);
            return;
        }
        let u = l || o;
        switch (e) {
            case a.wx.INT32:
            case a.wx.SFIXED32:
            case a.wx.SINT32:
                if (0 === t) return u ? 0 : void 0;
                return (0, s.ug)(t), t;
            case a.wx.FIXED32:
            case a.wx.UINT32:
                if (0 === t) return u ? 0 : void 0;
                return (0, s.fp)(t), t;
            case a.wx.FLOAT:
                (0, s.E_)(t);
            case a.wx.DOUBLE:
                if (0 === t) return u ? 0 : void 0;
                if (((0, s.hu)('number' == typeof t), Number.isNaN(t))) return 'NaN';
                if (t === Number.POSITIVE_INFINITY) return 'Infinity';
                if (t === Number.NEGATIVE_INFINITY) return '-Infinity';
                return t;
            case a.wx.STRING:
                if ('' === t) return u ? '' : void 0;
                return (0, s.hu)('string' == typeof t), t;
            case a.wx.BOOL:
                if (!1 === t) return !u && void 0;
                return (0, s.hu)('boolean' == typeof t), t;
            case a.wx.UINT64:
            case a.wx.FIXED64:
                (0, s.hu)('number' == typeof t || 'string' == typeof t || 'bigint' == typeof t);
                let c = r.p.from(t);
                if (c.isZero() && !u) return;
                return c.toString();
            case a.wx.INT64:
            case a.wx.SFIXED64:
            case a.wx.SINT64:
                (0, s.hu)('number' == typeof t || 'string' == typeof t || 'bigint' == typeof t);
                let d = r.M.from(t);
                if (d.isZero() && !u) return;
                return d.toString();
            case a.wx.BYTES:
                if (((0, s.hu)(t instanceof Uint8Array), !t.byteLength)) return u ? '' : void 0;
                return (0, i.m)(t);
        }
    }
}
