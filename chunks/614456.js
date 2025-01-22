r.d(n, {
    C: function () {
        return c;
    }
});
var i = r(660284),
    a = r(581282),
    o = r(36056),
    s = r(69122),
    l = r(17146),
    u = r(929412);
class c {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (void 0 === this.fMap) for (let n of ((this.fMap = {}), null !== (e = this.info.fields) && void 0 !== e ? e : [])) (this.fMap[n.name] = n), (this.fMap[n.jsonName] = n), (this.fMap[n.localName] = n);
    }
    assert(e, n, r) {
        if (!e) {
            let e = (0, i.Z)(r);
            throw (('number' == e || 'boolean' == e) && (e = r.toString()), Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${n}`));
        }
    }
    read(e, n, r) {
        this.prepare();
        let a = [];
        for (let [s, l] of Object.entries(e)) {
            let e;
            let u = this.fMap[s];
            if (!u) {
                if (!r.ignoreUnknownFields) throw Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${s}`);
                continue;
            }
            let c = u.localName;
            if (u.oneof) {
                if (a.includes(u.oneof)) throw Error(`Multiple members of the oneof group "${u.oneof}" of ${this.info.typeName} are present in JSON.`);
                a.push(u.oneof), (e = n[u.oneof] = { oneofKind: c });
            } else e = n;
            if ('map' == u.kind) {
                if (null === l) continue;
                this.assert((0, i.b)(l), u.name, l);
                let n = e[c];
                for (let [e, i] of Object.entries(l)) {
                    let a;
                    switch ((this.assert(null !== i, u.name + ' map value', null), u.V.kind)) {
                        case 'message':
                            a = u.V.T().internalJsonRead(i, r);
                            break;
                        case 'enum':
                            if (!1 === (a = this.enum(u.V.T(), i, u.name, r.ignoreUnknownFields))) continue;
                            break;
                        case 'scalar':
                            a = this.scalar(i, u.V.T, u.V.L, u.name);
                    }
                    this.assert(void 0 !== a, u.name + ' map value', i);
                    let s = e;
                    u.K == o.wx.BOOL && (s = 'true' == s || ('false' != s && s)), (n[(s = this.scalar(s, u.K, o.pz.STRING, u.name).toString())] = a);
                }
            } else if (u.repeat) {
                if (null === l) continue;
                this.assert(Array.isArray(l), u.name, l);
                let n = e[c];
                for (let e of l) {
                    let i;
                    switch ((this.assert(null !== e, u.name, null), u.kind)) {
                        case 'message':
                            i = u.T().internalJsonRead(e, r);
                            break;
                        case 'enum':
                            if (!1 === (i = this.enum(u.T(), e, u.name, r.ignoreUnknownFields))) continue;
                            break;
                        case 'scalar':
                            i = this.scalar(e, u.T, u.L, u.name);
                    }
                    this.assert(void 0 !== i, u.name, l), n.push(i);
                }
            } else
                switch (u.kind) {
                    case 'message':
                        if (null === l && 'google.protobuf.Value' != u.T().typeName) {
                            this.assert(void 0 === u.oneof, u.name + ' (oneof member)', null);
                            continue;
                        }
                        e[c] = u.T().internalJsonRead(l, r, e[c]);
                        break;
                    case 'enum':
                        let d = this.enum(u.T(), l, u.name, r.ignoreUnknownFields);
                        if (!1 === d) continue;
                        e[c] = d;
                        break;
                    case 'scalar':
                        e[c] = this.scalar(l, u.T, u.L, u.name);
                }
        }
    }
    enum(e, n, r, i) {
        if (('google.protobuf.NullValue' == e[0] && (0, l.hu)(null === n, `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} only accepts null.`), null === n)) return 0;
        switch (typeof n) {
            case 'number':
                return (0, l.hu)(Number.isInteger(n), `Unable to parse field ${this.info.typeName}#${r}, enum can only be integral number, got ${n}.`), n;
            case 'string':
                let a = n;
                e[2] && n.substring(0, e[2].length) === e[2] && (a = n.substring(e[2].length));
                let o = e[1][a];
                if (void 0 === o && i) return !1;
                return (0, l.hu)('number' == typeof o, `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} has no value for "${n}".`), o;
        }
        (0, l.hu)(!1, `Unable to parse field ${this.info.typeName}#${r}, cannot parse enum value from ${typeof n}".`);
    }
    scalar(e, n, r, i) {
        let c;
        try {
            switch (n) {
                case o.wx.DOUBLE:
                case o.wx.FLOAT:
                    if (null === e) return 0;
                    if ('NaN' === e) return Number.NaN;
                    if ('Infinity' === e) return Number.POSITIVE_INFINITY;
                    if ('-Infinity' === e) return Number.NEGATIVE_INFINITY;
                    if ('' === e) {
                        c = 'empty string';
                        break;
                    }
                    if ('string' == typeof e && e.trim().length !== e.length) {
                        c = 'extra whitespace';
                        break;
                    }
                    if ('string' != typeof e && 'number' != typeof e) break;
                    let i = Number(e);
                    if (Number.isNaN(i)) {
                        c = 'not a number';
                        break;
                    }
                    if (!Number.isFinite(i)) {
                        c = 'too large or small';
                        break;
                    }
                    return n == o.wx.FLOAT && (0, l.E_)(i), i;
                case o.wx.INT32:
                case o.wx.FIXED32:
                case o.wx.SFIXED32:
                case o.wx.SINT32:
                case o.wx.UINT32:
                    let d;
                    if (null === e) return 0;
                    if (('number' == typeof e ? (d = e) : '' === e ? (c = 'empty string') : 'string' == typeof e && (e.trim().length !== e.length ? (c = 'extra whitespace') : (d = Number(e))), void 0 === d)) break;
                    return n == o.wx.UINT32 ? (0, l.fp)(d) : (0, l.ug)(d), d;
                case o.wx.INT64:
                case o.wx.SFIXED64:
                case o.wx.SINT64:
                    if (null === e) return (0, u._)(s.M.ZERO, r);
                    if ('number' != typeof e && 'string' != typeof e) break;
                    return (0, u._)(s.M.from(e), r);
                case o.wx.FIXED64:
                case o.wx.UINT64:
                    if (null === e) return (0, u._)(s.p.ZERO, r);
                    if ('number' != typeof e && 'string' != typeof e) break;
                    return (0, u._)(s.p.from(e), r);
                case o.wx.BOOL:
                    if (null === e) return !1;
                    if ('boolean' != typeof e) break;
                    return e;
                case o.wx.STRING:
                    if (null === e) return '';
                    if ('string' != typeof e) {
                        c = 'extra whitespace';
                        break;
                    }
                    try {
                        encodeURIComponent(e);
                    } catch (e) {
                        e = 'invalid UTF8';
                        break;
                    }
                    return e;
                case o.wx.BYTES:
                    if (null === e || '' === e) return new Uint8Array(0);
                    if ('string' != typeof e) break;
                    return (0, a.c)(e);
            }
        } catch (e) {
            c = e.message;
        }
        this.assert(!1, i + (c ? ' - ' + c : ''), e);
    }
}
