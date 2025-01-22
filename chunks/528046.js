r.d(n, {
    k: function () {
        return l;
    }
});
var i = r(581282),
    a = r(69122),
    o = r(36056),
    s = r(17146);
class l {
    constructor(e) {
        var n;
        this.fields = null !== (n = e.fields) && void 0 !== n ? n : [];
    }
    write(e, n) {
        let r = {},
            i = e;
        for (let e of this.fields) {
            if (!e.oneof) {
                let a = this.field(e, i[e.localName], n);
                void 0 !== a && (r[n.useProtoFieldName ? e.name : e.jsonName] = a);
                continue;
            }
            let a = i[e.oneof];
            if (a.oneofKind !== e.localName) continue;
            let o = 'scalar' == e.kind || 'enum' == e.kind ? Object.assign(Object.assign({}, n), { emitDefaultValues: !0 }) : n,
                l = this.field(e, a[e.localName], o);
            (0, s.hu)(void 0 !== l), (r[n.useProtoFieldName ? e.name : e.jsonName] = l);
        }
        return r;
    }
    field(e, n, r) {
        let i;
        if ('map' == e.kind) {
            (0, s.hu)('object' == typeof n && null !== n);
            let a = {};
            switch (e.V.kind) {
                case 'scalar':
                    for (let [r, i] of Object.entries(n)) {
                        let n = this.scalar(e.V.T, i, e.name, !1, !0);
                        (0, s.hu)(void 0 !== n), (a[r.toString()] = n);
                    }
                    break;
                case 'message':
                    let o = e.V.T();
                    for (let [i, l] of Object.entries(n)) {
                        let n = this.message(o, l, e.name, r);
                        (0, s.hu)(void 0 !== n), (a[i.toString()] = n);
                    }
                    break;
                case 'enum':
                    let l = e.V.T();
                    for (let [i, o] of Object.entries(n)) {
                        (0, s.hu)(void 0 === o || 'number' == typeof o);
                        let n = this.enum(l, o, e.name, !1, !0, r.enumAsInteger);
                        (0, s.hu)(void 0 !== n), (a[i.toString()] = n);
                    }
            }
            (r.emitDefaultValues || Object.keys(a).length > 0) && (i = a);
        } else if (e.repeat) {
            (0, s.hu)(Array.isArray(n));
            let a = [];
            switch (e.kind) {
                case 'scalar':
                    for (let r = 0; r < n.length; r++) {
                        let i = this.scalar(e.T, n[r], e.name, e.opt, !0);
                        (0, s.hu)(void 0 !== i), a.push(i);
                    }
                    break;
                case 'enum':
                    let o = e.T();
                    for (let i = 0; i < n.length; i++) {
                        (0, s.hu)(void 0 === n[i] || 'number' == typeof n[i]);
                        let l = this.enum(o, n[i], e.name, e.opt, !0, r.enumAsInteger);
                        (0, s.hu)(void 0 !== l), a.push(l);
                    }
                    break;
                case 'message':
                    let l = e.T();
                    for (let i = 0; i < n.length; i++) {
                        let o = this.message(l, n[i], e.name, r);
                        (0, s.hu)(void 0 !== o), a.push(o);
                    }
            }
            (r.emitDefaultValues || a.length > 0 || r.emitDefaultValues) && (i = a);
        } else
            switch (e.kind) {
                case 'scalar':
                    i = this.scalar(e.T, n, e.name, e.opt, r.emitDefaultValues);
                    break;
                case 'enum':
                    i = this.enum(e.T(), n, e.name, e.opt, r.emitDefaultValues, r.enumAsInteger);
                    break;
                case 'message':
                    i = this.message(e.T(), n, e.name, r);
            }
        return i;
    }
    enum(e, n, r, i, a, o) {
        if ('google.protobuf.NullValue' == e[0]) return null;
        if (void 0 === n) {
            (0, s.hu)(i);
            return;
        }
        if (0 !== n || a || i) return ((0, s.hu)('number' == typeof n), (0, s.hu)(Number.isInteger(n)), o || !e[1].hasOwnProperty(n)) ? n : e[2] ? e[2] + e[1][n] : e[1][n];
    }
    message(e, n, r, i) {
        return void 0 === n ? (i.emitDefaultValues ? null : void 0) : e.internalJsonWrite(n, i);
    }
    scalar(e, n, r, l, u) {
        if (void 0 === n) {
            (0, s.hu)(l);
            return;
        }
        let c = u || l;
        switch (e) {
            case o.wx.INT32:
            case o.wx.SFIXED32:
            case o.wx.SINT32:
                if (0 === n) return c ? 0 : void 0;
                return (0, s.ug)(n), n;
            case o.wx.FIXED32:
            case o.wx.UINT32:
                if (0 === n) return c ? 0 : void 0;
                return (0, s.fp)(n), n;
            case o.wx.FLOAT:
                (0, s.E_)(n);
            case o.wx.DOUBLE:
                if (0 === n) return c ? 0 : void 0;
                if (((0, s.hu)('number' == typeof n), Number.isNaN(n))) return 'NaN';
                if (n === Number.POSITIVE_INFINITY) return 'Infinity';
                if (n === Number.NEGATIVE_INFINITY) return '-Infinity';
                return n;
            case o.wx.STRING:
                if ('' === n) return c ? '' : void 0;
                return (0, s.hu)('string' == typeof n), n;
            case o.wx.BOOL:
                if (!1 === n) return !c && void 0;
                return (0, s.hu)('boolean' == typeof n), n;
            case o.wx.UINT64:
            case o.wx.FIXED64:
                (0, s.hu)('number' == typeof n || 'string' == typeof n || 'bigint' == typeof n);
                let d = a.p.from(n);
                if (d.isZero() && !c) return;
                return d.toString();
            case o.wx.INT64:
            case o.wx.SFIXED64:
            case o.wx.SINT64:
                (0, s.hu)('number' == typeof n || 'string' == typeof n || 'bigint' == typeof n);
                let f = a.M.from(n);
                if (f.isZero() && !c) return;
                return f.toString();
            case o.wx.BYTES:
                if (((0, s.hu)(n instanceof Uint8Array), !n.byteLength)) return c ? '' : void 0;
                return (0, i.m)(n);
        }
    }
}
