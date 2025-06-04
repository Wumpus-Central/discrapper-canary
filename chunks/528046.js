n.d(t, { k: () => s });
var r = n(581282),
    i = n(69122),
    a = n(36056),
    o = n(17146);
class s {
    constructor(e) {
        var t;
        this.fields = null != (t = e.fields) ? t : [];
    }
    write(e, t) {
        let n = {},
            r = e;
        for (let e of this.fields) {
            if (!e.oneof) {
                let i = this.field(e, r[e.localName], t);
                void 0 !== i && (n[t.useProtoFieldName ? e.name : e.jsonName] = i);
                continue;
            }
            let i = r[e.oneof];
            if (i.oneofKind !== e.localName) continue;
            let a = 'scalar' == e.kind || 'enum' == e.kind ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 }) : t,
                s = this.field(e, i[e.localName], a);
            (0, o.hu)(void 0 !== s), (n[t.useProtoFieldName ? e.name : e.jsonName] = s);
        }
        return n;
    }
    field(e, t, n) {
        let r;
        if ('map' == e.kind) {
            (0, o.hu)('object' == typeof t && null !== t);
            let i = {};
            switch (e.V.kind) {
                case 'scalar':
                    for (let [n, r] of Object.entries(t)) {
                        let t = this.scalar(e.V.T, r, e.name, !1, !0);
                        (0, o.hu)(void 0 !== t), (i[n.toString()] = t);
                    }
                    break;
                case 'message':
                    let a = e.V.T();
                    for (let [r, s] of Object.entries(t)) {
                        let t = this.message(a, s, e.name, n);
                        (0, o.hu)(void 0 !== t), (i[r.toString()] = t);
                    }
                    break;
                case 'enum':
                    let s = e.V.T();
                    for (let [r, a] of Object.entries(t)) {
                        (0, o.hu)(void 0 === a || 'number' == typeof a);
                        let t = this.enum(s, a, e.name, !1, !0, n.enumAsInteger);
                        (0, o.hu)(void 0 !== t), (i[r.toString()] = t);
                    }
            }
            (n.emitDefaultValues || Object.keys(i).length > 0) && (r = i);
        } else if (e.repeat) {
            (0, o.hu)(Array.isArray(t));
            let i = [];
            switch (e.kind) {
                case 'scalar':
                    for (let n = 0; n < t.length; n++) {
                        let r = this.scalar(e.T, t[n], e.name, e.opt, !0);
                        (0, o.hu)(void 0 !== r), i.push(r);
                    }
                    break;
                case 'enum':
                    let a = e.T();
                    for (let r = 0; r < t.length; r++) {
                        (0, o.hu)(void 0 === t[r] || 'number' == typeof t[r]);
                        let s = this.enum(a, t[r], e.name, e.opt, !0, n.enumAsInteger);
                        (0, o.hu)(void 0 !== s), i.push(s);
                    }
                    break;
                case 'message':
                    let s = e.T();
                    for (let r = 0; r < t.length; r++) {
                        let a = this.message(s, t[r], e.name, n);
                        (0, o.hu)(void 0 !== a), i.push(a);
                    }
            }
            (n.emitDefaultValues || i.length > 0 || n.emitDefaultValues) && (r = i);
        } else
            switch (e.kind) {
                case 'scalar':
                    r = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case 'enum':
                    r = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case 'message':
                    r = this.message(e.T(), t, e.name, n);
            }
        return r;
    }
    enum(e, t, n, r, i, a) {
        return 'google.protobuf.NullValue' == e[0] ? null : void 0 === t ? void (0, o.hu)(r) : 0 !== t || i || r ? (((0, o.hu)('number' == typeof t), (0, o.hu)(Number.isInteger(t)), a || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t]) : void 0;
    }
    message(e, t, n, r) {
        return void 0 === t ? (r.emitDefaultValues ? null : void 0) : e.internalJsonWrite(t, r);
    }
    scalar(e, t, n, s, l) {
        if (void 0 === t) return void (0, o.hu)(s);
        let c = l || s;
        switch (e) {
            case a.wx.INT32:
            case a.wx.SFIXED32:
            case a.wx.SINT32:
                if (0 === t) return c ? 0 : void 0;
                return (0, o.ug)(t), t;
            case a.wx.FIXED32:
            case a.wx.UINT32:
                if (0 === t) return c ? 0 : void 0;
                return (0, o.fp)(t), t;
            case a.wx.FLOAT:
                (0, o.E_)(t);
            case a.wx.DOUBLE:
                if (0 === t) return c ? 0 : void 0;
                if (((0, o.hu)('number' == typeof t), Number.isNaN(t))) return 'NaN';
                if (t === Number.POSITIVE_INFINITY) return 'Infinity';
                if (t === Number.NEGATIVE_INFINITY) return '-Infinity';
                return t;
            case a.wx.STRING:
                if ('' === t) return c ? '' : void 0;
                return (0, o.hu)('string' == typeof t), t;
            case a.wx.BOOL:
                if (!1 === t) return !c && void 0;
                return (0, o.hu)('boolean' == typeof t), t;
            case a.wx.UINT64:
            case a.wx.FIXED64:
                (0, o.hu)('number' == typeof t || 'string' == typeof t || 'bigint' == typeof t);
                let u = i.p.from(t);
                if (u.isZero() && !c) return;
                return u.toString();
            case a.wx.INT64:
            case a.wx.SFIXED64:
            case a.wx.SINT64:
                (0, o.hu)('number' == typeof t || 'string' == typeof t || 'bigint' == typeof t);
                let d = i.M.from(t);
                if (d.isZero() && !c) return;
                return d.toString();
            case a.wx.BYTES:
                if (((0, o.hu)(t instanceof Uint8Array), !t.byteLength)) return c ? '' : void 0;
                return (0, r.m)(t);
        }
    }
}
