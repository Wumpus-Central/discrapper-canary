n.d(t, { C: () => u });
var i = n(660284),
    r = n(581282),
    a = n(36056),
    s = n(69122),
    o = n(17146),
    l = n(929412);
class u {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (void 0 === this.fMap) for (let t of ((this.fMap = {}), null !== (e = this.info.fields) && void 0 !== e ? e : [])) (this.fMap[t.name] = t), (this.fMap[t.jsonName] = t), (this.fMap[t.localName] = t);
    }
    assert(e, t, n) {
        if (!e) {
            let e = (0, i.Z)(n);
            throw (('number' == e || 'boolean' == e) && (e = n.toString()), Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`));
        }
    }
    read(e, t, n) {
        this.prepare();
        let r = [];
        for (let [s, o] of Object.entries(e)) {
            let e;
            let l = this.fMap[s];
            if (!l) {
                if (!n.ignoreUnknownFields) throw Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${s}`);
                continue;
            }
            let u = l.localName;
            if (l.oneof) {
                if (r.includes(l.oneof)) throw Error(`Multiple members of the oneof group "${l.oneof}" of ${this.info.typeName} are present in JSON.`);
                r.push(l.oneof), (e = t[l.oneof] = { oneofKind: u });
            } else e = t;
            if ('map' == l.kind) {
                if (null === o) continue;
                this.assert((0, i.b)(o), l.name, o);
                let t = e[u];
                for (let [e, i] of Object.entries(o)) {
                    let r;
                    switch ((this.assert(null !== i, l.name + ' map value', null), l.V.kind)) {
                        case 'message':
                            r = l.V.T().internalJsonRead(i, n);
                            break;
                        case 'enum':
                            if (!1 === (r = this.enum(l.V.T(), i, l.name, n.ignoreUnknownFields))) continue;
                            break;
                        case 'scalar':
                            r = this.scalar(i, l.V.T, l.V.L, l.name);
                    }
                    this.assert(void 0 !== r, l.name + ' map value', i);
                    let s = e;
                    l.K == a.wx.BOOL && (s = 'true' == s || ('false' != s && s)), (t[(s = this.scalar(s, l.K, a.pz.STRING, l.name).toString())] = r);
                }
            } else if (l.repeat) {
                if (null === o) continue;
                this.assert(Array.isArray(o), l.name, o);
                let t = e[u];
                for (let e of o) {
                    let i;
                    switch ((this.assert(null !== e, l.name, null), l.kind)) {
                        case 'message':
                            i = l.T().internalJsonRead(e, n);
                            break;
                        case 'enum':
                            if (!1 === (i = this.enum(l.T(), e, l.name, n.ignoreUnknownFields))) continue;
                            break;
                        case 'scalar':
                            i = this.scalar(e, l.T, l.L, l.name);
                    }
                    this.assert(void 0 !== i, l.name, o), t.push(i);
                }
            } else
                switch (l.kind) {
                    case 'message':
                        if (null === o && 'google.protobuf.Value' != l.T().typeName) {
                            this.assert(void 0 === l.oneof, l.name + ' (oneof member)', null);
                            continue;
                        }
                        e[u] = l.T().internalJsonRead(o, n, e[u]);
                        break;
                    case 'enum':
                        let c = this.enum(l.T(), o, l.name, n.ignoreUnknownFields);
                        if (!1 === c) continue;
                        e[u] = c;
                        break;
                    case 'scalar':
                        e[u] = this.scalar(o, l.T, l.L, l.name);
                }
        }
    }
    enum(e, t, n, i) {
        if (('google.protobuf.NullValue' == e[0] && (0, o.hu)(null === t, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), null === t)) return 0;
        switch (typeof t) {
            case 'number':
                return (0, o.hu)(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
            case 'string':
                let r = t;
                e[2] && t.substring(0, e[2].length) === e[2] && (r = t.substring(e[2].length));
                let a = e[1][r];
                if (void 0 === a && i) return !1;
                return (0, o.hu)('number' == typeof a, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), a;
        }
        (0, o.hu)(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`);
    }
    scalar(e, t, n, i) {
        let u;
        try {
            switch (t) {
                case a.wx.DOUBLE:
                case a.wx.FLOAT:
                    if (null === e) return 0;
                    if ('NaN' === e) return Number.NaN;
                    if ('Infinity' === e) return Number.POSITIVE_INFINITY;
                    if ('-Infinity' === e) return Number.NEGATIVE_INFINITY;
                    if ('' === e) {
                        u = 'empty string';
                        break;
                    }
                    if ('string' == typeof e && e.trim().length !== e.length) {
                        u = 'extra whitespace';
                        break;
                    }
                    if ('string' != typeof e && 'number' != typeof e) break;
                    let i = Number(e);
                    if (Number.isNaN(i)) {
                        u = 'not a number';
                        break;
                    }
                    if (!Number.isFinite(i)) {
                        u = 'too large or small';
                        break;
                    }
                    return t == a.wx.FLOAT && (0, o.E_)(i), i;
                case a.wx.INT32:
                case a.wx.FIXED32:
                case a.wx.SFIXED32:
                case a.wx.SINT32:
                case a.wx.UINT32:
                    let c;
                    if (null === e) return 0;
                    if (('number' == typeof e ? (c = e) : '' === e ? (u = 'empty string') : 'string' == typeof e && (e.trim().length !== e.length ? (u = 'extra whitespace') : (c = Number(e))), void 0 === c)) break;
                    return t == a.wx.UINT32 ? (0, o.fp)(c) : (0, o.ug)(c), c;
                case a.wx.INT64:
                case a.wx.SFIXED64:
                case a.wx.SINT64:
                    if (null === e) return (0, l._)(s.M.ZERO, n);
                    if ('number' != typeof e && 'string' != typeof e) break;
                    return (0, l._)(s.M.from(e), n);
                case a.wx.FIXED64:
                case a.wx.UINT64:
                    if (null === e) return (0, l._)(s.p.ZERO, n);
                    if ('number' != typeof e && 'string' != typeof e) break;
                    return (0, l._)(s.p.from(e), n);
                case a.wx.BOOL:
                    if (null === e) return !1;
                    if ('boolean' != typeof e) break;
                    return e;
                case a.wx.STRING:
                    if (null === e) return '';
                    if ('string' != typeof e) {
                        u = 'extra whitespace';
                        break;
                    }
                    try {
                        encodeURIComponent(e);
                    } catch (e) {
                        e = 'invalid UTF8';
                        break;
                    }
                    return e;
                case a.wx.BYTES:
                    if (null === e || '' === e) return new Uint8Array(0);
                    if ('string' != typeof e) break;
                    return (0, r.c)(e);
            }
        } catch (e) {
            u = e.message;
        }
        this.assert(!1, i + (u ? ' - ' + u : ''), e);
    }
}
